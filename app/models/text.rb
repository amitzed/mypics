class Text

    # ==================================================
  #                      SET UP
  # ==================================================

  # add attribute readers for instance access
    attr_reader :id, :top_text, :bottom_text, :staff

    # connect to postgres
    # DB = PG.connect(host: "localhost", port: 5432, dbname: 'mymemes_development')

    if(ENV['DATABASE_URL'])
        uri = URI.parse(ENV['DATABASE_URL'])
        DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
    else
        DB = PG.connect(host: "localhost", port: 5432, dbname: 'mymemes_development')
    end

    # initialize options hash
    def initialize(opts = {})
        @id = opts["id"].to_i
        @top_text = opts["top_text"]
        @bottom_text = opts["bottom_text"]
        if opts["staff"]
          @staff = opts["staff"]
        end
    end

    # ==================================================
    #                      ROUTES
    # ==================================================

    # get all
    def self.all
      results = DB.exec(
          <<-SQL
              SELECT
                texts.*,
                images.id AS image_id,
                images.img
              FROM texts
              LEFT JOIN images
              ON texts.id = images.text_id
          SQL
      )
      texts = []
      current_text_id = nil
      results.each do |result|
          if result["id"] != current_text_id
              current_text_id = result["id"]
              texts.push(
                  Text.new({
                      "id" => result["id"],
                      "top_text" => result["top_text"],
                      "bottom_text" => result["bottom_text"],
                      "staff" => []
                  })
              )
          end
          if result["image_id"]
            p result
              new_image = Image.new(
                {
                  "id" => result["image_id"],
                  "img" => result["img"],
                }
            )
              texts.last.staff.push(new_image)
          end
      end
      return texts
    end

    # get one by id
    def self.find(id)
        results = DB.exec(
            <<-SQL
                SELECT
                    texts.*,
                    images.id AS image_id,
                    images.img
                FROM texts
                LEFT JOIN images
                ON texts.id = images.text_id
                WHERE texts.id=#{id};
            SQL
        )
        staff = []
        results.each do |result|
            if result["image_id"]
                staff.push Image.new(
                  {
                    "id" => result["id"],
                    "img" => result["img"],
                  }
              )
            end
        end
        return Text.new({
            "id" => results.first["id"],
            "top_text" => results.first["top_text"],
            "bottom_text" => results.first["bottom_text"],
            "staff" => staff
        })
    end

    # create one
    def self.create(opts={})
        results = DB.exec(
            <<-SQL
                INSERT INTO texts (top_text, bottom_text)
                VALUES ( '#{opts["top_text"]}', '#{opts["bottom_text"]}' )
                RETURNING id, top_text, bottom_text;
            SQL
        )
        return Text.new(results.first)
    end

    # delete one by id
    def self.delete(id)
        results = DB.exec("DELETE FROM texts WHERE id=#{id};")
        return { deleted: true }
    end

    # update one by id
    def self.update(id, opts={})
        results = DB.exec(
            <<-SQL
                UPDATE texts
                SET top_text='#{opts["top_text"]}', bottom_text='#{opts["bottom_text"]}'
                WHERE id=#{id}
                RETURNING id, top_text, bottom_text;
            SQL
        )
        return Text.new(results.first)
    end

end
