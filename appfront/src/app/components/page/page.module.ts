import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing.module';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        PageRoutingModule,
        PageHeaderModule
    ],
    declarations: [PageComponent]
})
export class PageModule { }
