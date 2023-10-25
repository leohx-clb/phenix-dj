import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FenetreVideoComponent } from './fenetre-video.component';

describe('FenetreVideoComponent', () => {
  let component: FenetreVideoComponent;
  let fixture: ComponentFixture<FenetreVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FenetreVideoComponent]
    });
    fixture = TestBed.createComponent(FenetreVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
