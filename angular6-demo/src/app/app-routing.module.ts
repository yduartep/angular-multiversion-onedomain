import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './not-found/not-found.component';
import {DogsComponent} from './dogs/dogs.component';
import {CatsComponent} from './cats/cats.component';

const routes: Routes = [
  {path: '', redirectTo: '/dogs', pathMatch: 'full'},
  {
    path: 'dogs',
    component: DogsComponent
  },
  {
    path: 'cats',
    component: CatsComponent
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
