







var QMContactAdaptor=(function(aN)
{
var aq=getTop();
function chl(aw)
{
aw.value='';
aw.style.cssText=''
aq.rmClass(aw,"placeholder");
}
function dqC(aw,bHH)
{
if(!aw.value)
{
aw.value=bHH;
aw.style.cssText='color: rgb(160,160,160)';
aq.addClass(aw,"placeholder");
}

aq.addEvent(aw,"focus",function()
{
if(aw.value==bHH)
{
chl(aw);
}
});
aq.addEvent(aw,"blur",function()
{
if(aw.value=='')
{
aw.value=bHH;
aw.style.cssText='color: rgb(160,160,160)';
aq.addClass(aw,"placeholder");
}
});

}
function cZH(alF)
{
var iJ=alF.length>=0?alF:[alF];
for(var i=0;i<iJ.length;i++)
{
if(!iJ[i].getAttribute("_has_placeholder"))
{


var Ci=iJ[i].getAttribute("default")||"";
if(aq.gbIsIE&&aq.gnIEVer<10.0)
{



















dqC(iJ[i],Ci);
}
else
{
iJ[i].setAttribute("placeholder",Ci);
}
iJ[i].setAttribute("_has_placeholder","1");
}
}
};

function cWF(alF)
{
var iJ=alF.length>=0?alF:[alF];
for(var i=0;i<iJ.length;i++)
{
if(!iJ[i].getAttribute("_has_editlabel"))
{
IK(iJ[i]);
iJ[i].setAttribute("_has_editlabel","1");
}
}
};
function IK(aw)
{
aq.addEvent(aw,"mouseout",function()
{
aq.hasClass(aw,"edit")&&aq.rmClass(aw,"edit");
});
aq.addEvent(aw,"mouseover",function()
{
!aq.hasClass(aw,"edit")&&aq.addClass(aw,"edit");
});
aq.addEvent(aw,"click",function()
{
var ckm=aw.getAttribute("ui-type");
if(ckm=="editmenu")
{
cWk(aw);
}
else if(ckm=="edit")
{
cjw(aw);
}
});
};
function cjw(aw,bDO)
{
function YA()
{
if(aw.getAttribute("_has_editover"))
{
return true;
}




aq.finds("span",aw)[0].innerHTML=pX.value?aq.htmlEncode(pX.value):Ci;






aq.show(aw,true);
aq.removeSelf(pX.parentNode);
pX=aN;
aq.rmClass(aw.parentNode,"column_editing");
bDO&&bDO();
}
if(bDO)
{
aq.insertHTML(aw,"afterEnd",'<label ui-type="edit_caption" class="caption caption_editing_menu"><em class="ico_select_s"></em></label>');
}
else
{
aq.insertHTML(aw,"afterEnd",'<label ui-type="edit_caption" class="caption caption_editing"></label>');
}


var pX=document.createElement("input"),
Ci=aq.htmlDecode(aq.finds("span",aw)[0].innerHTML);


pX.className="txt_caption";
pX.type="text";
pX.value=Ci;
pX.onblur=function()
{

YA();
};
pX.onkeydown=function(cO)
{
var oy=cO||event;

oy.keyCode==13
&&YA();
};
aq.show(aw,false);
aq.finds("label[ui-type='edit_caption']",aw.parentNode)[0].appendChild(pX);
setTimeout(function()
{
pX.select();
});
aq.addClass(aw.parentNode,"column_editing");
};
function cWk(aw)
{
var baA=aw.getAttribute("data-menu").split(","),
bq=[],
cs=aq.calcPos(aw),
Vh=document.createElement("div");

cjw(aw,function()
{
Vh
&&aq.removeSelf(Vh);
});
var pX=aq.finds("input",aw.parentNode)[0];

Vh.className="caption_menu menu_bd";

Vh.innerHTML=aq.TE([
'$@$for($oList$)$@$',
'<a href="javascript:;" class="caption_menu_item" default="$_this_$" ui-type="edit_menu_item">$_this_$</a>',
'$@$endfor$@$'
]).replace({oList:baA});
pX.onclick=function()
{
aq.show(Vh,true)
};
Vh.onclick=function(cO)
{
var oy=cO||event,
il=aq.getEventTarget(oy);
if(il.getAttribute("ui-type")=="edit_menu_item")
{
pX.value=il.getAttribute("default");
pX.select();
aq.show(Vh,false);
}
};
Vh.onmouseover=function()
{
aw.setAttribute("_has_editover",1);
};
Vh.onmouseout=function()
{
aw.removeAttribute("_has_editover");
};

aw.parentNode.insertBefore(Vh,aw);
};

function bzq()
{
var Je=arguments[0];
for(var i=1,l=arguments.length;i<l;i++)
{
if(arguments[i])
{
for(var j in arguments[i])
{


if(typeof(Je[j])=="undefined")
{
if(({}).toString.call(arguments[i][j])=="[object Object]")
{
Je[j]=aq.extend({},arguments[i][j]);
}
else if(({}).toString.call(arguments[i][j])=="[object Array]")
{
Je[j]=[].concat(arguments[i][j]);
}
else
{
Je[j]=arguments[i][j];
}
}

else if(arguments[i][j]&&({}).toString.call(arguments[i][j])=="[object Object]")
{
bzq(Je[j],arguments[i][j]);
}

else if(arguments[i][j]&&({}).toString.call(arguments[i][j])=="[object Array]")
{





Je[j]=[aq.extend({},Je[j][0])];


while(arguments[i][j].length>Je[j].length)
{
Je[j].push(aq.extend({},Je[j][0]))
}


while(arguments[i][j].length<Je[j].length&&(j=="oGroup"||Je[j].length>1))
{
Je[j].pop();
}
bzq(Je[j],arguments[i][j]);
}

else
{
Je[j]=arguments[i][j];
}

}
}
}
return Je;
}

var bHU;
function cdB()
{
if(typeof(arguments[0])=="string")
{
var bd=arguments[0],
kF=arguments[1];

if(!aq[bd])
{
aq.loadJsFileToTop(bHU[bd]);
}

if(kF)
{
aq.waitFor(
function()
{
return!!aq[bd];
},
function(bh)
{
if(bh)
{
QMContactAdaptor[bd]=aq[bd]
&&kF(QMContactAdaptor[bd]=aq[bd]);
}
}
);
}
}
else
{
bHU=arguments[0];
for(var i in bHU)
{
cdB(i);
}
}
};
function dEF(hR,sJ)
{
var bP=hR.oGroup||[];
for(var i=0;i<bP.length;i++)
{
if(bP[i].sId==sJ)
{
return true;
}
}
return false;
};
function cjo()
{
var bJ=arguments[0],
fi=(typeof bJ=="object"?arguments[1]:arguments[2])||location.href.replace(/#.*$/g,""),
aSZ=fi.substr(0,fi.indexOf("?")),
aY=fi.substr(fi.indexOf("?"),fi.length);
switch(typeof bJ)
{
case"object":
for(var i in bJ)
{
aY=aEb(i,bJ[i],aY);
}
break;
case"string":
aY=aEb(arguments[0],arguments[1],aY);
break;
default:
}
return aSZ+aY;
};
function aEb(aR,cf,akD)
{
var qQ=new RegExp("([?&]"+aR+"=)([^&#]*)?"),
cB=cf?cf:"";

return(qQ.test(akD)?
akD.replace(qQ,"$1"+cB)
:[akD,"&",aR,"=",cB].join(""));
};

function dzC(aC)
{
return{
"ie":aq.gbIsIE,
"chrome":aq.gbIsChrome,
"ff":aq.gbIsFF,
"webkit":aq.gbIsWebKit,
"safari":aq.gbIsSafari
}[aC]||false;
};

return{
S:aq.S,
T:aq.T,
TE:aq.TE,
attr:aq.attr,
trim:aq.trim,
getPath:aq.getPath,
getSid:aq.getSid,
attr:aq.attr,
insertHTML:aq.insertHTML,
htmlDecode:aq.htmlDecode,
htmlEncode:aq.htmlEncode,
liveEvent:aq.liveEvent,
addEvent:aq.addEvent,
QMAjax:aq.QMAjax,
evalValue:aq.evalValue,
encodeURI:aq.encodeURI,
confirmBox:aq.confirmBox,
encodeURI:aq.encodeURI,
subAsiiStr:aq.subAsiiStr,

contains:aq.isObjContainTarget,
extend:aq.extend,
finds:aq.finds,
parents:aq.parents,
removeSelf:aq.removeSelf,
hasClass:aq.hasClass,
addClass:aq.addClass,
rmClass:aq.rmClass,
evalCss:aq.evalCss,
showInfo:aq.showInfo,
showError:aq.showError,
getPath:aq.getPath,

preventDefault:aq.preventDefault,
stopPropagation:aq.stopPropagation,
getEventTarget:aq.getEventTarget,
bodyScroll:aq.bodyScroll,
show:aq.show,
merge:bzq,
placeholder:cZH,
removePlaceholder:chl,
editlabel:cWF,
isBrowser:dzC,









useCom:cdB,
hasGroup:dEF,










urlReplacer:cjo,

confirmBox:aq.confirmBox,

calcPos:aq.calcPos,
openComposeDlg:aq.openComposeDlg,
QMMenu:aq.QMMenu,
QMSelect:aq.QMSelect,
QMDialog:aq.QMDialog
};
})();


var QMContact=(function(A,aN)
{
var MH={};







var QMModuleMgr=(function(A,aN)
{
var aiB={},
fQ={},
hp={
azR:function(bmO,cJf,aaA)
{

var aHr=aaA&&aiB[aaA],
fV=aiB[bmO]=function()
{




this.getModuleName=function(){return bmO};
this.getSuperName=function(){return aaA||""};
this.setDriven=function(cO){this["__evt__"]=cO};
this.getDriven=function(){return this["__evt__"]||{}};
arguments.length&&this.init_&&this.init_.apply(this,arguments);
};
cJf.call(fV.prototype=aHr?new aHr():{},
aHr?aHr.prototype:{},
QMModuleMgr);
return fV.prototype;
},
ctM:function(aR,ay)
{
if(!fQ[aR])
{
fQ[aR]=new aiB[aR](ay);
}

return this;
},
cpO:function()
{
var aOO=arguments[0],
bJ=arguments[1];

for(var i in fQ)
{
if(i==aOO)
{
fQ[aOO].action_.apply(fQ[aOO],[bJ]);
break;
}
}
return this;
},
aEh:function()
{
var aYR=arguments[0];

for(var i in fQ)
{
for(var gh in fQ[i].getDriven()["msg"])
{
if(gh==aYR)
{

fQ[i].getDriven()["msg"][gh].apply(fQ[i],[].slice.call(arguments,1));
}
}
}
return this;
},
cCJ:function()
{
var aYR=arguments[0];

for(var i in fQ)
{
for(var gh in fQ[i].getDriven()["msg"])
{
if(gh==aYR&&fQ[i].isShow())
{
fQ[i].getDriven()["msg"][gh].apply(fQ[i],[].slice.call(arguments,1));
}
}
}
return this;
},
cry:function(bgc)
{
if(bgc)
{
if(fQ[bgc])
{
fQ[bgc].destory_();
delete aiB[bgc]
}
}
else
{
for(var i in fQ)
{
fQ[i].destory_();
}
for(var i in aiB)
{
delete aiB[i];
}
}
}
};


hp.azR("Base",function(aG,hB)
{



this.init_=function(ay)
{
var aS=ay||{};
if(!aS.oContainer)
{
debug([this.getModuleName(),"\u6A21\u5757\u5BB9\u5668\u4E3A\u7A7A"].join(" "));
}
if(!aS.oViewCenter)
{
debug([this.getModuleName(),"\u6A21\u5757view\u4E3A\u7A7A"].join(" "));
}
if(!aS.oDataCenter)
{
debug([this.getModuleName(),"\u6A21\u5757data\u4E3A\u7A7A"].join(" "));
}

this.view=aS.oViewCenter;
this.data=aS.oDataCenter;
this.iG=aS.oContainer;


aS.oContainer
&&this.activate();
};
this.action_=function()
{
this.show();
};
this.destory_=function()
{
debug("destory_"+this.getModuleName());
delete fQ[this.getModuleName()];
this.view=aN;
this.data=aN;
this.iG=aN;
};




this.register=function()
{

















var ao=this;
var bEz=[].slice.call(arguments,0),
aGI={},
jM=function()
{
if(bEz.length)
{
var bBy=bEz.shift();
for(var i in bBy)
{
!aGI[i]
&&(aGI[i]={});
A.extend(aGI[i],bBy[i]);
}
jM();
}
else
{
ao.setDriven(aGI);
}
};
jM();
};

this.activate=function()
{
var bAn=this,
oy=this.getDriven(),
Jj={},
dg={};


for(var i in oy)
{

if(i!="msg")
{
Jj[i]={};
for(var bd in oy[i])
{
Jj[i][bd]={bPropagable:oy[i][bd].bPropagable||false};
dg[bd]=function(cDC)
{
return function(cO,au)
{
cDC.fHandle.apply(bAn,[cO,au]);
}
}(oy[i][bd]);
}
}
};


if(i)
{
A.liveEvent(
bAn.iG,
{
rule:function()
{
return Jj;
},
events:function()
{
return dg;
}
}
);
}
};




this.render=function(cP)
{
if(this.iG)
this.iG.innerHTML=cP;
};
this.isShow=function()
{
if(!this.iG)
return false;
return this.iG.style.display.toLowerCase()!="none";
};
this.show=function()
{
this.iG
&&A.show(this.iG,true);
};
this.hide=function()
{
this.iG
&&A.show(this.iG,false);
};
});

return{

create:hp.azR,
use:hp.ctM,
cmd:hp.cpO,
msg:hp.aEh,
wsp:hp.cCJ,
clear:hp.cry
};
})(getTop());



var QMContactData=(function(A,M,aN)
{
var aq=getTop(),
gN={
COMBINE_NAME:"_combine_"
},
boZ={
"voice":0x00000001,
"fax":0x00000002,
"video":0x00000004,
"pager":0x00000010,
"bbs":0x00000020,
"modem":0x00000040,
"car":0x00000080,
"pcs":0x00000100,
"msg":0x00000200,
"home":0x00000400,
"work":0x00000800,
"cell":0x00001000
},
bRj={
"home":0x00000001,
"work":0x00000002,
"internet":0x00000004
},
dcm={
"home":0x00000001,
"work":0x00000002,
"dom":0x00000004,
"intl":0x00000008,
"postal":0x00000010,
"parcel":0x00000020
},
dhS={
"\u4E2A\u4EBA\u90AE\u7BB1":bRj["internet"]|bRj["home"],
"\u5DE5\u4F5C\u90AE\u7BB1":bRj["internet"]|bRj["work"],
"\u624B\u673A\u53F7\u7801":boZ["voice"]|boZ["cell"],
"\u5BB6\u5EAD\u53F7\u7801":boZ["voice"]|boZ["home"],
"\u5DE5\u4F5C\u53F7\u7801":boZ["voice"]|boZ["work"],
"\u5BB6\u5EAD\u5730\u5740":dcm["home"],
"\u5DE5\u4F5C\u5730\u5740":dcm["work"]
},
dqk={
"oEmail":["\u4E2A\u4EBA\u90AE\u7BB1","\u5DE5\u4F5C\u90AE\u7BB1"],
"oTel":["\u624B\u673A\u53F7\u7801","\u5BB6\u5EAD\u53F7\u7801","\u5DE5\u4F5C\u53F7\u7801"],
"oAdr":["\u5BB6\u5EAD\u5730\u5740","\u5DE5\u4F5C\u5730\u5740"],
"oIM":["QQ","\u5FAE\u4FE1","MSN","Google Talk"],
"oUrl":["\u4E3B\u9875","\u5BB6\u5EAD","\u5DE5\u4F5C","\u5176\u4ED6"],
"oDate":["\u5468\u5E74\u7EAA\u5FF5","\u5176\u4ED6"],
"oRelate":["\u6BCD\u4EB2","\u7236\u4EB2","\u7236\u6BCD","\u5144\u5F1F","\u59D0\u59B9","\u5B50\u5973","\u597D\u53CB","\u914D\u5076","\u5408\u4F5C\u4F19\u4F34","\u52A9\u624B","\u7ECF\u7406","\u5176\u4ED6"]
},
hu={
"sId":"",
"sItemType":"",
"oGroup":[],
"oName":[
{
sLabel:"",
sDefault:"\u59D3\u540D",
sVal:""
}
],
"oUrl":[
{
sLabel:"\u4E3B\u9875",
sDefault:"url\u5730\u5740",
sVal:""
}
],
"oDate":[
{
sLabel:"\u5468\u5E74\u7EAA\u5FF5",
sDefault:"\u5E74-\u6708-\u65E5",
sVal:""
}
],
"oRelate":[
{
sLabel:"\u6BCD\u4EB2",
sDefault:"\u59D3\u540D",
sVal:""
}
],
"oBirthday":[
{
sLabel:"\u751F\u65E5",
sDefault:"\u5E74-\u6708-\u65E5",
sVal:""
}
],
"oPhoto":[
{
sVal:""
}
],
"oNote":[
{
sLabel:"\u5907\u6CE8",
sDefault:"\u5907\u6CE8",
sVal:""
}
],
"oEmail":[
{
sLabel:"\u4E2A\u4EBA\u90AE\u7BB1",
sDefault:"\u90AE\u7BB1\u5730\u5740",
sGroupId:"",
sType:"5",
sVal:""
}
],
"oTel":[
{
sLabel:"\u624B\u673A\u53F7\u7801",
sDefault:"\u7535\u8BDD\u53F7\u7801",
sType:"4097",
sVal:""
}
],
"oAdr":[
{
sLabel:"\u5BB6\u5EAD\u5730\u5740",
sDefault:"\u5730\u5740",
sType:"1",

sCountry:"",
sProvince:"",
sCity:"",
sStreet:"",
sPostcode:""
}
],
"oIM":[
{
sLabel:"QQ",
sDefault:"\u5E10\u53F7",
sVal:""
}
],
"oOrg":[
{
sLabel:"\u5DE5\u4F5C",

sOrg1:"",
sOrg2:"",
sTitle:""
}
],
"oCustom":[
{
sLabel:"\u81EA\u5B9A\u4E49",
sDefault:"\u81EA\u5B9A\u4E49\u4FE1\u606F",
sVal:""
}
]
},
dCp=-1,

bP=[],
fM={},

aaN={},
blU={},


fb,
dTY=aq.TE([
'&GrpID=$groupid$',
'$@$for($addrs$)$@$',
'&AddrID=$sId$',
'$@$endfor$@$'
]),
eyg=aq.T([
"/cgi-bin/laddr_del?sid=$sid$&operate=del&t=contact.json&ef=js"
]),
diz=aq.T([
"/cgi-bin/laddr_list?sid=$sid$&operate=$operate$&t=contact.json&view=$view$&ef=js&keyword=$keyword$&sorttype=user$sorttype$&groupid=$groupid$"
]),
dRt=aq.T([
"/cgi-bin/laddr_list?sid=$sid$&operate=getlevel&t=contact.json&ef=js"
]),
evO=aq.T([
"/cgi-bin/laddr_detail?sid=$sid$&ef=js&operate=detail&view=domain&GrpID=$groupid$&AddrID=$addrid$&t=contact.json&ef=js"
]),
epm=aq.T([
"/cgi-bin/laddr_combine?sid=$sid$&method=manualcombine&t=contact.json&ef=js"
]),
edS=aq.T([
"/cgi-bin/laddr_addedit?sid=$sid$&operate=save&t=contact.json&ef=js&resp_charset=UTF8"
]);

function uc()
{
if(dCp<0)
{

bP=goListData.oList;
fM={};
for(var i=0;i<bP.length;i++)
{
fM[bP[i].sId]=bP[i]
}

fb=goGroupData;

dCp=1;
}
};
function bRT(aM)
{

if(aM&&blU[aM])
{
fM[aM].sLevel=blU[aM];
}
else
{

for(var i in blU)
{
fM[i]
&&(fM[i].sLevel=blU[i]);
}
}
};

var dbg=0,
dBX=0;
function cFw(aL,bV)
{
var bJ=aL||{};

if(aq["__contact__level__"])
{
blU=aq["__contact__level__"].oLevels;
bRT();
bV
&&bV.call(QMContactData,aq["__contact__level__"].oLevels);
return;
}

aq.QMAjax.send(dRt.replace({
sid:aq.getSid()
}),
{
method:"GET",
onload:function(bh,bO)
{
if(bh)
{
var aE=A.evalValue(bO);
if(typeof(aE.errcode)=="undefined"&&aE.oLevels)
{
aq["__contact__level__"]=aE;
blU=aE.oLevels;
bRT();

bV
&&bV.call(QMContactData,aE.oLevels);
return;
}

if(dBX<20)
{
clearTimeout(dbg);
dbg=setTimeout(function()
{
cFw(bJ,bV);
},1500);

dBX++;
}
}
}
});
};
function Gu(aL,bV)
{
var bJ=aL||{},
tL=bJ.sGroupId||"",
axk=bJ.sViewType||"all",
bBb=bJ.sSortType||"name";

if(bJ.sType=="search")
{

if(typeof(bJ.sKeyword)=="undefined")
{
bV.call(QMContactData,A.extend({},bJ,aaN));
return;
}


aq.QMAjax.send(diz.replace({
sid:aq.getSid(),
operate:"search",
view:axk,
sorttype:bBb,
keyword:bJ.sKeyword
}),
{
method:"GET",
onload:function(bh,bO)
{
if(bh)
{
var aE=A.evalValue(bO);
if(typeof(aE.errcode)=="undefined")
{

if(axk=="all")
{
aaN=aE;
}
else
{
var pM={
"normal":"oNormal",
"other":"oOther",
"domain":"oDomain",
"qq":"oQQ"
}[axk];
axk&&aaN[axk]
&&A.merge(aaN[axk],aE[axk]);
}

for(var bk in aaN)
{
if(bk!="nCnt")
{
for(var i=0;i<aaN[bk].oList.length;i++)
{
fM[aaN[bk].oList[i].sId]=aaN[bk].oList[i];
bRT(aaN[bk].oList[i].sId);
}
}
}

bV.call(QMContactData,A.extend({},bJ,aE));
return;
}
else if(aE.errcode==-2)
{
alert("sessionTimeout");
return;
}
else if(aE.errcode<0)
{
aq.showError(aq.trim(aE.errmsg)||"\u641C\u7D22\u5931\u8D25");
bV.call(QMContactData);
return;
}
}

aq.showError("\u641C\u7D22\u5931\u8D25");
bV.call(QMContactData);
}
});
}
else
{
aq.QMAjax.send(diz.replace({
sid:aq.getSid(),
operate:"view",
view:axk,
groupid:tL,
sorttype:bBb
}),
{
method:"GET",
onload:function(bh,bO)
{
if(bh)
{
var aE=A.evalValue(bO);
if(typeof(aE.errcode)=="undefined")
{


bP=aE.oList;
for(var i=0;i<bP.length;i++)
{
fM[bP[i].sId]=bP[i];
}

bV.call(QMContactData,A.extend({},bJ,aE));
return;
}
else if(aE.errcode==-2)
{
alert("sessionTimeout");
return;
}
else if(aE.errcode<0)
{
aq.showError(aq.trim(aE.errmsg)||"\u5217\u8868\u52A0\u8F7D\u5931\u8D25");
bV.call(QMContactData);
return;
}
}

aq.showError("\u5217\u8868\u52A0\u8F7D\u5931\u8D25");
bV.call(QMContactData);
}
});

}
};

function eNy(aL,bV)
{
var bJ=aL||{};

aq.showInfo("\u6B63\u5728\u5408\u5E76\u8054\u7CFB\u4EBA...");
aq.QMAjax.send(epm.replace({
sid:aq.getSid()
}),
{
method:"POST",
content:aq.TE([
'$@$for($oItemList$)$@$',
'&AddrID=$sId$',
'$@$endfor$@$'
]).replace({
oItemList:bJ.oIds
}),
onload:function(bh,bO)
{
aq.hiddenMsg();

if(bh)
{
var aE=A.evalValue(bO);
if(typeof(aE.errcode)=="undefined")
{

aE.sId=gN.COMBINE_NAME;

fM[gN.COMBINE_NAME]=A.merge({},hu,aE);
bV&&bV.call(QMContactData,{sId:gN.COMBINE_NAME});
return;
}
else if(aE.errcode==-2)
{
alert("sessionTimeout");
return;
}
else if(aE.errcode<0)
{
aq.showError(aq.trim(aE.errmsg)||"\u5408\u5E76\u8054\u7CFB\u4EBA\u5931\u8D25");
bV&&bV.call(QMContactData);
return;
}

return;
}

aq.showError("\u7F51\u7EDC\u5F02\u5E38");
bV&&bV.call(QMContactData);
}
});
};
function Hf(aL,bV)
{
var bJ=aL||{},
bn=fM[bJ.sId];


if(bn)
{
bV.call(QMContactData,A.merge({},hu,bn));
}
else
{
bV.call(QMContactData,A.merge({},hu));
}


if(bJ.bShowDetail&&bn.sItemType=="domain"&&!bn.oDetail)
{
aq.QMAjax.send(evO.replace({
sid:aq.getSid(),
groupid:bJ.sGroupId,
addrid:bn.sId
}),
{
method:"GET",
onload:function(bh,bO)
{
if(bh)
{
var aE=A.evalValue(bO);

if(aE.oDetail)
{
bn.oDetail=aE.oDetail;
bV.call(QMContactData,A.merge({bIsDomainDetail:true},hu,bn));
}
}
}
});
}
};
function ddT(aL,bV)
{
var bJ=aL||{},

UY=[];

if(typeof(bJ.sId)!="undefined")
{
for(var bk in fb)
{
var RX=fb[bk].oList;
for(var i=0;i<RX.length;i++)
{
if(bJ.sId==RX[i].sId)
{

UY.push(RX[i]);
}
}
RX=aN;
}
bV.call(QMContactData,UY);
return;
}
else if(bJ.sType)
{
if(bJ.sType=="normal")
{
UY=fb["oNormal"].oList;
}
else if(bJ.sType=="domain")
{
UY=fb["oDomain"].oList;
}
else if(bJ.sType=="QQ")
{
UY=fb["oQQ"].oList;
}
else if(bJ.sType=="all")
{
UY=UY.concat(fb["oNormal"],fb["oDomain"],fb["oQQ"]);
}
bV.call(QMContactData,UY);
return;
}

bV.call(QMContactData,fb);
};
function cVy(aM,dV)
{
var cR=-1;
for(var i=0;i<dV.length;i++)
{
if(aM==dV[i].sId)
{
cR=i;
break;
}
}
return cR;
};
function bVp(ddy,der)
{
for(var i=0;i<ddy.length;i++)
{
var RX=fb["oNormal"].oList;
for(var j=0;j<RX.length;j++)
{
if(ddy[i].sId==RX[j].sId)
{
RX[j].nCnt--;
break;
}
}
RX=aN;
}
for(var i=0;i<der.length;i++)
{
var RX=fb["oNormal"].oList;
for(var j=0;j<RX.length;j++)
{
if(der[i].sId==RX[j].sId)
{
RX[j].nCnt++;
break;
}
}
RX=aN;
}
};
function eHG(av)
{
var aln=fM[av.sId];

if(aln)
{

if(aln.sItemType=="other")
{
fb["oOther"].nTotalCnt--;
fb["oNormal"].nTotalCnt++;
bVp(aln.oGroup,av.oGroup);
}
else if(aln.sItemType=="normal")
{

bVp(aln.oGroup,av.oGroup);
}
else
{
debug("\u8FD9\u4E0D\u79D1\u5B66");
}
}

else
{
bP.unshift(av);
fb["oNormal"].nTotalCnt++;
for(var i=0;i<av.oGroup.length;i++)
{
var RX=fb["oNormal"].oList;
for(var j=0;j<RX.length;j++)
{
if(av.oGroup[i].sId==RX[j].sId)
{
RX[j].nCnt++;
break;
}
}
RX=aN;
}
}
bRD();


fM[av.sId]=av;

bRT(av.sId);

for(var bk in aaN)
{
if(bk!="nCnt")
{
for(var i=0;i<aaN[bk].oList.length;i++)
{
if(aaN[bk].oList[i].sId==av.sId)
{
aaN[bk].oList[i]=fM[av.sId];
break;
}
}
}
}

};
function dyh(aM,aC)
{
var bk=aC||"list",
ma=false,
ezR=function(bw)
{

var caL=bw.sItemType;
if(caL=="normal")
{
fb["oNormal"].nTotalCnt--;
}
else if(caL=="other")
{
fb["oOther"].nTotalCnt--;
}
bVp(bw.oGroup,[]);
};

var bn=fM[aM];

if(bn)
{

ezR(bn);


var cR=cVy(aM,bP);
cR>-1
&&bP.splice(cR,1);


if(bk=="search")
{
var bk=bn.sItemType,
coU=aaN[bk=="normal"?"oNormal":"oOther"],
djr=cVy(aM,coU.oList);

if(djr>-1)
{
coU.oList.splice(djr,1);
coU.nCnt--;
aaN.nCnt--;
}
}

delete fM[aM];

bRD();

ma=true;
}

return ma;
};

var cZw=0;
function bRD()
{
clearTimeout(cZw);
cZw=setTimeout(function()
{
var bOR={};
for(var i=0;i<fb["oNormal"].oList.length;i++)
{
bOR[fb["oNormal"].oList[i].sId]=fb["oNormal"].oList[i].nCnt;
}
bOR["0"]=fb["oNormal"].nTotalCnt;
bOR["-110"]=fb["oOther"].nTotalCnt;







M.msg("data:GROUP_UPDATE",bOR);
},500);
};

var dqe=0,
ccZ=[];
function cJv(aL,bV)
{
var bJ=aL||{},
ePg=function(buQ)
{
M.msg("data:ITEM_DELETE",buQ);

aq.QMAjax.send(eyg.replace({
sid:aq.getSid()
}),
{
method:"POST",
content:aq.TE([
'$@$for($oItemList$)$@$',
'&AddrID=$sId$',
'$@$endfor$@$'
]).replace({
oItemList:buQ
}),
onload:function(bh,bO)
{
if(bh)
{
var aE=A.evalValue(bO);
if(typeof(aE.errcode)=="undefined")
{
aq.showInfo("\u5220\u9664\u6210\u529F");
bV&&bV.call(QMContactData,aE);
return;
}
else if(aE.errcode==-2)
{
alert("sessionTimeout");
return;
}
else if(aE.errcode<0)
{
aq.showError(aq.trim(aE.errmsg)||"\u5220\u9664\u5931\u8D25");
bV.call(QMContactData);
return;
}
}

aq.showError("\u5220\u9664\u5931\u8D25");
bV&&bV.call(QMContactData);
}
});
};

if(bJ.sId)
{
clearTimeout(dqe);

dyh(bJ.sId,bJ.sType);
ccZ.push(bJ);
dqe=setTimeout(function()
{

if(aq.getUin()==3513707)
{
M.msg("data:ITEM_DELETE",ccZ);
aq.showInfo("\u5220\u9664\u6210\u529F(\u6D4B\u8BD5)");
bV&&bV.call(QMContactData,{});
}
else
{
ePg(ccZ);
}
ccZ=[];
},500);
}
};

function cYO(aL,bV)
{


aq.QMAjax.send(edS.replace({
sid:aq.getSid()
}),
{
method:"POST",
content:edd(aL),
onload:function(bh,bO)
{
if(bh)
{
var aE=A.evalValue(bO);
if(typeof(aE.errcode)=="undefined")
{
eHG(aE);
aq.showInfo((!aE.sOriginalType||aE.sOriginalType=="normal")?"\u4FDD\u5B58\u6210\u529F":"\u6DFB\u52A0\u6210\u529F");

M.msg("data:ITEM_UPDATE",aE);
bV.call(QMContactData,aE);
return;
}
else if(aE.errcode==-2)
{
alert("sessionTimeout");
return;
}
else if(aE.errcode<0)
{
aq.showError(aq.trim(aE.errmsg)||"\u4FDD\u5B58\u5931\u8D25");
bV.call(QMContactData);
return;
}
}

aq.showError("\u4FDD\u5B58\u5931\u8D25");
bV.call(QMContactData);
}
});
};

function edd(aL)
{
var cwY=[];

for(var i in aL)
{
if(i=="id")
{
cwY.push([i,(aL[i])].join("="));
}
else
{
for(var j=0;j<aL[i].length;j++)
{

var xd=aL[i][j].sType?[aL[i][j].sLabel,aL[i][j].sType].join("/"):aL[i][j].sLabel,
eF=(!xd||i=="org2"||i=="title"||i=="province"||i=="city"||i=="street"||i=="postcode")?
aL[i][j].sVal:[xd,aL[i][j].sVal].join(":");
cwY.push([i,(eF)].join("="));
}
}
}
return cwY.join("&");
}
function eno(sJ,KX)
{
var ij=KX||[];

if(sJ==0)
{
for(var i=0;i<ij.length;i++)
{
if(ij[i].sItemType=="other")
{
fb["oNormal"].nTotalCnt++;
fb["oOther"].nTotalCnt--;
M.msg("data:ITEM_UPDATE",fM[ij[i].sId]);
}
else if(ij[i].sItemType!="normal")
{
fb["oNormal"].nTotalCnt++;
}

bRD();
}
}

else
{
for(var i=0;i<ij.length;i++)
{
if(!A.hasGroup(ij[i],sJ))
{
if(fM[ij[i].sId])
{
ddT({sId:sJ},function(SL)
{
var dsb=fM[ij[i].sId].oGroup.concat(SL);

bVp(fM[ij[i].sId].oGroup,dsb);
bRD();

fM[ij[i].sId].oGroup=dsb;


M.msg("data:ITEM_UPDATE",fM[ij[i].sId]);
});
}
}
}
}
};

return{
CONST:gN,

inspect:function(aC)
{
if(aC=="search")
{
return{
oData:aaN,
oMap:fM
}
}

return{
oList:bP,
oMap:fM
}
},
vcardref:function(btA)
{

if(btA)
{
return dhS[btA]||0;
}

return dhS;
},
menuref:function(btA)
{
if(btA)
return[].concat(dqk[btA]||[]);
return A.extend({},dqk);
},
ref:function()
{
return A.extend({},hu);
},
addGrpupMember:function(sJ,KX,bV)
{
aq.QMAjax.send(A.T("/cgi-bin/laddr_grp_addedit?sid=$sid$&OperType=AddMember&t=contact.json&ef=js").replace({
sid:aq.getSid()
}),
{
method:"POST",
content:dTY.replace({
groupid:sJ,
addrs:KX
}),
onload:function(bh,bO)
{
if(bh)
{
var aE=A.evalValue(bO);
if(typeof(aE.errcode)=="undefined")
{

aq.showInfo("\u6DFB\u52A0\u6210\u529F");
eno(sJ,KX);
bV.call(QMContactData,aE);
return;
}
else if(aE.errcode==-2)
{
alert("sessionTimeout");
return;
}
else if(aE.errcode<0)
{
aq.showError(aq.trim(aE.errmsg)||"\u4FDD\u5B58\u5931\u8D25");
bV.call(QMContactData);
return;
}
}

aq.showError("\u4FDD\u5B58\u5931\u8D25");
bV.call(QMContactData);
}
});
},



del:function(aDY,aL,bV)
{
switch(aDY)
{
case"item":
cJv(aL,bV);
break;
case"group":
break;
}
},



put:function(aDY,aL,bV)
{
switch(aDY)
{
case"item":
cYO(aL,bV);
break;
case"combine":
delete aL.id;

var hT=aL.AddrID||[],
bP=[];
for(var i=0;i<hT.length;i++)
{
bP.push({sId:hT[i].sVal});
}

cYO(aL,function(av)
{

if(av)
{
aq.E(bP,function(bw)
{
dyh(bw.sId);
});

for(var i=0;i<bP.length;++i)
{
if(bP[i].sId==av.sId)
{
bP.splice(i,1);
break;
}
}
M.msg("data:ITEM_DELETE",bP);


cFw({},function()
{
av
&&bV.call(QMContactData,av);
});
}
});
break;
case"group":
break;
}
},



get:function(aDY,aL,bV)
{
uc();
switch(aDY)
{
case"level":
cFw(aL,bV);
break;
case"list":
Gu(aL,bV);
break;
case"item":
Hf(aL,bV);
break;
case"combine":
eNy(aL,bV);
break;
case"group":
ddT(aL,bV);
break;
}
}
};
})(QMContactAdaptor,QMModuleMgr);


var QMContactView=(function(A,aN)
{
var aq=getTop(),
baM=QMContactData,
eaY=A.TE([

'<div class="panel_wrapper settingtable">',
'<div ui-type="info_inner" data-type="$sType$" data-id="$sId$" class="panel_info_inner">',

'$@$if($sType$=="detail")$@$',
'$@$for($oPhoto$)$@$',
'$@$if($sVal$)$@$',
'<img width="40" height="40" class="avator" src="$sVal$" onerror="this.src=\'http://mail.qq.com/zh_CN/htmledition/images/rss/male.gif\'"/>',
'$@$else$@$',
'<img width="40" height="40" class="avator" src="http://mail.qq.com/zh_CN/htmledition/images/rss/male.gif" />',
'$@$endif$@$',
'$@$endfor$@$',

'$@$for($oName$)$@$',
'$@$if($sVal$)$@$',
'<h3>$@$eval getTop().htmlEncode($sVal$)$@$</h3>',
'$@$else$@$',
'<h3>(\u65E0\u59D3\u540D)</h3>',
'$@$endif$@$',
'$@$endfor$@$',

'<dl class="detail">',

'$@$if($oEmail$.length>1||$oEmail$[0]&&$oEmail$[0].sVal)$@$',
'$@$for($oEmail$)$@$',
'<dt>',
'<span class="caption">$sLabel$</span>\uFF1A',
'</dt>',
'<dd>',
'<a class="detail_mail" title="\u7ED9TA\u5199\u4FE1" ck="info_compose" data-name="$@$eval getTop().htmlEncode($_root_.oName$&&$_root_.oName$[0]&&$_root_.oName$[0].sVal || "")$@$">',
'$@$eval getTop().htmlEncode($sVal$)$@$',
'</a>',
'<a ck="info_checkmail" data-id="$_root_.sId$" data-email="$sVal$" data-name="$@$eval getTop().htmlEncode($_root_.oName.0.sVal$)$@$" class="detail_dealings" href="javascript:;">',
'\u5F80\u6765\u90AE\u4EF6',
'</a>',
'</dd>',
'$@$endfor$@$',
'$@$endif$@$',


'$@$if($sLevel$&&$sLevel$!="0")$@$',
'<dt>',
'<span class="caption">\u7B49\u7EA7</span>\uFF1A',
'</dt>',
'<dd>',
'$sLevel$\u7EA7<em class="level_image ',
'$@$if($sLevel$>=16)$@$',
'level_5',
'$@$else if($sLevel$>=12)$@$',
'level_4',
'$@$else if($sLevel$>=8)$@$',
'level_3',
'$@$else if($sLevel$>=4)$@$',
'level_2',
'$@$else$@$',
'level_1',
'$@$endif$@$',
'"></em>',


'</dt>',
'$@$endif$@$',


'$@$if($oTel$.length>1||$oTel$[0]&&$oTel$[0].sVal)$@$',
'$@$for($oTel$)$@$',
'$@$if($sVal$)$@$',
'<dt>',
'<span class="caption">$sLabel$</span>\uFF1A',
'</dt>',
'<dd>',
'$sVal$',
'</dd>',
'$@$endif$@$',
'$@$endfor$@$',
'$@$endif$@$',


'$@$if($oAdr$.length>1||',
'$oAdr$[0]&&($oAdr$[0].sCountry||$oAdr$[0].sProvince||$oAdr$[0].sCity||$oAdr$[0].sStreet||$oAdr$[0].sPostcode))$@$',
'$@$for($oAdr$)$@$',
'$@$if($sCountry$||$sProvince$||$sCity$||$sStreet$||$sPostcode$)$@$',
'<dt>',
'<span class="caption">$sLabel$</span>\uFF1A',
'</dt>',
'<dd>',

'$@$eval getTop().htmlEncode($sCountry$||"")$@$',
'$@$eval getTop().htmlEncode($sProvince$||"")$@$',
'$@$eval getTop().htmlEncode($sCity$||"")$@$',
'$@$eval getTop().htmlEncode($sStreet$||"")$@$',
'$@$eval getTop().htmlEncode($sPostcode$||"")$@$',
'</dd>',
'$@$endif$@$',
'$@$endfor$@$',
'$@$endif$@$',


'$@$if($oBirthday$.length>1||$oBirthday$[0]&&$oBirthday$[0].sVal)$@$',
'$@$for($oBirthday$)$@$',
'$@$if($sVal$)$@$',
'<dt>',
'<span class="caption">$sLabel$</span>\uFF1A',
'</dt>',
'<dd>',
'$sVal$',
'</dd>',
'$@$endif$@$',
'$@$endfor$@$',
'$@$endif$@$',


'$@$if($oDate$.length>1||$oDate$[0]&&$oDate$[0].sVal)$@$',
'$@$for($oDate$)$@$',
'$@$if($sVal$)$@$',
'<dt>',
'<span class="caption">$sLabel$</span>\uFF1A',
'</dt>',
'<dd>',
'$sVal$',
'</dd>',
'$@$endif$@$',
'$@$endfor$@$',
'$@$endif$@$',


'$@$if($oRelate$.length>1||$oRelate$[0]&&$oRelate$[0].sVal)$@$',
'$@$for($oRelate$)$@$',
'$@$if($sVal$)$@$',
'<dt>',
'<span class="caption">$sLabel$</span>\uFF1A',
'</dt>',
'<dd>',

'$@$eval getTop().htmlEncode($sVal$||"")$@$',
'</dd>',
'$@$endif$@$',
'$@$endfor$@$',
'$@$endif$@$',


'$@$if($oIM$.length>1||$oIM$[0]&&$oIM$[0].sVal)$@$',
'$@$for($oIM$)$@$',
'<dt>',
'<span class="caption">$sLabel$</span>\uFF1A',
'</dt>',
'$@$if($sVal$)$@$',
'<dd>',

'$@$eval getTop().htmlEncode($sVal$||"")$@$',
'</dd>',
'$@$endif$@$',
'$@$endfor$@$',
'$@$endif$@$',


'$@$if($oOrg$.length>1||$oOrg$[0]&&($oOrg$[0].sOrg1||$oOrg$[0].sOrg2||$oOrg$[0].sTitle))$@$',
'$@$for($oOrg$)$@$',
'<dt>',
'<span class="caption">$sLabel$</span>\uFF1A',
'</dt>',
'$@$if($sOrg1$||$sOrg2$||$sTitle$)$@$',
'<dd>',



'$@$eval getTop().htmlEncode($sOrg1$||"")$@$ ',
'$@$eval getTop().htmlEncode($sOrg2$||"")$@$ ',
'$@$eval getTop().htmlEncode($sTitle$||"")$@$ ',
'</dd>',
'$@$endif$@$',
'$@$endfor$@$',
'$@$endif$@$',


'$@$if($oUrl$.length>1||$oUrl$[0]&&$oUrl$[0].sVal)$@$',
'$@$for($oUrl$)$@$',
'<dt>',
'<span class="caption">$sLabel$</span>\uFF1A',
'</dt>',
'$@$if($sVal$)$@$',
'<dd>',

'$@$eval getTop().htmlEncode($sVal$||"")$@$',
'</dd>',
'$@$endif$@$',
'$@$endfor$@$',
'$@$endif$@$',


'$@$if($oGroup$.length>0)$@$',
'<dt>',
'<span class="caption">\u5206\u7EC4</span>\uFF1A',
'</dt>',
'<dd class="detail_groups">',
'$@$for($oGroup$)$@$',
'<span class="groups_item">$sName$</span>',
'$@$endfor$@$',
'</dt>',
'$@$endif$@$',


'$@$if($oCustom$.length>1||$oCustom$[0]&&$oCustom$[0].sVal)$@$',
'$@$for($oCustom$)$@$',
'$@$if($sVal$)$@$',
'<dt>',
'<span class="caption">$sLabel$</span>\uFF1A',
'</dt>',
'<dd>',

'$@$eval getTop().htmlEncode($sVal$||"")$@$',
'</dd>',
'$@$endif$@$',
'$@$endfor$@$',
'$@$endif$@$',


'$@$if($oNote$.length>1||$oNote$[0]&&$oNote$[0].sVal)$@$',
'$@$for($oNote$)$@$',
'$@$if($sVal$)$@$',
'<dt>',
'<span class="caption">$sLabel$</span>\uFF1A',
'</dt>',
'<dd>',

'$@$eval getTop().htmlEncode($sVal$||"").replace(/[\\r\\n]+/g,"<br>")$@$',

'</dd>',
'$@$endif$@$',
'$@$endfor$@$',
'$@$endif$@$',


'$@$if($oDetail$&&$oDetail$.length>0)$@$',
'<dt>',
'<span class="caption">\u7EC4\u5185\u6210\u5458</span>\uFF1A',
'</dt>',
'<dd class="detail_members">',
'<table>',
'$@$for($oDetail$)$@$',
'<tr$@$if($_idx_$%2)$@$ class="tr_dark" $@$endif$@$>',
'<td class="td_name">$sName$</td>',
'<td class="td_email">$sEmail$</td>',
'</tr>',
'$@$endfor$@$',
'</table>',
'</dd>',
'$@$endif$@$',
'</dl>',
'$@$if(0&&$sViewType$=="normal")$@$',
'<div class="detail_operation">',
'<a ck="info_edit" class="detail_edit" data-id="$sId$"><em class="ico_edit"></em>\u7F16\u8F91\u8054\u7CFB\u4EBA</a>',
'<a ck="info_del" class="detail_delete" data-id="$sId$"><em class="ico_delete"></em>\u5220\u9664</a>',
'</div>',
'$@$endif$@$',
'$@$else if($sType$=="list")$@$',
'<div id="info_summary" class="summary">',
'$sViewGroupName$$@$if($nCnt$>-1)$@$\uFF08$nCnt$\uFF09$@$endif$@$',
'</div>',
'<div id="info_chosen" class="summary" style="display:none">',
'\u5DF2\u9009\u62E9<span>0</span>\u4E2A\u8054\u7CFB\u4EBA',
'</div>',
'$@$else if($sType$=="search")$@$',
'<div id="info_summary" class="summary">',
'$@$if($nCnt$>-1)$@$\u641C\u7D22\u7ED3\u679C\uFF08$nCnt$\uFF09$@$else$@$\u2026\u2026&nbsp;$@$endif$@$',
'</div>',
'<div id="info_chosen" class="summary" style="display:none">',
'\u5DF2\u9009\u62E9<span>0</span>\u4E2A\u8054\u7CFB\u4EBA',
'</div>',
'$@$endif$@$',
'</div>',
'</div>'
]),
eGL=A.TE([
'$@$if($sType$=="list")$@$',
'<div class="nav_list toolbg toolbgline toolheight">',
'<div class="search">',
'<form>',
'<input kd="nav_keyword" name="keyword" id="keyword" autocomplete="off" class="txt_search" type="text" default="\u641C\u7D22\u5168\u90E8\u8054\u7CFB\u4EBA" onfocus="if(this.placeholder == \'\u641C\u7D22\u5168\u90E8\u8054\u7CFB\u4EBA\'){  this.placeholder = \'\';}this.parentNode.className=\'focus_search\';" onblur="if(this.value == \'\'){this.placeholder = \'\u641C\u7D22\u5168\u90E8\u8054\u7CFB\u4EBA\';}this.parentNode.className=\'\';"/>',
'<a ck="nav_search" href="javascript:;" class="btn_search btn_gray" title="\u641C\u7D22"><em class="ico_search"></em></a>',
'</form>',
'</div>',
'<div class="tool">',
'<a href="javascript:;" ck="nav_create" class="btn_add btn_blue btn_space" title="\u6DFB\u52A0\u8054\u7CFB\u4EBA"><em class="ico_add"></em></a>',

'<a href="javascript:;" ck="nav_sync" class="btn_mobile btn_gray btn_space" title="\u5728\u624B\u673A\u4E2D\u540C\u6B65\u8054\u7CFB\u4EBA"><em class="ico_mobile"></em></a>',
'<a href="javascript:;" ck="nav_tool" class="btn_gray btn_tool">\u5DE5\u5177<em class="ico_dropdowm"></em></a>',
'</div>',
'</div>',
'<div class="nav_mask"></div>',
'$@$else if($sType$=="multi")$@$',
'<div class="nav_list toolbg toolbgline toolheight">',
'<a ck="nav_compose" href="javascript:;" class="btn_gray btn_space" value="">\u5199\u4FE1</a>',
'$@$if($sViewType$=="normal"||$sViewType$=="other"||$bIsSearch$)$@$',

'<a ck="nav_del" href="javascript:;" class="btn_gray btn_space">\u5220\u9664</a>',



'$@$endif$@$',
'$@$if($sViewType$=="normal"&&!$bIsSearch$)$@$',
'<a ck="nav_group" class="btn_gray btn_space" href="javascript:;">',
'\u6DFB\u52A0\u5230\u7EC4...<em class="ico_dropdowm"></em>',
'</a>',
'$@$else$@$',

'<a ck="nav_contact" class="btn_gray btn_space" href="javascript:;">\u6DFB\u52A0\u5230\u901A\u8BAF\u5F55</a>',
'$@$endif$@$',

'$@$if($sViewType$=="normal"||$bIsSearch$)$@$',
'$@$if($nSelectCnt$>1)$@$',
'<a ck="nav_combine" href="javascript:;" class="btn_gray btn_space">\u5408\u5E76</a>',
'$@$else$@$',
'<a href="javascript:;" class="btn_gray btn_space btn_disabled">\u5408\u5E76</a>',
'$@$endif$@$',
'$@$endif$@$',
'<a href="javascript:;" ck="nav_unselect" class="btn_blue btn_cancel" value="" title="\u53D6\u6D88\u9009\u4E2D"><em class="ico_cancel"></em></a>',
'</div>',
'<div class="nav_mask"></div>',
'$@$else if($sType$=="preview")$@$',
'<div class="nav_edit toolbg toolbgline toolheight">',
'<a ck="nav_pre_back" data-otherchange="$@$eval $bIsChanged$?1:0$@$" class="btn_gray btn_space btn_back left" hidefocus href="javascript:;">',
'<span style="font-family:Verdana;">&#171;</span>&nbsp;',



'\u8FD4\u56DE',

'</a>',
'<input type="button" class="btn_sepline"/>',
'<a ck="nav_pre_compose" data-id="$sId$" data-mailcnt="$nMailCnt$" class="btn_gray btn_space" hidefocus href="javascript:;">\u5199\u4FE1',
'$@$if($nMailCnt$>1)$@$',
'<em class="ico_dropdowm"></em>',
'$@$endif$@$',
'</a>',

'$@$if($sItemType$=="normal")$@$',
'<a ck="nav_pre_edit" data-id="$sId$" class="btn_gray btn_space" hidefocus href="javascript:;">\u7F16\u8F91</a>',
'$@$else if($sItemType$=="other")$@$',
'<a ck="nav_pre_edit" data-id="$sId$" class="btn_gray btn_space" hidefocus href="javascript:;">\u6DFB\u52A0\u5230\u901A\u8BAF\u5F55</a>',
'$@$else$@$',
'<a ck="nav_pre_store" data-id="$sId$" class="btn_gray btn_space" hidefocus href="javascript:;">\u6DFB\u52A0\u5230\u901A\u8BAF\u5F55</a>',
'$@$endif$@$',

'$@$if($sItemType$!="domain"&&$sItemType$!="qq")$@$',
'<a ck="nav_pre_del" data-id="$sId$" data-otherchange="$@$eval $bIsChanged$?1:0$@$" ',
'class="btn_gray btn_space" hidefocus href="javascript:;">\u5220\u9664</a>',
'$@$endif$@$',
'</div>',
'$@$else if($sType$=="detail")$@$',
'<div class="nav_edit toolbg toolbgline toolheight">',
'<a href="javascript:;" ck="nav_save" class="btn_blue btn_space" ui-type="save" data-id="$sId$" data-type="$sType$">\u4FDD\u5B58</a>',
'$@$if($nEditType$!=2)$@$',
'<a href="javascript:;" ck="nav_cancel" class="btn_gray" data-id="$sId$" data-type="$sType$">\u53D6\u6D88</a>',
'$@$endif$@$',
'</div>',
'$@$else$@$',
'sType is needed!!',
'$@$endif$@$'
]),
eJL=A.TE([
'<div ui-type="nav"></div>'
]),

akZ=A.TE([
'<li data-id="$sId$" data-type="$sItemType$" data-viewtype="$sViewType$" mor="list_mor" mot="list_mot" ',



' ck="list_edit" ',

' ui-type="column" class="list_item">',
'<label class="list_select" ck="list_fake_check" for="cb_$_root_.sType$_$sId$"><input id="cb_$_root_.sType$_$sId$" ck="list_check" type="checkbox" ui-type="checkbox" class="cb" value="$sId$" /></label>',
'<span class="name tf">',
'$@$for($oName$)$@$',
'$@$if($sVal$)$@$',
'$@$eval getTop().htmlEncode($sVal$)$@$',
'$@$else$@$',
'(\u65E0\u59D3\u540D)',
'$@$endif$@$',
'$@$endfor$@$',
'</span>',
'<span class="email tf" >',
'$@$for($oEmail$)$@$',
'$@$if($_idx_$==0)$@$',
'$sVal$',
'$@$endif$@$',
'$@$endfor$@$',
'$@$if($oEmail$&&$oEmail$.length>1)$@$',
'&nbsp;($@$eval $oEmail.length$$@$)',
'$@$endif$@$',
'</span>',


'$@$if($sItemType$!="domain"&&$sItemType$!="qq")$@$',
'<span class="mobile tf">',
'$@$for($oTel$)$@$',
'$@$if($_idx_$==0)$@$',
'$sVal$',
'$@$endif$@$',
'$@$endfor$@$',
'</span>',
'$@$endif$@$',

'$@$if($_root_.sType$=="search"||$sItemType$=="normal"&&!$_root_.sGroupId$)$@$',
'<span class="groups tf">',

'$@$for($oGroup$)$@$',
'$@$if($sName$)$@$',
'<span class="groups_item">',
'$@$eval getTop().htmlEncode($sName$)$@$',
'</span>',
'$@$endif$@$',
'$@$endfor$@$',

'</span>',
'$@$endif$@$',
'</li>'
]),
dzA=A.TE([
'$@$if($bIsSearch$)$@$',
'<li ui-type="column-empty" class="empty">',
'\u6CA1\u6709\u641C\u5230\u8054\u7CFB\u4EBA\u4FE1\u606F',
'</li>',
'$@$else if($sGroupId$)$@$',
'<li ui-type="column-empty" class="empty">',
'\u8BE5\u7EC4\u6682\u65E0\u8054\u7CFB\u4EBA\uFF0C<a ck="list_create" data-groupid="$sGroupId$">\u6DFB\u52A0\u4E00\u4E2A\u5427</a>',
'</li>',
'$@$else$@$',
'<li ui-type="column-empty" class="empty">',
'\u4F60\u8FD8\u6CA1\u6709\u8054\u7CFB\u4EBA\u4FE1\u606F\uFF0C<a ck="list_create">\u6DFB\u52A0\u4E00\u4E2A\u5427</a>',
'</li>',
'$@$endif$@$'
]),
bkR=A.TE([
'<li ui-type="column-header" class="column_header">',
'<label class="list_select" ck="list_fake_check" for="cb_all">',
'<input id="cb_all" ck="list_select_all" data-type="$sViewType$" type="checkbox" ui-type="checkall" class="cb" value="" />',
'</label>',
'<span class="name tf">',
'<span ck="list_sort" data-sorttype="name" data-type="$sViewType$" class="$@$if($sSortType$&&$sSortType$!="name")$@$ pointer $@$endif$@$">',
'\u59D3\u540D',
'<span class="ico_sort_down">\u2193</span>',
'</span>',
'</span>',
'<span class="email tf">',
'<span ck="list_sort" data-sorttype="mail" data-type="$sViewType$" class="$@$if($sSortType$!="mail")$@$ pointer $@$endif$@$">',
'\u90AE\u7BB1',
'<span class="ico_sort_down">\u2193</span>',
'</span>',
'</span>',

'$@$if($sViewType$!="domain"&&$sViewType$!="qq")$@$',
'<span class="mobile tf">',
'<span ck="list_sort" data-sorttype="tel" data-type="$sViewType$" class="$@$if($sSortType$!="tel")$@$ pointer $@$endif$@$">',
'\u7535\u8BDD',
'<span class="ico_sort_down">\u2193</span>',
'</span>',
'</span>',
'$@$endif$@$',
'$@$if($sType$=="search"||$sViewType$=="normal"&&!$sGroupId$)$@$',
'<span class="groups tf">',
'<span ck="list_sort" data-sorttype="group" data-type="$sViewType$" class="$@$if($sSortType$!="group")$@$ pointer $@$endif$@$">',
'\u5206\u7EC4',
'<span class="ico_sort_down">\u2193</span>',
'</span>',
'</span>',
'$@$endif$@$',
'</li>'
]),
efL=A.TE([
'$@$if($sType$=="search")$@$',
'<h2 class="title_search">',
'$@$if($bLoading$)$@$',
'\u6B63\u5728\u67E5\u627E...',
'$@$else if($nCnt$ > 0)$@$',
'<span>\u67E5\u627E\u5230\u5305\u542B\u201C<span class="green">$@$eval getTop().htmlEncode($sKeyword$)$@$</span>\u201D\u7684\u7ED3\u679C $nCnt$ \u4E2A</span>',
'$@$else$@$',
'<span class="bold">\u6CA1\u6709\u67E5\u5230\u7B26\u5408\u6761\u4EF6\u7684\u8054\u7CFB\u4EBA</span>',
'$@$endif$@$',
'&nbsp;&nbsp;|&nbsp;&nbsp;',
'<a ck="search_back" href="javascript:;">\u8FD4\u56DE\u901A\u8BAF\u5F55\u5217\u8868</a>',
'</h2>',
'$@$else$@$',
'<h2>',







'$@$if(($sViewType$=="normal"||$sViewType$=="other")&&$sGroupId$)$@$',
'<a ck="list_edit_group" data-groupid="$sGroupId$" href="javascript:;" class="group_edit">',
'<em class="ico_edit"></em>\u7BA1\u7406\u7EC4',
'</a>',
'$@$endif$@$',
'$sViewGroupName$',
'</h2>',
'$@$endif$@$',
'<ul ui-type="list">',

'$@$if($bLoading$)$@$',
'<li ui-type="column-loading" class="loading">',

'</li>',
'$@$else if($oList.length$ == 0)$@$',







'$@$else$@$',
'$@$if($sType$=="search")$@$',
'$@$if($oNormal.nCnt$)$@$',
'<li ui-type="column-title" class="title">',
'<h2>\u901A\u8BAF\u5F55<span class="normal f_size">($oNormal.nCnt$)</span></h2>',
'</li>',
'<div ui-type="innerlist">',
bkR.replace({sType:"search",sViewType:"normal"}),
'$@$for($oNormal.oList$)$@$',
akZ,
'$@$endfor$@$',
'</div>',
'$@$endif$@$',

'$@$if($oOther.nCnt$)$@$',
'<li ui-type="column-title" class="title">',
'<h2>\u5386\u53F2\u8054\u7CFB\u4EBA<span class="normal f_size">($oOther.nCnt$)</span></h2>',
'</li>',
'<div ui-type="innerlist">',
bkR.replace({sType:"search",sViewType:"other"}),
'$@$for($oOther.oList$)$@$',
akZ,
'$@$endfor$@$',
'</div>',
'$@$endif$@$',

'$@$if($oDomain.nCnt$)$@$',
'<li ui-type="column-title" class="title">',
'<h2>\u57DF\u540D\u90AE\u7BB1<span class="normal f_size">($oDomain.nCnt$)</span></h2>',
'</li>',
'<div ui-type="innerlist">',
bkR.replace({sType:"search",sViewType:"domain"}),
'$@$for($oDomain.oList$)$@$',
akZ,
'$@$endfor$@$',
'</div>',
'$@$endif$@$',

'$@$if($oQQ.nCnt$)$@$',
'<li ui-type="column-title" class="title">',
'<h2>QQ\u597D\u53CB<span class="normal f_size">($oQQ.nCnt$)</span></h2>',
'</li>',
'<div ui-type="innerlist">',
bkR.replace({sType:"search",sViewType:"qq"}),
'$@$for($oQQ.oList$)$@$',
akZ,
'$@$endfor$@$',
'</div>',
'$@$endif$@$',
'$@$else$@$',
'<div ui-type="innerlist">',
bkR,
'$@$for($oList$)$@$',
akZ,
'$@$endfor$@$',
'</div>',
'$@$endif$@$',
'$@$endif$@$',

'</ul>',
'$@$if(!$bLoading$)$@$',






'$@$endif$@$'
]),


eCa=A.TE([
bkR,
'$@$if($sType$=="search")$@$',
'$@$if($sViewType$=="normal")$@$',
'$@$for($oNormal.oList$)$@$',
akZ,
'$@$endfor$@$',
'$@$else if($sViewType$=="other")$@$',
'$@$for($oOther.oList$)$@$',
akZ,
'$@$endfor$@$',
'$@$else if($sViewType$=="domain")$@$',
'$@$for($oDomain.oList$)$@$',
akZ,
'$@$endfor$@$',
'$@$else if($sViewType$=="qq")$@$',
'$@$for($oQQ.oList$)$@$',
akZ,
'$@$endfor$@$',
'$@$endif$@$',
'$@$else$@$',
'$@$if($oList.length$ == 0)$@$',
dzA,
'$@$else$@$',
'$@$for($oList$)$@$',
akZ,
'$@$endfor$@$',
'$@$endif$@$',
'$@$endif$@$'
]),

dej=A.TE([
'#@#if(#bLocal#)#@#',
'$@$if($_root_.sId$&&$sVal$||$bAdded$)$@$',
'#@#endif#@#',
'<li ui-type="column" token="#token#">',
'<label ck="addr_editlabel" class="caption tf"',
'#@#if(#nEditType#==0)#@#',
' ui-type="edit" ',
'#@#else#@#',
' ui-type="editmenu"  data-menu="#@#eval #oMenus#.join()#@#" ',
'#@#endif#@#',
'>',
'#@#if(#nEditType#==0)#@#',
'<span>$sLabel$</span>',
'#@#else#@#',
'<span>$sLabel$</span><em class="ico_select_s"></em>',
'#@#endif#@#',
'</label>',
'<div class="column_value">',
'<input type="text" class="txt" ui-type="input" ku="enable_save" tabindex="1" ',
'#@#if(#token#=="oTel"||#token#=="oEmail"||#token#=="oUrl")#@#',
' data-type="$sType$" ',
'#@#endif#@#',
'#@#if(#token#=="oIM")#@#',
' data-formatted="1" ',
'#@#endif#@#',
'#@#if(#token#=="oDate")#@#',
' onfocus="QMContact.msg(\'msg:COM_CALENDAR\', {oDom:this,sFormat:\'YYYY-MM-DD\',sVal:this.value});"',
' onblur="QMContact.msg(\'msg:COM_CALENDAR_HIDE\')" ',
'#@#endif#@#',
' name="#token#" default="$sDefault$" value="$@$eval getTop().htmlEncode($sVal$)$@$">',
'$@$if($bAdded$||$_idx_$!=0)$@$',
'<a ck="addr_remove" class="column_action" href="javascript:;" hidefocus><em class="ico_column_remove pointer"></em></a>',
'$@$else$@$',
'<a ck="addr_add" class="column_action" href="javascript:;" hidefocus><em class="ico_column_add pointer"></em></a>',
'$@$endif$@$',
'</div>',
'</li>',
'#@#if(#bLocal#)#@#',
'$@$endif$@$',
'#@#endif#@#'
],"#"),

baI=A.TE([
'$@$if($bAdded$)$@$',
dej,
'$@$else$@$',
'$@$for($#token#$)$@$',
dej,
'$@$endfor$@$',
'$@$endif$@$'
],"#"),


ezM=A.TE([
'<li ui-type="column" class="column_first">',
'<span class="caption tf">',
'$@$for($oPhoto$)$@$',
'$@$if($sVal$)$@$',
'<a href="javascript:;" class="avator">',
'<img ui-type="avator" data-id="$sId$" data-empty="0" class="" width="40" height="40" ',
' src="$sVal$" ck="addr_faceUpload" />',
'</a>',
'$@$else$@$',
'<a href="javascript:;" class="avator">',
'<img ui-type="avator" data-id="$sId$" data-empty="1" class="" width="40" height="40" ',
' src="http://mail.qq.com/zh_CN/htmledition/images/rss/male.gif" ck="addr_faceUpload" />',
'</a>',
'$@$endif$@$',
'$@$endfor$@$',
'</span>',
'<div class="column_value">',
'<span class="name_combined">',
'$@$for($oName$)$@$',
'<input ui-type="input" ku="enable_save" tabindex="1" type="text" name="oName" ',

' default="$sDefault$" value="$@$eval getTop().htmlEncode($sVal$)$@$" class="txt_name txt" />',
'$@$endfor$@$',
'<a class="column_action" href="javascript:;" ck="name_split"><em class="ico_name_seperate"></em></a>',
'</span>',
'<span class="name_seperated">',
'<input ui-type="input" ku="enable_save" tabindex="1" type="text" name="oFamilyName" default="\u59D3\u6C0F" value="" class="txt_name txt_name_first txt" />',
'<input ui-type="input" ku="enable_save" tabindex="1" type="text" name="oGivenName" default="\u540D\u5B57" value="" class="txt_name txt_name_last txt" />',
'<a class="column_action" href="javascript:;" ck="split_close"><em class="ico_name_combine"></em></a>',
'</span>',
'</div>',

'<input ui-type="input"  type="hidden" name="sId" value="$sId$" /> ',
'<input ui-type="input"  type="hidden" name="sItemType" value="$sItemType$" /> ',


'$@$if($oIds$&&$oIds$.length)$@$',
'<input ui-type="input"  type="hidden" name="sMethod" value="manualcombine" /> ',
'$@$endif$@$',
'$@$for($oIds$)$@$',

'<input ui-type="input" data-formatted="1"  type="hidden" name="sAddrID" value="$sId$" /> ',
'$@$endfor$@$',
'</li>'
]),

egO=A.TE([
'$@$for($oBirthday$)$@$',
'<li ui-type="column" class="column_birthday">',
'<label ck="addr_editlabel" ui-type="edit" class="caption tf"><span>$sLabel$</span></label>',
'<div class="column_value">',
'<input type="text" class="txt" ui-type="input" ku="enable_save" tabindex="1" ',
' name="oBirthday" ',
' onfocus="QMContact.msg(\'msg:COM_CALENDAR\', {oDom:this,sFormat:\'YYYY-MM-DD\',sVal:this.value});" ',
' onblur="QMContact.msg(\'msg:COM_CALENDAR_HIDE\')" ',
' default="$sDefault$" value="$sVal$" />',
'</div>',
'</li>',
'$@$endfor$@$'
]),


cZg=A.TE([
'<li ui-type="column" token="oOrg" class="column_job">',
'<label ck="addr_editlabel"  class="caption tf" ui-type="edit"><span>$sLabel$</span></label>',
'<div class="column_value">',
'<input type="text" class="job_company txt" ui-type="input" ku="enable_save" tabindex="1" name="oOrg" default="\u516C\u53F8" value="$@$eval getTop().htmlEncode($sOrg1$)$@$" />',
'<input type="text" class="job_department txt" ui-type="input" ku="enable_save" tabindex="1" name="sOrg2" default="\u90E8\u95E8" value="$@$eval getTop().htmlEncode($sOrg2$)$@$" />',
'<input type="text" class="job_position txt" ui-type="input" ku="enable_save" tabindex="1" name="sTitle" default="\u804C\u4F4D" value="$@$eval getTop().htmlEncode($sTitle$)$@$" />',
'$@$if($bAdded$||$_idx_$!=0)$@$',
'<a ck="addr_remove" class="column_action" href="javascript:;" hidefocus><em class="ico_column_remove pointer"></em></a>',
'$@$else$@$',
'<a ck="addr_add" class="column_action" href="javascript:;" hidefocus><em class="ico_column_add pointer"></em></a>',
'$@$endif$@$',
'</div>',
'</li>'
]),

dsT=A.TE([
'$@$if($bAdded$)$@$',
cZg,
'$@$else$@$',
'$@$for($oOrg$)$@$',
cZg,
'$@$endfor$@$',
'$@$endif$@$'
]),


dsx=A.TE([
'<li ui-type="column" token="oAdr" class="column_adr">',
'<label ck="addr_editlabel"  class="caption tf" ui-type="editmenu"  data-menu="'+baM.menuref("oAdr").join()+'">',
'<span>$sLabel$</span><em class="ico_select_s"></em>',
'</label>',
'<div class="column_value">',
'<input type="text" class="addr_country txt" ui-type="input" ku="enable_save" tabindex="1" name="sCountry" default="\u56FD\u5BB6" data-type="$sType$" value="$@$eval getTop().htmlEncode($sCountry$)$@$" />',
'<input type="text" class="addr_province txt" ui-type="input" ku="enable_save" tabindex="1" name="sProvince" default="\u7701\u4EFD" value="$@$eval getTop().htmlEncode($sProvince$)$@$" />',
'<input type="text" class="addr_city txt" ui-type="input" ku="enable_save" tabindex="1" name="sCity" default="\u57CE\u5E02" value="$@$eval getTop().htmlEncode($sCity$)$@$" />',
'$@$if($bAdded$||$_idx_$!=0)$@$',
'<a ck="addr_remove" class="column_action" href="javascript:;" hidefocus><em class="ico_column_remove pointer"></em></a>',
'$@$else$@$',
'<a ck="addr_add" class="column_action" href="javascript:;" hidefocus><em class="ico_column_add pointer"></em></a>',
'$@$endif$@$',
'</div>',
'<div class="column_value" style="padding-top:6px;">',
'<input type="text" class="addr_street txt" ui-type="input" ku="enable_save" tabindex="1" name="sStreet" default="\u8857\u9053" value="$@$eval getTop().htmlEncode($sStreet$)$@$" />',
'<input type="text" class="addr_postcode txt" ui-type="input" ku="enable_save" tabindex="1" name="sPostcode" default="\u90AE\u653F\u7F16\u7801" value="$@$eval getTop().htmlEncode($sPostcode$)$@$" />',
'</div>',
'</li>'
]),

dud=A.TE([
'$@$if($bAdded$)$@$',
dsx,
'$@$else$@$',
'$@$for($oAdr$)$@$',
dsx,
'$@$endfor$@$',
'$@$endif$@$'
]),


cVF=A.TE([








'<span class="group_item">',
'$sName$',
'<a ui-type="addr_group" ck="addr_group_bind" data-id="$sId$" data-bind="$@$eval typeof($nIdx$)!="undefined"?$nIdx$:-1$@$" class="group_check group_delete" href="javascript:;" title="\u7ED1\u5B9A\u90AE\u7BB1">',
'<em class="ico_dropdowm"></em>',
'</a>',
'<a ui-type="addr_group" ck="addr_group_del" class="group_remove group_delete" href="javascript:;" title="\u5220\u9664\u5206\u7EC4">',
'<em class="ico_delete_dark"></em>',
'</a>',
'</span>'
]),
ewF=A.TE([
'<li ui-type="column" ui-subtype="group" class="column_groups">',
'<label  class="caption tf" style="cursor:default;">\u5206\u7EC4</label>',
'<div class="column_value">',
'$@$for($oGroup$)$@$',
cVF,
'$@$endfor$@$',
'<a ck="addr_group_add" class="group_item group_add" href="javascript:;" title="\u9009\u62E9\u5206\u7EC4">',
'<em class="ico_column_add"></em>',
'</a>',
'</div>',
'</li>'
]),


eFy=A.T([
'$@$for($oNote$)$@$',
'<li ui-type="column">',
'<label ck="addr_editlabel" class="caption tf" ui-type="edit"><span>$sLabel$</span></label>',
'<div class="column_value">',
'<textarea class="txt_more txt" ui-type="input" ku="enable_save" tabindex="1" name="oNote" default="$sDefault$">$@$eval getTop().htmlEncode($sVal$)$@$</textarea>',
'</div>',
'</li>',
'$@$endfor$@$'
]),
duI=A.TE([
baI.replace({token:"oEmail",nEditType:1,oMenus:baM.menuref("oEmail")})
]),
dtn=A.TE([
baI.replace({token:"oTel",nEditType:1,oMenus:baM.menuref("oTel")})
]),



dpa=A.TE([
baI.replace({token:"oIM",nEditType:1,oMenus:baM.menuref("oIM")})
]),
dvg=A.TE([
baI.replace({token:"oDate",nEditType:1,oMenus:baM.menuref("oDate"),bLocal:true})
]),
cSO=A.TE([
baI.replace({token:"oRelate",nEditType:1,oMenus:baM.menuref("oRelate"),bLocal:true})
]),
dxE=A.TE([
baI.replace({token:"oUrl",nEditType:1,oMenus:baM.menuref("oUrl"),bLocal:true})
]),
dzW=A.TE([
baI.replace({token:"oCustom",nEditType:0})
]),
ecm=A.TE([
'<div class="panel_wrapper settingtable">',
'<div class="panel_edit_inner">',
'<ul>',





ezM,
duI,
dtn,
dud,
egO,
dvg,
cSO,
dpa,
dsT,
dxE,
ewF,
dzW,
eFy,
'</ul>',
'</div>',
'</div>'
]),
















eJp=A.TE([
'<div id="qmcontact_cal" class="plugin_cal" tabindex="-1">',
'<table cellspaceing="0" cellpadding="0">',
'<tr>',
'<td title="\u4E0A\u5E74" opt="slide" data-range="-12">&lt;&lt;</td>',
'<td title="\u4E0A\u6708" opt="slide" data-range="-1">&lt;</td>',
'<td colspan="3">$nYear$ - $nMonth$</td>',
'<td title="\u4E0B\u6708" opt="slide" data-range="1">&gt;</td>',
'<td title="\u4E0B\u5E74" opt="slide" data-range="12">&gt;&gt;</td>',









'</tr>',
'<tr>',
'<th>\u65E5</th>',
'<th>\u4E00</th>',
'<th>\u4E8C</th>',
'<th>\u4E09</th>',
'<th>\u56DB</th>',
'<th>\u4E94</th>',
'<th>\u516D</th>',
'</tr>',
'$@$for($oWeeks$)$@$',
'<tr>',
'$@$for($_this_$)$@$',
'$@$if($nYear$&&$nSolarDay$)$@$',
'<td data-year="$nSolarYear$" data-month="$nSolarMonth$" data-day="$nSolarDay$" ',
'class=" ',

'$@$if($nSolarMonth$!=$_root_.nMonth$)$@$',
' day_minor ',
'$@$endif$@$',
'$@$if($nSolarMonth$==$_root_.nSelMonth$&&$nSolarDay$==$_root_.nSelDate$&&$nSolarYear$==$_root_.nSelYear$)$@$',
' day_selected fn_list ',
'$@$else if($nSolarMonth$==$_root_.nCurrMonth$&&$nSolarDay$==$_root_.nCurrDate$&&$nSolarYear$==$_root_.nCurrYear$)$@$',
' day_today ',
'$@$endif$@$',
' " ',
' opt="choose">$nSolarDay$</td>',
'$@$endif$@$',
'$@$endfor$@$',
'</tr>',
'$@$endfor$@$',
'</table>',
'</div>'
]);

return{
init:function()
{

},
tmpl:function(bti,av,jA)
{
var aE=av||{},
cz={
"add":{
"oEmail":duI,
"oTel":dtn,
"oAdr":dud,
"oIM":dpa,
"oOrg":dsT,
"oUrl":dxE,
"oDate":dvg,
"oRelate":cSO,
"oCustom":dzW
}[aE.sToken],
"calendar":eJp,
"info":eaY,
"detail":ecm,
"detail_group_bind":cVF,
"list":efL,
"list_inner":eCa,
"list_item":akZ,
"list_empty":dzA,
"nav":eGL,
"bar":eJL
}[bti];
if(typeof(av)=="undefined")
{
return cz;
}
else
{
if(bti=="add")
{
aE=A.extend({bAdded:true},aE);
}
return cz.replace(aE,jA);
}
}
};
})(QMContactAdaptor);









(function(A,aN)
{
QMModuleMgr.create("Contact.AddEdit",function(aG,hB)
{
var aiL=this;
this.init_=function(ay)
{
aG.init_.call(this,ay);
this.iG=ay.oContainer;
this.kr=ay.oParam;


};
this.action_=function(aL)
{
aG.action_.call(this);

var ao=this,
bJ=aL||{},
aX=bJ.sId||"",
hT=bJ.oIds||[],
bk=bJ.sType||"",
tL=bJ.sGroupId||"",
Dg=bJ.oGroupList||[];

this.kq=bk;
this.jJ=aX;
hB.msg("msg:ADDEDIT_SHOW",{sId:aX});


A.bodyScroll(window,"scrollTop",0);

tL
&&this.data.get("group",{sId:tL},function(ajM)
{
Dg=ajM;
});


this.data.get("item",{sType:bk,sId:aX},function(av)
{
var SE=ao.kr.sUserName||"",
dao=ao.kr.sUserMail||"",
dbu=ao.kr.sUserIcon||"",
dhj,
ajV,
akF,
aMh=(SE||dao)?{
oName:[{sVal:SE}],
oEmail:[{sVal:dao}]
}:{};

if(dbu)
{
A.extend(aMh,{oPhoto:[{sVal:dbu}]});
}

aiL.bUR=av.oFamilyName?av.oFamilyName[0].sVal:"";
aiL.bXd=av.oGivenName?av.oGivenName[0].sVal:"";
aiL.aHm=av.oName[0].sVal;



(bJ.sAction=="add"||hT.length)
&&A.merge(aMh,{oGroup:Dg,oIds:hT});

(av.sItemType=="domain"||av.sItemType=="qq")
&&A.merge(aMh,{sId:"",oGroup:[]});

ao.render(ao.view.tmpl("detail",ao.eRm(A.merge({},av,aMh))));


dhj=A.finds('input[name="oName"]',ao.iG)[0];
ajV=A.finds('input[name="oGivenName"]',ao.iG)[0];
akF=A.finds('input[name="oFamilyName"]',ao.iG)[0];
A.placeholder(A.finds('li[ui-type="column"] [ui-type="input"]',ao.iG));
A.editlabel(A.finds('li[ui-type="column"] label',ao.iG));

ao.bXH();
ao.cWQ();
ajV.onchange=akF.onchange=function()
{
dhj.value=akF.value+ajV.value;
}

setTimeout(function()
{

A.finds('input[name="oName"]',ao.iG)[0].focus();
A.finds('input[name="oName"]',ao.iG)[0].select();
});

});

};
this.destory_=function()
{
aG.destory_.call(this);
this.kr=this.iG=aN;
};

this.register(
{
keyup:
{

"enable_save":
{
bPropagable:false,
fHandle:function(cO,au)
{
this.cWQ();
this.bXH();
}
}
},
click:
{
"addr_add":
{
bPropagable:false,
fHandle:function(cO,au)
{
var QS=A.parents('li[ui-type="column"]',au)[0],
xW=QS.getAttribute("token"),
iJ=A.finds('li[token="'+xW+'"]',this.iG);


QS=iJ[iJ.length-1];

A.insertHTML(QS,"afterEnd",
this.view.tmpl("add",A.extend({sToken:xW},this.data.ref()[xW][0])));

A.placeholder(A.finds('[ui-type="input"]',QS.nextSibling));
A.editlabel(A.finds('label',QS.nextSibling));


A.finds('[ui-type="input"]',QS.nextSibling)[0].focus();

xW=="oEmail"
&&this.bXH();
}
},
"addr_remove":
{
bPropagable:false,
fHandle:function(cO,au)
{
var QS=A.parents('li[ui-type="column"]',au)[0],
xW=QS.getAttribute("token");
A.removeSelf(A.parents('[ui-type="column"]',au)[0]);

xW=="oEmail"
&&this.bXH();
}
},
"name_split":
{
bPropagable:false,
fHandle:function(cO,au)
{
var dyj=A.parents('[ui-type="column"]',au)[0];
eol=A.finds('span[class="name_combined"]',this.iG)[0],
cvg=A.finds('input[ui-type="input"]',eol)[0],
bcQ=A.finds('span[class="name_seperated"]',this.iG)[0],
ajV=A.finds('input[name="oGivenName"]',bcQ)[0],
akF=A.finds('input[name="oFamilyName"]',bcQ)[0],
aMf=cvg&&(A.hasClass(cvg,"placeholder")?"":cvg.value);

if(aMf!=aiL.aHm)
{
A.QMAjax.send(A.T("/cgi-bin/laddr_addedit?sid=$sid$&action=splitname&name=$fullname$&t=addr_addedit").replace(
{
sid:A.getSid(),
fullname:A.encodeURI(aMf)||""
}),
{
method:"post",
onload:function(bh,bO)
{
if(bh)
{
var lO=A.evalValue(bO),
drX=lO&&lO.familyname,
cYK=lO&&lO.givenname;
ajV&&A.removePlaceholder(ajV);
akF&&A.removePlaceholder(akF);
(ajV)&&(ajV.value=cYK);
(akF)&&(akF.value=drX);

A.addClass(dyj,"column_seperated");
aiL.aHm=aMf;
aiL.bUR=drX;
aiL.bXd=cYK;

setTimeout(function()
{
ajV.focus();
akF.focus();
});
}
}
}
);
}
else 
{
ajV&&A.removePlaceholder(ajV);
akF&&A.removePlaceholder(akF);
A.addClass(dyj,"column_seperated");
ajV.value=aiL.bXd;
akF.value=aiL.bUR;


setTimeout(function()
{
ajV.focus();
akF.focus();
});
}
}
},
"split_close":
{

bPropagable:false,
fHandle:function(cO,au)
{
var bcQ=A.parents('[ui-type="column"]',au)[0],
cub=A.finds('input[name="oName"]',bcQ)[0],
cXe=A.finds('input[name="oFamilyName"]',bcQ)[0],
dgr=A.finds('input[name="oGivenName"]',bcQ)[0];

aiL.bUR=(A.hasClass(cXe,"placeholder")?"":cXe.value);
aiL.bXd=(A.hasClass(dgr,"placeholder")?"":dgr.value);
A.removePlaceholder(cub);
cub.value=aiL.aHm=aiL.bUR+aiL.bXd;
A.rmClass(bcQ,"column_seperated");


setTimeout(function()
{
cub.focus();
});
}
},
"addr_faceUpload":
{
bPropagable:false,
fHandle:function(cO,au)
{
hB.msg("msg:COM_FACE_UPLOAD",au);
}
},
"addr_group_del":
{
bPropagable:false,
fHandle:function(cO,au)
{
A.removeSelf(A.parents(".group_item",au)[0]);
}
},
"addr_group_add":
{
bPropagable:false,
fHandle:function(cO,au)
{
var ao=this;
this.data.get("group",{sType:"normal"},function(ajM)
{
hB.msg("msg:COM_GROUP_LIST",{
oGroupList:ajM,
oDom:au,
fItemClick:function(sJ)
{
var Pr=A.parents('li[ui-type="column"]',au)[0],
bKW=A.finds('[data-id="'+sJ+'"]',Pr);

!bKW.length
&&ao.data.get("group",{sId:sJ},function(av)
{
A.insertHTML(au,"beforeBegin",ao.view.tmpl("detail_group_bind",av[0]));
});
}
});
});
}
},
"addr_group_bind":
{
bPropagable:false,
fHandle:function(cO,au)
{
var bq=[],
cpY=A.finds('li[token="oEmail"] input[ui-type="input"]',this.iG),
bPt=+au.getAttribute("data-bind");
bPt=bPt==-1?0:bPt;

bq.push({
sItemValue:'<span>\u9ED8\u8BA4\u6536\u4FE1\u5E10\u53F7\uFF1A</span>'
});
for(var i=0,l=cpY.length;i<l;i++)
{

cpY[i].value
&&
bq.push({
sId:i,
sItemValue:A.TE([
'<span class="comm_menu">',
'<input class="comm_menu_radio" type="radio" style="margin-left:0;" ',
'$@$if($bCheck$)$@$',
' checked="" ',
'$@$endif$@$',
'/>',
'$sEmail$',
'</span>'
]).replace({
bCheck:bPt==i,
sEmail:cpY[i].value
})
});
}

bq.length
&&
bq.push({
bDisSelect:true,
nHeight:6,
sItemValue:'<div class="menu_item_line"></div>'
});
bq.push({
sId:"_remove_",
sItemValue:'<span class="comm_menu">\u79FB\u51FA\u8BE5\u7EC4</span>'
});

hB.msg("msg:COM_COMM_MENU",{
oItems:bq,
oDom:au,
nWidth:220,
fItemClick:function(aM)
{
if(aM=="_remove_")
{
A.removeSelf(A.parents(".group_item",au)[0]);
}
else
{
au.setAttribute("data-bind",aM);
}
}
});
}
}
},
msg:
{
"msg:LIST_SHOW":function()
{
this.hide();
this.MT=false;
},
"msg:SEARCH_SHOW":function()
{
this.hide();
this.MT=true;
},
"msg:ADDEDIT_ADD":function(iK)
{
this.action_(iK||{});
},
"msg:ADDEDIT_SAVE":function()
{
this.YA();
},
"msg:ADDEDIT_CANCEL":function(aM)
{
var aX=aM||this.kr.sDialogId;
this.OY(aM);
},
"msg:INFO_SHOW":function()
{
this.hide();
}
}
}
);

this.eRm=function(av)
{
var	fM={},
Mv=av["oEmail"],
fb=av["oGroup"];

for(var i=0;i<Mv.length;i++)
{
if(Mv[i].sGroupId)
{
fM[Mv[i].sGroupId]=i;
}
}

for(var i=0;i<fb.length;i++)
{
var cR=fM[fb[i].sId];
if(typeof(cR)!="undefined")
{
fb[i].nIdx=cR;
}
}
fM=Mv=fb=aN;

return av;
};
this.OY=function(aM)
{
var ao=this,
bSJ=this.kr.nEditType,
aDk=this.kr.sDialogId;

if(aDk)
{
A.QMDialog(aDk)
&&A.QMDialog(aDk).close();
}
else if(bSJ==1)
{
hB.msg("msg:APP_HOME");
}
else
{
debug("cancel id:"+aM);
if(aM&&aM!=this.data.CONST.COMBINE_NAME)
{
this.data.get("item",
{
sType:this.MT?"search":"list",
sId:aM
},
function(av)
{
hB.cmd("Contact.Info",av);
}
);
}
else
{
hB.cmd(this.MT?"Contact.Search":"Contact.List");
}
}
};
this.YA=function()
{
var ao=this,
Vu=ao.emp(),
axm=this.iG,
bSJ=this.kr.nEditType,
cSC=Vu.id==ao.data.CONST.COMBINE_NAME,
aDk=this.kr.sDialogId;

if(!this.Pj(Vu))
{
return;
}


ao.data.put(cSC?"combine":"item",Vu,function(av)
{

if(!av)
{
return;
}

var aq=getTop();
aq.QMAddress
&&aq.QMAddress.setExpired(0);
aq.QMContactSelectData
&&aq.QMContactSelectData.setExpired(0);
aq.QMMLCache.upVer();
aq.setTimeout(function(){
aq.reloadLeftWin();
},1000);

if(aDk)
{
A.QMDialog(aDk)
&&A.QMDialog(aDk).close();
}
else if(bSJ==1)
{
hB.msg("msg:APP_HOME");
}
else if(bSJ==2)
{

var drc=A.finds('input[name="sId"]',axm)[0];
drc
&&(drc.value=av.sId);
}
else
{

if(av.sOriginalType=="normal"&&!this.MT)
{
hB.cmd("Contact.Info",A.merge({bIsCombine:cSC},ao.data.ref(),av));
}
else
{
hB.cmd(ao.MT?"Contact.Search":"Contact.List");
}
}
});
};


this.Pj=function(dsE)
{
for(var awX in dsE)
{
var bn=dsE[awX];

if(!bn)
{
continue;
}

if(awX=="email")
{

for(var i=0;i<bn.length;i++)
{
if(bn[i].sVal&&!/^[^@]+@[0-9a-z+_.=-]+\.[0-9a-z]{2,4}$/gi.test(decodeURIComponent(bn[i].sVal)))
{
A.showError("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5E10\u53F7");
return false;
}
}
}
else if(awX=="tel")
{
for(var i=0;i<bn.length;i++)
{

if(bn[i].sVal&&!/^[\s0-9-+\t]+$/gi.test(decodeURIComponent(bn[i].sVal)))
{
A.showError("\u7535\u8BDD\u53EA\u80FD\u5305\u542B\u6570\u5B57\u3001\u7A7A\u683C\u3001\u201C+\u201D\u3001\u201C-\u201D");
return false;
}
}
}
else if(awX=="birthday")
{
if(bn[0].sVa&&!/^\d{1,2}[\s-]?\d{1,2}$/gi.test(decodeURIComponent(bn[0].sVal)))
{
A.showError("\u751F\u65E5\u683C\u5F0F\u53C2\u8003\uFF1A2012-12-21");
return false;
}
}
else if(typeof(bn)=="object"&&awX!="group")
{
for(var i=0;i<bn.length;i++)
{
if(false&&new RegExp("[\\|/:\'\"]").test(bn[i].sVal+bn[i].sLabel))
{
A.showError(bn[i].sLabel+"\u4E0D\u80FD\u5305\u542B\\|/:'\"\u7B49\u7279\u6B8A\u5B57\u7B26");
return;
}
}
}

bn=aN;
}








return true;
};


this.emp=function()
{
var coL=A.finds('[ui-type="column"]',this.iG),
aE={};

var cTf=A.finds('img[ui-type="avator"]',this.iG)[0];
if(cTf.getAttribute("data-empty")!="1")
{
var aY=cTf.getAttribute("src")||"";
aE["photo"]=[
{
sUrl:A.encodeURI(aY),
sVal:A.encodeURI(aY.replace(/^.*viewfile\?f=(\w+).*$/gi,"$1"))
}
];
}

for(var i=0,l=coL.length;i<l;i++)
{
var alV=A.finds('[ui-type="input"]',coL[i]),
dkD=A.finds('label span',coL[i])[0];
for(var j=0,m=alV.length;j<m;j++)
{
var bd=alV[j].name.substring(1),
bk=alV[j].getAttribute("data-type")||'',
cB=(A.isBrowser("ie")&&alV[j].getAttribute("default")==alV[j].value)?"":alV[j].value;

bd=alV[j].getAttribute("data-formatted")=="1"?bd:bd.toLowerCase();
if(bd=="id")
{
aE[bd]=A.trim(cB);
}
else
{
var dwd=A.encodeURI(A.trim(dkD&&dkD.innerHTML||"")),
eor=A.encodeURI(A.trim(cB));
if(!aE[bd])
{
aE[bd]=[];
}


if(bd=="email"||bd=="tel"||bd=="country")
{
var diM=this.data.vcardref(dwd);
diM
&&(bk=diM);
}

aE[bd].push({
sLabel:dwd,
sType:bk,
sVal:eor
});














}
}
}


var bKW=A.finds('a[data-bind]',this.iG);
for(var i=0,l=bKW.length;i<l;i++)
{
if(!aE["group"])
{
aE["group"]=[];
}
var cR=+bKW[i].getAttribute("data-bind"),
tL=bKW[i].getAttribute("data-id"),
gk=aE["email"][cR]?aE["email"][cR].sVal:aE["email"][0].sVal;
aE["group"].push({
sVal:[gk,tL].join(":")
});
}
return aE;
};













this.bXH=function()
{
var iJ=A.finds('li[token="oEmail"]',this.iG),
caV=A.finds('li[ui-subtype="group"]',this.iG)[0],
nI=0;
for(var i=0;i<iJ.length;i++)
{
if(A.finds('[ui-type="input"]',iJ[i])[0].value)
{
nI++;
}
}
if(nI>1)
{
!A.hasClass(caV,"group_multi")
&&A.addClass(caV,"group_multi");
}
else
{
A.hasClass(caV,"group_multi")
&&A.rmClass(caV,"group_multi");
}
};

this.cWQ=function()
{
var ma=false,
iJ=A.finds('li[ui-type="column"] [ui-type="input"]',this.iG);

for(var i=0;i<iJ.length;i++)
{
if(iJ[i].name=="sId")
{
continue;
}

if(iJ[i].value&&iJ[i].value!=iJ[i].getAttribute("default"))
{
ma=true;
break;
}
}
hB.msg("msg:ADDEDIT_DISABLE_SAVE",!ma);
};
},"Base");
})(QMContactAdaptor);







(function(A,aN)
{
QMModuleMgr.create("Contact.List",function(aG,hB)
{
this.init_=function(ay)
{
aG.init_.call(this,ay);
this.iG=ay.oContainer;
this.kr=ay.oParam;
};
this.action_=function(aL)
{
aG.action_.call(this);

var ao=this,
bJ=aL||{};

hB.msg("msg:LIST_SHOW");












this.wa();

};
this.destory_=function()
{
aG.destory_.call(this);
this.kr=this.bwS=this.iG=aN;
};
this.getListType=function()
{

return"list";
};

this.show=function()
{
var eAm=!this.isShow();
aG.show.call(this);

if(typeof(this.bwS)!="undefined"&&eAm)
{
A.bodyScroll(getTop().getMainWin(),"scrollTop",this.bwS);
}
};

this.hide=function()
{


this.isShow()
&&(this.bwS=A.bodyScroll(getTop().getMainWin(),"scrollTop"));
aG.hide.call(this);
};

this.register(
{
mouseover:
{
"list_mor":
{
bPropagable:false,
fHandle:function(cO,au)
{

!A.hasClass(au,"V")
&&A.addClass(au,"V");
}
}
},
mouseout:
{
"list_mot":
{
bPropagable:false,
fHandle:function(cO,au)
{

A.hasClass(au,"V")
&&A.rmClass(au,"V");
}
}
},
click:
{
"list_sort":
{
bPropagable:false,
fHandle:function(cO,au)
{
var ao=this;
this.data.get("list",
A.extend({},this.kr,{
sType:this.getListType(),
sGroupId:this.kr.sViewGroupId,
sViewType:A.attr(au,"data-type"),
sSortType:A.attr(au,"data-sorttype")
}),
function(av)
{
if(av)
{
av.oList.length
&&(A.parents('div[ui-type="innerlist"]',au)[0].innerHTML
=ao.view.tmpl("list_inner",av));
ao.wa();
}
}
);
}
},
"list_group":
{
bPropagable:false,
fHandle:function(cO,au)
{
this.data.get("group",{},function(av)
{
hB.msg("msg:COM_VIEWTYPE_LIST",{
sId:au.getAttribute("data-groupid")||"",
oGroup:av,
oDom:au,
oPos:{x:au.offsetLeft,y:au.offsetTop+au.offsetHeight}
});
});
}
},
"list_edit_group":
{
bPropagable:false,
fHandle:function(cO,au)
{
hB.msg("msg:COM_GROUP_EDIT",{sGroupId:au.getAttribute("data-groupid")});
}
},
"list_create":
{
bPropagable:false,
fHandle:function(cO,au)
{
hB.cmd("Contact.AddEdit",{sAction:"add",sGroupId:au.getAttribute("data-groupid")});
}
},
"list_create_group":
{
bPropagable:false,
fHandle:function(cO,au)
{
hB.msg("msg:COM_GROUP_EDIT");
}
},
"list_edit":
{
bPropagable:false,
fHandle:function(cO,au)
{
var nI=this.wa();

if(nI)
{
A.finds('input[ui-type="checkbox"]',au)[0].checked=
!A.finds('input[ui-type="checkbox"]',au)[0].checked;
this.wa();
}
else
{
var bJ={
sType:this.getListType(),
bShowDetail:true,
sGroupId:this.kr.sViewGroupId,
sId:au.getAttribute("data-id")
};
this.data.get("item",bJ,function(av)
{
hB.cmd("Contact.Info",av);
});
}

this.dqG(cO,au);
}
},
"list_fake_check":
{
bPropagable:false,
fHandle:function(cO,au)
{

}
},
"list_check":
{
bPropagable:false,
fHandle:function(cO,au)
{
this.wa();
this.dqG(cO,A.parents('li[ui-type="column"]',au)[0]);

}
},
"list_select_all":
{
bPropagable:false,
fHandle:function(cO,au)
{
var bk=au.getAttribute("data-type"),
PZ=au.checked,
iJ=A.finds('li[data-type="'+bk+'"]',this.iG);

for(var i=0;i<iJ.length;i++)
{
A.finds('input[ui-type="checkbox"]',iJ[i])[0]
&&(A.finds('input[ui-type="checkbox"]',iJ[i])[0].checked=PZ);
}

this.wa();


}
}
},
msg:
{
"data:GROUP_SAVE":function(iK)
{
location.href=A.urlReplacer({
r:Math.random(),
view:"normal",
groupid:iK.sGroupId
});
},



"data:ITEM_DELETE":function(buQ)
{
for(var i=0;i<buQ.length;i++)
{
A.removeSelf(A.finds(A.T("li[data-id='$id$']").replace({"id":buQ[i].sId}),this.iG)[0]);
}

var iJ=A.finds('li[ui-type="column"]',this.iG);

if(this.getListType()!="search"&&!iJ.length)
{
this.ctH(this.view.tmpl("list_empty",{bIsSearch:this.getListType()=="search",sGroupId:this.kr.sViewGroupId}));
}

},
"data:ITEM_UPDATE":function(bw)
{
var axk=this.kr.sViewType,
bSL=this.kr.sViewGroupId,
caL=bw.sItemType,
eBv=bw.sOriginalType,
ctQ=bw.oGroup||[],
aB=A.finds(A.T("li[data-id='$id$']").replace({"id":bw.sId}),this.iG)[0],
dqn;

for(var i=0;i<ctQ.length;i++)
{
if(ctQ[i].sId==bSL)
{
dqn=ctQ[i];
break;
}
}


if(eBv=="other"&&this.getListType()=="list"

||axk!=caL||bSL&&!dqn)
{

aB
&&A.removeSelf(aB);
aB=aN;

if(aB&&!A.finds('li[data-id]',this.iG).length)
{
this.ctH(this.view.tmpl("list_empty",{sGroupId:bSL}));
}
return;
}


var cCe=A.finds('li[ui-type="column-empty"]',this.iG)[0],
Fz=this.view.tmpl("list_item",A.extend({sViewType:axk,sViewGroupId:bSL},bw));


if(cCe)
{
A.removeSelf(cCe);
cCe=aN;
}

if(aB)
{
A.insertHTML(aB,"afterEnd",Fz);
A.removeSelf(aB);
aB=aN;
}
else
{
this.ctH(Fz);
}
},





























































"msg:APP_KEY/CTRL+A":function(cO)
{
if(this.isShow())
{
var iJ=A.finds('input[ui-type="checkbox"]',this.iG);
for(var i=0,l=iJ.length;i<l;i++)
{
iJ[i].checked=true;
}

var bHW=A.finds('input[ui-type="checkall"]',this.iG);
for(var i=0;i<bHW.length;i++)
{
bHW[i].checked=true;
}
this.wa();
}
},
"msg:LIST_COMBINE":function()
{
var VA=this.getListType();
if(this.isShow())
{
var cUE=false;
this.bct(function(TK)
{
var aB=A.parents('li[ui-type="column"]',TK)[0];
if(A.attr(aB,"data-type")=="domain"||A.attr(aB,"data-type")=="qq"||A.attr(aB,"data-type")=="other")
{
cUE=true;
}
});
if(cUE)
{
A.showError("\u5386\u53F2\u8054\u7CFB\u4EBA/\u57DF\u540D\u90AE\u7BB1\u8054\u7CFB\u4EBA/QQ\u597D\u53CB\u4E0D\u652F\u6301\u5408\u5E76");
return;
}

var ij=[],
bor={},
Dg=[];
this.bct(function(TK)
{
this.data.get("item",{sType:this.getListType(),sId:TK.value},function(av)
{
ij.push(av);

for(var i=0;i<av.oGroup.length;i++)
{
bor[av.oGroup[i].sId]=av.oGroup[i];
}
});
});
for(var i in bor)
{
Dg.push(bor[i]);
}
this.buo();

this.data.get("combine",{sType:VA,oIds:ij},function(av)
{
av
&&hB.cmd("Contact.AddEdit",{
sType:VA,
sId:av.sId,
oGroupList:Dg,
oIds:ij
});
});
}
},
"msg:LIST_COMPOSE":function()
{
if(this.isShow())
{
var ao=this,
ij=[],
tL=this.kr.sViewGroupId;
this.bct(function(TK)
{
this.data.get("item",{sType:this.getListType(),sId:TK.value},function(av)
{
var	gk=av.oEmail[0].sVal,
aMs=function(aR,mB)
{
var bd=aR||"";
return bd?['"',A.htmlDecode(bd),'"',' <',mB,'>'].join(""):mB;
};
for(var i=0;i<av.oEmail.length;i++)
{
if(ao.getListType()!="search"&&tL&&tL==av.oEmail[i].sGroupId)
{
gk=av.oEmail[i].sVal;
break;
}
}
ij.push(aMs(av.oName[0].sVal,gk));
});
});

hB.msg("msg:COM_COMPOSE",{sDefAddrs:ij.join("; ")});
this.buo();
}
},
"msg:LIST_ADD_GROUP_MEMBER":function(iK)
{
var aE=iK||{},
ij=[],
tL=aE.sGroupId,
ao=this;
if(this.isShow())
{
this.bct(function(TK)
{
this.data.get("item",{sType:this.getListType(),sId:TK.value},function(av)
{
av.sId
&&ij.push(av);
});
});


if(tL=="create")
{
hB.msg("msg:COM_GROUP_EDIT",{oAddrs:ij});
}
else if(ij.length)
{
this.data.addGrpupMember(tL,ij,function()
{

if(ao.kr.sViewType=="other"&&ao.getListType()!="search")
{
for(var i=0;i<ij.length;i++)
{
var aB=A.finds(A.T("li[data-id='$id$']").replace({"id":ij[i].sId}),ao.iG)[0]
A.removeSelf(aB);
aB=aN;
}
}

ao.buo();
});
}
else
{
A.showInfo("\u6CA1\u6709\u9700\u8981\u6DFB\u52A0\u5230\u901A\u4FE1\u5F55\u7684\u8054\u7CFB\u4EBA");
}
}
},
"msg:LIST_SCROLL":function(iK)
{
var Fi=iK||{};
this.djA(Fi.sId,true);
},
"msg:LIST_ACTIVATE":function(iK)
{
var Fi=iK||{};
this.djA(Fi.sId);
},
"msg:INFO_DEL":function()
{
if(this.isShow())
{






var dkK=false,
duJ=false;
this.bct(function(TK)
{
var aB=A.parents('li[ui-type="column"]',TK)[0];
if(A.attr(aB,"data-type")=="domain")
{
dkK=true;
}
if(A.attr(aB,"data-type")=="qq")
{
duJ=true;
}
});
if(dkK||duJ)
{
A.showError("\u57DF\u540D\u90AE\u7BB1\u8054\u7CFB\u4EBA/QQ\u597D\u53CB\u4E0D\u652F\u6301\u5220\u9664");
}
else
{
this.bct(function(TK)
{
this.cJv(TK.value);
});




this.buo();
}
}

},
"msg:ADDEDIT_UNSELECT":function()
{
this.buo();
},
"msg:SEARCH_SHOW":function()
{
this.hide();
},
"msg:ADDEDIT_SHOW":function()
{
this.hide();
},
"msg:INFO_SHOW":function()
{
this.hide();
}
}
}
);



this.ctH=function(cP)
{
var cDr=A.finds('ul[ui-type="list"]',this.iG)[0],
cKo=A.finds('li[ui-type="column-header"]',cDr)[0];

if(cKo)
{
A.insertHTML(cKo,"afterEnd",cP);
}

else
{
A.insertHTML(cDr,"afterBegin",cP);
}

cDr=cKo=aN;
};



this.bct=function(bV)
{
var iJ=A.finds('input[ui-type="checkbox"]',this.iG);
for(var i=0,l=iJ.length;i<l;i++)
{
iJ[i].checked
&&bV.call(this,iJ[i]);
}
iJ=aN;
};



this.buo=function(aM)
{
this.bct(function(TK)
{
if(!aM||aM==TK.value)
TK.checked=false;
});

var bHW=A.finds('input[ui-type="checkall"]',this.iG);
for(var i=0;i<bHW.length;i++)
{
bHW[i].checked=false;
}



this.wa();
};



this.cJv=function(aM,aC)
{
this.data.del("item",{sId:aM,sType:this.getListType()});
};



this.wa=function()
{
var iJ=A.finds('input[ui-type="checkbox"]',this.iG),
nI=0,
aEx={
normal:0,
other:0,
domain:0,
qq:0
};
for(var i=0,l=iJ.length;i<l;i++)
{
var QS=A.parents('li[ui-type="column"]',iJ[i])[0];
if(iJ[i].checked)
{
nI++;
aEx[A.attr(QS,"data-type")]++;
!A.hasClass(QS,"B")
&&A.addClass(QS,"B");
}
else
{
A.hasClass(QS,"B")
&&A.rmClass(QS,"B");
}
QS=aN;
}
hB.msg("msg:LIST_MULTI",{
nSelectCnt:nI,
nQQCnt:aEx["qq"],
nDomainCnt:aEx["domain"],
nNormalCnt:aEx["normal"],
nOtherCnt:aEx["other"]
});
iJ=aN;
return nI;
};



this.djA=function(aM,dnt)
{
var aX=aM||"",
iJ=A.finds('li[ui-type="column"]',this.iG);
for(var i=0,l=iJ.length;i<l;i++)
{

if(aX==iJ[i].getAttribute("data-id"))
{
var Er=A.S("bar",window).clientHeight,



cN=iJ[i].offsetHeight,
cj=iJ[i].offsetTop,
LF=cj+cN,
aRg=A.bodyScroll(window,"scrollTop"),
bcj=A.bodyScroll(window,"clientHeight")+aRg;

!A.hasClass(iJ[i],"active")
&&A.addClass(iJ[i],"active");

if(cj<aRg+Er)
{
A.bodyScroll(window,"scrollTop",aRg-cN);
dnt
&&(this.bwS=aRg-cN);
}
else if(LF>bcj)
{
A.bodyScroll(window,"scrollTop",aRg+cN);
dnt
&&(this.bwS=aRg+cN);
}
}
else
{
A.hasClass(iJ[i],"active")
&&A.rmClass(iJ[i],"active");
}
}
};
















































this.NB=-1;
this.dqG=function(cO,dDJ)
{
var iJ=A.finds('li[ui-type="column"]',dDJ.parentNode),
cR=-1;
for(var i=0,l=iJ.length;i<l;i++)
{
if(iJ[i].getAttribute("data-id")==dDJ.getAttribute("data-id"))
{
cR=i;
break;
}
}

if(cO.shiftKey&&this.NB>-1&&cR>-1&&this.NB!=cR)
{
var eIR=A.finds('input[ui-type="checkbox"]',iJ[this.NB])[0],
eox=A.finds('input[ui-type="checkbox"]',iJ[cR])[0],
PZ=eIR.checked;

if(PZ==eox.checked)
{
for(var j=0,l=iJ.length;j<l;j++)
{
if(j>Math.min(this.NB,cR)&&j<Math.max(this.NB,cR))
{
A.finds('input[ui-type="checkbox"]',iJ[j])[0].checked=PZ;
}
}
this.wa();
}
}
this.NB=cR;
};
},"Base");
})(QMContactAdaptor);







(function(A,aN)
{
QMModuleMgr.create("Contact.Search",function(aG,hB)
{
this.init_=function(ay)
{
aG.init_.call(this,ay);
this.iG=ay.oContainer;
this.kr=ay.oParam;
};
this.action_=function(aL)
{
var ao=this;



if(!aL)
{











this.show();
hB.msg("msg:SEARCH_SHOW");
}
else
{
ao.render(ao.view.tmpl("list",A.extend({sType:"search",bLoading:true},aL)));


hB.msg("msg:SEARCH_SHOW",{bLoading:true});
ao.data.get("list",{sType:"search",sKeyword:aL.sKeyword},function(av)
{
if(av)
{
A.extend(ao.kr,{sKeyword:aL.sKeyword});

var aE=A.extend({},ao.kr,av);
ao.render(ao.view.tmpl("list",aE));
}
else
{
ao.render(ao.view.tmpl("list",{sType:"search",bError:true}));
}
hB.msg("msg:SEARCH_SHOW",av);
});
}

this.show();
this.wa();

};
this.destory_=function()
{
aG.destory_.call(this);
this.kr=this.gqs=this.iG=aN;
};
this.getListType=function()
{

return"search";
};

this.register(
aG.getDriven(),
{
click:
{
"search_back":
{
bPropagable:false,
fHandle:function(cO,au)
{

hB.msg("msg:APP_HOME");
}
}
},
msg:
{








"msg:SEARCH_SHOW":function()
{

},
"msg:LIST_SHOW":function()
{
this.hide();
}
}
}
);
},"Contact.List");
})(QMContactAdaptor);







(function(A,aN)
{
QMModuleMgr.create("Contact.Group",function(aG,hB)
{
this.init_=function(ay)
{
aG.init_.call(this,ay);
this.iG=ay.oContainer;
this.kr=ay.oParam;

this.dZF();


};
this.action_=function(aL)
{
aG.action_.call(this);

},
this.destory_=function()
{
aG.destory_.call(this);
this.kr=this.iG=aN;
};



this.show=function()
{
aG.show.call(this);
this.cqv();
};

this.register(
{
click:
{
"group_create":
{
bPropagable:false,
fHandle:function(cO,au)
{
hB.msg("msg:COM_GROUP_EDIT");
}
}
},
msg:
{
"data:GROUP_UPDATE":function(aXp)
{
var aSi=A.finds('span[ui-type="groupcnt"]',this.iG);
for(var i=0;i<aSi.length;i++)
{
var aX=A.attr(aSi[i],"data-id");


A.hasClass(aSi[i],"fading_out_in")
&&A.rmClass(aSi[i],"fading_out_in");

debug(aXp,2);
if(typeof(aXp[aX])!="undefined")
{
if(aSi[i].innerHTML!=aXp[aX])
{
A.addClass(aSi[i],"fading_out_in");
}

aSi[i].innerHTML=aXp[aX];

setTimeout(function(aw)
{
return function()
{
A.hasClass(aw,"fading_out_in")
&&A.rmClass(aw,"fading_out_in");
}
}(aSi[i]),1200);
}
}
},
"msg:APP_RESIZE":function(cO)
{
if(this.isShow())
{

this.iG.style.marginTop="0";
this.cqv();
}
},
"msg:APP_SCROLL":function(cO)
{
if(this.isShow())
{



this.cqv();
}
},
"msg:LIST_SHOW":function()
{
this.show();

A.hasClass(this.iG,"panel_groups_blur")
&&A.rmClass(this.iG,"panel_groups_blur");
},
"msg:SEARCH_SHOW":function()
{
this.show();

!A.hasClass(this.iG,"panel_groups_blur")
&&A.addClass(this.iG,"panel_groups_blur");
},
"msg:ADDEDIT_SHOW":function()
{
this.hide();
},
"msg:INFO_SHOW":function()
{
this.hide();
}
}
}
);
this.dZF=function()
{
var iJ=A.finds('span[ui-type="grouptitle"]',this.iG);
for(var i=0;i<iJ.length;i++)
{
iJ[i].innerHTML=A.subAsiiStr(A.htmlDecode(iJ[i].innerHTML),20,"...");
}
};
this.cqv=function()
{

var	cj=this.iG.offsetTop,


cN=this.iG.clientHeight,
LF=this.iG.scrollHeight,
aRg=A.bodyScroll(window,"scrollTop"),
bcj=A.bodyScroll(window,"clientHeight")+aRg,
dUN=A.S("list",window).style.display!="none",
eHz=A.S(dUN?"list":"search",window);


if(LF<bcj
&&eHz.offsetHeight>=LF)
{
if(!A.hasClass(this.iG,"panel_groups_fixed"))
{
A.addClass(this.iG,"panel_groups_fixed");

}
}
else
{
if(A.hasClass(this.iG,"panel_groups_fixed"))
{
A.rmClass(this.iG,"panel_groups_fixed");

}
}


if(A.hasClass(this.iG,"panel_groups_fixed"))
{

if(cN!=LF&&cN-LF<5)
{
this.iG.style.marginTop=(cN-LF)+"px";
}




}
else
{

this.iG.style.marginTop="0";
}
};
},"Base");
})(QMContactAdaptor);












(function(A,aN)
{
QMModuleMgr.create("Contact.Nav",function(aG,hB)
{
this.init_=function(ay)
{
aG.init_.call(this,ay);
this.iG=ay.oContainer;
this.kr=ay.oParam;


};
this.action_=function()
{
aG.action_.call(this);

hB.msg("msg:NAV_SHOW");
};
this.destory_=function()
{
aG.destory_.call(this);
this.kr=this.iG=aN;
};

this.register(
{
keydown:
{
"nav_keyword":
{
bPropagable:false,
fHandle:function(cO,au)
{
var bt=au.value;
if(cO.keyCode==13)
{
bt?
hB.cmd("Contact.Search",{sKeyword:bt}):
hB.cmd("Contact.List");

A.preventDefault(cO);
}
A.stopPropagation(cO);
}
}
},
click:
{
"nav_pre_back":
{
bPropagable:false,
fHandle:function(cO,au)
{






hB.cmd(this.MT?"Contact.Search":"Contact.List");

}
},
"nav_pre_compose":
{
bPropagable:false,
fHandle:function(cO,au)
{
this.data.get("item",{sType:this.MT?"search":"list",sId:A.attr(au,"data-id")},function(av)
{
var bq=[],
aMs=function(mB)
{
var bd=av.oName&&av.oName[0]&&av.oName[0].sVal||"";
return bd?['"',A.htmlDecode(bd),'"',' <',mB,'>'].join(""):mB;
};

if(av.oEmail)
{

if(av.oEmail.length>1)
{
for(var i=0;i<av.oEmail.length;i++)
{
bq.push({
sId:av.oEmail[i].sVal,
sItemValue:av.oEmail[i].sVal
});
}
hB.msg("msg:COM_COMM_MENU",{
oItems:bq,
oDom:au,
fItemClick:function(jV)
{
hB.msg("msg:COM_COMPOSE",{sDefAddrs:aMs(jV)});
}
});
}
else
{
hB.msg("msg:COM_COMPOSE",{sDefAddrs:aMs(av.oEmail[0].sVal)});
}
}
else
{
hB.msg("msg:COM_COMPOSE",{sDefAddrs:""});
}
});
}
},
"nav_pre_edit":
{
bPropagable:false,
fHandle:function(cO,au)
{
hB.cmd("Contact.AddEdit",{
sType:this.MT?"search":"",
sId:A.attr(au,"data-id")
});
}
},
"nav_pre_store":
{

bPropagable:false,
fHandle:function(cO,au)
{
hB.cmd("Contact.AddEdit",{
sType:this.MT?"search":"",
sId:A.attr(au,"data-id")
});
}
},
"nav_pre_del":
{
bPropagable:false,
fHandle:function(cO,au)
{
var ao=this;
A.confirmBox(
{
title:"\u5220\u9664\u786E\u8BA4",
msg:["\u60A8\u786E\u5B9A\u8981\u5220\u9664\u9009\u4E2D\u7684\u8054\u7CFB\u4EBA\u5417\uFF1F"].join(""),
width:450,
onreturn:function(kI)
{
if(kI)
{











ao.data.del("item",
{
sId:au.getAttribute("data-id"),
sType:ao.MT?"search":"list"
},
function()
{
hB.cmd(ao.MT?"Contact.Search":"Contact.List");
}
);
}
}
}
);
}
},
"nav_search":
{
bPropagable:false,
fHandle:function(cO,au)
{
var bt=A.S("keyword",window).value;
bt?
hB.cmd("Contact.Search",{sKeyword:bt}):
hB.cmd("Contact.List");
}
},
"nav_contact":
{
bPropagable:false,
fHandle:function(cO,au)
{
hB.msg("msg:LIST_ADD_GROUP_MEMBER",{sGroupId:"0"});
}
},
"nav_combine":
{
bPropagable:false,
fHandle:function(cO,au)
{
debug("\u624B\u5DE5\u5408\u5E76");



hB.msg("msg:LIST_COMBINE");
}
},
"nav_compose":
{
bPropagable:false,
fHandle:function(cO,au)
{

hB.wsp("msg:LIST_COMPOSE");
}
},
"nav_del":
{
bPropagable:false,
fHandle:function(cO,au)
{

A.confirmBox(
{
title:"\u5220\u9664\u786E\u8BA4",
msg:["\u60A8\u786E\u5B9A\u8981\u5220\u9664\u9009\u4E2D\u7684\u8054\u7CFB\u4EBA\u5417\uFF1F"].join(""),
width:450,
onreturn:function(kI)
{
if(kI)
{
hB.msg("msg:INFO_DEL");
}
}
}
);
}
},
"nav_group":
{
bPropagable:false,
fHandle:function(cO,au)
{
this.data.get("group",{sType:"normal"},function(ajM)
{
hB.msg("msg:COM_GROUP_LIST",{
oGroupList:ajM,
oDom:au,
bHasCreate:true,
fItemClick:function(sJ)
{






hB.msg("msg:LIST_ADD_GROUP_MEMBER",{sGroupId:sJ});

}
});
});
}
},
"nav_unselect":
{
bPropagable:false,
fHandle:function(cO,au)
{
hB.msg("msg:ADDEDIT_UNSELECT");
this.RF("list");
}
},
"nav_create":
{
bPropagable:false,
fHandle:function(cO,au)
{
hB.msg("msg:ADDEDIT_ADD",{sAction:"add",sGroupId:this.kr.sViewGroupId||""});
}
},
"nav_save":
{
bPropagable:false,
fHandle:function(cO,au)
{
hB.msg("msg:ADDEDIT_SAVE");
}
},
"nav_cancel":
{
bPropagable:false,
fHandle:function(cO,au)
{
hB.msg("msg:ADDEDIT_CANCEL",au.getAttribute("data-id"));

A.stopPropagation(cO);
}
},










"nav_sync":
{
bPropagable:false,
fHandle:function(cO,au)
{
hB.msg("msg:COM_SYNC");
}
},
"nav_tool":
{
bPropagable:false,
fHandle:function(cO,au)
{
var ao=this,
cS=140;

new A.QMMenu({
oEmbedWin:window,
oEmbedToDom:au.parentNode,
sId:"import",
nX:au.offsetLeft,
nY:au.offsetTop+au.offsetHeight,
nWidth:cS,
oItems:[
{
sId:"COM_IMPORT_QQ",
sItemValue:'<span class="comm_menu">\u5BFC\u5165QQ\u90AE\u7BB1\u8054\u7CFB\u4EBA</span>'
},
{
sId:"COM_IMPORT_MAIL",
sItemValue:'<span class="comm_menu">\u5BFC\u5165\u5176\u4ED6\u90AE\u7BB1\u8054\u7CFB\u4EBA</span>'
},
{
sId:"COM_IMPORT_FILE",
sItemValue:'<span class="comm_menu">\u5BFC\u5165\u8054\u7CFB\u4EBA\u6587\u4EF6</span>'
},
{
sId:"COM_EXPORT",
sItemValue:'<span class="comm_menu">\u5BFC\u51FA\u8054\u7CFB\u4EBA</span>'
},




{
bDisSelect:true,
nHeight:6,
sItemValue:'<div class="menu_item_line"></div>'
},
{
sId:"COM_COMBINE",
sItemValue:'<span class="comm_menu">\u5408\u5E76\u8054\u7CFB\u4EBA</span>'
}
],
nItemHeight:23,
onitemclick:function(aM)
{

ao.data.get("group",{sType:"normal"},function(ajM)
{
hB.msg("msg:"+aM,{
oGroupList:ajM,
sGroupId:ao.kr.sViewGroupId
});
});
}
});
}
}
},
msg:
{
"msg:ADDEDIT_DISABLE_SAVE":function(JY)
{
var awD=A.finds('a[ui-type="save"]',this.iG)[0];

if(!awD)
{
return;
}

if(JY)
{
!A.hasClass(awD,"btn_blue_disabled")
&&A.addClass(awD,"btn_blue_disabled");
awD.removeAttribute("ck");
}
else
{
A.hasClass(awD,"btn_blue_disabled")
&&A.rmClass(awD,"btn_blue_disabled");
awD.setAttribute("ck","nav_save");
}
},
"msg:ADDEDIT_SHOW":function(iK)
{
this.RF("detail",iK);
},
"msg:LIST_SHOW":function()
{
this.RF("list");

this.MT=false;
},
"msg:SEARCH_SHOW":function()
{
this.MT=true;
},
"msg:LIST_MULTI":function(iK)
{
this.RF(iK.nSelectCnt>0?"multi":"list",iK);
},
"msg:INFO_SHOW":function(iK)
{
this.RF("preview",iK);
}
}
}
);

this.RF=function(aC,av)
{


var aE=av||{};
this.render(this.view.tmpl("nav",{
sType:aC,

sId:aE.sId,
bIsChanged:aE.sItemType=="normal"&&aE.sOriginalType=="other",
sItemType:aE.sItemType,
sOriginalType:aE.sOriginalType,
nMailCnt:aE.oEmail&&aE.oEmail.length||0,

nSelectCnt:aE.nSelectCnt,
nQQCnt:aE.nQQCnt,
nDomainCnt:aE.nDomainCnt,
nOtherCnt:aE.nOtherCnt,
nNormalCnt:aE.nNormalCnt,

sViewType:this.kr.sViewType,
nEditType:this.kr.nEditType,
bIsSearch:this.MT
}));

aC=="list"
&&A.placeholder([A.S("keyword",window)]);





};
},"Base");
})(QMContactAdaptor);







(function(A,aN)
{
QMModuleMgr.create("Contact.Info",function(aG,hB)
{
this.init_=function(ay)
{
aG.init_.call(this,ay);
this.iG=ay.oContainer;
this.kr=ay.oParam;


};
this.action_=function(aL)
{
var ao=this,
bJ=aL||{},
afD=function(av)
{
ao.RF("detail",av);
hB.msg("msg:INFO_SHOW",av);

hB.msg(bJ.bIsCombine?"msg:LIST_SCROLL":"msg:LIST_ACTIVATE",av);


A.bodyScroll(window,"scrollTop",0);
};


if(bJ.bIsDomainDetail&&!this.isShow())
{
return;
}
aG.action_.call(this);

if(bJ.sId)
{
if(bJ.bIsPreview)
{
this.data.get("item",bJ,function(av)
{
afD(av);
});
}
else
{
afD(bJ);
}
}
};
this.destory_=function()
{
aG.destory_.call(this);
this.kr=this.iG=aN;
};

this.register(
{
click:
{
"info_close":
{
bPropagable:false,
fHandle:function(cO,au)
{
this.hide();
hB.msg("msg:LIST_ACTIVATE");
}
},























"info_compose":
{
bPropagable:false,
fHandle:function(cO,au)
{
var aMs=function(aR,mB)
{
return aR?['"',A.htmlDecode(aR),'"',' <',mB,'>'].join(""):mB;
};
hB.msg("msg:COM_COMPOSE",{sDefAddrs:aMs(A.attr(au,"data-name"),au.innerHTML)});
}
},
"info_checkmail":
{
bPropagable:false,
fHandle:function(cO,au)
{
A.preventDefault(cO);
debug(au.getAttribute("data-id"))
hB.msg("msg:COM_MAIL_HISTORY",A.extend(
{
sAddrId:au.getAttribute("data-id"),
sEmail:au.getAttribute("data-email"),
sName:au.getAttribute("data-name")
},
this.kr
));
}
}
},
msg:
{
"data:ITEM_UPDATE":function(bw)
{
var aB=A.finds('div[ui-type="info_inner"]',this.iG)[0];

if(aB)
{
var bk=aB.getAttribute("data-type"),
aX=aB.getAttribute("data-id");

if(bk=="detail"&&bw.sId==aX)
{
this.RF("detail",bw);
}
}
},



















"msg:INFO_HIDE":function(iK)
{
this.hide();
hB.msg("msg:LIST_ACTIVATE");
},
"msg:INFO_DEL":function(iK)
{
this.hide();
hB.msg("msg:LIST_ACTIVATE");
},
"msg:LIST_MULTI":function(Mx)
{
Mx
&&this.hide();
},
"msg:ADDEDIT_SHOW":function()
{
this.hide();
hB.msg("msg:LIST_ACTIVATE");
},
"msg:SEARCH_SHOW":function()
{
this.hide();
this.MT=true;
},
"msg:LIST_SHOW":function()
{
this.hide();
this.MT=false;
}
}
}
);

this.RF=function(aC,bw)
{
this.show();

if(aC=="detail")
{
this.render(this.view.tmpl("info",A.extend(
{
sType:aC


},
bw
)));
}
else if(aC=="search")
{
this.render(this.view.tmpl("info",A.extend({sType:aC},bw)));
}
else if(aC=="list")
{
this.render(this.view.tmpl("info",A.extend(
{
sType:aC,
sViewGroupName:this.kr.sViewGroupName
},
bw
)));
}
};


},"Base");
})(QMContactAdaptor);


(function(A,aN)
{
QMModuleMgr.create("Contact.Bar",function(aG,hB)
{
this.init_=function(ay)
{
aG.init_.call(this,ay);
this.iG=ay.oContainer;
this.kr=ay.oParam;


};
this.action_=function(aL)
{
aG.action_.call(this);
this.render(this.view.tmpl("bar"));

hB
.use("Contact.Nav",
{
oContainer:A.finds("div[ui-type='nav']",this.iG)[0],
oDataCenter:this.data,
oViewCenter:this.view,
oParam:this.kr
})
.cmd("Contact.Nav");
};
this.destory_=function()
{
aG.destory_.call(this);
this.kr=this.iG=aN;
};


},"Base");
})(QMContactAdaptor);






(function(A,aN)
{
QMModuleMgr.create("Contact.Components",function(aG,hB)
{
var cEm={
bDisSelect:true,
nHeight:6,
sItemValue:'<div class="menu_item_line"></div>'
};


this.init_=function(ay)
{
aG.init_.call(this,ay);

};


this.isShow=function()
{
return true;
};

this.dBQ=function(jV)
{
var dB=new Date(),
eF=A.trim(jV).replace(/\D/g,""),
aE={};

if(eF.length==8&&+eF.substr(0,4)>1970&&+eF.substr(0,4)<2050)
{
dB.setFullYear(+eF.substr(0,4));
dB.setMonth(+eF.substr(4,2)-1);
dB.setDate(+eF.substr(6,2));
}
else if(eF.length==4)
{
dB.setMonth(+eF.substr(0,2)-1);
dB.setDate(+eF.substr(2,2));
}

return{
nYear:dB.getFullYear(),
nMonth:dB.getMonth()+1,
nSelYear:(eF.length==8&&eF)?dB.getFullYear():"",
nSelMonth:((eF.length==4||eF.length==8)&&eF)?(dB.getMonth()+1):"",
nSelDate:((eF.length==4||eF.length==8)&&eF)?dB.getDate():""
};
};

this.register(
{
msg:
{
"msg:APP_HOME":function(iK)
{
var ecR=iK||{};
location.href=A.urlReplacer(
A.extend({
r:Math.random()
},ecR.oUrlParam),
A.T("/cgi-bin/laddr_list?sid=$sid$&operate=view&t=contact&view=normal").replace({
sid:A.getSid()
}));
},
"msg:COM_CALENDAR":function(iK)
{
var ao=this,
ena=iK.sFormat||"MM-DD",
bYB=function()
{
var bde=A.S("qmcontact_cal",window);
if(bde)
{
bde.onblur=bde.onmousedown=bde.onmouseover=bde.onmouseout=null;
A.removeSelf(bde);
}
bde=aN;
},
cZD=function(aL,ny)
{
A.useCom("QMCalCom",function(erD)
{
var cxB=new Date(),

bJ=aL||{};

var VR=erD.getMonthDays(bJ.nYear,bJ.nMonth),
cXC=7,
dgu=[],
i=0;

while(i<VR.length)
{
dgu.push(VR.slice(i,i+cXC));
i+=cXC;
}


ny(
A.extend(
{
nCurrYear:cxB.getFullYear(),
nCurrMonth:cxB.getMonth()+1,
nCurrDate:cxB.getDate(),
oWeeks:dgu
},
bJ
)
);
});
},
azR=function(av)
{
bYB();

A.insertHTML(iK.oDom,"afterEnd",QMContactView.tmpl("calendar",av));
iK.oDom.onblur=function()
{

if(!ao.cDl)
{
bYB();
}
};
A.S("qmcontact_cal",window).onblur=function()
{
if(!ao.cDl)
{
bYB();
}
};
A.S("qmcontact_cal",window).onmouseover=function()
{
ao.cDl=1;
this.focus();
};
A.S("qmcontact_cal",window).onmouseout=function()
{
ao.cDl=0;

};
A.S("qmcontact_cal",window).onmousedown=function(cO)
{
var oy=cO||event,
il=A.getEventTarget(oy),
jx=il.getAttribute("opt"),
XR=function(jV)
{
var eF=jV+"";
return eF.length>1?eF:[0,eF].join("")
};
if((il.tagName=="TD"||il.tagName=="A")&&jx)
{
switch(jx)
{
case"choose":
var bNf=il.getAttribute("data-year"),
bMh=il.getAttribute("data-month"),
amy=il.getAttribute("data-day");
iK.oDom.value=ena
.replace("YYYY",bNf)
.replace("MM",XR(bMh))
.replace("DD",XR(amy));
bYB();
iK.oDom.style.color="#000";
break;
case"slide":
var ekp=+il.getAttribute("data-range"),
uz=av.nYear,
Em=av.nMonth+ekp;

if(Em>12)
{
uz++;
Em-=12;
}
else if(Em<1)
{
uz--;
Em+=12;
}

cZD(A.extend(ao.dBQ(iK.sVal),{nYear:uz,nMonth:Em}),function(dSX)
{
azR(dSX);
});
break;
}
}
};



};


cZD(this.dBQ(iK.sVal),function(av)
{
azR(av);
});
},
"msg:COM_MAIL_HISTORY":function(iK)
{
var aE=iK||{};

debug(aE,2);
location.href=A.TE([
"/cgi-bin/mail_list?sid=$sid$&s=searchcontact&matchtype=include&folderid=all",
"&view=$sViewType$&page=0&grpid=$sViewGroupId$&backaddrlist=",
"&version=2&AddrID=$sAddrId$&sender=$sEmail$&receiver=$sEmail$&name=$@$eval getTop().encodeURI($sName$)$@$"
]).replace(A.extend(
{
sid:A.getSid()
},
aE
));
},
"msg:COM_COMPOSE":function(iK)
{
var Fi=iK||{},
eH=Fi.sDefAddrs||"";
A.openComposeDlg("normal",{
sDefAddrs:eH,
bUinEncrypt:true,
bAddrEdit:true,
nWidth:490,
sDefSubject:""
});
},
"msg:COM_COMM_MENU":function(iK)
{
new(A.QMMenu)({
oEmbedWin:window,
oEmbedToDom:iK.oDom.parentNode,
sId:"contact_comm_list",
nX:iK.oDom.offsetLeft+1,
nY:iK.oDom.offsetTop+iK.oDom.offsetHeight,
nWidth:iK.nWidth||194,
oItems:iK.oItems,
nItemHeight:23,
onitemclick:function(sJ)
{
iK.fItemClick
&&iK.fItemClick(sJ);
}
});
},
"msg:COM_GROUP_LIST":function(iK)
{
var bq=[];
if(iK.oGroupList.length)
{
for(var i=0;i<iK.oGroupList.length;i++)
{
bq.push({
sId:iK.oGroupList[i].sId,
sItemValue:iK.oGroupList[i].sName
});
}
}
else
{
bq.push({
bDisSelect:true,
sItemValue:"\u65E0\u8054\u7CFB\u4EBA\u7EC4"
});
}

if(iK.bHasCreate)
{
bq.push(cEm);
bq.push({
sId:"create",
sItemValue:"\u65B0\u5EFA\u7EC4"
});
}

new(A.QMMenu)({
oEmbedWin:window,
oEmbedToDom:iK.oDom.parentNode,
sId:"contact_group_list",
nX:iK.oDom.offsetLeft+1,

nY:iK.oDom.offsetTop+iK.oDom.offsetHeight,
nWidth:194,
oItems:bq,
nItemHeight:23,
onitemclick:function(sJ)
{
iK.fItemClick
&&iK.fItemClick(sJ);
}
});
},
"msg:COM_VIEWTYPE_LIST":function(iK)
{
var ao=this,
fb=iK.oGroup,
bor={},
bq=[{
sId:"",


bDisSelect:false,
sItemValue:'<span class="groupmenu_item">\u8054\u7CFB\u4EBA</span>'
}];

for(var bd in fb)
{
if(bd=="oNormal")
{
bq.push(cEm);
bq.push({
bDisSelect:true,
sItemValue:[
'<a ck="list_create_group" href="javascript:;" class="btn_group_add btn_gray">',
'<em class="ico_column_add"></em>',
'</a>',
'<span class="groupmenu_title">\u8054\u7CFB\u4EBA\u5206\u7EC4</span>'
].join("")
});
}
else
{
bq.push(cEm);
bq.push({
bDisSelect:true,
sItemValue:["<span class='groupmenu_title'>",bd=="oDomain"?"\u57DF\u540D\u90AE\u7BB1":"QQ\u597D\u53CB","</span>"].join("")
});
}

if(fb[bd].length)
{
for(var i=0;i<fb[bd].length;i++)
{
bq.push({
sId:fb[bd][i].sId,


sItemValue:["<span class='groupmenu_item'>",fb[bd][i].sName,"</span>"].join("")
});

bor[fb[bd][i].sId]=fb[bd][i];
}
}
else
{
bq.push({
bDisSelect:true,
sItemValue:"<span class='groupmenu_item'>\u65E0</span>"
});
}
}

new(A.QMMenu)({
oEmbedWin:window,
oEmbedToDom:iK.oDom.parentNode,
sId:"contact_viewtype_list",
nX:iK.oPos.x+1,
nY:iK.oPos.y,
sStyle:"margin-left:1px;",
nWidth:194,
oItems:bq,
nItemHeight:23,
onshow:function()
{
A.addClass(iK.oDom,"btn_gray_active");
},
onclose:function()
{
A.rmClass(iK.oDom,"btn_gray_active");
},
onitemclick:function(sJ)
{




location.href=A.urlReplacer({
view:sJ?bor[sJ].sSubType:"normal",
groupid:sJ
});
}
});
},
"msg:COM_GROUP_DEL":function(sJ)
{
var deB=0;
A.confirmBox(
{
sId:"delGroupConfirm",
msg:[
'<div class="dialog_f_t">\u60A8\u786E\u5B9A\u8981\u5220\u9664\u6B64\u7EC4\u5417\uFF1F</div>',
'<div class="dialog_f_d"><input type="checkbox" id="alsoDel" class="cb" />\u540C\u65F6\u5220\u9664\u5206\u7EC4\u4E2D\u7684\u8054\u7CFB\u4EBA</div>'
].join(""),
width:450,
onshow:function()
{
deB=A.QMDialog("GrpDetailEdit").option("nZIndex");
A.QMDialog("GrpDetailEdit").option("nZIndex",95);
},
onreturn:function(kI)
{
if(kI)
{
A.QMAjax.send(A.T("/cgi-bin/laddr_del?sid=$sid$&operate=delgroup&GrpID=$groupid$&delmem=$delmem$&t=contact.json&ef=js").replace(
{
sid:A.getSid(),
delmem:this.S("alsoDel").checked?1:0,
groupid:sJ
}),
{
onload:function(bh,bO)
{
if(bh)
{
var aE=A.evalValue(bO);
if(typeof(aE.errcode)=="undefined")
{
A.showInfo("\u6210\u529F\u5220\u9664\u5206\u7EC4");
hB.msg("msg:APP_HOME");
return;
}
else if(aE.errmsg)
{
A.showError(aE.errmsg);
return;
}
}
A.showError("\u5206\u7EC4\u5220\u9664\u5931\u8D25");
}
});

setTimeout(function(){
A.QMDialog("GrpDetailEdit")
&&A.QMDialog("GrpDetailEdit").close();

A.QMDialog("delGroupConfirm")
&&A.QMDialog("delGroupConfirm").close();
},10);
}
else
{
A.QMDialog("GrpDetailEdit").option("nZIndex",deB);
return;
}
}
});
},
"msg:COM_GROUP_EDIT":function(iK)
{
var aE=iK||{},
tL=aE.sGroupId,
ij=aE.oAddrs||[],
jm=tL=="2100000001"?"\u7BA1\u7406\u91CD\u8981\u8054\u7CFB\u4EBA":"\u7BA1\u7406\u7EC4",
aY=A.TE([
"/cgi-bin/laddr_grp_detail?sid=$sid$&version=2&t=contact_select&from=menu&grpid=$grouid$",
'$@$for($addrs$)$@$',



'$@$endfor$@$'
]).replace({
sid:A.getSid(),
grouid:tL,
addrs:ij
});

new(A.QMDialog)(
{
sId:"GrpDetailEdit",
sTitle:!tL?"\u65B0\u5EFA\u7EC4":jm,
sUrl:aY,
bAnimation:false,
nWidth:516,
nHeight:532
});
},
"msg:COM_IMPORT_QQ":function(iK)
{
hB.msg("msg:COM_IMPORT",A.extend({sType:"importQQ"},iK));
},
"msg:COM_IMPORT_MAIL":function(iK)
{
hB.msg("msg:COM_IMPORT",A.extend({sType:"importMailBox"},iK));
},
"msg:COM_IMPORT_FILE":function(iK)
{
hB.msg("msg:COM_IMPORT",A.extend({sType:"importFile"},iK));
},
"msg:COM_IMPORT":function(iK)
{
var aE=iK||{},
ao=this,
Dg=aE.oGroupList||[];

A.useCom("QMImport",function(cCi)
{
cCi[aE.sType](iK);
});
},
"msg:COM_EXPORT":function(iK)
{




A.useCom("QMImport",function(cCi)
{
cCi.exportFile(iK);
});
},
"msg:COM_SYNC":function()
{
new(A.QMDialog)({
sId:"sync2mobile_linkman",
sTitle:"\u5728\u624B\u673A\u4E2D\u540C\u6B65\u8054\u7CFB\u4EBA",
sUrl:A.T("/cgi-bin/laddr_opr?sid=$sid$&action=liststatus&t=sync2mobile&s=linkman").replace(
{
sid:A.getSid()
}),
bAnimation:false,
nWidth:746,
nHeight:532
});
},
"msg:COM_COMBINE":function()
{
new(A.QMDialog)(
{
sId:"combine_mailbox_dlg",
sTitle:"\u5408\u5E76\u8054\u7CFB\u4EBA",
sUrl:A.T("/cgi-bin/laddr_combine?sid=$sid$&method=advise&r=$r$&t=addr_combine_enter&version=2&type=$type$").replace(
{
type:"all",
sid:A.getSid(),
r:Math.random()
}),
bAnimation:false,
nWidth:467,
nHeight:480
});
},
"msg:COM_FACE_UPLOAD":function(au)
{
A.useCom("QMAddrFace",function(efh)
{
var eia=A.attr(au,"data-empty"),
Rf=eia=="1"?"":A.attr(au,"src"),
AL=A.attr(au,"data-id"),
ecK=new efh(
{
afCallback:function(adQ)
{


A.attr(au,"src",adQ);
if(adQ=="/zh_CN/htmledition/images/rss/male.gif")
{
A.attr(au,"data-empty","1");
}
else
{
A.attr(au,"data-empty","0");
}
},
imgUrl:Rf,
id:AL
});
ecK.initUpload();
});
}
}
}
);


},"Base");
})(QMContactAdaptor);




MH.mgr=QMModuleMgr;

MH.view=QMContactView;

MH.data=QMContactData;


MH.load=function(rn)
{
A.useCom(rn);
};

MH.msg=function()
{
this.mgr.msg.apply(this.mgr,arguments)
};

MH.route=function(gwP,aL)
{
var brm=gwP||"list",
bTB=aL||{},
aDk=bTB.sDialogId;

this.eTs();


if(brm!="edit_only")
{
this.mgr.use(
"Contact.List",
{
oContainer:A.S("list",window),
oViewCenter:this.view,
oDataCenter:this.data,
oParam:bTB
}
).use(
"Contact.Search",
{
oContainer:A.S("search",window),
oViewCenter:this.view,
oDataCenter:this.data,
oParam:bTB
}
).use(
"Contact.Group",
{
oContainer:A.S("group",window),
oViewCenter:this.view,
oDataCenter:this.data
}
);
}

if(1||!aDk)
{
this.mgr.use(
"Contact.Bar",
{
oContainer:A.S("bar",window),
oViewCenter:this.view,
oDataCenter:this.data,
oParam:bTB
}
);
}


this.mgr.use(
"Contact.AddEdit",
{
oContainer:A.S("con",window),
oViewCenter:this.view,
oDataCenter:this.data,
oParam:bTB
}
).use(
"Contact.Info",
{
oContainer:A.S("info",window),
oDataCenter:this.data,
oViewCenter:this.view,
oParam:bTB
}
).use("Contact.Components");

switch(brm)
{
case"info":
this.mgr.cmd("Contact.Bar");
this.mgr.cmd("Contact.Info",{sId:bTB.sId,bIsPreview:true});
break;
case"edit_only":
case"edit":



this.mgr.cmd("Contact.Bar");
this.mgr.cmd("Contact.AddEdit",{sId:bTB.sId});
break;
case"search":
this.mgr.cmd("Contact.Bar");
this.mgr.cmd("Contact.Search",bTB);
this.data.get("level",{},function(){});
break;
case"list":
this.mgr.cmd("Contact.Bar");
this.mgr.cmd("Contact.List");
this.data.get("level",{},function(){});
break;
};
};

MH.eTs=function()
{
if(typeof(onpageresize)!="undefined")
{
onpageresize();
}
else
{

if(document.body.clientWidth>1003)
{
!A.hasClass(document.body,"widescreen")
&&A.addClass(document.body,"widescreen");
}
else
{
A.hasClass(document.body,"widescreen")
&&A.rmClass(document.body,"widescreen");
}
}
};



A.addEvent(document,"keydown",function(cO)
{
var ey=cO.keyCode;


if(cO.ctrlKey&&ey==65)
{
MH.msg("msg:APP_KEY/CTRL+A",cO);
}
else if(ey==27)
{
MH.msg("msg:APP_KEY/ESC",cO);
}
else if(ey==38||ey==40)
{
MH.msg(ey==38?"msg:APP_KEY/UP":"msg:APP_KEY/DOWN",cO);
}
});
A.addEvent(document,"click",function(cO)
{
MH.msg("msg:APP_CLICK",A.getEventTarget(cO));
});

A.addEvent(window,"scroll",function(cO)
{
clearTimeout(window["_contact_scroll_timer_"]);
window["_contact_scroll_timer_"]=setTimeout(function()
{
MH.msg("msg:APP_SCROLL");
});
});

A.addEvent(window,"resize",function(cO)
{
clearTimeout(window["_contact_resize_timer_"]);
window["_contact_resize_timer_"]=setTimeout(function()
{
MH.eTs();
MH.msg("msg:APP_RESIZE");
});
});

window.onunload=function()
{
MH.mgr.clear();

MH.mgr=MH.view=MH.data=aN;
MH=aN;
};

return MH;
})(QMContactAdaptor);

