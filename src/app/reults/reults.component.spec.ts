import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReultsComponent } from './reults.component';

describe('ReultsComponent', () => {
  let component: ReultsComponent;
  let fixture: ComponentFixture<ReultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReultsComponent]
    });
    fixture = TestBed.createComponent(ReultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
