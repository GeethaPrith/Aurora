import { AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import Swiper from 'swiper';
import 'swiper/css';  
import { Autoplay } from 'swiper/modules'; // more explicit path works with newer versions

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements AfterViewInit {
    @ViewChild('contactSwiper', { static: false }) contactSwiperEl!: ElementRef<HTMLElement>;
  private swiperInstance: Swiper | null = null;
  private routerSub: Subscription;

  constructor(private router: Router) {
    // Re-init on navigation end in case view is reused and DOM changed
    this.routerSub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        // slight delay to ensure DOM settled
        setTimeout(() => this.initSwiper(), 50);
      });
  }

  ngAfterViewInit(): void {
    Swiper.use([Autoplay]);
    this.initSwiper();
  }

  private initSwiper() {
    if (!this.contactSwiperEl?.nativeElement) return;

    // destroy previous if exists (prevents duplicates)
    if (this.swiperInstance) {
      this.swiperInstance.destroy(true, true);
      this.swiperInstance = null;
    }

    // guard in case the element is not yet sized; defer one frame if needed
    requestAnimationFrame(() => {
      if (!this.contactSwiperEl?.nativeElement) return;
      this.swiperInstance = new Swiper(this.contactSwiperEl.nativeElement, {
        loop: true,
        speed: 800,
        autoplay: {
          delay: 2000,
          reverseDirection: false,
          disableOnInteraction: false,
        },
        slidesPerView: 3,
        spaceBetween: 80,
        slidesPerGroup: 1,
        breakpoints: {
          576: { slidesPerView: 1 },
          768: { slidesPerView: 1 }, // mid screen compact
          992: { slidesPerView: 3 },
        },
      });
    });
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
    if (this.swiperInstance) {
      this.swiperInstance.destroy(true, true);
      this.swiperInstance = null;
    }
  }
}


 

