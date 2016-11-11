angular.module('myApp')

.factory('conversorDeMoeda', function() {
	var moedas = ['USD', 'EUR', 'CNY'];
	var dolarParaOutraMoeda = {
		USD: 1,
		EUR: 0.74,
		CNY: 6.09
	};

	var convert = function (amount, inCurr, outCurr) {
	  	return amount * dolarParaOutraMoeda[outCurr] / dolarParaOutraMoeda[inCurr];
	};

	return {
		moedas: moedas,
		convert: convert
	};
})  