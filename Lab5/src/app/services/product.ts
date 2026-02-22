import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getCategories(): Category[] {
    return [
      { id: 1, name: 'Смартфоны', icon: '📱' },
      { id: 2, name: 'Ноутбуки', icon: '💻' },
      { id: 3, name: 'Наушники', icon: '🎧' },
      { id: 4, name: 'Планшеты', icon: '📟' }
    ];
  }

  getProducts(): Product[] {
    return [
      {
        id: 1,
        name: 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
        price: 727335,
        rating: 5,
        reviewCount: 124,
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
        categoryId: 1,
        kaspiUrl: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000',
        badge: 'Хит продаж'
      },
      {
        id: 2,
        name: 'Смартфон Samsung Galaxy S25 Ultra 5G 12 ГБ/256 ГБ черный',
        price: 575076,
        rating: 4,
        reviewCount: 89,
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium',
        categoryId: 1,
        kaspiUrl: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-chernyi-133435348/?c=750000000',
        badge: 'Новинка'
      },
      {
        id: 3,
        name: 'Ноутбук Apple MacBook Pro 16 2024 16.2" / 24 Гб / SSD 512 Гб / macOS / MX2X3',
        price: 1250000,
        rating: 5,
        reviewCount: 56,
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/pa1/pce/15484955.jpg?format=gallery-medium',
        categoryId: 2,
        kaspiUrl: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2024-16-2-24-gb-ssd-512-gb-macos-mx2x3-137245155/?c=750000000',
        badge: 'Топ выбор'
      },
      {
        id: 4,
        name: 'Наушники Sony WH-1000XM5 черные',
        price: 134999,
        rating: 5,
        reviewCount: 203,
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
        categoryId: 3,
        kaspiUrl: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000',
        badge: 'Популярное'
      },
      {
        id: 5,
        name: 'Планшет Apple iPad Pro 13 2024 Wi-Fi 13 дюйм 8 Гб/256 Гб черный',
        price: 728586,
        rating: 5,
        reviewCount: 41,
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h21/hbe/86056856879134.jpg?format=gallery-medium',
        categoryId: 4,
        kaspiUrl: 'https://kaspi.kz/shop/p/apple-ipad-pro-13-2024-wi-fi-13-djuim-8-gb-256-gb-chernyi-119579567/?c=750000000',
      },
      {
        id: 6,
        name: 'Ноутбук ASUS TUF A15 FA506 15.6"/16 Гб/SSD 512 Гб/Без ОС',
        price: 478999,
        rating: 5,
        reviewCount: 32,
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/pf6/p03/72613217.png?format=gallery-medium',
        categoryId: 2,
        kaspiUrl: 'https://kaspi.kz/shop/p/asus-tuf-a15-fa506-15-6-16-gb-ssd-512-gb-bez-os-90nr0jf7-m00je0-148010487/?c=750000000',
      },

      {
        id: 7,
        name: 'Наушники Apple AirPods Max 2 черно-синий',
        price: 278765 ,
        rating: 5,
        reviewCount: 103,
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p68/p4c/3527586.png?format=gallery-medium',
        categoryId: 3,
        kaspiUrl: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-2-cherno-sinii-128622804/?c=750000000',
      },
      {
        id: 8,
        name: 'Планшет Samsung Galaxy Tab S10 Ultra 14.6 дюйм 12 Гб/256 Гб серый',
        price: 580000 ,
        rating: 5,
        reviewCount: 33,
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/pe5/p5f/1647298.png?format=gallery-medium',
        categoryId: 4,
        kaspiUrl: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s10-ultra-14-6-djuim-12-gb-256-gb-seryi-128152132/?c=750000000',
      }

    ];
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.getProducts().filter(p => p.categoryId === categoryId);
  }
}