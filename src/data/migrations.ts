import connection from '../connection';

const migrations = async () => {
  const createUserTable = await connection.raw(`
    CREATE TABLE Users (
      id VARCHAR(64) NOT NULL PRIMARY KEY,
      name VARCHAR(64) NOT NULL,
      email VARCHAR(64) NOT NULL UNIQUE,
      nickname VARCHAR(32) NOT NULL UNIQUE,
      password VARCHAR(64) NOT NULL
    );
  `);
  const createSongTable = await connection.raw(`
    CREATE TABLE Songs (
      id VARCHAR(64) NOT NULL PRIMARY KEY,
      title VARCHAR(64) NOT NULL,
      posted_at DATE NOT NULL,
      album VARCHAR(64) NOT NULL,
      genre VARCHAR(32) NOT NULL,
      author_id VARCHAR(64),
      FOREIGN KEY (author_id) REFERENCES Users(id)
    );
  `);
  const createPlaylistTable = await connection.raw(`
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
  `);
  const createGenreTable = await connection.raw(`
    CREATE TABLE Genres (
      id VARCHAR(64) NOT NULL PRIMARY KEY,
      name VARCHAR(64) NOT NULL
    );
  `);
  return Promise.all([
    createUserTable,
    createSongTable,
    createGenreTable,
    createPlaylistTable,
  ]);
};

migrations()
  .then((res: any) => {
    console.info('tabelas criadas', res);
  })
  .catch((err) => {
    console.error('erro na criação das tabelas', err);
  });
