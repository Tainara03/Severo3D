import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarouselComponent, FooterComponent, HeaderComponent } from '../../models';
import { MainServicesComponent } from "../../models/main-services/main-services.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, MainServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
