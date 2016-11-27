const MENU = new WeakMap();

class SideNavController{
    get getMenus(){
        console.log(MENU.get(this).menu);
        return MENU.get(this).menu;
    }
    constructor(menu){
        this.autoFocusContent = false;
        MENU.set(this, menu); 
        this.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };  
    }
    isOpen(section) {
        return MENU.get(this).isSectionSelected(section);
    }

    toggleOpen(section) {
        MENU.get(this).toggleSelectSection(section);
    }
    static controllerFactory(menu){
        console.log('factoring sidenav...')
        SideNavController.instance =new SideNavController(menu);
        return SideNavController.instance;
    }
}

SideNavController.controllerFactory.$inject = ['menu'];

export default SideNavController.controllerFactory;