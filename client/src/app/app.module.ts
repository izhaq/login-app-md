import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './containers/login/login.component';
import { SectionComponent } from './components/section/section.component';
import { NavigationBarComponent } from './containers/navigation-bar/navigation-bar.component';
import { TableComponent } from './components/table/table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {ApiInterceptor} from './base/auth-base/api.interceptor';
import {UsersComponent} from './containers/users/users.component';
import {SignupComponent} from './containers/signup/signup.component';
import {DashboardComponent} from './containers/dashboard/dashboard.component';
import {appEffects} from './store/effects.main';
import {appReducers} from './store/reducers.main';
import { LoadingBarModule } from './base/loading-bar/loading-bar.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    SignupComponent,
    SectionComponent,
    NavigationBarComponent,
    TableComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    LoadingBarModule,
    StoreModule.forRoot( appReducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot(appEffects)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faUser);
  }
}
