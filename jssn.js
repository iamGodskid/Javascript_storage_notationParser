function parseJSSNFile(opt) {
// Start with an object to hold the top-level fields
let uri=opt
let result = {};
let section = result;
let invalid=/^\/\*(.*)\*\/$/gim
var xml;
let reg=/^\.|^\/|^http:\/\/|^https:\/\/|^(.*)\.(.*)/gim
let verify=/^<@GINI@>/gi
console.log(reg.test(uri))
if(window.XMLHttpRequest){
  xml=new XMLHttpRequest()
}else{
  xml=new ActiveXObject("Microsoft.XMLHTTP")
}
if(typeof uri !== "string") throw Error("file path is not string"+" "+typeof uri+" given")
return new Promise(res=>{
xml.open("GET", uri, true);
xml.onload=function(){
  
  if(this.readyState==4 && this.status == 200){

  var string=this.responseText
if(verify.test(string)){
  string.replace(verify, "")
}
string.split(/\r?\n/).forEach(line => {
let match;
let matcharr = [];
if (match = line.match(/^(\w+)=(.*)$/)) {
  /*
  process for jssn arrays
  */
if(/{(.*)}/.test(match[2])==true){
  //console.log(match[1])
 const toarr= match[2].replace(/{|}/gim, "");
 toarr.split(/\r?\t?\s/).forEach(array_in=>{
 //  console.log(array_in);
   matcharr.push(array_in)
 })
  section[match[1]]=matcharr;
}
//for comment
else if(/\/\*(.*)\*\//gim.test(match[2])==true){
  section[match[1]]=""
}
//end
else{
  section[match[1]]=match[2]
}
//end
}
else if (match = line.match(/^\[(.*)\]$/)) {
section = result[match[1]] = {};
} 

else if (!/^\/\*(.*)\*\/$/.test(line)) {
line.replace(invalid, "");
}
});
res(JSON.stringify(result));
}else{
  res("parser failure")
}
}
xml.send()
})
}
