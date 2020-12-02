import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {HeaderDemoLibModule} from '../../../header-demo-lib/src/lib/header-demo-lib.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HeaderDemoLibModule
  ],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  ngDoBootstrap() {
  }
}
