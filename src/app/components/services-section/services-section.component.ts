import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

@Component({
  selector: 'app-services-section',
  imports: [],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss'
})
export class ServicesSectionComponent {  
  @ViewChildren('techSwiper', { read: ElementRef }) swiperElements!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    this.swiperElements.forEach((swiperElement) => {
      new Swiper(swiperElement.nativeElement, {
        slidesPerView: 6,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false
        },
        pagination: {
          el: swiperElement.nativeElement.querySelector('.swiper-pagination') as HTMLElement,
          clickable: true
        },
        breakpoints: {
          576: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 }
        }
      });
    });
  }
}
