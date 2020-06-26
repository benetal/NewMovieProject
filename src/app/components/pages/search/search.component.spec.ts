import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import {ApiService} from "../../../services/api.service";

describe('SearchComponent', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let apiService: ApiService;
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    apiService = new ApiService(<any>httpClientSpy);
  });
  it('should be created', () => {
    expect(apiService).toBeTruthy();
  });
});
