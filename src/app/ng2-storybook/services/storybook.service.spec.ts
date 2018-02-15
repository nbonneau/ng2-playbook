/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StorybookService } from './storybook.service';

describe('Service: Storybook', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorybookService]
    });
  });

  it('should ...', inject([StorybookService], (service: StorybookService) => {
    expect(service).toBeTruthy();
  }));
});