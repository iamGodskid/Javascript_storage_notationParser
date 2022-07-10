# Javascript storage notation Parser
a parser that reads jssn files into stringified javascript objects


## note
jssnparser v2 has an extra  feature of reading  js objects back to gini format

## installation
download from github and reference

```javascript
<script src="path/to/jssn.js"></script>
//or import the es module
import parseJSSNFile from "./path/to/jssn.es.js"
```

the parser is promise based so you can do

**file.jssn**
```jssn
<@JSSN@>
!this is a valid gini file
[user]
name=decode
isDev=true
______________

```


```javascript

new parseJSSNFile("file.jssn")
.then(res=>console.log(res))

/*output 
"user":{
"name":"decode",
"isDev": "true"
}"
*/
```

#### to use the jsontojssn parser in v2
```javascript

//note
/*the jsontogini returns an array and the first array item is the complete parsed string
*/
const data = {
users:{
"a": "decode",
"b": "dev bash",
"c": "tobi",
"d": "dev evans",
"e": "anyaeji"
},

areDevs: "true"
}


new JSONtoJSSN(data)
.then(res=>console.log(res[0]))


//output
_______________
[users]
a=decode
b=dev bash
c=tobi
d=dev evans
e=anyaeji

_______________
[areDevs]
areDevs=true


```





### happy coding
### for more gini file tutorial
https://github.com/iamGodskid/Javascript_storage_notation
