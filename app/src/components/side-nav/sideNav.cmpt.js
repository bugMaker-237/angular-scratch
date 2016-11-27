import {default as SideNavController} from './sideNav.ctrl';
export default {
    templateUrl: 'app/src/components/side-nav/sideNav.tpl.html',
    bindings         : {  selected: '<' }  , 
    controller : SideNavController,
    controllerAs : 'sn'
};