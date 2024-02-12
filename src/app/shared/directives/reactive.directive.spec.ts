import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveDirective } from './reactive.directive';

@Component({
  selector: 'app-test-component',
  standalone: true,
  template: '<p>Test Component Works!</p>',
})
class TestComponent extends ReactiveDirective { }

describe('ReactiveDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let testComponent: TestComponent;

  beforeEach(async () => {
    fixture = TestBed.createComponent(TestComponent);
    testComponent = fixture.componentInstance;
  });

  it('should create an instance', () => {
    const directive = new ReactiveDirective();
    expect(directive).toBeTruthy();
  });

  it('should emit an event on component init', () => {
    const nextSpy = jest.spyOn(testComponent['$init'], 'next');
    testComponent.ngOnInit();
    expect(nextSpy).toHaveBeenCalled();
  });

  it('should emit an event on component destroy', () => {
    const nextSpy = jest.spyOn(testComponent['$destroy'], 'next');
    testComponent.ngOnDestroy();
    expect(nextSpy).toHaveBeenCalled();
  });
});
