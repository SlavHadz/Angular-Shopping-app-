import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeItemsComponent } from './anime-items.component';

describe('AnimeItemsComponent', () => {
  let component: AnimeItemsComponent;
  let fixture: ComponentFixture<AnimeItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
