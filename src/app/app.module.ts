import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { createCustomElement } from '@angular/elements';
import { HelloWorldnpmComponent } from './hello-worldnpm/hello-worldnpm.component';
import {APP_BASE_HREF} from '@angular/common';
@NgModule({
  declarations: [
    HelloWorldComponent,
    HelloWorldnpmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [HelloWorldComponent],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppModule {
  constructor(injector: Injector) {
    const custom = createCustomElement(HelloWorldComponent, { injector });
    customElements.define('app-hello-world', custom);
  }

  ngDoBootstrap() {}
}
