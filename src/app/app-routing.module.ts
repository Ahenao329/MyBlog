import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound/nopagefound.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' }, // Ruta para la página principal (AppComponent)
    {path: '**', component: NopagefoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
