$scope.tasks = $meteor.collection(function() {
  return Tasks.find({}, { sort: { createdAt: -1 } })
});

if (Meteor.isClient) {

    // This code only runs on the client
    angular.module("simple-todos",['angular-meteor']);

    angular.module("simple-todos").controller("TodosListCtrl", ['$scope', '$meteor',
      function($scope, $meteor){

       $scope.tasks = $meteor.collection(function() {
  return Tasks.find({}, { sort: { createdAt: -1 } })
});

        // Inside the if (Meteor.isClient) block, right after the definition of $scope.tasks:
        $scope.addTask = function(newTask) {
          $scope.tasks.push( {
            text: newTask,
            createdAt: new Date() }
          );
        };

    }]);
    
    
    
}