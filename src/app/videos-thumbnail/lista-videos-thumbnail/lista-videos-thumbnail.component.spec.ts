import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVideosThumbnailComponent } from './lista-videos-thumbnail.component';

describe('ListaVideosThumbnailComponent', () => {
  let component: ListaVideosThumbnailComponent;
  let fixture: ComponentFixture<ListaVideosThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaVideosThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVideosThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
