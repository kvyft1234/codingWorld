function outputSystem(){
	this.width;
	
}




var clock = [];
function whileFrame(func,order,interval){
	setInterval(function(){func();if(clock[order][0]){}});
}

var codeList = document.querySelectorAll(".codeList")[0];
var codeNumber = 0;

function codeToMove(){
	addCodeInList("zz",codeNumber);
	codeNumber++;

}
function addCodeInList(name,id){
	let a = document.createElement('div');
	a.setAttribute("id",id);
	let b = document.createTextNode(name);
	a.appendChild(b);
	a.onclick = codeToMove;
	codeList.appendChild(a);
}
var code = [["마우스","키보드"]];
for (let i=0; i<code.length; i++){
	addCodeInList(code[0][i],i);
	codeNumber++;
}

var selectedCode;