import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleParallaxComponent } from './middle-parallax.component';

describe('MiddleParallaxComponent', () => {
  let component: MiddleParallaxComponent;
  let fixture: ComponentFixture<MiddleParallaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleParallaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleParallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
