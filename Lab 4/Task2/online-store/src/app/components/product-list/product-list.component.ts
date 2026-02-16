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
    {
      id: 3,
      name: 'Смартфон Apple iPhone 15 128Gb черный',
      description: 'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн. Смартфон получил динамический остров, на который выводятся уведомления и другая важная информация.',
      price: 382900,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000'
    },


    {
      id: 4,
      name: 'Смартфон Xiaomi 15 12 ГБ/512 ГБ зеленый',
      description: 'Xiaomi 15 станет идеальным компаньоном для тех, кто активно использует смартфон для работы, развлечений и общения. Поддержка 5G обеспечит высокую скорость интернета в любой точке города. В комплекте защитный чехол и пленка для сохранения внешнего вида вашего нового устройства.',
      price: 469718 ,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pfd/p94/35939502.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p57/p99/35939503.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p3b/p99/35939504.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p1e/p99/35939505.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-15-12-gb-512-gb-zelenyi-135800775/?c=750000000'
    },


    
    {
      id: 5,
      name: 'Смартфон Samsung Galaxy Z Fold7 5G 12 ГБ/256 ГБ серебристый + подарок',
      description: 'Представляем вам Samsung Galaxy Z Fold7 5G — смартфон, который объединяет высокую производительность, передовые технологии и стильный дизайн. С этим устройством вы сможете наслаждаться качеством изображения, быстрой работой и отличной камерой. Рекомендуем использовать стилус для более удобного управления и создания заметок прямо на экране.',
      price: 1299993 ,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd2/p4b/62528339.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p2e/p49/62528342.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf6/p48/62528344.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p66/p49/62528340.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-z-fold7-5g-12-gb-256-gb-serebristyi-podarok-145141026/?c=750000000'
    },
    
    {
      id: 5,
      name: 'Смартфон Samsung Galaxy Z Fold7 5G 12 ГБ/256 ГБ серебристый + подарок',
      description: 'Представляем вам Samsung Galaxy Z Fold7 5G — смартфон, который объединяет высокую производительность, передовые технологии и стильный дизайн. С этим устройством вы сможете наслаждаться качеством изображения, быстрой работой и отличной камерой. Рекомендуем использовать стилус для более удобного управления и создания заметок прямо на экране.',
      price: 1299993 ,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd2/p4b/62528339.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p2e/p49/62528342.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf6/p48/62528344.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p66/p49/62528340.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-z-fold7-5g-12-gb-256-gb-serebristyi-podarok-145141026/?c=750000000'
    },



    {
      id: 6,
      name: 'Смартфон Apple iPhone 17 Pro Max 2Tb темно-синий',
      description: 'Apple iPhone 17 Pro Max 2Tb — флагманский смартфон с передовыми технологиями и непревзойденной производительностью для самых требовательных пользователей.Этот смартфон идеально подходит для тех, кто ценит инновации, высокую скорость работы и безупречный стиль. С ним вы всегда будете на связи, сможете наслаждаться любимыми развлечениями и оставаться продуктивным в любой ситуации.',
      price: 1232583 ,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd9/pf2/64169612.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p48/p5b/64476388.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbc/pf2/64169613.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p84/pf2/64169615.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-2tb-temno-sinii-145468104/?c=750000000'
    },

    {
      id: 7,
      name: 'Смартфон HONOR Magic V2 16 ГБ/512 ГБ фиолетовый',
      description: 'HONOR Magic V2 16 ГБ/512 ГБ фиолетовый — революционный сгибаемый смартфон с непревзойденной производительностью и уникальным дизайном.Этот смартфон идеально подходит для активных пользователей, фотографов и тех, кто ценит инновации.',
      price: 1064990 ,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hea/h38/84983480582174.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hfa/h0b/84983480647710.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h11/h3e/84983480778782.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h10/h04/84983480975390.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/honor-magic-v2-16-gb-512-gb-fioletovyi-116105070/?c=750000000'
    },

     {
      id: 8,
      name: 'Смартфон INOI A22 Lite 1 ГБ/16 ГБ черный',
      description: 'Смартфон INOI A22 Lite поможет вам не только всегда оставаться на связи с близкими, но также комфортно наслаждаться любимыми развлечениями, где бы вы ни находились. Трансляцией впечатляюще контрастных и насыщенных изображений вас удивит 5-дюймовый дисплей, разрешение которого достигает 1280x720 пикселей.',
      price: 1000000 ,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h27/h1a/64389665718302.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h52/h93/87205239848990.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2f/hde/87205239914526.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he3/h48/87205239980062.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/inoi-a22-lite-1-gb-16-gb-chernyi-104068698/?c=750000000'
    },



    {
      id: 9,
      name: 'Смартфон OPPO Find N5 16 ГБ/512 ГБ белый',
      description: 'Смартфон INOI A22 Lite поможет вам не только всегда оставаться на связи с близкими, но также комфортно наслаждаться любимыми развлечениями, где бы вы ни находились. Трансляцией впечатляюще контрастных и насыщенных изображений вас удивит 5-дюймовый дисплей, разрешение которого достигает 1280x720 пикселей.',
      price: 999990 ,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p8e/pcd/36315361.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/paa/pcd/36315362.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pe3/pcd/36315364.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pff/pcd/36315365.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/oppo-find-n5-16-gb-512-gb-belyi-138016221/?c=750000000'
    },


    {
      id: 10,
      name: 'Смартфон Google Pixel 10 Pro Fold 16 ГБ/512 ГБ серый',
      description: '✨ Google Pixel 10 Pro Fold ✨ – это инновационный смартфон, сочетающий в себе передовые технологии и стильный дизайн. 📱 Благодаря складной конструкции и большому 8.0-дюймовому OLED-экрану с частотой обновления 120 Гц, он обеспечивает невероятные возможности для работы, развлечений и творчества. 🚀',
      price: 998607  ,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p1e/p6e/71305424.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p3a/p6e/71305425.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p1e/p6e/71305424.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p3a/p6e/71305425.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/google-pixel-10-pro-fold-16-gb-512-gb-seryi-147602313/?c=750000000'
    },


  ];
}
