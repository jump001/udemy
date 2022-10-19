import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  NgbAlertModule,
  NgbModalConfig,
  NgbModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbPaginationModule,
    NgbModule,
    NgbAlertModule,
  ],
  providers: [NgbModalConfig],
  bootstrap: [AppComponent],
})
export class AppModule {}
