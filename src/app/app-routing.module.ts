import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'collections',loadChildren:()=>import('./collections/collections.module').then(c=>c.CollectionsModule)},
  {path:'elements',loadChildren:()=> import('./elements/elements.module').then(m=>m.ELementsModule)},
  {path:'views',loadChildren:()=>import('./views/views.module').then(v=>v.ViewsModule)},
  {path:'mods',loadChildren:()=>import('./mods/mods.module').then(mod=>mod.ModsModule)},
  {path:'',component:HomeComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
