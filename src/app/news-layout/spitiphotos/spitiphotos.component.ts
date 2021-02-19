import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from '@ngx-gallery/core';

@Component({
  selector: 'app-spitiphotos',
  templateUrl: './spitiphotos.component.html',
  styleUrls: ['./spitiphotos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpitiphotosComponent implements OnInit {

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
    srcUrl: '../../../assets/img/spiti1.jpg',
    previewUrl: '../../../assets/img/spiti1.jpg'
  },
  {
    srcUrl: '../../../assets/img/spiti2.jpg',
    previewUrl: '../../../assets/img/spiti2.jpg'
  },
  {
    srcUrl: '../../../assets/img/spiti3.jpg',
    previewUrl: '../../../assets/img/spiti3.jpg'
  },
  {
    srcUrl: '../../../assets/img/spiti4.jpg',
    previewUrl: '../../../assets/img/spiti4.jpg'
  },
  {
    srcUrl: '../../../assets/img/spiti5.jpg',
    previewUrl: '../../../assets/img/spiti5.jpg'
  },
  {
    srcUrl: '../../../assets/img/spiti6.jpg',
    previewUrl: '../../../assets/img/spiti6.jpg'
  },
  {
    srcUrl: '../../../assets/img/spiti7.jpg',
    previewUrl: '../../../assets/img/spiti7.jpg'
  },
  {
    srcUrl: '../../../assets/img/spiti10.jpg',
    previewUrl: '../../../assets/img/spiti10.jpg'
  },
  {
    srcUrl: '../../../assets/img/spiti8.jpg',
    previewUrl: '../../../assets/img/spiti8.jpg'
  },
  {
    srcUrl: '../../../assets/img/spiti9.jpg',
    previewUrl: '../../../assets/img/spiti9.jpg'
  },
];