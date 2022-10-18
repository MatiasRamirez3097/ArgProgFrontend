import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { AboutComponent } from './components/about/about.component';
import { ExpComponent } from './components/exp/exp.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './components/skills/skills.component';

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

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LogoComponent,
        AboutComponent,
        ExpComponent,
        SkillsComponent,
        HomeComponent,
        LoginComponent,
        LoginButtonComponent,
        LogoutButtonComponent,
        NewExpComponent,
        EditExpComponent,
        EduComponent,
        NewEduComponent,
        EditEduComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgCircleProgressModule.forRoot({}),
        HttpClientModule,
        FormsModule
    ],
    providers: [
        interceptorProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
