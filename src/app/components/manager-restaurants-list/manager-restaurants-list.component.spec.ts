import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerRestaurantsListComponent } from './manager-restaurants-list.component';

describe('ManagerRestaurantsListComponent', () => {
  let component: ManagerRestaurantsListComponent;
  let fixture: ComponentFixture<ManagerRestaurantsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerRestaurantsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerRestaurantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
