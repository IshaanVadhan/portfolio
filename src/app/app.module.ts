import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgIconsModule } from '@ng-icons/core';
import {
  bootstrapCaretRightFill,
  bootstrapEnvelopeAtFill,
  bootstrapFacebook,
  bootstrapGeoAltFill,
  bootstrapGithub,
  bootstrapInstagram,
  bootstrapLinkedin,
  bootstrapList,
  bootstrapChatRightDotsFill,
  bootstrapShareFill,
  bootstrapTelephoneOutboundFill,
  bootstrapX,
} from '@ng-icons/bootstrap-icons';
import { AboutComponent } from './about/about.component';
import { EmptyComponent } from './empty/empty.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EmptyComponent,
    ResumeComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({
      bootstrapLinkedin,
      bootstrapGithub,
      bootstrapInstagram,
      bootstrapFacebook,
      bootstrapList,
      bootstrapX,
      bootstrapCaretRightFill,
      bootstrapGeoAltFill,
      bootstrapShareFill,
      bootstrapEnvelopeAtFill,
      bootstrapTelephoneOutboundFill,
      bootstrapChatRightDotsFill,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
