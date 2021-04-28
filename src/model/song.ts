export type Song = {
  id: string;
  title: string;
  album: string;
  genre: string;
  file: string;
  postedAt: Date;
  authorId: string;
};

export type SongInputDTO = {
  title: string;
  album: string;
  genre: string;
  file: string;
  postedAt: Date;
  authorId: string;
};
