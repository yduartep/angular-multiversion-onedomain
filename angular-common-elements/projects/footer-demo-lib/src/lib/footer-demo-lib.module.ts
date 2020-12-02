import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {createCustomElement} from '@angular/elements';
import {FormsModule} from '@angular/forms';
import {FooterDemoLibComponent} from './footer-demo-lib.component';

@NgModule({
  declarations: [FooterDemoLibComponent],
  imports: [BrowserModule, FormsModule],
  entryComponents: [FooterDemoLibComponent]
})
export class FooterDemoLibModule {
  constructor(private injector: Injector) {
    const elFooter = createCustomElement(FooterDemoLibComponent, {injector: this.injector});
    customElements.define('ng-footer-demo', elFooter);
  }
}
