import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderOrderItemsListComponent } from './order-order-items-list.component';

describe('OrderOrderItemsListComponent', () => {
  let component: OrderOrderItemsListComponent;
  let fixture: ComponentFixture<OrderOrderItemsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderOrderItemsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderOrderItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
