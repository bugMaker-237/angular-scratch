import { default as AppModule} from './app/src/main';
console.log('bootstraping...');
angular.bootstrap(document, [AppModule.name]);