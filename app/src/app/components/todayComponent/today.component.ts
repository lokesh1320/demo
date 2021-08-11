/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {FormBuilder,Validators} from '@angular/forms';
import {NSystemService} from 'neutrinos-seed-services'
import {sampledata} from 'app/models';




/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-today',
    templateUrl: './today.template.html'
})

export class todayComponent extends NBaseComponent implements OnInit {

    sample;
    show:boolean = false
    environment =    NSystemService.getInstance()
    mysampledata:sampledata




    // titles= [{name: "Experiment 1"}, {name: "Experiment 2"}];

//     tiles: Tile[] = [
// {text: 'One'},
// {text: 'Two'},
// {text: 'Three'},
// {text: 'Four'},
// ];


    constructor(private fb:FormBuilder) {
        super();
    }

    ngOnInit() {
        this.sample = this.fb.group({
            firstname:['',[Validators.required]],
            lastname:['',
                [Validators.required,Validators.pattern("^[a-zA-Z ]*$")]]

        }

        );
        
    }
    opened() 
    {
        alert("Datepicker opened");
    }
    valueChange(){
        alert('value changed')
    }
    animation(){
    alert('animation end')
}
    changed(){
        console.log('changed')
    }
    onselect(value)
    {
        alert(value)
    }
    clickEvent() {
  alert("Button clicked!!!");
}


    onclick()
    {
        if(this.sample.controls.firstname.value == '' || this.sample.controls.lastname.value == '')
        {
            console.log('Enter values ')
        }
        else{
        console.log(this.sample.value)
        this.show = true
        console.log(this.environment.getVal('myproperty'))
        this.mysampledata = {
            'firstname':'lucky',
            'lastname':'100',
            'age':23
        }

        console.log('model',this.mysampledata)
        

        }
    }

    msgchild(msgchild){
        console.log('mssage from child::',msgchild)
    }
}
