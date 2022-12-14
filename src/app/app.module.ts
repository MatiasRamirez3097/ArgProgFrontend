import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { AboutComponent } from './components/about/about.component';
import { ExpComponent } from './components/exp/exp.component';

import { NgCircleProgressModule } from 'ng-circle-progress';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { FormsModule } from '@angular/forms';
import { LoginButtonComponent } from './components/buttons/login-button/login-button.component';
import { LogoutButtonComponent } from './components/buttons/logout-button/logout-button.component';
import { interceptorProvider } from './service/interceptor-service';
import { NewExpComponent } from './components/exp/new-exp.component';
import { EditExpComponent } from './components/exp/edit-exp.component';
import { EduComponent } from './components/edu/edu.component';
import { NewEduComponent } from './components/edu/new-edu.component';
import { EditEduComponent } from './components/edu/edit-edu.component';
import { HasComponent } from './components/has/has.component';
import { EditHasComponent } from './components/has/edit-has.component';
import { NewHasComponent } from './components/has/new-has.component';
import { EditAboutComponent } from './components/about/edit-about.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { GithubButtonComponent } from './components/buttons/github-button/github-button.component';
import { InstagramButtonComponent } from './components/buttons/instagram-button/instagram-button.component';
import { FacebookButtonComponent } from './components/buttons/facebook-button/facebook-button.component';
import { LinkedinButtonComponent } from './components/buttons/linkedin-button/linkedin-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LogoComponent,
        AboutComponent,
        ExpComponent,
        HomeComponent,
        LoginComponent,
        LoginButtonComponent,
        LogoutButtonComponent,
        NewExpComponent,
        EditExpComponent,
        EduComponent,
        NewEduComponent,
        EditEduComponent,
        HasComponent,
        EditHasComponent,
        NewHasComponent,
        EditAboutComponent,
        GithubButtonComponent,
        InstagramButtonComponent,
        FacebookButtonComponent,
        LinkedinButtonComponent,
        FooterComponent,
        BannerComponent,
        ProjectsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgCircleProgressModule.forRoot({}),
        HttpClientModule,
        FormsModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideStorage(() => getStorage())
    ],
    providers: [
        interceptorProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
