import { sampledata } from '../src/app/models/sampledata.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
sampledata: sampledata;
//DECLARE NEW VARIABLE

constructor() {
this.sampledata = new sampledata();
//CREATE NEW DM INSTANCE
    }
}