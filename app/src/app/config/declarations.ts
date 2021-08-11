import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';


window['neutrinos'] = {
  environments: environment
}

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-customersComponent
import { customersComponent } from '../components/customersComponent/customers.component';
//CORE_REFERENCE_IMPORT-dialogComponent
import { dialogComponent } from '../components/dialogComponent/dialog.component';
//CORE_REFERENCE_IMPORT-dialohbozComponent
import { dialohbozComponent } from '../components/dialohbozComponent/dialohboz.component';
//CORE_REFERENCE_IMPORT-childComponent
import { childComponent } from '../components/childComponent/child.component';
//CORE_REFERENCE_IMPORT-todayComponent
import { todayComponent } from '../components/todayComponent/today.component';
//CORE_REFERENCE_IMPORT-logindemoComponent
import { logindemoComponent } from '../components/logindemoComponent/logindemo.component';
//CORE_REFERENCE_IMPORT-demoComponent
import { demoComponent } from '../components/demoComponent/demo.component';
//CORE_REFERENCE_IMPORT-testComponent
import { testComponent } from '../components/testComponent/test.component';
//CORE_REFERENCE_IMPORT-loginComponent
import { loginComponent } from '../components/loginComponent/login.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/homeComponent/home.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => startupService.getDataSource();
}

/**
*bootstrap for @NgModule
*/
export const appBootstrap: any = [
  LayoutComponent,
];


/**
*declarations for @NgModule
*/
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-customersComponent
customersComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dialogComponent
dialogComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dialohbozComponent
dialohbozComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-childComponent
childComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-todayComponent
todayComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-logindemoComponent
logindemoComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-demoComponent
demoComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-testComponent
testComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginComponent
loginComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
homeComponent,

];

/**
* provider for @NgModuke
*/
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY

];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [{path: 'login', component: loginComponent},{path: 'home', component: homeComponent},{path: 'test', component: testComponent},{path: 'demo', component: demoComponent},{path: 'logindemo', component: logindemoComponent},{path: 'today', component: todayComponent},{path: '', redirectTo: 'login', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
