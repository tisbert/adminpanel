import {Component, OnInit} from '@angular/core';
import {PageService} from '../../services/page.service';
import {Page} from '../../classes/page';

@Component({
    moduleId: module.id,
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss'],
    providers: [PageService]
})

export class PageComponent implements OnInit {
    private pageList: Page[] = [];
    private page: Page;
    private errorMessage: any;
    private result: any;

    constructor(private pageService: PageService) {
    }

    ngOnInit() {
        this.page = new Page;
        this.getPages();

    }

    getPages() {
        this.pageService.getPages()
            .subscribe(
                response => this.pageList = response,
                error => this.errorMessage = <any>error
            );
    }

    getPage(id: number) {
        this.pageService.getPage(id)
            .subscribe(
                response => this.page = response[0],
                error => this.errorMessage = <any>error,
            );
    }

    deletePage(id: number) {
        this.pageService.deletePage(id)
            .subscribe(
                response => this.result = response,
                error => this.errorMessage = <any>error,
                () => {
                    this.getPages();
                }
            );
    }

    pageSave() {
        if (this.page.title && this.page.text) {
            if (this.page.id) {
                this.pageService.updatePage(this.page)
                    .subscribe(
                        response => this.result = response,
                        error => this.errorMessage = <any>error,
                        () => {
                            this.getPages();
                            this.clearForm();
                        }
                    );
            }else {
                this.pageService.addPage(this.page)
                    .subscribe(
                        response => this.result = response,
                        error => this.errorMessage = <any>error,
                        () => {
                            this.getPages();
                            this.clearForm();
                        }
                    );
            }
        }
    }

    editPage(id: number) {
        this.getPage(id);

    }

    clearForm() {
        this.page.id = null;
        this.page.title = "";
        this.page.text = "";
    }

}
