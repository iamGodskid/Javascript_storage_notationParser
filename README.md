# GiniFileParser
a parser that reads gini files into javascript objects

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

new parseGINIFile({
url: "file.gini"
}).then(res=>console.log(res))

/*output 
user:{
name:"decode",
isDev: true
}
*/
```
### happy coding
