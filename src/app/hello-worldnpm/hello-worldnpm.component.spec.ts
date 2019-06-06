import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldnpmComponent } from './hello-worldnpm.component';

describe('HelloWorldnpmComponent', () => {
  let component: HelloWorldnpmComponent;
  let fixture: ComponentFixture<HelloWorldnpmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloWorldnpmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldnpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
