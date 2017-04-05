import { Component, OnInit } from '@angular/core';
import { PageService } from '../../services/page.service';
import { Page } from '../../classes/page';

@Component({
    moduleId: module.id,
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss'],
    providers:[PageService]
})
export class PageComponent implements OnInit {
    private page: Page[];
    private errorMessage: string;

    constructor(private pageService: PageService) {}
    ngOnInit() {
        this.getPages();

    }

    getPages() {
        this.pageService.getPages()
            .subscribe(
                page => this.page = page,
                error =>  this.errorMessage = <any>error
            );
        console.log(this.page);
    }

}
