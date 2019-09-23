import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaVideoComponent } from './pesquisa-video.component';

describe('PesquisaVideoComponent', () => {
  let component: PesquisaVideoComponent;
  let fixture: ComponentFixture<PesquisaVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
