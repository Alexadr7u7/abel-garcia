import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalleresGallery } from './talleres-gallery';

describe('TalleresGallery', () => {
  let component: TalleresGallery;
  let fixture: ComponentFixture<TalleresGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalleresGallery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalleresGallery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
