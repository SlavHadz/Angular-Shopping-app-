import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsItemsComponent } from './electronics-items.component';

describe('ElectronicsItemsComponent', () => {
  let component: ElectronicsItemsComponent;
  let fixture: ComponentFixture<ElectronicsItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicsItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
