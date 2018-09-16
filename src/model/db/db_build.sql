BEGIN;

DROP TABLE IF EXISTS users CASCADE;
DROP SEQUENCE IF EXISTS users_id_seq CASCADE;
DROP TABLE IF EXISTS items CASCADE;
DROP SEQUENCE IF EXISTS items_id_seq CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP SEQUENCE IF EXISTS categories_id_seq CASCADE;
DROP TABLE IF EXISTS images CASCADE;
DROP SEQUENCE IF EXISTS images_id_seq CASCADE;

-- create table users to generate an id for each email
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) UNIQUE NOT NULL
);

-- create table category to generate an id for each category
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  type TEXT NOT NULL
);

-- create table items to collect information about each of the items
CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  -- add in foreign key from categories table (id)
  category_id INTEGER REFERENCES categories (id) NULL,
  -- add in foreign key from users table (id)
  user_id INTEGER REFERENCES users (id) NULL
);

-- create table image to add a collection of photos to each item
CREATE TABLE images (
  id SERIAL PRIMARY KEY,
  img TEXT NOT NULL,
  position SERIAL NOT NULL,
  -- add in foreign key from items table (id)
  item_id INTEGER REFERENCES items (id) NOT NULL
);

-- dummy content for users table
INSERT INTO users (name, email) VALUES
('Apple','apple@apple.com'),
('Banana','banana@banana.me'),
('Veron','veron@lai.com'),
('Frank','frank@awesome.com'),
('Zef','zef@friend.com');

-- dummy content for categories table
INSERT INTO categories (type) VALUES
('Kitchen'),
('Garden'),
('Livingroom'),
('Bedroom'),
('Litterature');

-- dummy content for items table
INSERT INTO items (name, description, category_id, user_id) VALUES
('Flower pot', 'Terracotta pot (15cm diameter)', 2, 2),
('Lamp', 'Moodlight floorlamp (125cm tall)', 3, 2),
('Mug', 'Mug with logos, perfect form corporate role play', 1, 3),
('Magazine', 'Anxy, No3', 5, 4),
('Pillow case', 'Pillowcase with hours of wear and tare',4, 1),
('Magazine', 'Nautilus, issues 3-14',5, 1);

-- dummy content for images table
INSERT INTO images (img, position, item_id) VALUES
('pot1.jpg', 1, 1),
('pot2.jpg', 2, 1),
('pot3.jpg', 3, 1),
('floorlamp.jpg', 1, 2),
('floorlamp2.jpg', 2, 2),
('floorlamp3.jpg', 3, 2),
('mug1.jpg', 1, 3),
('mug2.jpg', 2, 3),
('anxy1.jpg', 1, 4),
('anxy2.jpg', 2, 4),
('pillow1.jpg', 1, 5),
('nautilus1.jpg', 1, 6),
('nautilus2.jpg', 2, 6);

COMMIT;
