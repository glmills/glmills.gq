/* Coded by Garrett Mills 
 * http://glmills.gq/ 
 * Last Edited on 5 August 2015 11:06
 * This code is licensed under the GNU Affero GPL v3.0
 * http://glmills.gq/mycode/licenses/affero.html
 */

function getInternalXML(url){
    var xhttp, xmlDoc;
    if (window.XMLHttpRequest)
      {
      xhttp=new XMLHttpRequest();
      }
    else // code for IE5 and IE6
      {
      xhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xhttp.open("GET",url,false);
    xhttp.send();
    xmlDoc=xhttp.responseXML;
    return xmlDoc;
}