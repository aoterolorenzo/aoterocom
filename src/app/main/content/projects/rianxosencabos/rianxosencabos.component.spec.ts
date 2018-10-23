import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RianxosencabosComponent } from './rianxosencabos.component';

describe('RianxosencabosComponent', () => {
  let component: RianxosencabosComponent;
  let fixture: ComponentFixture<RianxosencabosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RianxosencabosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RianxosencabosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
