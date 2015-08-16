/* Coded by Garrett Mills 
 * http://glmills.gq/ 
 * Last Edited on 5 August 2015 11:10
 * This code is licensed under the GNU Affero GPL v3.0
 * http://glmills.gq/mycode/licenses/affero.html
 */
 
 //To use, simply execute the script as the first item in the head tag
 
var ctr1 = 0
var ctr2 = 0
var ctr3 = 0
var varlist
var varnames = [];
var varvals = [];

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function isBoolean(str) {
    if (str === 'true'){
        return true;
    }
    else {
        return false;
    }
}

var varlist = window.location.search;   //get variables extention from url
var varlist = varlist.replace("?", ""); //remove the '?'
var varlist = varlist + "&";            //add an extra '&' for formatting
var varlist = varlist.split("&");       //create an array for everything split by '&'

for (ctr1 = 0; ctr1 < varlist.length; ++ctr1) { //get the variable name only by removeing everything after the '='
    var currVarName = varlist[ctr1];
    currVarName = currVarName.substring(0, currVarName.indexOf('=')); //remove value and '='
    varnames.push(currVarName);                 //create an array of the names
}

for (ctr2 = 0; ctr2 < varlist.length; ++ctr2) { //get the variable valus only by removing everything before the '='
    var currVarVal = varlist[ctr2];
    currVarVal = currVarVal.substring(currVarVal.indexOf("=") + 1);
    varvals.push(currVarVal);                   //write to values array
}

for (ctr3 = 0; ctr3 < varlist.length -1; ++ctr3) {
    if (isBoolean(varvals[ctr3]) === true){
        document.write("<script> var " + varnames[ctr3] + " = " + varvals[ctr3] + "</script>");
    }
    if (isNumeric(varvals[ctr3]) === true){
        document.write("<script> var " + varnames[ctr3] + " = " + varvals[ctr3] + "</script>");
    }
    else {
        document.write("<script> var " + varnames[ctr3] + " = '" + varvals[ctr3] + "'</script>");
    }
}







