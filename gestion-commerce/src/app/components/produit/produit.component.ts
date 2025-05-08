import { Component, OnInit } from '@angular/core';
import { Produit } from '../../models/produit.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProduitService } from '../../services/produit.service';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Importation de HttpClientModule
import { provideClientHydration } from '@angular/platform-browser';
import { ApplicationConfig } from '@angular/core';
import { Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {
  produits: Produit[] = [];
  formProduit: Produit = this.initProduit();

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.getProduits();
  }

  getProduits(): void {
    this.produitService.getAll().subscribe({
      next: (data) => this.produits = data,
      error: (err) => console.error('Erreur chargement produits :', err)
    });
  }

  onSubmit(): void {
    if (this.formProduit.id) {
      this.produitService.update(this.formProduit.id, this.formProduit).subscribe(() => {
        this.getProduits();
        this.resetForm();
      });
    } else {
      this.produitService.create(this.formProduit).subscribe(() => {
        this.getProduits();
        this.resetForm();
      });
    }
  }

  editProduit(p: Produit): void {
    this.formProduit = { ...p };
  }

  deleteProduit(id: number): void {
    if (confirm("Supprimer ce produit ?")) {
      this.produitService.delete(id).subscribe(() => this.getProduits());
    }
  }

  resetForm(): void {
    this.formProduit = this.initProduit();
  }

  private initProduit(): Produit {
    return {
      libelle: '',
      description: '',
      prix: "0",
      quantiteStock: "0",
      dateAjout: new Date().toISOString(),
      categorieId: 0
    };
  }
}
