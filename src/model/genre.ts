export interface Genre {
  id: string;
  name: string;
  songId?: string;
}

export interface GenreDTO {
  name: string;
  songId?: string;
}
