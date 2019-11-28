//create the object of xml http request
var xhr= new XMLHttpRequest();
xhr.open('GET','data.json',true);
xhr.responseType='text';
xhr.send();

xhr.onload = function()
{
    alert("it works"+xhr.status);
    if(xhr.status==200)

    {
       var data=JSON.parse(xhr.responseText);
     var myString="";
        
     
        for(i=0;i<data.presidents.length;i++)
        {
            var x=i+1;
            myString += "President "+x+" was";
            myString += data.presidents[i].first+" ";
            myString += data.presidents[i].last+"<br/> "
        }
        document.getElementById("container").innerHTML=myString;
    }
}


