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
    private pageList: Page[];
    private errorMessage: string;
    private result: {};

    constructor(private pageService: PageService) {}
    ngOnInit() {
        this.getPages();

    }

    getPages() {
        this.pageService.getPages()
            .subscribe(
                // function(response) {
                //     this.pageList = response;
                // },
                // function(error) { console.log("Error happened" + error)},
                // function() {
                //     console.log(this.pageList);
                // }
                // response => this.result = response,
                result => this.pageList = result,
                error =>  this.errorMessage = <any>error,
                function() { console.log(this.pageList)}
            );
    }

}
