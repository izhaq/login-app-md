import {Component, OnInit} from '@angular/core';
import {LoadingBarService} from '../services/loading-bar.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-loading-bar',
    templateUrl: './loading-bar.component.html',
    styleUrls: ['./loading-bar.component.scss']
})
export class LoadingBarComponent{
    constructor(private loadingBarService: LoadingBarService) {
    }

  get loadingBar(): Observable<boolean> {
        return this.loadingBarService.activeRequests$;
    }

}
