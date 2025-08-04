import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesOverviewSectionComponent } from './services-overview-section.component';

describe('ServicesOverviewSectionComponent', () => {
  let component: ServicesOverviewSectionComponent;
  let fixture: ComponentFixture<ServicesOverviewSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesOverviewSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesOverviewSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
