import { Component } from '@angular/core';
import { ServicesOverviewSectionComponent } from '../../components/services-overview-section/services-overview-section.component';
import { ServicesSectionComponent } from '../../components/services-section/services-section.component';
import { PortfoliosSectionComponent } from '../../components/portfolios-section/portfolios-section.component';
import { BlogsSectionComponent } from '../../components/blogs-section/blogs-section.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { CounterSectionComponent } from '../../components/counter-section/counter-section.component';
import { ExpertiseSectionComponent } from '../../components/expertise-section/expertise-section.component';

@Component({
  selector: 'app-home',
  imports: [ServicesOverviewSectionComponent,ServicesSectionComponent,PortfoliosSectionComponent,BlogsSectionComponent,HeroComponent,CounterSectionComponent,ExpertiseSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
