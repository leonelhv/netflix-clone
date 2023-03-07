import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NetflixComponent } from './netflix.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { DetailsComponent } from './pages/details/details.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SearchComponent } from './pages/search/search.component';
import { SeriesComponent } from './pages/series/series.component';

const routes: Routes = [
  {
    path: '',
    component: NetflixComponent,
    children: [
      {
        path: 'browse',
        component: BrowseComponent,
      },
      {
        path: 'details/:id',
        component: DetailsComponent,
      },
      {
        path: 'movies',
        component: MoviesComponent,
      },
      {
        path: 'series',
        component: SeriesComponent,
      },{
        path:'search/:query',
        component:SearchComponent
      },
      {
        path: '**',
        redirectTo: 'browse',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NetflixRoutingModule {}
