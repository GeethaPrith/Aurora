import { CommonModule, NgFor } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

@Component({
  selector: 'app-services-section',
  imports: [CommonModule],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss'
})

export class ServicesSectionComponent implements AfterViewInit {

  tabs = [
    {
      key: 'graphic',
      label: 'GRAPHIC DESIGN',
      images: [
        { src: '/assets/tabs/xd-min.png', alt: 'XD' },
        { src: '/assets/tabs/ai-min.png', alt: 'AI' },
        { src: '/assets/tabs/ps.png', alt: 'PS' },
        { src: '/assets/tabs/1-min.png', alt: 'Figma' },
        { src: '/assets/tabs/b-min.png', alt: 'XD' },
        { src: '/assets/tabs/html-min.png', alt: 'AI' },
        { src: '/assets/tabs/light.png', alt: 'PS' },
        { src: '/assets/tabs/2-min.png', alt: 'Figma' },
        { src: '/assets/tabs/3-min.png', alt: 'XD' },
      ],
    },
    {
      key: 'web',
      label: 'WEB TECHNOLOGIES',
      images: [
        { src: '/assets/tabs/mag.png', alt: 'mag' }
      ],
    },
    {
      key: 'mobile',
      label: 'MOBILE TECHNOLOGIES',
      images: [
        { src: '/assets/tabs/mongo.png', alt: 'mongo' }
      ],
    },
    {
      key: 'server',
      label: 'SERVER TECHNOLOGIES',
      images: [
        { src: '/assets/tabs/cpanel-min.png', alt: 'cpanel' }
      ],
    },
  ];
  activeTab = this.tabs[0].key;
  activeIndex = 0;
  intervalId: any;
  swiper: Swiper | null = null;

  get activeImages() {
    return this.tabs.find(tab => tab.key === this.activeTab)?.images ?? [];
  }
  selectTab(key: string): void {
     this.activeTab = key;
     this.activeIndex = 0;
   }

  ngAfterViewInit(): void {
    setTimeout(() => {
    new Swiper('.tech-swiper', {
      slidesPerView: 6,
      slidesPerGroup: 1,          
      loop: true,
      speed: 2000,
      direction: 'horizontal',
      spaceBetween: 30,
      autoplay: {
        delay: 10,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      freeMode: true,
      grabCursor: true,
      breakpoints: {
        0: { slidesPerView: 1, slidesPerGroup: 1 },
        576: { slidesPerView: 2, slidesPerGroup: 1 },
        768: { slidesPerView: 3, slidesPerGroup: 1 },
        992: { slidesPerView: 4, slidesPerGroup: 1 },
        1200: { slidesPerView: 5, slidesPerGroup: 1 },
        1400: { slidesPerView: 6, slidesPerGroup: 1 },
      },
    });
    });
  }
}