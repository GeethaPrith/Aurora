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

//   ngOnInit(): void {
//   }
//   activeIndex: number = 0;
//   toggleAccordion(index: number) {
//     this.activeIndex = this.activeIndex === index ? -1 : index;
//   }
//   ngOnint(){
//     // Run this code in ngAfterViewInit() or ngOnInit() if using Angular
// document.querySelectorAll('.accordion .item h6').forEach((header) => {
//   header.addEventListener('click', () => {
//     const item = header.closest('.item') as HTMLElement;
//     const isActive = item?.classList.contains('active');
//     const content = item?.querySelector('p') as HTMLElement;
//     const arrow = header.querySelector('.arrow i') as HTMLElement;

//     // Collapse all items
//     document.querySelectorAll('.accordion .item').forEach((el) => {
//       const elItem = el as HTMLElement;
//       elItem.classList.remove('active');

//       const elContent = elItem.querySelector('p') as HTMLElement;
//       const elArrow = elItem.querySelector('.arrow i') as HTMLElement;
//       if (elContent) elContent.style.display = 'none';
//       if (elArrow) elArrow.className = 'fas fa-chevron-down';
//     });

//     // Expand current if it was not active
//     if (!isActive) {
//       item.classList.add('active');
//       if (content) content.style.display = 'block';
//       if (arrow) arrow.className = 'fas fa-chevron-up';
//     }
//   });
// });
