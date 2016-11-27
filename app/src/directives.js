import {default as MenuToggle} from './directives/menu-toggle/menuToggle.dir';
import {default as MenuLink} from './directives/menu-toggle/menuLink.dir';

let moduleName = 'app.directives';

 angular.module(moduleName,[])
                .directive('menuToggle', MenuToggle)
                .directive('menuLink', MenuLink);

export default moduleName;