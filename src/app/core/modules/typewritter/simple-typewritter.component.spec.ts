import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTypewritterComponent } from './simple-typewritter.component';

describe('SimpleTypewritterComponent', () => {
  let component: SimpleTypewritterComponent;
  let fixture: ComponentFixture<SimpleTypewritterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleTypewritterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTypewritterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
