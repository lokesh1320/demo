/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {FormBuilder} from '@angular/forms'

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-test',
    templateUrl: './test.template.html'
})

export class testComponent extends NBaseComponent implements OnInit {
    sample

    constructor(private fb:FormBuilder) {
        super();
    }

    ngOnInit() {
        this.sample = this.fb.group({
            id:[''],
            password:['']
        });

    }

    onClick(){
        console.log(this.sample.value);
    }


}
