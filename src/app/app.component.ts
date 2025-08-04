import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ExpertiseSectionComponent } from './components/expertise-section/expertise-section.component';
import { CounterSectionComponent } from './components/counter-section/counter-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { PortifoliosSectionComponent } from './components/portifolios-section/portifolios-section.component';
import { ServicesOverviewSectionComponent } from './components/services-overview-section/services-overview-section.component';
import { BlogsSectionComponent } from './components/blogs-section/blogs-section.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,HeroComponent,ExpertiseSectionComponent,CounterSectionComponent,PortifoliosSectionComponent,ServicesSectionComponent,ServicesOverviewSectionComponent,BlogsSectionComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Aurora';
}
