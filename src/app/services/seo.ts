import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface BasicSeo {
  title?: string;
  description?: string;
  robots?: string;
  canonicalUrl?: string;
  imageUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class Seo {
  titleService = inject(Title);
  metaService = inject(Meta);

  setAll(seo: BasicSeo) {
    this.metaService.addTag({ property: 'og:type', content: 'website' });
    if (seo.title) this.setTitle(seo.title);
    if (seo.description) this.setDescription(seo.description);
    if (seo.robots) this.setRobots(seo.robots);
    if (seo.imageUrl) this.setImageUrl(seo.imageUrl);
  }

  setTitle(value: string) {
    this.titleService.setTitle(value);
    this.metaService.addTag({ property: 'og:og:title', content: value });
  }

  setDescription(value: string) {
    this.metaService.addTag({ property: 'og:description', content: value });
  }

  setRobots(value: string) {
    this.metaService.addTag({ property: 'robots', content: value });
  }

  setImageUrl(value: string) {
    this.metaService.addTag({ property: 'og:image', content: value });
  }
}
