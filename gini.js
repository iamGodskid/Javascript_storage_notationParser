function parseGINIFile(opt) {
// Start with an object to hold the top-level fields
let uri=opt
let result = {};
let section = result;
let invalid=!/^\s*(!._*)?$/
var xml;
let verify=/^<@GINI@>/gi
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
if (match = line.match(/^(\w+)=(.*)$/)) {
section[match[1]] = match[2];
} else if (match = line.match(/^\[(.*)\]$/)) {
section = result[match[1]] = {};
} 

else if (!/^\s*(!._*)?$/.test(line)) {
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
