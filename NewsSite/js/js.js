  function validateForm()
{ 
var name=document.myForm.name.value;  
var surname=document.myForm.surname.value;
var pass=document.myForm.pass.value;  
var email=document.myForm.email.value;
var day=document.myForm.day.value;

var dateformat1 = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
var dateformat2 = /(((0|1)[0-9]|2[0-9]|3[0-1])-(0[1-9]|1[0-2])-((19|20)\d\d))$/;

var expression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
	
var letters = /^[A-Za-z]+$/;
	
var mail =/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

var part1= day.split("/");
var part2= day.split("-");

	if (name===null || name==="")
	{  
	  alert("Name can't be blank.");  
	  return false;  
	}
	else if (!letters.test(name))
		{
			alert("Name field required only alphabet characters!");
			 return false;  
		}
	else if(surname===null || surname==="")
	{  
	  alert("Surname can't be blank.");  
	  return false;  
	}  
	else if (!letters.test(surname))
		{
			alert("Surname field required only alphabet characters!");
			return false;  
		}
	else if(email==='')
		{
			alert('Please enter your user email address.');
			return false; 
		}
		else if (mail.test(email))
		{
			alert('Invalid email!');
			return false; 

		}
	else if(pass===null || pass==="")
	{  
	  alert("Password must be at least 6 characters long.");  
	  return false;  
	}  
	else if(!expression.test(pass))
	{
		alert ('Must contain at least one number and one uppercase and lowercase letter, and min 6 or max 15 characters!');
		return false; 
	}
	else if(day===null || day==="")
	{
	  alert("Please enter your birthday.");
	  return false; 
	}
	else if ((!(dateformat1.test(day))) && (!(dateformat2.test(day))) ) 
	{
		 alert("Invalid date of birth exp: 01/06/2001 or 01-06-2001");
		return false;
	}  
	else if(part1[1] === "02" && part1[2] % 4 !== 0 && part1[0] === "29" || part1[1] === "02" && part1[0]>=30) 
	 	{
			alert('The day of February was entered incorrectly.');
			return false;
    } 
	else if (part2[1] === "02" && part2[2] % 4 !== 0 && part2[0] === "29" || part2[1] === "02" && part2[0]>=30) 
	 	{
			
			alert('The day of February was entered incorrectly.');
			return false;
    } 
	else
	{ 
		alert("Welcome "+name+"! You are being redirected to another page.");
		return true;
	}
}  

let dugme=document.getElementsByTagName("button");
let ekran=document.getElementsByClassName("ekran1")[0];
let temizle=document.getElementById("temizle");
let dn=document.getElementById("dn");
for(var i=2; i<20; i++)
{
	if(i!=19 && i!=18)
	dugme[i].addEventListener("click", yazdir);
}

function yazdir(){
ekran.value=ekran.value+this.value;
}

hesapla.addEventListener("click", hesap);

function hesap(){
	ekran.value=eval(ekran.value);
}

temizle.addEventListener("click", temiz);

function temiz(){
	ekran.value="";
}


dn.addEventListener("click", dndr);
	var sonuc=0;
function dndr(){
	sonuc=(1/ekran.value);
	ekran.value=(sonuc);
}