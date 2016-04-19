import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import { PartiesList as PartiesList } from '../imports/ui/components/partiesList/partiesList';
 
angular.module('socially', [
    angularMeteor,
    PartiesList
  ]);