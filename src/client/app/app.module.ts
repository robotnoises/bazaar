import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Http, HttpModule, XHRBackend, BaseRequestOptions} from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { MarketplaceModule } from './marketplace/marketplace.module';
import { ItemModule } from './item/item.module';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import { UtilitiesModule } from './utilities/utilities.module';
import { SearchModule } from './search/search.module';

import { HttpExtension } from './utilities/index';

@NgModule({
  imports: [
    BrowserModule, 
    HttpModule, 
    RouterModule.forRoot(routes), 
    AboutModule, 
    HomeModule, 
    MarketplaceModule, 
    ItemModule, 
    SharedModule.forRoot(), 
    LoginModule,
    UtilitiesModule,
    SearchModule
  ],
  declarations: [AppComponent],
  providers: [
    {
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
    }, 
    {
      provide: Http,
      useClass: HttpExtension,
      //useFactory: (backend: XHRBackend) => new HttpExtension(backend),
      deps: [XHRBackend]
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
