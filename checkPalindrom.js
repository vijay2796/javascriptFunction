function checkPalindrom (str){

	const length = str.length;

	for (i=0; i<length/2; i++){

		if (str[i] !==str[length-1-i]){

    		console.log('it is not Palindrom');
  
			return;
		}
	}
	
	console.log('it is a Palindrom');

}
	const string = '1234321';
    checkPalindrom (string);
