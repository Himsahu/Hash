import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from '@ngx-gallery/core';

@Component({
  selector: 'app-corporatephotos',
  templateUrl: './corporatephotos.component.html',
  styleUrls: ['./corporatephotos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CorporatephotosComponent implements OnInit {

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
    srcUrl: '../../../assets/img/corporate1.jpg',
    previewUrl: '../../../assets/img/corporate1.jpg'
  },
  {
    srcUrl: '../../../assets/img/corporate2.jpg',
    previewUrl: '../../../assets/img/corporate2.jpg'
  },
  {
    srcUrl: '../../../assets/img/corporate4.jpg',
    previewUrl: '../../../assets/img/corporate4.jpg'
  },
  {
    srcUrl: '../../../assets/img/corporate5.jpg',
    previewUrl: '../../../assets/img/corporate5.jpg'
  },
  {
    srcUrl: '../../../assets/img/corporate6.jpg',
    previewUrl: '../../../assets/img/corporate6.jpg'
  },
  {
    srcUrl: '../../../assets/img/corporate7.jpg',
    previewUrl: '../../../assets/img/corporate7.jpg'
  },
  
  {
    srcUrl: '../../../assets/img/corporate3.jpg',
    previewUrl: '../../../assets/img/corporate3.jpg'
  },
  
  {
    srcUrl: '../../../assets/img/corporate8.jpg',
    previewUrl: '../../../assets/img/corporate8.jpg'
  },
  
  {
    srcUrl: '../../../assets/img/corporate9.jpg',
    previewUrl: '../../../assets/img/corporate9.jpg'
  },
];