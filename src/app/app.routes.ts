import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { HomeComponent } from './home/home.component';
// import { LayoutOneComponent } from './layout-one/layout-one.component';
// import { LayoutTwoComponent } from './layout-two/layout-two.component';

export const routes: Routes = [
  //   { path: 'home', component: HomeComponent },
  //   { path: 'layout-one', component: LayoutOneComponent },
  //   { path: 'layout-two', component: LayoutTwoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FontAwesomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
