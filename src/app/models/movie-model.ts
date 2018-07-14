export class MovieModel {
  id: string;
  overview: string;
  original_title: string;
  poster_path: string;
  generes: Array<string>;

  get img_url(): string {
    console.log(this.poster_path);
    return "https://image.tmdb.org/t/p/w500/" + this.poster_path;
  }
}
