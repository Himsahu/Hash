import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporatephotosComponent } from './corporatephotos.component';

describe('CorporatephotosComponent', () => {
  let component: CorporatephotosComponent;
  let fixture: ComponentFixture<CorporatephotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporatephotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporatephotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
