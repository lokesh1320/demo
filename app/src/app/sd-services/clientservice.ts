/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from '../../app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable()
export class clientservice {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {
    this.registerListeners();
  }
  registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_clientservice

  async startfunction(myinput: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          myinput: myinput,
        },
        local: {
          mylocal: undefined,
          mynumber: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_aAz7uclm5byXRnKN(bh);
      //appendnew_next_startfunction
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Qw7LCTaWeoM53Eki');
    }
  }

  async start2(...others) {
    try {
      var bh = {
        input: {},
        local: {
          another: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_yPZv8g31bScBjBBY(bh);
      //appendnew_next_start2
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EJCanAH9O6gIJ6wW');
    }
  }

  async start3(...others) {
    try {
      var bh = {
        input: {},
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.sd_4H9P4e6a5ApaKaF5(bh);
      //appendnew_next_start3
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vhhbehUIGT49057i');
    }
  }

  //appendnew_flow_clientservice_start

  async sd_aAz7uclm5byXRnKN(bh) {
    try {
      console.log('script1', bh.input.myinput);
      // console.log('script2',bh.local.mylocal)

      bh.local.mylocal = {
        id: '@@@@' + bh.input.myinput.id,
        password: '@@@@' + bh.input.myinput.password,
      };

      // throw new Error("Error")
      bh = await this.jsondata(bh);
      //appendnew_next_sd_aAz7uclm5byXRnKN
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aAz7uclm5byXRnKN');
    }
  }

  async jsondata(bh) {
    try {
      let requestOptions = {
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.data = await this.sdService.nHttpRequest(requestOptions);
      this.sd_6po39moxMUtkfYm0(bh);
      //appendnew_next_jsondata
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DNXtNBkTFSgaJwnU');
    }
  }

  async sd_6po39moxMUtkfYm0(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.local.data);
      //appendnew_next_sd_6po39moxMUtkfYm0
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6po39moxMUtkfYm0');
    }
  }

  async sd_yPZv8g31bScBjBBY(bh) {
    try {
      bh.local.another = 'data';
      this.sd_kPntl7tgrw3jtMK2(bh);
      //appendnew_next_sd_yPZv8g31bScBjBBY
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yPZv8g31bScBjBBY');
    }
  }

  async sd_kPntl7tgrw3jtMK2(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.local.another);
      //appendnew_next_sd_kPntl7tgrw3jtMK2
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kPntl7tgrw3jtMK2');
    }
  }

  async sd_sa21EI0wxWI1z3Fh(bh) {
    try {
      console.log('exception');
      console.log(bh.error);
      //appendnew_next_sd_sa21EI0wxWI1z3Fh
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sa21EI0wxWI1z3Fh');
    }
  }

  async sd_4H9P4e6a5ApaKaF5(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), 'data3');
      //appendnew_next_sd_4H9P4e6a5ApaKaF5
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4H9P4e6a5ApaKaF5');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.mycatch(bh))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  async mycatch(bh) {
    const catchConnectedNodes = ['sd_sa21EI0wxWI1z3Fh'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_sa21EI0wxWI1z3Fh(bh);
    //appendnew_next_mycatch
    return true;
  }
  //appendnew_flow_clientservice_Catch
}
