function compoundinterest()
{
   var p=1000;
    var n=1;
    r= 10;
    var compoundinterest=0;

   compoundinterest=(p*(1+(r/100))^n)-p;

    document.getElementById("container").innerHTML="compoundinterest is:"+compoundinterest;
}