class Image

# ==================================================
    #                      SET UP
    # ==================================================

    # add attribute readers for instance access
    attr_reader :id, :img
 
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
        @img = opts["img"]
        #if text is in opts hash, show it
        if opts["text"]
          @text_id = opts["text"]
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
                  images.*,
                  texts.top_text,
                  texts.bottom_text
              FROM images
              LEFT JOIN texts
                  ON images.text_id = texts.id
          SQL
      )
      return results.map do |result|
            if result["text_id"]
                text = Text.new(
                    {
                        "id" => result["text_id"],
                        "top_text" => result["top_text"],
                        "bottom_text" => result["bottom_text"]
                    }
                )
            else
                text = nil
            end
            Image.new(
                {
                    "id" => result["id"],
                    "img" => result["img"],
                }
            )
        end
    end

    # get one by id
    def self.find(id)
        results = DB.exec(
            <<-SQL
                SELECT
                    images.*,
                    texts.top_text,
                    texts.bottom_text
                FROM images
                LEFT JOIN texts
                    ON images.text_id = texts.id
                WHERE images.id=#{id};
            SQL
        )
        result = results.first
        if result["text_id"]
            text = Text.new(
                {
                    "id" => result["text_id"],
                    "top_text" => result["top_text"],
                    "bottom_text" => result["bottom_text"]
                }
            )
        else
            text = nil
        end
        image =  Image.new(
            {
              "id" => result["id"],
              "img" => result["img"],
            }
        )
        return image
    end

    # create one
    def self.create(opts={})
      results = DB.exec(
          <<-SQL
              INSERT INTO images (img, text_id)
              VALUES (
                 '#{opts["img"]}',
                #{opts["text_id"] ? opts["text_id"] : "NULL"} )
              RETURNING id, img, text_id;
          SQL
      )
      return Image.new(results.first)
    end

    # delete one (by id)
    def self.delete(id)
      results = DB.exec("DELETE FROM images WHERE id=#{id};")
      return { deleted: true }
    end

    # update one (by id)
    def self.update(id, opts={})
      results = DB.exec(
          <<-SQL
              UPDATE images
              SET
               img='#{opts["img"]}',
               text_id=#{opts["text_id"] ? opts["text_id"] : "NULL"}
              WHERE id=#{id}
              RETURNING id, img, text_id;
          SQL
      )
      return Image.new(results.first)
    end

    # update text image belongs to
    def self.setText(image_id, text)
    results = DB.exec(
        <<-SQL
            UPDATE images
            SET text_id = #{text.id}
            WHERE id = #{image_id}
            RETURNING id, img;
        SQL
    )
    return Image.new(results.first)
  end

end
