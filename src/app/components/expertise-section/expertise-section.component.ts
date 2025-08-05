import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expertise-section',
  imports: [],
  templateUrl: './expertise-section.component.html',
  styleUrl: './expertise-section.component.scss'
})
export class ExpertiseSectionComponent  {
  activeIndex = 0;

  toggleAccordion(index: number) {
    this.activeIndex = this.activeIndex === index ? -1 : index;
  }
}

