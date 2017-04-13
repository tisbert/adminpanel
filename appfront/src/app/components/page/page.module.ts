import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TinymceModule } from 'angular2-tinymce';
import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing.module';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PageRoutingModule,
        PageHeaderModule,
        TinymceModule.withConfig({})

    ],
    declarations: [PageComponent]
})
export class PageModule { }
