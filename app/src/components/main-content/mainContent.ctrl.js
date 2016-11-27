import {default as Dashboard} from './main-content-ctrl/dashboard.ctrl';

let moduleName = 'mainContent.controllers';

 angular.module(moduleName,[])
                .controller( 'DashBoardController', Dashboard);   
                
export default moduleName;