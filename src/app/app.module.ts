import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';
import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { Routes, RouterModule } from '@angular/router';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';

const appRoutes: Routes = [
  { path: 'appareils', component: AppareilViewComponent },
  { path: 'appareils/:id', component: SingleAppareilComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AppareilViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    AppareilComponent,
    PostComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
