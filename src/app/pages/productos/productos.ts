import { Component, inject, OnInit } from '@angular/core';
import { Seo } from '../../services/seo';
import { Navbar } from "../../compontents/navbar/navbar";

@Component({
  selector: 'app-productos',
  imports: [Navbar],
  templateUrl: './productos.html',
  styleUrl: './productos.scss'
})
export class Productos implements OnInit {
  private seo = inject(Seo);

  ngOnInit() {
    this.seo.setAll({
      title: 'Productos - Tiendita Huarochirí',
      description: 'Explora nuestros productos auténticos de la sierra del Perú, elaborados con tradición y dedicación.',
      robots: 'index,follow',
      canonicalUrl: 'https://mi-tiendita.vercel.app/productos',
      imageUrl: 'https://neubox.com/blog/wp-content/uploads/2021/10/TIENDA_ONLINE_02.webp',
      author: 'Equipo Tiendita Huarochirí',
      keywords: 'productos, Tiendita Huarochirí, sierra peruana, tradición, Perú'
    });
  }
}
