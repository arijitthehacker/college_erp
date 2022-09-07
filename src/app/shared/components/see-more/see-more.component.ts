import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-see-more',
    templateUrl: './see-more.component.html'
})
export class SeeMoreComponent {

    @Input() title = 'Description Details';
    @Input() msg = 'N.A.';

    constructor() {
    }

}

