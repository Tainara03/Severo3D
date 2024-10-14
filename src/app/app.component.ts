import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './models';
import { CarouselComponent } from './models';
import { FooterComponent } from './models';
import { AboutComponent, ContactComponent, HomeComponent, ProductsComponent, ServicesComponent } from './pages';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CarouselComponent, FooterComponent, 
    HomeComponent, ProductsComponent, ServicesComponent, ContactComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Severo3D';
}
