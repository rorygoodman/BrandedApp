
var info = ["Discover and connect with the right people to promote your brand",
 "Beautiful grid listings, discover all of your influencers in one place at any time",
  "Formatted menu,</br> explore our application with ease",
  "Personalised profile and integrated social media.You can now rate your top influencers"];
var i=0;
var autoplay=true;
var backwards=false;
function onLaunch(){
	document.getElementById("slotext").style.left="8%";
	setTimeout(function(){
		phone1();
		setInterval(function(){
			if(autoplay){
				if(!backwards){
					next();
				}	
				else{
					prev();
				}
			
			}
		},4000)
	},1500)

	return false;
}
function next(){
	if(i==info.length){
		return;
	}
	if(i==0){
		phone1();
	}
	else if(i==1){
		phone2();
	}
	else if(i==2){
		phone3();
	}
	else if(i==3){
		phone4();
		backwards=true;
	}
	else{
		return false;
	}
	return false;

}
function prev(){
	if(i==0){
		return;
	}
	if(i==2){
		phone1();
		backwards=false;
	}
	else if(i==3){
		phone2();
	}
	else if(i==4){
		phone3();
	}
	else{
		return false;
	}
	return false;

}
function phoneClick(phoneNo){
	autoplay=false;
	if(phoneNo==1){
		phone1();
	}
	else if(phoneNo==2){
		phone2();
	}
	else if(phoneNo==3){
		phone3();
	}
	else if(phoneNo==4){
		phone4();
	}
	else{
		return false;
	}
	return false;
}
function phone1(){
	var phone1 = document.getElementById('p1');
	var phone2 = document.getElementById('p2');
	var phone3 = document.getElementById('p3');
	var phone4 = document.getElementById('p4');
	phone1.style.height="70%";
	if(autoplay){
		phone1.style.opacity ="1";
	}
	else{
		phone1.style.opacity ="0";
	}
	phone1.style.left="0%";
	phone1.style.bottom="20%";
	phone1.style.zIndex="4";

	phone2.style.height="60%";
	phone2.style.opacity =".5";
	phone2.style.left="15%";
	phone2.style.bottom="25%";
	phone2.style.zIndex="3";

	phone3.style.height="40%";
	phone3.style.opacity =".25";
	phone3.style.left="30%";
	phone3.style.bottom="30%";
	phone3.style.zIndex="2";

	phone4.style.height="40%";
	phone4.style.opacity ="0";
	phone4.style.left="40%";
	phone4.style.bottom="30%";
	phone4.style.zIndex="1";
	displaytext(1);
	return false;
	
}
function phone2(){
	var phone1 = document.getElementById('p1');
	var phone2 = document.getElementById('p2');
	var phone3 = document.getElementById('p3');
	var phone4 = document.getElementById('p4');
	phone1.style.height="60%";
	phone1.style.opacity =".5";
	phone1.style.left="10%";
	phone1.style.bottom="25%";
	phone1.style.zIndex="3";

	phone2.style.height="70%";
	phone2.style.opacity ="0";
	phone2.style.left="20%";
	phone2.style.bottom="20%";
	phone2.style.zIndex="4";

	phone3.style.height="60%";
	phone3.style.opacity =".5";
	phone3.style.left="35%";
	phone3.style.bottom="25%";
	phone3.style.zIndex="3";

	phone4.style.height="40%";
	phone4.style.opacity ="0";
	phone4.style.left="40%";
	phone4.style.bottom="30%";
	phone4.style.zIndex="2";
	displaytext(2);
	return false;
}
function phone3(){
	var phone1 = document.getElementById('p1');
	var phone2 = document.getElementById('p2');
	var phone3 = document.getElementById('p3');
	var phone4 = document.getElementById('p4');
	phone1.style.height="40%";
	phone1.style.opacity ="0";
	phone1.style.left="5%";
	phone1.style.bottom="30%";
	phone1.style.zIndex="2";

	phone2.style.height="60%";
	phone2.style.opacity =".5";
	phone2.style.left="15%";
	phone2.style.bottom="25%";
	phone2.style.zIndex="3";

	phone3.style.height="70%";
	phone3.style.opacity ="0";
	phone3.style.left="25%";
	phone3.style.bottom="20%";
	phone3.style.zIndex="4";

	phone4.style.height="60%";
	phone4.style.opacity =".5";
	phone4.style.left="40%";
	phone4.style.bottom="25%";
	phone4.style.zIndex="3";
	displaytext(3);
	return false;
}
function phone4(){
	var phone1 = document.getElementById('p1');
	var phone2 = document.getElementById('p2');
	var phone3 = document.getElementById('p3');
	var phone4 = document.getElementById('p4');
	phone1.style.height="40%";
	phone1.style.opacity ="0";
	phone1.style.left="20%";
	phone1.style.bottom="30%";
	phone1.style.zIndex="1";

	phone2.style.height="40%";
	phone2.style.opacity =".25";
	phone2.style.left="30%";
	phone2.style.bottom="30%";
	phone2.style.zIndex="2";

	phone3.style.height="60%";
	phone3.style.opacity =".5";
	phone3.style.left="35%";
	phone3.style.bottom="25%";
	phone3.style.zIndex="3";

	phone4.style.height="70%";
	phone4.style.opacity ="0";
	phone4.style.left="45%";
	phone4.style.bottom="20%";
	phone4.style.zIndex="4";
	displaytext(4);
	return false;
}
function displaytext(n){
	var text = document.getElementById('infotext');
	var bbar = document.getElementById('bottombar');
	var tbar = document.getElementById('topbar');
	var phone1 = document.getElementById('p1');
	var phone2 = document.getElementById('p2');
	var phone3 = document.getElementById('p3');
	var phone4 = document.getElementById('p4');
	if( n>4||n<1){
		return;
	}
	i=n-1;
	tbar.style.transform="translate(0,0";
	bbar.style.transform="translate(0,0)";
	text.style.opacity="0";
	setTimeout(function(){
		text.innerHTML=info[n-1];
		tbar.style.transform="translate(-50%,0)";
		bbar.style.transform="translate(50%,0)";
		text.style.opacity="1";
		if(n==1){
			phone1.style.opacity ="1";
			phone2.style.opacity =".5";
			phone3.style.opacity =".25";
			phone4.style.opacity ="0";	
		}
		else if(n==2){
			phone1.style.opacity =".5";
			phone2.style.opacity ="1";
			phone3.style.opacity =".5";
			phone4.style.opacity ="0";	
		}
		else if(n==3){
			phone1.style.opacity ="0";
			phone2.style.opacity =".5";
			phone3.style.opacity ="1";
			phone4.style.opacity =".5";
		}
		else{
			phone1.style.opacity ="0";
			phone2.style.opacity =".25";
			phone3.style.opacity =".5";
			phone4.style.opacity ="1";
		}
	},1000)
	i++;
	return false;
}


