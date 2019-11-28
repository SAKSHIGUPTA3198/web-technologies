function numberLayout(){
    document.getElementById("container").innerHTML="hello";
    var strNum=0;
    var ctr=0;

    for(var i=0;i<10;i++)
    {
for(var j=0;j<10;j++)
{
    ctr++;
    strNum=strNum+ctr+" ";
}
strNum=strNum+"<br>";
    
    document.getElementById("container").innerHTML=" "+strNum+" ";

}
}