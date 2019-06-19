import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { SearchProjectComponent } from './search-project/search-project.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { LogInComponent } from './log-in/log-in.component';
import { EditProjectComponent } from './viewapp/edit-project/edit-project.component';
import { ViewCommentsComponent } from './viewapp/view-comments/view-comments.component';
import { LeaveCommentComponent } from './viewapp/leave-comment/leave-comment.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AllProjectsComponent,
    ViewProjectComponent,
    SearchProjectComponent,
    AddProjectComponent,
    LogInComponent,
    EditProjectComponent,
    ViewCommentsComponent,
    LeaveCommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
