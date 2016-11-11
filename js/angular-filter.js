angular.module('myApp')
.filter('myFilter', function myFilter($filter){
  return function(phone, valor){
    // var  tempdate= new Date(text.replace(/-/g,"/")); 
    // return $filter('date')(tempdate, "dd/MM/yyyy");
	// debugger;
    // return "abc";
    console.info(valor);
    var phoneReturn;
    if (phone) {
        phoneReturn = phone.replace(/(\d{2})(\d)/, "($1) $2");

        if (phone.length < 11) {
            phoneReturn = phoneReturn.replace(/(\d{4})(\d)/, "$1-$2");
        } else {
            phoneReturn = phoneReturn.replace(/(\d{5})(\d)/, "$1-$2");
        }

    }
    return phoneReturn;
  }
});