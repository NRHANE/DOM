var
   likes = document.getElementsByClassName("like");
   console.log(likes);
for (i=0; i<likes.length; i++){
    let like= likes[i];
    like.addEventListener("click",function(){
      

        if (like.style.color =='red'){
         like.style.color ='black';}
       else 
        {
        like.style.color ='red';
         }
    });
}
var plus=document.getElementsByClassName("plus-btn");
for (let i=0; i< plus.length; i++){
    let inc= plus[i];
    inc.addEventListener("click",function(){
    inc.previousElementSibling.value++;
});
}
var minus= document.getElementsByClassName("minus-btn");
console.log(minus);
for (let i=0; i<minus.length; i++){
    let dec=minus[i];
    dec.addEventListener("click",function(){
        if (dec.nextElementSibling.value>1){
            dec.nextElementSibling.value--;
        }
    });
}
var deletes= document.getElementsByClassName("delete");
for (let i=0; i< deletes.length;i++){
    let dlt = deletes[i];
    dlt.addEventListener("click",function(){
        dlt.parentElement.remove();
    });
}


