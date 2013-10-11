




























var 
gsAgent=navigator.userAgent.toLowerCase(),
gsAppVer=navigator.appVersion.toLowerCase(),
gsAppName=navigator.appName.toLowerCase(),
gbIsOpera=gsAgent.indexOf("opera")>-1,
gbIsWebKit=gsAgent.indexOf("applewebkit")>-1,
gbIsKHTML=gsAgent.indexOf("khtml")>-1
||gsAgent.indexOf("konqueror")>-1||gbIsWebKit,
gbIsIE=(gsAgent.indexOf("compatible")>-1&&!gbIsOpera)
||gsAgent.indexOf("msie")>-1,
gbIsTT=gbIsIE?(gsAppVer.indexOf("tencenttraveler")!=-1?1:0):0,
gbIsQBWebKit=gbIsWebKit?(gsAppVer.indexOf("qqbrowser")!=-1?1:0):0,
gbIsQPlus=gsAgent.indexOf("qplus")>-1,
gbIsSogou=gsAgent.indexOf("se 2.x metasr 1.0")>-1,
gbIsChrome=gbIsWebKit&&!gbIsQBWebKit&&gsAgent.indexOf("chrome")>-1&&!gbIsSogou&&!gbIsQPlus,
gbIsSafari=gbIsWebKit&&!gbIsChrome&&!gbIsSogou&&!gbIsQBWebKit,
gbIsQBIE=gbIsIE&&gsAppVer.indexOf("qqbrowser")!=-1,
gbIsFF=gsAgent.indexOf("gecko")>-1&&!gbIsKHTML,
gbIsNS=!gbIsIE&&!gbIsOpera&&!gbIsKHTML&&(gsAgent.indexOf("mozilla")==0)
&&(gsAppName=="netscape"),
gbIsAgentErr=!(gbIsOpera||gbIsKHTML||gbIsSafari||gbIsIE||gbIsTT
||gbIsFF||gbIsNS),
gbIsWin=gsAgent.indexOf("windows")>-1||gsAgent.indexOf("win32")>-1,
gbIsVista=gbIsWin&&(gsAgent.indexOf("nt 6.0")>-1||gsAgent.indexOf("windows vista")>-1),
gbIsWin7=gbIsWin&&gsAgent.indexOf("nt 6.1")>-1,
gbIsMac=gsAgent.indexOf("macintosh")>-1||gsAgent.indexOf("mac os x")>-1,
gsMacVer=/mac os x (\d+)(\.|_)(\d+)/.test(gsAgent)&&parseFloat(RegExp.$1+"."+RegExp.$3),
gbIsLinux=gsAgent.indexOf("linux")>-1,
gbIsAir=gsAgent.indexOf("adobeair")>-1,
gnIEVer=/MSIE (\d+.\d+);/i.test(gsAgent)&&parseFloat(RegExp["$1"]),
gnIEDocTypeVer=0,
gsFFVer=/firefox\/((\d|\.)+)/i.test(gsAgent)&&RegExp["$1"],
gsSafariVer=""+(/version\/((\d|\.)+)/i.test(gsAgent)&&RegExp["$1"]),
gsChromeVer=""+(/chrome\/((\d|\.)+)/i.test(gsAgent)&&RegExp["$1"]),
gsQBVer=""+(/qqbrowser\/((\d|\.)+)/i.test(gsAgent)&&RegExp["$1"]),
asW="_For_E_Built";

(function()
{





if(gbIsIE)
{
var bYG;
if(document.documentMode)
{
bYG=document.documentMode;
}
else 
{
bYG=5;
if(document.compatMode)
{

bYG=7;
}
}

gnIEDocTypeVer=+bYG;
}
})();



document.domain="mail.qq.com";
if(document.domain!="mail.qq.com"||!window.getTop)
{
document.domain="mail.qq.com";






function getTop()
{
var qT=arguments.callee;

if(!qT.Hc)
{
try
{
if(window!=parent)
{
qT.Hc=parent.getTop?parent.getTop():parent.parent.getTop();
}
else
{
qT.Hc=window;
}
}
catch(bj)
{
qT.Hc=window;
}
}

return qT.Hc;
};

window.getTop=getTop;
}







function callBack(bS,mN)
{
if(!window.Console)
{
try
{
return callBack.Lv.call(this,bS,mN);
}
catch(bj)
{
debug(bj.message);
}
}
else
{
return callBack.Lv.call(this,bS,mN);
}
}







callBack.Lv=function(bS,mN)
{
return typeof bS=="function"
?bS.apply(this,mN||[]):null;
};










function waitFor(NY,Ff,
ub,sx)
{
var gL=0,
jH=ub||500,
Oo=(sx||10*500)/jH;

function anI(pk)
{
try
{
Ff(pk)
}
catch(bj)
{
debug(bj,2);
}
};

(function()
{
try
{
if(NY())
{
return anI(true);
}
}
catch(bj)
{
debug(bj,2);
}

if(gL++>Oo)
{
return anI(false);
}

setTimeout(arguments.callee,jH);
})();
}






function unikey(CL)
{
return[CL,now(),Math.random()].join("").split(".").join("");
}




function genGlobalMapIdx()
{
return Math.round(Math.random()*10000).toString()+new Date().getMilliseconds();
}






function isLeapYear(iQ)
{
return(iQ%400==0||(iQ%4==0&&iQ%100!=0));
}







function calDays(iQ,kD)
{
return[null,31,null,31,30,31,30,31,31,30,31,30,31][kD]||(isLeapYear(iQ)?29:28);
}





function now()
{
return+new Date;
}






function trim(bR)
{
return(bR&&bR.replace?bR:"").replace(/(^\s*)|(\s*$)/g,"");
}

function trim2(bR)
{


if(bR&&bR.substring)
{
var vn=/\s/,Fa=-1,EX=bR.length;
while(vn.test(bR.charAt(--EX)));
while(vn.test(bR.charAt(++Fa)));
return bR.substring(Fa,EX+1);
}

}












function strReplace(bR,Of,bVb,dO)
{
return(bR||"").replace(
new RegExp(regFilter(Of),dO),bVb);
}






function encodeURI(bR)
{
return bR&&bR.replace?bR.replace(/%/ig,"%25").replace(/\+/ig,"%2B")
.replace(/&/ig,"%26").replace(/#/ig,"%23")
.replace(/\'/ig,"%27").replace(/\"/ig,"%22"):bR;
}






function decodeURI(bR)
{
return decodeURIComponent(bR||"");
}






function regFilter(Jw)
{
return Jw.replace(/([\^\.\[\$\(\)\|\*\+\?\{\\])/ig,"\\$1");
}






function isUrl(gB)
{
return(gB||"").replace(
/http?:\/\/[\w.]+[^ \f\n\r\t\v\"\\\<\>\[\]\u2100-\uFFFF]*/,"url")=="url";
}













function cookQueryString(bz,aL)
{
var dD=bz.split("#"),
DZ=dD[1]?("#"+dD[1]):"";

bz=dD[0];

for(var i in aL)
{
var cB=aL[i],
fk=new RegExp(["([?&]",i,"=)[^&#]*"].join(""),"gi");

bz=fk.test(bz)?
bz.replace(fk,"$1"+cB):[bz,"&",i,"=",cB,DZ].join("");
}
return bz;
}









function formatNum(ln,aXQ)
{
var Af=(isNaN(ln)?0:ln).toString(),
awp=aXQ-Af.length;
return awp>0?[new Array(awp+1).join("0"),Af].join(""):Af;
}







function numToStr(ln,bYN)
{
var Af=String(ln.toFixed(bYN));
var re=/(-?\d+)(\d{3})/;
while(re.test(Af))
{
Af=Af.replace(re,"$1,$2");
}
return Af;
}




function numToTimeStr(ln,EN)
{
var QR=EN||"$HH$:$MM$:$SS$";
return	T(QR).replace({
SS:formatNum(parseInt(ln)%60,2),
MM:formatNum(parseInt(ln/60)%60,2),
HH:formatNum(parseInt(ln/3600)%60,2)
})
}








function formatDate(mL,EN,bmv)
{
var dB=mL||new Date(),
Ni=formatNum;

return T(EN,bmv).replace({
YY:Ni(dB.getFullYear(),4),
MM:Ni(dB.getMonth()+1,2),
DD:Ni(dB.getDate(),2),
hh:Ni(dB.getHours(),2),
mm:Ni(dB.getMinutes(),2),
ss:Ni(dB.getSeconds(),2),
ww:outputDayOfWeek(dB.getDay())
});
}

function formatDayByLocale(mL,EN,bmv)
{

var dB=mL||new Date(),
Ni=formatNum,bxt=getLocale();
var bwo={
"zh_CN":
{
"%YY%-%MM%":"%YY%\u5E74%MM%\u6708",
"%YY%-%MM%-%DD%":"%YY%\u5E74%MM%\u6708%DD%\u65E5",
"%YY%-%MM%-%DD%-%WW%":"%YY%\u5E74%MM%\u6708%DD%\u65E5 %WW%",
"%MM%-%DD%":"%MM%\u6708%DD%\u65E5",
"%YY%-%MM%-%DD%-%HH%-%MMMM%":"%YY%\u5E74%MM%\u6708%DD%\u65E5%HH%\u65F6%MMMM%\u5206"
},
"en_US":
{
"%YY%-%MM%":"%MM% %YY%",
"%YY%-%MM%-%DD%":"%MM% %DD%,%YY%",
"%YY%-%MM%-%DD%-%WW%":"%WW%, %MM% %DD%,%YY%",
"%MM%-%DD%":"%MM% %DD%",
"%YY%-%MM%-%DD%-%HH%-%MMMM%":"%MM% %DD%,%YY% %HH%:%MMMM%"
}
};



return T(bwo[bxt][EN],bmv).replace({
YY:Ni(dB.getFullYear(),4),
MM:outputMonth(dB.getMonth()),
DD:Ni(dB.getDate(),2),
WW:outputDayOfWeek(dB.getDay(),true),
HH:Ni(dB.getHours(),2),
MMMM:Ni(dB.getMinutes(),2)
});
}

function formatDateByLocale(mL)
{

return formatDayByLocale(new Date(mL.year,parseInt(mL.month)-1,mL.day||"1"),mL.pattern,"%");
}
function outputMonth(kD)
{
var bxt=getLocale();
var aLc=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
var goc=["January","February","March","April","May","June","July","Aguest","September","October","November","December"];
if(bxt=="en_US")
{
return aLc[kD];
}
else
{
return kD+1;
}
}

function outputDayOfWeek(eQy,dbo)
{
var bxt=getLocale(),bwa;

if(bxt=="en_US")
{
if(!dbo)
{
bwa=["S","M","T","W","T","F","S"];
}
else
{
bwa=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
}
}
else
{
if(dbo)
{
bwa=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"];
}
else
{
bwa=["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"];
}
}
return bwa[eQy];
}






function getAsiiStrLen(bR)
{
return(bR||"").replace(/[^\x00-\xFF]/g,"aa").length;
}





function clearHtmlStr(bR)
{
return bR?bR.replace(/<[^>]*>/g,""):bR;
}








function subAsiiStr(bR,vt,Rv,DR)
{
var AH=function(gB){return gB},
Ed=DR?htmlEncode:AH,
gf=(DR?htmlDecode:AH)(trim((bR||"").toString())),
vQ=Rv||"",
No=Math.max(vt-vQ.length,1),
RU=gf.length,
vU=0,
vg=-1,
qw;

for(var i=0;i<RU;i++)
{
qw=gf.charCodeAt(i);


vU+=qw==35||qw==87
?1.2
:(qw>255?1.5:1);

if(vg==-1&&vU>No)
{
vg=i;
}

if(vU>vt)
{
return Ed(gf.substr(0,vg))+vQ;
}
}

return Ed(gf);
}













function setCookie(aR,cf,nf,dv,ky,pQ)
{
if(aR)
{
document.cookie=T(
[
'$name$=$value$; ',
!nf?'':'expires=$expires$; ',
'path=$path$; ',
'domain=$domain$; ',
!pQ?'':'$secure$'
]
).replace(
{
name:aR,
value:encodeURIComponent(cf||""),
expires:nf&&nf.toGMTString(),
path:dv||'/',
domain:ky||["mail.",getDomain()].join(""),
secure:pQ?"secure":""
}
);
return true;
}
else
{
return false;
}
}






function getCookie(aR)
{
var ib=(new RegExp(["(^|;|\\s+)",regFilter(aR),"=([^;]*);?"].join("")));

if(ib.test(document.cookie))
{

try
{
return decodeURIComponent(RegExp["$2"]);
}
catch(e)
{
return RegExp["$2"];
}
}
}







function deleteCookie(aR,dv,ky)
{
setCookie(aR,"",new Date(0),dv,ky);
}









function setCookieFlag(aR,dT,yo,aAw)
{
var kC=aAw||getCookieFlag(aR),
NQ=new Date();


NQ.setTime(NQ.getTime()+(30*24*3600*1000));
kC[dT]=yo;
setCookie(aR,kC.join(""),NQ);

return kC;
}






function getCookieFlag(aR)
{
var wW=(getCookie(aR)||"").split("");

for(var i=wW.length;i<6;i++)
{
wW[i]='0';
}

return wW;
}








function isArr(aL)
{
return Object.prototype.toString.call(aL)=="[object Array]";
}









function E(ve,DC,WZ,CP)
{
if(!ve)
{
return;
}

if(ve.length!=null)
{
var aK=ve.length,
hk;

if(CP<0)
{
hk=aK+CP;
}
else
{
hk=CP<aK?CP:aK;
}

for(var i=(WZ||0);i<hk;i++)
{
try
{
if(DC(ve[i],i,aK)===false)
{
break;
}
}
catch(bj)
{
debug([bj.message,"<br>line:",bj.lineNumber,'<br>file:',bj.fileName,"<br>",DC]);
}
}
}
else
{
for(var i in ve)
{
try
{
if(DC(ve[i],i)===false)
{
break;
}
}
catch(bj)
{
debug([bj.message,"<br>",DC]);
}
}
}
}









function extend()
{
for(var bv=arguments,qV=bv[0],i=1,aK=bv.length;i<aK;i++)
{
var tH=bv[i];
for(var j in tH)
{
qV[j]=tH[j];
}
}
return qV;
}







function delAtt(aP,aay)
{
try
{
delete aP[aay];
}
catch(bj)
{
}
return aP;
}







function saveAtt(aP,aay)
{
if(aP)
{
var bte=aP.hasOwnProperty(aay),
eI=aP[aay];
return function()
{
if(bte)
{
aP[aay]=eI;
}
else
{
delAtt(aP,aay);
}
return aP;
};
}
else
{
return function(){};
}
}









function globalEval(gv,qc)
{
var uo=getTop().globalEval||arguments.callee;

if(!uo.Os&&typeof(uo.abH)!="boolean")
{
var aX="testScriptEval"+now();

uo.Os=true;
uo(T('window.$id$=1;').replace({
id:aX
}));
uo.Os=false;

uo.abH=getTop()[aX]?true:false;
}

var iS=trim(gv);
if(!iS)
{
return false;
}

var aU=(qc||window).document,
qi=GelTags("head",aU)[0]||aU.documentElement,
eW=aU.createElement("script");

eW.type="text/javascript";
if(uo.abH||arguments.callee.Os)
{
try
{
eW.appendChild(aU.createTextNode(iS));
}
catch(bj)
{
}
}
else
{

eW.text=iS;
}
qi.insertBefore(eW,qi.firstChild);
qi.removeChild(eW);

return true;
}





function evalValue(gv,qc)
{
var bt=unikey("_u"),
aI=qc||window,
kC;

globalEval(
[
"(function(){try{window.",bt,"=",gv,";}catch(_oError){}})();"
].join(""),
aI
);
kC=aI[bt];
aI[bt]=null;

return kC;
}







function evalCss(aHw,qc,aaz)
{
if(aHw)
{
var aU=qc?qc.document||qc:document,
aIh="cssfrom",
bgi="style",
pE=aU.getElementsByTagName("head")[0].getElementsByTagName(bgi),
akT=pE[pE.length-1];


if(aaz&&akT)
{
var lS=akT.getAttribute(aIh)||"";
if(lS.indexOf(aaz)!=-1)
{
return;
}
}

if(aU.createStyleSheet)
{
akT=akT||aU.createStyleSheet().owningElement;
akT.styleSheet.cssText+=getRes(aHw);
}
else
{

if(!akT)
{
var vH=aU.getElementsByTagName("head")[0];
akT=aU.createElement(bgi);
akT.type="text/css";

vH.insertAdjacentElement?
vH.insertAdjacentElement("beforeEnd",akT):
vH.insertBefore(akT,vH.lastChild||vH.firstChild);
}
akT.textContent+=getRes(aHw);
}
aaz&&akT.setAttribute(
aIh,[akT.getAttribute(aIh)||"",aaz].join(",")
);
}
}







function S(aM,dC)
{
try
{
return(dC&&(dC.document||dC)
||document).getElementById(aM);
}
catch(bj)
{
return null;
}
}







function SN(aR,dC)
{
try
{
var KC=(dC&&(dC.document||dC)
||document).getElementsByName(aR);
if(KC)
{
KC[asW]=true;
}
return KC;
}
catch(bj)
{
return null;
}
}









function attr(aw,eV,cf)
{

if(!aw||!aw.nodeType||aw.nodeType===3||aw.nodeType===8)
{
return undefined;
}
if(cf===undefined)
{
return aw.getAttribute(eV);
}
else
{
aw.setAttribute(eV,cf);
return aw;
}
}







function GelTags(jK,bI)
{
var KC=(bI||document).getElementsByTagName(jK);
if(KC)
{
KC[asW]=true;
}
return KC;

}







function CN(Sy,aw,kT)
{
aw=aw||document;

if(aw.getElementsByClassName)
{
return aw.getElementsByClassName(Sy);
}
else
{
kT=kT||"*";
var iE=[],
acV=(kT=='*'&&aw.all)?aw.all:aw.getElementsByTagName(kT),
i=acV.length;
Sy=Sy.replace(/\-/g,'\\-');
var ib=new RegExp('(^|\\s)'+Sy+'(\\s|$)');
while(--i>=0)
{
if(ib.test(acV[i].className))
{
iE.push(acV[i]);
}
}
return iE;
}
};







function F(aM,ax)
{
var Fp=S(aM,ax);
return Fp&&(Fp.contentWindow||(ax||window).frames[aM]);
}

function appendToUrl(bz,bSV)
{
var dD=bz.split("#");
return[dD[0],bSV,(dD.length>1?"#"+dD[1]:"")].join("");
}









function insertHTML(bI,fK,cP)
{
if(!bI)
{
return false;
}
try
{

if(bI.insertAdjacentHTML)
{
bI.insertAdjacentHTML(fK,cP);
}
else
{
var cu=bI.ownerDocument.createRange(),
jY=fK.indexOf("before")==0,
yL=fK.indexOf("Begin")!=-1;
if(jY==yL)
{
cu[jY?"setStartBefore":"setStartAfter"](bI);
bI.parentNode.insertBefore(
cu.createContextualFragment(cP),yL
?bI
:bI.nextSibling
);
}
else
{
var dK=bI[jY?"lastChild":"firstChild"];
if(dK)
{
cu[jY?"setStartAfter":"setStartBefore"](dK);
bI[jY?"appendChild":"insertBefore"](cu
.createContextualFragment(cP),dK);
}
else
{

bI.innerHTML=cP;
}
}
}
return true;
}
catch(bj)
{

return false;
}
}

















function setHTML(auP,cP)
{
var ayU=typeof auP==="string"?S(auP):auP,
awK=ayU.cloneNode(false);
awK.innerHTML=cP;
ayU.parentNode.replaceChild(awK,ayU);
return awK;
}



















function createIframe(ax,sg,cH)
{
var Ef="_creAteifRAmeoNlQAd_",
da=cH||{},
aX=cH.id||unikey(),
pI=S(aX,ax);


typeof ax[Ef]!="function"&&
(ax[Ef]=function(aM,aKF)
{
callBack.call(aKF,arguments.callee[aM],[ax]);
}
);


ax[Ef][aX]=cH.onload;
if(!pI)
{
insertHTML(
da.obj||ax.document.body,
da.where||"afterBegin",
TE([
'<iframe frameborder="0" scrolling="$scrolling$" id="$id$" name="$id$" ',
'$@$if($transparent$)$@$allowTransparent$@$endif$@$ class="$className$" ',
'onload="this.setAttribute(\x27loaded\x27,\x27true\x27);$cb$(\x27$id$\x27,this);" ',
'src="$src$" style="$style$" $attrs$>',
'</iframe>'
]).replace(extend(
{
"id":aX,
"cb":Ef,
style:"display:none;",
scrolling:"no",
src:sg
}
,cH))
);
pI=S(aX,ax);
pI.aEn=cH.onload;
}
else if(pI.getAttribute("loaded")=="true")
{
ax[Ef](aX,pI);
}

return pI;
}





function removeSelf(bI)
{
try
{
bI.parentNode.removeChild(bI);
}
catch(bj)
{
}

return bI;
}







function isObjContainTarget(bI,dS)
{
try
{
if(!bI||!dS)
{
return false;
}
else if(bI.contains)
{
return bI.contains(dS);
}
else if(bI.compareDocumentPosition)
{
var DO=bI.compareDocumentPosition(dS);
return(DO==20||DO==0);
}
}
catch(FJ)
{


}

return false;
}






function isDisableCtl(aHU,ax)
{
var bfw=SN(aHU,ax);
for(var i=bfw.length-1;i>=0;i--)
{
if(bfw[i].disabled)
{
return true;
}
}
return false;
}







function disableCtl(aHU,uH,dC)
{
E(SN(aHU,dC),function(Wy)
{
var eQD=Wy.disabled;
Wy.disabled=uH;


if(!gbIsIE&&Wy.tagName.toUpperCase()=="A")
{
if(eQD!=uH)
{

var cth="oldstyledisplay",
dAT="disablednodeid";
if(uH)
{
var bTu=unikey();
var bkw=Wy.cloneNode(true);
addClass(bkw," btn_disabled");
bkw.name="";
bkw.id=bTu;
Wy.parentNode.insertBefore(bkw,Wy);
attr(Wy,cth,Wy.style.display);
attr(Wy,dAT,bTu);
Wy.style.display="none";
}
else
{
var bTu=attr(Wy,"disablednodeid");
var bkw=S(bTu,dC);
Wy.style.display=attr(Wy,cth);
removeSelf(bkw);
attr(Wy,cth,"");
attr(Wy,dAT,"");
}
}
}
}
);
}


(function(aN)
{
var
YX=/\[([\w\-_]+)(=[\'\"]?([\w\-_~@]+)[\'\"]?)?\]/,
XE=/\[[\w\-_]+(=[\'\"]?[\w\-_~@]+[\'\"]?)?\]/g,
afb=/^([#\$<:])([\w\-_]+)>?$/,
Xc=/.*?\.([\w\-_]+)/,
Hh=/(?:[\w\-~@\\.#\[\]=\'\"]+)+|\*|>/ig,
yV=/#([\w\-_]+)/,
yW=/^([\w\*\-_]+)/,

lw=[aN,aN];

function qf(aP)
{
for(var i=0,hq=[],aK=aP.length;i<aK;i++)
{
hq[i]=aP[i];
}
return hq;
}


function ry(gs,Fk,vs,Ys)
{
var wR=!Fk||Fk.test(gs.className),
i=0,yz,yf;

while(wR&&i<Ys)
{
yz=gs.getAttribute((yf=vs[i++])[1]);
wR=yf[2]?yz===yf[3]:!!yz;
}
return wR;
}


function yN(fE)
{
var dW=fE.match(XE);
if(dW)
{
for(var i=dW.length-1;i>=0;i--)
{
dW[i]=dW[i].match(YX);
}
}
return dW;
}


function zQ(fE)
{
var jh=(fE.match(Xc)||lw)[1];
return jh&&RegExp('(^|\\s)'+jh+'(\\s|$)');
}

function tO(ty,vE,WI)
{
var pP=ty.pop();

if(pP==='>')
{
return tO(ty,vE,true);
}

var aX=(pP.match(yV)||lw)[1],
fV=zQ(pP),
ft=(pP.match(yW)||lw)[1],
dW=yN(pP),
jO=dW?dW.length:0,
cU=[],
WC=-1,
eC=-1,
cA,
ew,
yK;


ft&&(ft=ft=="*"?"":ft.toUpperCase());

while((cA=vE[++eC]))
{
ew=cA.parentNode;

do
{
yK=(!aX||ew.id===aX)&&
(!ft||ew.nodeName==ft)&&
ry(ew,fV,dW,jO);

if(WI||yK)
{
break;
}

}
while((ew=ew.parentNode)&&ew.getAttribute);

yK&&(cU[++WC]=cA);
}

return ty[0]&&cU[0]?tO(ty,cU):cU;
}


function aEL(fE,aw)
{
if(!aw)
{
return[];
}
var gH=fE.match(Hh),
jz=gH.pop(),
aX=(jz.match(yV)||lw)[1],
fV=zQ(jz),
dW=yN(jz),
jO=dW?dW.length:0,
ft=(jz.match(yW)||lw)[1],
bKo=[],
dM=[],
i=-1,
eC=-1,
cA;

while((aw=aw.parentNode)&&aw.nodeType!==9)
{
bKo.push(aw);
}

ft&&(ft=ft=="*"?"":ft.toUpperCase());

while(cA=bKo[++i])
{
(!aX||cA.id===aX)&&
(!ft||cA.nodeName==ft)&&
ry(cA,fV,dW,jO)&&
(dM[++eC]=cA);
}

return gH[0]&&dM[0]?tO(gH,dM):dM;
}

function xH(fE,aJ)
{
if(!aJ)
{
return[];
}

if(aJ.querySelectorAll)
{
return qf(aJ.querySelectorAll(fE));
}

var gH=fE.match(Hh),
jz=gH.pop(),
aX=(jz.match(yV)||lw)[1],
fV=zQ(jz),
dW=yN(jz),
jO=dW?dW.length:0,
ft=(jz.match(yW)||lw)[1],
dM;


if(aX)
{
var aU=(aJ||window).document||aJ,
aB=aU.getElementById(aX);

if(!aB||(ft&&aB.nodeName!=ft.toUpperCase())||
!ry(aB,fV,dW,jO))
{
return[];
}
dM=[aB];
}
else
{
var dJ=aJ.getElementsByTagName?aJ:aJ.document,
kx=dJ.getElementsByTagName(ft||'*');

if(fV||jO)
{
var i=-1,eC=-1,cA;
dM=[];
if(!jO)
{
while(cA=kx[++i])
{
fV.test(cA.className)&&(dM[++eC]=cA);
}
}
else
{
while(cA=kx[++i])
{
ry(cA,fV,dW,jO)&&(dM[++eC]=cA);
}
}
}
else
{
dM=qf(kx);
}
}

return gH[0]&&dM[0]?tO(gH,dM):dM;
}

window.finds=xH;
window.parents=aEL;
})();








function isShow(qY,dC)
{
return(getStyle((typeof(qY)=="string"?S(qY,dC):qY),"display")||"none")
!="none";
}







function show(qY,lV,dC)
{
var dK=(typeof(qY)=="string"?S(qY,dC):qY);
if(dK)
{
dK.style.display=(lV?"":"none");
}
else if(!dC&&typeof(qY)=="string")
{

}
return dK;
}


var Show=show;





function toggle(qY,dC)
{
return show(qY,!isShow(qY,dC),dC);
}







function setClass(bI,pc)
{
if(bI&&typeof(pc)!="undefined"&&bI.className!=pc)
{
bI.className=pc;
}
return bI;
}







function addClass(bI,pc)
{
if(bI)
{
var jh=" "+bI.className+" ";
if(jh.indexOf(" "+pc+" ")<0)
{
bI.className+=bI.className?" "+pc:pc;
}
}
return bI;
};







function rmClass(bI,pc)
{
if(bI)
{
if(pc)
{
var jh=" "+bI.className+" ";
jh=jh.replace(" "+pc+" "," ");
bI.className=trim(jh);
}
else
{
bI.className="";
}
}
return bI;
};





function hasClass(bI,pc)
{
return bI&&(" "+bI.className+" ").indexOf(" "+pc+" ")>-1;
};







function getStyle(bI,aRz)
{
var ri=bI&&(bI.currentStyle
?bI.currentStyle
:bI.ownerDocument.defaultView.getComputedStyle(bI,null));
return ri&&ri[aRz]||"";
}







function setOpacity(bI,ajb)
{
if(bI&&bI.tagName)
{
var di=bI.style,
tF=ajb||0;











if(typeof di.opacity=="undefined")
{
di.filter=tF==1
?"":["alpha(opacity=",tF*100,")"].join("");
}
else
{
di.opacity=tF;
}
}
return bI;
}






function getOpacity(bI,ajb)
{
if(bI&&bI.tagName)
{
var di=bI.style,
tF=1;









if(typeof di.opacity=="undefined")
{
tF=parseFloat(di.filter.split("=").pop())/100;
}
else
{
tF=parseFloat(di.opacity);
}

if(isNaN(tF))
{
tF=1;
}
}
return tF;
}






function getStrDispLen(bR)
{
var biI="__QMStrCalcer__";
var atz=S(biI,getTop());
if(!atz)
{
var cX=getTop().document.body;
insertHTML(
cX,
"afterBegin",
T([
'<div id="$id$" ',
'style="width:1px;height:1px;overflow:auto;*overflow:hidden;white-space:nowrap;',
'position:absolute;left:0;top:0;">','</div>']).replace({
id:biI
})
);
atz=cX.firstChild;
}
atz.innerHTML=htmlEncode(bR);
return atz.scrollWidth;
}







function calcPos(bI,afn,bQo,bVy)
{
var cj=0,
eA=0,
cS=0,
cN=0,
ao=arguments.callee,
cYK=function(a){return a};

!bQo&&(bQo=cYK);
!bVy&&(bVy=cYK);

if(bI&&bI.tagName)
{
var Yv=bI,
dK=bI.parentNode,
amf=bI.offsetParent,
aU=bI.ownerDocument,
ho=aU.documentElement,
cX=aU.body;

eA+=bVy(bI.offsetLeft);
cj+=bQo(bI.offsetTop);
cS=bI.offsetWidth;
cN=bI.offsetHeight;

while(amf&&dK&&dK!=ho&&dK!=cX)
{
if(ao.aOX()&&Yv.style&&getStyle(Yv,"position")==="fixed")
{
break;
}

if(amf==dK)
{
eA+=bVy(dK.offsetLeft);
cj+=bQo(dK.offsetTop);
amf=dK.offsetParent;
}

eA-=dK.scrollLeft;
cj-=dK.scrollTop;

Yv=dK;
dK=dK.parentNode;

}

if(ao.aOX()&&Yv.style&&getStyle(Yv,"position")==="fixed")
{
eA+=bodyScroll(aU,'scrollLeft');
cj+=bodyScroll(aU,'scrollTop');
}
}





return afn=="json"
?{top:cj,bottom:cj+cN,left:eA,
right:eA+cS,width:cS,height:cN}
:[cj,eA+cS,cj+cN,eA,cS,cN];
}

calcPos.aOX=function()
{

var bGu,
ao=this;
if(ao.aPq==bGu)
{
var dh=document.createElement("div");
dh.style.cssText="'position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;";
dh.innerHTML="<div style='position:fixed;top:20px;'></div>";
document.body.appendChild(dh);
ao.aPq=!!{20:1,15:1}[dh.firstChild.offsetTop];
}
return ao.aPq;
};







function calcPosFrame(bI,ax)
{
ax=ax||window;
var mn=calcPos(bI),
aq=getTop();
while(ax.frameElement&&ax!=aq)
{
var fq=calcPos(ax.frameElement);
for(var i=0;i<4;i++)
{

mn[i]+=fq[i&1?3:0]-Scale.fixFrameCursorPos(bodyScroll(ax,i&1?"scrollLeft":"scrollTop"));

}
ax=ax.parent;
}
return mn;
}










function calcAdjPos(kg,qh,lI,ax,eY)
{
qh=Scale.fixBodyWidth(qh);
lI=Scale.fixBodyHeight(lI);
var LX=Scale.fixBodyHeight(bodyScroll(ax,'clientHeight')),
aTN=Scale.fixBodyWidth(bodyScroll(ax,'clientWidth')),
Gb=Scale.fixOffsetTop(bodyScroll(ax,'scrollTop')),
aou=Scale.fixOffsetLeft(bodyScroll(ax,'scrollLeft')),
aaM=Gb+LX,
aNt=aou+aTN,
aO=[0,0,0,0];

if(eY<2)
{

var kb=aou-kg[1];
if(eY==0&&kg[3]<qh
||eY==1&&aNt-kg[1]>qh)
{

aO[1]=(aO[3]=kg[1])+qh;
}
else
{

aO[3]=(aO[1]=kg[3])-qh;
}
if(kg[0]+lI>aaM)
{


aO[0]=(aO[2]=(kg[2]-lI<Gb?aaM:kg[2]))-lI;
}
else
{

aO[2]=(aO[0]=kg[0])+lI;
}
}
else
{

if(eY==2&&kg[0]-Gb<lI
||eY==3&&aaM>kg[2]+lI)
{

aO[2]=(aO[0]=kg[2])+lI;
}
else
{

aO[0]=(aO[2]=kg[0])-lI;
}
aO[1]=kg[1];
aO[3]=kg[3];
}
return aO;
}







function bodyScroll(dC,aC,cM)
{
var aU=(dC||window).document||dC,
cX=aU.body,
ta=aU.documentElement;

if(typeof(cM)=="number")
{
cX[aC]=ta[aC]=cM;
}
else
{
if(aC=="scrollTop"&&typeof dC.pageYOffset!="undefined")
{
return dC.pageYOffset;
}
else
{
return ta[aC]||cX[aC];
}
}
}








function htmlDecode(bR)
{
return bR&&bR.replace?(bR.replace(/&nbsp;/gi," ").replace(/&lt;/gi,"<").replace(/&gt;/gi,">")
.replace(/&quot;/gi,"\"").replace(/&#39;/gi,"'").replace(/&amp;/gi,"&")
):bR;
}






function htmlEncode(bR)
{

return bR&&bR.replace?(bR.replace(/&(?!#x)/g,"&amp;").replace(/\"/g,"&quot;")
.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\'/g,"&#39;")):bR;
}







function filteScript(bR,cbF)
{
return bR
&&bR.replace(/<script ?.*>(.*?)<\/script>/ig,
"<script>$1\n</script>"
).replace(/<script ?.*>([\s\S]*?)<\/script>/ig,cbF||"");
}






function textToHtml(eG)
{

return[
'<DIV>',
eG.replace((eG.indexOf("<BR>")>=0)?/<BR>/ig:/\n/g,
"</DIV><DIV>"
),
"</DIV>"
].join("")
.replace(new RegExp("\x0D","g"),"")
.replace(new RegExp("\x20","g"),"&nbsp;")
.replace(new RegExp("(<DIV><\/DIV>)*$","g"),"")
.replace(/<DIV><\/DIV>/g,"<DIV>&nbsp;</DIV>");
}






function textToHtmlForNoIE(eG)
{
return eG.replace(/\n/g,"<br>");
}






function htmlToText(eG)
{
return eG

.replace(/\n/ig,"")

.replace(/(<\/div>)|(<\/p>)|(<br\/?>)|(<\/li>)/ig,"\n");
}






function fixNonBreakSpace(bR)
{
return(bR||"").replace(/\xA0/ig," ");
}









function pasteHTML(ahJ,ata,bPF,ax)
{
ax=ax||getMainWin();
ahJ=filteScript(ahJ);
var bi=(typeof(ata)=="string"?S(ata,ax):ata);
if(!bi||!ahJ)
{
return false;
}
if(bPF)
{
bi.innerHTML=ahJ;
}
else
{
insertHTML(bi,"afterBegin",ahJ);
}
return true;
}







function T(gQ,ka)
{
return new T.pS(gQ,ka);
}









































function TE(gQ,ka)
{
var aq=getTop();
if(aq.QMTmplChecker)
{
var bj=(new aq.QMTmplChecker(gQ.join?gQ:[gQ],
ka)).getErrors();
if(bj.length)
{
debug(bj.join("\n"),"code");
}
}
return new T.pS(gQ,ka,"exp");
}

T.pS=function(gQ,ka,aC)
{
this.sq=gQ.join?gQ.join(""):gQ.toString();
this.od=ka||"$";
this.Kw=aC=="exp"
?this.KS
:this.KQ;
};

T.pS.prototype=
{
toString:function()
{
return this.sq;
},

replace:function(fO,jA,uE)
{
return this.Kw(fO,jA,uE);
},

KQ:function(fO,RV,KW)
{
var ao=this,
lm=ao.od,
jR=ao.yp,
sv=ao.Lu,
yJ=!jR,
HL=RV?ao.Ry:ao.jL;

if(yJ)
{

jR=ao.yp=ao.sq.split(ao.od);
sv=ao.Lu=ao.yp.concat();
}

for(var i=1,aK=jR.length;i<aK;i+=2)
{
sv[i]=HL.call(ao,yJ?(jR[i]=jR[i].split("."))
:jR[i],fO,KW,lm);
}

return sv.join("");
},

KS:function(fO,jA,uE)
{
var ao=this,
jX;

if(!ao.ym)
{
ao.Kr();
}

if(typeof jA=="string")
{
var nU=ao.yh[jA];
if(nU)
{
jX=typeof nU!="function"
?ao.yh[jA]=ao.yM(nU)
:nU;
}
}
else
{
jX=ao.ym;
}

try
{
return jX&&jX(fO,ao.Jd,
ao.jL,ao.od,htmlEncode,uE||jA)||"";
}
catch(bj)
{
return bj.message;
}
},




Kr:function()
{
var ao=this,
gG=0,
fh=[],
sk=[],
sr=[],
Lq=ao.yh=[],
lm=ao.od,
ib=new RegExp(["","(.*?)",""].join(regFilter(lm)),"g"),
lp="_afG('$1'.split('.'),_oD,_aoD,_aoR)",
qH=ao.Jd=ao.sq.split(["","@",""].join(lm)),
dk;

for(var i=0,aK=qH.length;i<aK;i++)
{
dk=qH[i];

if(i%2==0)
{
fh.push("_oR.push(_aoT[",i,"].replace(_oD,false,_aoD));");
qH[i]=T(dk,lm);
}
else if(dk=="else")
{
fh.push("}else{");
}
else if(dk=="endsec")
{
if(sr.length)
{
var aE=sr.pop();
Lq[aE[0]]=fh.slice(aE[1]);
}
}
else if(dk=="endfor")
{
sk.length&&fh.push(
"try{delete _oD._parent_;delete _oD._idx_;}catch(e){}}_oD=_oS",sk.pop(),";");
}
else if(dk=="endif")
{
fh.push("}");
}
else if(dk.indexOf("else if(")==0)
{
fh.push("}",dk.replace(ib,lp),"{");
}
else if(dk.indexOf("if(")==0)
{
fh.push(dk.replace(ib,lp),"{");
}
else if(dk.indexOf("for(")==0)
{
sk.push(++gG);
fh.push(
"var _sI",gG,",_oD",gG,",_oS",gG,"=_oD;",
dk.replace(ib,
["_sI",gG," in (_oD",gG,"=",lp,")"].join("")),
"{",
"_oD=_oD",gG,"[_sI",gG,"];",
"if(!_oD){continue;}",
"try{_oD._parent_=_oS",gG,";",
"_oD._idx_=_sI",gG,";}catch(e){}"
);
}
else if(dk.indexOf("sec ")==0)
{
sr.push([dk.split(" ").pop(),fh.length]);
}
else if(dk.indexOf("eval ")==0)
{
fh.push("_oR.push(",dk.substr(5).replace(ib,lp),");");
}
else if(dk.indexOf("html(")==0)
{
fh.push("_oR.push(_afE(",dk.substr(5).replace(ib,lp),");");
}
}

ao.ym=ao.yM(fh);

return fh;
},

yM:function(KA)
{
try
{
return eval(
[
'([function(_aoD,_aoT,_afG,_aoR, _afE, A){var _oR=[],_oD=_aoD;',
KA.join(""),
'return _oR.join("");}])'
].join("")
)[0];
}
catch(fF)
{
return function(){return"compile err!"};
}
},

Ry:function(kv,fO,ud,mP)
{
var eI=this.jL(kv,fO,ud,mP);
return typeof eI=="undefined"?mP+kv.join(".")+mP:eI;
},

jL:function(kv,fO,ud,mP,iV)
{
var aK=kv.length,
bt,
eI,
Ps;

if(aK>1)
{
try
{
eI=fO;
for(var i=0;i<aK;i++)
{
bt=kv[i];
if(bt=="_root_")
{
eI=ud;
}
else
{
eI=eI[bt];
}
}
}
catch(bj)
{
eI=Ps;
}
}
else
{
eI={
"_var_":mP,
"_this_":fO
}[bt=kv[0]]||fO[bt];
}

return eI;
}
};










var addEvent=(function()
{








function zb(dS,aC,yX,my)
{
if(dS&&yX)
{
if(dS.addEventListener)
{
dS[my?"removeEventListener":"addEventListener"](
aC,yX,false
);
}
else if(dS.attachEvent)
{
dS[my?"detachEvent":"attachEvent"]("on"+aC,
yX
);
}
else
{
dS["on"+aC]=my?null:yX;
}






if(!my&&dS.ActiveXObject)
{
if(!dS.goEvtPreUnloadFuns)
{
dS.goEvtPreUnloadFuns=[];
zb(dS,"unload",function()
{
var Ll=dS.goEvtPreUnloadFuns;
for(var i=0,l=Ll.length;i<l;i++)
{
zb(dS,Ll[i][0],Ll[i][1],true);
}
}
);
}

dS.goEvtPreUnloadFuns.push([aC,yX]);
}
}

return dS;
}

return function(dS,aC,ZV,my)
{
if(dS&&(dS.join||dS[asW]))
{
E(dS,function(aw)
{
zb(aw,aC,ZV,my);
}
);
}
else
{
zb(dS,aC,ZV,my);
}

return dS;
};
}
)();








function addEvents(dS,kl,my)
{
E(kl,function(ny,aC)
{
addEvent(dS,aC,ny,my);
}
);
return dS;
}








function removeEvent(dS,aC,yX)
{
return addEvent(dS,aC,yX,true);
}







function removeEvents(dS,kl)
{
return addEvents(dS,kl,true);
}






function preventDefault(ap)
{
if(ap)
{
if(ap.preventDefault)
{
ap.preventDefault();
}
else
{
ap.returnValue=false;
}
}
return ap;
}






function stopPropagation(ap)
{
if(ap)
{
if(ap.stopPropagation)
{
ap.stopPropagation();
}
else
{
ap.cancelBubble=true;
}
}
return ap;
}






function getEventTarget(ap)
{
return ap&&(ap.srcElement||ap.target);
}











function getUserTarget(aw,ap,eV)
{
var aT=getEventTarget(ap);
while(aT&&isObjContainTarget(aw,aT))
{
if(attr(aT,eV))
{
return aT;
}
aT=aT.parentNode;
}
}











function fireMouseEvent(bI,avN,ap)
{
if(bI)
{
ap=ap||{};
if(bI.dispatchEvent)
{

var aU=bI.ownerDocument,
aI=aU.defaultView,
cF=aU.createEvent("MouseEvents");
cF.initMouseEvent(avN,true,true,aI,0,0,0,0,0,!!ap.ctrlKey,!!ap.altKey,!!ap.shiftKey,!!ap.metaKey,0,null);
bI.dispatchEvent(cF);
}
else
{


if(bI.tagName=="INPUT"&&bI.getAttribute("type")=="submit"&&avN=="click")
{
bI.click();
}
else
{
var cF=bI.ownerDocument.createEventObject();
for(var bv=["ctrlKey","altKey","shiftKey","metaKey"],i=bv.length-1;i>=0;i--)
{
cF[bv[i]]=ap[bv[i]];
}
bI.fireEvent("on"+avN,cF);
}
}
}
return bI;
}

var liveEvent=(function()
{
var 
ahp=
{
click:"ck",
dblclick:"dbl",
mousedown:'md',
mouseup:'mu',
mouseover:'mor',
mousemove:'mm',
mouseout:'mot',
keydown:'kd',
keypress:'kp',
keyup:'ku'
};

function eMV(ap,aP)
{
var mC=ap.type,
adh=ahp[mC],
Jj=aP.rule()[mC],
dg=aP.events(),
aT=getEventTarget(ap);

if(!adh)
{
return;
}

do
{
var Pm=aT.getAttribute(adh),
hy=Jj[Pm];
if(Pm&&hy&&dg[Pm])
{
gtX=dg[Pm].call(aP,ap,aT);
if(!hy.bPropagable)
{
break;
}
}
}
while((aT=aT.parentNode)&&aT.getAttribute);
}

return function(aw,aP)
{
var Jj=aP.rule();
for(var mC in Jj)
{
addEvent(aw,mC,function(ap)
{
eMV(ap,aP);
});
}
};
})();











function loadJsFile(ji,axJ,eU,IZ,pu,bQr)
{
var aU=eU||document,
bmE=typeof IZ=="function",
cMV,eW,
zx=getTop().loadJsFile,
jb=getRes(ji),
jd=zx.jd||(zx.jd={});

if(axJ)
{
for(var Qt=GelTags("script",aU),
i=Qt.length-1;i>=0;i--)
{
if(Qt[i].src.indexOf(jb)!=-1)
{
if(bmE)
{
var bt=Qt[i].getAttribute("_key_");
if(jd[bt]===true)
{
callBack.call(Qt[i],IZ);
}
else
{
jd[bt].push(IZ);
}
}
return Qt[i];
}
}
}

eW=aU.createElement("script");
E(pu,function(jV,bG)
{
eW.setAttribute(bG,jV);
}
);

var bt=unikey();
eW.setAttribute("_key_",bt);
jd[bt]=[];

function aGs()
{
var ao=this,bt=ao.getAttribute("_key_");
callBack.call(ao,IZ);
E(jd[bt],function(ea){ea()});
jd[bt]=true;

if(bQr)
{
removeSelf(eW);
}
ao.onreadystatechange=ao.onload=null;
}

(GelTags("head",aU)[0]||aU.documentElement)
.appendChild(extend(eW,

{
onload:aGs,
onreadystatechange:function()
{
var ao=this;
({loaded:true,complete:true}[ao.readyState])&&aGs.call(this);
}
},
{
type:"text/javascript",
charset:pu&&pu.charset||"gb2312",
src:jb
}
)
);

return eW;
}






function loadJsFileToTop()
{

if(arguments.length==2)
{
var aye=arguments[0],
nA=arguments[1];
}
else
{
var aye="",
nA=arguments[0];
}
var bSS=window.loadJsFile;


function bCv(ji)
{
if(ji)
{

bSS(aye+ji,true,getTop().document);
}
}
E(nA,bCv);
}









function loadCssFile(ji,axJ,eU)
{
var aU=eU||document,
jb=getRes(ji);

if(axJ)
{
for(var bgY=GelTags("link",aU),
i=bgY.length-1;i>=0;i--)
{
if(bgY[i].href.indexOf(jb)!=-1)
{
return;
}
}
}

var iC=aU.createElement("link"),
aIi=GelTags("link",aU);

iC.type="text/css";
iC.rel="stylesheet";
iC.href=jb;

if(aIi.length>0)
{
var beE=aIi[aIi.length-1];
beE.parentNode.insertBefore(iC,
beE.nextSibling);
}
else
{
(GelTags("head",aU)[0]||aU.documentElement).appendChild(iC);
}

return iC;
}








function replaceCssFile(EN,ji,eU)
{
if(EN)
{
E(GelTags("link",eU||document),function(aJN)
{
if(aJN&&aJN.href.indexOf(EN)!=-1)
{
removeSelf(aJN);
}
});
}

return loadCssFile(ji,false,eU);
}









function QMAjax(bz,mq,sx,fU)
{
var ao=this,
aq=getTop(),
nr=fU,
dR;

function bJo()
{
ao.onComplete(nr);
}

function bAP(dO)
{
ao.onError(nr,dO);
}

function bCD(bKd)
{
if(!dR)
{
dR=setTimeout(
function()
{
ao.abort();
},
bKd
);
}
}

function aau(dO)
{
if(dR)
{
clearTimeout(dR);
dR=null;
if(dO!="ok")
{
bAP(dO);
}
return true;
}
return false;
}



this.method=mq||"POST";
this.url=bz;
this.async=true;
this.content="";
this.timeout=sx;


this.onComplete=function()
{
};
this.onError=function()
{
};

if(!nr)
{
nr=QMAjax.newXhr();
}

if(!nr)
{
return false;
}





this.abort=function()
{
aau("abort");
nr.abort();
};






this.send=function(bEM)
{
if(!this.method||!this.url||!this.async)
{
return false;
}

typeof this.url=="object"&&(this.url=this.url.replace({}));

var gw=this.method.toUpperCase(),
iU=getTop().getSid&&getTop().getSid();
this.abort();

nr.open(gw,

this.url+(iU&&gw=="POST"&&((this.url.split("?")[1]||"")+"&").indexOf("&sid=")==-1
?(this.url.indexOf("?")==-1?"?sid=":"&sid=")+iU:""),
this.async
);

if(gw=="POST")
{
nr.setRequestHeader("Content-Type",document.charset);
nr.setRequestHeader("Content-length",this.content.length);
nr.setRequestHeader("Content-Type",
"application/x-www-form-urlencoded"
);
}

aq.E(this.headers,function(cf,bG)
{
nr.setRequestHeader(bG,cf);
}
);

nr.onreadystatechange=function()
{
try
{
if(nr.readyState==4)
{
if(nr.status==200)
{
if(aau("ok"))
{
bJo();
}
}
else
{
aau(nr.status);
}
}
}
catch(ee)
{
aau(ee.message);
}
}



bCD(this.timeout||15000);

try
{
if(gw=="POST")
{
var ci=[bEM||this.content,""].join("");
nr.send(ci);
}
else
{

nr.send(null);
}
}
catch(bj)
{
aau(bj.message);
}

return true;
}
};





QMAjax.newXhr=function(ax)
{
var aI=ax||window;

if(aI.ActiveXObject)
{
try
{
return new aI.ActiveXObject("MSXML2.XMLHTTP");
}
catch(bj)
{
try
{
return new aI.ActiveXObject("Microsoft.XMLHTTP");
}
catch(bj)
{
}
}
}

if(aI.XMLHttpRequest)
{
return new aI.XMLHttpRequest;
}

Log("gen xhr fail");
}














QMAjax.send=function(bz,ar,bxW)
{
var aQ=ar||{};
gq=bxW||new QMAjax("","",0,aQ.xhr),
gq.url=bz;

E("method,timeout,content,headers".split(","),function(bG)
{
if(aQ[bG])
{
gq[bG]=aQ[bG];
}
}
);

var aCn=new Date().valueOf();
gq.onComplete=function(fU)
{
QMAjax.stat(new Date().valueOf()-aCn,bz);
callBack.call(fU,ar.onload,[true,trim2(fU.responseText||""),fU]);

};

gq.onError=function(fU,dO)
{
callBack.call(fU,ar.onload,[false,dO,fU]);
};

gq.send();
}


;(function()
{
var hq=[];

QMAjax.stat=function(cFD,bz)
{
cFD<120000&&cFD>0&&(bz.indexOf("/")==0)&&hq.push(cFD);

if(hq.length>=20)
{
var djA=0,dDC=0;
for(var i in hq)
{
djA+=hq[i];
}
dDC=(djA/hq.length).toFixed(2);
hq.length=0;
ossLog("delay","all","stat=qmajax&time="+dDC);
}
}
})();


function includeAjax(ax)
{


var iS=[];
iS.push(QMAjax.toString());
iS.push(["var QMAjaxSend =",QMAjax.send.toString()].join(""));
globalEval(iS.join(""),ax);

}

var QMAjaxRequest=QMAjax;







function getErrMsg(fU,aXv)
{
var auE="_AjaxErrorHTML_";
var FB=S(auE);
if(!FB)
{
FB=document.createElement("div");
FB.id=auE;
FB.style.display="none";
document.body.appendChild(FB);
}
FB.innerHTML=filteScript(fU.status==200?fU.responseText:"");
var abr=S(aXv);
return abr&&(abr.innerText||abr.textContent)||"";
}





function getHttpProcesser()
{
var aq=getTop(),
asj=aq.gCurHttpProcesserId||0;

aq.gCurHttpProcesserId=(asj+1)%30;

try
{
if(aq.gHttpProcesserContainer[asj]!=null)
{
delete aq.gHttpProcesserContainer[asj];
}
}
catch(bj)
{
aq.gHttpProcesserContainer={};
}

var beV=aq.gHttpProcesserContainer[asj]=new aq.Image;
beV.onload=function()
{
return false;
};

return beV;
}







function goUrl(aHo,bz,cdk)
{
try
{
var sN=(aHo.contentWindow||aHo).location,
bVD=sN.href.split("#"),
bdT=bz.split("#"),
bVZ=bdT[0]==bVD[0],
aY=bVZ?bdT[0]:bz;

if(cdk)
{
sN.href=aY;
}
else
{
sN.replace(aY);
}
}
catch(bj)
{
aHo.src=bz;
}
}









function generateFlashCode(aM,Zp,vs,bD)
{
var anq=[],
Ym=[],
MN=[],
cC=bD||{},

MA=T(' $name$=$value$ '),
anb=T('<param name="$name$" value="$value$" />'),
aQc=gbIsIE?T([
'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ',
'$codebase$ ','$attr$ $id$ >',
'$param$',
'<embed $embed$ type="application/x-shockwave-flash" ',
'$pluginspage$ ',' $name$ ></embed>',
'</object>'
]):T([
'<embed $embed$ type="application/x-shockwave-flash" ',
'$pluginspage$ ',' $name$ $id$ ></embed>'
]);

function MC(aR,jV)
{
return{
name:aR,
value:jV
};
}

cC.allowscriptaccess=vs&&vs.allowscriptaccess||"always";
cC.quality="high";

for(var vA in cC)
{
var bJ=MC(vA,cC[vA]);
Ym.push(anb.replace(bJ));
MN.push(MA.replace(bJ));
}

for(var vA in vs)

{
var bJ=MC(vA,vs[vA]);
anq.push(MA.replace(bJ));
MN.push(MA.replace(bJ));
}

if(Zp)
{
Ym.push(anb.replace(MC("movie",Zp)));
MN.push(MA.replace(MC("src",Zp)));
}

return aQc.replace({
id:aM&&[' id="',aM,'"'].join(""),
name:aM&&[' name="',aM,'"'].join(""),
attr:anq.join(""),
param:Ym.join(""),
embed:MN.join(""),
codebase:location.protocol=="https:"
?''
:'codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" ',
pluginspage:location.protocol=="https:"
?''
:'pluginspage="http://www.adobe.com/cn/products/flashplayer" '
}
);
}







function getFlash(aM,ax)
{
var aI=ax||window;
return S(aM,aI);
}

















function zoomFuncCreater(ar)
{














return function(qh,lI,bYk,bTw)
{
var aLN=bYk||ar.limitWidth||1,
aHx=bTw||ar.limitHeight||1,
aNX=(qh/aLN)||1,
aRC=(lI/aHx)||1,
ql=[aNX<1?"w":"W",aRC<1?"h":"H"]
.join(""),
vB=ar[ql]||ar.all,
aO={};

switch(vB)
{
case"stretch":
aO.width=aLN;
aO.height=aHx;
break;
case"zoomMaxMin":
case"zoomMinMax":
var bgf=qh>lI?0:1;
vB=["zoomMax","zoomMin"][vB=="zoomMinMax"
?1-bgf
:bgf];
case"zoomMax":
case"zoomMin":
var aqC=Math[vB=="zoomMax"?"min":"max"](
aRC,aNX
);
aO.width=Math.round(qh/aqC);
aO.height=Math.round(lI/aqC);
break;
case"none":
default:
aO.width=qh;
aO.height=lI;
break;
}

aO.left=Math.round((aLN-aO.width)/2);
aO.top=Math.round((aHx-aO.height)/2);

return aO;
};
}










function scrollIntoMidView(bI,gn,bLA,
bDw,buy)
{
if(!bI||!gn)
{
return false;
}


var aQs=gn.tagName.toUpperCase()=="BODY",
aU=gn.ownerDocument,
ta=aU.documentElement;
if(aQs&&ta.clientHeight)
{
gn=ta;
}

var Ab=calcPos(bI)[0]-calcPos(gn)[0]-(aQs?gn.scrollTop:0),
OO=Ab,
MK=bI.offsetHeight,
aif=gn.clientHeight,
axR=bDw||0;

if(bLA||OO<0
||OO+MK>aif)
{
var arq=0,
lQ;

if(aif>MK+axR)
{
if(buy)
{
arq=OO<0?0
:(aif-MK-axR);
}
else
{
arq=(aif-MK-axR)/2
}
}

lQ=gn.scrollTop=gn.scrollTop+Ab-arq;
gn==ta&&(aU.body.scrollTop=lQ);
}

return true;
}





function Gel(aM,bI)
{
return(bI||document).getElementById(aM);
}





function objectActive(bI)
{





}




















function inherit(alI,uX,alv,alc,bnM)
{
var aFz=callBack(alv,[uX.prototype]),
blW=aFz.$_constructor_,
Kc=function()
{
if(arguments[0]!="__inherit__")
{

var aGj=callBack.call(this,bnM,arguments)||{};
if(aGj.bReturn)
{
return aGj.vData;
}
else
{
if(!this.bmS)
{
this.constructor=arguments.callee;
this.bmS=true;
}
uX.apply(this,arguments);
callBack.call(this,blW,arguments);
}
}
};
extend(Kc.prototype=new uX("__inherit__"),aFz,{toString:function(){return"";}});
return extend(Kc,alc,
{
classname:alI,
superclass:uX
}
);
}







function inheritEx(alI,uX,alv,alc)
{
var Qc={},
Kc=inherit(alI,uX,alv,alc,
function()
{
var bk=typeof(arguments[0]),
bkv=bk=="string"||bk=="undefined";

return{
bReturn:bkv,
vData:Kc.$_call.apply(Kc,arguments)
};
}
);
return extend(
Kc,
{


$_call:function(aM,bpb,aL)
{
if(arguments.length==0)
{
return Qc;
}
else
{
var eB=Qc[aM];
return arguments.length>1&&eB?
callBack.call(eB,eB[bpb],aL):eB;
}
},

$_add:function(aM,aP)
{
return Qc[aM]=aP;
},

get:function(aM)
{
return Qc[aM];
},

$_del:function(aM)
{
delete Qc[aM];
}
}
);
}







function inheritSimple(aG,bbU)
{
var afY=function(azh)
{
var ao=this;
if(azh!=="__inherit__"&&typeof(ao.init_)=="function")
{
ao.init_.apply(ao,arguments);
}
};
if(!bbU)
{
bbU=aG;
aG=function(){};
}
afY.prototype=A.extend(new aG("__inherit__"),bbU(aG.prototype));
afY.prototype.constructor=afY;
return afY;
}


























function cacheByIframe(Mu,cH)
{
var bt="_cAcheBYifRAme_",
da=cH||{},
aI=da.win||getTop();



if(typeof cacheByIframe.cqY=="undefined")
{
if(gbIsIE)
{
var dJ=this,
jr=function(ax)
{
clearTimeout(dR);
cacheByIframe.cqY=!!ax;
cacheByIframe.call(dJ,Mu,cH);
dJ=null;
},
dR=setTimeout(jr,300);
createIframe(aI,"javascript:;",{onload:jr});
return;
}
cacheByIframe.cqY=true;
}

var aX=da.id||unikey("_"),
dW=[da.attrs],
vH=[da.header],
cX=[],
aww=cacheByIframe.cqY&&(da.virtual!==false);


for(var i=0,aK=Mu&&Mu.length||0;i<aK;i++)
{
for(var qN=Mu[i],j=2,aBO=qN.length;j<aBO;j++)
{
switch(qN[0])
{
case"img":
cX.push('<img src="',qN[1],qN[j],'"/>');
break;
case"js":
case"html":
if(gbIsWebKit)
{
cX.push('<img src="',qN[1],qN[j],'"/>');
break;
}
if(gbIsIE)
{
vH.push('<script src="',qN[1],qN[j],'" ><\/script>');
break;
}
case"css":
vH.push('<link rel="stylesheet" type="text/css" href="',qN[1],qN[j],'" />');
}
}
}



!aI[bt]&&(aI[bt]={});
aI[bt][aX+"_h"]=vH.join("");

aI[bt][aX+"_b"]=((da.body||"").toString().indexOf("<body")==-1?
'<body class="domain">'+cX.join("")+'</body>':
da.body+cX.join(""));

createIframe(aI,
(aww?
["javascript:(function(){document.open();document.domain='",document.domain,"';frameElement['_render_']=1;",
"try{document.write('<head><script>window.onerror=function(){return true};<\/script>'+",
"parent['",bt,"']['",aX,"_h']+'</head>'+parent['",bt,"']['",aX,"_b']);",
"parent['",bt,"']['",aX,"_h']=parent['",bt,"']['",aX,"_b']=null;}catch(e){alert(e.message);}",
"document.close();})()"
]:
[getRes("$base_path$zh_CN/htmledition/domain21801b7.html"),"#",encodeURIComponent(document.domain),
"&",bt+"&"+encodeURIComponent(aX)+"&"+(da.destroy!==false?"1":"")
]
).join(""),
extend({},da,
{
id:aX,
attrs:dW.join(""),
onload:function(ax)
{
var kd=this;
if(!aww||kd["_render_"])
{
callBack.call(kd,da.onload,[ax]);

(da.destroy!=false||kd.getAttribute("destroy")=="true")
&&aI.setTimeout(function(){removeSelf(kd);},100);
}
}
}
)
);
}








function clearCache()
{












arguments.length>0&&getTop().cacheByIframe(arguments,
{
virtual:false,
destroy:false,
onload:function()
{
if(!this.getAttribute("destroy"))
{
this.setAttribute("destroy","true");
this.contentWindow.location.reload(true);
}
}
}
);
}








function preLoad(aC,dv,nA,bii)
{
if(window!=getTop())
{
getTop().preLoad.apply(this,arguments);
}
else
{
var ao=arguments.callee,
atx=ao.bXw=(ao.bXw||[]);

if(aC&&nA)
{
for(var i=0,aK=nA.length;i<aK;i++)
{
atx.push([[aC,dv,nA[i]]]);
}
}

if(!ao.bhr&&atx.length>0)
{
ao.bhr=true;

function afj()
{
ao.bhr=false;
callBack(bii,[atx.shift()[0][2]]);
setTimeout(function(){ao("","","",bii);},100);
}

cacheByIframe(atx[0],{onload:afj});
}
}
}





function setDblClickNoSel(bI)
{
if(bI)
{
var aBL="__MoUSeDoWnnoSEL__";
function getAtts()
{
return(bI.getAttribute(aBL)||"").toString().split(",");
}
function setAtts(ix,aC)
{
bI.setAttribute(aBL,[ix,aC]);
}
if(getAtts().length==1)
{

setAtts(0,"up");
addEvents(bI,{
mousedown:function(ap)
{
var iz=now(),
Fm=parseInt(getAtts()[0]);
setAtts(iz,"down");

if(iz-Fm<500)
{
preventDefault(ap);
}
},

mouseup:function()
{
setAtts(getAtts()[0],"up");
},
selectstart:function(ap)
{
if(getAtts().pop()=="up")
{
preventDefault(ap);
}
}
});
}
}

return bI;
}













;(function()
{
var bAo=TE([
'<form method="$sMethod$" id="$sFormId$" name="$sFormId$" target="$sTarget$" action="$sAction$" enctype="multipart/form-data">',
'$@$for($oInputs$)$@$',
'<input name="$name$" type="hidden" value="$value$"/>',
'$@$endfor$@$',
'</form>'
]);

window.createForm=function(ar,YU)
{
var aun=ar.sFormId||unikey(),
fu=S(aun,ar.oWin),
ju=[];

if(fu)
{
removeSelf(fu);
}
YU=YU||{};
YU.sid=YU.sid||getSid();
E(YU,function(pz,py)
{
ju.push({name:py,value:pz});
}
);
ar.oInputs=ju;
insertHTML(ar.oWin.document.body,"beforeEnd",bAo.replace(
extend(
{
sFormId:aun,
sTarget:"_self",
sMethod:"POST"
},ar)
)
);
return S(aun,ar.oWin);
}
})();







































var 
gsMsgNoSubject="\u8BF7\u586B\u5199\u90AE\u4EF6\u4E3B\u9898",
gsMsgNoMail="\u672A\u9009\u4E2D\u4EFB\u4F55\u90AE\u4EF6",
gsMsgSend="\u90AE\u4EF6\u6B63\u5728\u53D1\u9001\u4E2D... ",
gsMsgSave="&nbsp;&nbsp;&nbsp;\u90AE\u4EF6\u6B63\u5728\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1...",
gsMsgSaveOk="\u90AE\u4EF6\u6210\u529F\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1",
gsMsgAutoSave="&nbsp;&nbsp;&nbsp;\u90AE\u4EF6\u6B63\u5728\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1...",
gsMsgAutoSaveOk="\u90AE\u4EF6\u81EA\u52A8\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1",
gsMsgSendErrorSaveOK="\u4FE1\u4EF6\u5DF2\u88AB\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1",
gsMsgSaveErr="\u90AE\u4EF6\u672A\u80FD\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1",
gsMsgNoSender="\u8BF7\u586B\u5199\u6536\u4EF6\u4EBA\u540E\u518D\u53D1\u9001",
gsMsgNoCardSender="\u8BF7\u586B\u5199\u6536\u4EF6\u4EBA\u540E\u518D\u53D1\u9001",
gsMsgNoCard="\u8BF7\u9009\u4E2D\u8D3A\u5361\u540E\u518D\u53D1\u9001",
gsMsgSettingOk="\u8BBE\u7F6E\u4FDD\u5B58\u6210\u529F",
gsMsgLinkErr="\u7F51\u7EDC\u5E94\u7B54\u5931\u8D25",
gsMsgCheatAlert="\u7CFB\u7EDF\u4F1A\u5C06\u6B64\u90AE\u4EF6\u79FB\u5165\u5230\u201C\u5783\u573E\u90AE\u4EF6\u201D\u4E2D\uFF0C\u5E76\u628A\u90AE\u4EF6\u5185\u5BB9\u63D0\u4EA4\u7ED9\u90AE\u7BB1\u7BA1\u7406\u5458\u3002\n\n\u60A8\u786E\u5B9A\u8981\u4E3E\u62A5\u6B64\u90AE\u4EF6\u5417\uFF1F",
gsMsgSendTimeErr="\u60A8\u8BBE\u7F6E\u7684\u53D1\u9001\u65F6\u95F4\u4E0D\u5B58\u5728",
gsMsgMoveMailSameFldErr="\u4E0D\u80FD\u79FB\u52A8\u5230\u76F8\u540C\u7684\u76EE\u5F55";








function doPageError(cT,bz,Fo)
{
var jr=arguments.callee.caller,
auw=jr&&jr.caller,
bIq=auw&&auw.caller,
aVt=(jr||"null").toString(),
aSK=(auw||"").toString(),
aTE=(bIq||"").toString(),
asc;

try
{

if(cT.indexOf(" Script ")!=-1)
{
return;
}


log("err:",cT,"-",bz,"-",Fo);

if(cT.indexOf("flashUploader")!=-1)
{
var bjq=qmFlash.getFlashVer();
for(var i in bjq)
{
cT+="|"+bjq[i];
}
}

if(!(bz&&bz.indexOf("/cgi-bin/mail_list?")!=-1&&Fo==2)&&location.getParams)
{
var cC=location.getParams(bz);
beo=(bz||"").split("?")[0].split("/"),
bhZ=encodeURIComponent(
aVt.replace(/[\r\n\t ]/ig,"")
.substr(0,50)
);

if(beo.length>0)
{
cC.cgi=beo.pop();
getTop().ossLog("delay","sample",[
"stat=js_run_err&msg=",
cT,
"&line=",
Fo,
"&url=",
T('$cgi$?t=$t$&s=$s$').replace(cC),
"&func=",
bhZ,(gbIsIE?"":"_NIE")
].join(""));
}
else
{
asc=bhZ;
}
}

getTop().debug([
"error:",
cT,
"<br><b>line</b>:",
Fo,
"<br><b>url</b>:",
bz,
"<br><b>function</b>:",
aVt.substr(0,100),
aSK?"<br><b>parent function</b>:"
+aSK.substr(0,100):"",
aTE?"<br><b>parent parent function</b>:"
+aTE.substr(0,100):""].join(""),"error");
}
catch(bj)
{
asc=bj.message;
}

asc&&log("err:doPageError ",asc,"-",bz,"-",Fo);







return location.host.indexOf("dev.")!=0;
}




var QMFileType={};

QMFileType.data={
doc:"doc",
docx:"doc",

xls:"exl",
xlsx:"exl",

ppt:"ppt",
pptx:"ppt",

pdf:"pdf",

txt:"txt",
log:"txt",
xml:"txt",
js:"txt",
css:"txt",
php:"txt",
asp:"txt",
aspx:"txt",
jsp:"txt",
vbs:"txt",
h:"txt",
cpp:"txt",

eml:"eml",

rar:"rar",
zip:"rar",
"7z":"rar",
arj:"rar",

wav:"mov",
mp3:"mov",
wma:"mov",
mid:"mov",
rmi:"mov",
ra:"mov",
ram:"mov",

mp1:"mov",
mp2:"mov",
mp4:"mov",
rm:"mov",
rmvb:"mov",
avi:"mov",
mov:"mov",
qt:"mov",
mpg:"mov",
mpeg:"mov",
mpeg4:"mov",
dat:"mov",
asf:"mov",
wmv:"mov",
"3gp":"mov",
ac3:"mov",
asf:"mov",
divx:"mov",
mkv:"mov",
ogg:"mov",
pmp:"mov",
ts:"mov",
vob:"mov",
xvid:"mov",

htm:"html",
html:"html",
mht:"html",

swf:"swf",
flv:"swf",

bmp:"bmp",
gif:"gif",
jpg:"jpg",
jpeg:"jpg",
jpe:"jpg",
psd:"psd",
pdd:"psd",
eps:"psd",

tif:"tu",
tiff:"tu",
ico:"tu",
png:"tu",
pic:"tu",
ai:"tu"
};






QMFileType.getFileType=function(PE)
{
return this.data[(trim(PE||"")).toLowerCase()]||"qita";
};






QMFileType.getFileTypeForFile=function(iu)
{
return this.getFileType((iu||"").split(".").pop());
};






var QMHistory={
kr:{




},
adM:{





}
};






QMHistory.getId=function(aM)
{
return aM;
};






QMHistory.getUrl=function(aM)
{
var cr=getTop().QMHistory.adM[QMHistory.getId(aM)];
return cr&&cr.aY;
};





QMHistory.getLastRecordId=function()
{
return getTop().QMHistory.kr.cbz;
};






QMHistory.tryBackTo=function(aM)
{
try
{
var bJ=getTop().QMHistory.kr,
asP=QMHistory.getId(aM),
aar=getTop().QMHistory.adM[asP],
bex=aar&&aar.aY,
bid=aar
&&aar.bPx>=getTop().history.length,
bic=aar&&bJ.bSO==bex,
bib=aar&&!bJ.bTc;

function bUZ()
{
var aY=bex.split("#")[0];

if(getTop().location.getParams
&&getTop().location.getParams(aY)["folderid"]==4)
{
return goUrlMainFrm(aY);
}


if(gbIsIE&&gnIEVer==6)
{
return getTop().history.go(aY);
}
getTop().history.back();
};

if((gbIsIE&&(bid||bic)&&bib)
||(!gbIsWebKit&&bid&&bic&&bib))
{

bUZ();
return true;
}
}
catch(bj)
{

}

return false;
};





QMHistory.recordCurrentUrl=function(ax)
{
var aY=ax.location.href,
OG=getTop().QMHistory.adM,
bJ=getTop().QMHistory.kr;

var bPT=bJ.bSO=bJ.bUn,
Sc=bJ.bUn=aY;

var aiF,PV;


for(var i in OG)
{
if(OG[i].aY==bPT)
{
aiF=i;
}
if(OG[i].aY==Sc)
{
PV=i;
}
}


if(aiF&&PV)
{
delete OG[aiF];
}


if(aY.indexOf("/mail_list")!=-1)
{
this.aIN("mail_list",aY);
}

if(aY.indexOf("t=readmail")!=-1)
{
this.aIN("readmail",aY);
}

if(aY.indexOf("/today")!=-1)
{
this.aIN("today",aY);
}
};





QMHistory.recordActionFrameChange=function(dO)
{
getTop().QMHistory.kr.bTc=dO!="clear";
};






QMHistory.aIN=function(aM,bz)
{
var aq=getTop(),
asP=QMHistory.getId(aM),
OG=aq.QMHistory.adM,
cr=OG[asP];

if(!cr)
{
cr=OG[asP]=new aq.Object;
}

cr.bPx=history.length+1;
cr.aY=bz;

aq.QMHistory.kr.cbz=aM;
};












function QMCache(ar)
{
var Fm=this.bXQ=ar.timeStamp||1;
var Ha=this.afk=ar.appName;

if(!Fm||!Ha)
{
throw{
message:"QMCache construct : config error!"
};
}

var aso=getTop().QMCache.Yw;
if(!aso)
{
aso=getTop().QMCache.Yw={};
}

var AG=aso[Ha];
if(!AG)
{
AG=aso[Ha]={
aKJ:"0",
tQ:{}
};
}

if(this.bgX(AG.aKJ,Fm)==1)
{
AG.aKJ=Fm;
}
};





QMCache.prototype.isHistoryTimeStamp=function()
{
return this.bgX(
getTop().QMCache.Yw[this.afk].aKJ,
this.bXQ
)!=0;
};






QMCache.prototype.setData=function(bG,cf)
{
getTop().QMCache.Yw[this.afk][bG]=cf;
};

QMCache.prototype.getAll=function(bG)
{
return getTop().QMCache.Yw[this.afk];
}






QMCache.prototype.getData=function(bG)
{
return getTop().QMCache.Yw[this.afk][bG];
};





QMCache.prototype.delData=function(bG)
{
delete getTop().QMCache.Yw[this.afk][bG];
};







QMCache.prototype.bgX=function(bjz,bjA)
{
if(bjz==bjA)
{
return 0;
}
return bjz>bjA?-1:1;
};










var QMMailCache=
{
va:now()
};







QMMailCache.newCache=function(qc,awQ)
{
var Jv=false,
aq=getTop();

if(!aq.gMailListStamp||aq.gMailListStamp<awQ)
{
aq.gMailListStamp=awQ;
if(!aq.goMailListMap)
{
aq.goMailListMap=new aq.Object;
}
Jv=true;
}
else if(aq.gnExpireTimeStamp>=awQ)
{







reloadFrm(qc);
}

return qc["isNewQMMailCache"+this.va]=Jv;
};




QMMailCache.setExpire=function()
{
getTop().gnExpireTimeStamp=getTop().gMailListStamp;
};













QMMailCache.addData=function(bc,bD)
{
if(!bc||!getTop().goMailListMap)
{
return;
}

if(!this.hasData(bc))
{
getTop().goMailListMap[bc]={
oTagIds:{},
bUnread:null,
star:null,
reply:null
};
}

if(!bD)
{
return;
}

var fM=getTop().goMailListMap[bc];
for(var i in bD)
{
switch(i)
{
case"removeTagId":
fM.oTagIds[bD[i]]=0;
break;
case"addTagId":
fM.oTagIds[bD[i]]=1;
break;
default:
if(typeof bD[i]!="undefined")
{
fM[i]=bD[i];
}
break;
}
}
};





QMMailCache.delData=function(bc)
{
if(getTop().goMailListMap)
{
delete getTop().goMailListMap[bc];
}
};






QMMailCache.hasData=function(bc)
{
return getTop().goMailListMap&&getTop().goMailListMap[bc]!=null;
};






QMMailCache.getData=function(bc)
{
return getTop().goMailListMap&&getTop().goMailListMap[bc];
};







QMMailCache.addVar=function(agd,cM)
{
return getMainWin()[agd]=this.getVar(agd,0)+cM;
};







QMMailCache.getVar=function(agd,bDm)
{
return getMainWin()[agd]||bDm;
};






QMMailCache.isRefresh=function(qc)
{
return qc["isNewQMMailCache"+this.va];
};










function rdVer(ZK,WK,aKs)
{

var aHI,uq,Mt,aHv,
cr=new QMCache({appName:"readmail"});

if(WK==-1)
{
return cr.delData(ZK);
}

aHI=cr.getData("on");
if(ZK=="on")
{
return WK==0?(aHI||0):(cr.setData("on",WK));
}

if(!aHI||!ZK)
{
return 0;
}

aHv=ZK=="BaseVer";

Mt=cr.getData("BaseVer");
if(!Mt||(aHv&&WK==1))
{

Mt=Mt||(rdVer("on",0)+(+Math.random().toFixed(2)));
Mt+=10;
cr.setData("BaseVer",Mt);
}

if(aHv)
{
return Mt;
}

uq=(cr.getData(ZK)||0);
var bfS=(!uq||WK==1);

if(bfS||aKs)
{
if(bfS)
{
uq+=10000;
}
if(aKs)
{
uq=Math.floor(uq/10000)*10000+parseInt(aKs,10)%10000;
}
cr.setData(ZK,uq);
}
return uq;
}

rdVer.batch=function(aC)
{
var cr=new QMCache({appName:"readmail"}),
ib=new RegExp("^"+aC),
fM=cr.getAll();

E(fM,function(OQ,bc)
{
if(ib.test(bc))
{
rdVer(bc,1);
}
}
);
}






rdVer.check=function(ax,bc,arU)
{
if(ax)
{
var jZ=ax.location,
bc=bc||jZ.getParams()["mailid"],
arU=arU||jZ.getParams()["ver"]||0,
bew=rdVer(bc,0);

if(bew>arU)
{
goUrl(ax,cookQueryString(jZ.href,{ver:bew}),true);
return true;
}
else
{
return false;
}
}
}






rdVer.log=function(bc,Xs)
{
var aHz=new QMCache({appName:"preload"}),
wu=new Date().getTime(),
gL=aHz.getData(bc),
azv=gL&&(wu-gL)<rdVer.maxage(bc)*1000;

switch(Xs)
{
case"pre":
if(!azv)
{
aHz.setData(bc,wu);
ossLog("delay","all","stat=rdcache&type=281&locval=,rdcache,preload,1");
}
break;
case"hit":
if(azv)
{
ossLog("delay","all","stat=rdcache&type=291&locval=,rdcache,hit,1");
}
if(gL)
{
aHz.delData(bc);
}
break;
}
return azv;
}

rdVer.isPre=function(VP)
{

return!(VP>2&&VP<7||VP==9||VP==11);
}


rdVer.preRD=function(afA,abt)
{
var aDd=function()
{
preLoad("html","/cgi-bin/readmail?",afA,function(ji)
{
rdVer.log(location.getParams(ji)["mailid"],"pre");
}
);
}
if(afA&&afA.length>0)
{
abt=abt||40;



if(afA.length>0)
{
if(abt)
{
setTimeout(aDd,abt);
}
else
{
aDd();
}
}
}
}

rdVer.maxage=function(bc)
{
if(!bc)
{
return 0;
}
return(bc[0]=="@"||bc[0]=="C"?10:60)*60;
}










rdVer.url=function(bc,ke,bYo,eY,bPX,aio,
aJB,aLK,beq,ewn)
{
var bHg='/cgi-bin/$cgi$?folderid=$folderid$&folderkey=$folderkey$$s$&t=$t$&mailid=$mailid$$cache$&sid=$sid$',
aMC,
Km,HJ,aY,zO="readmail";

if(aJB)
{
Km="readmail&s=draft";
}
else if(eY===0)
{
Km=aLK==100?"compose_card&s=draft"
:"compose&s=draft";
}

else if(ke==14)
{
Km="compose_group&groupdraft=true&s=draft";
}
else if(ke=="9")
{
bHg=[location.protocol,location.protocol=="https:"?"//ws.mail.qq.com":"//msgopt.mail.qq.com",bHg].join("");
Km="sms_list_v2";
zO="readtemplate";
}
else if(ke=="11"||/^(LP|ZP)/.test(bc))
{
zO="bottle_panel";
Km="bottle";
}
else
{
switch(bc.charAt(0))
{
case'C':
if(eY==3)
{
Km="readmail_ad_conversation";
}
else
{
Km="readmail_conversation";
}
break;
case'@':
Km="readmail_group";
break;
default:
Km=eY==3?"readmail_ad":"readmail";
break;
}
aMC=true;
}

if(bPX)
{
HJ=["&newwin=true","&compose_new=compose"][eY?0:1];
}
else
{
HJ=["","&s=from_unread_list","&s=from_star_list"][
aio!=1&&aio!=2?0:aio];
}

var uq=aMC?rdVer(bc,0,bYo):0;

if(!uq&&beq)
{
return"";
}

aY=T(bHg).replace(
{
cgi:zO,
mailid:bc,
folderid:ke,
folderkey:ewn,
t:Km,
s:HJ,
sid:getSid(),
cache:uq?T("&mode=pre&maxage=$maxage$&base=$base$&ver=$ver$").replace(
{
maxage:rdVer.maxage(bc),
base:rdVer("BaseVer",0),
ver:uq
}
):""
}
);

return beq?aY.split("?")[1]:aY;
}









function setGlobalVarValue(bG,ep,bTz)
{
var aq=getTop();

if(!aq.goDataBase)
{
aq.goDataBase=new aq.Object;
}

if(bG&&!bTz)
{
aq.goDataBase[bG]=ep;
}

return ep;
}






function getGlobalVarValue(bG)
{
return getTop().goDataBase&&getTop().goDataBase[bG];
}






function hideWindowsElement(iy,ax)
{
ax=ax||getMainWin();
if(!gbIsIE||gnIEVer>6||(ax.gbIsHasHideElements||false)!=(iy||false))
{
return;
}

getTop().setGlobalVarValue("WINDOWS_ELEMENT_NOT_DISPLAY",iy?"":"true");

ax.gbIsHasHideElements=!iy;

var cX=ax.document.body;

E(ax.QMReadMail?["select","object","embed"]:["select"],
function(bSf)
{
E(GelTags(bSf,cX),
function(bI)
{
if(iy)
{
bI.style.visibility=
bI.getAttribute("savevisibility");
}
else
{
bI.setAttribute("savevisibility",
getStyle(bI,"visibility"));
bI.style.visibility="hidden";
}
}
);
}
);
}






function controlWindowsElement()
{
var ccO=getTop().getGlobalVarValue("WINDOWS_ELEMENT_NOT_DISPLAY");
if(ccO=="true")
{
hideWindowsElement(false);
}
}





function setKeepAlive(ax)
{
if(getTop().gKeepAliveNum==null)
{
getTop().gKeepAliveNum=0;
}

if(ax==null||ax.gbIsSetKeepAlive==true)
{
return;
}

ax.gbIsSetKeepAlive=true;
getTop().gKeepAliveNum++;

if(getTop().gKeepAliveTimer==null)
{

getTop().gKeepAliveTimer=getTop().setInterval(
function()
{
getTop().runUrlWithSid("/cgi-bin/readtemplate?t=keep_alive");
},
15*60*1000
);
}
addEvent(
ax,
"unload",
function()
{
ax.gbIsSetKeepAlive=false;
getTop().gKeepAliveNum--;
if(getTop().gKeepAliveNum==0)
{
getTop().clearInterval(getTop().gKeepAliveTimer);
getTop().gKeepAliveTimer=null;
}
}
);
}







function encodeNick(vV)
{
return vV&&vV.replace(/\\/g,"\\\\").replace(/\"/ig,"\\\"").replace(/\'/ig,"\\\'")||"";
}






function encodeNickHTML(vV)
{
return vV&&vV.replace(/\&\#92;/ig,"&#92;&#92;").replace(/\&quot;/ig,"&#92;&quot;").replace(/\&\#39;/ig,"&#92;&#39")||"";
}






function decodeNick(vV)
{
return vV&&vV.replace(/\\\"/ig,"\"").replace(/\\\\/ig,"\\")||"";
}






function rollback(eY)
{
var aFa=getGlobalVarValue('DEF_ROLLBACK_ACTION');


if(aFa&&aFa.rbkey)
{
confirmBox({
title:"\u64A4\u9500\u786E\u8BA4",
mode:"prompt",

height:135,
msg:T([
'\u64A4\u9500\u6700\u8FD1\u4E00\u6B21$msg$\u5417\uFF1F',
]).replace(aFa),
onreturn:function(bh)
{
if(bh)
{
QMAjax.send("/cgi-bin/mail_mgr",
{
method:"POST",
content:["sid=",getSid(),"&mailaction=mail_revert&t=mail_mgr2&timekey=",aFa.rbkey,"&logtype=",eY].join(''),
onload:function(bh,bO)
{
if(bh&&bO.indexOf("mail_revert successful")>=0)
{
var DT=getMainWin().location.getParams()["t"];

if(DT=="mail_list"||DT=="mail_list_group"||(!DT&&getMainWin().location.href.indexOf("/cgi-bin/mail_list?")>-1))
{
reloadFrmLeftMain(true,true);
}
else if(DT=="folderlist_setting")
{
goUrlMainFrm(getMainWin().location.href.replace(/\#.+/,"").replace(/&s=.+?(&|$)/,"&")+"&s="+getMainWin().getType());
reloadFrmLeftMain(true,false);
}
else
{
reloadFrmLeftMain(true,false);
}

setGlobalVarValue('DEF_ROLLBACK_ACTION',null);
showInfo("\u6210\u529F\u64A4\u9500\u6700\u8FD1\u4E00\u6B21"+aFa.msg);
}
else
{
var bj=globalEval(bO);
showInfo(bj&&bj.errmsg||("\u64A4\u9500\u6700\u8FD1\u4E00\u6B21"+aFa.msg+"\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"));
}
}
});
}
}
});
}
}


var QMPageInit={
bJC:function(ax)
{
var aq=getTop();
if(ax==aq)
{
var jr=new(aq.Function)(
"var _oLogs = arguments.callee.logs;_oLogs.length > 500 && _oLogs.shift();"+
"_oLogs.push([+new Date, [].slice.apply(arguments).join('')].join(' '));");
jr.logs=new(aq.Array);
return jr;
}
else
{
return aq.log||(aq.log=this.bJC(aq));
}
},

bwl:function(bZr)
{
return function()
{
try
{
var aJf=arguments.length,
aHB=arguments[aJf-1],
biV=aHB>100000;
if(typeof(aHB)=="number"
&&(biV&&aHB!=getTop().g_uin))
{
return;
}
}
catch(e)
{

return;
}

if(getTop().Console)
{
if(aJf==0||(aJf==1&&biV))
{
if(location.host=="dev.mail.qq.com")
{
debugger;
}
}
else
{
try
{
var bhD=getTop().Console[bZr];
bhD.add.apply(bhD,arguments);

}
catch(bj)
{
}
}
}
}
},

bYC:function(ax)
{
return function(aR,bUU,dO,bOY,gS)
{
if(getTop().QMTimeTracer&&(!gS||gS==getTop().g_uin))
{
getTop().QMTimeTracer.getTracer().trace(aR,bUU,
ax,dO,bOY
);
}
}
},

cbi:function(ax)
{
var sN=ax.location;
sN.bhq=false;
sN.params={};
sN.getParams=function(bz)
{
if(!bz&&this.bhq)
{
return this.params;
}

var cC={},
aWL=bz
?bz.substr(bz.indexOf("?")+1).split("#")[0]
:this.search.substr(1);

if(aWL)
{
E(aWL.split("&"),function(po)
{
var bL=po.split("=");
cC[bL.shift()]=unescape(bL.join("="));
}
);
}

if(!bz)
{
this.params=cC;
this.bhq=true;
}

return cC;
};


var fi=sN.href,
aq=getTop();

if(ax==aq
&&getSid()
&&fi.indexOf("/cgi-bin/")>-1
&&fi.indexOf("/frame_html?")==-1
&&fi.indexOf("/log")==-1
&&(fi.indexOf("/ftnExs_")==-1||fi.indexOf("/ftnExs_files")>-1)
&&!ax.gbIsNoCheck
&&sN.getParams()["nocheckframe"]!="true")
{
if(fi.indexOf("/cgi-bin/bizmail")==-1)
{

goNewWin(sN,true,!ax.gbSupportNW);
}
else
{
goNewWin(sN,true,false,{frametmpl:"dm_frame",frametmplparam:"&dmtype=bizmail"});
}
}

else if(ax!=aq&&aq.bnewwin&&ax==getMainWin())
{
if(!ax.gbSupportNW)
{
goNewWin(sN,true,true);
}
else if(sN.getParams()["newwin"]!="true")
{
ax.location.replace(fi+"&newwin=true");
}
}
},

bYH:function(ap,bWw)
{
var eJ=ap.srcElement||ap.target,
arZ=ap.ctrlKey,
dLx=ap.altKey,
yO=ap.shiftKey,
eba=ap.metaKey,
ey=ap.keyCode,
aaY=eJ.type=="text"
||eJ.tagName=="TEXTAREA",
bUI=bWw
&&(eJ.tagName=="INPUT"&&eJ.type!="button"),
ccx=eJ.tagName=="BUTTON"||eJ.type=="button";

switch(ey)
{

case 8:

if(!aaY&&goBackHistory())
{
preventDefault(ap);
}
break;

case 13:


if(!ccx&&((!aaY&&QMReadedItem.read(eJ))||bUI))
{
preventDefault(ap);
}
break;

case 37:

case 39:

if(arZ)
{
goPrevOrNextMail(ey==39);
preventDefault(ap);
}
break;

case 38:

case 40:

case 188:

case 190:

var akI=ey==38||ey==188;
if(!aaY&&getMainWin()&&getMainWin().QMReadedAddr)
{
if(getMainWin().QMReadedAddr.move(!akI))
{
preventDefault(ap);
}
}
else
{
if(!aaY)
{
if(QMReadedItem.move(!akI))
{
preventDefault(ap);
}
}
}
break;

case 46:


if(!aaY)
{
var bdM=S(
yO?"quick_completelydel":"quick_del",
getMainWin()
),
bdL=yO?S("quick_del",getMainWin()):null,
bfE=S("del",getMainWin());
if(isShow(bdM)||isShow(bdL)||isShow(bfE))
{
preventDefault(ap);
fireMouseEvent((bdM||bdL||bfE),"click");
}
}
break;

case 88:

if(!aaY&&QMReadedItem.check(yO))
{
preventDefault(ap);
}
break;
case 90:
var xz=eJ.tagName.toUpperCase();
debug([arZ,xz=="INPUT",xz=="TEXTAREA"]);
if(arZ&&!(xz=="INPUT"&&eJ.type.toLowerCase()!="button"||xz=="TEXTAREA"))
{
debug("rollback");
rollback(1);
}
break;

case 65:
if(!aaY&&(eba||arZ))
{
preventDefault(ap);
var dnB=S("frm",getMainWin());
if(dnB)
{
var dbD=GelTags("table",dnB)[0];
if(dbD)
{
var pX=GelTags("input",dbD)[0];

if(pX)
{

!pX.addEventListener&&pX.click&&pX.click()
||fireMouseEvent(pX,"click");
}

}
}
}
break;
}
},

bZY:function(ax)
{
ax.Log=ax.log=this.bJC("log");
ax.Debug=ax.debug=this.bwl("debug");

ax.Trace=ax.trace=this.bYC(ax);
ax.onerror=doPageError;
},

bWq:function(ax)
{
if(ax!=getTop()&&ax==getMainWin())
{
getTop().Scale.setBodyClass(ax);


getTop().QMHistory.recordCurrentUrl(ax);
getTop().QMHistory.recordActionFrameChange("clear");


var ao=this,fi=ax.location.href,
aNe=fi.indexOf("t=sms_list_v2")>0,
bVV=fi.indexOf("t=bottle")>0;

addEvents(ax,
{load:function()
{
initAD(ax)
},
unload:function()
{

showProcess(0);
if(isshowMsg()&&getTop().gMsgDispTime
&&now()-getTop().gMsgDispTime>2000)
{
hiddenMsg();
}

aNe&&startWebpush(2);

}
});

aNe&&closeWebpush(2);
bVV&&closeWebpush(4);
getTop().QMWebpushTip&&getTop().QMWebpushTip.hideAll(3000);

ax.setTimeout(function()
{



















if(!(getTop().QQPlusMail&&getTop().QQPlusMail.getPageTitle()))
{
ax.document.title&&(getTop().document.title=ax.document.title);
}

},
200
);
}
},

bQx:function(ax)
{

if(ax==getTop()&&ax.location.href.indexOf("/frame_html")!=-1)
{



















addEvents(ax,{
load:function(e)
{
var cX=getTop().document.body;

function bjW(ap)
{
var eJ=ap.srcElement||ap.target;

for(var IH=0;eJ&&IH<3;
eJ=eJ.parentNode,IH++)
{
if(eJ.tagName=="A")
{
break;
}
}

return eJ||{};
};

function bZw(ap)
{
if((ap.target||ap.srcElement)==cX)
{
preventDefault(ap);
}
}

function bhc(ap)
{
var eJ=bjW(ap);
if(eJ.tagName=="A")
{
if(eJ.getAttribute("initlized")!="true")
{
eJ.setAttribute("initlized","true");

var bdY=eJ.onclick;
eJ.onclick=function(bUk)
{
var cF=bUk||getTop().event,
dR=parseInt(eJ
.getAttribute("md"));
if(!isNaN(dR)&&dR>0)
{
getTop().clearTimeout(dR);
eJ.setAttribute("md","0");

var yO=cF.shiftKey,
arZ=cF.ctrlKey,
cor=cF.metaKey,
buT=yO||arZ||cor,
djP=eJ.getAttribute("nocheck"),
fi=trim(eJ.href),
dzy=!(fi==""||fi.indexOf("javascript:")==0),
brL=trim(eJ.href)
.indexOf("http")==0;

function bgJ()
{
if(bdY)
{
bdY.call(eJ);
preventDefault(cF);
}

if(brL)
{

if(buT&&dzy)
{
open(eJ.href);
preventDefault(cF);
}
else
{
switch(eJ.target)
{
case"mainFrame":
var aY=eJ.href;
goUrlMainFrm(
aY+(aY.indexOf("?")!=-1?"#stattime="+now():""),
false
);
preventDefault(cF);
break;
case"_parent":
case"_self":
try
{
ax.location.href=eJ.href;
}
catch(FJ)
{
}
preventDefault(cF);
break;
default:
break;
}
}
}
};















if(djP=="false"
||(!buT&&djP!="true"&&(dzy&&eJ.target!="_blank")))
{
preventDefault(cF);
QMPageInit
.aVS(bgJ);
}
else
{
bgJ();
}
}
};
}

eJ.setAttribute(
"md",
getTop().setTimeout(
function()
{
eJ.setAttribute("md","0");
},
1000
)
);
}

}

function aJu(ap)
{
var eJ=bjW(ap);
if(eJ.tagName=="A"
&&eJ.getAttribute("initlized")!="true")
{
preventDefault(ap);
}
}

addEvents(cX,
{
mousewheel:bZw,
mousedown:bhc,
keydown:bhc,
click:aJu
}
);
}


});
}
},

caq:function(ax,ap)
{
var DT,
bhM=["u","1","2","3","4"],
aT=getEventTarget(ap),
bft=function(aw)
{
if(aw&&aw.getAttribute)
{
var rZ=aw.getAttribute("t");
for(var i in bhM)
{
if(bhM[i]==rZ)
{
return rZ;
}
}
}
};

DT=bft(aT);

while(aT&&aT!=ax.document.body&&DT)
{
if(DT=="u")
{
aT=aT.parentNode;
DT=bft(aT)||DT;
}
else
{
return aT;
}
}
return null;
},

bey:function(aC,ax,ap)
{
var aT=this.caq(ax,ap),
bXI;
if(!aT&&aC=="over"&&(bXI=ax["__simpleTipDivShared"]))
{
bXI&&addClass(bXI,"smt_hide");
bXI=null;
}
if(aT)
{
var DT=aT.getAttribute("t");
switch(DT)
{
case"1":
case"2":
case"3":
waitFor(
function()
{
return getTop().QMProfileTips;
},
function(pk)
{
if(pk)
{
getTop().QMProfileTips.doMouseEvent(aC,ax,aT);
}
}
);
break;
case"4":
var aKU="simpletip",
bKK="stitle",
bAB="smt_hide";
if(aT.title)
{
aT.setAttribute(bKK,aT.title);
aT.title="";
}
if(aC=="over")
{
var jm=aT.getAttribute(bKK),
AX=S(aKU,ax);
if(!AX)
{
insertHTML(ax.document.body,"afterBegin",'<div id="'+aKU+'" class="smt_container smt_up smt_hide"><span class="smt_inner"></span></div>');
AX=S(aKU,ax);
}
if(AX)
{
AX.firstChild.innerHTML!=jm&&(AX.firstChild.innerHTML=jm);
rmClass(AX,bAB);

var aeg=calcPos(aT),
bJU=(aeg[1]+aeg[3])/2;
aeg[0]-=3;
aeg[2]+=3;

var	cN=parseInt(AX.offsetHeight),
cS=parseInt(AX.offsetWidth),
cs=calcAdjPos([aeg[0],bJU,aeg[2],bJU],cS,cN,ax,2),
jh=AX.className,
bRc=cs[2]==aeg[0]?"smt_down":"smt_up";


AX.className="smt_container "+bRc+" smt_id_"+aT.id;

AX.style.top=cs[0]+"px";
AX.style.left=(cs[3]-cS/2)+"px";
ax["__simpleTipDivShared"]=AX;
}
}
else if(aC=="out")
{
var AX=S(aKU,ax);
AX&&addClass(AX,bAB);
ax["__simpleTipDivShared"]=null;
}
break;
























}
}
},

cBv:function(ax)
{
ax.call=function()
{
var bv=arguments,bDM=[],i,l,
dW=bv[0].split("."),
ao=jr=ax;

for(i=1,l=bv.length;i<l;i++)
{
bDM.push(bv[i]);
}

for(i=0,l=dW.length;i<l&&jr;i++)
{
ao=jr;
jr=jr[dW[i]];
}

if(typeof jr=="function")
{
return jr.apply(ao,bDM);
}
}
},



cbf:function(ax)
{
var ao=this;
ax.setTimeout(
function()
{
var bRF=(ax.location.getParams
&&ax.location.getParams()["t"]||"")
.indexOf("compose")==0;

addEvents(ax.document,
{
mousedown:hideMenuEvent,
touchend:getTop().iPadCloseMenu||function(){},
keydown:function(ap)
{

ao.bYH(ap,bRF);
},
click:function(ap)
{


getTop().QMWebpushTip&&getTop().QMWebpushTip.hideAll(3000);
},
mouseover:function(ap)
{
ao.bey("over",ax,ap);
},
mouseout:function(ap)
{
ao.bey("out",ax,ap);
}
}
);
},100
);
},

SW:function(ax)
{
ax=ax||window;

if(ax.gIsInitPageEventProcess)
{
return;
}

ax.gIsInitPageEventProcess=true;

var lP=0;
try
{
lP=1;
this.bZY(ax);

lP=2;
this.cbi(ax);

lP=3;
this.bWq(ax);

lP=4;
this.bQx(ax);

lP=5;
this.cbf(ax);

lP=6;
this.cBv(ax);

getTop().gbIsMac&&ax.document.documentElement&&(ax.document.documentElement.className+=" MacOS");
}
catch(bj)
{
doPageError(bj.message,ax.location.href,
"initPageEvent_processid:"+lP
);
}

try
{

ax.document.execCommand("BackgroundImageCache",false,true);
}
catch(bj)
{
}
},

aVS:function(acj)
{
try
{
if(getMainWin().exitConfirm)
{
return getMainWin().exitConfirm(acj);
}
}
catch(bj)
{
debug(bj.message);
}


acj();
}
}





function initPageEvent(ax)
{
QMPageInit.SW(ax);
}

(function()
{
initPageEvent(window);
})();






function getTopWin()
{
return getTop();
}





function getMainWin()
{
return F("mainFrame",getTop())||getTop();
}





function getActionWin()
{
return F("actionFrame",getTopWin());
}





function getLeftWin()
{
return getTop();
}
var GetLeftWin=getLeftWin;





function getLeftDateWin()
{
return F("leftFrame",getTop());
}






function reloadFrm(ax)
{
if(ax&&ax!=getTop())
{
try
{
if(ax.location.search)
{


var arz=ax.location.href.split("#")[0].split("?"),
asq="r="+now();
arz[1]=!arz[1]?asq:
(("&"+arz[1]+"&").replace(/&r=.*?&/,"&")+asq).slice(1);
ax.location.replace(arz.join("?"));
return true;
}
}
catch(bj)
{
}
}
return false;
}




function reloadLeftWin()
{
var Fp;
if(!reloadFrm(getLeftDateWin())&&(Fp=S("leftFrame",getTop())))
{
Fp.src=T('/cgi-bin/folderlist?sid=$sid$&r=$rand$').replace(
{
sid:getSid(),
rand:Math.random()
}
);
}
}








function reloadAllFrm(dMy,dOs,asE,arM)
{
function WU(bWf)
{
var bed=arguments.callee;
getTop().setTimeout(bWf,bed.mM);
bed.mM+=200;
}
WU.mM=0;

if(arM==null||arM)
{
WU(
function()
{
reloadFrm(getMainWin());
}
);
}

if(asE==null||asE)
{
WU(
function()
{
reloadFrm(reloadLeftWin());
}
);
}
}






function reloadFrmLeftMain(asE,arM)
{
reloadAllFrm(false,false,asE,arM);
}













function goUrlTopWin(bz,bXE)
{

goUrl(getTop(),bz,!bXE);
}







function goUrlMainFrm(bz,bXK,bdA)
{
if(bXK!=false)
{
reloadLeftWin();
setTimeout(
function()
{
goUrl(S("mainFrame",getTop())||getTop(),bz,!bdA);
},
300
);
}
else
{
goUrl(S("mainFrame",getTop())||getTop(),bz,!bdA);
}
}

function bMT(ara)
{
return ara&&ara.substr&&("?"+(["&",ara.substr(1),"&"].join("")
.replace(/&sid=.*?&/ig,"&")
.replace(/&loc=.*?&/ig,"&")
.replace(/&newwin=true/ig,"&")
.slice(1,-1)));
}










function goNewWin(ZL,cdh,bPb,asn)
{
var anc="",
LY="",
oA="";

if(typeof(ZL)=="object")
{
anc=ZL.pathname;
LY=ZL.search;
}
else
{
var Et=ZL.indexOf("?");
anc=ZL.substring(0,Et);
LY=ZL.substr(Et);
}

if(asn)
{
oA=asn.frametmpl;
}
else
{
oA=bPb?"frame_html":"newwin_frame";
}

var bjn='';
if(anc.indexOf('reader_')>-1)
{
bjn=getTop().location.protocol+"//mail.qq.com";
}

var aY=T(bjn+'/cgi-bin/frame_html?t=$t$&sid=$sid$&url=$url$').replace(
{
t:oA,
sid:getSid(),
url:encodeURI(anc+bMT(LY))
}
);

if(asn)
{
aY+=asn.frametmplparam;
}

if(cdh)
{
goUrlTopWin(aY,true);
}
else
{

window.open(aY);
}
}






function isMaximizeMainFrame()
{
return getTop().maximizeMainFrame.bSs;
}






function maximizeMainFrame(ato)
{
var aMH=S("mainFrame",getTop()),
atl=S("leftPanel",getTop()),
asY=S("imgLine",getTop());

if(!aMH||!asY||!atl
||ato!=2&&(ato==0)==!isMaximizeMainFrame())
{
return false;
}

var agq=getTop().maximizeMainFrame,
Nc=agq.bSs=ato==2
?!isMaximizeMainFrame():(ato?true:false);

if(Nc)
{
agq.bVB=atl.style.width;
agq.bYD=asY.parentNode.style.cssText;
}

aMH.parentNode.style.marginLeft=
Nc?"5px":agq.bVB;
atl.parentNode.style.cssText=
Nc?"border-left:none;":"";
asY.parentNode.style.cssText=
(Nc?"border-left:none;margin-left:0;padding:0;":"")+agq.bYD;

show(atl,!Nc);
show(asY,!Nc);
show(S("qqplus_panel",getTop()),!Nc);
show(S("folder",getTop()),!Nc);
}







function filteSignatureTag(bR,dO)
{
var gf=typeof bR=="string"?bR:"";

if(dO=="2LOWCASE")
{
return gf.replace(/<sign(.*?)\/>/ig,"<sign$1>")
.replace(/<qzone(.*?)\/>/ig,"<qzone$1>")
.replace(/<taotao(.*?)\/>/ig,"<taotao$1>")
.replace(/<\/sign>/ig,"</sign>")
.replace(/<\/qzone>/ig,"</qzone>")
.replace(/<\/taotao>/ig,"</taotao>")
.replace(/<(\/?)includetail>/ig,"<$1includetail>");
}
if(dO=="FILTE<:")
{
return gf.replace(/<[:\/]?sign.*?>/ig,"")
.replace(/<[:\/]?qzone.*?>/ig,"")
.replace(/<[:\/]?taotao.*?>/ig,"")
.replace(/<[:\/]?(\/:)?includetail.*?>/ig,"");
}
else
{
return gf.replace(/<[:\/]?sign.*?>/ig,"")
.replace(/<[:\/]?qzone.*?>/ig,"")
.replace(/<[:\/]?taotao.*?>/ig,"")
.replace(/<[:\/]?(\/:)?includetail.*?>/ig,"");
}
}





function getSignatureHeader()
{
return T([
'<div style="color:#909090;font-family:Arial Narrow;font-size:12px">',
'------------------',
'</div>'
]);
}





window.g_sBaseImageUrl=getTop().getPath("stationery");
if(!getTop().goUserInfo)
{
getTop().goUserInfo=
{
ej:'init',
aZS:{},
aE:{},
euK:function()
{
for(var obj in getTop().goUserInfo.aZS)
{
for(var i=0,l=getTop().goUserInfo.aZS[obj].length;i<l;i++)
{
try{
getTop().goUserInfo.aZS[obj][i](getTop().goUserInfo.get(obj));
}catch(e){}
}
}
getTop().goUserInfo.aZS={};
},
wait:function(Hb)
{
waitFor(function()
{
return getTop().goUserInfo.ej=='ready';
},
function()
{
Hb();
});
},
get:function(bt)
{
if(getTop().goUserInfo.ej=='init')
{
getTop().goUserInfo.reset();
return'';
}
else if(getTop().goUserInfo.ej=='ready')
{
if(typeof getTop().goUserInfo.aE[bt]==='undefined')
{
return'';
}
return getTop().goUserInfo.aE[bt];
}
},
deferget:function(bt,kF)
{
if(getTop().goUserInfo.ej=='init')
{
if(typeof getTop().goUserInfo.aZS[bt]==='undefined')
{
getTop().goUserInfo.aZS[bt]=[];
}
getTop().goUserInfo.aZS[bt].push(kF);
getTop().goUserInfo.reset();
}
else
{
kF(getTop().goUserInfo.aE[bt]);
}
},
set:function(eB)
{
extend(getTop().goUserInfo.aE,eB);
},
reset:function()
{
if(getTop().goUserInfo.ej=='loading')
{
return;
}
getTop().goUserInfo.ej='loading';

var aY=T(["/cgi-bin/getcomposedata?t=signature&fun=compose&sid=$sid$&qzonesign=$qzonesign$&r=$rand$"])
.replace({
sid:getSid(),
qzonesign:"",
rand:now()
});
QMAjax.send(aY,
{
method:"GET",
timeout:10000,
headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},
onload:function(bh,bO)
{
var iR=trim2(bO);

if(bh&&iR.indexOf("(")==0)
{
getTop().goUserInfo.ej='ready';
getTop().goUserInfo.set(
(function(){
return(new Function("return "+iR))();
})()
);
bindAccount();
}
else
{
getTop().goUserInfo.ej='init';
}
getTop().goUserInfo.euK();
}
});
}
};
}






function setDefaultSender(mB)
{

getTop().goUserInfo.set({"DEF_MAIL_FROM":mB});

}

function getMailZoomTool()
{
return getTop().goUserInfo.get("DEF_MAILZOOMTOOL")=="1";
}

function setMailZoomTool(alG)
{
getTop().goUserInfo.set({"DEF_MAILZOOMTOOL":alG?"1":"0"});
}





function closeRecognizeNickName()
{
ossLog("realtime","all","stat=tips&type=know&tipid=66");
getTop().goUserInfo.set({"DEF_RECOGNIZENICKNAME":false});
}






function getUserInfoText(aC)
{
var dK=S("user"+aC,getTopWin())||{};
return fixNonBreakSpace(dK.innerText||dK.textContent);
}






function getUserInfo(aC)
{
return(S("user"+aC,getTopWin())||{}).innerHTML||"";
}







function setUserInfo(aC,cf)
{
try
{
S("user"+aC,getTopWin()).innerHTML=htmlEncode(cf);
return true;
}
catch(bj)
{
return false;
}
}










function msgBox(cT,abQ,ase,Gp,
bir,ax)
{
if(window!=getTop())
{
return getTop().msgBox(cT,abQ,ase,Gp,
bir,ax);
}

var gh=cT;

if(!gh)
{
var aam=S("msg_txt",ax||window)
||S("msg_txt",getActionWin());

if(aam&&(aam.innerText||aam.textContent)
&&aam.getAttribute("ok")!="true")
{
gh=filteScript(aam.innerHTML);
aam.setAttribute("ok","true");
}
}

if(!gh||!(gh=trim(gh.replace(/[\r\n]/ig,""))))
{
return;
}

hiddenMsg();

if(abQ=="dialog")
{
alertBox(
{
msg:gh,
title:bir||"\u786E\u8BA4"
}
);
}
else
{
setClass(arguments.callee.createMessageBox().firstChild,
abQ=="success"?"msg":"errmsg").innerHTML=gh;

showMsg();







if(ase)
{
getTop().gMsgBoxTimer=getTop().setInterval(getTop().hiddenMsg,Gp||5000);
}

getTop().gMsgDispTime=now();
}
};




msgBox.createMessageBox=function(NT)
{
var acg=S("msgBoxDIV",getTop());
if(!acg)
{

var cj=typeof NT=="undefined"?(getTop().bnewwin?0:43):NT;
insertHTML(
Scale.getContainer(),
"afterBegin",
T([
'<div id="msgBoxDIV" style="position:absolute;width:100%;display:none;',
'padding-top:2px;height:24px;*height:24px;_height:20px;top:$top$px;text-align:center;">',
'<span></span>',
'</div>'
]).replace({
top:cj
})
);
acg=S("msgBoxDIV",getTop());
}
return acg;
};





function isshowMsg()
{
return getTop().isShow("msgBoxDIV");
}




function hiddenMsg()
{
if(getTop().gMsgBoxTimer)
{
getTop().clearInterval(getTop().gMsgBoxTimer);
getTop().gMsgBoxTimer=null;
}
getTop().show("msgBoxDIV",false);
getTop().showProcess(0);
}






function displayGrayTip(aw,gI)
{
var di=aw.style;

di.visibility=!gI?"hidden":"";
di.height=!gI?"0":"";
}




function showMsg()
{
getTop().show("msgBoxDIV",true);
}







function showError(iv,Gp,cYY)
{
var cxs=iv;

if(!iv||iv.indexOf("null")!=-1||iv.indexOf("undefined")!=-1)
{
cxs="\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u91CD\u8BD5";
}
msgBox(cxs,"",Gp!=-1,Gp||5000);
var acg=S("msgBoxDIV",getTop());
iv&&postErrMsgLog(cxs);
if(acg&&cYY)
{
var amU=[];
E(GelTags("script",acg),function(aOo)
{
amU.push(aOo.innerHTML);
}
);
globalEval(amU.join(";"),getTop());
}
}

function postErrMsgLog(iv)
{
if(iv)
{
ossLog("realtime","all","stat=showerrlog&msg="+encodeURIComponent(iv));
}

}






function showInfo(ccg,Gp)
{
msgBox(ccg,"success",Gp!=-1,Gp||5000);
}











function showProcess(yo,bYy,aIQ,bhO,bXG)
{
var aX="load_process",
bip=arguments.callee.bbH(aX);

if(yo==0)
{
return show(bip,false);
}

hiddenMsg();
show(bip,true);

var ZC=yo==2;

if(ZC)
{
var hv=parseInt(aIQ);

if(isNaN(hv))
{
hv=0;
}
else
{
hv=Math.max(0,Math.min(100,hv));
}
if(bhO)
{
S(aX+"_plan_info",getTop()).innerHTML=bhO+(hv?":":"");
}

S(aX+"_plan_rate",getTop()).innerHTML=
S(aX+"_plan_bar",getTop()).style.width=[hv,"%"].join("");
}
else
{
if(aIQ)
{
S(aX+"_info",getTop()).innerHTML=aIQ;
}
}



show(S(aX+"_plan",getTop()),ZC);
show(S(aX+"_img",getTop()),ZC?false:bYy);
show(S(aX+"_plan_info",getTop()),ZC);
show(S(aX+"_plan_rate",getTop()),ZC&&hv);
show(S(aX+"_info",getTop()),!ZC);
show(S(aX+"_cancel",getTop()),bXG!=false);
}






showProcess.bbH=function(aM)
{
var aKa=S(aM,getTop());
if(!aKa)
{
insertHTML(
Scale.getContainer(),
"afterBegin",
T([
'<table id="$id$" cellspacing=0 cellpadding=0 border=0 ',
'style="position:absolute;top:$top$px;left:0;width:100%;display:none;z-index:9999;">',
'<tr><td align="center">',
'<table id="$id$_pos" cellspacing=0 cellpadding=0 border=0 class="autosave autosave_txt" style="height:20px;"><tr>',
'<td style="width:2px;"></td>',
'<td id="$id$_img" style="padding:0 0 0 5px;">',
'<img src="$image_path$ico_loading104474.gif" style="width:16px;height:16px;vertical-align:middle;">',
'</td>',
'<td id="$id$_plan" valign=center style="padding:0 0 0 5px;">',
'<div style="font:1px;border:1px solid white;width:104px;text-align:left;">',
'<div id="$id$_plan_bar" style="font:1px;background:#fff;height:8px;margin:1px 0;width:50%;"></div>',
'</div>',
'</td>',
'<td id="$id$_plan_info" style="padding:0 0 0 5px;"></td>',
'<td id="$id$_plan_rate" style="width:40px;text-align:right;padding:0;"></td>',
'<td id="$id$_info" style="padding:0 0 0 5px;"></td>',
'<td id="$id$_cancel" style="padding:0 0 0 5px;">',
'[<a onclick="getTop().cancelDoSend();" nocheck="true" style="color:white;">\u53D6\u6D88</a>]',
'</td>',
'<td style="padding:0 0 0 5px;"></td>',
'<td style="width:2px;"></td>',
'</tr></table>',
'</td></tr>',
'</table>'
]).replace(
{
id:aM,
top:getTop().bnewwin?0:45,
image_path:getPath("image",true)
}
)
);
aKa=S(aM,getTop());
}
return aKa;
};





function getProcessInfo()
{
var aX="load_process",
lJ=getTop();

if(isShow(S(aX,lJ)))
{
var biG=S(aX+"_plan_rate",lJ),
aHS=S(aX+"_info",lJ);

if(aHS&&isShow(aHS))
{
return aHS.innerHTML;
}

if(biG&&isShow(S(aX+"_plan",lJ)))
{
return parseInt(biG.innerHTML);
}
}
return"";
}






function replaceCss(ax,zd)
{
replaceCssFile(
"skin",
[getPath("style"),getFullResSuffix(["skin",
typeof zd=="undefined"?getPath("skin"):zd,".css"].join(""))
].join(""),
(ax||window).document
);
}






function bgG(zd,asd)
{
var aq=getTop();

return!asd&&aq.gLogoUrl?aq.gLogoUrl.replace(/(.*)_[^_]+_([^_]+)/,"$1_"+zd+"_$2")
:TE([
'$images_path$logo',
'$@$if($bFoxmail$)$@$',
'_foxmail',
'$@$else$@$',
'$sSubfolder$',
'$@$endif$@$',
'/logo_$nSkinId$_',
'$@$if($bFoxmail$)$@$',
'0',
'$@$else$@$',
'$sLogoid$',
'$@$endif$@$.gif'
]).replace(
{
images_path:getPath("image"),
bFoxmail:asd,
sSubfolder:aq.gsLogoFolder,
nSkinId:zd,
sLogoid:(aq.gsLogoFolder||zd==0)?(aq.gLogoId||0):0
}
);
}








function doRealChangeStyle(bQB,zd,asd,xp,bUw)
{
var aq=getTop(),
LK=aq.gTempSkinId=zd,
cI=getMainWin(),
aGN=[aq,cI],
bRo=bUw||false,
ajf=S("imglogo",aq);

if(ajf)
{

if(typeof xp=="undefined"||xp=="")
{
ajf.style.backgroundImage="";
if(zd<10000000&&aq.gLogoUrl)
{

ajf.style.backgroundImage="url("+bgG(LK,asd)+")";
ajf.src="/zh_CN/htmledition/images/spacer.gif";












}
}
else
{
ajf.style.backgroundImage="url("+xp+")";
}
ajf.className=bRo?"domainmaillogo":"maillogo";
}







E(aq.goDialogList,function(kJ,nF)
{
aGN.push(F(nF,getTop()));
});

E(GelTags("iframe",cI.document),function(kJ)
{
aGN.push(kJ.contentWindow);
});

E(aGN,function(ax)
{
replaceCss(ax,LK);
});

removeSelf(bQB);

setTimeout(resizeFolderList);

rdVer("BaseVer",1);
}






function changeStyle(zd,xp)
{
var atg=false,
atc=false;


var arW=getTop().getGlobalVarValue("DOMAIN_MAIL_LOGO_URL")||{},
PC=getTop().goUserInfo.get("DEF_MAIL_FROM")||'';
if(xp)
{
atc=xp.indexOf("/cgi-bin/viewfile")>=0;
if(atc)
{
arW[PC]=xp;
PC&&setGlobalVarValue("DOMAIN_MAIL_LOGO_URL",arW);
}
}
else if(PC&&arW[PC])
{

xp=arW[PC];
atc=xp&&xp.indexOf("/cgi-bin/viewfile")>=0;
}

var LK=typeof zd=="undefined"||zd==""?getTop().skin_path:zd,
bVG=getTop().gsLogoFolder,
bUl=atg?0:(bVG||LK==0?(getTop().gLogoId||0):0),
bPq=atg?"_foxmail":"",
beW=getTop().changeStyle,
cbd=beW.aIR,
aIR=beW.aIR=["skinCssCache",LK,
bPq,xp||bUl].join("_");


if(aIR!=cbd)
{
cacheByIframe([
["css",getPath("style"),"skin"+LK+".css"],
!!xp?["img","",xp]

:["img",bgG(LK,atg)]
],
{
onload:function()
{
doRealChangeStyle(this,LK,atg,xp,atc);
}
}
);
}
}




function osslogCompose(ix,aIx,bc,aGB,aIH)
{
getTop().ossLog("delay","all",T([
'stat=compose_send',
'&t=$time$&actionId=$actionId$&mailid=$mailid$',
'&isActivex=$isActivex$&failCode=$failCode$',
'&$other$'
]).replace({
time:ix,
actionId:aIx,
mailId:bc,
failCode:aGB,
other:["&cgitm=",getTop().g_cgiTimeStamp||-1,"&clitm=",getTop().g_clientTimeStamp||-1,"&comtm=",aIH&&aIH.valueOf?aIH.valueOf():-1].join('')
}));
}

function osslogAjaxCompose(CJ,Kl,jA,aC,iu)
{
var aq=getTop(),
cCK=["IE","FF","Safari","Chrome","Opera","QBIE","TT","NS"],
xd="gbIs",
dwk="Other";
for(var i=0;i<cCK.length;i++)
{
if(aq[xd+cCK[i]])
{
dwk=cCK[i];
break;
}
}
ossLog("delay","all",T([
'stat=compose_ajax_send',
'&server=$server$&browser=$browser$',
'&status=$status$&code=$code$&section=$section$&sendtype=$type$&ran=$ran$',
'&filesuffix=$filesuffix$'
]).replace(
{
ran:now(),
server:getCookie("ssl_edition")||location.host,
browser:dwk,

status:CJ,
code:Kl,
section:jA,
type:aC,
filesuffix:(/.*\.(.*)/g).test(iu)?RegExp.$1:""
}
));
}








function recodeComposeStatus(aIx,bc,aGB,cav)
{
var gL=0,
ajg=getTop().gSendTimeStart;

if(!ajg||!ajg.valueOf)
{
if(!cav)
{
return;
}
}
else
{
gL=now()-ajg.valueOf();
getTop().gSendTimeStart=null;
}



osslogCompose(gL,aIx,bc,aGB,ajg);













getTop().isUseActiveXCompose=false;
}




function errorProcess(aff)
{

if(typeof getMainWin().ErrorCallBack=="function")
{
getMainWin().ErrorCallBack(aff);

}
else if(typeof getTop().ErrorCallBack=="function")
{
getTop().ErrorCallBack(aff);
}
}







function doPostFinishCheck(aM,ax,bGv)
{
if(aM)
{
var tB="",
alN=false,
Fp=S(aM,ax),
azk=F(aM,ax),
bRq=-1;

try
{
bRq=0;
if(!Fp
||Fp.getAttribute("deleted")=="true")
{
return;
}

bRq=1;
var cX=azk.document.body,
alN=!cX.className&&!cX.style.cssText;

bRq=2;
if(alN)
{
var IX=azk.document.documentElement;
tB=(IX.textContent
||IX.innerText||"").substr(0,30);
}




}
catch(bj)
{
doPageError([aM,bj.message].join(":"),azk&&azk.location&&azk.location.href||aM,bRq);
alN=bj.message||"exception";
}

QMHistory.recordActionFrameChange();

if(alN)
{
callBack.call(Fp,bGv,[tB]);












errorProcess();
}
}
}




function actionFinishCheck()
{
doPostFinishCheck("actionFrame",getTop(),function(responseContent)
{
showError(gsMsgLinkErr);
}
);
}




function doSendFinishCheck()
{
doPostFinishCheck("sendmailFrame",getTop(),function(alq)
{
recodeComposeStatus(2,null,alq||0);
msgBox(T(['\u7531\u4E8E\u7F51\u7EDC\u539F\u56E0\uFF0C\u90AE\u4EF6\u53D1\u9001\u5931\u8D25\uFF01'
,'[<a href="/cgi-bin/switch2service?sid=$sid$&errcode=-1&time=$time$&cginame=sendmail&t=error_report">\u53D1\u9001\u9519\u8BEF\u62A5\u544A</a>]']).replace(
{
time:formatDate(new Date(),"$YY$$MM$$DD$$hh$$mm$$ss$")
}
),"dialog",true,0,"\u5931\u8D25\u4FE1\u606F");
}
);
}






function submitToActionFrm(nj)
{
try
{
nj.submit();
return true;
}
catch(bj)
{
showError(nj.message);
return false;
}
}









function afterAutoSave(xU,bc,cT,bKt)
{

var lP=0,
xB,avK;

try
{
var cI=getTop().getMainWin();

function avb()
{
if(disableAll)
{
disableAll(false);
}
}

lP=1;

if(bc==""||!bc)
{
return avb();
}

lP=2;

if(!cI||!S("fmailid",cI))
{
return avb();
}

lP=3;


if(bc.charAt(0)=='@')
{
avK=S("draftmailid",cI).value;
}
else
{
avK=S("fmailid",cI).value
}

if(avK!=bc)
{
if(bc.charAt(0)=='@')
{
S("draftmailid",cI).value=bc;
}
else
{
S("fmailid",cI).value=bc;
}
getTop().setTimeout(
function()
{
reloadLeftWin()
},
0
);
}

lP=4;

var fN=xU.split(" |"),
Qn=[],
aDE=cI.QMAttach.getExistList();

for(var i=0,aK=aDE.length;i<aK;i++)
{
var agA=S("Uploader"+aDE[i],cI);
if(agA&&!agA.disabled&&agA.value!="")
{
Qn.push(agA);
}
}

lP=5;

var bIo=Qn.length;
for(var i=0,aK=fN.length-1;i<aK;i++)
{
var sX=false;
for(var j=0;j<=i&&j<bIo;j++)
{
if(!Qn[j].disabled
&&Qn[j].value.indexOf(fN[i])!=-1)
{
Qn[j].disabled=true;
sX=true;
try
{
if(gbIsIE||gbIsWebKit)
{
Qn[j].parentNode.childNodes[1].innerText=fN[i];
}
}
catch(bj)
{
}
}
}
if(!sX)
{
var bd=fN[i]+" |",
ek=xU.indexOf(bd);

if(ek!=-1)
{
xU=xU.substr(0,ek)
+xU.substr(ek+bd.length,
xU.length-ek-bd.length
);
}
}
}

lP=6;

cI.loadValue();

lP=7;

if(xU&&S("fattachlist",cI))
{
S("fattachlist",cI).value+=xU;
}

lP=8;







lP=9;

showInfo(cT
||(formatDate(new Date,"$hh$:$mm$")+" "+getTop().gsMsgSendErrorSaveOK));

lP=10;
var fB=getTop().QMDialog("composeExitAlert");
var ko=fB&&fB.S("btn_exit_notsave");
if(ko&&ko.isShow())
{
return fireMouseEvent(ko,"click");
}

lP=11;

if(!bKt)
{
avb();
}

lP=12;

cI.enableAutoSave();
}
catch(bj)
{
xB=bj.message;
debug(["afterAutoSave:",bj.message,"eid:",lP]);
}









}




function cancelDoSend()
{
var cI=getMainWin(),
Zx=cI.QMAttach;

if(Zx&&Zx.onfinish)
{
Zx.onprogress=null;
Zx.onfinish=null;
}
else
{
var awL=S("sendmailFrame",getTop());
if(awL)
{
awL.setAttribute("deleted","true");
removeSelf(awL);
}
}

recodeComposeStatus(3,null,0);
showProcess(0);
errorProcess();
}







function quickDoSend(vp,cf,cT)
{
var aRq=false;

if(cT!="nomsg")
{
showProcess(1,0,[
"<img src='",getPath("image"),"newicon/a_send.gif' width='14px' height='14px' align='absmiddle'>&nbsp;",
(cT||gsMsgSend)].join(""),null,true);
}

disableSendBtn(true);
disableSource(true);

createBlankIframe(getTop(),
{
id:"sendmailFrame",
onload:function(ax)
{
if(aRq)
{
doSendFinishCheck(this);
}
else
{
aRq=true;

try
{
vp.content.value=cf;
vp.target="sendmailFrame";
vp.submit();
}
catch(bj)
{
showError("\u53D1\u9001\u5931\u8D25\uFF1A"+bj.message);
disableSendBtn(false);
disableSource(false);
}
}
}
}
);
}






function disableSendBtn(uH,ax)
{
disableCtl("sendbtn",uH,ax||getMainWin());
}





function disableSaveBtn(uH,ax)
{
disableCtl("savebtn",uH,ax||getMainWin());
}





function disableTimeSendBtn(uH,ax)
{
disableCtl("timeSendbtn",uH,ax||getMainWin());
}





function disableSource(uH)
{
disableCtl("source",uH,getMainWin());
}




function disableAll(uH,ax)
{
var cI=ax||getMainWin();
if(cI.disableAll&&cI.disableAll!=arguments.callee)
{
return cI.disableAll(uH);
}

disableSendBtn(uH,ax);
disableSaveBtn(uH,ax);
disableTimeSendBtn(uH,ax);

var fB=getTop().QMDialog("composeExitAlert"),
bdO=fB&&fB.S("btn_exit_save");
if(bdO)
{
bdO.disabled=uH;
}
}






function verifyCode(aC,Ph)
{
if(window!=getTop())
{
return getTop().verifyCode(czP);
}

var zx=arguments.callee,

bSC=zx.caZ;


setVerifyCallBack();
loadingBox(
{
model:"\u9A8C\u8BC1\u7801",
js:"$js_path$qmverify181b8c.js",
oncheck:function()
{
return window.QMVerifyBox;
},
onload:function()
{
QMVerifyBox.open(
{
sType:aC,
sVerifyKey:Ph,
onok:bSC
}
);
}
}
);
}
























function openComposeDlg(UD,ar,bez)
{
!(typeof QMAddress!="undefined"&&QMAddress.isInit())&&initAddress();




loadJsFileToTop(["$js_path$com/kits/qmeditor/qqmail/release/editor181b91.js"]);
loadingBox(
{
model:"\u53D1\u4FE1",
js:["$js_path$libcompose181b8c.js","$js_path$qmaddrinput189879.js"],
oncheck:function()
{
return window.ComposeLib&&window.QMAddrInput&&window.QMEditor&&(!bez||bez());
},
onload:function()
{
ComposeLib.openDlg(UD,ar);
}
}
);
}










function setVerifyCallBack(bS)
{
getTop().verifyCode.caZ=bS;
}







function emptyFolder(cmF,cBm,beO)
{
confirmBox({
title:"\u6E05\u7A7A\u6587\u4EF6\u5939",
msg:T([
'<div class="dialog_f_t">$name$</div>',
'<div class="dialog_f_d">\u6E05\u7A7A\u540E\u90AE\u4EF6\u5C06\u65E0\u6CD5\u6062\u590D\u3002</div>'
]).replace({
name:(beO?"\u662F\u5426\u8981\u6E05\u7A7A\u6B64\u6587\u4EF6\u5939\u4E2D\u7684\u90AE\u4EF6\uFF1F":"\u662F\u5426\u8981\u6E05\u7A7A"+beO+"\u4E2D\u7684\u90AE\u4EF6")

}),
confirmBtnTxt:'\u662F',
cancelBtnTxt:'\u5426',
onreturn:function(bh)
{
bh&&cBm();
}
});




}








function renameFolder(fe,aC,ax,bLc)
{
promptFolder({
defaultValue:bLc||'',
type:"rename"+(aC||'folder'),
onreturn:function(mW){
var gK=S("frm",ax);
if(aC=='tag')
{
gK.fun.value="renametag";
gK.tagname.value=mW;
gK.tagid.value=fe;
}
else
{
gK.fun.value="rename";
gK.name.value=mW;
gK.folderid.value=fe;
}
submitToActionFrm(gK);
}
});
return false;
}











function promptFolder(ar)
{
var aQ={
shortcutgroup:{title:'\u65B0\u5EFA\u8054\u7CFB\u4EBA\u5206\u7EC4',msg:'\u8BF7\u586B\u5199\u8054\u7CFB\u4EBA\u5206\u7EC4\u540D\u79F0',name:'\u8054\u7CFB\u4EBA\u5206\u7EC4',maxascii:32,description:"\u5199\u4FE1\u65F6\uFF0C\u53EA\u9700\u8981\u8F93\u5165\u8FD9\u4E2A\u7FA4\u7EC4\u540D(\u6C49\u5B57\u9700\u8F93\u5165\u62FC\u97F3)\uFF0C\u5C31\u53EF\u4EE5\u5FEB\u6377\u7FA4\u53D1\u4E86\u3002"},
folder:{title:'\u65B0\u5EFA\u6587\u4EF6\u5939',msg:'\u8BF7\u60A8\u8F93\u5165\u6587\u4EF6\u5939\u540D\u79F0',name:'\u6587\u4EF6\u5939',maxascii:80},
tag:{title:'\u65B0\u5EFA\u6807\u7B7E',msg:'\u8BF7\u60A8\u8F93\u5165\u6807\u7B7E\u540D\u79F0',name:'\u6807\u7B7E',maxascii:50},
renamefolder:{title:'\u91CD\u547D\u540D\u6587\u4EF6\u5939',msg:'\u8BF7\u60A8\u8F93\u5165\u65B0\u7684\u6587\u4EF6\u5939\u540D\u79F0',name:'\u6587\u4EF6\u5939',maxascii:80},
renametag:{title:'\u91CD\u547D\u540D\u6807\u7B7E',msg:'\u8BF7\u60A8\u8F93\u5165\u65B0\u7684\u6807\u7B7E\u540D\u79F0',name:'\u6807\u7B7E',maxascii:50}
}[ar.type];
aQ.defaultValue=ar.defaultValue;

ar.width&&(aQ.width=ar.width);
ar.height&&(aQ.height=ar.height);
ar.bAlignCenter&&(aQ.bAlignCenter=ar.bAlignCenter);
ar.onclose&&(aQ.onclose=ar.onclose);
ar.style&&(aQ.style=ar.style);

aQ.onreturn=function(bh,gB){
if(!bh)
{
return;
}

var aK=getAsiiStrLen(trim(gB));
if(aK==0||aK>aQ.maxascii)
{
return showError(TE(aK?"$name$\u540D\u79F0\u592A\u957F\uFF0C\u8BF7\u4F7F\u7528\u5C11\u4E8E$maxascii$\u4E2A\u5B57\u7B26($@$eval $maxascii$/2$@$\u4E2A\u6C49\u5B57)\u7684\u540D\u79F0":'$name$\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A').replace(aQ));
}
if(/[~!#\$%\^&\*\(\)=\+|\\\[\]\{\};\':\",\?\/<>]/.test(gB))
{
return showError(aQ.name+'\u540D\u79F0\u4E0D\u80FD\u5305\u542B ~!#$%^&*()=+|\\[]{};\':",?/<> \u7B49\u5B57\u7B26');
}

ar.onreturn(gB);
};
promptBox(aQ);
}


function bjD(fe,NK,asi,dO)
{
if(fe)
{
var aIU=S(fe+"_td",NK);
if(aIU)
{
setClass(aIU,asi);
return aIU;
}
else
{

var aIk=S(fe,NK);
if(aIk)
{
var bfi=dO=="over";
if(bfi)
{
showFolders(aIk.name,true);
}
var bQm=S(fe,NK).parentNode;
setClass(bQm,bfi?"fn_list":"");
return aIk;
}
}
}
}











function switchFolderComm(aM,ax,aCl,kT,bYW,
bUS,bkl)
{
var aGS=S(aCl,ax),
lC=aM;

if(lC)
{
bkl.bXN=lC;
}
else
{
lC=bkl.bXN;
}

if(aGS)
{
var bev="SwiTchFoLdErComM_gLoBaldATa",
bdz=ax[bev],
aiI;

if(bdz!=lC)
{
bjD(bdz,ax,bUS,"none");
}

if(aiI=
bjD(ax[bev]=lC,ax,bYW,"over"))
{

E("new|personal|pop|tag".split("|"),function(bdj)
{
var aag=S(bdj+"folders",ax);
aag&&isObjContainTarget(aag,aiI)
&&showFolders(bdj,true);
}
);

if(getStyle(aGS,"overflow")!="hidden")
{

scrollIntoMidView(aiI,aGS);
}
else
{

var aag=S("ScrollFolder",ax);
aag&&isObjContainTarget(aag,aiI)
&&scrollIntoMidView(aiI,aag);
}
}
}
}






function switchFolder(aM,ax)
{
getTop().switchFolderComm(aM,ax||getLeftWin(),"folder","li","fn","fs",
getTop().switchFolder
);
}







function switchRightFolder(aM,bQu,aCl)
{
getTop().switchFolderComm(aM,bQu||F("rightFolderList",getMainWin()),
aCl||"folder_new","div","toolbg","",getTop().switchRightFolder
);
}






function isShowFolders(aM,ax)
{
var yU=S("icon_"+aM,ax||getTop());
return!!(yU&&yU.className=="fd_off");
}





function showFolders(aM,lV,ax)
{
var aI=ax||getTop(),
bi=S(aM+"folders",aI),
yU=S("icon_"+aM,aI);

if(bi&&yU)
{
var mt=S(aM+"folders",aI),
cvO=GelTags("li",mt).length;

var iy=!isShowFolders(aM,aI);
if(cvO&&(typeof lV!="boolean"||iy==lV))
{
setClass(yU,iy?"fd_off":"fd_on");

if(!ax)
{
var aq=getTop(),
bdV="fOlDErsaNimaTion"+aM,
lz=aq[bdV];

if(!lz)
{
lz=aq[bdV]=new aq.qmAnimation(
{
from:1,
to:100
}
);
}

lz.stop();

if(iy)
{
bi.style.height="1px";
show(bi,true);
}
else
{
bi.style.height="auto";
}

var mE=bi.scrollHeight;
lz.play(
{
speed:mE,
onaction:function(cM,hx)
{
S(aM+"folders",aq).style.height=
(Math.floor((iy?hx:1-hx)*mE)
||1)+"px";
},
oncomplete:function(cM,azL)
{
var eB=S(aM+"folders",aq);
if(iy)
{
eB.style.height="auto";
}
else
{
show(eB,false);
}
}
}
);
}
else
{
show(bi,iy);
}

callBack(getTop().iPadResizeFolder);
}
}
}

function decreaseFolderUnread(mB,Dr,ax)
{
var mv,Mv=mB.split(';');
for(var i=Mv.length-1;i>=0;i--)
{
if(mv=optFolderUnread(0,Mv[i]))
{
optFolderUnread(1,Mv[i],mv-1,Dr,ax);
}
}
}







function getFolderUnread(fe)
{
return optFolderUnread(0,fe);
}









function setFolderUnread(fe,cM,Dr,ax)
{







return optFolderUnread(1,fe,cM||0,Dr,ax);
}






function getGroupUnread(sJ)
{
return optFolderUnread(0,sJ,null,null,getMainWin());
}








function setGroupUnread(sJ,cM,Dr)
{
return optFolderUnread(1,sJ,cM||0,Dr,getMainWin());
}









function setTagUnread(fe,cM,Dr,ax)
{
return optFolderUnread(1,fe,cM||0,Dr,ax,true);
}











function optFolderUnread(eY,fe,cM,Dr,ax,caW)
{
var CH=S(
[
"folder_",


(new String(fe)).toString().split("folder_").pop()
].join(""),
ax||getLeftWin()
);
if(!CH)
{
return 0;
}

var gk=CH.getAttribute("etitle"),

bd=CH.name;





var jC=typeof(cM)=="number"&&cM>0?cM:0,
afS=CH.innerText||CH.textContent||"",
arP=afS.lastIndexOf("("),
aJk=arP==-1?0
:parseInt(afS.substring(arP+1,afS.lastIndexOf(")")));

if(eY==0)
{
return aJk;
}

if(aJk==jC)
{
return 1;
}

var aFU=jC==0,
bJ={
info:htmlEncode(arP!=-1?afS.substring(0,arP):afS),
title:gk,
unread:jC
},
aXH=GelTags("div",CH)[0];

if(fe=="1")
{
CH.title=T("\u6536\u4EF6\u7BB1\u6709 $unread$ \u5C01\u672A\u8BFB\u90AE\u4EF6").replace(bJ);
}
else if(fe=="8")
{
CH.title=T("\u6709 $unread$ \u5C01\u672A\u8BFB\u7FA4\u90AE\u4EF6").replace(bJ);
}
else
{
CH.title=T('$title$'+(Dr||aFU?'':'  \u672A\u8BFB\u90AE\u4EF6 $unread$ \u5C01')).replace(bJ);
}


if((fe!="tag"&&fe.indexOf("tag")>=0)||(fe==""+parseInt(fe)&&fe>=129&&aXH))
{
var jm=bJ.title||bJ.info;
jm=jm.length>5?jm.substr(0,5)+"...":jm;
aXH=setHTML(aXH,aFU?bJ.title||bJ.info:["<b>",jm,"(",bJ.unread,")","</b>"].join(""));
if(aFU)
{
addClass(aXH,"fdwidthmax");
addClass(aXH,"txtflow");
}
else
{
rmClass(aXH,"fdwidthmax");
rmClass(aXH,"txtflow");
}
}
else
{



CH=setHTML(CH,T(aFU&&'$info$'
||(Dr?'$info$($unread$)':'<b>$info$</b><b>($unread$)</b>')
).replace(bJ)+
(bJ.info=='\u661F\u6807\u90AE\u4EF6'?'<input type="button" class="ico_input icon_folderlist_star"/>':'')+
(bJ.info=='\u6F02\u6D41\u74F6'?'<input class="ico_input drifticon" type="button" hidefocus />':'')+
(bJ.info=='\u91CD\u8981\u8054\u7CFB\u4EBA'?'<input type="button" class="ico_input icon_folderlist_iclist"/>':'')
);
CH.setAttribute("initlized","");


var bXZ=S(
"folder_"+(new String(fe)).toString().split("folder_").pop()+"_ns",
ax||getLeftWin()
);
if(bXZ)console.info(bXZ);
bXZ&&setHTML(bXZ,T(aFU?'$info$':'<b>$info$</b>').replace(bJ));
}
if(bd&&!caW)
{
var aKy=S("folder_"+bd,getTop());
if(aKy)
{
try
{
optFolderUnread(eY,fe,jC,Dr,getMainWin());
}
catch(bj)
{
doPageError(bj.message,"all.js","optFolderUnread");
}

return setFolderUnread(aKy.id,
getFolderUnread(aKy.id)-aJk+jC);
}
}

return 1;
}







function doFolderEmpty(fe,vp,qo)
{
vp.folderid.value=fe;
vp.rk.value=Math.random();

if(vp.loc)
{
vp.loc.value=qo;
}

submitToActionFrm(vp);
}

function handleSubFolder(fe)
{
var cGP="icon_subfolder_fold",
bta=S("icon_subfolder_"+fe),
iy=!hasClass(bta,cGP);
if(bta)
{
iy?
addClass(bta,cGP):
rmClass(bta,cGP);
show("folder_sysmsg_td",iy);
show("folder_notsysmsg_td",iy);
show("folder_sysmsg_line",iy);
show("folder_"+fe+"_ns",iy);
show("folder_"+fe,!iy);

QMAjax.send(T("/cgi-bin/setting4?sid=$sid$&openclassify=$openclassify$&fun=submit&loc=switchfolder,,,$loc$").replace(
{
openclassify:iy?0:1,
sid:getSid(),
loc:iy?"open":"close"
}
)
);
}
}








function selectAll(zG,dC)
{
E(GelTags("input",S('list',dC)),function(jv)
{
jv.checked=zG;
}
);
getTop().showSelectALL(dC,zG);
}





function selectReadMail(zG,dC)
{
E(GelTags("input",S('list',dC)),function(jv)
{
if(jv.title!="\u9009\u4E2D/\u53D6\u6D88\u9009\u4E2D")
{
jv.checked=jv.getAttribute('unread')!=zG;
}
}
);
}





function checkAddrSelected(dC)
{
var ju=GelTags("input",S('list',dC)),
aK=ju.length,
bT;

for(var i=0;i<aK;i++)
{
bT=ju[i];
if(bT.type=="checkbox"&&bT.checked)
{
return true;
}
}

return false;
}






function checkBoxCount(aAI,dC)
{
var gU=0;

E(GelTags("INPUT",S("list",dC)),function(mI)
{
if(mI.type=="checkbox"
&&mI.name==aAI
&&mI.checked)
{
gU++;
}
}
);

return gU;
}




function PGV()
{
}






function checkCheckBoxs(aR,vp)
{
var gK=vp||S("frm",getMainWin()),
ju=GelTags("input",gK),
pZ;

for(var i=0,aK=ju.length;i<aK;i++)
{
pZ=ju[i];

if(pZ.type=="checkbox"
&&pZ.name==aR
&&pZ.checked)
{
return true;
}
}

return false;
}






function setListCheck(mI,TB)
{
if(mI.type!="checkbox")
{
return;
}

if(TB==null)
{
TB=mI.checked;
}
else
{
mI.checked=TB;
}

var dK=mI.parentNode.parentNode;

if(dK.tagName=="TR")
{
dK=dK.parentNode.parentNode;
}


if(dK==S("frm",getMainWin()))
{
return;
}

var agY=dK.className;
if(agY=="B")
{
agY=TB?"B":"";
}
else
{
agY=strReplace(agY," B","")
+(TB?" B":"");
}

setClass(dK,agY);

if(TB)
{
listMouseOut.call(dK);
}
}







function doCheck(ap,aiz,bVU,bRl)
{
var cF=ap||window.event,
eJ=aiz||cF.srcElement||cF.target,
cI=bRl||getMainWin();

if(!eJ||!cI)
{
return;
}

if(eJ.className=="one"||eJ.className=="all")
{
CA(eJ);
}
setListCheck(eJ);

if((cF&&cF.shiftKey||bVU)
&&cI.gCurSelObj
&&cI.gCurSelObj!=eJ
&&eJ.checked==cI.gCurSelObj.checked)
{
var ju=getTop().GelTags("input",cI.document),
gU=0,
aK=ju.length,
pZ;

for(var i=0;i<aK;i++)
{
pZ=ju[i];

if(pZ.type!="checkbox")
{
continue;
}

if((pZ==cI.gCurSelObj
||pZ==eJ)&&gU++==1)
{
break;
}

if(gU==1)
{
setListCheck(pZ,eJ.checked);
}
}
}
cI.gCurSelObj=eJ;

getTop().showSelectALL(cI,false);
var cWh=parents(".toarea",eJ),
aRU=cWh[0]&&cWh[0].previousSibling,
fHq;
if(aRU)
{

while(aRU)
{
if(aRU.className&&aRU.className.indexOf("bd talk")>=0)
{
break;
}
aRU=aRU.previousSibling;
}
if(aRU)
{
E(GelTags("div",aRU),function(aw)
{
if(aw.getAttribute("name")==="selectgrouptip"&&parseInt(aw.style.width,10)==500)
{
if(cI.oSGKWs)
{
var ZJ=aw.getAttribute("keyword");
(ZJ||ZJ=="")&&cI.oSGKWds[ZJ]&&delete cI.oSGKWds[ZJ];
}
aw.style.width="0px";

return true;
}
});
}
}
}






function checkAll(aAI,dC)
{
E(GelTags("input",dC),function(bC)
{
if(bC.name==aAI)
{
setListCheck(bC);
}
}
);
}







function fakeReadmail(ar)
{
QMAjax.send(
T('/cgi-bin/readmail?sid=$sid$&mailid=$mailid$&t=readsubmail&mode=fake&base=$base$&pf=$pf$').replace({
sid:getSid(),
mailid:ar.sMailId,
pf:rdVer.isPre(ar.sFolderId)?1:0,
base:rdVer("BaseVer",0)
}),
{
method:"GET",
headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},
onload:function(bh,bO)
{
var iR=trim2(bO);
if(bh&&iR.indexOf("(")==0)
{
var hF=evalValue(iR);
if(hF)
{
folderOpt(extend(ar,hF));
callBack(getMainWin().updatePreAndNext,[ar]);
}
}
else
{
var IP=getActionWin().document;
IP.open();
IP.write(oW.responseText);
}
}
}
);
}













function folderOpt(ar)
{
if(!ar)
{
return;
}

var aq=getTop();
aq.recordCompareReadedMailId(ar.sMailId);
if(ar.bNewMail)
{
var lC=ar.sFolderId,
cdr;





if(lC>0)
{
try{
aq.setFolderUnread(lC,aq.getFolderUnread(lC)-1);
if(ar.bStar)
{
aq.setFolderUnread("starred",aq.getFolderUnread("starred")-1);
}
if(ar.bAddrvip)
{
aq.setFolderUnread("addrvip",aq.getFolderUnread("addrvip")-1);
}


if(ar.oSysTag&&/system:1\|/.test(ar.oSysTag))
{
setFolderUnread("sysmsg",getFolderUnread("sysmsg")-1);
}
if(ar.oSysTag&&/system:0\|/.test(ar.oSysTag))
{
setFolderUnread("notsysmsg",getFolderUnread("notsysmsg")-1);
}










var ps=ar.oMatchTag||[],
i=ps.length-1;
i>=0&&setTagUnread('tag',getFolderUnread('tag')-1);
for(;i>=0;i--)
{
var gF='tag_'+ps[i];
debug(['getFolderUnread',gF,getFolderUnread(gF)]);
setTagUnread(gF,getFolderUnread(gF)-1);
}

}catch(e){}
}




}
}






function recordReadedMailId(bc)
{
getTop().gsReadedMailId=bc;
}



function recordMailListScroll()
{
getTop().gnMailListPos=bodyScroll(getTop().getMainWin(),"scrollTop");
}





function recordCompareReadedMailId(bc)
{
if(bc&&getTop().gsReadedMailId!=bc)
{
getTop().gsReadedMailId=bc;
}

QMMailCache.addData(bc,{bUnread:null});
}






function SG(ait,caa)
{
var dz=ait.className,
iy=!/\bsts\b/i.test(dz);



var	bT=GelTags("input",ait.parentNode)[0],
bfx=bT&&bT.className,
aii=(caa
?ait.parentNode.parentNode.parentNode
:ait.parentNode).nextSibling;

if(bfx=="one"||bfx=="all")
{
setClass(bT,iy?"one":"all");
}

setClass(ait,
iy?dz.replace(/\bhts\b/i,"sts"):dz.replace(/\bsts\b/i,"hts"));


if(aii.className!="toarea")
{
aii=aii.nextSibling;
}

if(aii.className!="toarea")
{
return;
}

return show(aii,iy);
}







function checkNodeLocate(aw,pc,djk)
{
aw=djk?aw.nextSibling:aw.previousSibling;
while(aw)
{
if(aw.className===pc)
{
return false;
}
aw=djk?aw.nextSibling:aw.previousSibling;
}
return true;
}




function getSelectGroupUrl()
{
var cqN=[],
cI=getMainWin(),
dqI=S("sortinfo",cI),
djp=cI.location.getParams()['s'],
bCa=djp==="search"||djp==="searchcontact";
if(cI.location.href&&cI.location.href.indexOf("/cgi-bin/mail_list")<0)
{
return"";
}
for(var i in cI.oSGKWs)
{
cI.oSGKWs[i]==1&&cqN.push(i);
}
cI.oSGKWs={};
if(cqN.length>0&&dqI)
{
return["&action=",bCa?"mail_grpsearchall":"mail_grpoperall","&keyword=",cqN.join("&keyword="),"&sorttype=",dqI.getAttribute("ssorttype")].join("");
}
else
{
return"";
}
}

function checkSelectGroup()
{
var cI=getMainWin(),
Wt=false;
if(cI.location.href&&cI.location.href.indexOf("/cgi-bin/mail_list")<0)
{
return false;
}

E(finds("div[name='selectgrouptip']",cI.document.body),function(aw)
{
aw&&(aw.style.width="0px");
});
for(var i in cI.oSGKWs)
{
cI.oSGKWs[i]==1&&(Wt=true);
};
return Wt;
}






function hideSelectGroupTip()
{
var cI=getMainWin();

E(finds("div[name='selectgrouptip']",cI.document.body),function(aw)
{
aw&&(aw.style.width="0px");
});
cI.oSGKWs={};
}






function selectGroupCheck(aw,aUO)
{
var
dh=aw.parentNode.parentNode.parentNode,
bT=GelTags("input",dh)[0],
bYg=aw.parentNode.parentNode,
cI=getMainWin(),
LE;

if(aUO)
{
var fZ=parseInt(finds("span[un='nowcnt']",bYg)[0].innerHTML,10)||0,
hk=parseInt(finds("span[un='totalcnt']",bYg)[0].innerHTML,10)||0;
E(GelTags("span",bYg),function(SU)
{
LE=SU.getAttribute("un");
if(LE==="select")
{
show(SU,false);
}
else if(LE==="unselect")
{

var nl=GelTags("span",SU)[0],
Yh=4,
jH=parseInt((hk-fZ)/Yh),
ahO=function(Mx){nl.innerHTML=Mx;};
ahO(fZ);
setTimeout(function()
{
ahO(hk-(--Yh)*jH);
Yh!=0&&setTimeout(arguments.callee,150);
},150);
show(SU,true);
}
});
bYg.setAttribute("totalcnt",aw.getAttribute("totalcnt"));

if(cI.oSGKWs)
{
for(var i in cI.oSGKWs)
{
if(cI.oSGKWs[i]==1)
{
E(finds("div[name='selectgrouptip']",cI.document.body),function(aw)

{
aw&&aw.getAttribute("keyword")==i&&(aw.style.width="0px");
});
}
}
cI.oSGKWs={};
}
else
{
cI.oSGKWs={};
}
cI.oSGKWs[bT.getAttribute("keyword")]=1;
}
else
{
aw.parentNode.parentNode.style.width="0px";

fireMouseEvent(bT,"click");
if(cI.oSGKWs)
{
delete cI.oSGKWs[bT.getAttribute("keyword")];
}
}
}




function CA(Rl)
{
if(Rl)
{
var Ax=(Rl.className=="all"
?Rl.parentNode.parentNode.parentNode.parentNode
:Rl.parentNode).nextSibling;

if(Ax.className!="toarea")
{
Ax=Ax.nextSibling;
}
getTop().showSelectALL(getMainWin(),false);
if(Ax.className=="toarea")
{
var boo=Rl.checked,
aXo=Rl.nextSibling,
dBl=false,
cAU=S("selectAll",getMainWin());

E(GelTags("input",Ax),function(bC)
{
setListCheck(bC,boo);
}
);
var djb=finds("div.sidetip",Rl.parentNode);
djb.length>0&&(dBl=true)&&(aXo=djb[0]);
if(dBl)
{

if(boo&&(cAU&&cAU.style.visibility==="hidden")||!cAU)
{
var zw=checkNodeLocate(Ax,"toarea",false),
een=checkNodeLocate(Ax,"toarea",true),
cZz=
{

"5":"\u53D1\u4EF6\u4EBA\u4E0B|sender",
"6":"\u65F6\u95F4\u5185|day",
"7":"\u4E3B\u9898\u5185|subject",
"8":"\u5927\u5C0F\u4E0B|size",
"9":"\u6536\u4EF6\u4EBA\u4E0B|receiver",
"13":"\u56DE\u590D\u4E0B|unread"
},
bBb=attr(S("sortinfo",getMainWin()),"isorttype"),
bCa=getMainWin().location.getParams()["s"]==="search",
aY;

if(een||zw)
{
var ju=finds("input[name='mailid']",Ax),
ddr=(ju&&ju.length)||0;
function showTip(bQw)
{
if(bQw>ddr&&boo)
{
E(GelTags("span",aXo),function(oq)
{
LE=oq.getAttribute("un");
if(LE==="select")
{
GelTags("span",oq)[0].innerHTML=ddr;
GelTags("a",oq)[0].innerHTML=["\u52FE\u9009\u8BE5",cZz[bBb].split("|")[0],"\u5168\u90E8",bQw,"\u5C01\u90AE\u4EF6"].join("");
GelTags("a",oq)[0].setAttribute("totalcnt",bQw);
show(oq,true);
}
else if(LE==="unselect")
{

GelTags("span",oq)[0].innerHTML=bQw;
show(oq,false);
}
});
aXo.style.width="500px";
}
}
if(!aXo.getAttribute("groupcnt"))
{
aY=["/cgi-bin/mail_list_stat",getMainWin().location.search.replace(/t=(mail_list_group|mail_list)/g,"").replace(/&sorttype=\d*/,"").replace(/&sortasc=\d*/,""),"&sorttype=",cZz[bBb].split("|")[1],"&keyword=",encodeURIComponent(attr(Rl,"keyword")),"&ef=js&r=",Math.random(),bCa?"&action=search":"",attr(Rl,'addrvip')=="true"?"&s=addrvip&flag=addrvip":""].join("");
QMAjax.send(aY,
{
method:"GET",
onload:function(bh,bbb)
{
if(bh&&bbb)
{
var aO=evalValue(bbb),
adu=parseInt(aO.count,10);
aXo.setAttribute("groupcnt",adu);
showTip(adu);
}
}
})
}
else
{
showTip(parseInt(aXo.getAttribute("groupcnt"),10));
}

}
}
else
{
aXo.style.width="0px";
}
}
}
}
}















function RD(ap,bc,vZ,eY,ke,aio,
aJB,aLK,BY)
{
recordReadedMailId(bc);
recordMailListScroll();








if(ap)
{
preventDefault(ap);


var aT=getEventTarget(ap),
lC=aT&&aT.getAttribute("fid"),
yj=finds("#frm td[hitmailid]",getMainWin().document),
cr=new QMCache({appName:"mail_rank"});

for(var i=0;i<yj.length;i++)
{
if(yj[i]==aT||isObjContainTarget(yj[i],aT))
{
debug(bc+":"+(i+1));
cr.setData(bc,i+1);
break;
}
}

if(lC)
{
goUrlMainFrm(T("/cgi-bin/$cgi$?sid=$sid$&folderid=$fid$&page=0&t=$t$").replace(
{
cgi:lC=="9"?"readtemplate":"mail_list",
fid:lC,
sid:getSid(),
t:lC=="9"?"sms_list_v2":""
}
),false);
return stopPropagation(ap);
}
}


var aY=rdVer.url(bc,ke,BY,
eY,getTop().bnewwin||(ap&&ap.shiftKey),
aio,aJB,aLK,false,getMainWin().location.getParams().folderkey),
dqq="&hitmailid=",
ccV;


if(ap)
{

if(typeof(ap.hitmailid)!="undefined")
{
ccV=ap.hitmailid;
}
else
{
var aT=getEventTarget(ap),
cED=aT.getAttribute("hitmailid")?aT:parents("td[hitmailid]",aT)[0];

cED&&cED.getAttribute("hitmailid")
&&(ccV=cED.getAttribute("hitmailid"));
}
}
if(ccV)
{
aY=[aY,dqq,ccV.split("|").join(dqq)].join("");
}

rdVer.log(bc,"hit");

var euV=getMainWin().location.href.search("flag=pending");
if(euV!=-1)aY+="&frompending=1";
if(ap&&(ap.shiftKey||ap.ctrlKey||ap.metaKey))
{
var eJ=ap.target||ap.srcElement;

while(eJ&&eJ.className!="i M"
&&eJ.className!="i F")
{
eJ=eJ.parentNode;
}

eJ&&QMReadedItem.disp(eJ);
goNewWin(aY);
}
else
{
goUrlMainFrm([aY,"#stattime=",now()].join(""),false);
}
}









var QMReadedItem={};





QMReadedItem.addItem=function(jv)
{
if(!getMainWin().gMailItems)
{
getMainWin().gMailItems=[];
}

getMainWin().gMailItems.push(jv);
};





QMReadedItem.getItems=function()
{
return getMainWin().gMailItems||[];
};





QMReadedItem.save=function(ccH)
{
getMainWin().goReadedItemImg=ccH;
};





QMReadedItem.load=function()
{
return getMainWin().goReadedItemImg;
};





QMReadedItem.disp=function(aha)
{
if(!aha)
{
return;
}

var Mf=aha.type=="checkbox"
?aha.parentNode
:GelTags("input",aha)[0].parentNode,
eb=Mf.firstChild;

if(eb.tagName!="IMG")
{
insertHTML(
Mf,
"afterBegin",
T([
'<img src="$path$spacer.gif" width="10" height="11" class="showarrow"',
' title="\u8FD9\u662F\u60A8\u6700\u8FD1\u9605\u8BFB\u7684\u4E00\u5C01\u90AE\u4EF6" />'
]).replace(
{
path:getPath("image")
}
)
);
eb=Mf.firstChild;
}

show(this.load(),false);
show(eb,true);

this.save(eb);
};





QMReadedItem.read=function(aiz)
{
if(aiz&&aiz.tagName==="U")
{
fireMouseEvent(aiz,"click");
}
else
{
if(!this.load())
{
return false;
}

fireMouseEvent(
GelTags("table",this.load().parentNode.parentNode)[0].parentNode,
"click"
);
}

return true;
};






QMReadedItem.check=function(bQt)
{
if(!this.load())
{
return false;
}

var aHD=this.load().nextSibling;
aHD.checked=!aHD.checked;

doCheck(null,aHD,bQt);
return true;
};






QMReadedItem.move=function(bHF)
{
var bq=this.getItems(),
axH=bq.length,
ek=-1;

if(axH==0)
{
return false;
}

if(this.load()!=null)
{
var bei=QMReadedItem.load().nextSibling;

for(var i=axH-1;i>=0;i--)
{
if(bei==bq[i])
{
ek=i;
break;
}
}
}

ek+=bHF?1:-1;

if(ek>-1&&ek<axH)
{
this.disp(bq[ek]);
scrollIntoMidView(bq[ek],getMainWin().document.body,false);
return true;
}

return false;
};







function listMouseOver(ap)
{
var ao=this,
dz=ao.className;

if(dz.indexOf(" B")==-1
&&dz.indexOf(" V")==-1
&&ao.getAttribute("colorchange")!="none")
{
ao.className=dz+" V";
}


if(ap)
{
var aT=getEventTarget(ap);
while(aT&&aT!=ao&&aT.className!='tagbgSpan')
{
aT=aT.parentNode;
}
if(aT&&aT!=ao)
{
QMTag.showTagClose(aT,1);
}
}
}





function listMouseOut(ap)
{
var ao=this;
if((!ap||!isObjContainTarget(ao,ap.relatedTarget
||ap.toElement))
&&ao.className.indexOf(" V")>-1
&&ao.getAttribute("colorchange")!="none")
{
ao.className=ao.className.replace(" V","");
}


if(ap)
{

var aT=getEventTarget(ap);
while(aT&&aT!=ao&&aT.className!='tagbgSpan')
{
aT=aT.parentNode;
}
if(aT&&aT!=ao)
{
QMTag.showTagClose(aT,0);
}
}

}






function listMouseEvent(bI)
{
addEvents(bI,{
contextmenu:function(ap)
{
listContextMenu.call(bI,ap);
},
mouseover:function(ap)
{
listMouseOver.call(bI,ap);
},
mouseout:function(ap)
{
listMouseOut.call(bI,ap);
}
});
}

function listContextMenu(ap)
{
var aB=this;
allDeferOK()&&mailRightMenu(aB,ap);
preventDefault(ap);
}





function GetListMouseClick(ax)
{
return function(ap)
{
ListMouseClick(ap,ax||window);
}
}






function ListMouseClick(ap,ax)
{
var eJ,
cF=ap||ax.event;

if(!(eJ=getEventTarget(cF)))
{
return;
}


if(attr(eJ,"name")=="mailid"||(eJ.lastChild&&attr(eJ.lastChild,"name")=="mailid")||attr(eJ,"name")=="AddrID"||(eJ.lastChild&&attr(eJ.lastChild,"name")=="AddrID"))
{
if(eJ.lastChild&&(attr(eJ.lastChild,"name")=="mailid"||attr(eJ.lastChild,"name")=="AddrID"))
{
eJ.lastChild.click();
}

if(!getGlobalVarValue('TIP_46'))
{
requestShowTip('gotnomail',46,ax,function(bO,fU)
{



setGlobalVarValue('TIP_46',1);

return true;
}
);
}

return doCheck(cF);
}


if(eJ.className.indexOf("cir")==0)
{
var cEs=T([
'{',
'shiftKey:true,',
'hitmailid:"$hitmailid$"',
'}'
]).replace({
"hitmailid":eJ.getAttribute("hitmailid")||parents("td[hitmailid]",eJ)[0]||""
}),
LS=GelTags("table",eJ.parentNode.parentNode)[0]
.parentNode.onclick.toString().split("{")[1]
.split("}")[0].replace(/event/ig,cEs);

if(/\WRD/.test(LS))
{
return eval(LS);
}
else
{
LS=GelTags("table",eJ.parentNode.parentNode)[0]
.parentNode.onclick.toString().replace(/.*{/g,"")
.replace(/}.*/g,"").replace(/event/ig,"{shiftKey:true}");
return eval(LS);
}
}
}






function listInitForComm(dO,bXO)
{
var dz,
oV=GelTags("div"),
bQW=doCheck,
ZN,nM;

dz=dO?dO:"M";
for(var i=oV.length-1;i>=0;i--)
{
ZN=oV[i];

if(ZN.className!=dz)
{
continue;
}

if(dO=="ft")
{
ZN=GelTags("table",ZN)[0];
}

nM=GelTags("input",ZN)[0];
if(!nM||nM.type!="checkbox")
{
continue;
}

nM.title="\u6309\u4F4Fshift\u70B9\u51FB\u4E0D\u540C\u7684\u52FE\u9009\u6846 \u53EF\u65B9\u4FBF\u5FEB\u6377\u591A\u9009";
addEvent(nM,"click",bQW);









if(!bXO)
{
listMouseEvent(ZN);
}
}
}










function modifyFolder(ke,GJ)
{
getMainWin().location.href=T([
'/cgi-bin/foldermgr?sid=$sid$&fun=detailpop&t=pop_detail',
'&folderid=$folderid$&acctid=$acctid$'
]).replace(
{
sid:getSid(),
folderid:ke,
acctid:GJ
}
);
return false;
}







function recvPopHidden(ke)
{
getMainWin().setTimeout(
function()
{
if(!ke)
{
getTop().reloadFrmLeftMain(false,true);
}
else
{
var aX="iframeRecvPopHidden";
createBlankIframe(getMainWin(),{id:aX});

var aY=["/cgi-bin/mail_list?sid=",getSid(),"&folderid=",
ke,"&t=recv_pop_hidden"].join("");
try
{
F(aX,getMainWin()).location.replace(aY);
}
catch(bj)
{
S(aX,getMainWin()).src=aY;
}
}
},
10000
);
}






function recvPop(GJ,ke,dC)
{
recvPopCreat(GJ,ke);
if(S("tips",dC))
{
S("tips",dC).innerHTML=T(
[
'<img src="$images_path$ico_loading3104474.gif" align=absmiddle>',
' \u6B63\u5728\u6536\u53D6...&nbsp;\u7CFB\u7EDF\u5C06\u5728\u540E\u53F0\u81EA\u52A8\u6536\u53D6\uFF0C\u60A8\u53EF\u4EE5\u79BB\u5F00\u6B64\u9875\u9762\uFF0C\u7A0D\u540E\u56DE\u6765\u67E5\u770B\u6536\u53D6\u7ED3\u679C\u3002'
]
).replace(
{
images_path:getPath("image",true)
}
);
}


recvPopHidden(ke);
}





function recvPopCreat(GJ)
{
getActionWin().location=["/cgi-bin/foldermgr?sid=",getSid(),
"&fun=recvpop&acctid=",GJ].join("");
}




function recvPopAll()
{
getActionWin().location=["/cgi-bin/foldermgr?sid=",getSid(),
"&fun=recvpopall"].join("");
try
{

setTimeout(
function()
{
reloadFrmLeftMain(false,true);
},
3000
);
}
catch(bj)
{
}
return false;
}









function setPopFlag(GJ,nd,cf)
{
if(nd=="recent")
{
setPopRecentFlag(GJ,cf);
}
}






function setPopRecentFlag(GJ,cf)
{
runUrlWithSid(["/cgi-bin/foldermgr?sid=",getSid(),
"&fun=pop_setting&acctid=",GJ,"&recentflag=",cf].join(""));
}







function checkPopMailShow(mB)
{
var bjl=["@yahoo.com.cn","@sina.com","@tom.com","@gmail.com"],
bWr=mB.toLowerCase();

for(var i=0;i<bjl.length;i++)
{
if(bWr.indexOf(bjl[i])>=0)
{
return true;
}
}

return false;
}









function setBeforeUnloadCheck(ax,cT,rj,cde,
gn)
{
var aLJ=["input","select","textarea"];

ax=ax||window;
gn=gn?(typeof(gn)=="string"
?S(gn,ax)
:gn):ax.document;
ax.gbIsBeforeUnloadCheck=true;

E(aLJ,
function(kT)
{
var bYQ=ax[kT+"_save"]=[];

E(GelTags(kT,gn),
function(bI,dT)
{
bYQ.push(bI.value+bI.checked);
bI.setAttribute("saveid",dT);
}
);
}
);

if(!ax.onsetbeforeunloadcheck)
{
ax.onsetbeforeunloadcheck=function()
{
if(ax.gbIsBeforeUnloadCheck)
{
for(var i=0,aK=aLJ.length;i<aK;i++)
{
var xz=aLJ[i],
bd=xz+"_save",
agx=GelTags(xz,gn);

for(var j=0,jlen=agx.length;j<jlen;j++)
{
var bdG=agx[j].getAttribute("saveid");
if(bdG!=null&&agx[j].getAttribute("nocheck")!="true"&&ax[bd][bdG]
!=(agx[j].value+agx[j].checked))
{
return cT?cT:"\u60A8\u4FEE\u6539\u7684\u8BBE\u7F6E\u5C1A\u672A\u4FDD\u5B58\uFF0C\u786E\u5B9A\u8981\u79BB\u5F00\u5417\uFF1F";
}
}
}
}
};

gbIsIE?(ax.document.body.onbeforeunload=ax.onsetbeforeunloadcheck)
:ax.document.body.setAttribute("onbeforeunload","return onsetbeforeunloadcheck();");
}

E(cde||["cancel"],
function(aHy)
{
addEvent(
typeof(aHy)=="string"
?S(aHy,ax):aHy,
"mousedown",
function()
{
ax.gbIsBeforeUnloadCheck=false;
}
);
}
);

E(GelTags("form",ax.document),
function(nj)
{
addEvent(nj,"submit",
function()
{
ax.gbIsBeforeUnloadCheck=false;
}
);

if(!nj.Qw)
{
nj.Qw=nj.submit;
nj.submit=function()
{
ax.gbIsBeforeUnloadCheck=false;
this.Qw();
};
}
}
);
}









function popErrProcess(cT,abQ,ase,Gp,bRG,bjR)
{
if(cT!=null)
{
msgBox(cT,abQ,ase,Gp);
}

if(bjR!=null)
{
getMainWin().ShowPopErr(bjR,bRG);
}

showSubmitBtn();
}




function showSubmitBtn()
{
var Pp=S("submitbtn",getMainWin());

if(Pp)
{
Pp.disabled=false;
}
}




function showPopSvr()
{
show(S("popsvrTR",getMainWin()),true);
}





function setTaskId(Aq)
{
try
{
getMainWin().document.checkFrom.taskid.value=Aq;
}
catch(bj)
{
}
}








function showQuickReply(lV)
{
show(S('quickreply',getMainWin()),lV);
show(S('upreply',getMainWin()),!lV);
runUrlWithSid("/cgi-bin/getcomposedata?Fun=setshowquickreply&isShowQuickReply="
+(lV?0:1));
}




function hiddenReceipt(ax)
{
show(S("receiptDiv",ax),false);
}





function switchOption(dC)
{
var aO=[
[
"<span class='qm_ico_quickup' alt='\u663E\u793A\u66F4\u591A' title='\u9690\u85CF'></span>",true],

[
"<span class='qm_ico_quickdown' alt='\u663E\u793A\u66F4\u591A' id='display_more_operator'></span>",false]

][
S("trOption",dC).style.display=="none"?0:1
];
S("aSwitchOption",dC).innerHTML=aO[0];
show(S("trOption",dC),aO[1]);
}






function checkPerDel(ax)
{


delMail("PerDel",ax);

}






function delMail(aiG,ax)
{
rmMail(aiG=="PerDel"?1:0,ax.QMReadMail.getCBInfo(ax));
}








function setMailType(aC,Im,MV,dC)
{
var gK=S("mail_frm",dC);

gK.s.value=["readmail_",
Im?(MV?"group":aC):("not"+aC),
getMainWin().newwinflag?"_newwin":""].join("");
gK.action="/cgi-bin/mail_mgr?sid="+getSid();
gK.mailaction.value="mail_spam";
gK.isspam.value=Im;
gK.reporttype.value=aC=="cheat"?"1":"";

submitToActionFrm(gK);
}



function getAddrSub(addr)
{
var cs=addr.indexOf("@");
if(cs>-1)
{
var addrName=addr.substr(0,cs);
var addrDom=addr.substr(cs);
return subAsiiStr(addrName,18,'...')+subAsiiStr(addrDom,18,'...');
}
else
{
debug("name+dom"+addr);
return subAsiiStr(addr,36,'...');
}
}

function getRefuseText(Gq)
{
var aJE=T([
'<input type="checkbox" name="$TNAME$" id="$TID$" $TCHECK$>\u5C06<label for="$TID$">$TVALUE$</label>\u52A0\u5165\u9ED1\u540D\u5355'
]);
var i;
var retstr="";
var br="";
for(i in Gq)
{
var tagname="refuse";
if(i>0){
tagname="refuse"+i;
br="<br>"
}
var addrlabel;
if(Gq[i]!="\u53D1\u4EF6\u4EBA")
addrlabel="&lt;"+getAddrSub(Gq[i])+"&gt;";
else
addrlabel=Gq[i];
var ischecked="";
debug("ITEM: "+Gq[i]);
retstr+=br+aJE.replace({
TNAME:tagname,
TID:tagname,
TVALUE:addrlabel,
TCHECK:ischecked
});
}
debug("RET Text"+retstr);
return retstr;
}










function reportSpam(asN,aKB,ax,CJ,CB)
{
debug("Enter mail.js reportSpam "+asN);
var aI=ax||(window==getTopWin()?getMainWin():window);
if(!S("mail_frm",aI))
{
debug("enter from maillist");

var jD=QMMailList.getCBInfo(aI),
bE,
bdZ=0,
cQ=jD.oMail.length,
qe={};
if(cQ==0)
{
showError(gsMsgNoMail);
return false;
}
for(var aV=0;aV<cQ;aV++)
{

bE=jD.oMail[aV];
if(bE.bSys)
{





}
bdZ+=bE.bDft?1:0;
if(bE.sSEmail.indexOf("@groupmail.qq.com")!=-1)
{

asN=true;
}else if(bE.sSEmail.indexOf("10000@qq.com")!=-1){

asN=true;
}
if(typeof qe.sender=="undefined")
{
qe.sender=bE.sSEmail;
qe.nickname=bE.sSName;
}else if(qe.sender!=bE.sSEmail)
{
qe.sender="";
}
}
if(bdZ==cQ)
{

CJ=1;
}
else
{

for(aV=0;aV<cQ;aV++)
{
bE=jD.oMail[aV];




}
jD=QMMailList.getCBInfo(aI);
QMMailList.selectedUI(jD);
}
}

var HV=new Array();
HV[0]="\u53D1\u4EF6\u4EBA";

if(qe&&qe.sender&&qe.sender.indexOf(',')<0)
{
HV[0]=qe.sender;
}

var agD=0;
if(CB)
{
if(CB[0].length>0)HV[agD++]=CB[0];
if(CB[1])HV[agD++]=CB[1];
}
var abU=T([
'<div>',
'<input type="radio" name="reporttype" id="r$value$" value="$value$" $checked$>',
'<label for="r$value$">$content$</label>',
'</div>'
]);
var cV=(CJ!==1?[
"<div style='padding:10px 10px 0 25px;text-align:left;'>",
"<form id='frm_spamtype'>",
"<div style='margin:3px 0 3px 3px'><b>\u8BF7\u9009\u62E9\u8981\u4E3E\u62A5\u7684\u5783\u573E\u7C7B\u578B\uFF1A</b></div>",
abU.replace({
value:(aKB?11:8),
checked:"checked",
content:"\u5176\u4ED6\u90AE\u4EF6"
}),

abU.replace({
value:(aKB?10:4),
checked:"",
content:"\u5E7F\u544A\u90AE\u4EF6"
}),

abU.replace({
value:(aKB?9:1),
checked:"",
content:"\u6B3A\u8BC8\u90AE\u4EF6"
}),
"<div style=\"padding:5px 0 2px 0;\">",
(asN
?"&nbsp;"
:getRefuseText(HV)),"</div><div style='margin:10px 3px 0px 3px' class='addrtitle' >\u6E29\u99A8\u63D0\u793A\uFF1A\u6211\u4EEC\u5C06\u4F18\u5148\u91C7\u7EB3\u51C6\u786E\u5206\u7C7B\u7684\u4E3E\u62A5\u90AE\u4EF6\u3002</div>","</form>",
"</div><div style='padding:3px 15px 12px 10px;text-align:right;'>",
"<input type=button id='btn_ok' class='btn wd2' value=\u786E\u5B9A>",
"<input type=button id='btn_cancel' class='btn wd2' value=\u53D6\u6D88>",
"</div>"
]:[
"<div class='cnfx_content'>",
"<img style='float:left; margin:5px 10px 0;' src='",getPath("image"),"ico_question.gif' />",
"<div class='b_size' style='padding:10px 10px 0 0;margin-left:65px;line-height:1.5;height:80px;text-align:left;'>",
"<form id='frm_spamtype'>",
"<strong>\u60A8\u8981\u4E3E\u62A5\u8FD9\u4E2A\u6F02\u6D41\u74F6\u5417\uFF1F</strong><br>",
"<div style=\"display:none\">",
abU.replace({
value:8,
checked:"checked",
content:""
}),
"</div>",
"\u4E3E\u62A5\u4EE5\u540E\uFF0C\u60A8\u5C06\u4E0D\u518D\u6536\u5230\u8FD9\u4E2A\u6F02\u6D41\u74F6\u7684\u56DE\u5E94\u3002","</form>",
"</div></div><div class='cnfx_btn'>",
"<input type=button id='btn_ok' class='btn wd2' value=\u786E\u5B9A>",
"<input type=button id='btn_cancel' class='btn wd2' style='margin-left:5px' value=\u53D6\u6D88>",
"</div>"
]).join("");

new(getTop().QMDialog)({
sId:"reportSpam",
sTitle:CJ===1?"\u7838\u6389\u8FD9\u4E2A\u74F6\u5B50":"\u4E3E\u62A5\u5E76\u62D2\u6536\u9009\u4E2D\u90AE\u4EF6",
sBodyHtml:cV,
nWidth:450,
nHeight:CJ===1?150:220,
onload:function(){
var cJ=this;
addEvent(cJ.S("btn_ok"),"click",function()
{
var gK=S("mail_frm",getMainWin())||S("frm",getMainWin());
if(!gK)
{
return;
}
gK.s.value="readmail_spam";
gK.isspam.value='true';
gK.mailaction.value="mail_spam";
gK.action='/cgi-bin/mail_mgr?sid='+getTop().getSid();

var akc=cJ.S("frm_spamtype").reporttype,
Pz=cJ.S("frm_spamtype").refuse,
WJ=cJ.S("frm_spamtype").refuse1;
for(var i=0,aK=akc.length;i<aK;i++)
{
if(akc[i].checked)
{
gK.reporttype.value=akc[i].value;
break;
}
}
var wV=new Array();
wV[0]="0";
wV[1]="0";
if((Pz&&Pz.checked)||
(WJ&&WJ.checked))
{
gK.s.value="readmail_reject";
}

if(WJ)
{
wV[0]=Pz&&Pz.checked?"1":"0";
wV[1]=WJ.checked?"1":"0";
}
else 
{
wV[0]="1";
wV[1]="1";
}

if(gK.s_reject_what){
gK.s_reject_what.value=wV[0]+wV[1];
debug("Reject method "+gK.s_reject_what.value);
}

submitToActionFrm(gK);
cJ.close();
});
addEvent(cJ.S("btn_cancel"),"click",function(){cJ.close()});

},
onshow:function()
{
this.S("btn_cancel").focus();
}
});

return false;
}









function setSpamMail(Im,MV,dC)
{
var bgZ=dC||(window==getTopWin()?getMainWin():window);
if(Im&&!MV)
{
return reportSpam(null,null,bgZ);
}
setMailType("spam",Im,MV,bgZ);
}






function setCheatMail(Im,MV)
{
setMailType("cheat",Im,MV);
}






function doReject(Im,MV,dC,hS,cT)
{
var bsA="";
if(hS){
bsA=htmlEncode("<"+hS+">");
}

var gK=S("mail_frm",dC);
if(gK.s_reject_what)
{
gK.s_reject_what.value="10";
}





confirmBox(
{
title:"\u62D2\u6536\u786E\u8BA4",
msg:cT||"\u62D2\u6536\u540E\u60A8\u5C06\u4E0D\u518D\u6536\u5230\u6765\u81EA\u6B64\u5730\u5740\u7684\u90AE\u4EF6\uFF0C\u786E\u8BA4\u62D2\u6536\u5417\uFF1F",
confirmBtnTxt:"\u62D2\u6536",
cancelBtnTxt:"\u53D6\u6D88",
confirmClass:"btn_blue",
onreturn:function(bh)
{
if(bh)
{
setMailType("reject",Im,MV,dC);
}
}
});
}




function setFolderReaded(fe,sJ,cww,nd)
{

var bsg=fe=="all"?parseInt(cww||"0"):(sJ?getGroupUnread(sJ):getFolderUnread(fe));
if(bsg<1)
{
return showError("\u6587\u4EF6\u5939\u5185\u6CA1\u6709\u672A\u8BFB\u90AE\u4EF6");
}

var iU=getSid(),
bgn=unikey("allread"),
bxj=function()
{
QMAjax.send("/cgi-bin/mail_mgr?mailaction=read_all&t=unreadmail_reg_data&loc=setFolderUnread,,,32",
{
method:"POST",
content:T('sid=$sid$&folderid=$folderid$&groupid=$groupid$$flags$').replace(
{
sid:iU,
folderid:fe!="all"?fe:"1&folderid=3&folderid=8&folderid=9&folderid=11&folderid=personal&folderid=pop&folderid=subscribe",
groupid:sJ,
flags:nd?nd:""
}
),
onload:function(bh,bO)
{
if(bh&&bO.indexOf("mark_allmail_ok")>-1)
{
var gh="\u6587\u4EF6\u5939\u6807\u4E3A\u5DF2\u8BFB\u64CD\u4F5C"
reloadFrmLeftMain(true,!!getMainWin()[bgn]);
showInfo(gh+"\u6210\u529F");
var aO=eval(bO);
setRollBack(aO.rbkey,gh);

QMMLCache.upVer();
}
else
{
showError("\u6587\u4EF6\u5939\u6807\u4E3A\u5DF2\u8BFB\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
}
}
});
};
getMainWin()[bgn]=1;


bxj();












































}

function dateMaker(Gx,bI)
{

var ci=Gx,

fl=/(?!0000)[0-9]{4}([-/]{1})((0?[1-9]|1[0-2])([-/]{1})(0[1-9]|1[0-9]|2[0-8])|(0?[13-9]|1[0-2])([-/]{1})(29|30)|(0?[13578]|1[02])([-/]{1})31)|(?!0000)[0-9]{4}([-/\u5E74]{1})((0?[1-9]|1[0-2])\u6708(0?[1-9]|1[0-9]|2[0-8])\u65E5|(0?[13-9]|1[0-2])\u6708(29|30)\u65E5|(0?[13578]|1[02])\u670831\u65E5)|(?!\u5E74)((0?[1-9]|1[0-2])\u6708(0?[1-9]|1[0-9]|2[0-8])\u65E5|(0?[13-9]|1[0-2])\u6708(29|30)\u65E5|(0?[13578]|1[02])\u670831\u65E5)|(?![/-])((0[1-9]|1[0-2])([-/]{1})(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])([-/]{1})(29|30)|(0[13578]|1[02])([-/]{1})31)/g;


return ci.replace(fl,function()
{
var cA=bI.parentNode.firstChild,
gf=cA.innerText||cA.textContent||cA.nodeValue||"";
if(gf.charAt(gf.length-1)!=":")
{
var kY=ci.substring(arguments[arguments.length-2]+arguments[0].length,arguments[arguments.length-2]+arguments[0].length+6);
!kY.match(/\s?\d\d:\d\d/g)&&(kY="");
return"<span style='border-bottom:1px dashed #ccc;' t='5' times='"+kY+

"' >"+arguments[0]+"</span>";
}
else
{
return arguments[0];
}
});
}

function addContentMouseEvent(bI)
{
if(!bI)
{
return;
}
else
{
addEvents(bI,
{
mouseover:function(ap)
{
var aT=getEventTarget(ap);
if(attr(aT,"t")=="5")
{
getTop().getMainWin().QMReadMail.addCalEvent(aT,ap);
}
},
mouseout:function(ap)
{
var aT=getEventTarget(ap);
if(attr(aT,"t")=="5")
{
getTop().getMainWin().QMReadMail.hideCalEvent(aT,ap);
}

}
});
}
}







function linkMaker(Of)
{

var emD="([a-z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:[A-Z0-9-]+\\.)+[A-Z]{2,4})",































esF=[
'(',
'(?:https?:\\/\\/|www\d{0,3}[.]|[a-z0-9.\\-]+[.][a-z]{2,4}\\/)',
'(?:',
'[^\\s`!()\uFF08\uFF09\\[\\]{};\'"<>\u201C\u201D\u2018\u2019\u3002\uFF0C\uFF1B]+',
'|',
'([(\uFF08][^\\s()\uFF08\uFF09<>]+[)\uFF09])',
'|',
'([(\uFF08][^\\s()\uFF08\uFF09<>]*?[(\uFF08][^\\s()\uFF08\uFF09<>]*?[)\uFF09][)\uFF09])',
')+',
'(?:',
'([(\uFF08][^\\s()\uFF08\uFF09<>]+[)\uFF09])',
'|',
'([(\uFF08][^\\s()\uFF08\uFF09<>]*?[(\uFF08][^\\s()\uFF08\uFF09<>]*?[)\uFF09][)\uFF09])',
'|',
'[^\\s`!()\uFF08\uFF09\\[\\]{};:\'".,<>?\u201C\u201D\u2018\u2019\u3002\uFF0C\uFF1B]',
')',
')'
].join("");
function aWQ(bR)
{

var iD=12,
gf=bR||"",
bP=[],
aK=gf.length/iD;

for(var i=0;i<aK;i++)
{
bP[i]=gf.substr(i*iD,iD);
}

return bP.join("<wbr>");
}

return Of.replace(
new RegExp([esF,emD].join("|"),"ig"),
function(aFj,ceb,bkY,ggD,ggC)
{
var cxu;
if(!ceb)
{
cxu=aFj;
}
else
{
cxu=aFj.indexOf("http")!=0?"http://"+aFj:aFj;
}



return['<a href="',!ceb?'mailto:':'',cxu,'">',
aWQ(aFj),'</a>'].join("");
}
);
}





function linkIdentify(bI)
{
if(!bI||bI.tagName=="A"||bI.tagName=="SCRIPT"
||bI.tagName=="STYLE"||bI.className=="qqmailbgattach")
{
return;
}

for(var cA=bI.firstChild,nextNode;cA;cA=nextNode)
{
nextNode=cA.nextSibling;
linkIdentify(cA);
}

if(bI.nodeType==3)
{
var gf=bI.nodeValue.replace(/</g,"&lt;").replace(/>/g,"&gt;"),
iS=linkMaker(gf);

if(gf!=iS)
{
var jI=false;

if(bI.previousSibling)
{
jI=insertHTML(bI.previousSibling,"afterEnd",iS);
}
else
{
jI=insertHTML(bI.parentNode,"afterBegin",iS);
}

if(jI)
{
removeSelf(bI);
}
}
else if(gf!=(iS=dateMaker(gf,bI)))
{
var jI=false;

if(bI.previousSibling)
{
jI=insertHTML(bI.previousSibling,"afterEnd",iS);
}
else
{
jI=insertHTML(bI.parentNode,"afterBegin",iS);
}

if(jI)
{
removeSelf(bI);
}
}
}
}







function isLinkNeedSwap(aw)
{
var fi=aw.href||"",
eU=aw.ownerDocument,
jZ=(eU.parentWindow||eU.defaultView).location;





return!aw.onclick&&fi&&fi.indexOf("javascript:")!=0&&fi.indexOf("#")!=0;




}







function swapLink(aM,OL,dC)
{
var dK=aM.ownerDocument?aM:S(aM,dC);
if(dK)
{
function aWw(azZ)
{

if(isLinkNeedSwap(azZ))
{

azZ.target="_blank";
azZ.onclick=function()
{
return bdn.call(this,OL);
};
}
else
{
}
azZ=null;
}
linkIdentify(dK);
addContentMouseEvent(dK);
E(GelTags("a",dK),aWw);
E(GelTags("area",dK),aWw);
E(GelTags("form",dK),function(bth)
{
bth.onsubmit=function()
{
var jZ=dC.location;

if(jZ.getParams()["filterflag"]=="true"||this.action)
{
this.target="_blank";
return true;
}

showError(T(['\u51FA\u4E8E\u5B89\u5168\u8003\u8651\u8BE5\u64CD\u4F5C\u5DF2\u88AB\u5C4F\u853D [<a onclick="',
'setTimeout( function() {',
'goUrlMainFrm(\x27$url$&filterflag=true\x27);',
'showInfo(\x27\u53D6\u6D88\u5C4F\u853D\u6210\u529F\x27);','});',
'" style="color:white;" >\u53D6\u6D88\u5C4F\u853D</a>]']).replace({url:jZ.pathname+jZ.search}));

return false;
};
bth=null;
}
);
}
dK=null;
}






function preSwapLink(ap,OL)
{
var aT=getEventTarget(ap);
if(aT
&&{"A":1,"AREA":1}[aT.tagName]
&&isLinkNeedSwap(aT))
{
bdn.call(aT,OL)&&window.open(aT.href);
preventDefault(ap);
}
}








function swapImg(aM,dLI,OL,ax)
{














































































}




function openSpam(ax)
{
ax=ax||window;
if(true||confirm("\u6B64\u90AE\u4EF6\u7684\u56FE\u7247\u53EF\u80FD\u5305\u542B\u4E0D\u5B89\u5168\u4FE1\u606F\uFF0C\u662F\u5426\u67E5\u770B\uFF1F"))
{
ax.location.replace(appendToUrl(ax.location.href,"&disptype=html&dispimg=1&clickshowimage=1"));
}
}




function openHttpsMail(ax)
{
ax.location.replace(appendToUrl(ax.location.href,"&dispimg=1"));
}






function copyToClipboard(gB,eU)
{
try
{
var aU=eU||document;
if(gbIsFF)
{
netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
Components.classes["@mozilla.org/widget/clipboardhelper;1"].getService(Components.interfaces.nsIClipboardHelper).copyString(gB);
}
else
{

var PY=S("copyinputcontainer");
if(!PY)
{
insertHTML(aU.body,"beforeEnd",'<input id="copyinputcontainer" style="position:absolute;top:-1000px;left:-1000px;"/>');
PY=S("copyinputcontainer");
}
PY.value=gB;
PY.select();
aU.execCommand('Copy');
}
}
catch(e)
{
alert(T('\u60A8\u7684\u6D4F\u89C8\u5668\u5B89\u5168\u8BBE\u7F6E\u4E0D\u5141\u8BB8\u7F16\u8F91\u5668\u81EA\u52A8\u6267\u884C\u590D\u5236\u64CD\u4F5C\uFF0C\u8BF7\u4F7F\u7528\u952E\u76D8\u5FEB\u6377\u952E($cmd$+C)\u6765\u5B8C\u6210\u3002').replace({cmd:gbIsMac?"Command":"Ctrl"}));
return false;
}
return true;
}






function bdn(OL)
{
var gg=this;

if(gg.href.indexOf("mailto:")==0&&gg.href.indexOf("@")!=-1)
{
window.open(["/cgi-bin/readtemplate?sid=",getSid(),
"&t=compose&s=cliwrite&newwin=true&email=",
gg.href.split("mailto:")[1]].join(""));
return false;
}
else if(gg.className=="qqmail_card_reply"
||gg.className=="qqmail_card_reply_btn"
||gg.className=="qqmail_birthcard_reply"
||gg.className=="qqmail_birthcard_reply_btn")
{






var gk=gg.name,
dz=gg.className,
aWI=!!gk,
bZg=dz.indexOf("birthcard")!=-1;

getMainWin().location=T('/cgi-bin/cardlist?sid=$sid$&t=$t$&s=$s$&today_tips=$tips$&loc=readmail,readmail,sendnewcard,1&ListType=$listtype$&email=$email$$newwin$').replace(
{
sid:getSid(),
t:aWI?"compose_card":"card",
s:bZg?"replybirthcard":"",
tips:dz.indexOf("btn")!=-1?"112":"111",
listtype:aWI?"No":"Cards&Cate1Idx=listall",
email:gk,
newwin:getTop().bnewwin?"&newwin=true":""
});
return false;
}
else if(gg.className=="qqmail_postcard_reply_mobile")
{
var zm=getMainWin().QMReadMail;
if(zm)
{
getMainWin().location=T("/cgi-bin/readmail?sid=$sid$&mailid=$mailid$&t=compose&s=reply&disptype=html").replace(
{
sid:getSid(),
mailid:zm.getMailId()
})
}
return false;
}
else if(gg.className=="qqmail_postcard_sendhelp_mobile")
{
window.open("http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=36&&no=1000696");
return false;
}
else if(gg.className=="qqmail_card_reply_thanksbtn"
||gg.className=="qqmail_card_reply_thanks"
||gg.className=="qqmail_birthcard_reply_thanksbtn")
{
var gk=gg.name;

openComposeDlg("card",{
sTitle:"\u7B54\u8C22\u597D\u53CB",
sDefAddrs:gk,
bAddrEdit:true,
nWidth:495,
sDefContent:"\u8C22\u8C22\u4F60\u7684\u8D3A\u5361\uFF01 \u4EE5\u540E\u8981\u5E38\u8054\u7CFB\u54E6\u3002",
bContentEdit:true,
sDefSubject:"\u8C22\u8C22\u4F60\u7684\u8D3A\u5361!",
bRichEditor:false,
oncomplete:function(){},

bShowResult:true
});
return false;
}












else if(gg.className=="qqmail_postcard_reply")
{
goUrlMainFrm(
T('/cgi-bin/readtemplate?sid=$sid$&t=compose_postcard&email=$email$'
).replace({
sid:getSid(),
email:gg.name
}),false
);
return false;
}
else if(gg.className=="qqmail_postcard_reply2")
{
var aVJ='',
aHa='',
zm=getMainWin().QMReadMail;
if(zm)
{
try
{
var Sk=(zm.getSubMailWithDom?zm.getSubMailWithDom(gg):zm.getMailInfo()).from;
aVJ=Sk&&Sk.name||'';
aHa=Sk&&Sk.addr||'';
}
catch(e)
{
}
}
goUrlMainFrm(
T('/cgi-bin/readtemplate?sid=$sid$&t=compose_postcard&email=$email$&reply=1&frname=$name$&fraddr=$addr$'
).replace({
name:escape(aVJ),
addr:escape(aHa),
sid:getSid(),
email:gg.name
}),false
);
return false;
}












else if(gg.className=="qqmail_postcard_print")
{
var zm=getMainWin().QMReadMail;
if(zm)
{
window.open(T('/cgi-bin/readmail?sid=$sid$&t=print_haagendazs&s=print&filterflag=true&mailid=$mailid$').replace(
{
sid:getSid(),
mailid:zm.getMailId()
})
);
}
return false;
}
else if(gg.className=="qqmail_postcard_getmoreinfo")
{
var zm=getMainWin().QMReadMail;
if(zm)
{
window.open(T('/cgi-bin/today?t=haagendazs2010&sid=$sid$').replace(
{
sid:getSid(),
mailid:zm.getMailId()
})
);
}
return false;
}
else if(gg.className=="qqmail_videomail_reply")
{
goUrlMainFrm(
T('/cgi-bin/readtemplate?sid=$sid$&t=compose_video&email=$email$'
).replace({
sid:getSid(),
email:gg.name
}),false
);
return false;
}
else if(gg.className=="groupmail_open")
{
getMainWin().location=["/cgi-bin/grouplist?sid=",getSid(),
"&t=compose_group",(getTop().bnewwin?"&newwin=true":"")].join("");
return false;
}
else if(gg.className=="reg_alias")
{
getMainWin().location=[
"/cgi-bin/readtemplate?reg_step=1&t=regalias_announce&sid=",
getSid()].join("");
return false;
}

else if(gg.className=="mergemail_reader_article_list_link")
{
var bQQ=gg.getAttribute("ctype");
var aKv=gg.getAttribute("param_new");
var aY="";


if(aKv.indexOf("follow=1")>=0)
{
var bXD=gg.getAttribute("followuin");
aY=(getTop().gsRssDomain||"")+"/cgi-bin/reader_mgr";
QMAjax.send(aY,
{
method:"POST",
content:"fun=followshare&followuin="+bXD+"&sid="+getSid(),
onload:function(bh,cNy)
{
if(bh)
{

getMainWin().location=T('$host$/cgi-bin/reader_article_list?sid=$sid$&$param$'
).replace({
host:(getTop().gsRssDomain||""),
sid:getSid(),
param:aKv
});
}
}
});
}

else
{
getMainWin().location=T('$host$/cgi-bin/reader_article_list?sid=$sid$&$param$'
).replace({
host:(getTop().gsRssDomain||""),
sid:getSid(),
param:aKv
});
}


if(bQQ=="onefeed")
{
aY=(getTop().gsRssDomain||"")+"/cgi-bin/reader_mgr?fun=setlog&flag=3&from=2";
}
else
{
aY=(getTop().gsRssDomain||"")+"/cgi-bin/reader_mgr?fun=setlog&flag=3&from=4";
}
runUrlWithSid(aY);

return false;
}
else if(gg.className=="mergemail_reader_setting_link")
{

getMainWin().location=T('$host$/cgi-bin/reader_setting?t=rss_setting_notify&sid=$sid$&$param$'
).replace({
host:(getTop().gsRssDomain||""),
sid:getSid(),
param:gg.getAttribute("param")
});


var aY=(getTop().gsRssDomain||"")+"/cgi-bin/reader_mgr?fun=setlog&flag=3&from=3";
runUrlWithSid(aY);
return false;
}
else if(gg.className=="reader_article_list_link")
{

getMainWin().location=T('$host$/cgi-bin/reader_article_list?sid=$sid$&$param$').replace(
{
host:(getTop().gsRssDomain||""),
sid:getSid(),
param:gg.getAttribute("param")
}
);

return false;
}

else if(gg.className=="reader_detail_qqmail_link")
{
var cC=[];

E(gg.getAttribute("param").split("&"),function(bO)
{
if(bO.indexOf("share=1")<0)
{
cC.push(bO);
}
}
);

getMainWin().location=T('$host$/cgi-bin/reader_detail?sid=$sid$&$param$'
).replace({
host:(getTop().gsRssDomain||""),
sid:getSid(),
param:cC.join("&")
});
return false;
}
else if(gg.className=="reader_list_qqmail_link")
{
var cC=[];

E(gg.getAttribute("param").split("&"),function(bO)
{
cC.push(bO);
}
);
getMainWin().location=T('$host$/cgi-bin/reader_list?classtype=allfriend&refresh=1&share=1&sid=$sid$&$param$'
).replace({
host:(getTop().gsRssDomain||""),
sid:getSid(),
param:cC.join("&")
});
return false;
}
else if(gg.className=="reader_catalog_list_qqmail_link")
{
var cC=[];

E(gg.getAttribute("param").split("&"),function(bO)
{
cC.push(bO);
}
);

getMainWin().location=T('$host$/cgi-bin/reader_catalog_list?sid=$sid$&classtype=share&share=1&refresh=1&$param$'
).replace({
host:(getTop().gsRssDomain||""),
sid:getSid(),
param:cC.join("&")
});
return false;
}
else if(gg.className=="ftn_groupshare_enter_link")
{
getMainWin().location.href=T(
'/cgi-bin/ftnExs_files?listtype=group&s=group&t=exs_ftn_files&sid=$sid$'
).replace({sid:getSid()});
return false;
}
else if(gg.className=="book_article_list_link")
{

getMainWin().location=T('/cgi-bin/setting10?sid=$sid$&$param$').replace(
{
sid:getSid(),
param:gg.getAttribute("param")
}
);

return false;
}



if(1)
{

if(gg.href.indexOf("javascript:void(0)")>=0)
{

return false;
}
if(OL!="preview"&&getMainWin().location.href.indexOf('/cgi-bin/readmail?')<0)
{
return true;
}

var nK=gg.parentNode;
while(nK)
{
if(nK.nodeType==1&&(nK.id=="QQmailNormalAtt"||nK.id=="attachment"))
{
return true;
}
nK=nK.parentNode;
}

window.open(T('/cgi-bin/mail_spam?action=check_link&url=$url$&mailid=$mid$&spam=$spam$').replace(
{
mid:getMainWin().location.getParams()['mailid'],
spam:OL=="spam"?1:0,
url:encodeURI(gg.href)
}
),"_blank");
return false;
}

var gf="http://mail.qq.com/cgi-bin/feed?u=";
if(gg.name=="_QQMAIL_QZONESIGN_"||gg.href.indexOf(gf)==0)
{
if(gg.name=="_QQMAIL_QZONESIGN_")
{
var bVo=gg.href.split("/"),
tj=parseInt(bVo[2]),
bJ=[
"&sid=",
getSid(),
"&u=http%3A%2F%2Ffeeds.qzone.qq.com%2Fcgi-bin%2Fcgi_rss_out%3Fuin%3D",
tj
].join("");
}
else
{
var bgq=gg.href.substr(gf.length);
if(bgq.indexOf("http%3A%2F%2F")==0
||bgq.indexOf("https%3A%2F%2F")==0)
{
var bJ=["&sid=",getSid(),"&u=",gg.href.substr(gf.length)]
.join("");
}
else
{
var bJ=["&sid=",getSid(),"&u=",
encodeURIComponent(gg.href.substr(gf.length))].join("");
}
}
if(getTop().bnewwin)
{
goUrlTopWin(["/cgi-bin/frame_html?target=feed",bJ].join(""));
}
else
{
goUrlMainFrm(["/cgi-bin/feed?",bJ].join(""),false);
}
return false;
}
else if(gg.name=="QmRsSRecomMand")
{
getMainWin().location=T("$host$/cgi-bin/reader_detail?vs=1&feedid=$feedid$&itemid=$itemid$&t=compose&s=content&mailfmt=1&sid=$sid$&newwin=$isnewwin$&tmpltype=recommend&loc=reader_detail,rss_recommend,,2").replace({
host:(getTop().gsRssDomain||""),
feedid:gg.getAttribute("feedid"),
itemid:gg.getAttribute("itemid"),
sid:getSid(),
isnewwin:!!getTop().bnewwin
});
return false;
}

return true;
}





function goPrevOrNextMail(aLq)
{
var dK,
cI=getMainWin();

if(!!(dK=S(["prevmail","nextmail"][aLq?1:0],cI))
&&!dK.getAttribute("disabled"))
{

}
else if(!!(dK=S(["prevpage","nextpage","prevpage1","nextpage1"][aLq?1:0],cI))
&&!dK.getAttribute("disabled"))
{
cI.location=dK.href;
}
}





function goBackHistory()
{
var Hk=SN("readmailBack",getMainWin());
if(Hk.length>0&&isShow(Hk[0]))
{
fireMouseEvent(Hk[0],"click");
return true;
}
return false;
}





var QMMLCache={
ash:"maillist",
dCo:3600*2,
aPN:1,

useCache:function()
{
return!!this.aPN;
},
init:function(ay)
{
var aS=ay||{};
this.aPN=aS.bUseCache;

if(this.aPN)
{
var bWR=function(acj)
{
try
{
if(getMainWin().exitConfirm)
{
return getMainWin().exitConfirm(acj);
}
}
catch(e)
{
debug(e.message);
}
acj();
};
addEvent(S("navMidBar"),"mousedown",function(cO)
{
var oy=cO||getTop().event,
aB=getEventTarget(oy),
cfJ=parents("a",aB),
Ja=parents("li",aB)[0];


if(gnIEDocTypeVer==0||gnIEDocTypeVer>=9)
{
if(oy.button!=0)
{
return;
}
}

else
{
if(oy.button!=1)
{
return;
}
}

cfJ.length
&&(aB=cfJ[0]);

if(aB&&aB.tagName=="A")
{

if(Ja)
{
var aFt=attr(Ja,"dr"),
dnk=attr(Ja,"dp"),
cnO=attr(Ja,"dn"),
bd=attr(aB,"name"),
dfY=bd=="book";

if(aFt&&cnO!="0"
&&aFt!="morefunction"&&aFt!="attach"
&&aFt!="3"&&aFt!="4")
{
debug("QMMLCache::\u52AB\u6301\u8BE5\u94FE\u63A5-"+aB.id);

bWR(function(aIa,bJA,aR,dvd,ckk)
{
return function()
{

QMMLCache.log("hit",[aIa,bJA,dvd].join("|"),QMMLCache.folder(aIa,{dr:aIa,dp:ckk?aR:bJA},true));
QMMLCache.folder(aIa,{dr:aIa,dp:ckk?aR:bJA});
}
}(aFt,dnk,bd,cnO,dfY));


preventDefault(oy);
stopPropagation(oy);


}
}
}

});



var axT=[],
bzv={},
mr=3;

E(finds("li[dr] a",S("navMidBar")),function(adA)
{
var aFK=attr(adA.parentNode,"dr"),
byl=attr(adA.parentNode,"dp"),
cnj=attr(adA.parentNode,"dn"),
bOE=attr(adA,"name");

if(aFK=="1"||
((!byl||aFK==byl)
&&cnj!="0"
&&"|1|3|4|5|6|starred|".indexOf("|"+aFK+"|")<0&&finds("b",adA).length))
{
if(axT.length<mr)
{
var aY=QMMLCache.folder(aFK,{dr:aFK,dp:bOE?bOE:""},true);
axT.push(aY);
bzv[[aFK,byl,cnj].join("|")]=aY;
}
}
});
debug(axT,2);

preLoad("html","",axT,function(ji)
{
for(var i in bzv)
{
if(ji==bzv[i])
{
QMMLCache.log("pre",i,ji);
}
}
});
}
},
log:function(dO,aM,jV)
{
var bfG=new QMCache({appName:"maillist_preload"}),
azp=aM.split("|").shift();
if(dO=="pre")
{
bfG.setData(aM,jV);
debug("preload: "+azp);


setTimeout(function()
{
ossLog("delay","all","stat=nothing&locval=mlcache,pre,"+azp+",1");
},2000);
}
else if(dO=="hit")
{

if(jV&&bfG.getData(aM)&&
jV.split("#").shift()==bfG.getData(aM).split("#").shift())
{
ossLog("delay","all","stat=nothing&locval=mlcache,hit,"+azp+",1");
bfG.delData(aM);
}
}
},
folder:function(ke,aL,aQN)
{

var duE=-1,
dxq=-2,
dpO=-3,
dhK=-4,
cZk=-5,
aY=TE([
'/cgi-bin/mail_list?sid=$sid$&folderid=$folderid$&folderkey=$folderkey$'
]).replace({
sid:getSid(),
folderid:ke,
folderkey:ke
}),
bJ=aL||{};


extend(bJ,{page:0});



if(ke==1)
{
extend(bJ,{
s:"inbox",
topmails:0,
showinboxtop:"1"
});
}

else if(ke=="starred")
{
extend(bJ,{
s:"star",
folderid:"all",
flag:"star",
need_folderlock:0,
fun:"slock",
topmails:0,
folderkey:duE
});
}

else if(ke==8)
{
extend(bJ,{
t:"mail_list_group"
});
}

else if(bJ.dp=="book")
{
extend(bJ,{
folderid:bJ.dr,
ftype:"book"
});
}

else if(bJ.dp=="tag")
{
if(bJ.dr==bJ.dp)
{
extend(bJ,{
folderid:"all",
showtag:"all",
tagid:"all",
folderkey:dhK
});
}

else
{
var uO=bJ.dr.replace("tag_","");
extend(bJ,{
folderid:"all",
showtag:"1",
tagid:uO,
folderkey:uO
});
}
}

else if(ke=="personal")
{
if(bJ.dr==ke)
{
extend(bJ,{
folderid:bJ.dr,
stype:"myfolders",
folderkey:dpO
});
}

else
{
extend(bJ,{
folderid:bJ.dr,
folderkey:bJ.dr
});
}
}

else if(ke=="pop")
{
if(bJ.dr==ke)
{
extend(bJ,{
folderid:bJ.dr,
ftype:"pop",
stype:"myotherinbox",
folderkey:dxq
});
}

else
{
extend(bJ,{
folderid:bJ.dr,
ftype:"pop",
folderkey:bJ.dr
});
}
}

else if(bJ.dr=="addrvip")
{
extend(bJ,{
folderid:'all',
s:'addrvip',
flag:'addrvip',
kvclick:'mail_list|addrvip|folderlist|1',
folderkey:cZk
});
}



if(!aQN&&(!bJ.dp||bJ.dp==bJ.dr))
{
var	axr="realtime",
aX=({
"starred":110,
"130":20,
"personal ":21,
"pop":22,
"tag":40
}[ke]||ke);


ossLog(axr,"all",T("stat=nothing&$locname$=folderlist,,,$id$").replace(
{
id:aX,
locname:axr=="realtime"?"loc":"locval"
}
));
}


delete bJ.dp;
delete bJ.dr;

if(!aQN)
{
this.url(aY,bJ);
}
else
{
return this.url(aY,bJ,aQN);
}
},
url:function(bz,aL,aQN)
{
var	hH=CommVer.get(this.ash),
aY=cookQueryString(bz.split("#").shift(),
extend(aL,this.aPN?{
ver:hH,
cachemod:this.ash,
cacheage:this.dCo,
r:""
}:{})
);


aY=[aY,"#stattime=",now()].join("");


if(!aQN)
{
try
{
if(getTop().getMainWin().getTop)
{
goUrl(getTop().getMainWin(),aY,true);
}
else
{
throw{message:"access deny"};
}
}
catch(e)
{
debug("QMMLCache throw error, use src redirect.");
getTop().S("mainFrame").src=bz;
}
}
else
{
return aY;
}
},
check:function(ax)
{

try
{
var cnn=CommVer.get(this.ash),
aI=ax||getTop().getMainWin(),
jZ=aI.location,
rg=jZ.getParams()["cachemod"],
hH=jZ.getParams()["ver"];


if(this.aPN&&hH&&cnn!=hH&&rg==this.ash)
{
goUrl(aI,
cookQueryString(jZ.href,{
ver:cnn
}),true
);
return true;
}
return false;
}
catch(e)
{
return false;
}
},
upVer:function()
{
debug("\u66F4\u65B0"+this.ash+" cache\u7248\u672C\u53F7");
CommVer.update(this.ash);
}
};









function checkPerDelML(ke,aPB,dC)
{
return delMailML(ke,aPB,"PerDel",dC);
}









function delMailML(ke,aPB,aiG,dC)
{
var aI=dC.nodeType==9?(dC.defaultView||dC.parentWindow):dC,
aQ=QMMailList.getCBInfo(aI);
configPreRmMail(aQ,'rmMail');
rmMail(aiG=="PerDel"?1:0,aQ);


aQ.oMail.length
&&QMMLCache.upVer();
return;
}






function reportSpamML(bvo,dC)
{

if(getTop().isSelectAllFld(getMainWin()))
{
return showError('\u4E0D\u80FD\u5BF9\u5168\u6587\u4EF6\u5939\u6267\u884C\u6B64\u64CD\u4F5C');
}

var aI=dC.nodeType==9?(dC.defaultView||dC.parentWindow):dC,
aQ=QMMailList.getCBInfo(aI);


configPreRmMail(aQ,'spammail');
(bvo?reportSpamJson:reportNoSpamJson)({bBlackList:true},aQ);

aQ.oMail.length
&&QMMLCache.upVer();

return false;
}














function MLIUIEvent(EI,ax,fe)
{
var bK=EI.value,
cr=QMMailCache,
LA=cr.isRefresh(ax),
Az=EI.parentNode;
while(Az.tagName.toUpperCase()!="TABLE")
{
Az=Az.parentNode;
}
var hi=GelTags("table",Az)[0],
yj=GelTags("td",GelTags("tr",hi)[0]),
aYr=yj[1],
QD=yj[yj.length-1];

EI.setAttribute('init','true');
QMReadedItem.addItem(EI);


if(QD.className=="new_g")
{
QD=yj[6];
}


var atL=GelTags("div",hi),
YT;
for(var aV=atL.length-1;aV>=0;aV--)
{
if(atL[aV].className=="TagDiv")
{
YT=atL[aV];
break;
}
}


if(cr.hasData(bK))
{
if(!LA)
{
var aE=cr.getData(bK);
if(EI.getAttribute("unread")=="true")
{
cr.addVar("unread",-1);
}
mailListFlag.YI(EI,Az,aE.bUnread?true:false,aE.reply);
hideGroupNewReply(EI,Az);

if(aE.star!=null)
{
setClass(QD,aE.star?"fg fs1":"fg");
cr.addVar("star",aE.star?1:-1);
}

if(aE.oTagIds)
{
var wj=GelTags("table",hi),
ps=aE.oTagIds,
uO,
aTF={};

if(YT)
{
for(var aV=wj.length-1;aV>=0;aV--)
{
if(uO=wj[aV].getAttribute("tagid"))
{
aTF[uO]=1;
}
}
for(var agz in ps)
{
if(ps[agz]===0)
{

QMTag.rmTagUI(YT,agz);
}
else if(!aTF[agz])
{

QMTag.addTagUI(YT,agz,fe,bK,false);
}
}
}
}
}
else
{

cr.addData(bK,
{
bUnread:EI.getAttribute("unread")=="true",
oTagIds:{},
star:null,
reply:null
});
}
}

listMouseEvent(Az);

QD.title=QD.className=="fg"?"\u6807\u8BB0\u661F\u6807":"\u53D6\u6D88\u661F\u6807";
addEvent(QD,'click',function(ap)
{

QMMLCache.upVer();

starMail(null,QMMailList.getCBInfo(ax,bK));
return stopPropagation(ap);
}
);

addEvent(Az,"click",GetListMouseClick(ax));
addEvent(Az,"selectstart",preventDefault);


var ayx=hi.rows[0].cells[1];
if(ayx.className.indexOf("fr")>-1)
{

loadJsFile("$js_path$qmtip181b8c.js",true);
addEvent(ayx,"mouseover",MLI.aUs);
addEvent(ayx,"mouseout",MLI.aUs);
}


addEvent(YT,'click',function(ap)
{
if(QMTag.readclose(ap,QMMailList.getCBInfo(ax,bK)))
{

QMMLCache.upVer();

return stopPropagation(ap);
}
}
);

dragML(Az,EI);

}






function MLI(dsb,ax,fe,BY)
{














var aPt=SN("mailid",ax),
MD=aPt[aPt.length-1],
bK=MD.value,
bn=MD.parentNode,
cr=QMMailCache,
LA=cr.isRefresh(ax);

while(bn.tagName.toUpperCase()!="TABLE")
{
bn=bn.parentNode;
}

MLIUIEvent(MD,ax,fe);



var ckb=MD.getAttribute("uw")=="1",

aOu=ax.oPreMails,
bwh=aOu.length,

bKn=3,

bHZ=new Date()-new Date(parseInt(MD.getAttribute("totime")))<2592000000,

bAJ=!/^(LP|ZP)/.test(bK)&&bHZ &&bwh<bKn&&!rdVer.log(bK);

if(bAJ&&rdVer.isPre(fe))
{
var aY,
xf=MD.getAttribute("gid");


aY=rdVer.url(bK,fe,BY,"",false,"",false,"",true,ax.location.getParams().folderkey);

if(aY)
{
aOu.push(aY);
}
}

if(getTop().gsReadedMailId==bK)
{
QMReadedItem.disp(bn);
recordReadedMailId(null);
}

}









function MLJump(bCC,bIX,bz,ax)
{
var byi=SN("maillistjump",ax.document),
dsJ=SN("prevpage",ax.document),
cWJ=SN("nextpage",ax.document),

aOJ="_MlJuMp_",
aeN=parseInt(bCC)||0,
Ov=parseInt(bIX)||0;

function axa(aM)
{
var nJ=getTop().QMMenu(aM).S("txt"),
eh=parseInt(nJ.value);

if(isNaN(eh))
{
nJ.select();
return showError("\u8BF7\u8F93\u5165\u8DF3\u8F6C\u7684\u9875\u6570");
}

eh=Math.max(0,Math.min(eh-1,Ov));
if(aeN==eh)
{
nJ.select();
return showError("\u4F60\u8F93\u5165\u4E86\u5F53\u524D\u9875\u6570");
}

getTop().QMMenu(aM).close();

if(QMMLCache.useCache())
{
QMMLCache.url(getTop().getMainWin().location.href,{page:eh,selectall:(getTop().isSelectAllFld(getMainWin())?1:0)});
}
else
{
goUrlMainFrm([bz,'&page=',eh,'&loc=mail_list,,jump,0',getTop().isSelectAllFld(getMainWin())?"&selectall=1":""].join(''));
}
}

function Ip(cO)
{
var oy=cO||ax.event;

if(QMMLCache.useCache())
{
preventDefault(oy);
stopPropagation(oy);
if(getTop().isSelectAllFld(getMainWin()))
{
QMMLCache.url(getTop().getMainWin().location.href,{page:attr(this,"page"),selectall:1});
}
else
{
QMMLCache.url(getTop().getMainWin().location.href,{page:attr(this,"page"),selectall:0});
}
return false;
}
};


E(dsJ,function(aw)
{
aw.onclick=Ip;
});
E(cWJ,function(aw)
{
aw.onclick=Ip;
});


E(byi,function(agr)
{
if(!agr.getAttribute(aOJ))
{
agr.setAttribute(aOJ,"1");
addEvents(agr,
{
click:function(ap)
{
var aX=unikey("mljump"),
cs=calcPos(agr),
cS=185,
cN=40;


new(getTop().QMMenu)(
{
sId:aX,
oEmbedWin:ax,
nWidth:cS,
nX:cs[1]-cS,
nY:bodyScroll(ax,"scrollHeight")-cs[2]<cN?(cs[0]-cN-13):cs[2],
bAutoClose:false,
oItems:
[
{
nHeight:cN,
sItemValue:MLJump.kS.replace({id:aX})
}
],
onshow:function()
{
this.S("txt").focus();
}
}
);

addEvent(getTop().QMMenu(aX).S("txt"),"keypress",function(ap)
{
var ey=ap.keyCode||ap.which;
if(ey===13)
{
axa(aX);
}
else if((ey<48||ey>57)&&ey!=8&&ey!=9)
{
preventDefault(ap);
}
}
);

addEvent(getTop().QMMenu(aX).S("btn"),"click",function(ap)
{
axa(aX);
}
);

preventDefault(ap);
}
}
);
}
}
);
}

MLJump.kS=T(
[
'<div style="position:absolute;width:160px;margin-left:-7px;">',
'<div class="addrtitle jumpmenusdjust" style="float:left;">\u8DF3\u8F6C\u5230\u7B2C <input id="txt" type="text" class="txt" style="width:30px;" /> \u9875</div>',
'<a id="btn" href="javascript:;" class="left button_gray_s" style="width:40px; margin:7px 0 0 5px; _display:inline;">&nbsp;\u786E\u5B9A&nbsp;</a>',
'</div>'
]
);







function initDropML()
{
function abX(aw)
{
var cs=calcPos(aw),
jj=S('dragtitle'),
sj=jj.offsetLeft,
rI=jj.offsetTop;
return(cs[1]>sj&&cs[3]<sj&&cs[2]>rI&&cs[0]<rI)?aw:null;
}

function Yu(aw,aOl)
{
if(aw&&aw.id.indexOf('folder_')>=0)
{
var dz=aw.className,
aTq=dz.indexOf('toolbg')>-1;
if(aOl&&aTq)
{
setClass(aw,dz.replace(/\btoolbg\b/g,''));
}
else if(!aTq&&!aOl)
{
setClass(aw,dz+' toolbg');
}
}
}

var jj=S('dragtitle'),
aSq=S('OutFolder'),
aNO='inidrop',
wc=BaseMailOper.getInstance(getMainWin()),
axO=QMDragDrop,
aSg='mail_list';

if(aSq.getAttribute(aNO)=='true')
{

return false;
}
aSq.getAttribute(aNO,'true');
axO.delGroup(aSg);

var EZ=null,

awB=false,
tC=null,
jw=null,
kw=null,



aQE=/^([489]|personal|pop|tag)$/,

aAm=new axO.DropTarget(
S('OutFolder'),
{





ondragover:function(rN)
{
if(tC==jw)
{
return;
}
var bEF=tC&&tC.id||'',
PV=jw&&jw.id||'',
axy=tC&&tC.getAttribute('dp'),
ayW=jw&&jw.getAttribute('dp'),
aSv=jw&&jw.getAttribute('dr');


if(ayW)
{
showFolders(ayW,true,getTop());
}
if(axy&&axy!=ayW)
{
showFolders(axy,false,getTop());
}

Yu(tC,1);
Yu(jw);


if(kw)
{
clearTimeout(kw);
}
awB=aSv&&!aQE.test(aSv);
kw=setTimeout(function(){
setClass(jj,awB?'drag_over':'drag_out');
kw=null;
},50);

tC=jw;
},





ondrop:function(rN)
{
if(!jw||!awB)
{
return;
}
var gF=wc.getMailInfo().sFid,
aX=jw.getAttribute('dr')||'';
ossLog("delay","all","stat=drag&opr="+aX);


if(aX=='6')
{

Yu(tC,1);
tC=null;
wc.apply('spammail');
dragML.avZ=true;
return;
}
else if(aQE.test(aX))
{
Yu(tC,1);
tC=null;
return;
}
else if(aX.indexOf('tag_')>=0)
{

aX=aX.replace('tag','tid');
}
else if(aX=='starred')
{
aX='star';
}
else if((gF==5||gF==6)&&aX==5)
{
aX='predelmail';
dragML.avZ=true;
}
else if(parseInt(aX))
{
aX={5:'delmail'}[aX]||'fid_'+aX;
}
else
{
return;
}
wc.apply(aX);
jj.setAttribute('na','true');
var lz=new qmAnimation(
{
from:100,
to:1
}
);
lz.play(
{
speed:"slow",
onaction:function(cM,hx)
{
setOpacity(jj,cM/100.0);
},
oncomplete:function(cM,azL)
{
show(jj,0);
setClass(jj,'drag_out');
setOpacity(jj,100);
Yu(tC,1);
tC=null;
}
});
}
},
function(sj,rI,rN){






if(gbIsIE)
{
var aT=getEventTarget(rN.event),
bxo=/(folder_\w+_td|(personal|pop|tag)foldersDiv)/;
while(aT&&!bxo.test(aT.id))
{
aT=aT.parentNode;
}
jw=aT;
}
else if(jw=abX(S('OutFolder')))
{


debug(jw);
var hU=['personal','pop','tag'],
PW=null,
aOU=null,
It,
i;
for(i=hU.length-1;i>=0;i--)
{
if(PW=abX(S(hU[i]+'foldersDiv')))
{
break;
}
}


!PW&&(PW=abX(S("showtopDiv")));

if(PW=PW||abX(S('SysFolderList')))
{

It=GelTags('li',PW);
for(i=It.length-1;i>=0;i--)
{
if(aOU=abX(It[i]))
{
break;
}
}
}
jw=aOU||PW;

}
return!!(tC||jw);
}
);
axO.addGroup(aSg,aAm);
}

function dragML(aw,jv)
{
if(!S('OutFolder')||!QMDragDrop)
{


return;
}
var ao=dragML,
aX='dragtitle',
jj=S(aX);
if(!jj)
{
insertHTML(getTop().document.body,'afterBegin','<div id="dragtitle" class="drag_out" style="display:none;"></div>');
jj=S(aX);
}
var EZ,

adT=new QMDragDrop.Draggable(
aw,
{

threshold:5,
oTitle:jj
},
{
ondragstart:function(ap)
{
ao.avZ=jv.checked==true;
jv.checked=true;
var aI=getMainWin(),
wc=BaseMailOper.getInstance(aI),
cd=QMMailList.getCBInfo(aI);
QMMailList.selectedUI(cd);
wc.setMailInfo(cd);
jj.innerHTML=['\u9009\u4E2D ',cd.oMail.length,' \u5C01\u90AE\u4EF6'].join('');

ossLog("delay","all","stat=drag&c="+cd.oMail.length);









EZ=gbIsIE?[0,0,0,0]:calcPos(aI.frameElement);
jj.style.left=EZ[3]+Scale.fixFrameCursorPos(ap.clientX)+'px';
jj.style.top=EZ[0]+Scale.fixFrameCursorPos(ap.clientY)+'px';
jj.setAttribute('na','');
show(jj,1);

initDropML();
},
ondrag:function(ap)
{
jj.style.left=EZ[3]+Scale.fixFrameCursorPos(ap.clientX)+'px';
jj.style.top=EZ[0]+Scale.fixFrameCursorPos(ap.clientY)+'px';
},
ondragend:function(ap)
{
if(!jj.getAttribute('na'))
{

show(jj,0);
setClass(jj,'drag_out');
}
if(!ao.avZ)
{
jv.checked=false;
var bne=QMMailList.getCBInfo(getMainWin());
QMMailList.selectedUI(bne);
}
}
}
);
QMDragDrop.addGroup('mail_list',adT);


var aU=aw.ownerDocument,
aI=aU.parentWindow||aU.defaultView,
agW=dragML.agW=dragML.agW||unikey('drag');
if(!aI[agW])
{
addEvent(aI,'unload',function(){
if(jj.releaseCapture)
{
jj.releaseCapture();
}
show(jj,0);
});
aI[agW]=1;
}
}




MLI.aUs=function(ap)
{
var aq=getTop(),
ao=arguments.callee,
Lt=Scale.fixFrameCursorPos(ap.clientX),
Jy=Scale.fixFrameCursorPos(ap.clientY),
bI=getEventTarget(ap);
while(bI&&bI.tagName.toUpperCase()!="TD")
{
bI=bI.parentNode;
}
if(ao.xw)
{
clearTimeout(ao.xw);
ao.xw=0;
}

if(ap.type=="mouseout")
{
aq.QMTip&&aq.QMTip.showMailList(0,bI.ownerDocument);
return;
}

ao.xw=setTimeout(function(){
var aSE=aq.GelTags("b",bI.parentNode.cells[2]),
aQM=aSE[aSE.length-1];

if(!aq.QMTip||!aQM||(ao.Dn==Lt&&ao.Ch==Jy))
{
return;
}

ao.Dn=Lt;
ao.Ch=Jy;

var Eo=aQM.innerHTML.replace(/^\&nbsp;-\&nbsp;/,"").replace(/\&nbsp;/gi,"&nbsp; ").replace(/&lt;br\/?&gt;/g,'<br/>');
aq.QMTip.showMailList(1,bI.ownerDocument,Eo,Lt,Jy);
},250);
};





function MLI_A(eU)
{
var Jb=GelTags("table",eU),
bHP=Jb.length,

bn=Jb[bHP-1],
bK=bn.getAttribute("mailid");

if(QMMailCache.hasData(bK))
{
if(!QMMailCache.isRefresh(window))
{
setClass(bn,"i M");
}
else
{
QMMailCache.delData(bK);
}
}

listMouseEvent(bn);

addEvent(bn,"selectstart",preventDefault);
}

function mailListFlag()
{

}











mailListFlag.aaT=function(jv,DK,vZ,ahA)
{
if(!(jv&&jv.type=="checkbox"))
{
return false;
}

if(vZ==null)
{
return jv.getAttribute("unread")=="true";
}

if(!DK)
{
DK=jv.parentNode.parentNode.parentNode.parentNode;
}

if((jv.getAttribute("unread")=="true")==!!vZ
&&!ahA)
{
return vZ;
}

var xf=jv.getAttribute("gid");
if(xf)
{
setGroupUnread(xf,getGroupUnread(xf)-1);
setGroupUnread("gall",getGroupUnread("gall")-1);
}

jv.setAttribute("unread",vZ?"true":"false");

setClass(DK,
[vZ?"i F":"i M",jv.checked?" B":""].join(""));
setClass(GelTags("table",DK)[0],vZ?"i bold":"i");


var aSC=GelTags("div",DK)[1];
if(!/(s[016789]bg)|(Rw)/.test(aSC.className))
{
var agM=ahA?"r":jv.getAttribute("rf"),
agH=jv.getAttribute("isendtime"),
dz="Rr";

if(agH)
{
dz=agH=="0"?"Rc":"Ti";
}
else if(vZ)
{
dz="Ru";
}
else if(agM)
{
dz=agM=="r"?"Rh":"Rz";
}

setClass(aSC,"cir "+dz);
}

return vZ;
}






mailListFlag.jL=function(jv)

{

return this.aaT(jv);
}









mailListFlag.YI=function(jv,DK,vZ,ahA)

{

return this.aaT(jv,DK,vZ,ahA);
}








function hideGroupNewReply(jv,DK)
{
if(!jv||!jv.getAttribute("gid"))
{
return false;
}

var aTL=GelTags("b",DK)[0],
Mf=aTL&&aTL.parentNode;

if(Mf&&Mf.className=="new_g")
{
Mf.style.visibility="hidden";
return true;
}

return false;
}






function getMailListInfo()
{
var cI=getMainWin(),
aUI=S("_ut_c",cI),
aOe=S("_ur_c",cI),
aPv=S("_ui_c",cI);

return{
totle:(aUI&&parseInt(aUI.innerHTML))||0,
unread:(aOe&&parseInt(aOe.innerHTML))||0,
star:(aPv&&parseInt(aPv.innerHTML))||0
};
}






function cxF(dC,bbJ)
{
var uB=S("selectAll",dC);

if(uB)
{
uB.setAttribute("totalcnt",bbJ);
E(GelTags("div",uB),
function(bI,dT)
{
var LE=bI.getAttribute("un");
if(LE=="selected")
{
GelTags("span",bI)[0].setAttribute("end",bbJ);
}
else if(LE=="unselect")
{
var ci=bI.innerHTML;
bI.innerHTML=ci.replace(/\u5168\u90E8.*\u5C01/gi,"\u5168\u90E8&nbsp;"+bbJ+"&nbsp;\u5C01");
}
}
);
}
}








function setMailListInfo(Gy,BV,atV)
{
var cI=getMainWin(),
jI=true,
ayL=S("_ur",cI),
bJN=S("_ui",cI),
buZ=S("_ut",cI),
dK;

if(!isNaN(Gy=parseInt(Gy)))
{
if(!!(dK=S("_ur_c",cI)))
{
dK.innerHTML=Math.max(0,Gy);
show(ayL,Gy>0);
}
else
{
jI=false;
}
var agI=S("tip_unread",cI);
if(agI)
{
agI.innerHTML=Gy<0?parseInt(agI.innerHTML)+Gy:Gy;
show(agI,Gy);
}
}

if(!isNaN(BV=parseInt(BV)))
{
BV=Math.max(0,BV);
if(!!(dK=S("_ui_c",cI)))
{
dK.innerHTML=BV;
show(bJN,BV!=0);
}
else
{
jI=false;
}
}

if(!isNaN(atV=parseInt(atV)))
{
BV=Math.max(0,atV);
if(!!(dK=S("_ut_c",cI)))
{
dK.innerHTML=BV;
show(buZ,BV!=0);

getTop().cxF(cI,BV);
}
else
{
jI=false;
}
}

show(
S("_uc",cI),
isShow(ayL)

);
show(
S("_ua",cI),
isShow(ayL)

);

return jI;
}








function readMailFinish(bc,aC,fe,bGp)
{
var cI=getMainWin(),
axf=S("load_"+bc,cI),
bn,nM;

QMMailCache.addData(bc);

if(axf)
{
show(axf,false);

bn=axf.parentNode.previousSibling;
nM=GelTags("input",bn)[0];
}
else
{
var ju=GelTags("input",cI.document);
for(var i=0,aK=ju.length;i<aK;i++)
{
if(ju[i].type=="checkbox"
&&ju[i].value==bc)
{
nM=ju[i];
break;
}
}
bn=nM;
while(bn.tagName.toUpperCase()!="TABLE")
{
bn=bn.parentNode;
}
}


var wj=GelTags("table",bn),
aTH=false;
for(var aV=wj.length-1;aV>=0;aV--)
{
if(wj[aV].getAttribute("tagid"))
{
aTH=true;
break;
}
}

hideGroupNewReply(nM,bn);

if(nM&&mailListFlag.jL(nM))
{
mailListFlag.YI(nM,bn,false);
setMailListInfo(getMailListInfo().unread-1);


if(nM.getAttribute('star')=='1')
{
setFolderUnread('starred',getFolderUnread('starred')-1);
}
var agG=nM.getAttribute("ssystag");
if(agG&&/system:1\|/.test(agG))
{
setFolderUnread("sysmsg",getFolderUnread("sysmsg")-1);
}
if(agG&&/system:0\|/.test(agG))
{
setFolderUnread("notsysmsg",getFolderUnread("notsysmsg")-1);
}

if(fe&&parseInt(fe)>0&&!aTH)
{
setFolderUnread(fe,bGp
?getGroupUnread("gall")
:getMailListInfo().unread);
}
else
{
reloadLeftWin();
}
}
}








function checkMail(mB)
{
var dZB=getTop().QMAddrParser,
eGU=mB.indexOf("@")>0,
fk=dZB.parseAddr(mB);

if(fk.length==0)
{
showError("\u8BF7\u586B\u5199\u90AE\u7BB1\u5730\u5740");
return false;
}
else if(!eGU||(fk.length==1&&!fk[0].valid))
{
showError("\u60A8\u8F93\u5165\u7684\u90AE\u7BB1\u5730\u5740\u4E0D\u6B63\u786E\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165");
return false;
}
else if(fk.length>1)
{
showError("\u60A8\u53EA\u80FD\u8F93\u5165\u4E00\u4E2A\u90AE\u7BB1\u5730\u5740\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165");
return false;
}
return true;
}








function checkAndSubmit(aM)
{
var bT=S(aM);

if(!checkMail(trim(bT.value)))
{
bT.focus();
return false;
}

submitToActionFrm(bT.form);
}






function pushToDialogList(aM)
{
var aq=getTop();

if(!aq.goDialogList)
{
aq.goDialogList=new aq.Object;
}

if(aM)
{
aq.goDialogList[aM]=true;
}
}





function showDialogNewReadMail(bYO,bRd,Cf,bc)
{
new(getTop().QMDialog)({
sId:"addnewremind_qqmail",
sTitle:"\u65B0\u5EFA\u63D0\u9192",
sUrl:T("/cgi-bin/read_reminder?linkid=%linkid%&linktitle=%linktitle%&sid=%sid%&t=remind_edit&from=%from%","%").replace({
sid:getSid(),
linkid:bYO,
linktitle:bRd,
from:Cf
}),
nWidth:450,
nHeight:360
})
bc&&rdVer(bc,1);
}

function setRemindSpan(bc,ax)
{


getTop().S('remind_edit_'+bc,ax).innerHTML=(getTop().reminddetail["mailid:"+bc]||"")
.replace(/linktitle=.*&sid=/g,function(cf)
{
return cf.replace(/\'/g,"&#039;");
}
);
}


function showSimpleRuleFilter(ez)
{
if(!ez)
{
showError("\u65E0\u6CD5\u83B7\u53D6\u53D1\u4EF6\u4EBA\u5730\u5740\uFF0C\u4E0D\u80FD\u521B\u5EFA\u89C4\u5219");
return;
}
var fB=new(getTop().QMDialog)(
{
sId:"addnewfilter_qqmail",
sTitle:"\u5FEB\u6377\u521B\u5EFA\u6536\u4FE1\u89C4\u5219",
sUrl:T("/cgi-bin/setting2?sid=$sid$&Fun=GetFolderList&CurFilterID=0&t=readmail_filter&fromaddr=$fromaddr$").replace({
sid:getSid(),
fromaddr:ez
}),
nWidth:420,
nHeight:240,
onshow:function()
{
var aPM=this.getDialogWin();
waitFor(
function()
{
try
{
return S("jump",aPM);
}
catch(e){}
},
function(bh)
{
if(bh)
{
function ece(ccW)
{
if(ccW.length)
{
ccW.push({
bDisSelect:true,
nHeight:10,
sItemValue:'<hr/>'
});
}
ccW.push({
bDisSelect:false,
nHeight:22,
sId:"new",
sItemValue:'\u65B0\u5EFA\u6587\u4EF6\u5939...'
});

return ccW;
};
function dEt()
{
var SV=bUL.get(2);

return SV=="new"?"-1":SV;
};
function dkg()
{
bUL.set(avC[0].sId,2);
};
function eJk(aR,cf)
{
var dBw={
bDisSelect:false,
nHeight:22,
sId:cf,
sItemValue:aR
};

if(avC.length==1)
{
avC=czh(avC,{
bDisSelect:true,
nHeight:10,
sItemValue:'<hr/>'
},0);
avC=czh(avC,dBw,0);
}
else
{

avC=czh(avC,dBw,avC.length-2)
}
bUL.update({
oMenu:{
oItems:avC
}
});
bUL.set(cf,2);
};
function czh(gn,bw,tW)
{
({}).toString.call([])!="[object Array]"&&(bw=[bw]);
return gn.slice(0,tW).concat(bw).concat(gn.slice(tW,gn.length));
};
function epI()
{

promptFolder({
type:'folder',
bAlignCenter:true,
width:410,
height:237,
style:"createNewFolder",
onreturn:function(aR)
{
QMAjax.send(
"/cgi-bin/foldermgr",
{
method:"POST",
content:["sid=",getSid(),"&fun=new&from=simple&ef=js&resp_charset=UTF8&name=",aR].join(''),
onload:function(bh,qM)
{
try
{
if(bh)
{
var aE=eval("("+qM+")");
if(aE.errcode=="0")
{
eJk(aR,aE.folderid);
reloadLeftWin()
showInfo("\u5DF2\u6210\u529F\u65B0\u5EFA\u6587\u4EF6\u5939");
}
else
{
showError(aE.errmsg);
}
return;
}
}
catch(e)
{}
showError("\u7F51\u7EDC\u5F02\u5E38\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002");
}
}
);
}
});
};

var avC=ece(aPM.oUserFolder)
bUL=new QMSelect({
oContainer:S("selectfolder",aPM),


oMenu:{
nWidth:"auto",
nMaxWidth:180,
nMaxItemView:4,
oItems:avC 
},
onselect:function(bw)
{
if(bw.sId=="new")
{
epI();
return true;
}
}
});

addEvent(S("jump",aPM),"click",function()
{
fB.close();
var lC=dEt();
lC=="-1"&&(lC="");
getMainWin().location.replace(
aPM.location.href
.replace("&Fun=GetFolderList","&Fun=Create")
.replace("&t=readmail_filter","&loc=filter,simple,0,0&folderid="+lC)
);
}
);
addEvent(S("confirm",aPM),"click",function()
{
var lC=dEt(),
cSu=S("oldmail",aPM).checked?1:0;

if(lC=="-1")
{
showError("\u60A8\u9700\u8981\u521B\u5EFA\u4E00\u4E2A\u65B0\u6587\u4EF6\u5939");
dkg();
}
else if(!lC)
{
showError("\u8BF7\u9009\u62E9\u6587\u4EF6\u5939");
dkg();
}
else
{
QMAjax.send(
"/cgi-bin/foldermgr",
{
method:"POST",
content:["sid=",getSid(),"&fun=addfilter&from=simple&ef=js&action=move&oldmail=",cSu,"&sender=",ez,"&folderid=",lC].join(''),
onload:function(bh,qM)
{
try
{
if(bh)
{
var aE=eval("("+qM+")");
if(aE.errcode=="0")
{
if(cSu&&aE.affected>0)
{
showInfo(TE([
'\u64CD\u4F5C\u6210\u529F\uFF0C',
'$@$if($num$>0)$@$',
'\u79FB\u52A8\u4E86$num$\u5C01\u90AE\u4EF6\u3002',
'$@$else$@$',
'\uFF0C\u60A8\u6CA1\u6709\u9700\u8981\u79FB\u52A8\u6216\u6807\u8BB0\u7684\u90AE\u4EF6\u3002',
'$@$endif$@$',
'<a href="/cgi-bin/mail_list?sid=$sid$&folderid=$fid$&page=0"',
'style="color:white" onclick="getTop().hiddenMsg();" target="mainFrame">',
'[\u67E5\u770B]',
'</a>']).replace({
sid:getSid(),
fid:aE.folderid,
num:aE.affected
}),30000);
}
else
{
showInfo("\u5DF2\u6210\u529F\u65B0\u5EFA\u89C4\u5219");
}


ossLog("realtime","all","loc=filter,simple,0,1");
fB.close();
}
else
{
showError(aE.errmsg);
}
return;
}
}
catch(e)
{}
showError("\u7F51\u7EDC\u5F02\u5E38\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002");
}

}
);
}
}
);
addEvent(S("cancel",aPM),"click",function()
{
fB.close();
}
);
}
else
{
showError("\u7F51\u7EDC\u5F02\u5E38\uFF0C\u8BF7\u5237\u65B0\u540E\u91CD\u8BD5\u3002");
}
}
);
}
});

}
function closeSimpleRuleFilter(gP)
{
gP&&gP();
QMDialog("addnewfilter_qqmail").close();
}



function applyRules(dgj)
{
confirmBox({
title:"\u6536\u4FE1\u89C4\u5219",
msg:"\u60A8\u662F\u5426\u8981\u5BF9\u6536\u4EF6\u7BB1\u7684\u5DF2\u6709\u90AE\u4EF6\u6267\u884C\u6B64\u89C4\u5219?",
confirmBtnTxt:'\u662F',
cancelBtnTxt:'\u5426',
onreturn:function(bh)
{
if(bh)
{
QMAjax.send(T("/cgi-bin/exbook_mgr?sid=$sid$&fname=&optype=mailfilter").replace(
{
sid:getSid()
}),
{
method:"GET",
headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},
onload:function(bh,bO)
{
show(S("spam",getMainWin()),0);
showInfo("\u6210\u529F\u5BF9\u6536\u4EF6\u7BB1\u5DF2\u6709\u90AE\u4EF6\u6267\u884C\u6B64\u89C4\u5219!");
callBack(dgj);
}
});
}
else
{
callBack(dgj);
}
}
});
}

function submitSwitchForm()
{
var fu=getTop().S("frmSwitch");
fu&&fu.submit();
}
















function getDomain(bUG)
{
return[["foxmail.com","qq.com","biz"],["Foxmail.com","QQ","\u817E\u8BAF"]][
bUG?1:0][/,7$/.test(getSid())?2:(location.href.indexOf("foxmail.com")>-1?0:1)];
}
var GetDomain=getDomain;





function getSid()
{
return getTop().g_sid
||(S("sid")?S("sid").value:location.getParams(getTop().location.href)["sid"]);
}
var GetSid=getSid;





function getUin()
{
return getTop().g_uin;
}





function osslogDomain()
{
return getTop().gsOsslogDomain||"http://rl.mail.qq.com";
}





function getCssDomain()
{
return getTop().gsGetCssDomain||"";
}





function getPaths()
{

if(getLocale()=="zh_CN")
{
var xN=
{
images_path:"/zh_CN/htmledition/images/",
js_path:"/zh_CN/htmledition/js/",
css_path:"/zh_CN/htmledition/css/",
style_path:[getCssDomain(),"/cgi-bin/getcss?sid=",getSid(),"ft="].join(""),
swf_path:"/zh_CN/htmledition/swf/",
stationery_path:"http://res.mail.qq.com/zh_CN/",
card_path:"http://res.mail.qq.com/zh_CN/",
mo_path:"http://res.mail.qq.com/zh_CN/",
base_path:"/",
skin_path:"0"
};
}
else
{
var xN=
{
images_path:"/en_US/htmledition/images/",
js_path:"/en_US/htmledition/js/",
css_path:"/en_US/htmledition/css/",
style_path:"/cgi-bin/getcss?sid="+getSid()+"ft=",
swf_path:"/en_US/htmledition/swf/",
stationery_path:"http://res.mail.qq.com/zh_CN/",
card_path:"http://res.mail.qq.com/zh_CN/",
mo_path:"http://res.mail.qq.com/zh_CN/",
base_path:"/",
skin_path:"0"
};
}
for(var k in xN)
{
xN[k]=trim(getTop()[k])||xN[k];
}
return xN;
}







function getPath(aC,aCI)
{













aC=="image"&&(aC+="s");
var gx=getPaths()[aC+"_path"]||"";
if(gx)
{
if(aCI&&aC!="skin"&&gx.indexOf("http")!=0)
{
gx=[location.protocol,"//",location.host,gx].join("");
}
}
return gx;
}








function getRes(Rz)
{
return T(Rz).replace(getPaths(),true);
}






function getFullResSuffix(iu)
{
if(!getTop().gLn)
{
return iu;
}
var jb,wx,aIq=".j"+"s";
if(iu.indexOf(aIq)>0)
{
jb=iu.substr(0,iu.indexOf(aIq));
wx=aIq;
}
else if(iu.indexOf(".css")>0)
{
jb=iu.substr(0,iu.indexOf(".css"));
wx=".css";
}
else if(iu.indexOf(".html")>0)
{
jb=iu.substr(0,iu.indexOf(".html"));
wx=".html";
}
if(jb.length>0&&getTop().gLn[jb])
{
return jb+getTop().gLn[jb]+wx;
}
else
{
return iu;
}
}












function outputJsReferece(dv,nA,ax)
{
var gx=dv||outputJsReferece.apD,
fG=nA||outputJsReferece.ox,
aI=ax||window,
cz=T(['<script language="JavaScript" src="$file$',(dv?'':'?r='+Math.random()),'"></','script>']),
vm=[];
outputJsReferece.apD=gx;
outputJsReferece.ox=fG;

function bRC(ji)
{
var jb=trim(ji||""),
fC=/[0-9a-fA-F]{6}\.js$/.test(jb)?ji.substr(0,ji.length-9):ji.split(".")[0];

if(fC&&(dv||!aI[fC+"_js"]))
{
vm.push(cz.replace(
{
file:gx+ji
}
));
}
}
E(fG,bRC);
return vm.join("");
}





function runUrlWithSid(bz)
{
try
{

getTop().getHttpProcesser().src=T('$url$&sid=$sid$&r=$rand$').replace(
{
url:bz,
sid:getSid(),
rand:Math.random()
}
);
}
catch(bj)
{
}
}




























function createBlankIframe(ax,cH)
{
cacheByIframe(cH&&cH.defcss==false
?[]
:[["css","",getRes("$css_path$comm181b91.css")],["css",getPath("style"),"skin"]],
extend(
{
className:"menu_base_if",
transparent:false,
destroy:false
},
cH,
{
win:ax,
header:["<script>",getTop.toString().replace(/[\r\n]/g,""),"<\/script>",cH&&cH.header||""].join(""),
onload:function(ax)
{
if(this.getAttribute("cbi_inited")!="true")
{
this.contentWindow.document;
cH&&cH.transparent&&
(this.contentWindow.document.body.style.background="transparent");
this.setAttribute("cbi_inited","true");
}
callBack.call(this,cH&&cH.onload,[ax]);
}
}
)
);
}





function getFileTypeByExt(bvs)
{
var abv=
{
"eml":"eml",
"pdf":"pdf",
"txt":"txt,h,m,js,as,java,c,cpp,plist,ini,stp,csv,xml",
"html":"html,htm,xhtml,mht",
"rar":"zip,7z,rar,bz2,gz,tar,tbz,tgz,cab,gzip,bzip2,deb",
"mov":"mp3,m4a,wma,wav,aac,ac3,mp2,ape,flac,f4a,mkv,rmvb,wmv,mp4,f4v,flv,avi,mov,qt,m4v,asf,rm,mpeg,mpg,vob,ts,3gp,3gpp,3gp2,ogg,ogv,mp4,webm,f4m,avi",
"jpg":"jpg,png,bmp,gif,jpeg,tiff",
"fl":"fla,swf",
"psd":"psd",
"exl":"xls,xlsx,et,ett",
"ppt":"ppt,pptx,dps,dpt",
"doc":"doc,docx,rtf,dot,docm,wps,wpt",
"blank":""
};
abv=(function(rn)
{
var fM={};
for(var i in rn)
{
for(var s=rn[i].split(","),j=0,l=s.length;j<l;j++)
{
fM[s[j]]=i;
}
}
return fM;
}
)(abv);

return(abv[bvs.toLowerCase()]||"blank");
};





function getIconByFileType(PE,xa)
{
var aWO=/^(min|mid|max)$/g.test(xa)?xa:"min";
return["/zh_CN/htmledition/images/xdisk/ico_",aWO,"/fu_",PE.toLowerCase(),".gif"].join("");
};






function getIconByExt(bvs,xa)
{
var aWO=/^(min|mid|max)$/g.test(xa)?xa:"min";
return["/zh_CN/htmledition/images/xdisk/ico_",aWO,"/fu_",getFileTypeByExt(bvs.toLowerCase()),".gif"].join("");
};





function getViewTypeByExt(bvs)
{
var dvu=
{
"doc":"c,doc,xls,ppt,docx,xlsx,pptx,rtf,pdf,txt,js,as,htm,html,mht,xhtml,eml,h,m,java,cpp,plist,ini,xml,pps,stp,csv,dot,docm,et,ett,dps,dpt,wps,wpt",
"music":"mp3,f4a,oga,wma,wav,m4a,aiff,aifc",
"video":"mp4,wmv,swf,mov,flv,f4v,m4v,ogg,ogv,webm,avi,m4v,rm,rmvb,mpeg,mpg,3gp",
"compress":"zip,7z,rar,bz2,gz,tar,tbz,tgz,cab,gzip,bzip2,deb",
"img":"jpg,jpeg,bmp,gif,png"
};
for(var i in dvu)
{
if([",",dvu[i],","].join("").indexOf([",",bvs.toLowerCase(),","].join(""))>-1)
{
return i;
}
}
return"other";
};






function createActionFrame(ax)
{
return createBlankIframe(ax,
{
id:"actionFrame",
defcss:false,
onload:actionFinishCheck
}
);
}
















function hideEditorMenu()
{
if(getTop().QMEditor)
{
getTop().QMEditor.hideEditorMenu();
}
}





function hideMenuEvent(ap)
{
var eJ=getEventTarget(ap),
QE=getTop().QMMenu&&getTop().QMMenu();

for(var i in QE)
{
!QE[i].isContain(eJ)&&QE[i].close();
}

try
{
getTop().QQPlusUI.hideMenuEvent(eJ);
}
catch(FJ)
{
}
}






















function confirmBox(aL)
{

var	Mb=2,
vx=aL.defaultChecked||false,
aFr=aL.confirmBtnTxt||"\u786E\u5B9A",
aFn=aL.cancelBtnTxt||"\u53D6\u6D88",
ajo=aL.neverBtnTxt;



new(getTop().QMDialog)({
bAlignCenter:aL.bAlignCenter,
sId:aL.id||"QMconfirm",
sTitle:aL.title||"\u786E\u8BA4",
bAnimation:aL.bAnimation||false,
sBodyHtml:TE([
'<div class="$sStyle$">',
'$@$if($sType$=="custom")$@$',
'$msg$',
'$@$else$@$',
'<div class="cnfx_content">',
'<span class="dialog_icon icon_info_b"></span>',




'<div class="dialog_f_c">$msg$</div>',
'</div>',
'<div class="cnfx_status" style="display:$statusdisp$;">',
'<input id="recordstatus" class="cnfx_status_checkbox" type="checkbox" $checked$/><label for="recordstatus">$recordinfo$</label>',
'</div>',
'$@$endif$@$',
'</div>'
]).replace({
sStyle:aL.style||'',
sType:aL.sType||"",

msg:aL.msg,
caceldisp:aL.mode=="alert"?"none":"",
imgdisp:aL.mode=="prompt"?"none":"block",
recordinfo:aL.recordInfo,
statusdisp:aL.enableRecord?"":"none",
checked:aL.defaultChecked?"checked":"",


confrim:aFr,
confirmcss:getAsiiStrLen(aFr)>5?"":"wd2",
cancel:aFn,
cancelcss:getAsiiStrLen(aFn)>5?"":"wd2",
never:ajo,
neverdisp:ajo?'':'none',
nevercss:getAsiiStrLen(ajo)>5?"":"wd2"
}),
sFootHtml:T([
'<div class=" txt_right cnfx_btn">',
'<a class="btn_gray confirm $confirmcss$ $confirmClass$" id="confirm" href="javascript:;">$confirm$</a>',
'<a class="btn_gray cancel $cancelcss$ $cancelClass$" id="cancel" style="display:$caceldisp$;" href="javascript:;">$cancel$</a>',
'<a class="btn_gray $nevercss$" id="never" style="display:$neverdisp$;" href="javascript:;">$never$</a>',



'</div>'
]).replace({
caceldisp:aL.mode=="alert"?"none":"",
confirm:aFr,
confirmcss:getAsiiStrLen(aFr)>5?"":"wd2",
confirmClass:aL.confirmClass||"",
cancel:aFn,
cancelcss:getAsiiStrLen(aFn)>5?"":"wd2",
cancelClass:aL.cancelClass||"",
never:ajo,
neverdisp:ajo?'':'none',
nevercss:getAsiiStrLen(ajo)>5?"":"wd2"

}),


onload:function(){
var cJ=this,
apY=cJ.S("confirm"),
azq=cJ.S("cancel"),
awk=cJ.S("never");








addEvents([apY,azq,awk],
{
click:function(ap)
{
var aB=getEventTarget(ap);
if(aB==apY)
{
if(cJ.S("recordstatus"))
{
vx=cJ.S("recordstatus").checked;
}
Mb=1;
}
else if(aB==awk)
{
Mb=3;
}
cJ.close();



preventDefault(ap);
}
}
);
callBack.call(cJ,aL.onload);
},
onshow:function(){

gbIsMac||this.S("confirm").focus();
callBack.call(this,aL.onshow);
},
onclose:function(){
callBack.call(this,aL.onclose)
},
onbeforeclose:function(){
try
{

callBack.call(this,aL.onreturn,[Mb==1,vx,Mb]);
}
catch(bj)
{
}
return true;
}
});
}










function alertBox(aL)
{
confirmBox(extend({mode:"alert"},aL))
}













function promptBox(aL)
{
var acH=false,
ccn=aL.onreturn;
aL.onreturn=function(bh)
{
var ao=this;
callBack.call(ao,ccn,[acH||bh,ao.S("txt").value]);
};
aL.msg=T(
[
'<div class="dialog_txt">',
'<div style="margin:0 10px 10px;" class="bold">$msg$</div>',
'<div style="margin:10px 10px 5px;"><input type="text" id="txt" style="width:352px;" class="txt" value="$defaultValue$"/></div>',
'<div style="margin:0 10px 10px;" class="f_size addrtitle">$description$</div>',
'</div>',
]
).replace(aL);
confirmBox(extend(
{
sType:"custom",
height:160,
onload:function()
{
var ao=this;
addEvent(ao.S("txt"),"keydown",function(ap)
{
if(ap.keyCode==13)
{
acH=true;
ao.close();
}
}
);
},
onshow:function()
{
this.S('txt').select();
this.S("txt").focus();
}
},aL)
);
}











function loadingBox(aL)
{
if(!callBack(aL.oncheck))
{
var cv=new QMDialog(
{
sId:"LoAdINgBOx",
sTitle:aL.model+"\u6A21\u5757\u52A0\u8F7D\u4E2D...",
nWidth:400,
nHeight:187,
sBodyHtml:T(
[
'<div style="text-align:center;padding:58px; padding-bottom:78px;">',
'<img id="load" src="$images_path$ico_loading2104474.gif">',
'<span id="err" style="display:none;">$model$\u6A21\u5757\u52A0\u8F7D\u5931\u8D25</span>',
'</div>'
]
).replace(extend(aL,{images_path:getPath("image")})),
onclose:function()
{
cv=null;
}
}
);
if(aL.js)
{
var fN=[];
E(typeof aL.js=="string"?[aL.js]:aL.js,function(ji)
{
fN.push(ji);
}
);
loadJsFileToTop(fN);
}
waitFor(
function()
{
return callBack(aL.oncheck);
},
function(bh)
{

if(!cv)
{
return;
}
if(!bh)
{
show(cv.S("load"),false);
show(cv.S("err"),true);
}
else
{
cv.close(true);
callBack(aL.onload);
}
}
)
}
else
{
callBack(aL.onload);
}
}





















(function()
{
var aq=getTop();

function bTZ(aIO,asi)
{
var aIO="weixinCss";

if(!aq.S(aIO))
{
var aak=aq.document.createElement("style");
aak.type="text/css";
aak.id=aIO;
if(aq.gbIsIE)
{
aak.styleSheet.cssText=asi;
}
else
{
aak.innerHTML=asi;
}
aq.document.getElementsByTagName("head")[0].appendChild(aak);
}
}

var bXc=TE([
'<div id="mask" class="editor_mask opa50Mask editor_maskAtt" ></div>',
'<a id="close" class="wx_c_bar" href="javascript:;" title="\u5173\u95ED" style="$@$if($noclose$)$@$display:none$@$endif$@$;"><span class="wx_close"></span></a>',

'<div id="out" style="z-index:1000;position: absolute;width:$width$%;height:$height$%;margin-left:$offsetLeft$%;margin-top:$offsetTop$%;outline:0;" tabindex="-1" hidefocus="hidefocus">',
'<div id="body" style="width:100%;height:100%">$html$</div>',
'</div>'
]);


function maskPanel(ay)
{
bTZ(ay.sId,ay.sCssRule);

new QMPanel(
{
oEmbedWin:aq,
sStyle:"position:absolute;width:100%; height:100%; left:0; top:0; margin-top:-2px",
nWidth:"auto",
nHeight:"auto",
sId:"weixinnote",
sClassName:"qr_previewer",
sBodyHtml:bXc.replace(
{
noclose:ay.bNoCloseBtn,
html:ay.sBodyHtml,
images_path:getPath("image"),
offsetTop:(100-ay.nHeightPercent)/2,
offsetLeft:(100-ay.nWidthPercent)/2,
width:ay.nWidthPercent,
height:ay.nHeightPercent
}),
onclose:ay.onclose,
onload:function()
{
var aiJ=this;
aiJ.S("mask").onclick=aiJ.S("close").onclick=function()
{
aiJ.close();
}
ay.onload&&callBack.call(aiJ,ay.onload,[aiJ]);
}
}
);
}
window.maskPanel=maskPanel;
})();




function getQMPluginInfo(baY)
{
var b=
(gbIsWin&&
(


(gbIsFF&&gsFFVer.split(".")[0]>=3&&(gsFFVer.split(".")[1]>0||gsFFVer.split(".")[2]>=8||parseInt(navigator.buildID.substr(0,8))>=20090701))
||(gbIsChrome&&(""+gsChromeVer).split('.')[0]>=6)
||(gbIsSafari&&gsAgent.indexOf("se 2.x metasr 1.0")<0)
||(gbIsOpera)
||(gbIsQPlus)
||(gbIsQBWebKit&&getQMPluginInfo.Ac(gsQBVer,"6.5")>0)
)
)
||(gbIsMac&&getQMPluginInfo.Ac(gsMacVer,""+baY)>=0&&
(
gbIsFF&&parseFloat(gsFFVer)>=3.6
||gbIsChrome&&parseFloat(gsChromeVer)>=8
||gbIsSafari&&parseFloat(gsSafariVer)>=5
||gbIsQBWebKit
)
);
return b;
}







getQMPluginInfo.Ac=function(aTX,aTY)
{
var ams=(""+aTX).split("."),
amC=ams.length,
ano=(""+aTY).split("."),
ann=ano.length;

for(var i=0;i<amC&&i<ann;i++)
{
var anr=parseInt(ams[i]),
anl=parseInt(ano[i]);
if(anr==anl)
{
continue;
}
return anr>anl?1:-1;
}
if(i<amC)
{
return 1;
}
if(i<ann)
{
return-1
}
return 0;
};






var QMAXInfo=
{
amF:
{
path:"/activex/",
cab:["TencentMailActiveX.cab","TencentMailActiveX_2.cab"],
exe:"TencentMailActiveXInstall.exe",

obj:[
["TXGYMailActiveX.ScreenCapture","TXGYMailActiveX.UploadFilePartition",
"TXGYMailActiveX.Uploader","TXFTNActiveX.FTNUpload","TXGYMailActiveX.DropFile"]],
available:["ScreenCapture","Uploader","FTNUpload","DropFile","UploadFilePartition"],
lastVer:["1.0.1.54","1.0.1.29","1.0.1.54","1.0.2.1","1.0.0.53"],
miniVer:[(getDomain()=="foxmail.com")?"1.0.0.5":"1.0.1.28",
"1.0.1.28","1.0.1.28","1.0.0.16","1.0.0.7"]
},

ajx:
{
path:"/xpi/",
xpi:"TencentMailPlugin.xpi",

obj:["ScreenCapture","","Uploader","FTNUpload",""],
available:["ScreenCapture","Uploader","FTNUpload"],
name:["QQMail Plugin","","QQMail Plugin","Tencent FTN plug-in","QQMail Plugin"],




type:(function()
{
var zc="application/txftn",
anB="application/txftn-webkit";
return["application/x-tencent-qmail","","application/x-tencent-qmail",
(typeof navigator.mimeTypes!="undefined")&&navigator.mimeTypes[anB]?anB:zc,
"application/x-tencent-qmail"];
})(),
lastVer:["1.0.1.54","","1.0.1.54","1.0.0.4","1.0.0.0"],

miniVer:["1.0.1.28","","1.0.1.28","1.0.0.4","1.0.0.0"]
},

Qs:
{
path:"/crx/",
crx:"TencentMailPlugin.crx",
exe:"QQMailWebKitPlugin.exe",
obj:["ScreenCapture","","Uploader","FTNUpload",""],
available:["ScreenCapture","FTNUpload"],
name:["QQMail Plugin","","QQMail Plugin","Tencent FTN plug-in",""],
type:["application/x-tencent-qmail-webkit","","application/x-tencent-qmail-webkit","application/txftn-webkit",""],
lastVer:["1.0.1.54","","1.0.1.54","1.0.0.4",""],
miniVer:["1.0.1.28","","1.0.1.28","1.0.0.4",""]
},

acz:
{
path:"/crx/",
pkg:"TencentMailPluginForMac.pkg",
obj:["ScreenCapture","","Uploader","FTNUpload",""],
available:["ScreenCapture","Uploader"],
name:["QQMailPlugin","","QQMailPlugin","Tencent FTN Plug-in",""],
type:["application/x-tencent-qmail-webkit","","application/x-tencent-qmail-webkit","application/txftn",""],
lastVer:["1.0.1.34","","1.0.1.34","1.0.0.3",""],
miniVer:["1.0.1.34","","1.0.1.34","1.0.0.3",""]
},







mbAblePlugin:getQMPluginInfo("10.6.8"),



mbAbleUsePlugin:getQMPluginInfo("10.6.8"),




aRp:true,

getTitle:function()
{
return gbIsIE?"\u63A7\u4EF6":"\u63D2\u4EF6";
},




getinfo:function()
{
if(QMAXInfo.mbAblePlugin)
{
if(gbIsWin)
{
if(gbIsIE)
{
return QMAXInfo.amF.available;
}
if(gbIsFF)
{
return QMAXInfo.ajx.available;
}
if(gbIsChrome||gbIsSafari||gbIsOpera||gbIsQBWebKit)
{
return QMAXInfo.Qs.available;
}
}
if(gbIsMac)
{
return QMAXInfo.acz.available;
}
}

return[];
},




aSY:function()
{








},











installer:function(aC,nc)
{
var bE=this.get("whole",nc),
fC="";
if(/^online/.test(aC))
{
if(bE.cab)
{
fC=this.get("cab");
}
else
{
fC=bE.xpi||(gbIsChrome&&parseInt(gsChromeVer)<21&&bE.crx);
}
}
else if(/^download/.test(aC)&&bE)
{
if(nc=="FF"||(!nc&&gbIsFF))
{
bE=this.get("whole","WebKit");
}
fC=bE.exe||bE.pkg;
}
if(fC)
{
var daP=fC.split('.');
fC=[[daP[0]].concat(bE.lastVer[0].split('.')).join("_"),daP[1]].join('.');
}
if(fC&&/Abs$/.test(aC))
{
fC=bE.path+fC;
}
return fC;
},







get:function(FU,zn)
{
if(!zn)
{
gbIsIE&&(zn="IE");
gbIsFF&&(zn='FF');
(gbIsChrome||gbIsSafari||gbIsOpera||gbIsQBWebKit)&&(zn="WebKit");
!gbIsIE&&gbIsMac&&(zn="mac");
}

var jD={
IE:this.amF,
FF:this.ajx,
chrome:this.Qs,
WebKit:this.Qs,
mac:this.acz
}[zn];

if(!this.aRp)
{
this.aSY();
}

if(FU=="whole")
{
return jD;
}
else if(FU=="cab")
{
var iP=createActiveX(0),
fC=iP?"":"_2.dll";
try{fC=iP.GetDLLFileName();}catch(e){}
return jD["cab"][fC&&fC.indexOf("_2.dll")!=-1?0:1];
}

return jD[FU];
}
};






function createActiveX(nV,ax)
{
if(!gbIsIE)
{
return createPlugin(nV,false,ax);
}

if(nV>=0&&nV<=4)
{
var sy=QMAXInfo.get("obj");
for(var i=0,len=sy.length;i<len;i++)
{




















if(nV==3)
{
try
{
new ActiveXObject(sy[i][0]);
}
catch(bj)
{
}
}
try
{
return new ActiveXObject(sy[i][nV]);
}
catch(bj)
{
}
}
}
return null;
}








function detectActiveX(nV,vI,Yy,bmt)
{
if(!gbIsIE)
{
return detectPlugin(nV,vI,Yy,bmt);
}

var Jv=typeof(Yy)=="undefined",
sX=false,
na=Jv?createActiveX(nV)
:Yy,
hC=getActiveXVer(na);




if(na&&hC)
{

if(vI!=1&&vI!=2)
{
sX=true;
}




else if(getQMPluginInfo.Ac(hC,QMAXInfo.get(vI==1?"miniVer":"lastVer")[nV])>=0)
{
sX=true;
}

if(Jv)
{
delete na;
na=null;
}
}
return sX;
}






function getActiveXVer(bU)
{
if(!gbIsIE)
{
return getPluginVer(bU);
}

var hC="",
na;
try
{
na=typeof(bU)=="number"?createActiveX(bU):bU;
hC=na&&(na.version
?na.version
:"1.0.0.8")||"";
}
catch(bj)
{
}

return hC;
}






function checkInstallPlugin(jc)
{

if(!QMAXInfo.mbAbleUsePlugin)
{
return false;
}

try
{

navigator.plugins.refresh(false);
}
catch(e)
{
}

var bd=QMAXInfo.get("name")[jc],
bk=QMAXInfo.get("type")[jc],
te=navigator.plugins;
if(te&&bd)
{
for(var i=te.length-1;i>=0;i--)
{
for(var j=te[i].length-1;j>=0;j--)
{
if(te[i].name.indexOf(bd)!=-1&&te[i][j].type==bk)
{

if(jc==3&&+gsFFVer>=22)
{
continue;
}


if(jc!=3&&(gsAgent.indexOf("vista")>-1||/nt 6/gi.test(gsAgent))&&bk=="application/x-tencent-qmail")
{
var Us=te[i].description.split('#')[1];
if(!Us)
{

continue;
}
}

var Us=/(\d+(?:\.\d+)+)/.test(te[i].description||"")?RegExp.$1:"1.0.0.0";
if(gbIsMac&&jc!=3&&Us=="1.0.0.0")
{
continue;
}

if(gbIsMac&&gbIsChrome&&parseFloat(gsChromeVer)>21&&getQMPluginInfo.Ac(Us,"1.0.0.6")<0)
{
continue;
}

return true;
}
}


}
}
return false;
}









function createPlugin(jc,bsc,ax,pN)
{
var fQ=null;
ax=ax||getMainWin();
switch(jc)
{
case 0:
case 2:
case 4:
if(gbIsSafari)
{
createPlugin.auL(jc,ax,pN);
}
fQ=createPlugin.auL(jc,getTop(),pN);
break;
case 3:
fQ=createFTNPlugin(ax,pN);
break;
}


if(!bsc&&checkInstallPlugin(jc))
{

getTop().ossLog("delay","all",
T([
'stat=ff_addon',
'&type=%type%&info=%info%'
],'%').replace({
type:!fQ?"failcreatePlugin":"successcreatePlugin",
info:["ver:",gsFFVer,",pluginId:",jc,",brtpe:",(gbIsFF?1:(gbIsChrome?2:(gbIsSafari?3:(gbIsOpera?4:5))))].join("")
})
);
}
return fQ;
}

createPlugin.auL=function(jc,ax,pN)
{
var kk,
fQ=null,
QO=gbIsFF?"application/x-tencent-qmail":"application/x-tencent-qmail-webkit";
ax=ax||getTop();
if(checkInstallPlugin(jc))
{
var Lb=pN||"QQMailFFPluginIns";
if(!(kk=S(Lb,ax)))
{
insertHTML(

ax.document.body,
"beforeEnd",
T('<embed id="$id$" type="$type$" hidden="true" style="position:absolute;top:-999px;"></embed>').replace({

type:QO,
id:Lb
})
);
kk=S(Lb,ax);
}

var Pm={0:"CreateScreenCapture",
2:"CreateUploader",
4:"CreateDragDropManager"
}[jc];
if(typeof kk[Pm]!="undefined")
{
fQ=kk[Pm]();



if(jc==0)
{
fQ.OnCaptureFinished=function(){};
}
else if(jc==2)
{
fQ.OnEvent=function(){};
}
}
}
return fQ;
};

createPlugin.aTz=function(ax,pN)
{
var kk=null,


QO=QMAXInfo.get("whole")["type"][3],
adf=pN||"npftnPlugin";
ax=ax||getTop();
if(!(kk=S(adf,ax)))
{
insertHTML(
ax.document.body,
"beforeEnd",
T('<embed id="$id$" type="$type$" style="z-index:99999;position:absolute;top:0;left:0;width:1px;height:1px;"></embed>').replace({

type:QO,
id:adf
})
);
kk=S(adf,ax);
if(kk)
{
kk.onEvent=function(){};
}
}
return kk;
};







function createFTNPlugin(ax,pN)
{
if(!checkInstallPlugin(3))
{
return null;
}
createPlugin.aTz(ax,pN);
var kk=createPlugin.aTz(getTop(),pN);
















if(pN)
{

getTop().ossLog("delay","all",T([
'stat=ff_addon',
'&type=%type%&info=%info%'
],'%').replace({
type:kk&&kk.Version?"successcreatePlugin":"failcreatePlugin",
info:["ver:",gsFFVer,",pluginId:3,insId:",pN].join("")
}));
}

return kk.Version?kk:null;
}






function detectPlugin(jc,vI,aRt,pN)
{

var sX=false;
var ajy=aRt||createPlugin(jc,true,null,pN),
hC=getPluginVer(ajy);

if(ajy&&hC)
{
if(vI!=1&&vI!=2)
{
sX=true;
}

else if(jc==3&&!gbIsMac&&gbIsSafari)
{
sX=false;
}


else if(getQMPluginInfo.Ac(hC,QMAXInfo.get(vI==1?"miniVer":"lastVer")[jc])>=0)
{
sX=true;
}
}
return sX;
}



function getPluginVer(bU)
{
var na,hC="";
try
{
na=typeof(bU)=="number"?createPlugin(bU,true):bU;
hC=(na&&na.Version)||"";
}
catch(bj)
{
}

return hC;
}








































function initDialog(aM,Db,bz,qh,lI)
{
new(getTop().QMDialog)({
sid:aM,
sTitle:Db,
sUrl:bz,
nWidth:qh,
nHeight:lI
});
}








function requestShowTip(Wk,bVi,ax,bV)
{
var aY=T('/cgi-bin/tip?sid=$sid$&args=$dom$,$tip$&r=$r$').replace({
sid:getSid(),
dom:Wk,
tip:bVi,
r:Math.random()
});


QMAjax.send(aY,{
method:'GET',
onload:function(bh,bO,fU)
{
if(bh&&bO.indexOf('oTop.QMTip')>0)
{
if(!bV||bV(bO,fU))
{
globalEval(bO,ax);
}
}
}
});
}

function detectCapsLock(BX,brw,eU)
{
if(!BX)
{
return;
}
function showTips(ap)
{
var aT=ap.target||ap.srcElement,
cs=calcPos(aT),
eD=brw||S("capTip");

function getStyle()
{
return["z-index:20;position:absolute;background:#fdf6aa;padding:1px;",
"border:1px solid #dbc492;border-right:1px solid #b49366;border-bottom:1px solid #b49366;",
"left:",cs[3],"px;","top:",(cs[2]+1),"px;"].join("");
}
if(!eD)
{
insertHTML((eU||document).body,"afterBegin",
'<div id="capTip" style="'+getStyle()+'">\u5927\u5199\u9501\u5B9A\u5DF2\u6253\u5F00</div>');
}
else
{
eD.style.cssText=getStyle();
}
}
function hideTips()
{
show(S("capTip",(eU||document)),false);
}
var Fu=-1;
addEvents(BX,{
keydown:function(ap)
{
var gE=ap.keyCode||ap.charCode

if(gE==20)
{
if(Fu==0)
{
showTips(ap);
Fu=1;
}
else if(Fu==1)
{
hideTips();
Fu=0;
}

}
},
keypress:function(ap)
{
var gE=ap.keyCode||ap.charCode,
yO=ap.shiftKey;

if((gE>=65&&gE<=90&&!yO)
||(gE>=97&&gE<=122&&yO))
{
Fu=1
showTips(ap);
}
else if((gE>=97&&gE<=122&&!yO)||(gE>=65&&gE<=90&&yO))
{
Fu=0;
hideTips();
}
else
{
hideTips();
}
},
blur:function()
{
hideTips();
}
});
}







function calcMainFrameDomInGlobalPos(bUQ,afn)
{
var cs=calcPos(bUQ),
aWx=calcPos(S("mainFrame",getTop())),
beN=getMainWin().document,
bjC=beN.documentElement,
bkk=beN.body,
eA=cs[3]+aWx[3]
-(bjC.scrollLeft||bkk.scrollLeft||0),
cj=cs[0]+aWx[0]
-(bjC.scrollTop||bkk.scrollTop||0),
cS=cs[4],
cN=cs[5];

return afn=="json"
?{top:cj,bottom:cj+cN,left:eA,
right:eA+cS,width:cS,height:cN}
:[cj,eA+cS,cj+cN,eA,cS,cN];
}

function allDeferOK()
{
return typeof all_defer_js=="function"
}





















function jumpToAttachFlag(bc,bgg)
{
var bun=[bc,bgg,bgg].join("|"),
eOt=T("/cgi-bin/attachfolder?topmails=0&sid=$sid$&s=search&folderid=attach&hflag=attach&page=0&t=attachfolder&subject=&sender=&receiver=&searchmode=attach&advancesearch=0&showattachtag=1&action=list&mailattach=$mailattach$");

attachSetFlag.daQ(
{
bIsSetStarred:true,
oMailAttachs:[bun],
bIsSilence:true
},
function(av)
{


getTop()["gsSelectedAttach"]='';
goUrlMainFrm(eOt.replace(
{
sid:getSid(),
mailattach:encodeURI(bun)
}
));
}
);
};






function attachSetFlag(bU,ast,bV)
{
var dut=typeof(bU)=="string"?bU.split(","):bU;
attachSetFlag.daQ(
{
bIsSetStarred:ast,
oMailAttachs:dut
},
function(av)
{
bV&&bV.call(null,av);

rdVer(dut.shift().split("|").shift(),1);
}
);
};

attachSetFlag.daQ=function(aL,bV)
{
var aS=aL||{},

aZy=aS.bIsSetStarred?"\u9644\u4EF6\u5DF2\u6536\u85CF":"\u9644\u4EF6\u5DF2\u53D6\u6D88\u6536\u85CF",
eNW=aS.bIsSetStarred?"\u6536\u85CF\u5931\u8D25":"\u53D6\u6D88\u6536\u85CF\u5931\u8D25";

QMAjax.send(
"/cgi-bin/attachfolder?t=attachfolder.json",
{
method:"POST",
content:TE([
'$@$for($mailattach$)$@$',
'&mailattach=$_this_$',
'$@$endfor$@$',
'&action=$action$'
]).replace({
'mailattach':aS.oMailAttachs,
'action':aS.bIsSetStarred?"setflag":"cancelflag"
}),
onload:function(bh,bU)
{
if(bh)
{
try
{
var aE=eval(bU);
!aS.bIsSilence
&&showInfo(aZy);
bV&&bV.call(null,aE);
}
catch(e)
{
!aS.bIsSilence
&&showError(eNW);
}
}
else
{
!aS.bIsSilence
&&showError("\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");
}
}
}
);
};







function markAsFinished(aC,bV)
{
var aq=getTop(),
aI=aq.getMainWin(),
aQ;

if(aC=="readmail")
{
aQ=aI.QMReadMail.getCBInfo(aI);
}
else if(aC=="maillist")
{
aQ=aq.QMMailList.getCBInfo(aI);
aq.QMMailList.selectedUI({oMail:[],oACB:aQ.oACB});
}
else
{
debug("mailid:"+aC);
aQ={oMail:[{sMid:aC}]};

bV=bV||function(){};
}
debug(aQ,2);

aQ
&&pendingMail(false,aQ,bV);
QMMailCache.setExpire();
return;
}




















function getAttachList(bU,bV,cH)
{
cH=cH||{};
var tI=arguments.callee,
bv=arguments,
bP=(typeof bU=="object"&&bU.length)?bU:[],
bon=T("/cgi-bin/readmail?sid=$sid$&t=$t$&s=forward&from=attachfolder&disptype=html&ef=js$param$"),
oL=TE([
'$@$for($oAttach$)$@$',
'&mailattach=$mailid$|$attachid$|$attachname$|$fileextenal$|$filebyte$',
'$@$if($editname$)$@$',
'|$editname$',
'$@$endif$@$',
'$@$endfor$@$'
]).replace({
oAttach:bP
});

QMAjax.send(bon.replace({
sid:getSid(),
t:"compose.json",
param:oL
}),
{
method:"GET",
onload:function(bh,cY,cL)
{
var ge=true;
if(bh)
{
try
{
var aE=eval(["(",cY,")"].join("")),
qG=aE.attach;
if(qG&&qG.length)
{
for(var i=0;i<qG.length;i++)
{
if(+qG[i]["byte"]==0)
{
ge=false;
break;
}
}
}
else
{
ge=false;
}
}
catch(e)
{
ge=false;
}
}

if(ge&&bh)
{
bV(true,aE,cL);
}
else
{
bV(false,aE,cL,cY);
}
}
},
cH.ajax
);




























};





function isEn()
{
return getLocale()=="en_US";
}

function isCh()
{
return getLocale()=="zh_CN";
}



function getLocale()
{
if(typeof gsLocale=="undefined")
{
return"zh_CN";
}
else
{
return gsLocale||"zh_CN";
}
}






function mailRecall(eY,aL,mG)
{
var eN=mG||{},
GX=extend(
{
r:Math.random(),
sid:getSid()
},
aL
);

if(eN.onbeforesend&&eN.onbeforesend()===false)
{
return;
}
QMAjax.send(
"/cgi-bin/send_status",
{
method:"POST",
content:!eY?
T('t=send_status.json&s=mailrecallv2&messageid=$msgid$&time=$time$&sid=$sid$&r=$r$&ef=js').replace(GX):
T('t=send_status.json&s=mailrecall_queryv2&taskid=$taskid$&messageid=$msgid$&sid=$sid$&r=$r$&ef=js').replace(GX),
onload:function(bh,bU)
{
if(bh)
{
try
{
var aE=eval(["(",bU,")"].join(""));
if(+aE.errcode>-1&&aE.taskid!=="0")
{
eN.onsuccess&&eN.onsuccess(aE);
return;
}
else if(+aE.taskid==0)
{
showError("\u67E5\u8BE2\u90AE\u4EF6\u64A4\u56DE\u72B6\u6001\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002");
}
else
{
showError(aE.errmsg||(eY==1?"\u67E5\u8BE2\u90AE\u4EF6\u64A4\u56DE\u72B6\u6001\u5931\u8D25\uFF0C\u64A4\u56DE\u7ED3\u679C\u5C06\u7A0D\u540E\u901A\u77E5\u4F60":"\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"));
}
}
catch(e)
{
showError(aE.errmsg||(eY==1?"\u67E5\u8BE2\u90AE\u4EF6\u64A4\u56DE\u72B6\u6001\u5931\u8D25\uFF0C\u64A4\u56DE\u7ED3\u679C\u5C06\u7A0D\u540E\u901A\u77E5\u4F60":"\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"));
}
eN.onerror&&eN.onerror(bU);
}
else
{
bU!="abort"
&&showError(aE.errmsg||(eY==1?"\u67E5\u8BE2\u90AE\u4EF6\u64A4\u56DE\u72B6\u6001\u5931\u8D25\uFF0C\u64A4\u56DE\u7ED3\u679C\u5C06\u7A0D\u540E\u901A\u77E5\u4F60":"\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"));
eN.onerror&&eN.onerror(bU);
}
eN.oncomplete&&eN.oncomplete(bh,bU);
}
}
);
};





function backHome(bGQ)
{
if(getLocale()=="zh_CN")
{
getMainWin().location.href=T('/cgi-bin/today?sid=$sid$&loc=backhome,,,$locid$')
.replace(
{
sid:getSid(),
locid:bGQ||140
}
);
}
else
{
getMainWin().location.href=T('/cgi-bin/mail_list?sid=$sid$&folderid=1&page=0&nocheckframe=true').replace(
{
sid:getSid()
});
}
}






function resizeFolderList()
{
var aBV=S("SysFolderList"),
atT=S("ScrollFolder"),
mt=S("folder");
















if(aBV&&atT&&mt)
{
var awZ=["auto","hidden"],
aPe=mt.clientHeight,
aOD=aBV.offsetHeight,
OO=aPe-aOD,
auz=OO<50?0:1;
mt.style.overflow=awZ[auz];
mt.style.overflowX=awZ[1];
atT.style.overflow=awZ[1-auz];
atT.style.height=auz
?(aPe-aOD)+"px":"auto";
}





}






function setTopSender(cH)
{
var PC=getTop().goUserInfo.get("DEF_MAIL_FROM")||'';
switch(cH&&cH.action)
{
case"setting4":
if(PC!=cH.email)
{
setUserInfo("addr",cH.email);
setDefaultSender(cH.email);
changeStyle(cH.skin,cH.logo);
getTop().skin_path=cH.skin;
clearCache(["css",getPath("style"),"skin"]);
}


getTop().goUserInfo.reset();
break;
}
}




function bindAccount()
{
var alK=S("useraddr"),
azO=S("useraddrArrow"),
Gl=getTop().goUserInfo.get('RealBindAccount'),
yi={nHeight:10,sItemValue:'<div style="background:#CCC; height:1px; margin-top:5px; overflow:hidden;"></div>'},
bq=[],
bdw=alK&&subAsiiStr(alK.innerHTML,20,"...");

if(!alK||!Gl)
{
return;
}

if(Gl.qq.length+Gl.biz.length)
{
bq.push(
{
sItemValue:'<a id="manage" href="javascript:;" style="float: right;">\u7BA1\u7406</a><span class="ml">\u5173\u8054\u5E10\u53F7\uFF1A</span>'
},
{
sId:'self',
bDisSelect:true,
sItemValue:T('<div class="unread_num"><span class="ico_unreadnum"></span>$unread$</div><input type="button" class="ft_upload_success" id="self"/><span style="overflow:hidden;margin-left:0" >$myemail$</span>').replace(extend({myemail:subAsiiStr(bdw,19,"...")},Gl.self))
}
);
E(['qq','biz'],function(cf,dT)
{
var cQ=Gl[cf].length;
if(cQ&&dT)
{
bq.push(yi);
}
for(var cQ=Gl[cf].length,i=0;i<cQ;i++)
{
var aE=Gl[cf][i],

gk=subAsiiStr(aE['email'],19,"...");














bq.push(
{
bk:cf,
sId:aE.uin,
sItemValue:['<div class="unread_num"><span class="ico_unreadnum"></span>',aE.unread,'</div>','<span style="overflow:hidden;">',gk,'</span>'].join('')
}
);
}
}
);
}
else
{

bq.push(
{
sItemValue:'\u60A8\u7684\u5F53\u524D\u90AE\u7BB1\u5E10\u53F7\uFF1A'
},
{
sItemValue:T('<strong class="ml black">$myemail$</strong>').replace({myemail:bdw})
},
yi,
{
sItemValue:'\u62E5\u6709\u5907\u7528\u90AE\u7BB1\uFF0C\u6765\u9002\u7528\u4E8E\u4E0D\u540C\u7528\u9014\u3002'
},
{
sItemValue:'\u5B83\u4EEC\u53EF\u4EE5\u5173\u8054\u5728\u4E00\u8D77\uFF0C'
},
{
sItemValue:'\u65B9\u4FBF\u968F\u610F\u5207\u6362\u4E0D\u540C\u7684\u90AE\u7BB1\u3002'
},
{
nHeight:35,
sItemValue:'<a id="bind" class="btn_gray btn_space ml">\u7533\u8BF7\u5907\u7528\u90AE\u7BB1</a><a href="/cgi-bin/readtemplate?sid=$sid$&t=attrpwd_sec" target="mainFrame" id="bind_a" class="btn_gray">\u5173\u8054\u5DF2\u6709\u90AE\u7BB1</a>'
}
);
}
if(azO)
{
azO.style.visibility="visible";
azO.parentNode.onclick=function()
{
var nx=calcPos(alK.parentNode);
new QMMenu(
{
sId:"bindaccount",
sClassName:"bindacc qmpanel_shadow",

nX:nx[3],
nY:nx[2],
nWidth:235,
nMinWidth:160,
nItemHeight:25,
oItems:bq,
onitemclick:function(aM,bw)
{
if(bw.bk=='biz')
{
submitSwitchForm();
}
else
{
goUrlTopWin(T('/cgi-bin/login?vt=relate&uin=$uin$&old_sid=$sid$').replace({
uin:aM,
sid:getSid()
})
);
}
},
onload:function()
{
var ao=this,
bhu=ao.S("self"),
cA;
if(bhu)
{
cA=bhu.parentNode;
setClass(cA,cA.className+' settingtable');
}

addEvent(ao.S("manage"),'click',function(ap)
{

goUrlMainFrm(
T("/cgi-bin/setting4?fun=list&acc=1&sid=$sid$&go=bind").replace({sid:getSid()})
);
ao.close();
preventDefault(ap);
}
);

addEvent(ao.S("bind"),'click',function(ap)
{

goUrlMainFrm(
T("/cgi-bin/readtemplate?sid=$sid$&t=attrpwd_sec_alone&s=regemail&by=beiyong").replace({sid:getSid()})
);
ao.close();
preventDefault(ap);
}
);

addEvent(ao.S("bind_a"),'click',function(ap)
{

goUrlMainFrm(
T("/cgi-bin/readtemplate?sid=$sid$&t=attrpwd_sec").replace({sid:getSid()})
);
ao.close();
preventDefault(ap);
}
);

}
}
);
};
}
}

bindAccount.dFA=function()
{
var ao=arguments.callee;
if(ao.xw)
{
}

};




function initAddress(bV)
{
callBack.call(window,bV,[{sType:"loading",sMsg:""}]);

var aq=getTop(),
NI=aq.document,
cgF=getPath("js"),
gU=0,
nv=function()
{
if(++gU>=2)
{
aq.QMAddress.initAddress(bV);
}
};

loadJsFile("$js_path$qmlinkman188ca7.js",true,NI,nv);
loadJsFile("$js_path$qmaddress181b8c.js",true,NI,nv);






























}




function getPhotoCGI()
{
return[location.protocol,"//",location.host,"/cgi-bin/upload?sid=",getTop().getSid()]
.join("");
}





function bhs()
{
var tI=arguments.callee;
return(tI.PU||(tI.PU=
{"sid":1,"username":1,"foxacc":1,

"m3gmsid":1,"mcookie":1,"msid":1,"defaultf":1,
"qm_flag":1,"QFRIENDUNREADCNT":1,"RSSUNREADCNT":1,"rss_domain":1,"qqmail_activated":1,"qqmail_alias_default":1,
"qqmail_from":1,"wimrefreshrun":1,"new":1,"qm_sk":1,"qm_ssum":1,"qq2self_sid":1,"exstype":1,"lockurl":1,"new_mail_num":1})
);
}

function setUserCookie(aR,cf,nf,dv,ky,pQ)
{







if(bhs()[aR]==1)
{
var pq=getCookie(aR),
fJ=pq?pq.split("|"):[],
eK=getUin(),
cB=eK+"&"+cf,
ge=true;


for(var i=0;i<fJ.length;i++)
{
if(fJ[i].match(eK))
{
fJ[i]=cB;
ge=false;
}
}

pq=fJ.join("|");
ge&&(pq+=(pq==""?"":"|")+cB);
return setCookie(aR,pq,nf,dv,ky,pQ);
}
else
return setCookie(aR,cf,nf,dv,ky,pQ);

}





function getUserCookie(aR)
{




var hw=getCookie(aR);

if(bhs()[aR]!=1)
{
return hw;
}
else
{
var fJ=hw?hw.split("|"):[],
eK=getUin();

for(var i=0;i<fJ.length;i++)
{
if(fJ[i].match(eK))
{
return((fJ[i].split("&"))[1]||fJ[i]);
}
}
return hw;
}

}




function deleteUserCookie(aR,dv,ky)
{
deleteCookie(aR,dv,ky);
}





function setUserCookieFlag(aR,dT,yo,aAw)
{
return setCookieFlag(aR,dT,yo,aAw)
}





function getUserCookieFlag(aR)
{
return getCookieFlag(aR);
}




Scale=(function(){

var aMB=1,
boK=1.10,
enZ=1.25,
LN=aMB,
yZ=LN,
aCT=650,
ql="normal",
aZD="",
dDV=true,
azA=null,
ajk=null,
dR=null,
cHl=function(bmL,bbj)
{
if(bbj>1.0)
{
if(bbj==1.10)
{
addClass(bmL,"scale1_10");
rmClass(bmL,"scale1_25");
}
else
{
addClass(bmL,"scale1_25");
rmClass(bmL,"scale1_10");
}
}
else
{
rmClass(bmL,"scale1_25");
rmClass(bmL,"scale1_10");
}
},
cWT=function(aw,bbj)
{
if(gbIsIE)
{
aw.style.zoom=bbj;
}
else if(!gbIsFF)
{
aw.style.WebkitTransformOrigin=
aw.style.MozTransformOrigin=
aw.style.OTransformOrigin=
aw.style.TransformOrigin="0 0";
aw.style.WebkitTransform=
aw.style.MozTransform=
aw.style.OTransform=
aw.style.Transform="scale("+bbj+")";
}

cHl(ajk,bbj);
cHl(getMainWin().document.body,bbj);
},
cSs=function()
{
var dqc=azA.clientHeight,
dCZ=azA.clientWidth;
yZ=LN;

if(dCZ<1060&&yZ>aMB)
{
yZ=aMB;
}
else if(dCZ<1250&&yZ>boK)
{
yZ=boK;
}
if(dqc<595&&yZ>aMB)
{
yZ=aMB;
}
else if(dqc<640&&yZ>boK)
{
yZ=boK;
}

cWT(ajk,yZ);

S("resize").style.width=azA.clientWidth/yZ+"px";
S("resize").style.height=azA.clientHeight/yZ+"px";

},
dAb=function()
{
var bId=getMainWin(),
aaV=azA.clientWidth;


if(dDV&&aaV<=aCT)
{
yZ=aaV/aCT;

if(ql=="normal")
{
ql="scale";
aZD=ajk.style.cssText;

S("resize").style.width="100%";
S("resize").style.height="100%";
}

if(gnIEDocTypeVer==8)
{
ajk.style.width=aaV/yZ/yZ+"px";
ajk.style.height=(azA.clientHeight/yZ/yZ)+"px";
}
else
{
ajk.style.width=aaV/yZ+"px";
ajk.style.height=azA.clientHeight/yZ+"px";
}

cWT(ajk,yZ);
}
else if(ql=="scale")
{
ql="normal";
ajk.style.cssText=aZD;

cSs();
}
else
{

cSs();
}
if(bId.bSettingDisplay==1)
{
if(yZ==LN||yZ<1.0)
{
bId.NormalViewText&&bId.NormalViewText();
}
else
{
bId.StressViewText&&bId.StressViewText(
yZ==aMB?0:(yZ==boK?1:2)
);
}
}
},
dAi=function(sd)
{
if(gnIEDocTypeVer!=8)
{
return sd;
}

return sd/yZ;
},
eyU=calcPos;

window.calcPos=function(bI,afn)
{
return eyU(bI,afn,dAi,dAi);
};

return{
useMini:function(aiy)
{
dDV=!!aiy;
},
getScale:function()
{
return yZ;
},
fixFrameCursorPos:function(sd)
{
if(!gbIsIE)
{
return sd;
}

return sd/yZ;
},
fixCursorPos:function(vt,fEA)
{
return vt/yZ;
},
fixOffsetLeft:function(sd)
{
if(!gbIsIE)
{
return sd;
}

return sd/yZ;
},
fixOffsetTop:function(sd)
{
if(!gbIsIE)
{
return sd;
}

return sd/yZ;
},

fixBodyWidth:function(sd)
{

if(gnIEDocTypeVer==8)
{
return sd/yZ;
}
return gnIEDocTypeVer==7?sd:sd/yZ;
},

fixBodyHeight:function(sd)
{
return sd/yZ;





},
resize:function(doC)
{
LN=!doC?aMB:(doC==1?boK:enZ);
dAb();
},

initResizeScale:function()
{
ajk=document.body;
azA=document.documentElement;

if(gbIsIE)
{
ajk.style.position="relative";






}
else
{


ajk.style.height="auto";




}
azA.style.overflow="hidden";

addEvent(window,"resize",function()
{



dAb();

});
},
getContainer:function()
{
return getTop().S("resize")||getTop().document.body;
},
setBodyClass:function(ax)
{
cHl(ax.document.body,yZ);
}

}
})();







function getReaderData(bz)
{
if(window!=getTop())
{
getTop().getReaderData(bz);
}
else
{
var qT=arguments.callee;
removeSelf(qT.jsObj);
qT.jsObj=loadJsFile(bz+"&r="+Math.random(),false,document);
}
}






function getReaderDataInterval(bz,ub)
{
if(window!=getTop())
{
return getTop().getReaderDataInterval(bz,ub);
}
else
{
var qT=arguments.callee,
aY=(window.gsRssDomain||'')+"/cgi-bin/reader_data2?sid="+getSid()+"&t=rss_data.js";

if(qT.nTimer)
{
clearInterval(qT.nTimer);
}

function Rh()
{
getReaderData(aY);
}

qT.nTimer=setInterval(Rh,ub
||(window.gnRssInterval*1000)||(10*60*1000));
Rh();
}
}


function changeStatus(aVM)
{
var aPC=S("searchIcon");
aPC&&setClass(aPC,aVM?"ss_icon ss_fronticon ss_icon_loading":"ss_icon ss_fronticon ss_icon_search")
}





function doSearch()
{
QMPageInit.aVS(
function()
{
var gK=S("frmSearch");
gK.sender.value=gK.subject.value;
gK.receiver.value=gK.subject.value;
gK.keyword.value=gK.subject.value;
gK.combinetype.value="or";
submitToActionFrm(gK);
}
);
return false;
}





function audioPlay(ar)
{
var aq=getTop();
if(!ar.container)
{
ar.container=S('mp3player_container',aq.getMainWin());
}
if(ar.global&&!ar.globalcontainer)
{
ar.globalcontainer=S('gplayer_container',aq);
if(!ar.globalcontainer)
{
ar.global=false;
}
}

if(!aq.QMPlayer)
{

loadJsFileToTop(["$js_path$qmplayer/player181b8c.js"]);
}
waitFor(
function()
{
return!!aq.QMPlayer;
},
function(bh)
{
if(bh)
{



var adB="gplayer_kernel",
aXf=ar.id||("qmplayer_unique"+unikey());

function bcE()
{
var aX=adB+"_dom";
if(aq.S(aX))
{
return aq.S(aX)
}
else
{
var aB=aq.document.createElement("div");
aB.id=aX;
aB.style.cssText="position:absolute;left:-100000px;";
aq.document.body.appendChild(aB);
return aB;
}
};

if(!ar.msg)
{
ar.msg="QQ\u90AE\u7BB1\u64AD\u653E\u5668";
}
if(ar.container&&ar.container.getElementsByTagName("div").length==0)
{
ar.container.innerHTML="";
}

if(ar.global)
{
var amZ=QMPlayer.initKernel({
sId:adB,
oContainer:bcE()
}),
aYz=QMPlayer.initSkin({
sId:adB,
sSkin:"Global",




oContainer:ar.globalcontainer
});

aq.QMPlayer.init({
oSkin:aYz,
oKernel:amZ
});
}

aq.QMPlayer.delUIById(aXf);

aq.QMPlayer.init({
oSkin:QMPlayer.initSkin({
sId:aXf,
oContainer:ar.container,
sSkin:ar.skin||"Mini"
}),
oKernel:ar.global?amZ.setInfo(ar):QMPlayer.initKernel({
sId:aXf,
oContainer:ar.container,
oInfo:ar
})
});
}
else if(ar.container)
{
ar.container.innerHTML="\u64AD\u653E\u5668\u52A0\u8F7D\u5931\u8D25";
}
}
);
}




function audioStop()
{
var jN=getTop().QMPlayer;
jN&&jN.stop();
}




function audioPause()
{
var jN=getTop().QMPlayer;
jN&&jN.pause();
}














function setPlayer(ar)
{
var aq=getTop();

function aOt(ar)
{
debug(ar,2)
if(!aq.QMPlayer)
{
setTimeout(function()
{
aOt(ar);
},200);
return false;
}

var aX="qqmailMediaPlayer"+(ar.id||""),
aI=ar.win||window;

if(!aI||aI[aX])
{
return false;
}

if(!ar.container
&&!(ar.container=S("mp3player_container",aI)))
{
return false;
}
debug(aX)
return(aI[aX]=new aq.QMPlayer()).setup(ar);
}

if(!aq.QMPlayer)
{

loadJsFile("$js_path$qmplayer181b8c.js",true,aq.document);
}

return aOt(ar);
}













function playUrl(kN)
{
var jN=(kN.win||window)["qqmailMediaPlayer"
+(kN.id||"")];

if(!jN)
{
setPlayer(kN);
}
else
{
jN.openUrl(kN.url,kN.dispInfo);
}
}









function stopUrl(kN)
{
if(!kN)
{
kN={};
}

try
{
(kN.win||window)["qqmailMediaPlayer"+(kN.id||"")].stop();
}
catch(bj)
{
}
}











function searchMusic(kz,lA,bS)
{
if(window!=getTop())
{
return getTop().searchMusic(kz,lA,bS);
}
kz=kz||"";
lA=lA||"";
var KV=arguments.callee,
ayw=[kz,lA].join("@");

var eES=function(bz)
{






if(bz.indexOf("qqmusic.qq.com")==-1)
{
return bz;
}
else
{
if(bz.indexOf(".wma")!=-1)
{
var bt="stream",
rZ=bz.substring(bz.indexOf(bt)+bt.length),
ech=rZ.substring(0,rZ.indexOf(".")),
dBO=bz.substring(0,bz.indexOf(".")),
eae=bz.substring(bz.indexOf(".")),
fq=eae.split("/"),
hg=fq[0],
bnw=fq[1],
dTg=parseInt(ech)+10;

var eCn=parseFloat(bnw.substring(0,bnw.indexOf("."))),
eBe=eCn-12000000+30000000;
return dBO.substring(0,dBO.indexOf(bt)+bt.length)+dTg+hg+"/"+eBe+".mp3";
}
else
{
return bz;
}
}
}
KV.fCallBack=function(po)
{
var bP,
aY="",
aib=[];

if(!po.contentWindow.gMusicInfo||!(bP=po.contentWindow.gMusicInfo.list))
{
return bS(aib);
}







for(var i=0,aK=bP.length;i<aK;i++)
{
var bE={
song:bP[i].songname.replace(/<\/?strong>/gi,""),
singer:bP[i].singername.replace(/<\/?strong>/gi,"")
},
alj=htmlDecode(bP[i].songurl).replace(/\|/g,"").split(";");



for(var j=0,aBG=alj.length;j<aBG;j+=2)
{



if(alj[j])

{

bE.url=eES(alj[j].replace(/^(FI|SI|AN|QQ)/,""));

aib.push(bE);
break;
}
}
}
KV.Kg[ayw]=aib;
bS(aib);
};

if(!kz&&!lA)
{
return bS([]);
}
if(!KV.Kg)
{
KV.Kg={};
}
if(KV.Kg[ayw])
{
return bS(KV.Kg[ayw]);
}


KV.dbq=createBlankIframe(getTop(),{
id:"getMusicUrlFromSoSo",
style:"display:none;",
virtual:false,
header:T(
[
'<meta http-equiv="Content-Type" content="text/html; charset=gb2312"/>',
'<script>',
'function searchJsonCallback(a)',
'{',
'window.gMusicInfo = a;',
'}',
'<\/script>',
'<script src="$domain$/fcgi-bin/fcg_search_xmldata.q?w=$song$%20$singer$&source=3&r=$rand$&ie=utf-8"><\/script>',


]
).replace(
{
domain:(location.protocol=="https:"?'https://qqshow.mail.qq.com':'http://cgi.music.soso.com'),

song:encodeURIComponent(kz),

singer:encodeURIComponent(lA),
rand:Math.random()
}
),
destroy:true,
onload:function(ax)
{
searchMusic.fCallBack(this);
}
});
}








function getMusicUrl(kz,lA,bS)
{
searchMusic(kz,lA,function(zL)
{
if(zL.length>0)
{
var j=0,
aku=/\.mp3$/i;
for(var i=0;(gbIsMac||gbIsLinux)&&i<zL.length;i++)
{
if(aku.test(zL[i].url))
{
j=i;
break;
}
}

bS(zL[j].song,zL[j].singer,zL[j].url,zL);
}
else
{
bS(kz,lA,"",zL);
}
},1);
}









function startWebpush(NX)
{
var aq=getTop();

aq.loadCssFile("$css_path$webpushtip181b91.css",true);

aq.loadJsFile("$js_path$qmwebpushtip181b91.js",
true,
aq.document,
function()
{
aq.QMWebpushTip.open(NX);
}
);

aq.loadJsFile("$js_path$qmwebpush181b8c.js",true,aq.document);
}







function closeWebpush(NX)
{
getTop().QMWebpushTip&&getTop().QMWebpushTip.close(NX,true);
}








function ftSendStatic(gv,gS)
{
if(gv)
{
ossLog("realtime","all",T('stat=exskick&sid=$sid$&uin=$uin$&log=$code$')
.replace(
{
uin:gS||getTop().g_uin,
sid:getSid(),
code:gv
}
));
}
}






function twoDCodeImgUrl(czt)
{
var cC=location.getParams(czt);

return TE(
[
'/cgi-bin/generate_twodimcode?out=250&sid=$@$eval getSid()$@$',
'$@$if($mailid$)$@$',
'&filename=$@$eval escape($filename$)$@$&mailid=$mailid$',
'$@$else if($att$)$@$',
'&att=$att$&action=groupattach',
'$@$else if($k$)$@$',
'&k=$k$&code=$code$&action=bigattach',
'$@$endif$@$'
]).replace(cC);
}

function showTwoDCodeImgMenu(ax,au,iu,czt)
{
var ao=this,
aU=ax.document,
cs=calcPos(au),
oz=cs[2]-40,
hR=0,
lQ=bodyScroll(aU,"scrollTop"),
uu=bodyScroll(aU,"clientHeight");

if((hR=oz+320-lQ-uu)>0)
{
oz-=(hR+10);
}
new QMMenu(
{
oEmbedWin:ax,
sId:"scanImg",

bAutoClose:false,
sWidthDetect:"float",

nWidth:"auto",
nX:cs[3]+25,
nY:oz,
onshow:function()
{
if(gnIEVer==6)
{
this.S("twodcode").src=this.S("twodcode").src;
}
},
oItems:[
{
bDisSelect:true,
sStyle:"padding:0;",
nHeight:"auto",
sItemValue:T([
'<div style="width:300px;height:310px;padding-top:10px;">',
'<div style="text-align:center;">',
'<img id="twodcode" style="width:250px;height:250px;" src="$src$"/>',
'</div>',
'<div style="margin-top:-5px;">',

'<p style="margin:0;text-align:center;padding:5px 0;">\u626B\u63CF\u4E8C\u7EF4\u7801\uFF0C\u5C06\u9644\u4EF6\u4E0B\u8F7D\u5230\u624B\u673A\u3002</p>',
'<p style="margin:0;text-align:center;padding:5px 0;">\uFF08\u4E8C\u7EF4\u7801\u6709\u6548\u671F\u4E3A5\u5206\u949F\uFF09</p>',
'</div>',
'</div>'
]).replace(
{
filename:iu,
src:twoDCodeImgUrl(czt)
})
}]
});
}






function beginStatTime(ax)
{
var abd=parseInt(ax.location.hash.split("stattime=").pop());


if(!isNaN(abd)&&abd.toString().length==13&&abd>(getTop().gnStatTimeStamp||0))
{
ax.gnBeginTime=getTop().gnStatTimeStamp=abd;
ax.gnStatTimeStart=now();
}
}

















function endStatTime(ax,eg)
{
var En=ax.gnBeginTime,
fZ=ax.gnStatTimeStart,
hk=now();

if(!isNaN(fZ)&&!isNaN(En))
{
addEvent(ax,"load",function()
{
var aCO=now();
debug("delta time:"+(fZ-En));

ossLog("delay","sample",T(
[
'stat=cgipagespeed&type=$type$&t1=$t1$&t2=$t2$&t3=$t3$',
'&rcgi=$appname$&rt=$t$&rs=$s$&allt=$allt$&flowid=$wm_flowid$'
]
).replace(extend(eg,
{
t1:fZ-En,
t2:hk-fZ,
t3:aCO-hk,
allt:[En,fZ,hk,aCO].join("|")
}
)));

}
);
}
}
















function ossLog()
{
var aUV=getTop().ossLog;
return aUV.amx.apply(aUV,arguments);
}

ossLog.amx=function(aaZ,zY,qR,aFC)
{
var ao=this,
abg=aaZ||"realtime",
IY=ao.abo(qR),
lx=ao.lx||(ao.lx=[]),
hv=typeof zY=="number"?zY:{all:1}[zY||"all"]||0.1;




if(abg=="realtime")
{
ao.Jc(hv)&&ao.ayg(IY);
}

else
{

ao.Jc(hv)
&&lx.push(["delayurl","=",encodeURIComponent(IY)].join(""));

lx.length>=1000?ao.ayg()

:(!ao.dR&&lx.length>0&&(ao.dR=setTimeout(ao.ayg,5*1000)));
}
};

ossLog.ayg=function(FS)
{
var ao=ossLog,
lx=ao.lx;

if(FS||lx.length>0)
{
var aq=getTop(),
hg=osslogDomain(),
kd=S("osslog_iframe",aq),
nv=function(Cr)
{
QMAjax.send(hg+"/cgi-bin/getinvestigate",
{
method:"POST",
timeout:500,
content:T('sid=$sid$&$rl$&$ls$').replace(
{
sid:getSid(),
rl:FS,
ls:lx.join("&")
}
)
},
Cr&&new QMAjax(null,null,0,Cr.contentWindow.xmlHttp())
);
};

if(kd||!hg)
{
waitFor(function()
{
return!kd||!!kd.contentWindow.xmlHttp;
},
function(bh)
{
if(bh)
{
nv(kd);
}
}
);
}
else
{
createIframe(aq,hg+"/zh_CN/htmledition/ajax_proxy.html?mail.qq.com&v=130132",
{
id:"osslog_iframe",
onload:function()
{
nv(this);
}
});
}






































lx.length=0;
ao.dR&&clearTimeout(ao.dR);
ao.dR=null;
}
};

ossLog.Jc=function(ik)
{
return(this.Fm||(this.Fm=now()))%100<100*ik;
};

ossLog.abo=function(qR)
{
var jD=[];
typeof qR=="string"
?jD.push("&",qR)
:E(qR,function(jV,bG)
{
jD.push("&",bG,"=",encodeURIComponent(jV));
}
);
return jD.shift()&&jD.join("");
};









function isdLog(bIO,bG,jV)
{
var sN=T([
window.location.protocol,
"//isdspeed.qq.com/cgi-bin/r.cgi?flag1=6000&flag2=101&flag3=$flag$&$key$=$value$&r=$r$"
]),
eb=new Image();

setTimeout(function()
{
eb.src=sN.replace({
flag:bIO,
key:bG,
value:jV||"1",
r:Math.random()
});
}
);
}




function isSpreadAddr()
{
if(typeof gbNewAddrBook!="undefined")
{
return gbNewAddrBook==true;
}
else
{
return false;
}
}





var AD=
{
bQV:"",
bUr:[],
bCw:{},
init:function(ax)
{
var ao=this;

ax["AD_callback"]=function(ay)
{
if(ao.bQV!="timeout")
{
ao.bQV="ok";
ao.bCw={};
for(var i=0;i<ay.length;i++)
{
var aS=ay&&ay[i]&&ay[i][0];
try
{
var XQ=aS.loc,
cqu=aS.oid,
bYE=aS.fodder,
ossData={
loc:XQ,
oid:cqu,
hit:0
},
dEI=T("stat=log_ad_show&loc=$loc$&oid=$oid$&hit=$hit$&resource_url=$resource_url$&link_to=$link_to$&loc=ad_today,$loc$,$oid$,$hit$");
if(bYE[0]&&XQ&&!(cqu=="1"||cqu=="100"))
{
ao.bCw[XQ]=extend(bYE[0],{cid:aS.cid,loc:aS.loc,oid:aS.oid,monitor_url:aS.monitor_url});
ossData=extend(ossData,{
hit:1,
link_to:encodeURIComponent(bYE[0].link_to),
resource_url:encodeURIComponent(bYE[0].resource_url)
});
}
ao.ebG(ossData);
}
catch(e)
{
}
}
E(ao.bUr,function(qo)
{
var	aB=ao.cry(ax,qo),
gp=attr(aB,"callback");
if(ao.bCw[qo])
{
ao.eyZ(ax,ao.bCw[XQ],XQ);
}
else
{
ao.bYM(ax,qo);
}

ao.eKL.call(ao,{oWin:ax,adShow:ao.bCw[qo]?true:false,adLoc:qo,fCallback:gp});
});

}
};
this.ell(ax);
this.dWb(ax);
},
postADlog:function(ecs,he,bz,ap)
{
if(ecs=="flash")
{
var eB=getEventTarget(ap);
if(eB.tagName=="DIV")
{
ossLog("realtime","all",T('stat=log_ad_click&pos=$pos$')
.replace(
{
pos:he
}
));
bz&&window.open(bz);
}
}
else
{
ossLog("realtime","all",T('stat=log_ad_click&pos=$pos$')
.replace(
{
pos:he
}
));
}
},

setAdFlag:function()
{
setCookieFlag("CCSHOW",5,getTop().document.body.clientWidth<1152?0:1);
},
adjustADDisp:function()
{
var cI=getTop().getMainWin(),
cJt=S("qqmail_AD_container",cI),
bi=S("qqmail_mailcontainer",cI);
rdVer("BaseVer",1);
if(this.ekC()=="0"&&isShow(cJt))
{
cJt&&(show(cJt,0));
}
},
ekC:function()
{
return getCookieFlag("CCSHOW")[5];
},
ewR:function(bz)
{
var rZ=strReplace(bz,"http://",""),
arY=rZ.indexOf("/"),
hg=rZ.substr(0,arY),
eMe="https://stockweb.mail.qq.com";
return strReplace(bz,"http://"+hg,eMe)+"?pdomain="+hg;
},
eaR:function(eY)
{
var	dZO=TE([
'<span style="background:url($pingurl$);"></span>',
'$@$if($monitor_url$)$@$',
'<span style="background:url($monitor_url$);"></span>',
'$@$endif$@$',
'<a href="$link_to$" target="_blank"  onclick="getTop().AD.postADlog(\'img\',\'$pos$\')" ',
'style="white-space: nowrap; height:80px; overflow: hidden; display: block; margin-bottom:3px; background:url($resource_url$) no-repeat;"></a>']),
ecy=TE([
'<a href="$link_to$" target="_blank" style="background:url($pingurl$);" onclick="getTop().AD.postADlog(\'img\',\'$pos$\')">',
'<img src="$resource_url$" width="$width$" height="$height$">',
'$@$if($monitor_url$)$@$',
'<span style="background:url($monitor_url$);"></span>',
'$@$endif$@$',
'</a>',
'<style>',
'.ad_btn_close{position:absolute; top:5px; right:5px; line-height:0; text-decoration:none; background:#aaa; width:12px; height:12px;  border:1px solid #999;}',
'.ad_btn_close:hover{border-color:#888;background-color:#999;}',
'</style>',
'$@$if($bCloseBtn$)$@$',
' <a class="ad_btn_close" onclick="closeAD(\'$pos$\')"><img src="$img_path$ico_closetip.gif"></a>',
'$@$endif$@$',
]);
if(eY==1)
{
return dZO;
}
else if(eY==2)
{
return ecy;
}
},
eyZ:function(ax,av,qo,bV)
{
try
{
var aB=this.cry(ax,qo),
bVx=location.protocol=="https:",
dXb=bVx?T("https://stockweb.mail.qq.com/p?oid=$oid$&cid=$cid$&loc=$loc$&pdomain=p.l.qq.com")
:T("http://p.l.qq.com/p?oid=$oid$&cid=$cid$&loc=$loc$"),
eni=attr(aB,"bgimg")=="1"?true:false,
eIw=attr(aB,"closebtn")=="1"?true:false,
eQk=attr(aB,"pos");
if(aB&&av.resource_url)
{
var dkp=aB.parentNode;
bVx&&(av.resource_url=this.ewR(av.resource_url)),
eCl=this.eaR(eni?1:2),
bcp=S("todaybarTitle",ax);
if(bcp)
{

show(bcp,1);

setHTML(bcp,"\u5546\u4E1A\u8D44\u8BAF");
}
show(dkp,1);
setHTML(dkp,eCl.replace(extend(av,
{
img_path:getPath("image"),
bIsIE:gbIsIE,
bCloseBtn:eIw,
pingurl:dXb.replace(av),
pos:eQk
})));

}
else
{

this.bYM(ax,qo);

}
}
catch(e)
{


this.bYM(ax,qo);
}
},
cry:function(ax,qo)
{
var cU=null;
E(GelTags("qqmailad",ax.document),function(aw)
{
efp=attr(aw,"loc")||"";
if(efp==qo)
{
cU=aw;
}
});
return cU;
},
eKL:function(ay){
var aI=ay&&ay.oWin,
gp=ay&&ay.fCallback;
if(typeof aI[gp]=="function")
{
aI[gp](ay);
}
},
ebG:function(eDb)
{
var dEI=T("stat=log_ad_show&loc=$loc$&oid=$oid$&hit=$hit$&resource_url=$resource_url$&link_to=$link_to$&loc=ad_today,$loc$,$oid$,$hit$");
if(getUin()%100==55||getUin()%100==77)
{
ossLog("realtime","all",dEI.replace(eDb));
}
},
ell:function(ax,aiy)
{
var csA=[],aKo="",ao=this,
bVx=location.protocol=="https:",
euE=bVx?T("https://stockweb.mail.qq.com/lview?c=www&loc=$loc$&callback=AD_callback&rot=1&pdomain=l.qq.com"):T("http://l.qq.com/lview?c=www&loc=$loc$&callback=AD_callback&rot=1");

this.bUr=[];
E(GelTags("qqmailad",ax.document),function(aw)
{
aKo=attr(aw,"loc")||"";
if(aiy)
{
attr(aw,"disp")=="0"&&aKo&&csA.push(aKo)&&attr(aw,"disp","1");
}
else
{
attr(aw,"disp")!="0"&&aKo&&csA.push(aKo);
}
ao.bUr.push(aKo);
});

aKo=csA.join(",");
if(aKo)
{



setTimeout(function()
{
if(ao.bQV!="ok")
{

ao.bQV="timeout";
ao.dTn(ax);

ossLog("realtime","all","loc=ad_timeout,,,");
}
},2.5*1000);
var fAk=loadJsFile(euE.replace({loc:aKo}),false,ax.document);






}
},
dTn:function(ax)
{

var ao=this;
E(ao.bUr,function(qo){
ao.bYM(ax,qo);
});
},
bYM:function(ax,qo)
{

try
{
var aB=this.cry(ax,qo),
dsV=aB&&attr(aB,"ADDefault")||"",
bcp=S("todaybarTitle",ax);
if(dsV!="")
{
aB&&aB.parentNode&&show(aB.parentNode,0);
show(S(dsV,ax),1);
}
if(bcp&&!isShow(bcp))
{
show(bcp,1)
}
}
catch(e)
{

}
},
dWb:function(ax)
{
var dyd=S("todaybarnormallink",ax);
if(dyd)
{
dyd.onclick=function()
{
ossLog("realtime","all","stat=log_todaybar_click");
}
}
}
};

var CommVer={
zN:{},




fP:function(aR)
{
var ao=this,



ekj=function()
{
if(!ao.zN[aR])
{
ao.zN[aR]=new QMCache({appName:aR});
}
},



ery=function()
{
if(typeof(ao.dyQ)!="number")
{
var dB=new Date(),
xX=5,
Fm=Math.ceil(+new Date()/100)%Math.pow(10,xX),
aRL=Math.random()+"",
ehS=function(sd)
{
var rZ=sd+"";
if(rZ.length<xX)
{
return[new Array(xX+1-rZ.length).join("0"),rZ].join("");
}
return rZ;
};

ao.dyQ=+[ehS(Fm),aRL.substring(aRL.length-1)].join("");
}

},



eOB=function()
{
if(ao.zN[aR]&&typeof(ao.zN[aR].bVK)!="number")
{
ao.zN[aR].bVK=0;
}
};

ekj();
ery();
eOB()
},



ctL:function()
{
return this.dyQ;
},



dzR:function(aR)
{
return this.zN[aR].bVK;
},



eIQ:function(aR,avE)
{
return this.zN[aR].getData(avE)||0;
},







get:function(aR,avE)
{
this.fP(aR);

return avE?
[this.ctL(),this.dzR(aR),this.eIQ(aR,avE)].join("."):
[this.ctL(),this.dzR(aR)].join(".");
},






updateSubVer:function(aR,avE)
{
this.fP(aR);

if(typeof(avE)!="undefined")
{
var cr=this.zN[aR],
bqw=cr.getData(avE)||0;
bqw=bqw+1;
cr.setData(avE,bqw);
return bqw;
}
return 0;
},





updateGeneralVer:function(aR)
{
this.fP(aR);
this.zN[aR].bVK++;
return this.zN[aR].bVK;
},








update:function(aR,avE)
{
this.fP(aR);

var Mt=this.ctL(),
dgG=this.updateGeneralVer(aR),
bqw=this.updateSubVer(aR,avE);

return avE?[Mt,dgG,bqw].join("."):[Mt,dgG].join(".");
}
};


function initAD(ax)
{
AD.init(ax);
}






function all_js(){}


