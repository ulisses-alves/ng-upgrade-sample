import "babel-polyfill";
import "zone.js/dist/zone";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app";

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
