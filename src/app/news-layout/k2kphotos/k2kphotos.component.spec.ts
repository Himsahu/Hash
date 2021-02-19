import { ComponentFixture, TestBed } from '@angular/core/testing';

import { K2kphotosComponent } from './k2kphotos.component';

describe('K2kphotosComponent', () => {
  let component: K2kphotosComponent;
  let fixture: ComponentFixture<K2kphotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ K2kphotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(K2kphotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
