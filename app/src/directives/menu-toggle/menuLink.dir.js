class MenuLinkDirective {
  constructor() {
    this.templateUrl = 'app/src/directives/menu-toggle/menuLink.tpl.html';
    this.restrict = 'E';
    this.scope = {
      section : '=', 
      parent : '='
    };
  }

    
  // Directive link function
  link(scope, element) {
	let parent = scope.parent;

    scope.focusSection = () =>{
      parent.autoFocusContent = true;
    };
  }
  static directiveFactory(){
    console.log('factoring menulink...')
    MenuLinkDirective.instance =new MenuLinkDirective();
    return MenuLinkDirective.instance;
  }

}
export default MenuLinkDirective.directiveFactory;