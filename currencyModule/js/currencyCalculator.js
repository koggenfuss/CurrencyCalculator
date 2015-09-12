/**
*  This module converts one currency to another currency
*/
var currency = new currencyFactory("dollar", 1);
console.log(currency);
/**
* Constructor to create Currency Calculator
*/
function currencyCalculatorFactory() {
	
	var collectCurrencyFromJSON= new Object();
	collectCurrencyFromJSON= [];

	 
	/**
	*  Function returns JSON string
	*/

	function getJSONdata(url) {
		var request = new XMLHttpRequest();
		request.open('GET', url);
		request.onreadystatechange = function(){
			if((request.status==200) && (request.readyState==4)){
				console.log(request.responseText);
			}
	    }
   	
	    request(send);
    }


	/**
	*  Function returns a Float
	*/


	function convertCurrencyCalculator (value) {



	}


	/**
	*  Function writes to display, returns nothing
	*/

	function displayToScreen() {


	}



	}



