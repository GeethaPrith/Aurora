import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortifoliosSectionComponent } from './portifolios-section.component';

describe('PortifoliosSectionComponent', () => {
  let component: PortifoliosSectionComponent;
  let fixture: ComponentFixture<PortifoliosSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortifoliosSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortifoliosSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
