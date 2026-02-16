import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 128GB',
      description: 'Latest Apple smartphone with A16 Bionic chip and improved camera system. Powerful and efficient.',
      price: 479990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0a/h89/85438792183838.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h0a/h89/85438792183838.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h90/85438792216510.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h9c/h89/85438792249278.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-black-112345678/'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23',
      description: 'Flagship Android smartphone with Snapdragon processor and stunning AMOLED display.',
      price: 389990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h56/h12/83500000000000.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h56/h12/83500000000000.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h78/h13/83500000000001.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h90/h14/83500000000002.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-256gb-112345679/'
    },

    
  ];
}
