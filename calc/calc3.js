function store1(){
	if (!minus){
		no1=document.getElementById("val1").value;
	}
	else{
		no1=document.getElementById("val1").value;//for negative no.
		no1=-no1;
		minus=0;
	}	
	disp=disp+no1;
	document.getElementById("rslt").value = disp;
}

function store2(){
	if (!minus){
		no2=document.getElementById("val2").value;
	}
	else{
		no2=document.getElementById("val2").value;
		no2=-no2;
		minus=0;
	}	
	//document.getElementById("rslt").value = no2;
	disp=disp+no2;
	document.getElementById("rslt").value = disp;
}

function store3(){
	if (!minus){
		no3=document.getElementById("val3").value;
	}
	else{
		no3=document.getElementById("val3").value;
		no3=-no3;
		minus=0;
	}	
	//document.getElementById("rslt").value = no3;
	disp=disp+no3;
	document.getElementById("rslt").value = disp;
}
function store4(){
	if (!minus){
		no4=document.getElementById("val4").value;
	}
	else{
		no4=document.getElementById("val4").value;
		no4=-no4;
		minus=0;
	}	
	//document.getElementById("rslt").value = no4;
	disp=disp+no4;
	document.getElementById("rslt").value = disp;
}
function store5(){
	if (!minus){
		no5=document.getElementById("val5").value;
	}
	else{
		no5=document.getElementById("val5").value;
		no5=-no5;
		minus=0;
	}	
	//document.getElementById("rslt").value = no5;
	disp=disp+no5;
	document.getElementById("rslt").value = disp;
}
function store6(){
	if (!minus){
		no6=document.getElementById("val6").value;
	}
	else{
		no6=document.getElementById("val6").value;
		no6=-no6;
		minus=0;
	}	
	//document.getElementById("rslt").value = no6;
	disp=disp+no6;
	document.getElementById("rslt").value = disp;
}
function store7(){
	if (!minus){
		no7=document.getElementById("val7").value;
	}
	else{
		no7=document.getElementById("val7").value;
		no7=-no7;
		minus=0;
	}	
	//document.getElementById("rslt").value = no7;
	disp=disp+no7;
	document.getElementById("rslt").value = disp;
}
function store8(){
	if (!minus){
		no8=document.getElementById("val8").value;
	}
	else{
		no8=document.getElementById("val8").value;
		no8=-no8;
		minus=0;
	}	
	//document.getElementById("rslt").value = no8;
	disp=disp+no8;
	document.getElementById("rslt").value = disp;
}
function store9(){
	if (!minus){
		no9=document.getElementById("val9").value;
	}
	else{
		no9=document.getElementById("val9").value;
		no9=-no9;
		minus=0;
	}	
	//document.getElementById("rslt").value = no9;
	disp=disp+no9;
	document.getElementById("rslt").value = disp;
}
function store0(){
	no0=document.getElementById("val0").value;
	//document.getElementById("rslt").value = no0;
	disp=disp+no0;
	document.getElementById("rslt").value = disp;
}

function storeDec(){
	d=document.getElementById("valdec").value;
	//document.getElementById("rslt").value = no0;
	disp=disp+d;
	document.getElementById("rslt").value = disp;
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
	window.d="";
	window.op=0;
	window.minus=0;
}

function add(){
	
	pflag=1;
	num1=disp;
	//alert("before="+num1);
	/*if (num1===0)
	{
		num1=disp;
	}*/
	num1=parseFloat(num1);
	//alert(num1);
	var flag=chkPrevOpr();
	if(!flag){
		result=num1;
		alert(result);
	}
	disp="";
	//num2="";	
	sflag=0;
	mflag=0;
	dflag=0;

}

function chkPrevOpr(){
	window.flag=0;
	if(pflag===1)
	{
		/*if(num2===0)
		{
			alert("num1="+num1);
			alert("result="+result);
			result=parseFloat(num1);
			alert("result1="+result);
			result+=result;
			alert(result);
			flag=1;
		}
		else*/ if (result!=0){
			result=result+num1;
		}
		else{
			result=num1;
		}
		num1=result;
		//alert(result);
		flag=1;//to chk whether sm other operator is pressed or nt previously
		
	}
	else if(mflag===1)
	{
		if (result!=0) {
			result=result*num1;			
		}
		else{
			result=num1;			
		}
		num1=result;
		//alert(result);
		flag=1;
		
	}
	else if(dflag===1)
	{
		if (result!=0) {
			result=result/num1;			
		}
		else{
			result=num1;
		}
		num1=result;
		//alert(result);
		flag=1;
		
	}
	else if(sflag===1)
	{
		if (result!=0) {
			result=result-num1;			
		}
		else{
			result=num1;
		}
		num1=result;
		//alert(result);
		flag=1;
	}
	return flag;
}

function subtract(){

	sflag=1;
	num1=disp;
	num1=parseFloat(num1);

	var flag=chkPrevOpr();
	if(!flag){
		result=num1;
	}
	disp="";
	num2="";
	pflag=0;
	mflag=0;
	dflag=0;
}

function negate(){
	//alert("Hello");
	op=0;
	op=chkIfOp();
	if((result===0) || (op===1)){
		minus=1;
	}
}

function chkIfOp(){
	if ((pflag===1) || (sflag===1) || (mflag===1) || (dflag===1)) {
		return 1;
	}
	else
		return 0;
}
function multiply(){
	
	mflag=1;
	num1=disp;
	num1=parseFloat(num1);
	var flag=chkPrevOpr();
	if(!flag){
		result=num1;
	}
	disp="";
	num2="";	
	sflag=0;
	pflag=0;
	dflag=0;

}

function divide(){
	dflag=1;
	num1=disp;
	num1=parseFloat(num1);
	var flag=chkPrevOpr();
	if(!flag){
		result=num1;
	}
	disp="";
	num2="";
	sflag=0;
	pflag=0;
	mflag=0;
}

function clear(){
	document.getElementById("rslt").value = 0;
	disp=0;
	result=0;
	num1=0;
	num2=0;
	pflag=0;
	sflag=0;
	mflag=0;
	dflag=0;

}

function cal(){
	num2=disp;
	num1=parseFloat(num1);
	num2=parseFloat(num2);
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

function delNo(){
	var temp=document.getElementById("rslt").value;
	var len=temp.length;
	//alert("len="+len);
	if (len==1) {
		document.getElementById("rslt").value=0;
	}
	else{
			temp=temp.substring(0, temp.length - 1);
			//alert("temp="+temp);
			document.getElementById("rslt").value=temp;
			disp=document.getElementById("rslt").value;
			//alert("temp="+temp);
	}
}

function useAns(){
	disp=document.getElementById("rslt").value;
	//result=parseFloat(temp);

}


// Harshal Patil - Try to use DOMContentLoaded instead of onload
//window.addEventListener("DOMContentLoaded", function() {}, false);

window.onload=function() {

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
	var dec=document.getElementById("valdec");
	var bcksp=document.getElementById("cncl");
	var answer=document.getElementById("ans");
	var minus=document.getElementById("minus");

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
	dec.addEventListener("click",storeDec,false);
	bcksp.addEventListener("click",delNo,false);
	answer.addEventListener("click",useAns,false);
	minus.addEventListener("click",negate,false);

	
}