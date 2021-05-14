SELECT * FROM Users;
SELECT * FROM Songs;

DELETE FROM Users WHERE name = 'John Doe';
DROP TABLE Users;
DROP TABLE Songs;

SELECT * FROM Users WHERE name LIKE '%Victor%';

SELECT Songs.*, title FROM Users As UserSongs
		JOIN Users as Users
        ON author_id = Users.id
        WHERE UserSongs.id = '${id}';
        
SELECT * FROM Songs WHERE album LIKE '%menino%';

CREATE TABLE IF NOT EXISTS Users (
  id VARCHAR(64) NOT NULL PRIMARY KEY,
  name VARCHAR(64) NOT NULL,
  email VARCHAR(64) NOT NULL UNIQUE,
  nickname VARCHAR(32) NOT NULL UNIQUE,
  password VARCHAR(64) NOT NULL
);

CREATE TABLE IF NOT EXISTS Songs (
  id VARCHAR(64) NOT NULL PRIMARY KEY,
  title VARCHAR(64) NOT NULL,
  album VARCHAR(64) NOT NULL,
  genre VARCHAR(32) NOT NULL,
  file VARCHAR(100000) NOT NULL,
  posted_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  author_id VARCHAR(64),
  FOREIGN KEY (author_id) REFERENCES Users(id)
);

CREATE TABLE IF NOT EXISTS Playlists (
	id VARCHAR(64) NOT NULL PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    subtitle VARCHAR(64) NOT NULL,
    image VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    song_id VARCHAR(64),
    author_id VARCHAR(64),
    FOREIGN KEY (song_id) REFERENCES Songs(id),
    FOREIGN KEY (author_id) REFERENCES Users(id)
);