/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {FormBuilder,Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {clientservice} from 'app/sd-services/clientservice';
import {sampledata} from 'app/models';
import {NSystemService} from 'neutrinos-seed-services'


/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-login',
    templateUrl: './login.template.html'
})

export class loginComponent extends NBaseComponent implements OnInit {
    sampleform;
    datasource;

    mysampledata:sampledata

    onclick:boolean = false;
    hint:boolean = true;
    environment =    NSystemService.getInstance()

    PeriodicElement = [
  {
    position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' }
  ,
  {
    position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' }
  ,
  {
    position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' }
  ,
  {
    position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' }
  ,
  {
    position: 5, name: 'Boron', weight: 10.811, symbol: 'B' }
  ,
  {
    position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' }
  ,
  {
    position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' }
  ,
  {
    position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' }
  ,
  {
    position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' }
  ,
  {
    position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
  ,
];


    constructor(private fb:FormBuilder,private myclient:clientservice) {
        super();
    }

    ngOnInit() {
        this.sampleform = this.fb.group({
            id:['',Validators.required],
            password:['',[
                Validators.required,
                Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')]]

        }

        );
        this.datasource = new MatTableDataSource(this.PeriodicElement)
        // console.log(this.environment.getVal('ssdURL'))
    }

    async onClick()
    {
        var valuefromclient;
        console.log(this.sampleform.value)
        console.log(this.environment.getVal('ssdURL'))

        this.onclick = true
        valuefromclient  = (await this.myclient.startfunction(this.sampleform.value)).local.mylocal;
        console.log("client",valuefromclient);

        this.mysampledata = {
            'firstname':'lucky',
            'lastname':'100',
            'age':23
        }

        console.log(this.mysampledata)
    }

}
