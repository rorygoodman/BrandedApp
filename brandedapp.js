
var info = ["Discover and connect with the right people to promote your brand",
 "Personalised profile and integrated social media.You can now rate your top influencers",
  "Beautiful grid listings, discover all your influencers in one place at any time",
  "Formatted menu, explore our application with ease"];
var i=0;
var iterations=1;
function next(n){
	if(i>=n-1){
		i=0 ;
	}
	var infotext = document.getElementById("infotext");
	var topbar = document.getElementById("topbar");
	var bottombar = document.getElementById("bottombar");
	iterations++;
	fadeText(infotext);
	closeBars(topbar,bottombar);
	i++;
	setTimeout(function(){
		infotext.innerHTML = info[i];
		iterations++;	
		unFadeText(infotext);
		openBars(topbar,bottombar);
	},1200)
	console.log(iterations);
	return;
}
function fadeText(infotext){
	infotext.style.animationDirection = "reverse";
	infotext.style.animationIterationCount = iterations;
	infotext.webkitAnimationIterationCount = iterations;
	return;
}
function unFadeText(infotext){
	infotext.style.animationDirection = "normal";
	infotext.style.animationIterationCount = iterations;
	infotext.style.webkitAnimationIterationCount = iterations;
	return;
}
function closeBars(topbar,bottombar){
	topbar.style.animationDirection = "reverse";
	bottombar.style.animationDirection = "reverse";
	topbar.style.animationIterationCount = iterations;
	bottombar.style.animationIterationCount = iterations;
	return;
}
function openBars(topbar,bottombar){
	topbar.style.animationDirection = "normal";
	bottombar.style.animationDirection = "normal";
	topbar.style.animationIterationCount = iterations;
	bottombar.style.animationIterationCount = iterations;
	return;
}
function prev(n){
	if(i<=0){
		return;
	}
	i--;
	return;
}