BEGIN;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS items CASCADE;
DROP TABLE IF EXISTS categories CASCADE;

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
  img TEXT,
  -- add in foreign key from categories table (id)
  category_id INTEGER REFERENCES categories (id) NULL,
  -- add in foreign key from users table (id)
  user_id INTEGER REFERENCES users (id) NULL
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
INSERT INTO items (name, description, img, category_id, user_id) VALUES
('Flower pot', 'Terracotta pot (15cm diameter)', 'pot.jpg', '2', '2'),
('Lamp', 'Moodlight floorlamp (125cm tall)', 'floorlamp.jpg', '3', '2'),
('Mug', 'Mug with logos, perfect form corporate role play', 'mug.jpg', '1', '3'),
('Magazine', 'Anxy, No3', 'anxy.jpg', '5', '4'),
('Pillow case', 'Pillowcase with hours of wear and tare', 'pillow.jpg','4', '1'),
('Magazine', 'Nautilus, issues 3-14', 'nautilus.jpg','5', '1');

COMMIT;
