import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadakhphotosComponent } from './ladakhphotos.component';

describe('LadakhphotosComponent', () => {
  let component: LadakhphotosComponent;
  let fixture: ComponentFixture<LadakhphotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LadakhphotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LadakhphotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
