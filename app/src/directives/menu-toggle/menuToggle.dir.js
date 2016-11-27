import {default as MenuToggleDirectiveController} from './menuToggle.ctrl';
const MENU = new WeakMap();

class MenuToggleDirective {
  constructor(menu) {
    this.templateUrl = 'app/src/directives/menu-toggle/menuToggle.tpl.html';
    this.restrict = 'E';
    //this.controller = MenuToggleDirectiveController; if needed
    this.scope = {
      section: '=', 
      //the parent in this case is SideNavController
      parent : '='
    };
  }

    
  // Directive link function
  link(scope, $element) {
    let controller = scope.parent;

    scope.isOpen = function () {
      return controller.isOpen(scope.section);
    };
    scope.toggle = function () {
      controller.toggleOpen(scope.section);
    };
    
    var parentNode = $element[0].parentNode.parentNode.parentNode;
    if (parentNode.classList.contains('parent-list-item')) {
      var heading = parentNode.querySelector('h2');
      element[0].firstChild.setAttribute('aria-describedby', heading.id);
    }
  }

  static directiveFactory(){
    console.log('factoring...')
    MenuToggleDirective.instance =new MenuToggleDirective();
    return MenuToggleDirective.instance;
  }

}

export default MenuToggleDirective.directiveFactory; 