function validate(){
var dina = document.getElementById("convert").value;
var result = document.getElementById("reem");
if( dina==""){
    result.innerHTML= 'please inter data' ;
    return false;
}else if (isNaN(dina)){
    result.innerHTML=" please inter number not text"; 
    return false;
}else{result.innerHTML=dina*30  ;


}
return false;



}