let btn=document.querySelectorAll('button');
let output=document.getElementById('output');
console.log(btn.length)

var sol="";

for(var i=0;i<btn.length;i++){
    btn[i].addEventListener('click',function(){
        var z=this.value;
        if(z=='*'){
            output.value+=`X`;
            sol+=z;
        }
        else if(z=='C'){
            sol='';
            output.value=''
        }
        else if(z=='='){
            console.log(eval(sol));
            output.value=`${eval(sol)}`;
        }
        else{
            sol+=z;
            output.value+=`${z}`;
            
        }
    })
}



