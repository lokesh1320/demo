/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-child',
    templateUrl: './child.template.html'
})

export class childComponent extends NBaseComponent implements OnInit {
    @Input() msgparent
    @Output() msgchild = new EventEmitter()

    constructor() {
        super();
    }

    ngOnInit() {
        console.log('came from parent',this.msgparent)

    }
    onchild(){
        this.msgchild.emit('message came from child')
    }
}
