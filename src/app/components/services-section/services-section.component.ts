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

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initSwiper();
    }, 0);
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
    if (this.swiper) {
      this.swiper.destroy(true, true);
    }
  }

  selectTab(key: string): void {
    this.activeTab = key;
    this.activeIndex = 0;
    this.stopAutoplay();
    setTimeout(() => this.initSwiper(), 0);
    this.startAutoplay();
  }

  setActive(index: number): void {
    this.activeIndex = index;
    this.swiper?.slideTo(index);
  }

  private initSwiper(): void {
    const selector = `.tech-swiper-${this.activeTab}`;
    const el = document.querySelector(selector) as HTMLElement;

    if (el) {
      if (this.swiper) {
        this.swiper.destroy(true, true);
      }

      this.swiper = new Swiper(el, {
        slidesPerView: 4,
        spaceBetween: 10,
        speed: 600,
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        breakpoints: {
          992: { slidesPerView: 5 },
          576: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        },
        on: {
          slideChange: () => {
            this.activeIndex = this.swiper?.realIndex ?? 0;
          },
        },
      });

      this.swiper.slideToLoop(this.activeIndex);
    }
  }

  private startAutoplay(): void {
    this.intervalId = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.tabs.find(tab => tab.key === this.activeTab)!.images.length;
      this.swiper?.slideToLoop(this.activeIndex);
    }, 4000);
  }

  private stopAutoplay(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}