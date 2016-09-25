import "babel-polyfill";
import "zone.js/dist/zone";
import {UpgradeAdapter} from "@angular/upgrade";
import {AppModule} from "./app/app";
import {HeaderComponent} from "./app/header/header";

const upgradeAdapter = new UpgradeAdapter(AppModule);

angular.module("app").directive("appHeader",
  <any>upgradeAdapter.downgradeNg2Component(HeaderComponent));

upgradeAdapter.bootstrap(document.body, ["app"], {strictDi: true});
