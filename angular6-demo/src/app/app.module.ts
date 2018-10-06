import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CommonModule, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './not-found/not-found.component';
import {CatsComponent} from './cats/cats.component';
import {CatsService} from './cats/cats.service';
import {FooterComponent} from './footer/footer.component';
import {VersionComponent} from './version/version.component';
import {AppRoutingModule} from './app-routing.module';
import {DogsService} from './dogs/dogs.service';
import {DogsComponent} from './dogs/dogs.component';
import {RouteGuard} from './route.guard';

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        CatsComponent,
        DogsComponent,
        FooterComponent,
        VersionComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AppRoutingModule
    ],
    providers: [
        {provide: LocationStrategy, useClass: PathLocationStrategy},
        RouteGuard,
        CatsService,
        DogsService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule {
}
