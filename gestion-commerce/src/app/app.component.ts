import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProduitComponent } from "./components/produit/produit.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProduitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gestion-commerce';
}
