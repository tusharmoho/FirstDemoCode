import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewItemsList } from './view-items-list';

describe('ViewItemsList', () => {
  let component: ViewItemsList;
  let fixture: ComponentFixture<ViewItemsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewItemsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewItemsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
