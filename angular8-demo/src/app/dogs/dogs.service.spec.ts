import {inject, TestBed} from '@angular/core/testing';

import {DogsService} from './dogs.service';
import {HttpClientModule} from '@angular/common/http';

describe('DogsService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [DogsService]
        });
    });

    it('should be created', inject([DogsService], (service: DogsService) => {
        expect(service).toBeTruthy();
    }));
});
