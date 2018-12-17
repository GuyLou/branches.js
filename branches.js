class branches {


constructor() {
	this.initBranches();
}



initBranches() {
 var branch = {};
 var tempstr = "";
 var comment = "";
 var nods = document.getElementsByClassName("branches");
	for (var i = 0;i < nods.length;i++) {

	  tempstr = nods[i].innerHTML;
	  var varNames = tempstr.match(/\{\$(.*?)\}/i); // match groups! use exec
	  if (varNames !== null) {
		nods[i].classList.add("branch_html_" + varNames[1]);
		comment = document.createComment(tempstr);
		nods[i].insertBefore(comment, nods[i].firstChild);
	  }
	 
			if (nods[i].hasAttributes()) {
				var attribs = nods[i].attributes;
		  var tempstr2 = '';
		  var varNames2 = [];
		  var attr = [];
		  var newattrname = '';
		  var newattr2add = [];
				for (var j = 0;j < attribs.length;j++) {
					tempstr2 = attribs[j].value;
			varNames2 = tempstr2.match(/\{\$(.*?)\}/i);
			if (varNames2 !== null)  {
			
			newattrname = attribs[j].name;
			attr = [attribs[j].name, varNames2[1], tempstr2]; //name,varname,org
			newattr2add.push(attr);        
			}
				}
		  
		  for (j = 0;j < newattr2add.length;j++) {
			attr = newattr2add.pop();
			nods[i].setAttribute("branch_attrib_key_" + attr[1] , attr[2]);
			nods[i].setAttribute("branch_attrib_key_name" , attr[0]);
			nods[i].classList.add("branch_attrib_" + attr[1]);

		  }
		  
		}
	  
	  }
  }
  
  plantHTML(key,value) {
   var nods = document.getElementsByClassName("branch_html_" + key);
   var tempstr = "";
   var tempcomment = "";
   var tempcomment2 = "";
   var comment = "";
   // get elements by class name branch_key
   for (var i = 0;i < nods.length;i++) {
   	tempcomment = nods[i].childNodes[0].nodeValue;

    comment = document.createComment(tempcomment);
  
    tempstr = tempcomment.replace("{$"+ key +"}",value);
    nods[i].innerHTML = tempstr;
    nods[i].insertBefore(comment, nods[i].firstChild);
  	
   }
  }
  
    plantAttrib(key,value) {
  	var nods = document.getElementsByClassName("branch_attrib_" + key);
    	var aname = '';
      var avalue = '';
      var org = '';
    for (var i = 0;i < nods.length;i++) {
    	aname = nods[i].getAttribute("branch_attrib_key_name");
      org = nods[i].getAttribute("branch_attrib_key_" + key);
    	avalue = org.replace("{$"+ key +"}",value);
      nods[i].setAttribute(aname, avalue);

    }
  
  }

  
  climbABranch(bran) {
   	for (var i in bran) {
		this.plantHTML(i,bran[i]);
		this.plantAttrib(i,bran[i]);
    }
  
  
  }
  
  
}
