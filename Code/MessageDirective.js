(function () {

 angular.module('ListModule')
      .directive('tableHelper', function () {

          return {
              restrict: 'E',
              scope: {
  
                  datasource: '='
              },
              template: '<div class="tableHelper"></div>',
              
                         link: function (scope, element, attrs) {
   
          }
 });
   
}());
