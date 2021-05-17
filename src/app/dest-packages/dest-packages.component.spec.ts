import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestPackagesComponent } from './dest-packages.component';

describe('DestPackagesComponent', () => {
  let component: DestPackagesComponent;
  let fixture: ComponentFixture<DestPackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestPackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
