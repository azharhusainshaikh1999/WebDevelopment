import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubContractorComponent } from './sub-contractor-component';

describe('SubContractorComponent', () => {
  let component: SubContractorComponent;
  let fixture: ComponentFixture<SubContractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubContractorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
