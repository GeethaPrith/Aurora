import { CommonModule, NgFor } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

@Component({
  selector: 'app-blogs-section',
  imports: [NgFor, CommonModule],
  templateUrl: './blogs-section.component.html',
  styleUrl: './blogs-section.component.scss'
})
export class BlogsSectionComponent implements AfterViewInit {
  // clients = [
  //   {
  //     name: 'Aurora iTech',
  //     logo: 'https://auroraitech.com/wp-content/uploads/2022/09/SPINaqm.png',
  //     alt: 'Aurora iTech',
  //     href: '#'
  //   },
  //   {
  //     name: 'Greenfos',
  //     logo: 'https://auroraitech.com/wp-content/uploads/2021/01/greenfos-logo.png',
  //     alt: 'greenfos-logo',
  //     href: '#'
  //   },
  //   {
  //     name: 'Suijin',
  //     logo: 'https://auroraitech.com/wp-content/uploads/2021/01/suijin.png',
  //     alt: 'suijin',
  //     href: '#'
  //   },
  // ];
  // in your component class
  blogPosts = [
    {
      title: 'Ultimate WordPress SEO Guide: Boost Your Rankings with Aurora ITECH',
      url: 'https://auroraitech.com/ultimate-wordpress-seo-guide-boost-your-rankings-with-aurora-itech/',
      thumbnail: 'https://auroraitech.com/wp-content/uploads/2025/03/Ultimate-WordPress-SEO-Guide_AURORAITECH-370x230.png',
      excerpt: 'Ultimate WordPress SEO Guide: Boost Your Rankings with Aurora ITECH Search engine optimization (SEO) is a crucial aspect of growing your website’s …',
      date: new Date('2025-03-20')
    },
    {
      title: 'Business Categories on Google My Business (GMB) and Local SEO',
      url: 'https://auroraitech.com/business-categories-on-google-my-business-gmb-and-the-services/',
      thumbnail: 'https://auroraitech.com/wp-content/uploads/2024/09/LocalSEO-370x230.jpg',
      excerpt: 'AURORA iTech and Solution, a preeminent mobile application development company in Coimbatore …',
      date: new Date('2024-09-23')
    },
    {
      title: 'AURORA iTech: E-Commerce Solutions & E-Commerce necessities for business',
      url: 'https://auroraitech.com/e-commerce-solutions-e-commerce-necessities-for-business/',
      thumbnail: 'https://auroraitech.com/wp-content/uploads/2024/02/e-commerce-solutions-necessacity-370x230.jpg',
      excerpt: 'AURORA iTech and Solution, a preeminent mobile application development company in Coimbatore …',
      date: new Date('2024-02-23')
    },
    {
      title: 'AURORA iTech: Empowering Businesses with Cutting-edge Mobile App Solutions',
      url: 'https://auroraitech.com/hybrid-mobile-application-development-company-coimbatore/',
      thumbnail: 'https://auroraitech.com/wp-content/uploads/2024/02/mobileappdevelopment-AURORAiTech-370x230.jpg',
      excerpt: 'AURORA iTech and Solution, a preeminent mobile application development company in Coimbatore …',
      date: new Date('2024-02-08')
    },
  ];

  clientsList = [
    {
      name: 'SPINaqm',
      logo: 'https://auroraitech.com/wp-content/uploads/2022/09/SPINaqm.png',
    },
    {
      name: 'Greenfos',
      logo: 'https://auroraitech.com/wp-content/uploads/2021/01/greenfos-logo.png',
    },
    {
      name: 'Suijin',
      logo: 'https://auroraitech.com/wp-content/uploads/2021/01/suijin.png',
    },
    {
      name: 'Tamilan',
      logo: 'https://auroraitech.com/wp-content/uploads/2021/01/Tamilan.png',
    },
    {
      name: 'ttpk',
      logo: 'https://auroraitech.com/wp-content/uploads/2021/01/ttpk.png',
    },
    {
      name: 'ikfa',
      logo: 'https://auroraitech.com/wp-content/uploads/2021/01/ikfa.png',
    },
    {
      name: 'Yahwehs',
      logo: 'https://auroraitech.com/wp-content/uploads/2021/01/Yahwehs-Logo.png',
    },
    {
      name: 'Mikaft',
      logo: 'https://auroraitech.com/wp-content/uploads/2021/01/mikaft.png',
    },
  ];

  faqs = [
    {
      question: 'What services does AURORA iTech provide?',
      answer: 'AURORA iTech offers website design, web development, app development, SEO, digital marketing, graphic design, multimedia production, and IT solutions in Coimbatore.'
    },
    {
      question: 'Do you develop e-commerce websites?',
      answer: 'Yes, we build secure, SEO-friendly e-commerce websites using WooCommerce, Opencart, and custom solutions.'
    },
    {
      question: 'Is AURORA iTech also an SEO company?',
      answer: 'Yes, we provide complete SEO services including on-page SEO, local SEO, keyword optimization, and search engine promotions.'
    },
    {
      question: 'How much does a custom website design cost in Coimbatore?',
      answer: 'The cost depends on your requirements — static websites start from affordable packages while dynamic or e-commerce sites cost more. Contact us for a free quote.'
    },
    {
      question: 'How long does it take to develop a website or mobile app?',
      answer: 'A simple business website can take 2–4 weeks, while mobile app projects may take 2–3 months.'
    },
    {
      question: 'Do you provide SEO and digital marketing after my website is launched?',
      answer: 'Yes! We provide Search Engine Promotions, Social Media Promotions, and Local Business Listings to help grow your site.'
    },
    {
      question: 'Can you redesign my existing website?',
      answer: 'Absolutely! We redesign outdated websites to be responsive, modern, and SEO-friendly.'
    },
    {
      question: 'Do you provide support and maintenance for websites and apps?',
      answer: 'Yes, we offer ongoing support for updates, security, and performance.'
    },
    {
      question: 'Which technologies do you use for development?',
      answer: 'We use MERN, MEAN, PHP, Laravel, React, Node.js, WordPress, and more.'
    },
    {
      question: 'What if I need branding and marketing too?',
      answer: 'We provide Logo Designing, Brochure Designing, Branding Solutions, and full Digital Marketing.'
    }
  ];

  brochureLink = 'https://heyzine.com/flip-book/a9978e2775.html';



  ngAfterViewInit(): void {
    setTimeout(() => {
    new Swiper('.clients-swiper', {
      slidesPerView: 6,
      slidesPerGroup: 1,          // move one slide at a time
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
