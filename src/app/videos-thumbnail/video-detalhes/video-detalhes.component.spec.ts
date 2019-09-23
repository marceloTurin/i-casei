import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDetalhesComponent } from './video-detalhes.component';

describe('VideoDetalhesComponent', () => {
  let component: VideoDetalhesComponent;
  let fixture: ComponentFixture<VideoDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
