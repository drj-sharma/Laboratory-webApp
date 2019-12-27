import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintdataComponent } from './printdata.component';

describe('PrintdataComponent', () => {
  let component: PrintdataComponent;
  let fixture: ComponentFixture<PrintdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
