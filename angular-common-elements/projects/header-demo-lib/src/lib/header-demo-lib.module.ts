import {Injector, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {createCustomElement} from '@angular/elements';
import {HeaderDemoLibComponent} from './header-demo-lib.component';

@NgModule({
  declarations: [HeaderDemoLibComponent],
  imports: [BrowserModule, FormsModule],
  entryComponents: [HeaderDemoLibComponent]
})
export class HeaderDemoLibModule {
  constructor(private injector: Injector) {
    const elHeader = createCustomElement(HeaderDemoLibComponent, {injector: this.injector});
    customElements.define('ng-header-demo', elHeader);
  }
}
