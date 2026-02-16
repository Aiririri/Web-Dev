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
      name: 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
      description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей Этот смартфон идеально подходит для тех, кто ценит передовые технологии и безупречный дизайн. Он станет незаменимым помощником в работе, учебе и развлечениях, а также позволит вам всегда оставаться на связи.',
      price: 727335,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
    },
    {
      id: 2,
      name: 'Смартфон Samsung Galaxy S25 Ultra 5G 12 ГБ/256 ГБ черный',
      description: 'Представляем вам Samsung Galaxy S25 Ultra 5G — смартфон, который объединяет высокую производительность, передовые технологии и стильный дизайн. С этим устройством вы сможете наслаждаться качеством изображения, быстрой работой и отличной камерой. Рекомендуем использовать стилус для более удобного управления и создания заметок прямо на экране.',
      price: 575076,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pbc/p24/20120108.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd8/p24/20120109.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb5/p27/20120114.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-chernyi-133435348/?c=750000000'
    },

    
  ];
}
