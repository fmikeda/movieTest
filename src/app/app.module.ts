import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MoviesService } from "./services/movies.service";
import { MoviesPageComponent } from "./pages/movies-page/movies-page.component";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { MovieCardComponent } from "./components/movie-card/movie-card.component";
import { MovieDetailComponent } from "./pages/movie-detail/movie-detail.component";

const appRoutes: Routes = [
  //{ path: 'crisis-center', component: CrisisListComponent },
  //{ path: 'hero/:id',      component: HeroDetailComponent },
  //{
  //    path: 'heroes',
  //component: HeroListComponent,
  //data: { title: 'Heroes List' }
  //},
  {
    path: "",
    component: MoviesPageComponent,
    pathMatch: "full"
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    pathMatch: "full"
  },
  {
    path: "details/:id",
    component: MovieDetailComponent,
    pathMatch: "full"
  }

  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesPageComponent,
    DashboardComponent,
    MovieCardComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
