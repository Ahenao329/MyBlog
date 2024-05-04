import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound/nopagefound.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  // { pathMatch: 'full'},
    { path: '', component: HomeComponent, pathMatch: 'full' }, // Ruta para la página principal (AppComponent)
{path: '**', component: NopagefoundComponent},
  // {path: 'nopagefound', component: NopagefoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
