import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {LoadingBarModule} from '../loading-bar.module';

@Injectable()
export class LoadingBarService {

    private requestsCount: number;
    private activeRequests = new BehaviorSubject<boolean>(false);

    constructor() {
        this.requestsCount = 0;
    }

    private setLoadingBar(): void {
      this.activeRequests.next(this.requestsCount > 0);
    }

    setActiveRequests(request: number): void {
        this.requestsCount += request;
        this.setLoadingBar();
    }

    setRequestObs(obs: any): void {
        console.log(obs);
    }

    get activeRequests$(): Observable<boolean> {
      return this.activeRequests.asObservable();
    }

}
