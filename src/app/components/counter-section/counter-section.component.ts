import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-counter-section',
  imports: [],
  templateUrl: './counter-section.component.html',
  styleUrl: './counter-section.component.scss'
})
export class CounterSectionComponent implements AfterViewInit {
ngAfterViewInit(): void {
  this.animateCounters();
}

animateCounters(): void {
  const counters = document.querySelectorAll('.number');

  counters.forEach((counter) => {
    const el = counter as HTMLElement;
    const target = parseInt(el.getAttribute('data-target') || '0', 10);
    let current = 0;
    const increment = Math.ceil(target / 100);

    const updateCount = () => {
      current += increment;
      if (current < target) {
        el.innerText = current.toString();
        requestAnimationFrame(updateCount);
      } else {
        el.innerText = target.toString();
      }
    };

    updateCount();
  });
}

}
