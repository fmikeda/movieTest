import { Component } from "@angular/core";
import { MoviesService } from "./services/movies.service";
import { MovieModel } from "./models/movie-model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "app";

  itemClicked(movie) {}
}
