import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"dashboard",
    loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path:"Marque",
    loadChildren:()=>import('./marque/marque.module').then(m=>m.MarqueModule)
  },
  {
    path:"Localite",
    loadChildren:()=>import('./localite/localite.module').then(m=>m.LocaliteModule)
  },
  {
    path:"DateDim",
    loadChildren:()=>import('./date-dim/date-dim.module').then(m=>m.DateDimModule)
  },
  {
    path:"Consommation",
    loadChildren:()=>import('./consommation/consommation.module').then(m=>m.ConsommationModule)
  },
  {
    path:"Caracteristique",
    loadChildren:()=>import('./caracteristique/caracteristique.module').then(m=>m.CaracteristiqueModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
