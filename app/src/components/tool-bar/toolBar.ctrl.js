const SCROLLSHADOW = new WeakMap();
const SCROLLSHRINK = new WeakMap();
const SIDENAV = new WeakMap();
class ToolBarController{

    //gets the shadow property of the toolbar
    get scrollShadow() {
        console.log(SCROLLSHADOW.get(this));
        return SCROLLSHADOW.get(this);
    }
    
    //gets the shrink property of the toolbar
    get scrollShrink(){
        return SCROLLSHRINK.get(this);
    }

    constructor(appConfig, $mdSidenav, $timeout){
        $timeout(()=> {
            SIDENAV.set(this, $mdSidenav);
        }, false)
        
        //setting the property of the shadow from config
        SCROLLSHADOW.set(this, 'md-whiteframe-z' + appConfig.ToolBar.scrollShadow)
        SCROLLSHRINK.set(this, appConfig.ToolBar.scrollShrink);
    }
    toggleSideNav(){
        let side = SIDENAV.get(this);
        side("left").open();
    }
    static controllerFactory(appConfig, $mdSidenav, $timeout){
        ToolBarController.instance = new ToolBarController(appConfig, $mdSidenav, $timeout);
        return ToolBarController.instance;
    }
}
ToolBarController.controllerFactory.$inject = ['appConfig', '$mdSidenav', '$timeout'];

export default ToolBarController.controllerFactory;