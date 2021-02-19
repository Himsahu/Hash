import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from '@ngx-gallery/core';

@Component({
  selector: 'app-ladakhphotos',
  templateUrl: './ladakhphotos.component.html',
  styleUrls: ['./ladakhphotos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LadakhphotosComponent implements OnInit {

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
    srcUrl: '../../../assets/img/ladakh1.jpg',
    previewUrl: '../../../assets/img/ladakh1.jpg'
  },
  {
    srcUrl: '../../../assets/img/ladakh3.jpg',
    previewUrl: '../../../assets/img/ladakh3.jpg'
  },
  {
    srcUrl: '../../../assets/img/ladakh6.jpg',
    previewUrl: '../../../assets/img/ladakh6.jpg'
  },
  {
    srcUrl: '../../../assets/img/ladakh7.jpg',
    previewUrl: '../../../assets/img/ladakh7.jpg'
  },
  {
    srcUrl: '../../../assets/img/ladakh8.jpg',
    previewUrl: '../../../assets/img/ladakh8.jpg'
  },
  
  {
    srcUrl: '../../../assets/img/ladakh9.jpg',
    previewUrl: '../../../assets/img/ladakh9.jpg'
  },
  {
    srcUrl: '../../../assets/img/ladakh10.jpg',
    previewUrl: '../../../assets/img/ladakh10.jpg'
  },
  {
    srcUrl: '../../../assets/img/ladakh2.jpg',
    previewUrl: '../../../assets/img/ladakh2.jpg'
  },
  {
    srcUrl: '../../../assets/img/ladakh4.jpg',
    previewUrl: '../../../assets/img/ladakh4.jpg'
  },
  {
    srcUrl: '../../../assets/img/ladakh5.jpg',
    previewUrl: '../../../assets/img/ladakh5.jpg'
  },  
];