import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutComponent } from './components/about/edit-about.component';
import { EditEduComponent } from './components/edu/edit-edu.component';
import { NewEduComponent } from './components/edu/new-edu.component';
import { EditExpComponent } from './components/exp/edit-exp.component';
import { NewExpComponent } from './components/exp/new-exp.component';
import { EditHasComponent } from './components/has/edit-has.component';
import { NewHasComponent } from './components/has/new-has.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'newexp', component: NewExpComponent },
    { path: 'editexp/:id', component: EditExpComponent },
    { path: 'newedu', component: NewEduComponent },
    { path: 'editedu/:id', component: EditEduComponent },
    { path: 'newskill', component: NewHasComponent },
    { path: 'editskill/:id', component: EditHasComponent },
    { path: 'editpersona/:id', component: EditAboutComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),

    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
