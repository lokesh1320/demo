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
export class client {
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

  //   service flows_client

  async st(myinput: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          myinput: myinput,
        },
        local: {
          mylocal: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_XPfUXilsFAv451ug(bh);
      //appendnew_next_st
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TdJwLztXdFfNAqDM');
    }
  }

  async st2(...others) {
    try {
      var bh = {
        input: {},
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.sd_lpixmGMuvpbOaaHo(bh);
      //appendnew_next_st2
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DN24gbw6dd374woi');
    }
  }

  async st3(...others) {
    try {
      var bh = {
        input: {},
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.sd_k0udLMdcu33fr32C(bh);
      //appendnew_next_st3
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Cnd1Oej0Qdn5axjO');
    }
  }

  //appendnew_flow_client_start

  async sd_XPfUXilsFAv451ug(bh) {
    try {
      console.log('---', bh.input.myinput);

      bh.local.mylocal = {
        id: '!!!' + bh.input.myinput.id,
        password: '!!!' + bh.input.myinput.password,
      };
      // throw new Error()
      bh = await this.async1(bh);
      //appendnew_next_sd_XPfUXilsFAv451ug
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XPfUXilsFAv451ug');
    }
  }

  async async1(bh) {
    try {
      let promiseArray = [];
      promiseArray.push(this.st2());
      promiseArray.push(this.st3());

      bh.local.result = await Promise.all(promiseArray);
      this.sd_2KzLmStShEyLyNSu(bh);
      //appendnew_next_async1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ykueuuvCR1TLqqoE');
    }
  }

  async sd_2KzLmStShEyLyNSu(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.local.mylocal);
      //appendnew_next_sd_2KzLmStShEyLyNSu
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2KzLmStShEyLyNSu');
    }
  }

  async sd_lpixmGMuvpbOaaHo(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), 'data2');
      //appendnew_next_sd_lpixmGMuvpbOaaHo
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lpixmGMuvpbOaaHo');
    }
  }

  async sd_vYpam0eaPXScbmwM(bh) {
    try {
      console.log(bh.error);
      //appendnew_next_sd_vYpam0eaPXScbmwM
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vYpam0eaPXScbmwM');
    }
  }

  async sd_k0udLMdcu33fr32C(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), 'data3');
      //appendnew_next_sd_k0udLMdcu33fr32C
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_k0udLMdcu33fr32C');
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
    const catchConnectedNodes = ['sd_vYpam0eaPXScbmwM'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_vYpam0eaPXScbmwM(bh);
    //appendnew_next_mycatch
    return true;
  }
  //appendnew_flow_client_Catch
}
