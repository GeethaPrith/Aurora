import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolios-section',
  imports: [],
  templateUrl: './portfolios-section.component.html',
  styleUrl: './portfolios-section.component.scss'
})
export class PortfoliosSectionComponent {
  services = [
    {
      title: 'Full Stack',
      subtitle: 'Development',
      description: 'Full-stack development is the ability to program both client and server applications. Full-stack engineers are therefore masters in HTMl and CSS. Among other technologies, they are skilled in coding a web application using JavaScript, jQuery,Angular or Vue..',
      link: 'https://auroraitech.com/full-stack-development/'
    },
    {
      title: 'Hybrid App',
      subtitle: 'Development',
      description: 'Hybrid mobile apps combine features of web and native apps can be downloaded and installed on a device just like any other app. They vary in that they combine features of web apps, websites that function like apps but are not installedon a device but are accesible on the internet via a browser, with parts of native apps...',
      link: 'https://auroraitech.com/hybrid-mobile-app-development/'
    },
    {
      title: 'Open Source',
      subtitle: 'Development',
      description: 'Open-source is a word that is closely associated with Open-Source Software (OSS). The source code is made available to all the users of open-source software, which is a category of computer software that is distributed under a license. Software copyrights owners...',
      link: 'https://auroraitech.com/open-source/'
    },
    {
      title: 'Native App',
      subtitle: 'Development',
      description: 'Applications that come preloaded and setup on every Apple machine, such as Pictures, Mails and Contacts are examples of native apps for platforms like Mac and PC. Neverthless the phrase "Native App" in the context...',
      link: 'https://auroraitech.com/native-mobile-app-development/'
    },
    {
      title: 'QA Automation',
      subtitle: 'Tools',
      description: 'To guarantee the high quality of software products and services provided to end users, quality assurance (QA) incorporates several approaches and practices. Quality assurance places more of an emphasis on process improvement than on bug detection...',
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
