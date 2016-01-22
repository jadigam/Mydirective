(function() {

    var app = angular.module('ListModule', []);

    var injectParams = ['$scope'];

    var CustomersController = function ($scope) {
        var counter = 0;
        $scope.tasks = [{ title: 'Task 1' }];
        $scope.customer = {
            name: 'Vijaya',
            street: '1234 Anywhere St.'
        };
        $scope.errorMessage = "success";
        $scope.customers = [
            {
                name: 'Laxmi',
                street: '1234 Anywhere St.',
                age: 25,
                url: 'index.html'
            },
            {
                name: 'Jadigam',
                street: '1800 Crest St.',
                age: 35,
                url: 'index.html'
            },
            {
                name: 'Shrihan',
                street: '890 Main St.',
                age: 29,
                url: 'index.html'
            },
            {
                name: 'Kumar',
                street: '444 Cedar St.',
                age: 18,
                url: 'index.html'
            }
        ];

        $scope.addCustomer = function (name) {
            console.log(name);
            counter++;
            $scope.customers.push({
                name: (name) ? name : 'New Customer' + counter,
                street: counter + ' Cedar Point St.',
                age: counter
            });
        };

        $scope.changeData = function () {
            counter++;
            $scope.customer = {
                name: 'James',
                street: counter + ' Cedar Point St.'
            };
        };
    };

    CustomersController.$inject = injectParams;

    app.controller('ListController', CustomersController);

}());
