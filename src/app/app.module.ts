import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'src/app/services/core/interceptors/token-interceptor.service';
import { AuthGuardService } from 'src/app/services/core/guards/auth-guard.service';
import { AuthService } from 'src/app/services/core/auth/auth.service';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {MaterialModule} from 'src/app/shared/module/material/material.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ToasterComponent } from './components/toaster/toaster.component';

@NgModule({
  declarations: [
   AppComponent,
   PageNotFoundComponent,
   ToasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ToasterComponent
  ]
})
export class AppModule { }
