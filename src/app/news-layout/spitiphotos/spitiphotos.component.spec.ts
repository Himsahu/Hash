import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpitiphotosComponent } from './spitiphotos.component';

describe('SpitiphotosComponent', () => {
  let component: SpitiphotosComponent;
  let fixture: ComponentFixture<SpitiphotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpitiphotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpitiphotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
