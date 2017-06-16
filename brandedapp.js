
var info = ["Discover and connect with the right people to promote your brand",
 "Personalised profile and integrated social media.You can now rate your top influencers",
  "Beautiful grid listings, discover all your influencersin one place at any time",
  "Formatted menu, explore our application with ease"];
var i=0;
var iterations=1;
document.getElementById('infotext').innerHTML=info[i];
function next(n){
	if(i>=n-1){
		return ;
	}
	i++;
	iterations++;
	document.getElementById('infotext').style.animationIterations = iterations;
	setTimeout(function() {
		document.getElementById('infotext').innerHTML=info[i];
		iterations++;
		document.getElementById('infotext').style.animationIterations= iterations;
	}, 2000);
	
	
	return;
}
function prev(n){
	if(i<=0){
		return;
	}
	i--;
	return;
}
function infotext(){
	return info[i];
}