function store1(){
	no1=document.getElementById("val1").value;
	document.getElementById("rslt").value = no1;
	disp=disp+no1;
}

function store2(){
	no2=document.getElementById("val2").value;
	document.getElementById("rslt").value = no2;
	disp=disp+no2;
}

function store3(){
	no3=document.getElementById("val3").value;
	document.getElementById("rslt").value = no3;
	disp=disp+no3;
}
function store4(){
	no4=document.getElementById("val4").value;
	document.getElementById("rslt").value = no4;
	disp=disp+no4;
}
function store5(){
	no5=document.getElementById("val5").value;
	document.getElementById("rslt").value = no5;
	disp=disp+no5;
}
function store6(){
	no6=document.getElementById("val6").value;
	document.getElementById("rslt").value = no6;
	disp=disp+no6;
}
function store7(){
	no7=document.getElementById("val7").value;
	document.getElementById("rslt").value = no7;
	disp=disp+no7;
}
function store8(){
	no8=document.getElementById("val8").value;
	document.getElementById("rslt").value = no8;
	disp=disp+no8;
}
function store9(){
	no9=document.getElementById("val9").value;
	document.getElementById("rslt").value = no9;
	disp=disp+no9;
}
function store0(){
	no0=document.getElementById("val0").value;
	document.getElementById("rslt").value = no0;
	disp=disp+no0;
}

function init(){
	window.no1=0;
	window.no2=0;
	window.no3=0;
	window.no4=0;
	window.no5=0;
	window.no6=0;
	window.no7=0;
	window.no8=0;
	window.no9=0;
	window.no0=0;
	window.disp="";
	window.num1=0;
	window.num2=0;
	window.pflag=0;
	window.sflag=0;
	window.mflag=0;
	window.dflag=0;
	window.result=0;
}

function add(){
	sflag=0;
	mflag=0;
	dflag=0;
	num1=disp;
	num1=parseInt(num1);
	chkPrevOpr();
	disp="";
	num2="";
	pflag=1;

}

function chkPrevOpr(){
	if(pflag===1)
	{
		result=result+num1;
		num1=result;
		alert(result);
	}
	else if(mflag===1)
	{
		result=result*num1;
		num1=result;
		alert(result);
	}
	else if(dflag===1)
	{
		result=result/num1;
		num1=result;
		alert(result);
	}
	else if(sflag===1)
	{
		result=result-num1;
		num1=result;
		alert(result);
	}
}
function subtract(){
	
	num1=disp;
	num1=parseInt(num1);
	chkPrevOpr();
	disp="";
	num2="";
	sflag=1;
	pflag=0;
	mflag=0;
	dflag=0;

}

function multiply(){
	sflag=0;
	pflag=0;
	dflag=0;
	num1=disp;
	num1=parseInt(num1);
	chkPrevOpr();
	result=result*num1;
	num1=result;
	alert(result);
	disp="";
	num2="";
	mflag=1;

}

function divide(){
	sflag=0;
	mflag=0;
	pflag=0;
	num1=disp;
	num1=parseInt(num1);
	result=result/num1;
	num1=result;
	alert(result);
	disp="";
	num2="";
	dflag=1;

}

function clear(){
	document.getElementById("rslt").value = 0;
	disp=0;
	result=0;

}

function cal(){
	num2=disp;
	num1=parseInt(num1);
	num2=parseInt(num2);
	if (pflag===1) {
		result=num1+num2;
	}
	else if(sflag===1){
		result=num1-num2;
	}
	else if(mflag===1){
		result=num1*num2;
	}
	else if(dflag===1){
		result=num1/num2;
	}

	disp=result;
	document.getElementById("rslt").value = disp;
	result=0;
	init();

}

window.onload=function(){

	init();
	document.getElementById("rslt").value = 0;

	var evnt1=document.getElementById("val1");
	var evnt2=document.getElementById("val2");
	var evnt3=document.getElementById("val3");
	var evnt4=document.getElementById("val4");
	var evnt5=document.getElementById("val5");
	var evnt6=document.getElementById("val6");
	var evnt7=document.getElementById("val7");
	var evnt8=document.getElementById("val8");
	var evnt9=document.getElementById("val9");
	var evnt0=document.getElementById("val0");
	var plus=document.getElementById("val+");
	var equal=document.getElementById("val=");
	var mul=document.getElementById("val*");
	var sub=document.getElementById("val-");
	var div=document.getElementById("val/");
	var clr=document.getElementById("clr");

	evnt1.addEventListener("click",store1,false);	
	evnt2.addEventListener("click",store2,false);
	evnt3.addEventListener("click",store3,false);
	evnt4.addEventListener("click",store4,false);
	evnt5.addEventListener("click",store5,false);
	evnt6.addEventListener("click",store6,false);
	evnt7.addEventListener("click",store7,false);
	evnt8.addEventListener("click",store8,false);
	evnt9.addEventListener("click",store9,false);
	evnt0.addEventListener("click",store0,false);
	plus.addEventListener("click",add,false);
	equal.addEventListener("click",cal,false);
	sub.addEventListener("click",subtract,false);
	mul.addEventListener("click",multiply,false);
	div.addEventListener("click",divide,false);
	clr.addEventListener("click",clear,false);
	
}