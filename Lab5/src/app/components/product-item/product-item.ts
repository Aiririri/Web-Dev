import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css']
})
export class ProductItemComponent {
  @Input() product!: Product;

  get stars(): number[] {
    return Array(5).fill(0).map((_, i) => i + 1);
  }

  get formattedPrice(): string {
    return this.product.price.toLocaleString('ru-RU');
  }

  get kaspiUrl(): string {
    return this.product.kaspiUrl;
  }

  get whatsappShareUrl(): string {
    const text = encodeURIComponent(`${this.product.name} — ${this.formattedPrice} ₸\n${this.product.kaspiUrl}`);
    return `https://wa.me/?text=${text}`;
  }

  get telegramShareUrl(): string {
    const text = encodeURIComponent(`${this.product.name} — ${this.formattedPrice} ₸`);
    const url = encodeURIComponent(this.product.kaspiUrl);
    return `https://t.me/share/url?url=${url}&text=${text}`;
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = 'https://via.placeholder.com/300x300/f0f0f0/999?text=Фото';
  }
}