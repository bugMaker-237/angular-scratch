import {default as AppConfig} from './services/config.srv';
import {default as Menu} from './services/menu.srv';

let moduleName = 'app.services';
angular.module('app.services', [])
                .service('appConfig', AppConfig)
                .service('menu', Menu);
export default moduleName;