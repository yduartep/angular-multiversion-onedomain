import {Injector, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HeaderDemoComponent} from './header-demo.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [HeaderDemoComponent],
  imports: [BrowserModule, FormsModule],
  entryComponents: [HeaderDemoComponent]
})
export class HeaderDemoModule {
  constructor(private injector: Injector) {
    const elHeader = createCustomElement(HeaderDemoComponent, {injector: this.injector});
    customElements.define('ng-header-demo', elHeader);
  }
}
