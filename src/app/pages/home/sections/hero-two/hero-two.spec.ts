import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTwo } from './hero-two';

describe('HeroTwo', () => {
  let component: HeroTwo;
  let fixture: ComponentFixture<HeroTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
