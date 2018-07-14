import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MovieModel } from "../../models/movie-model";
import { Router } from "@angular/router";

@Component({
  selector: "app-movie-card",
  templateUrl: "./movie-card.component.html",
  styleUrls: ["./movie-card.component.scss"]
})
export class MovieCardComponent implements OnInit {
  @Input() movie: MovieModel;

  @Output() movieClicked = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit() {}

  itemClicked(movie) {
    this.router.navigate(["/details", movie.id]);
    //this.movieClicked.emit(movie);
  }
}
