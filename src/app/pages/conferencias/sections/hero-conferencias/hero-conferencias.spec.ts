import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroConferencias } from './hero-conferencias';

describe('HeroConferencias', () => {
  let component: HeroConferencias;
  let fixture: ComponentFixture<HeroConferencias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroConferencias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroConferencias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
