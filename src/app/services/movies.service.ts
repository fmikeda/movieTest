import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MoviesService {
  api_key = "api_key=bd272efeed8d9cc0d0f7e378d6170fb8";
  base_path = "https://api.themoviedb.org/3";
  movies_popular_path = `${this.base_path}/movie/popular?${this.api_key}`;
  movie_detail_path = `${this.base_path}/movie/`;

  constructor(private http: HttpClient) {}

  getMovies() {
    return new Promise((resolve, reject) => {
      this.http.get(this.movies_popular_path).subscribe(
        data => {
          console.log(data);
          resolve(data);
        },
        err => {
          console.log(err);
          reject(err);
        }
      );
    });
  }

  getMovieDetail(id) {
    return new Promise((resolve, reject) => {
      this.http.get(this.movie_detail_path + id + "?" + this.api_key).subscribe(
        data => {
          console.log(data);
          resolve(data);
        },
        err => {
          console.log(err);
          reject(err);
        }
      );
    });
  }
}
