import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from '@ngx-gallery/core';

@Component({
  selector: 'app-weddingphotos',
  templateUrl: './weddingphotos.component.html',
  styleUrls: ['./weddingphotos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeddingphotosComponent implements OnInit {

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
    srcUrl: '../../../assets/img/wedding1.jpg',
    previewUrl: '../../../assets/img/wedding1.jpg'
  },
  {
    srcUrl: '../../../assets/img/wedding3.jpg',
    previewUrl: '../../../assets/img/wedding3.jpg'
  },
  {
    srcUrl: '../../../assets/img/wedding7.jpg',
    previewUrl: '../../../assets/img/wedding7.jpg'
  },
  {
    srcUrl: '../../../assets/img/wedding2.jpg',
    previewUrl: '../../../assets/img/wedding2.jpg'
  },
  {
    srcUrl: '../../../assets/img/wedding5.jpg',
    previewUrl: '../../../assets/img/wedding5.jpg'
  },
  {
    srcUrl: '../../../assets/img/wedding6.jpg',
    previewUrl: '../../../assets/img/wedding6.jpg'
  },
  {
    srcUrl: '../../../assets/img/wedding8.jpg',
    previewUrl: '../../../assets/img/wedding8.jpg'
  },
  {
    srcUrl: '../../../assets/img/wedding9.jpg',
    previewUrl: '../../../assets/img/wedding9.jpg'
  },
  {
    srcUrl: '../../../assets/img/wedding4.jpg',
    previewUrl: '../../../assets/img/wedding4.jpg'
  },
  
  {
    srcUrl: '../../../assets/img/wedding10.jpg',
    previewUrl: '../../../assets/img/wedding10.jpg'
  }, 
  
  {
    srcUrl: '../../../assets/img/wedding11.jpg',
    previewUrl: '../../../assets/img/wedding11.jpg'
  },
  
  {
    srcUrl: '../../../assets/img/wedding12.jpg',
    previewUrl: '../../../assets/img/wedding12.jpg'
  },
];