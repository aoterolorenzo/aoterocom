import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunibaComponent } from './comuniba.component';

describe('ComunibaComponent', () => {
  let component: ComunibaComponent;
  let fixture: ComponentFixture<ComunibaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunibaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunibaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
