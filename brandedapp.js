
var info = ["Discover and connect with the right people to promote your brand",
 "Personalised profile and integrated social media.You can now rate your top influencers",
  "Beautiful grid listings, discover all your influencers in one place at any time",
  "Formatted menu, explore our application with ease"];
var i=0;
var autoplay=true;
function onLaunch(){
	setTimeout(function(){
		phone1();
		i++;
		setInterval(function(){
		if(autoplay){
			next();
		}
	},4000)
	return;
	},1500)
	
}
function next(){
	if(i==info.length){
		return;
	}
	if(i==0){
		phone1();
		i++;
	}
	else if(i==1){
		phone2();
		i++;
	}
	else if(i==2){
		phone3();
		i++;
	}
	else if(i==3){
		phone4();
		i++;
	}
	else{
		return;
	}
	return;

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
		return;
	}
	return;
}
function phone1(){
	var phone1 = document.getElementById('p1');
	var phone2 = document.getElementById('p2');
	var phone3 = document.getElementById('p3');
	var phone4 = document.getElementById('p4');
	phone1.style.height="70%";
	phone1.style.opacity ="1";
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
	return;
	
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
	phone2.style.opacity ="1";
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
	return;
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
	phone3.style.opacity ="1";
	phone3.style.left="25%";
	phone3.style.bottom="20%";
	phone3.style.zIndex="4";

	phone4.style.height="60%";
	phone4.style.opacity =".5";
	phone4.style.left="40%";
	phone4.style.bottom="25%";
	phone4.style.zIndex="3";
	displaytext(3);
	return;
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
	phone4.style.opacity ="1";
	phone4.style.left="45%";
	phone4.style.bottom="20%";
	phone4.style.zIndex="4";
	displaytext(4);
	return;
}
function displaytext(n){
	var text = document.getElementById('infotext');
	var bbar = document.getElementById('bottombar');
	var tbar = document.getElementById('topbar');
	if( n>4){
		return;
	}
	i=n-1;
	tbar.style.left="25%";
	bbar.style.right="25%";
	text.style.opacity="0";
	setTimeout(function(){
		text.innerHTML=info[n-1];
		tbar.style.left="0%";
		bbar.style.right="0%";
		text.style.opacity="1";
	},1000)
	return;
}


