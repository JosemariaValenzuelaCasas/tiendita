import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
export interface BasicSeo {
  title?: string;
  description?: string;
  robots?: string;
  canonicalUrl?: string;
  imageUrl?: string;
  author?: string;
  keywords?: string;
}

@Injectable({ providedIn: 'root' })
export class Seo {
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private platformId = inject(PLATFORM_ID);
  
  setAll(seo: BasicSeo) {
    if (seo.title) this.setTitle(seo.title);

    if (seo.description) this.setDescription(seo.description);

    this.setRobots(seo.robots ?? 'index,follow');

    if (seo.imageUrl) this.setImageUrl(seo.imageUrl);

    if (seo.author) this.setAuthor(seo.author);

    if (seo.keywords) this.setKeywords(seo.keywords);

    if (seo.canonicalUrl) this.setCanonical(seo.canonicalUrl);

    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  }

  setTitle(value: string) {
    this.titleService.setTitle(value);
    this.metaService.updateTag({ name: 'title', content: value });
    this.metaService.updateTag({ property: 'og:title', content: value });
    this.metaService.updateTag({ name: 'twitter:title', content: value });
  }

  setDescription(value: string) {
    this.metaService.updateTag({ name: 'description', content: value });
    this.metaService.updateTag({ property: 'og:description', content: value });
    this.metaService.updateTag({ name: 'twitter:description', content: value });
  }

  setRobots(value: string) {
    this.metaService.updateTag({ name: 'robots', content: value });
  }

  setImageUrl(value: string) {
    this.metaService.updateTag({ property: 'og:image', content: value });
    this.metaService.updateTag({ name: 'twitter:image', content: value });
  }

  setAuthor(value: string) {
    this.metaService.updateTag({ name: 'author', content: value });
  }

  setKeywords(value: string) {
    this.metaService.updateTag({ name: 'keywords', content: value });
  }

  setCanonical(url: string) {
    if (isPlatformBrowser(this.platformId)) {
      let link: HTMLLinkElement =
        document.querySelector("link[rel='canonical']") || document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      document.head.appendChild(link);
    }
  }
}
