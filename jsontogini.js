var JSONtoGINI=function(param){
  "use strict"
  //check typeof param
  var $data;
  var xml;
  if(window.XMLHttpRequest){
    xml=new XMLHttpRequest();
  }else{
    xml=new ActiveXObject("Microsoft.XMLHTTP");
  }
  return new Promise(gini=>{
  if(typeof param == "object"){
  $data=JSON.stringify(param);
  const $$=JSON.parse($data);
  
 let result=""
  //loop and transpile
const $obj=Object.entries($$);
const $$$ = Object.keys($$)
let arr=[];
$$$.forEach(k=>{
  if(typeof $$[k] !== "object"){
    arr.push(`[${k}]\n` );
    result += `____________________\n[${k}]\n`;
    arr.push(`${k}=${$$[k]}\n____________________\n`)
      result += `${k}=${$$[k]}\n`;
    
  const $gini=arr.push(result)
    arr.reverse()
    gini(arr)
  }else if(typeof $$[k] == "object"){
    //if typeof counters
    const subs=Object.entries($$[k])
    result += `____________________\n[${k}]\n`;
    subs.forEach(s=>{
     result += `${s[0]}=${s[1]}\n`;
    arr.push(result)
      arr.reverse()
      gini(arr[0])
    })
  }
  
  
})

  }
  
  //for fetching from file
  
  
   else if(typeof param == "string"){
     xml.open("GET", param, true);
 xml.onreadystatechange=function(){
   if(this.readyState==4){
var response = this.responseText;
  console.log(response)
  $data=response;
  const $$=JSON.parse($data);
  console.log($$)
  
  
 let result=""
  //loop and transpile
const $obj=Object.entries($$);
const $$$ = Object.keys($$)
let arr=[];
$$$.forEach(k=>{
  if(typeof $$[k] !== "object"){
    arr.push(`[${k}]\n` );
    result += `____________________\n[${k}]\n`;
    arr.push(`${k}=${$$[k]}\n____________________\n`)
      result += `${k}=${$$[k]}\n`;
    
  const $gini=arr.push(result)
    arr.reverse()
    gini(arr)
  }else if(typeof $$[k] == "object"){
    //if typeof counters
    const subs=Object.entries($$[k])
    result += `____________________\n[${k}]\n`;
    subs.forEach(s=>{
     result += `${s[0]}=${s[1]}\n`;
    arr.push(result)
      arr.reverse()
      gini(arr[0])
    })
  }
  
  
})


   }
 }
 xml.send() 
  

  }
  })
  
  

  
}