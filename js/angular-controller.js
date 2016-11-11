angular.module('myApp')

.controller('MyController', ['$scope','conversorDeMoeda', function ($scope, conversorDeMoeda) {
  $scope.variavel = 'Olá mundo!';
  $scope.valor = conversorDeMoeda.moedas;

  $scope.atualizar = function(novo){
	$scope.variavel += novo;
  }

}]);