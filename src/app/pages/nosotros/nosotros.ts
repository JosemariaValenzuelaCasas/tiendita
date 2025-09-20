import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Seo } from '../../services/seo';
import { Navbar } from "../../compontents/navbar/navbar";

@Component({
  selector: 'app-nosotros',
  imports: [CommonModule, Navbar],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.scss'
})
export class Nosotros implements OnInit {
  private seo = inject(Seo);

  ngOnInit() {
    this.seo.setAll({
      title: 'Nosotros - Tiendita Huarochirí',
      description: 'Descubre el origen de nuestros productos desde Huarochirí, sierra peruana, con tradición, naturaleza y cultura.',
      robots: 'index,follow',
      canonicalUrl: 'https://mi-tiendita.vercel.app/nosotros',
      imageUrl: 'https://pbs.twimg.com/profile_images/678799442422734850/9mq-tjdx_400x400.jpg',
      author: 'Equipo Tiendita Huarochirí',
      keywords: 'productos naturales, Huarochirí, cultura, tradición, Perú'
    });
  }
}
