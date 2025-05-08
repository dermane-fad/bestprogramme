export interface LigneCommande {
    id?: number;
    nomProduit: string;
    quantite: string;
    prixUnitaire: string;
    totalLigne: string;
    commandeId: number;
    produitId: number;
    remiseId: number;
  }
  