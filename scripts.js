var myRe = /abc/g;

var myString = 'abcoabcijabc'

var myArray = myString.match(myRe);

//only going to return first index

//match gives you an array with however many matches there are 
//exec gives you a result array 

// console.log(myArray);

//write a javascript function to check whether a credit card number is valid 

// must have 16 digits unless it starts with a 37 or 34, then it must have 15 digits


// creditCardCodes = {
// 	'6011': 'Discover Card',
// 	'37': 'AmericanExpress',
// 	 '34': 'American Express',
// 	'4': 'Visa'
// 	50-55 = MasterCard	
// }


function validateCard(creditCardNumber){
	if((creditCardNumber.length > 16) || (creditCardNumber.length < 15)){
		console.log('not valid');
	}else{
		//run logic as you know it has the potential to be valid
	}
}


validateCard('41472022214987');