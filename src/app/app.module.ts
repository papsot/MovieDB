import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { IndexComponent } from './components/index/index.component';
import { IndextestComponent } from './components/indextest/indextest.component';

@NgModule({
    declarations: [
        IndexComponent,
        IndextestComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [IndexComponent]
})
export class AppModule { }
