import {default as SideNav} from './components/side-nav/sideNav.cmpt';
import {default as ToolBar} from './components/tool-bar/toolBar.cmpt';

let moduleName = 'app.components';
 angular.module(moduleName,[])
                .component('sideNav', SideNav)
                .component('toolBar', ToolBar);

export default moduleName;