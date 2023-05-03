import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesCollectionComponent } from './images-collection.component';

describe('ImagesCollectionComponent', () => {
  let component: ImagesCollectionComponent;
  let fixture: ComponentFixture<ImagesCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
