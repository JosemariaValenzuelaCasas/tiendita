import { Component, inject } from '@angular/core';
import { Seo } from '../../services/seo';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  private seo = inject(Seo);

  constructor() {
    this.seo.setAll({
      title: 'Inicio - Tiendita Huarochirí',
      description: 'Bienvenido a Tiendita Huarochirí, tu lugar favorito para productos naturales e innovadores directamente desde la sierra peruana.',
      robots: 'index,follow',
      canonicalUrl: 'https://mi-tiendita.vercel.app/',
      imageUrl: 'https://pbs.twimg.com/profile_images/678799442422734850/9mq-tjdx_400x400.jpg',
      author: 'Equipo Tiendita Huarochirí',
      keywords: 'tienda online, productos naturales, Huarochirí, innovación, Perú'
    });
  }
}
