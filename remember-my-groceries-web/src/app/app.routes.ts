import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailVerificationComponent } from './email-verification/email-verification.component';

export const routes: Routes = [
  { path: 'email-verification', component: EmailVerificationComponent },
  { path: '', redirectTo: '/email-verification', pathMatch: 'full' }, // default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
