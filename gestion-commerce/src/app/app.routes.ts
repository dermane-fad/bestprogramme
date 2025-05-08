import { Routes } from '@angular/router';
import { ProduitComponent } from './components/produit/produit.component';

export const routes: Routes = [
  { path: '', redirectTo: 'produits', pathMatch: 'full' },
  { path: 'produits', component: ProduitComponent }
];
