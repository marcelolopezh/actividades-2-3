import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './general/product/product.component';
import { UserComponent } from './general/user/user.component';
import { NotFoundComponent } from './general/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: NotFoundComponent },
  { path: 'product', component: ProductComponent },
  { path: 'user', component: UserComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
