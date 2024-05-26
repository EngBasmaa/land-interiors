import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyLandInteriorsComponent } from './why-land-interiors.component';

describe('WhyLandInteriorsComponent', () => {
  let component: WhyLandInteriorsComponent;
  let fixture: ComponentFixture<WhyLandInteriorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyLandInteriorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhyLandInteriorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
