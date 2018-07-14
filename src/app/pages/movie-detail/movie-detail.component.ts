import { Component, OnInit, Input } from "@angular/core";
import { MovieModel } from "../../models/movie-model";
import { MoviesService } from "../../services/movies.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.scss"]
})
export class MovieDetailComponent implements OnInit {
  id: string;
  movie: MovieModel;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      this.moviesService.getMovieDetail(this.id).then(data => {
        const response = data as any;
        this.movie = new MovieModel();
        this.movie.id = response.id;
        this.movie.original_title = response.original_title;
        this.movie.overview = response.overview;
        this.movie.poster_path = response.poster_path;
        this.movie.generes = response.genres.map(item => {
          return item.name;
        });
      });
      console.log(this.id);
    });
  }

  ngOnInit() {}
}
