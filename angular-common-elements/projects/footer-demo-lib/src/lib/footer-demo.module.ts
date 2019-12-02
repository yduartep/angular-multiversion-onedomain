import {Injector, NgModule} from '@angular/core';
import {FooterDemoComponent} from './footer-demo.component';
import {BrowserModule} from '@angular/platform-browser';
import {createCustomElement} from '@angular/elements';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [FooterDemoComponent],
  imports: [BrowserModule, FormsModule],
  entryComponents: [FooterDemoComponent]
})
export class FooterDemoModule {
  constructor(private injector: Injector) {
    const elFooter = createCustomElement(FooterDemoComponent, {injector: this.injector});
    customElements.define('ng-footer-demo', elFooter);
  }
}
