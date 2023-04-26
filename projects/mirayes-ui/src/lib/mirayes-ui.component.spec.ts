import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MirayesUiComponent } from './mirayes-ui.component';

describe('MirayesUiComponent', () => {
  let component: MirayesUiComponent;
  let fixture: ComponentFixture<MirayesUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MirayesUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MirayesUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
