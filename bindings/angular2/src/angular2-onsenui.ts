import './setup';
import * as browser from 'angular2/platform/browser'
import {Type} from 'angular2/core';

export * from 'angular2/core';
export * from './directives/ons-navigator';
export * from './directives/ons-carousel';
export * from './directives/ons-tabbar';
export * from './directives/ons-alert-dialog';
export * from './directives/ons-popover';
export * from './directives/ons-switch';
export * from './directives/ons-range';
export * from './directives/ons-input';


export * from './ons/notification';
export * from './ons/platform';
export * from './ons/createAlertDialog';
export * from './ons/createPopover';

export function bootstrap(type: Type, providers: Array<any> = []) {
  return browser.bootstrap(type, providers);
};

import {OnsNavigator} from './directives/ons-navigator';
import {OnsCarousel} from './directives/ons-carousel';
import {OnsTabbar} from './directives/ons-tabbar';
import {OnsAlertDialog} from './directives/ons-alert-dialog';
import {OnsPopover} from './directives/ons-popover';
import {OnsSwitch} from './directives/ons-switch';
import {OnsRange} from './directives/ons-range';
import {OnsInput} from './directives/ons-input';

export const ONS_DIRECTIVES = [
  OnsNavigator,
  OnsCarousel,
  OnsTabbar,
  OnsAlertDialog,
  OnsPopover,
  OnsSwitch,
  OnsRange,
  OnsInput
];
