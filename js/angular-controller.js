angular.module('myApp')

.controller('MyController', ['$scope','conversorDeMoeda', function ($scope, conversorDeMoeda) {
	$scope.variavel = 'Olá mundo!';
	$scope.phone = '';
	$scope.valores = conversorDeMoeda.moedas;
	
	$scope.pessoas = [
	  	{"nome": "nayara", "idade" : 30, "cor":"success"},
	  	{"nome": "luis felipe", "idade" : 2, "cor":"warning"},
	  	{"nome": "luis miguel", "idade" : 1, "cor":"error"},
	  	{"nome": "willians", "idade" : 35, "cor":"inverse"}
	];

  	$scope.atualizar = function(novo){
		$scope.variavel += novo;
  	}

  	$scope.popularPhone = function(){
		$scope.phone = "551193650220";
  	}

}]);