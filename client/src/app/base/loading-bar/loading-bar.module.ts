import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoadingBarComponent} from './loading-bar/loading-bar.component';
import {LoadingBarInterceptor} from './services/loading-bar-interceptor.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {LoadingBarService} from './services/loading-bar.service';

@NgModule({
    declarations: [LoadingBarComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        ProgressSpinnerModule
    ],
    providers: [
        LoadingBarService ,
        {provide: HTTP_INTERCEPTORS, useClass: LoadingBarInterceptor, multi: true}
    ],
    exports: [LoadingBarComponent]
})
export class LoadingBarModule {}
