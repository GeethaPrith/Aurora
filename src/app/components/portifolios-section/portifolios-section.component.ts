import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portifolios-section',
  imports: [NgFor,NgIf],
  templateUrl: './portifolios-section.component.html',
  styleUrl: './portifolios-section.component.scss'
})
export class PortifoliosSectionComponent {
  services = [
    {
      title: 'Full Stack',
      subtitle: 'Development',
      description: 'Full-stack development is the ability to program both client and server applications...',
      link: 'https://auroraitech.com/full-stack-development/'
    },
    {
      title: 'Hybrid App',
      subtitle: 'Development',
      description: 'Hybrid mobile apps combine features of web and native apps...',
      link: 'https://auroraitech.com/hybrid-mobile-app-development/'
    },
    {
      title: 'Open Source',
      subtitle: 'Development',
      description: 'Open-source software makes source code publicly accessible...',
      link: 'https://auroraitech.com/open-source/'
    },
    {
      title: 'Native App',
      subtitle: 'Development',
      description: 'Native apps are platform-specific apps like Contacts or Mail on Mac/PC...',
      link: 'https://auroraitech.com/native-mobile-app-development/'
    },
    {
      title: 'QA Automation',
      subtitle: 'Tools',
      description: 'QA ensures high quality through process improvement and testing techniques...',
      link: 'https://auroraitech.com/ait/portfolio/'
    }
  ];

  activeIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.services.length;
    }, 4000); // change every 4 seconds
  }

  setActive(index: number) {
    this.activeIndex = index;
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
