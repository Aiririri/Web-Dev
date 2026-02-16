import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() product!: Product;

  selectedImageIndex = 0;

  getStars(): number[] {
    return Array(Math.floor(this.product.rating)).fill(0);
  }

  selectImage(index: number): void {
    this.selectedImageIndex = index;
  }

  shareWhatsApp(): void {
    const url = `https://wa.me/?text=${encodeURIComponent(
      'Check out this product: ' + this.product.link
    )}`;
    window.open(url, '_blank');
  }

  shareTelegram(): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }
}
