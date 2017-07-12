'use strict';


let algoModule = angular.module('app.algo', [])
   
    .config(['$stateProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
        /*
          Define a state with name 'blog' this state is abstract and url is empty (root of application)
          template is ui-view it's used to display nested views
        */
        $stateProvider

            .state('algo1', {
                url: '/algo1',
                templateUrl: 'js/components/algo/algo1.html'
            })

            
    }])
    .name

export default algoModule