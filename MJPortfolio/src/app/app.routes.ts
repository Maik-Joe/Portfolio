import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LegalnoticeComponent } from './legalnotice/legalnotice.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent},
    { path: 'legalnotice', component: LegalnoticeComponent}
];
