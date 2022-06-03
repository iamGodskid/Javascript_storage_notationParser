# GiniFileParser
a parser that reads gini files into stringified objects


## note
gini parser v2 has an extra  feature of reading  js objects back to gini format

## installation
download from github and reference

```javascript
<script src="path/to/gini.js"></script>
//or import the es module
import parseGINIFile from "./path/to/gini.es.js"
```

the parser is promise based so you can do

**file.gini**
```gini
<@GINI@>
!this is a valid gini file
[user]
name=decode
isDev=true
______________

```


```javascript

new parseGINIFile("file.gini")
.then(res=>console.log(res))

/*output 
"user":{
"name":"decode",
"isDev": "true"
}"
*/
```

#### to use the jsontogini parser in v2
```javascript

//note
/*the jsontogini returns an array and the first array item is the complete parsed string

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


new JSONtoGINI(data)
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
https://github.com/iamGodskid/Gini-File
