import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliosSectionComponent } from './portfolios-section.component';

describe('PortfoliosSectionComponent', () => {
  let component: PortfoliosSectionComponent;
  let fixture: ComponentFixture<PortfoliosSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfoliosSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfoliosSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
