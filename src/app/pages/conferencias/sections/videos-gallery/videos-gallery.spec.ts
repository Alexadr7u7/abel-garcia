import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosGallery } from './videos-gallery';

describe('VideosGallery', () => {
  let component: VideosGallery;
  let fixture: ComponentFixture<VideosGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideosGallery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosGallery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
