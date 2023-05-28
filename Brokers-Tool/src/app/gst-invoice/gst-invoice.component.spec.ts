import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GSTInvoiceComponent } from './gst-invoice.component';

describe('GSTInvoiceComponent', () => {
  let component: GSTInvoiceComponent;
  let fixture: ComponentFixture<GSTInvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GSTInvoiceComponent]
    });
    fixture = TestBed.createComponent(GSTInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
