window.onload = function(){
	var pathName, origin, basehref, hrefs;
	if(!pathName){
		pathName = location.pathname;
	}
	if(!origin){
		origin = location.origin;//当前url的origin值
	}
	if(!basehref){
		basehref = pathName.substr(0,pathName.lastIndexOf("/"));
	}
	if(!hrefs){
		hrefs = $("a[targethref]");
	}
	for(let i=0; i<hrefs.length; i++){
		hrefs[i].href = origin+basehref+hrefs[i].getAttribute("targethref");
	}
}
