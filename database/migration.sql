DROP TABLE IF EXISTS life_entries;

-- create TABLE
CREATE TABLE life_entries (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  entry TEXT,
  image VARCHAR(255),
  age INTEGER,
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

-- create search for future
CREATE INDEX on life_entries(age);
CREATE INDEX on life_entries(title);
CREATE INDEX on life_entries(date_created);
