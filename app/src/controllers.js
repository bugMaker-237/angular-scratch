import {default as MainContent} from './components/main-content/mainContent.ctrl';
import {default as SideNav} from './components/side-nav/sideNav.ctrl';
import {default as ToolBar} from './components/tool-bar/toolBar.ctrl';
import {default as MenuToggle} from './directives/menu-toggle/menuToggle.ctrl';

let moduleName = 'app.controllers';

 angular.module(moduleName,[MainContent])
                .controller('SideNavController', SideNav)
                .controller('ToolBarController', ToolBar)
                .controller('MenuToggleDirectiveController', MenuToggle);
export default moduleName;