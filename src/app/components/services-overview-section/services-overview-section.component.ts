import { AfterViewInit, Component } from '@angular/core';
import Swiper  from 'swiper/bundle';
import 'swiper/css/bundle';
import { CommonModule, NgFor } from '@angular/common';


@Component({
  selector: 'app-services-overview-section',
  imports: [NgFor,CommonModule],
  templateUrl: './services-overview-section.component.html',
  styleUrl: './services-overview-section.component.scss'
})
export class ServicesOverviewSectionComponent implements AfterViewInit{
  slides = [
    {
      src: 'https://auroraitech.com/wp-content/uploads/2022/10/ltm-min-scaled-500x338.jpg',
      alt: 'Portfolio image 1',
      href: '#',
    },  
      {
      src: 'https://auroraitech.com/wp-content/uploads/2022/10/mailhosieries-min-scaled.jpg',
      alt: 'Portfolio image 1',
      href: '#',
    },
    {
      src: 'https://auroraitech.com/wp-content/uploads/2022/10/SKBD-min-scaled.jpg',
      alt: 'Portfolio image 1',
      href: '#',
    },
    {
      src: 'https://auroraitech.com/wp-content/uploads/2022/10/Plates-min-scaled.jpg',
      alt: 'Portfolio image 1',
      href: '#',
    },

  ];
  graphicSlides =[
        {
      src: 'https://auroraitech.com/wp-content/uploads/2021/01/Mr.Punjab_BizKit_Design_Portfolios-min.jpg',
      alt: 'Portfolio image 1',
      href: '#',
    },  
      {
      src: 'https://auroraitech.com/wp-content/uploads/2021/01/ACS_DM_Portfolios-min.jpg',
      alt: 'Portfolio image 1',
      href: '#',
    },
    {
      src: 'https://auroraitech.com/wp-content/uploads/2021/01/MullaiCoffe_BizKit_Design_Portfolios-min.jpg',
      alt: 'Portfolio image 1',
      href: '#',
    },
    {
      src: 'https://auroraitech.com/wp-content/uploads/2021/01/AARAV_BrochuresDesign_Portfolios-min.jpg"',
      alt: 'Portfolio image 1',
      href: '#',
    },

  ]
appWebSlides = [
  {
    src: 'https://auroraitech.com/wp-content/uploads/2022/10/Radio-Rando-Web-App-2.jpg',
    alt: 'Radio Rando Web App',
    href: 'https://auroraitech.com/services/app-development/'
  },
  {
    src: 'https://auroraitech.com/wp-content/uploads/2022/10/Radio-Rando-Web-App-4.jpg',
    alt: 'Radio Rando Web App variant',
    href: 'https://auroraitech.com/services/app-development/web-development/'
  },
  {
    src: 'https://auroraitech.com/wp-content/uploads/2022/10/q3.png',
    alt: 'GST Billing App',
    href: 'https://auroraitech.com/services/app-development/android-app-development/'
  },
  {
    src: 'https://auroraitech.com/wp-content/uploads/2022/10/q5.png',
    alt: 'Inventory Management',
    href: 'https://auroraitech.com/services/app-development/ios-app-development/'
  },
  {
    src: 'https://auroraitech.com/wp-content/uploads/2022/10/q1.png',
    alt: 'Hybrid App',
    href: 'https://auroraitech.com/services/app-development/hybrid-app-development/'
  },
  {
    src: 'https://auroraitech.com/wp-content/uploads/2022/10/RR4-min.png',
    alt: 'Media App',
    href: 'https://auroraitech.com/services/app-development/'
  },
  {
    src: 'https://auroraitech.com/wp-content/uploads/2025/07/cera-corporate-webapp.png',
    alt: 'Corporate Web App',
    href: 'https://auroraitech.com/services/app-development/web-development/'
  },
];
marketingSlides = [
  {
    src: 'https://auroraitech.com/wp-content/uploads/2025/07/AiT-MountPico.jpg',
    alt: 'Mount Pico Marketing',
    href: 'https://auroraitech.com/services/digital-marketing/'
  },
  {
    src: 'https://auroraitech.com/wp-content/uploads/2025/07/AiT-MountPicoGMB.jpg',
    alt: 'GMB Success',
    href: 'https://auroraitech.com/services/digital-marketing/social-media-promotions/'
  },
  {
    src: 'https://auroraitech.com/wp-content/uploads/2025/07/mountpico-insta.png',
    alt: 'Instagram Success',
    href: 'https://auroraitech.com/services/digital-marketing/local-business-listing/'
  },
  {
    src: 'https://auroraitech.com/wp-content/uploads/2025/07/Analytics-‹-Mountpico-Yercaud-s-Premium-Resort-—-Keyword-Position.png',
    alt: 'Keyword Position',
    href: 'https://auroraitech.com/services/digital-marketing/search-engine-promotions/'
  },
  {
    src: 'https://auroraitech.com/wp-content/uploads/2025/07/Analytics-‹-Mountpico-Yercaud-s-SEO-by-AURORAiTech.png',
    alt: 'SEO Traffic',
    href: 'https://auroraitech.com/services/digital-marketing/'
  },
  {
    src: 'https://auroraitech.com/wp-content/uploads/2025/07/SRI-KAVI-BUILDING-DEMOLISHER-GMB.png',
    alt: 'Local GMB',
    href: 'https://auroraitech.com/services/digital-marketing/search-engine-promotions/'
  },
];
multimediaSlides = [
  {
    src: 'https://auroraitech.com/wp-content/uploads/2025/07/cerahydrolastic666-500x338@2x.jpg',
    alt: '3D Animation for Cera Chem',
    href: 'https://auroraitech.com/services/multimedia/'
  },
  {
    src: 'https://auroraitech.com/wp-content/uploads/2025/07/zinczr-500x338@2x.jpg',
    alt: 'Product Explainer Video',
    href: 'https://auroraitech.com/services/multimedia/product-photography/'
  },
  {
    src: 'https://auroraitech.com/wp-content/uploads/2025/07/ceraflex-500x338@2x.jpg',
    alt: 'Corporate Visuals',
    href: 'https://auroraitech.com/services/multimedia/corporate-videos/'
  },
  {
    src: 'https://auroraitech.com/wp-content/uploads/2025/07/cerapoxypro-500x338@2x.jpg',
    alt: 'Promotional Video Example',
    href: 'https://auroraitech.com/services/multimedia/promotional-videos/'
  },
  {
    src: 'https://auroraitech.com/wp-content/uploads/2025/07/VinayagaBalagi-500x338@2x.jpg',
    alt: 'Industrial Photography',
    href: 'https://auroraitech.com/services/multimedia/industrial-photography/'
  },
];

  ngAfterViewInit() {
      new Swiper('.my-swiper', {
      slidesPerView: 1,
      loop: true,
        speed: 800, // longer transition (ms) for smoothness

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
       // reverseDirection:true,
      },
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
            direction: 'horizontal' // default; ensures slide-left behavior

      })
    };
  }