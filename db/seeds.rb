# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# =====================================================
#             SEEDS TEXTS & IMAGES
# =====================================================
# CREATE TABLE images (id SERIAL, img VARCHAR(255);
# CREATE TABLE texts (id SERIAL, top_text VARCHAR(255), bottom_text VARCHAR(255);
#
#
# INSERT INTO texts (top_text, bottom_text) VALUES ('Best Idea', 'EVER');
# INSERT INTO texts (top_text, bottom_text) VALUES ('Cash Me Outside', 'HOW BOW DAH');
# INSERT INTO texts (top_text, bottom_text) VALUES ('Its Friday', 'YEAH!!');
# INSERT INTO texts (top_text, bottom_text) VALUES ('Is Your Name Wi-Fi?', 'Because I am Feeling a Connection');
#
# INSERT INTO images (img) VALUES ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6t6A9yx1wNpr6VqctotiU9tx754c-wkjNk5u4K7dMbzPQpWEh');
# INSERT INTO images (img) VALUES ('https://cdn.inquisitr.com/wp-content/uploads/2017/02/cash-me-outside-dr-phil-1.jpg');
# INSERT INTO images (img) VALUES ('http://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/145/2015/04/29135630/friday.jpg');
# INSERT INTO images (img) VALUES ('http://www.skylinetradeshowtips.com/wp-content/uploads/2011/06/thatguyFEATURED1.jpg');
# INSERT INTO images (img) VALUES ('https://i.imgflip.com/bul19.jpg');
# INSERT INTO images (img) VALUES ('https://i.imgflip.com/1qnnkd.jpg');
# INSERT INTO images (img) VALUES ('https://imgflip.com/s/meme/Advice-Yoda.jpg');
# INSERT INTO images (img) VALUES ('https://i.imgflip.com/1410t9.jpg');



images = Image.create(
  [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6t6A9yx1wNpr6VqctotiU9tx754c-wkjNk5u4K7dMbzPQpWEh"
    },
    {
      img: "https://cdn.inquisitr.com/wp-content/uploads/2017/02/cash-me-outside-dr-phil-1.jpg"
    },
    {
      img: "http://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/145/2015/04/29135630/friday.jpg"
    },
    {
      img: "http://www.skylinetradeshowtips.com/wp-content/uploads/2011/06/thatguyFEATURED1.jpg"
    },
    {
      img: "https://i.imgflip.com/bul19.jpg"
    },
    {
      img: "https://i.imgflip.com/1qnnkd.jpg"
    },
    {
      img: "https://imgflip.com/s/meme/Advice-Yoda.jpg"
    },
    {
      img: "https://i.imgflip.com/1410t9.jpg"
    }
  ])


texts = Text.create(
  [
    {
      top_text: "Best Idea",
      bottom_text: "EVER"
    },
    {
      top_text: "Cash Me Outside",
      bottom_text: "HOW BOW DAH"
    },
    {
      top_text: "It's Friday",
      bottom_text: "YEAH!!!"
    },
    {
      top_text: "Is Your Name Wi-Fi?",
      bottom_text: "Because I'm Feeling a Connection"
    }
  ])
