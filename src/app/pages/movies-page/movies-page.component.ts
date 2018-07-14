import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MoviesService } from "../../services/movies.service";
import { MovieModel } from "../../models/movie-model";

@Component({
  selector: "app-movies-page",
  templateUrl: "./movies-page.component.html",
  styleUrls: ["./movies-page.component.scss"]
})
export class MoviesPageComponent implements OnInit {
  movies: Array<MovieModel> = [];
  loading = true;

  @Input() perpage: number;
  @Input() pagenumber: number;

  ngOnInit() {}

  constructor(private moviesService: MoviesService) {
    this.moviesService.getMovies().then(data => {
      const response = data as any;
      this.loading = false;
      this.movies = response.results.map(item => {
        const moviemodel = new MovieModel();
        moviemodel.id = item.id;
        moviemodel.original_title = item.original_title;
        moviemodel.overview = item.overview;
        moviemodel.poster_path = item.poster_path;
        return moviemodel;
      });
    });
  }
}
