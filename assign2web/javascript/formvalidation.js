
		<!--
		
		//Name:Sean Lee Jin Xiang
		// JavaScript Document

			function IsValidCharacters(email) {
				validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@.-_";
				len = email.length;

		        for(i=0 ; i<len ; i++) {
					letterPos = validChars.indexOf(email.charAt(i), 0);
					if(letterPos < 0) {
						return false;
					}
				}
				return true;
			}
			
			
			function ValidateEmail(email) {
				if(email == null)				{ alert("Email address cannot contain a NULL value."); return false; }
				if(email == "")					{ alert("Email address cannot contain an EMPTY value."); return false; }
				if(!IsValidCharacters(email))	{ alert("Email address has INVALID characters."); return false; }
	
				
			    if (email.indexOf("@") == 0) {
					alert("@ cannot be the first character.");
					return false;
				}
				
				
			    if (email.indexOf("@") < 0) {
					alert("Must contain at least one (1) @ symbol.");
					return false;
				}

				
			    if (email.indexOf("@") != email.lastIndexOf("@")) {
					alert("Must contain only one @ symbol.");
					return false;
				}
				
				
				if (email.lastIndexOf(".") < email.indexOf("@")) {
					alert("The last dot ( . ) must be after the @ symbol.");
					return false;
				}

				if (email.indexOf("..") >= 0) {
					alert("Cannot have two dots ( .. ) together.");
					return false;
				}

				
				if (email.indexOf(".@") >= 0) {
					alert("Cannot have a dot ( . ) and @ symbol together.");
					return false;
				}

				
				if (email.indexOf("@.") >= 0) {
					alert("Cannot have an @ symbol and dot ( . ) together.");
					return false;
				}

				
				if (email.lastIndexOf(".") == (email.length - 1)) {
					alert("Last character cannot be a dot ( . )");
					return false;
				}
				return true;
			}
			
			
			
			
			function ValidateFirstName(firstname) {
				validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
				len = firstname.length;

				if(firstname == "") { alert("First Name MUST contain a value"); return false; }
				
		        for(i=0 ; i<len ; i++) {
					letterPos = validChars.indexOf(firstname.charAt(i), 0);
					if(letterPos < 0) {
						alert("First Name has INVALID characters.");
						return false;
					}
				}
				return true;
			}
			
			function ValidateLastName(lastname) {
				validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
				len = lastname.length;

				if(lastname == "") { alert("Last Name MUST contain a value"); return false; }
				
		        for(i=0 ; i<len ; i++) {
					letterPos = validChars.indexOf(lastname.charAt(i), 0);
					if(letterPos < 0) {
						alert("Last Name has INVALID characters.");
						return false;
					}
				}
				return true;
			}
			
			
			function ValidateStreetNumber(streetnumber)	{
				validChars = "0123456789";
				len = streetnumber.length;
				
				if(streetnumber == "") { alert(" Street Number MUST contain a value"); return false;}
				
				for(i=0;i<len;i++) {
					letterPos = validChars.indexOf(streetnumber.charAt(i), 0);
					if(letterPos < 0) {
						alert("Street Number has INVALID characters.");
						return false;
					}
				}
				return true;
			}
			
			function ValidateStreetName(streetname)	{
				validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
				len = streetname.length;
				
				if(streetname == "") { alert(" Street Name MUST contain a value"); return false;}
				
				for(i=0;i<len;i++) {
					letterPos = validChars.indexOf(streetname.charAt(i), 0);
					if(letterPos < 0) {
						alert("Street Name has INVALID characters.");
						return false;
					}
				}
				return true;
			}
			
			function ValidateSuburb(suburb)	{
				validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
				len = suburb.length;
				
				if(suburb == "") { alert(" Suburb MUST contain a value"); return false;}
				
				for(i=0;i<len;i++) {
					letterPos = validChars.indexOf(suburb.charAt(i), 0);
					if(letterPos < 0) {
						alert("Suburb Name has INVALID characters.");
						return false;
					}
				}
				return true;
			}
			
			
			function ValidatePostCode(postcode) {
				validChars = "0123456789";
				len = postcode.length;
				
				if(postcode == "") { alert("Postcode MUST contain a value"); return false;}
			
				for(i=0 ; i<len ; i++) {
					letterPos = validChars.indexOf(postcode.charAt(i), 0);
					if(letterPos < 0) {
						alert("Postcode has INVALID characters.");
						return false;
					}
					
				}

				
				if (len >4) {
						alert("Postcode MUST contain four(4) digits.");
						return false;
					}
					
				if (len <4) {
						alert("Postcode MUST contain four(4) digits.");
						return false;
					}
				
		        return true;
			}
				function ValidateAge(age) {
				validChars = "0123456789";
				len = age.length;
				
				if(age == "") { alert("Age MUST contain a value"); return false;}
			
				for(i=0 ; i<len ; i++) {
					letterPos = validChars.indexOf(age.charAt(i), 0);
					if(letterPos < 0) {
						alert("Age has INVALID characters.");
						return false;
					}
					
				}

				
				if (age >90) {
						alert("Age MUST be between 16 - 90.");
						return false;
					}
					
				if (age <16) {
						alert("Age MUST be bewtween 16 - 90.");
						return false;
					}
				
		        return true;
			}
			
			function ValidateHomeNum(homenum) {
				validChars = "0123456789";
				len = homenum.length;
				
				if(homenum == "") { alert("Home Phone Number MUST contain a value"); return false;}
			
				
				for(i=0 ; i<len ; i++) {
					letterPos = validChars.indexOf(homenum.charAt(i), 0);
					if(letterPos < 0) {
						alert("Home Phone Number has INVALID characters.");
						return false;
					}
					
				}
				if (len >8) {
						alert("Home Phone Number MUST contain eight(8) digits.");
						return false;
					}
					
				if (len <8) {
						alert("Home Phone Number MUST contain eight(8) digits.");
						return false;
					}
		        return true;
			}
			
			function ValidateMobileNum(mobilenum) {
				validChars = "0123456789";
				len = mobilenum.length;
				
				if(mobilenum == "") { alert("Mobile Number MUST contain a value"); return false;}
			
				
				for(i=0 ; i<len ; i++) {
					letterPos = validChars.indexOf(mobilenum.charAt(i), 0);
					if(letterPos < 0) {
						alert("Mobile Number has INVALID characters.");
						return false;
					}
					
				}
				if (len >10) {
						alert("Mobile Number MUST contain ten(10) digits.");
						return false;
					}
					
				if (len <10) {
						alert("Mobile Number MUST contain ten(10) digits.");
						return false;
					}
		        return true;
			}
		
		
		function ValidateFaxNumber(faxnumber) {
				validChars = "0123456789";
				len = faxnumber.length;
				
				if(faxnumber == "") { alert("Fax Number MUST contain a value"); return false;}
			
				
				for(i=0 ; i<len ; i++) {
					letterPos = validChars.indexOf(faxnumber.charAt(i), 0);
					if(letterPos < 0) {
						alert("Fax Number has INVALID characters.");
						return false;
					}
					
				}
				if (len >8) {
						alert("Fax  Number MUST contain eight(8) digits.");
						return false;
					}
					
				if (len <8) {
						alert("Fax Number MUST contain eight(8) digits.");
						return false;
					}
		        return true;
			}
		
		
		
		
		
		
			function ValidateState(state) {
				if (state == "") {
						alert ("Please select a state");
						return false;
				}
			
				return true;
			}
			
			
			
			function ValidateCountry(country) {
				if (country == "") {
						alert ("Please select a country");
						return false;
				}
				return true;
				
			}
			
				function ValidateCCnumber1(ccnumber1) {
				validChars = "0123456789";
				len = ccnumber1.length;
				
				if(ccnumber1 == "") { alert("Please Insert Your Credit Card Number"); return false;}
			
				
				for(i=0 ; i<len ; i++) {
					letterPos = validChars.indexOf(ccnumber1.charAt(i), 0);
					if(letterPos < 0) {
						alert("Credit Card Number has INVALID characters.");
						return false;
					}
					
				}
				if (len >4) {
						alert("Credit Card number invalid, Please re-insert Credit Card number.");
						return false;
					}
					
				if (len <4) {
						alert("Credit Card number invalid, Please re-insert Credit Card number.");
						return false;
					}
		        return true;
			}
			
				function ValidateCCnumber2(ccnumber2) {
				validChars = "0123456789";
				len = ccnumber2.length;
				
				if(ccnumber2 == "") { alert("Credit Card number invalid, Please re-insert Credit Card number"); return false;}
			
				
				for(i=0 ; i<len ; i++) {
					letterPos = validChars.indexOf(ccnumber2.charAt(i), 0);
					if(letterPos < 0) {
						alert("Credit Card Number has INVALID characters.");
						return false;
					}
					
				}
				if (len >4) {
						alert("Credit Card number invalid, Please re-insert Credit Card number.");
						return false;
					}
					
				if (len <4) {
						alert("Credit Card number invalid, Please re-insert Credit Card number.");
						return false;
					}
		        return true;
			}
			
				function ValidateCCnumber3(ccnumber3) {
				validChars = "0123456789";
				len = ccnumber3.length;
				
				if(ccnumber3 == "") { alert("Credit Card number invalid, Please re-insert Credit Card number"); return false;}
			
				
				for(i=0 ; i<len ; i++) {
					letterPos = validChars.indexOf(ccnumber3.charAt(i), 0);
					if(letterPos < 0) {
						alert("Credit Card Number has INVALID characters.");
						return false;
					}
					
				}
				if (len >4) {
						alert("Credit Card number invalid, Please re-insert Credit Card number.");
						return false;
					}
					
				if (len <4) {
						alert("Credit Card number invalid, Please re-insert Credit Card number.");
						return false;
					}
		        return true;
			}
			
			
			
			function ValidateCCnumber4(ccnumber4) {
				validChars = "0123456789";
				len = ccnumber4.length;
				
				if(ccnumber4 == "") { alert("Credit Card number invalid, Please re-insert Credit Card number"); return false;}
			
				
				for(i=0 ; i<len ; i++) {
					letterPos = validChars.indexOf(ccnumber4.charAt(i), 0);
					if(letterPos < 0) {
						alert("Credit Card Number has INVALID characters.");
						return false;
					}
					
				}
				if (len >4) {
						alert("Credit Card number invalid, Please re-insert Credit Card number.");
						return false;
					}
					
				if (len <4) {
						alert("Credit Card number invalid, Please re-insert Credit Card number.");
						return false;
					}
		        return true;
			}
			
			
			function ValidateDate1(date1) {
				if (date1 == "") {
						alert ("Please select a Date");
						return false;
				}
				return true;
				
			}
			
			function ValidateMonth(month) {
				if (month == "") {
						alert ("Please select a Month");
						return false;
				}
				return true;
				
			}
			
			function ValidateYear(year) {
				if (year == "") {
						alert ("Please select a Year");
						return false;
				}
				return true;
				
			}
			
			
			
			
			
			
			function filtery(pattern, list){

				if (!list.bak){
		
					list.bak = new Array();
					for (n=0; n<list.length; n++){
						list.bak[list.bak.length] = new Array(list[n].value, list[n].text);
					}
				}

 
				match = new Array();
				nomatch = new Array();
				for (n=0;n<list.bak.length;n++){
					if(list.bak[n][1].toLowerCase().indexOf(pattern.toLowerCase())!=-1){
						match[match.length] = new Array(list.bak[n][0], list.bak[n][1]);
					}else{
						nomatch[nomatch.length] = new Array(list.bak[n][0], list.bak[n][1]);
					}
				}

 
 
				for (n=0; n<match.length; n++){
					list[n].value = match[n][0];
					list[n].text = match[n][1];
				}
				 for (n=0; n<nomatch.length; n++){
				   list[n+match.length].value = nomatch[n][0];
				   list[n+match.length].text = nomatch[n][1];
				 }

			
				 list.selectedIndex=0;
			}
			
			function ValidateForm(formObj) {
				// Initialisation of variables
				email = formObj.EmailAddress.value;
				lastname = formObj.LastName.value;
				firstname = formObj.FirstName.value;
				streetnumber = formObj.StreetNumber.value;
				streetname = formObj.StreetName.value;
				suburb = formObj.Suburb.value;
				postcode = formObj.PostCode.value;
				age = formObj.Age.value;
				homenum = formObj.HomeNum.value;
				mobilenum = formObj.MobileNum.value;
				state = formObj.State.value;
				country = formObj.Country.value;
				ccnumber1 = formObj.CCnumber1.value;
				ccnumber2 = formObj.CCnumber2.value;
				ccnumber3 = formObj.CCnumber3.value;
				ccnumber4 = formObj.CCnumber4.value;
				date1 = formObj.Date1.value;
				month = formObj.Month.value;
				year = formObj.Year.value;
				faxnumber = formObj.FaxNumber.value;
				
				
			
			//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
				// validate firstname
				if(!ValidateFirstName(firstname))  {
				    formObj.FirstName.select();
				    return false;
				}
				// validate lastname
				if(!ValidateLastName(lastname)) {
					formObj.LastName.select();
					return false;
				}	
				//validate streetnumber
				if(!ValidateStreetNumber(streetnumber)) {
					formObj.StreetNumber.select();
					return false;
				}
				//validate streetname
				if(!ValidateStreetName(streetname)) {
					formObj.StreetName.select();
					return false;
				}
				
				// validate Suburb
				if(!ValidateSuburb(suburb)) {
					formObj.Suburb.select();
					return false;
				}
				//validate postcode
				if(!ValidatePostCode(postcode)) {
					formObj.PostCode.select();
					return false;
				}
				
				if(!ValidateAge(age)){
					formObj.Age.select();
					return false;
				
				}
					//validate home number
				if(!ValidateHomeNum(homenum))  {
					formObj.HomeNum.select();
					return false;
				}
				
				//fax
				if(!ValidateFaxNumber(faxnumber))  {
					formObj.FaxNumber.select();
					return false;
				}
				
				//validate Mobile Number
				if(!ValidateMobileNum(mobilenum))  {
					formObj.MobileNum.select();
					return false;
					
				}
				

				// validate email
				if(!ValidateEmail(email)) { 
					formObj.EmailAddress.select();
					return false;
				}
				//validate stae
				if(!ValidateState(state)){
					
					return false;
					}
				// validate coyntry
				if(!ValidateCountry(country)) { 
					
					return false;
				}
				
				//validate creditcard number
				if(!ValidateCCnumber1(ccnumber1)) {
					formObj.CCnumber1.select();
					return false;
				}
				//validate creditcard number
				if(!ValidateCCnumber2(ccnumber2)) {
					formObj.CCnumber2.select();
					return false;
				}
				//validate creditcard number
				if(!ValidateCCnumber3(ccnumber3)) {
					formObj.CCnumber3.select();
					return false;
				}
				//validate creditcard number
				if(!ValidateCCnumber4(ccnumber4)) {
					formObj.CCnumber4.select();
					return false;
				}
				//validate date
				if(!ValidateDate1(date1)) {
					
					return false;
				}
				//month
				if(!ValidateMonth(month)) {
					
					return false;
				}
				//year
				if(!ValidateYear(year)) {
					
					return false;
				}
						
				alert("Your Registration has been successful:\n" + 
				"\nThis are the details of your Registration:\n" + 
				"\n~~Mailing Details~~" + "\nFirstName: " +
				(firstname) + "\nLastName: " + (lastname) 
				+ "\nStreetNumber: " +(streetnumber) + 
				"\nStreetName: " +(streetname)+"\nSuburb: "+(suburb)+"\nPostcode: "+(postcode)  + "\nAge: "+(age)
				+"\nCountry: "+(country)+"\nState: "+(state) + "\n" + "\n~~Contact Details~~" + 
				"\nHomeNumber: "+(homenum)+"\nFaxNumber: "+(faxnumber)+"\nMobileNumber: "+(mobilenum) +
				"\n" + "\nEmail:" + (email) + "\n" + " \n~~Credit Card Details~~" + "\nCredit Card Number "
				+ (ccnumber1) + "-" + (ccnumber2) + "-" + (ccnumber3) + "-" + (ccnumber4)  + "\nExpiry Date:" 
				+ (date1) + "-" + (month) + "-" + (year)+ 
				"\n\n Message: \n You will now be redirected to the Home Page");
			window.location = "home.shtml";
			return true; 
				
			}
				
				
				

		 
	















