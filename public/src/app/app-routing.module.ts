// import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { MaininfoComponent } from './maininfo/maininfo.component';
import { PetinfoComponent } from './petinfo/petinfo.component';

const routes: Routes = [
  // { path: '', red:'/pets' },
  { path: 'pets', component: MaininfoComponent},
    {path:'pets/new', component:CreateComponent},
    {path:'pets/:id', component:PetinfoComponent},
    {path:'pets/:id/edit', component:UpdateComponent},
    
  // { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
