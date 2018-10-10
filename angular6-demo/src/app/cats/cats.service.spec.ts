import {inject, TestBed} from '@angular/core/testing';

import {CatsService} from './cats.service';
import {HttpClientModule} from '@angular/common/http';

describe('CatsService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [CatsService]
        });
    });

    it('should be created', inject([CatsService], (service: CatsService) => {
        expect(service).toBeTruthy();
    }));
});
