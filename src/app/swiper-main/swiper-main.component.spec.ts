import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperMainComponent } from './swiper-main.component';

describe('SwiperMainComponent', () => {
  let component: SwiperMainComponent;
  let fixture: ComponentFixture<SwiperMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiperMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
