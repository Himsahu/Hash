import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingphotosComponent } from './weddingphotos.component';

describe('WeddingphotosComponent', () => {
  let component: WeddingphotosComponent;
  let fixture: ComponentFixture<WeddingphotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeddingphotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingphotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
