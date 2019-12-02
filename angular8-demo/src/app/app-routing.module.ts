import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './not-found/not-found.component';
import {CatsComponent} from './cats/cats.component';
import {DogsComponent} from './dogs/dogs.component';
import {RouteGuard} from './route.guard';
import {HelpComponent} from './help/help.component';

const routes: Routes = [
  {path: '', component: CatsComponent, canActivate: [RouteGuard]},
  {path: 'dogs', component: DogsComponent, canActivate: [RouteGuard]},
  {path: 'help', component: HelpComponent, canActivate: [RouteGuard]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
