import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BaselinerComponent} from "./pages/baseliner/baseliner.component";
import {RecipeComponent} from "./pages/baseliner/recipe/recipe.component";
import {ReportComponent} from "./pages/baseliner/report/report.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component:HomeComponent },
  { path: 'baseliner', component: BaselinerComponent, children: [
      {path: 'recipe', component: RecipeComponent},
      {path:'report', component: ReportComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
