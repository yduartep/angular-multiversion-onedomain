import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FooterDemoLibModule} from '../../../footer-demo-lib/src/lib/footer-demo-lib.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FooterDemoLibModule
  ],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  ngDoBootstrap() {
  }
}
