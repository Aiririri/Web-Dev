export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  categoryId: number;
  kaspiUrl: string;
  badge?: string;
}