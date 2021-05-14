SELECT * FROM Users;
SELECT * FROM Songs;


SELECT * FROM Users WHERE name LIKE '%Victor%';

SELECT Songs.*, title FROM Users As UserSongs
		JOIN Users as Users
        ON author_id = Users.id
        WHERE UserSongs.id = '${id}';
        
SELECT * FROM Songs WHERE album LIKE '%menino%';

DELETE FROM Users WHERE name = 'John Doe';

DROP TABLE Users;
DROP TABLE Songs;
DROP TABLE Genres;
DROP TABLE Playlists;