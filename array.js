function array(){
    
    var i;  
    var emp = new Array();  
    emp[0] = "1.Arun";  
    emp[1] = "2.Varun";  
    emp[2] = "3.John";  
      
    for (i=0;i<emp.length;i++){  

   
    
document.getElementById("container").innerHTML="Names are:"+" "+"<br>"+emp[0] +"<br>" +emp[1]+"<br>"+emp[2] ;
}
}