
class Menu{
    constructor($location){
      
      this.menu = [
        {
          name: 'Getting Started',
          href: '#/',
          type: 'link'
        }, {
          name: 'Demos',
          type: 'toggle',
          pages: [{
            name: 'Dashboard',
            type: 'link',
            href: '#/dashboard',
            icon: 'fa fa-group'
          }, {
            name: 'Architecture',
            href: '#/architecture',
            type: 'link',
            icon: 'fa fa-map-marker'
          },
            {
              name: 'Contact',
              href: '#/contact',
              type: 'link',
              icon: 'fa fa-plus'
            }]
        }, {
          name: 'Special',
          type: 'toggle',
          pages: [{
            name: 'Tile',
            type: 'link',
            href: '#/tile',
            icon: 'fa fa-group'
          }, {
            name: 'Portofolio',
            href: '#/portofolio',
            type: 'link',
            icon: 'fa fa-map-marker'
          },
            {
              name: 'More',
              href: '#/more',
              type: 'link',
              icon: 'fa fa-map-marker'
            }]
        }
      ]
      this.openedSection = {};
    }
    toggleSelectSection(section){
      console.log('toggling...');
        this.openedSection = (this.openedSection === section ? null : section)
    }
    isSectionSelected(section){
      return this.openedSection === section;
    }
    selectPage(){

    }
    static serviceFactory($location){
      Menu.instance = new Menu($location);
      return Menu.instance;
    }
}
Menu.serviceFactory.$inject = ['$location'];
export default Menu.serviceFactory;

