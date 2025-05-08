export interface Paiement {
    id?: number;
    montant: number;
    datePaiement: string;
    modePaiement: string;
    idCommande: number;
  }
  