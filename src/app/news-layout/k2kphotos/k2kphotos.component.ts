import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from '@ngx-gallery/core';

@Component({
  selector: 'app-k2kphotos',
  templateUrl: './k2kphotos.component.html',
  styleUrls: ['./k2kphotos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class K2kphotosComponent implements OnInit {

  constructor( private gallery: Gallery) { }
  items: GalleryItem[];

  ngOnInit(): void {
    this.items = data.map(item =>
      new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );

    this.basicLightboxExample();
    this.withCustomGalleryConfig();
  }

  basicLightboxExample() {
    this.gallery.ref().load(this.items);
  }

  /**
   * Use custom gallery config with the lightbox
   */
  withCustomGalleryConfig() {

    // 2. Get a lightbox gallery ref
    const lightboxGalleryRef = this.gallery.ref('anotherLightbox');

    // (Optional) Set custom gallery config to this lightbox
    lightboxGalleryRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });

    // 3. Load the items into the lightbox
    lightboxGalleryRef.load(this.items);
  }
}

const data = [
  {
    srcUrl: '../../../assets/img/miami.jpg',
    previewUrl: '../../../assets/img/miami.jpg'
  },
  {
    srcUrl: '../../../assets/img/miami.jpg',
    previewUrl: '../../../assets/img/miami.jpg'
  },
  {
    srcUrl: '../../../assets/img/miami.jpg',
    previewUrl: '../../../assets/img/miami.jpg'
  },
  {
    srcUrl: '../../../assets/img/miami.jpg',
    previewUrl: '../../../assets/img/miami.jpg'
  },
  {
    srcUrl: '../../../assets/img/miami.jpg',
    previewUrl: '../../../assets/img/miami.jpg'
  },
  {
    srcUrl: '../../../assets/img/miami.jpg',
    previewUrl: '../../../assets/img/miami.jpg'
  },
  
];