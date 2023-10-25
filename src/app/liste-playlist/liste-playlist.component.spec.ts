import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePlaylistComponent } from './liste-playlist.component';

describe('ListePlaylistComponent', () => {
  let component: ListePlaylistComponent;
  let fixture: ComponentFixture<ListePlaylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListePlaylistComponent]
    });
    fixture = TestBed.createComponent(ListePlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
