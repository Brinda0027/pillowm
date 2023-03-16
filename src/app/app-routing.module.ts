import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './pages/product/product.component';
import { PageComponent } from './pages/page/page.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [
  {
    path:'' ,component:HomeComponent
  },
  {
    path:'about' ,component:AboutComponent
  },
  {
    path:'products' ,component:ProductComponent
  },
  {
    path:'contact' ,component:ContactComponent
  },
  {
    path:'page' ,component:PageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
