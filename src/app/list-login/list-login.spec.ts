import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLogin } from './list-login';

describe('ListLogin', () => {
  let component: ListLogin;
  let fixture: ComponentFixture<ListLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
