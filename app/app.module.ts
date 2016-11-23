import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HeroListComponent } from './Hero-List/hero-list.component';
import { LoginComponent } from './Login/login.component';
import { RegisterComponent } from './Register/register.component';
import { HeroDetailsComponent } from './Hero-Details/hero-details.component';
import { HeroUpdateComponent } from './Hero-Update/hero-update.component';
import { CrisisListComponent } from './Crisis-List/crisis-list.component';
import { CrisisDetailsComponent } from './Crisis-Details/crisis-details.component';
import { PageNotFoundComponent } from './Page-Not-Found/page-not-found.component';
import { LandingNavigation } from './shared/Landing-Navigation/landing-navigation.component';
import { ProfileComponent } from './Profile/profile.component';
import { Navigation } from './shared/Navigation/navigation.component';
import { Footer } from './shared/Footer/footer.component';
import { MDL } from './Directives/MaterialDesignLiteUpgradeElement';
import { HeroFilterPipe } from './Hero-List/hero-list.pipe';
import { AuthGuard } from './Services/AuthGuard/auth-guard.service';
import { SessionService } from './Services/session.service';


const appRoutes: Routes = [
  { path: 'hero/:id', component: HeroDetailsComponent },
  { path: 'updateHero/:id', component: HeroUpdateComponent },
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'crisis/:id', component: CrisisDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'heroes', component: HeroListComponent, canActivate: [AuthGuard]},
  { path: '', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports:      [
    HttpModule,
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroDetailsComponent,
    HeroUpdateComponent,
    CrisisListComponent,
    CrisisDetailsComponent,
    PageNotFoundComponent,
    Navigation,
    Footer,
    MDL,
    HeroFilterPipe,
    LoginComponent,
    RegisterComponent,
    LandingNavigation,
    ProfileComponent
    
  ],
  providers:[AuthGuard, SessionService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
