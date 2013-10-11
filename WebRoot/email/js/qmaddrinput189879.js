var QMAddrParser=getTop().QMAddrParser;




var QMAddrDomainCheck=
{

fvW:";qzone.qq.com;qq.com;vip.qq.com;",

dol:{},
eWn:{},

btf:null,







cvc:function(av)
{
var ao=this,
Ox=ao.dol;
if(av.checkdomain)
{
for(var aJO=av.checkdomain,aV=aJO.length-1;aV>=0;aV--)
{
if(aJO[aV])
{
var hg=aJO[aV][0];
Ox[hg]=Ox[hg]||{};
Ox[hg].tips=aJO[aV][1].split(';');
}
}
}
if(av.domainlimit)
{
for(var awm=av.domainlimit,aV=awm.length-1;aV>=0;aV--)
{
if(awm[aV])
{
var hg=awm[aV][0];
Ox[hg]=Ox[hg]||{};


Ox[hg].attlmt=parseInt(awm[aV][1]);


Ox[hg].dmn=awm[aV][2]=='1';
}
}
}

if(av.prohibit)
{
ao.eWn[av.prohibit[0]]=av.prohibit[1];
}
},












createChecker:function(dfg,eY,ar)
{
return new this.dIL(dfg,eY,ar||{});
},






permit:function(KX)
{
return!this.eWn[KX.sort().join(';')];
},


bEY:function(vX)
{
var ao=this,
eD=[];
for(var aV=vX.length-1;aV>=0;aV--)
{
var aE=ao.dol[vX[aV]];
aE&&aE.tips&&eD.push({sDom:vX[aV],oTips:aE.tips});
}
return eD;
},





getAttachLimit:function(vX)
{
var ao=this,
hg,
aCT=50*1024*1024,
baJ=[],
bcx=[];
for(var aV=vX.length-1;aV>=0;aV--)
{
var aE=ao.dol[vX[aV]];
if(aE)
{
if(!aE.attlmt)
{
baJ.push(vX[aV]);
}
else if(aE.attlmt<aCT)
{
hg=vX[aV];
aCT=aE.attlmt;
}
}
else if(ao.fvW.indexOf(';'+vX[aV]+';')<0)
{
bcx.push(vX[aV]);
}
}
return{
sDom:hg,
nLim:(bcx.length==vX.length?-1:aCT),
oUnknown:baJ,
oNoCheck:bcx
};
},





getExDomain:function(vX)
{
var ao=this,
aO=[];

for(var aV=vX.length-1;aV>=0;aV--)
{
var aE=ao.dol[vX[aV]];
if(aE&&!aE.dmn)
{
aO.push(vX[aV]);
}
}
return aO;
},





azX:function(aHH)
{
var ao=this,
ahk={},
bwL={},
Mv=[],
ajH=[],
fRJ=ao.fvW;

getTop().E(QMAddrParser.parseAddr(aHH),function(Ml)
{
Ml.valid&&(ahk[Ml.addr.split("@").pop()]=1)&&(bwL[Ml.addr]=1);
}
);
for(var hg in ahk)
{
if(fRJ.indexOf(";"+hg+";")==-1)
{
ajH.push(hg);
}
}
for(var gk in bwL)
{
Mv.push(gk);
}
return[ajH,Mv];
},










check:function(aHH,eY,bS)
{

var ao=this,
aq=getTop(),
hZ=ao.azX(aHH),
ajH=[],
bBI="";

for(var FT=hZ[0],cQ=FT.length,aV=0;aV<cQ;aV++)
{
if(!ao.dol[FT[aV]])
{
ajH.push(FT[aV]);
}
}

if(eY&4&&hZ[1].length>5)
{
bBI=hZ[1].sort().join(";");
}
else
{
eY&=59;
}

if(ajH.length==0)
{
eY&=60;
}






if(eY)
{
if(ao.btf)
{
clearTimeout(ao.btf);
}

ao.btf=setTimeout(function()
{
aq.QMAjax.send("/cgi-bin/laddr_domain_check",{

method:"POST",
content:
aq.T('sid=$sid$&addrs=$addrs$&addrlist=$list$&acttype=$type$&t=laddr_domain_check&addrfilt=$addrfilt$').replace(
{
sid:aq.getSid(),
type:eY&3,
list:encodeURI(bBI),
addrfilt:encodeURI(aHH),
addrs:encodeURI("a@"+ajH.join(";a@"))
}
),
onload:function(bh,bO)
{
if(bh&&bO.indexOf('success:true')>0)
{
ao.cvc(eval(bO));
aq.callBack.call(ao,bS,[{
bCksp:ao.permit(hZ[1]),
oCklm:ao.getAttachLimit(hZ[0]),
oCkdm:ao.bEY(hZ[0])
}]);
}
}
});
},200);
}
else
{

aq.callBack.call(ao,bS,[{
bCksp:ao.permit(hZ[1]),
oCklm:ao.getAttachLimit(hZ[0]),
oCkdm:ao.bEY(hZ[0])
}]);
}
return ao;
}

};

QMAddrDomainCheck.dIL=function(dfg,eY,ar)
{
var aq=getTop(),
ao=this,
bAV=[];
ao.zZ=QMAddrDomainCheck.dIL.cD;
ao.OX=eY;


var Nz=dfg.join?dfg:[dfg];
aq.E(Nz,function(mI,dT)
{
var bi,
aXu=mI.getContainer
?mI.getContainer()
:mI;
aXu.parentNode.insertBefore(
bi=aXu.ownerDocument.createElement("div"),
aXu.nextSibling);
aq.show(bi,false);
aq.addEvent(bi,"click",function(ap)
{
return ao.cJl(ap,dT);
}
);
bAV.push(bi);
}
);
ao.bwV=new Array(Nz.length);
ao.avy=Nz;
ao.ckt=bAV;

if(ar.oPermit)
{
aXu=ar.oPermit;



aXu.appendChild(bi=aXu.ownerDocument.createElement("div"));
aq.show(ao.csr=bi,false);
}
};

QMAddrDomainCheck.dIL.prototype=
{



check:function()
{
var ao=this,
kt=ao.OX,
pZ,
Nz=ao.avy,
ih=[];
for(var aV=Nz.length-1;aV>=0;aV--)
{
pZ=Nz[aV];
if(!(pZ.isDisabled&&pZ.isDisabled()))
{
ih.push(pZ.get?pZ.get(';'):pZ.value);
}
}


QMAddrDomainCheck.check(ih.join(';'),kt,function(bf)
{
if(kt&4)
{
ao.gl(ao.csr,bf.bCksp?[]:[1],4);
}
if(kt&1)
{
ao.brY();
}
}
);
},


Wn:function()
{

var pZ,
Nz=this.avy,
FT=[];
for(var aV=Nz.length-1;aV>=0;aV--)
{
pZ=Nz[aV];
if(!(pZ.isDisabled&&pZ.isDisabled()))
{
var hF=pZ.get('json');
for(var iA=hF.length-1;iA>=0;iA--)
{
FT.push(hF[iA].addr.replace(/.+@/,''));
}
}
}
return FT;
},





getAttachLimit:function()
{
return QMAddrDomainCheck.getAttachLimit(this.Wn());
},

getExDomain:function()
{
return QMAddrDomainCheck.getExDomain(this.Wn());
},




brY:function()
{
var ao=this,
Nz=ao.avy,
bi=ao.ckt;
getTop().E(ao.avy,function(mI,dT)
{
if(mI.isDisabled&&mI.isDisabled())
{
return;
}
var ads=mI.get?mI.get(';'):mI.value;
QMAddrDomainCheck.check(ads,1,function(bf){
var aXW=bf.oCkdm;
ao.bwV[dT]=aXW;
mI.setDomainError
&&mI.setDomainError(aXW);
ao.gl(bi[dT],aXW,1);
});
}
);
},

gl:function(gn,bzE,eY)
{
if(!gn)
{
return;
}
var ao=this,
aq=getTop(),
bLy=bzE.length,
bnY=aq.qmAnimation,
blo=bnY.getActionType(gn)=="expand"&&gn.style.display=='';
if(bLy>0)
{
var hF={errors:[],type:eY},
cqF=hF.errors;
if(eY&1)
{
for(var i=0;i<bLy;i++)
{
var avG=bzE[i],
bCP={
domain:avG.sDom,
items:[]
};
aq.E(avG.oTips,function(SA)
{
bCP.items.push({data:SA});
}
);
cqF.push(bCP);
}
}
gn.innerHTML=ao.zZ.replace(hF);
if(!blo)
{
bnY.expand(gn,{type:"break"});
}
if(eY&4)
{
getTop().requestShowTip("sendtimepadding","75",window);
}
}
else if(blo)
{
bnY.fold(gn,{type:"break"});
}
},

cJl:function(ap,dT)
{
var aq=getTop(),
ao=this,
bi=ao.ckt[dT],
bC=ao.avy[dT],
aKI=ao.bwV[dT],
aT=aq.getEventTarget(ap);
if(aT.name)
{
var aYu=aT.parentNode.getAttribute("domain"),
bfm=aT.name;

if(bC.updateDomain)
{
bC.updateDomain(aYu,bfm);
}
else
{
var aO=[],
cz=aq.TE('$@$if($nick$)$@$"$nick$"<$@$endif$@$$addr$$@$if($nick$)$@$>$@$endif$@$');
aq.E(QMAddrParser.parseAddr(bC.value),function(Ml)
{
var bwm=Ml.addr.split("@");
if(bwm.pop()==aYu)
{
Ml.addr=[bwm[0],bfm].join("@");
}
Ml.nick=getTop().encodeNick(Ml.nick);
aO.push(cz.replace(Ml));
}
);
bC.value=aO.join(";");
}

for(var i=0,aK=aKI.length;i<aK;i++)
{
if(aKI[i].sDom==aYu)
{
aKI.splice(i,1);
break;
}
}
ao.gl(bi,aKI,1);
}
}

};

QMAddrDomainCheck.dIL.cD=getTop().TE(
[
'<div style="padding:3px 0;line-height: 18px; margin: 4px 0 0 0;" class="domainCheckDisp ">',
'$@$if($type$&4)$@$',
'<div class="txt_red">\u60A8\u6DFB\u52A0\u7684\u6536\u4EF6\u4EBA\u90AE\u4EF6\u5730\u5740\u8FC7\u591A\uFF0C\u8BF7\u53BB\u9664\u90E8\u5206\u5730\u5740\u3002</div>',
'$@$else$@$',
'<div class="graytext">\u6211\u4EEC\u53D1\u73B0\u60A8\u8F93\u5165\u7684\u5730\u5740\u53EF\u80FD\u6709\u8BEF\uFF0C\u8BF7\u4FEE\u6539\uFF1A</div>',
'$@$for($errors$)$@$',
'<div style="margin-top: 4px;" domain="$domain$">',

'$domain$',
'$@$for($items$)$@$',
'$@$if($_idx_$!=0)$@$',
',&nbsp;',
'$@$else if($data$)$@$',
' \u2192 ',
'$@$endif$@$',
'<a name="$data$">$data$</a>',
'$@$endfor$@$',
'</div>',
'$@$endfor$@$',
'$@$endif$@$',
'</div>'
]);



















































function QMAddrInput(ar)
{
this.constructor=arguments.callee;
this.SW(ar)
.vK(ar.tabIndex,ar.accessKey)
.cWD("setup",ar)
.sb()
.bOp();
};

QMAddrInput.get=function(aM,ax)
{
var cr=ax[this.gN.adW];
return cr&&cr[aM];
};

QMAddrInput.prototype=
{

add:function(ez,aXm,cMM)
{
var ao=this,
ih=QMAddrParser.parseAddr(ez),
aK=ih.length;
getTop().E(ih,function(eg)
{
var erY=cMM||ao.eTJ(eg.nick);
ao.cln(eg.addr,eg.nick,eg.valid,erY);
}
);

aK&&getTop().show(ao.dFs,false);

if(aK&&!aXm)
{
getTop().callBack.call(this,this.MU.nw,["add"]);
}

return ih;
},

storeAndClear:function()
{
var ao=this,
hT=ao.mR;
this.feC=this.get("json");
this.fZe=this.isDisabled();
while(hT.length!=0)
{
ao.Pw(hT[0]);
}
},

restore:function()
{
var ao=this;
getTop().E(ao.feC,function(eg)
{
var erY=ao.eTJ(eg.nick);
ao.cln(eg.addr,eg.nick,eg.valid,erY);
}
);
this.disabled(this.fZe);

delete this.feC;
},

del:function(ez,eLT)
{
if(this.hasAddr(ez))
{
this.Pw(ez);
eLT||getTop().callBack.call(this,this.MU.nw,["del"]);
}
},

clear:function(eLT)
{
var ao=this,
hT=ao.mR,
aK=hT.length;

while(hT.length!=0)
{
ao.Pw(hT[0]);
}

if(aK&&!eLT)
{
getTop().callBack.call(this,this.MU.nw,["del"]);
}

return ao;
},

disabled:function(bKM)
{
this.btK=typeof bKM!="boolean"
?true
:bKM;
return this;
},

edit:function(ez)
{
var ao=this,
hZ=ao.AN[ez];
if(hZ)
{
var biR=hZ.kH&&getTop().encodeNick(hZ.kH),dgz=-1;

ao.Gh.blur();
ao.RC();
ao.CD();
ao.zW(ez);
ao.Pw(ez);
ao.bcB(ao.Ag.bBS.replace(
{
nick:biR,
addr:ez,
splitchar:ao.bKc
}
));

if(hZ.aep)
{
if(biR)
{
dgz=ao.sG.value.length-2;
}
else
{
dgz=ez.length
}
}
else if(hZ.cMD)
{

dgz=ez.indexOf("@");
}
else
{
dgz=ez.length;
}
ao.focus(dgz);
}
return ao;
},

flush:function()
{
this.CD();
return this;
},

focus:function(dO)
{

var ao=this;

switch(dO)
{
case"all":
return ao.aLM(0,-1);
case"start":
return ao.aLM(0,0);
case"end":
return ao.aLM(-1,-1);
}

if(typeof(dO)=="number")
{
return ao.aLM(dO,dO);
}
if(typeof(dO)=="string")
{
return ao.aJD().pG(dO);
}
return ao.aJD();
},

get:function(dO)
{
var ao=this,
aO=[],
hT=ao.mR,
tD=ao.AN;
if(dO=="autocomplete")
{
return ao.Se;
}

else if(!dO||{error:1,errhtml:1,errQQhtml:1,json:1,validemail:1,newwin:1}[dO])
{
getTop().E(hT,function(ez)
{
var bE=tD[ez],
kH=ao.fXp(bE.kH);
switch(dO)
{
case"error":
if(!bE.aep&&!bE.cMD)
{
aO.push(ez);
}
break;
case"errhtml":
if(!bE.aep&&!bE.cMD)
{
aO.push(getTop().htmlEncode(ez));
}
break;
case"errQQhtml":
if(!bE.aep&&bE.cMD)
{
aO.push(getTop().htmlEncode(ez));
}
break;
case"json":
aO.push(
{
nick:kH,
addr:ez,
valid:bE.aep,
isQQ:bE.cMD,
format:kH?['"',
getTop().encodeNick(kH),'"<',ez,'>']
.join(""):ez
}
);
break;
case"validemail":
if(bE.aep)
{
aO.push(ez);
};
break;
default:
aO.push(kH?['"',getTop().encodeNick(kH),
'"<',ez,'>'].join(""):ez);
}
}
);
return aO;
}
else
{

return hT.join(dO);
}
},

getContainer:function()
{
return this.hG;
},

getId:function()
{
return this.jJ;
},

getOwnerWindow:function()
{
return this.jo;
},

hasAddr:function(ez)
{
return this.AN.hasOwnProperty(ez);
},

isDisabled:function()
{
return this.btK;
},

length:function()
{
return this.mR.length;
},

updateDomain:function(cxI,cyE)
{
var ao=this,
bAW=[],
hT=this.mR,
tD=this.AN;
getTop().E(hT,function(ez)
{
if(tD[ez].hg==cxI)
{
bAW.push(ez);
}
}
);

getTop().E(bAW,function(ez)
{
var hZ=tD[ez];
ao.zW(ez);
ao.add(ao.Ag.bBS.replace(
{
nick:hZ.kH,
addr:[hZ.pM,cyE].join("@")
}
),true);
ao.Pw(ez,true);
}
);

getTop().callBack.call(this,this.MU.nw,["change"]);
},

setDomainError:function(ctZ)
{
var ao=this,
alQ=false,
aKx=ao.aJi;
getTop().E(ctZ,function(avG)
{
if(!aKx[avG.sDom])
{
alQ=aKx[avG.sDom]=true;
}
}
);
return ao.cdF();
},
setAddrError:function(aHH)
{
var ao=this,
tD=ao.AN;
for(var i=0;i<aHH.length;i++)
{
var gk=aHH[i];
if(tD[gk])
{
tD[gk].aep=false;
tD[gk].cMD=true;
}
}
return ao.cdF();
},


eTJ:function(bR)
{
return getTop().htmlEncode(bR).replace(/&#38;#x(?=\w{4})/gi,"&#x").replace(/&amp;#x(?=\w{4})/gi,"&#x");
},

fXp:function(bR)
{
var dJp;
if(bR&&/&#x(?=\w{4})/gi.test(bR))
{
!dJp&&(dJp=document.createElement("div"));
dJp.innerHTML=bR;
return dJp.innerHTML;
}
else
{
return bR;
}
},

cln:function(ez,vV,aHM,cMM)
{
var ao=this,
tD=ao.AN,
hT=ao.mR,
Vk=ao.yF,
bFB=Vk.previousSibling,
aIy=(bFB
?ao.MX(bFB.getAttribute("addr"))
:-1)+1;

if(tD[ez])
{

ao.Pw(ez);
}


{

var kS=ao.Ag,
eH=getTop().htmlEncode(ez),
kH=vV,
bFa=ez.split("@"),
hg=aHM?bFa[1]:"";
pM=aHM?bFa[0]:ez;

function bOc(bR,bdu)
{
return getTop().htmlEncode(getTop().getAsiiStrLen(bR)>bdu
?getTop().subAsiiStr(bR,bdu,"...")
:bR);
}
function fQT(bR,bdu)
{
return getTop().getAsiiStrLen(bR)>bdu
?getTop().subAsiiStr(bR,bdu,"...",false)
:bR;
}

getTop().insertHTML(Vk,"beforeBegin",kS.aWE
.replace(
{

nick:cMM&&fQT(cMM,ao.cLa.cBD),
alias:pM&&bOc(pM,ao.cLa.cIW),
domain:hg&&getTop().htmlEncode(hg),
addr:eH,
css:ao.aHP,
dispmode:ao.cDe,
splitchar:ao.bKc,
isvalid:aHM,
isdomainerr:!!ao.aJi[hg],
images_path:getTop().getPath("image")
}
)
);

var bn=Vk.previousSibling;
tD[ez]={
kH:vV,
pM:pM,
hg:hg,
aB:bn,
aep:aHM
};
ao.cru(bn,ez);
}

ao.crV();

hT.splice(aIy,0,ez);
},

CD:function()
{
if(this.add(getTop().trim(this.sG.value))!=0)
{
this.bcB("");
return true;
}
return false;
},




crV:function()
{
var ao=this,
bi=ao.hG;
if(ao.aWs&&getTop().gnIEVer<7)
{
bi.style.height='auto';
var czb=bi.offsetHeight;
if(czb>ao.aWs)
{
bi.style.height=ao.aWs+'px';
}
}
},

adG:function(adI)
{
var ao=this,
cS=ao.cBw(adI);


if(this.cJN!=cS)
{
this.cJN=cS;

var Vk=ao.yF,
alo=ao.cLa.alo,
aIc=ao.cLa.aIc,
iD=cS<alo?0:1
+Math.floor((cS-alo)/aIc),
bvb=Math.min(alo+aIc*iD,
ao.hG.offsetWidth-5
),
aaV=Vk.clientWidth;

if(bvb!=aaV)
{
Vk.style.width=bvb+"px";
if(adI=="paste")
{
Vk.scrollLeft=0;
}
}
}
},

RC:function(ez,crZ)
{
var rp=this.YC;

if(this.aja())
{
var aE=rp.aE;

if(ez)
{
var bP=rp.bP,
bn=aE[ez];
if(bn)
{
this.aeI(bn,"normal");
for(var i=0,aK=bP.length;i<aK;i++)
{
if(bP[i]==ez)
{
bP.splice(i,1);
break;
}
}
delete aE[ez];
}
}
else
{
for(var eH in aE)
{
this.aeI(aE[eH],"normal");
}

rp.aE={};
rp.bP=[];

if(!crZ)
{
rp.Su=null;
}
}
return true;
}
return false;
},

bcB:function(cus)
{
this.sG.value=cus;
this.adG();
},

Pw:function(aZu)
{
var eH=typeof aZu=="string"
?aZu:aZu.getAttribute("addr"),
Xp=this.AN[eH],
cF=this.MU;
if(Xp)
{
getTop().removeSelf(Xp.aB);
delete this.AN[eH];
this.mR.splice(this.MX(eH),1);
}
cF.dNm&&cF.dNm();

},

avM:function(crE,aXm)
{
var rp=this.YC;

if(rp.sl!=0)
{
var bP=rp.bP,
ek=this.MX(bP[bP.length-1]),
aE=rp.aE;

this.RC();

for(var eH in aE)
{
this.Pw(eH);
}

var hT=this.mR,
aK=hT.length;

if(!crE)
{
if(aK!=0)
{
this.zW(ek<aK
?hT[ek]:null);
}
this.focus("start");
}

if(!aXm)
{
getTop().callBack.call(this,this.MU.nw,["del"]);
}
}
},

aJD:function()
{

this.bEW().sG.focus();
return this.csj();
},

MX:function(ez)
{
var hT=this.mR
for(var i=0,aK=hT.length;i<aK;i++)
{
if(hT[i]==ez)
{
return i;
}
}
return-1;
},

bJX:function(aaK)
{
var ao=this,
aq=getTop(),
aE=[];

if(aq.getAddrACData)
{
var aE=aq.getAddrACData(ao.sG,aaK||"",ao.cbL);
aE.header=ao.bBs&&ao.constructor.cmY()?
[
'<div unselectable="on" class="graytext" style="border-bottom:1px solid #ccc;padding:0 5px;">',
'<a unselectable="on" style="float:right;" opt="hidetip">\u6211\u77E5\u9053\u4E86</a>',
'\u652F\u6301\u6635\u79F0\u62FC\u97F3\u7F29\u5199\u6216QQ\u53F7\u7801',
'</div>'
].join(""):'';
}

return aE;
},

aIP:function()
{
return{cmd:getTop().gbIsMac?"Command":"Ctrl"};
},

cBw:function(adI)
{
var cB=this.sG.value,
cwx=adI==8,
btH=adI==32
||(adI>=48&&adI<229),
cKh=cB||btH;

if(!cKh)
{
return 0;
}

if(cwx)
{
cB=cB.slice(0,-1);
}

var aZN=cB+(btH?"WW":"WW");
if(aZN==this.cGj)
{
return this.cGa;
}

var awR=this.cFj;
this.cGj=aZN;
awR.innerHTML=getTop().htmlEncode(aZN)
.replace(/ /ig,"&nbsp;");

return this.cGa=awR.scrollWidth;
},

adr:function()
{
var alU=this.yF.previousSibling;
return alU?this.MX(alU
.getAttribute("addr")):-1;
},

ade:function()
{
var Ak=this.sG,
cwQ=Ak.value,
FN=this.jo,
xF=FN.document,
aO={
sl:cwQ.length
};

if(xF.selection)
{
var aez=Ak.createTextRange(),
aGv=xF.selection.createRange();

function bHR(dO)
{
try
{
aez.moveStart("character",0);
aez.setEndPoint(["EndTo",dO].join(""),
aGv
);
return(aez.text||"").length;
}
catch(bj)
{
return-1;
}
}

aO.fZ=bHR("Start");
aO.hk=bHR("End");
}
else
{
var aez=xF.createRange();
aez.selectNode(Ak);


try
{
var aGv=FN.getSelection().getRangeAt(0);
var aLe=aez.compareBoundaryPoints(
Range.START_TO_nStart,aGv
)==1,
aJy=aez.compareBoundaryPoints(
Range.END_TO_nEnd,aGv
)==-1,
aXY=!aLe&&!aJy;
}
catch(bj)
{



var aXY=true;
}

aO.fZ=aXY?Ak.selectionStart:-1;
aO.hk=aXY?Ak.selectionEnd:-1;
}

if(aO.fZ==-1)
{
aO.bk="none";
}
else if(aO.fZ!=aO.hk)
{
aO.bk="range";
}
else
{
aO.bk="point";
}

return aO;
},

aja:function()
{
return this.YC.bP.length>0;
},

ML:function()
{
this.dVs.style.left="-200px";
},

SW:function(ar)
{
var ao=this,
oI=ao.constructor;

try
{
ao.cLa=oI.gN;
ao.Ag=oI.cD;
ao.jJ=ar.id;
ao.jo=ar.win;
ao.hG=ar.dom.container;
ao.aWs=ar.maxHeight;
ao.cLs=ar.maxItemView||15,
ao.crQ=ar.minWidth||220,
ao.azs=ar.width||"auto",
ao.aHP=getTop().extend(
{
text:"addr_text",

normal:"addr_base addr_normal",
over:"addr_base addr_over attbg",
select:"addr_base addr_select fn_list",

error:"addr_base addr_error",
errover:"addr_base addr_errover attbg",
errsel:"addr_base addr_errsel fn_list",

dmerror:"addr_base addr_domain_err",
dmerrover:"addr_base addr_domain_errover attbg",
dmerrsel:"addr_base addr_domain_errsel fn_list",

move:"addr_move",
mover:"addr_mover"
},
ar.style
);
ao.cDe=ar.dispMode;
ao.bKc=ar.splitChar||";";
ao.cqH=ar.defaultText||ao.hG.getAttribute("defaultText");
ao.bBs=ar.isEnableTip!==false;
ao.gnL=ar.isFocusAC===true;
ao.cbL=ar.filterFunc;
ao.btK=false;
ao.mR=[];
ao.AN={};
ao.aJi={};
ao.YC={
bP:[],
aE:{},
Su:null
};
ao.MU={
fhp:ar.onfocus,
cgP:ar.onblur,
nw:ar.onchange,
aOm:ar.onkeydown,
dNm:ar.onNotify 
}
ao.eZH={
"autoFold":1 
};
oI.YI(ao);
}
catch(bj)
{
throw new Error("QMAddrInput constructor:"+bj.message);
}

return ao;
},

zW:function(ez)
{
var ao=this,
btB=(ao.AN[ez]||{}).aB
||ao.hG.lastChild;

if(ao.yF.nextSibling!=btB)
{
ao.hG
.insertBefore(ao.yF,btB);
}

return ao;
},

aeR:function()
{
var ao=this,
aGA=ao.ayE?ao.sG:ao.Gh;
return!ao.cwF()?true:(ao.jo.getSelection
?aGA.selectionStart==aGA.selectionEnd
:ao.jo.document.selection.type=="None");
},

cwF:function()
{
return this.ayE||this.aja();
},

cFs:function()
{
return this.bvH;
},

Ze:function(ez)
{
return this.YC.aE[typeof ez=="string"
?ez
:ez.getAttribute("addr")];
},

cGe:function()
{
if(this.azn)
{

if(window.getSelection)
{




}
else
{
this.azn.select();
}

this.azn=null;
}
},

bEW:function()
{
this.bvH=true;
return this;
},

gBw:function(dNT,ffd)
{
var tD=this.AN,
ely=tD[dNT];
if(ely)
{
var hT=this.mR,
fjQ=tD[ffd];
hT.splice(this.MX(dNT),1);
if(fjQ)
{
this.hG.insertBefore(ely.aB,
fjQ.aB
);
hT.splice(this.MX(ffd),0,dNT);
}
else
{
this.hG.insertBefore(ely.aB,
this.yF
);
hT.push(dNT);
}
}
},

cCs:function()
{
(this.aja()?this.Gh:this.sG).focus();


if(window.getSelection)
{
var er=this.jo.getSelection();
this.azn=er&&er.rangeCount?er.getRangeAt(0):null;
}
else
{
this.azn=this.jo.document.selection.createRange();
}
},




pG:function(ez,dO)
{
var Xp=this.AN[ez],
rp=this.YC;

if(Xp)
{
if(dO=="shift")
{
var hT=this.mR,
tD=this.AN,
Su=rp.Su,
JE=this.MX(ez),CT;

if(typeof Su!="number")
{
CT=this.MX(rp.bP[0]);
if(CT==-1)
{
Su=rp.Su=this
.adr();
}
}

if(typeof Su=="number")
{
CT=Su+(Su<JE?1:0);
}

this.RC(false,true);

var iD=CT>JE?-1:1,
HU=rp.bP,
bJf=rp.aE;

for(var i=CT,JE=JE+iD;i!=JE;i+=iD)
{
var eH=hT[i];
HU.push(eH);
this.aeI(
rp.aE[eH]=tD[eH].aB,
"select"
);
}
}
else
{
if(dO!="add")
{
this.RC();
}

if(this.Ze(ez))
{
this.RC(ez);
}
else
{
var HU=rp.bP;

this.CD();


HU.push(ez);
this.aeI(
rp.aE[ez]=Xp.aB,"select"
);
}
}
}

if(this.aja())
{
var aO=[],
hT=this.mR,
tD=this.AN,
bJf=rp.aE;

for(var i=0,aK=this.length();i<aK;i++)
{
var eH=hT[i];
if(bJf[eH])
{
var bE=tD[eH];
aO.push(bE.kH?['"',getTop().encodeNick(bE.kH),
'"<',eH,'>'].join(""):eH);
}
}
aO.push("");

var bcR=this.Gh;
bcR.value=aO.join(";");
bcR.focus();
bcR.select();
}

return this;
},

bup:function()
{
var ao=this,
hT=ao.mR;
ao.CD();
ao.pG(hT[0]);
ao.pG(hT[hT.length-1],"shift");
},
fOv:function(dV)
{
var	bP=dV||[],
fM={},
hq=[];
for(var i=0;i<bP.length;i++)
{
if(bP[i].oAddress&&bP[i].oAddress.email)
{
var gk=bP[i].oAddress.email;

if(!fM[gk])
{
fM[gk]=bP[i];

}
}
}
for(var j in fM)
{
hq.push(fM[j]);
}


if(dV.header)
{
hq.header=dV.header;
}
return hq;
},
bOp:function()
{
var ao=this,
aq=getTop();
ao.bBs&&ao.constructor.cmY();
ao.Se=new aq.QMAutoComplete(
{
oInput:ao.sG,
oPosObj:ao.hG,
nMaxItemView:ao.cLs,
nMinWidth:ao.crQ,
nWidth:ao.azs,
ongetdata:function(mI)
{
return ao.fOv(ao.bJX());
},
onclick:function(ap,av)
{
if(!av)
{
var aT=aq.getEventTarget(ap);
if(aT&&aT.getAttribute("opt")=="hidetip")
{


this.setHeader("");
ao.constructor.ajs();
}
}
},
onselect:function(av)
{
var aq=getTop(),
kA=av.oAddress,
ctc=aq.T('"$nick$"<$addr$>;'),
Xd=[];

function aYi(hS)
{
return ctc.replace(
{
nick:aq.encodeNick(aq.htmlDecode(hS.name)),
addr:aq.htmlDecode(hS.email)
}
);
}
if(kA.nShortcutGroupId)
{

var fb=aq.QMAddress.getGroup(kA.nShortcutGroupId);
for(var hU=fb.addressesId,aV=0,cQ=hU.length;aV<cQ;aV++)
{
eL=aq.QMAddress.getAddress(hU[aV],true);
if(!eL.nShortcutGroupId)
{
Xd.push(aYi(eL));
}
}
}
else
{
Xd.push(aYi(kA));
}






ao.cwc(Xd.join(""),aq.encodeNick(aq.htmlEncode(aq.htmlDecode(kA.name))));
},
ontouchstart:function()
{
ao.bEW();
}
}
);
return ao;
},

cru:function(Wx,ez)
{

this.cvK(Wx,
{
"click":this.csQ,
"dblclick":this.cIB,
"mouseover":this.cFq,
"mouseout":this.cDE
},
ez
);
var
apH=Wx.childNodes,
cF=this.MU,
cA;
for(var i=0,aK=apH.length;i<aK;i++)
{
cA=apH[i];
cA.nodeName.toLowerCase()=="a"&&cA.getAttribute("name")=="del"&&this.cvK(cA,{
"click":this.ggY
})&&(i=aK)
}
cF.dNm&&cF.dNm();
},

aeI:function(Wx,aC)
{
var ao=this,
bBt="",
bk={
move:"select",
mover:"select"
}[aC],
hZ=ao.AN[Wx.getAttribute("addr")];

if(!bk)
{
bk=aC||"normal";
}
else
{
bBt=ao.aHP[aC];
}

if(hZ&&!hZ.aep)
{
bk={
normal:"error",
over:"errover",
select:"errsel"
}[bk];
}
else if(hZ&&ao.aJi[hZ.hg])
{
bk={
normal:"dmerror",
over:"dmerrover",
select:"dmerrsel"
}[bk];
}

getTop().setClass(
Wx,
[ao.aHP[bk],bBt].join(" ")
);

return ao;
},

sb:function()
{
var ao=this;

ao.cvK(ao.hG,
{
"mousedown":ao.cCn,



"selectstart":ao.coA,
"contextmenu":ao.crR
}
);


var btI=
{
"focus":ao.cyO,
"blur":ao.cIs,
"keydown":ao.cyZ,
"keyup":ao.czF,
"paste":ao.cwb
};

if(getTop().gbIsTT)
{
btI["keypress"]=ao.cGU;
}

ao.cvK(ao.sG,btI);


ao.cvK(ao.Gh,
{
"focus":ao.cEl,
"blur":ao.cyY,
"keydown":ao.cJH,
"keyup":ao.cAF,
"paste":ao.cBA,
"cut":ao.ctw
}
);


ao.cvK(ao.dVs,
{
"click":ao.cyl,
"contextmenu":ao.sP
}
);

ao.cvK(ao.dFs,
{
"click":ao.focus
}
);

return ao;
},

aLM:function(cHc,cId)
{

var Ak=this.sG,
Gi=Ak.value.length;


function bEv(cM)
{
if(!cM)
{
cM=0;
}
if(cM<0)
{
cM=Gi+cM+1;
}
if(cM<0)
{
return 0;
}
if(cM>Gi)
{
return Gi;
}
return cM;
}

var CT=bEv(cHc),
JE=bEv(cId);

if(Ak.createTextRange)
{

var cu=Ak.createTextRange();
cu.moveStart("character",CT);
cu.collapse();
cu.moveEnd("character",JE-CT);
cu.select();
this.aJD();
}
else
{
this.aJD();
Ak.selectionStart=CT;
Ak.selectionEnd=JE;
}
return this;
},

vK:function(Is,Uq)
{
var ao=this,
bi=ao.hG,
cUL,Vk,Ak,awR;

bi.unselectable="on";
bi.style.cursor="text";
bi.innerHTML=ao.Ag.bfA.replace(
{
css:ao.aHP.text,
width:ao.cLa.alo,
defaulttext:ao.cqH,
accesskey:Uq?'accesskey="'+Uq+'"':''
}
);

cUL=ao.dFs=bi.firstChild;
Vk=ao.yF=cUL.nextSibling,
Ak=ao.sG=Vk.firstChild,
awR=ao.cFj=Vk.lastChild;


ao.Gh=bi.lastChild.firstChild;


ao.bNc=typeof Is=="number"?Is:0;
Ak.tabIndex=Is;


ao.cGh(awR,Ak);


var btG=[],
cX=ao.jo.document.body;

getTop().E(ao.cLa.rW,function(bR)
{
var jD=bR.split("|");
btG.push((jD[0]=="seperater"
?ao.Ag.cCc
:ao.Ag.cEX.replace({
operate:jD[0],
name:jD[1],
shortcut:getTop().T(jD[2]||"").replace(ao.aIP())
})));
});

getTop().insertHTML(cX,"afterBegin",ao.Ag.cGu.replace({
items:btG.join(""),
width:getTop().gbIsMac?160:130
}));


ao.dVs=cX.firstChild;

return ao;
},


cWD:function()
{
var aq=getTop(),
mk=arguments[0],
dJM=this.eZH;

if(mk=="setup")
{
var aS=arguments[1];

for(var i in dJM)
{
if(!aS.feature||!aS.feature[i])
{

dJM[i]=0;
}
else
{

this.fdp(i)['init'].call(this,aS);
}
}
}
else
{
var daB=arguments[1],
gdL=[].slice.call(arguments,2),
fbg=this.fdp(mk);
fbg[daB]
&&fbg[daB].apply(this,gdL);
}

return this;
},

fdp:function(aC)
{
var aq=getTop(),
dJM=this.eZH;
if(dJM[aC])
{
return(function(fqt)
{
var QK={
"init":function()
{
debug(fqt+": not init");
}
};




switch(fqt)
{
case"autoFold":
return aq.extend(QK,
{
"init":function(ay)
{
var ao=this;
aq.insertHTML(ao.hG,"afterBegin",ao.Ag.fXy.replace({}));
aq.addEvent(aq.S("qmAddrInputFold",ao.jo),"mousedown",function()
{
getTop().fireMouseEvent(ao.hG,"mousedown")
}
);
},
"fold":function(fjN)
{
if(fjN&&this.aja())
{

return;
}

var bi=this.hG,
dGi="smart_contact_fold";
bi.scrollTop=0;
if(fjN)
{
this.length()
&&!aq.hasClass(bi,dGi)
&&aq.addClass(bi,dGi);
bi.style.height="";
getTop().S("qmAddrInputFoldCnt",this.jo).innerHTML=this.length();
}
else
{
var scrollHeight=bi.scrollHeight-2;
aq.hasClass(bi,dGi)
&&aq.rmClass(bi,dGi);

bi.style.height="18px";
bi.style.height=scrollHeight+"px";
bi.style.height="auto";
}
}
});
default:
return QK;
}
})(aC);
}
return{};
},

crA:function()
{
var ao=this;
ao.Se.show(ao.bJX(" "));
return ao;
},

cEk:function(Lt,Jy,ez)
{
var cX=this.jo.document.body,
gnp=cX.clientWidth,
gwy=cX.clientHeight,
dsE=this.dVs,
fhh=dsE.clientWidth,
fvB=dsE.clientHeight;

dsE.style.left=cX.scrollLeft
+(Lt+fhh>gnp?Lt
-fhh:Lt)+"px";
dsE.style.top=cX.scrollTop
+(Jy+fvB>gwy?Jy
-fvB:Jy)+"px";

var aeR=this.aeR();
getTop().E(getTop().GelTags("div",dsE)[0].childNodes,function(gs)
{
switch(gs.getAttribute("opt"))
{
case"cut":
case"copy":
case"delete":
getTop().setClass(gs,aeR
?"menu_item_nofun"
:"menu_item");
break;
case"edit":
gs.setAttribute("addr",ez||"");
break;
}
});
},

cGh:function(bWx,cpF)
{
getTop().E("fontFamily,fontSize,fontWeight,lineHeight,wordSpacing".split(","),
function(fhL)
{
bWx.style[fhL]=getTop().getStyle(cpF,fhL);
}
);
},

csj:function()
{
this.bvH=false;
return this;
},

cdF:function()
{
var ao=this,
tD=ao.AN,
aKx=ao.aJi;

getTop().E(ao.mR,function(ez)
{
var hZ=tD[ez],
jm="",
SO=hZ.aB;
if(aKx[hZ.hg])
{
jm=ao.Ag.aWE.replace({},"errdomainmsg")
}
else if(hZ.cMD)
{
jm=hZ.aep?ez:ao.Ag.aWE.replace({addrError:true},"errmsg");
}
else
{
jm=hZ.aep?ez:ao.Ag.aWE.replace({},"errmsg");
}





if(SO.title!=jm)
{
SO.title=jm;
ao.aeI(SO,"normal");
}
}
);
return ao;
},







bLj:function()
{
var hT=this.mR,
tD=this.AN,vL,acw,akE,GL,bsI,Ab,Wu,aGK,yA,anG,azF,ayp,aHZ;

if(this.Yg)
{
delete this.Yg;
}

if(hT.length!=0)
{
vL=tD[hT[0]].aB;
acw=tD[hT[hT.length-1]].aB;
akE=acw.nextSibling;

GL=vL.offsetParent;
bsI=getTop().calcPos(GL);
Ab=bsI[0];
Wu=bsI[3];

aGK=vL.offsetHeight;
}

yA=getTop().calcPos(this.hG);
anG=yA[0];
azF=yA[3];
ayp=yA[2];
aHZ=yA[1];

this.Yg={
vL:vL,
acw:acw,
akE:akE,

Ab:Ab,
Wu:Wu,

aGK:aGK,

anG:anG,
azF:azF,
ayp:ayp,
aHZ:aHZ
};
},





bDy:function(aeH)
{
var wU=this.Yg,
Dn=aeH.clientX,
Ch=aeH.clientY;

return Dn>=wU.azF
&&Dn<=wU.aHZ
&&Ch>=wU.anG
&&Ch<=wU.ayp;
},








bCr:function(aeH,dO)
{
var cyc=dO=="limit",
alJ={};

if(!cyc||this.bDy(aeH))
{
var OF=this.bDH(),
aXO=OF.length;

if(aXO>0)
{
var wU=this.Yg,
cKa=aeH.clientX-wU.Wu,
bCV=aeH.clientY-wU.Ab,
alC=this.bIf(aeH.clientY),SM,
bJB,aHk,bbY,BK,
bax,aXK,bbN,
aXF,aKL,bcm;

if(alC<0)
{
alC=0;
}
else if(alC>=aXO)
{
alC=aXO-1;
}

SM=OF[alC].SM;
bJB=SM.length;

for(var i=0,aXK=9999999;i<bJB;i++)
{
aKL=SM[i];
aHk=cKa-aKL.offsetLeft;
bbY=aKL.offsetWidth-aHk;
bcm=Math.min(Math.abs(aHk),Math
.abs(bbY));

if(bcm<aXK)
{
BK=aKL;
aXK=bcm;
bbN=aHk;
aXF=bbY;
}
else
{
break;
}
}

bax=BK.offsetTop;

alJ.bn=BK;
alJ.cvp=alC;
alJ.coR=bbN>0
&&aXF>0;
alJ.eaV=bCV>=bax
&&bCV<=bax+wU.aGK;
alJ.Xk=bbN<aXF
?"left"
:"right";
}
}

return alJ;
},





bDH:function()
{
var wU=this.Yg,
OF=wU.OF;

if(OF)
{
return OF;
}

var bn=wU.vL,
akE=wU.akE,SM,aYx,bav;

wU.OF=OF=[];

for(;bn&&bn!=akE;bn=bn.nextSibling)
{
if(bn.getAttribute("addr"))
{
bav=bn.offsetTop;
if(aYx!=bav)
{
aYx=bav;
SM=[bn];
OF.push({
Ab:aYx,
SM:SM
});
}
else
{
SM.push(bn);
}
}
}

return OF;
},





bIf:function(cAg)
{
var wU=this.Yg,
bJF=wU.anG,
byr=this.bDH().length;

return!byr?0:Math.floor((cAg-bJF)*byr
/(wU.ayp-bJF));
},



cvK:function(aP,fml,aL)
{
var ao=this;
for(var i in fml)
{
(function()
{
var bHD=fml[i];
getTop().addEvent(aP,i,function()
{
bHD.call(ao,arguments[0],aP,aL);
}
);
})();
}
return ao;
},

cCn:function(ap,gn)
{
var ao=this,
aT=ap.srcElement||ap.target;

if(window.getSelection&&ap.button==0||!window.getSelection&&ap.button==1)
{
var JM=aT.tagName=="SPAN"||aT.tagName=="B"
?aT.parentNode
:aT,
eH=JM.getAttribute("addr"),
aCG=aT!=ao.sG;
if(aT==gn)
{

getTop().now()-(ao.cBl||0)<300
?ao.bup():ao.cJe(ap,gn);
ao.cBl=getTop().now();
}

if(eH)
{
if(ap.ctrlKey||ap.metaKey)
{
ao.pG(eH,"add");
}
else if(ap.shiftKey)
{
ao.pG(eH,"shift");
}
else
{
if(!ao.Ze(eH))
{
ao.pG(eH);
}

ao.csJ(ap,gn,eH);
}
}
else if(aCG
||ao.sG.value.length==0)
{
ao.cFY(ap);
}


if(aCG)
{
getTop().preventDefault(ap);
}
if(aCG||ao.sG.value.length==0)
{
ao.Se.close();
}

ao.ML();
}
else if(ap.button==2
||(getTop().gbIsIE&&ap.button==0))
{
if(aT!=ao.sG)
{
var JM=aT.tagName=="SPAN"||aT.tagName=="B"
?aT.parentNode
:aT,
eH=JM.getAttribute("addr");

if(eH&&!ao.Ze(eH))
{


if(getTop().gbIsIE)
{
this.ayE=false;
}
ao.pG(eH);
}

ao.sP(ap);
ao.cCs();
}
}
else if(aT!=ao.sG)
{
ao.sP(ap);
}
},

coA:function(ap)
{
var aT=ap.srcElement||ap.target;
if(aT!=this.sG&&aT!=this.Gh)
{
getTop().preventDefault(ap);
}
},

csJ:function(ap,gn,ez)
{
var ao=this,
FN=this.jo,
xF=FN.document,
ajQ=FN.captureEvents?FN:xF.body,
Dn=ap.clientX,
Ch=ap.clientY,
Fw=xF.createElement("div"),
If=xF.createElement("div");

Fw.className="addr_cursor";
Fw.innerHTML='&nbsp;';

If.style.cssText='position:absolute;z-index:99999;top:-999px;left:-999px;';
If.innerHTML=this.Ag.cIg;

var pi=this.RP={
ayr:false,
Fw:Fw,
If:If,
bi:gn,
avO:function(ap)
{
if(ao.RP)
{
ao.RP=null;

ao.ban();

getTop().removeEvent(ajQ,"mouseup",pi.avO);
getTop().removeEvent(ajQ,"mousemove",
pi.aud
);

try
{

if(pi.ayr)
{
var cAD=ao.Gh.value,
He=pi.Sm[pi.ajN].fQ,
aZj=He.hG,
bue=[],
cyG=ao.mR,eIU;

if(Fw.parentNode==aZj)
{
aZj.style.backgroundColor="#fff";

getTop().E(cyG,function(bFt)
{
if(ao.Ze(bFt))
{
bue.push(bFt);
}
}
);

ao.avM(true,true);
aZj.insertBefore(
He.yF,Fw
);
He.add(cAD,true);

getTop().E(bue,function(ez)
{
He.pG(ez,"add");
}
);

if(ao==He)
{
getTop().callBack.call(ao,ao.MU.nw,["move"]);
}
else
{
getTop().callBack.call(ao,ao.MU.nw,["del"]);
getTop().callBack.call(He,He.MU.nw,["add"]);
}
}
}
else
{
ao.pG(ez);
}
}
catch(bj)
{
doPageError(bj.message,"/js/qmaddrinput.js","_fDoMouseUp");
}

getTop().removeSelf(Fw);
getTop().removeSelf(If);

delete If;
delete Fw;
delete pi;
}

ao.sP(ap);
},
aud:function(ap)
{
if(!pi.ayr&&

Math.max(Math.abs(Dn-ap.clientX),Math
.abs(Ch-ap.clientY))>8)
{
var Sm=[],
cX=xF.body;

getTop().E(QMAddrInput.jL(FN),function(aP,dT)
{
var ek=getTop().calcPos(aP.hG);

if(ek[2])
{
if(aP==ao)
{
pi.ajN=dT;
}

Sm[dT]={
fQ:aP,
ek:ek
};
aP.bLj();
}
}
);

cX.insertBefore(If,cX.firstChild);

if(getTop().gsAgent&&getTop().gsAgent.indexOf("mac")!=-1)
{
var aIt=If.firstChild.style;
aIt.left=parseInt(aIt.left)-2;
aIt.top=parseInt(aIt.top)-4;
}

pi.ayr=true;
pi.Sm=Sm;
}

ao.cGC(ap);
ao.sP(ap);
}
}

this.aWa();

getTop().addEvent(ajQ,"mouseup",pi.avO);
getTop().addEvent(ajQ,"mousemove",pi.aud);
},

cGC:function(ap)
{
var pi=this.RP;

if(pi&&pi.ayr)
{
var Fw=pi.Fw,
If=pi.If,
Sm=pi.Sm,
ajN=pi.ajN,
aKZ=Sm[ajN].fQ.hG,
He;

If.style.left=ap.clientX-5+"px";
If.style.top=ap.clientY-5+"px";


for(var i=Sm.length-1;i>=0;i--)
{
var aLr=Sm[i];
if(aLr&&aLr.fQ&&aLr.fQ.bDy(ap))
{
He=aLr.fQ;
break;
}
}

if(He)
{


if(ajN!=i)
{
pi.ajN=i;
}

var wU=He.Yg,
bi=He.hG,
aex=He.bCr(ap),
BK=aex.bn;

if(BK&&aex.Xk=="right")
{
BK=BK.nextSibling;
}

if(bi!=aKZ)
{
aKZ.style.backgroundColor="#fff";
}

if(pi.bi!=bi)
{
bi.style.backgroundColor="#f9f2b3";
}

bi.insertBefore(Fw,BK
||bi.firstChild);
}
else if(Fw.parentNode==aKZ)
{

getTop().removeSelf(Fw);
aKZ.style.backgroundColor="#fff";
}
}
},

crR:function(ap)
{
var aT=ap.srcElement||ap.target;
if(aT!=this.sG)
{

this.sP(ap);
this.cGe();
this.cEk(ap.clientX,ap.clientY,aT.getAttribute("addr"));

this.Se.close();
}
},

cJe:function(ap,gn)
{

var tS=gn.childNodes,
GL=tS[1].offsetParent,
bsI=getTop().calcPos(GL),
Wu=bsI[3],
Ab=bsI[0],
Dn=ap.clientX,
Ch=ap.clientY,
bBm=false;

for(var i=0,aK=tS.length-1;i<aK;i++)
{
var bn=tS[i],
acU=Ab+bn.offsetTop,
bKw=Dn<=Wu+bn.offsetLeft
+2,
cDm=Ch<=acU,
cxd=Ch<=acU
+bn.offsetHeight;
if((bKw&&cxd)
||(!bKw&&cDm))
{
var eH=bn.getAttribute("addr");
if(!eH)
{

this.focus("start");
}
else if(bn.previousSibling==this.yF)
{

this.focus("end");
}
else
{
this.CD();
this.zW(eH);
this.focus("start");
}
bBm=true;
break;
}
}
if(!bBm)
{
if(bn==this.yF)
{
this.focus("end");
}
else
{
this.CD();
this.zW();
this.focus("start");
}
}
},

cFY:function(ap)
{
var hT=this.mR,
sl=hT.length;

if(sl==0||this.sG.value.length!=0)
{
return;
}

var FN=this.jo,
ajQ=FN.captureEvents?FN:FN.document.body,
ao=this,
bAO=ap.clientX,
aXl=ap.clientY;

var pi=this.RP={
ayr:true,
avO:function(ap)
{
if(ao.RP)
{
ao.RP=null;
ao.ban();

getTop().removeEvent(ajQ,"mouseup",pi.avO);
getTop().removeEvent(ajQ,"mousemove",
pi.aud
);

delete pi;
}

ao.sP(ap);
},
aud:function(ap)
{
if(ao.RP)
{
var Dn=ap.clientX,
Ch=ap.clientY,
awJ,aXz;

if(Math.abs(Dn-bAO)>2
||Math.abs(Ch-aXl)>5)
{
var wU=ao.Yg,
aex=ao.bCr(ap),
BK=aex.bn,
cAT=aex.cvp;

if(aex.coR)
{
awJ=BK;
}
else
{
var cID=ao.bIf(aXl),
Xk;

if(cAT==cID)
{
Xk=Dn<bAO
?"left"
:"right";
}
else
{
Xk=Ch<aXl
?"left"
:"right";
}

if(aex.Xk==Xk)
{
if(BK
&&BK[Xk=="left"
?"previousSibling"
:"nextSibling"]!=ao.yF)
{
awJ=BK;
}
}
else
{
awJ=BK
&&BK[Xk=="right"
?"previousSibling"
:"nextSibling"];
}
}
}

aXz=awJ
&&awJ.getAttribute("addr");

if(aXz)
{
ao.pG(aXz,"shift");
}
else if(ao.RC())
{
ao.focus("start");
}
}

ao.sP(ap);
}
};

this.bLj();
this.aWa();

getTop().addEvent(ajQ,"mouseup",pi.avO);
getTop().addEvent(ajQ,"mousemove",pi.aud);
},
cyO:function(ap)
{
var ao=this;
ao.ayE=true;
getTop().show(ao.dFs,false);
setTimeout(function()
{
ao.gnL&&!ao.length()&&ao.crA();
ao.cWD("autoFold","fold",!1);
}
);
getTop().callBack.call(ao,ao.MU.fhp,[ap]);
},

cIs:function(ap)
{
var ao=this;
if(!ao.cFs())
{
ao.ayE&&ao.ML();
ao.ayE=false;
ao.CD();


!ao.length()&&getTop().show(ao.dFs,true);
setTimeout(function()
{
ao.cWD("autoFold","fold",!0);
}
);
getTop().callBack.call(ao,ao.MU.cgP,[ap]);
}
},

cyZ:function(ap)
{
this.adG(ap.ctrlKey?0:ap.keyCode);

switch(ap.keyCode)
{
case 59:
case 186:
case 188:
if(ap.shiftKey)
{
break;
}
case 32:
if(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(this.sG.value)&&this.CD())
{
this.sP(ap);
}
break;
case 46:
var ro=this.ade();
if(ro.bk=="point"
&&ro.hk==ro.sl
&&this.yF.nextSibling)
{
this.Pw(this.yF.nextSibling);
this.sP(ap);
getTop().callBack.call(this,this.MU.nw,["del"]);
}
break;
case 8:
var ro=this.ade(),
alU=this.yF.previousSibling,
aUl=alU
&&alU.getAttribute("addr");
if(ro.bk=="point"&&ro.fZ==0
&&alU)
{
this.pG(aUl,"shift");
this.sP(ap);





}
break;
case 37:
var ro=this.ade(),
alU=this.yF.previousSibling,
aUl=alU
&&alU.getAttribute("addr");
if(ro.bk=="point"&&ro.fZ==0
&&aUl)
{
if(ap.shiftKey)
{
this.pG(aUl,"shift");
}
else
{
this.CD();
this.zW(aUl);
this.focus("start");
}
this.sP(ap);
}
break;
case 39:
var ro=this.ade(),
aXJ=this.yF.nextSibling,
aHi=aXJ&&aXJ.getAttribute("addr");

if(ro.bk=="point"
&&ro.hk==ro.sl&&aHi)
{
if(ap.shiftKey)
{
this.pG(aHi,"shift");
}
else
{
this.CD();
this.zW(aXJ.nextSibling
.getAttribute("addr"));
this.focus("start");
}

this.sP(ap);
}
break;
case 36:
var ro=this.ade();

if(ro.bk=="point"&&ro.fZ==0)
{
this.CD();

if(ap.shiftKey&&this.adr()!=-1)
{
this.pG(this.mR[0],"shift");
}
else
{
this.zW(this.mR[0]);
this.focus("start");
}

this.sP(ap);
}
break;
case 35:
var ro=this.ade();

if(ro.bk=="point"
&&ro.hk==ro.sl)
{
this.CD();

var Xt=this.mR.length-1;
if(ap.shiftKey
&&this.adr()!=Xt)
{
this.pG(this.mR[Xt],
"shift"
);
}
else
{
this.zW();
this.focus("start");
}

this.sP(ap);
}
break;
case 65:
if(ap.ctrlKey||ap.metaKey)
{
var ro=this.ade(),
hT=this.mR;

if(ro.fZ==0
&&ro.hk==ro.sl
&&hT.length!=0)
{
this.CD();
this.pG(hT[0]);
this.pG(hT[hT.length-1],
"shift"
);
this.sP(ap);
}
}
break;
case 38:
case 40:

if(!this.Se.isShow())
{
var akI=ap.keyCode==38,
cA=this.yF[akI
?"previousSibling"
:"nextSibling"];
eH=cA.getAttribute("addr"),
bzh=this.MX(eH);

if(bzh!=-1)
{
var GL=cA.offsetParent,
bsI=getTop().calcPos(GL),
bHJ=bsI[0],
aXT=bsI[3],

bzK=getTop().calcPos(this.yF);
bwf=bzK[0],
cBs=bzK[3],
bHM=getTop().calcPos(this.hG),
Sh=bHM[3],
Dt=bHM[0],

hT=this.mR,
tD=this.AN,
bBX=9999999,
aIA=null,
buu=null;

for(var i=bzh,bay=hT.length,aK=akI
?-1
:bay+1,iD=akI?-1:1;i!=aK;i+=iD)
{
if(i==bay)
{
var bda="",
JM=tD[hT[bay-1]].aB,
aLj=aXT
+JM.offsetLeft
+JM.offsetWidth,
acU=bHJ+JM.offsetTop,
aJd=Math.abs(acU-bwf);
}
else
{
var bda=hT[i],
JM=tD[bda].aB,
aLj=aXT
+JM.offsetLeft,
acU=bHJ+JM.offsetTop,
aJd=Math.abs(acU-bwf);
}


if(Math.abs(aLj-Sh)<5
&&Math.abs(acU-Dt)>5)
{
var ZZ=JM.previousSibling;
aJd-=JM.offsetHeight*iD;
aLj=aXT
+ZZ.offsetLeft
+ZZ.offsetWidth;
}


if(aJd<5)
{
continue;
}

if(aJd>5+JM.offsetHeight)
{
break;
}

var bLm=Math.abs(aLj-cBs);
if(bLm>=bBX)
{
break;
}
bBX=bLm;
aIA=bda;
buu=buu;
}

if(aIA!=null)
{
this.CD();
if(ap.shiftKey)
{
this.pG(aIA,"shift");
}
else
{
this.zW(aIA);
this.focus("start");
}
}
}
this.sP(ap);
}
break;
default:
getTop().callBack.call(this,this.MU.aOm,[ap]);
break;
}
this.ML();
},

cGU:function()
{
this.adG();
},

czF:function(ap)
{
if(ap.keyCode!=13)
{
this.adG();
}
if(ap.keyCode==186||ap.keyCode==188||ap.keyCode==59||ap.keyCode==13)
{
if(this.CD())
{
this.sP(ap);
}
}
},

cwb:function()
{

var ao=this;

this.jo.setTimeout(function()
{
ao.adG("paste");


if(getTop().gbIsFF)
{
getTop().show(ao.sG,false);
setTimeout(function()
{
getTop().show(ao.sG,true);
ao.focus("end");
}
);
}
},0);
this.jo.setTimeout(function()
{
ao.sG.value.indexOf("@")!=-1&&ao.CD();
},100)

},

cEl:function(ap)
{
var ao=this;

this.Gh.tabIndex=this.bNc;
setTimeout(function()
{
ao.cWD("autoFold","fold",!1);
}
);
getTop().callBack.call(this,this.MU.fhp,[ap]);
},

cyY:function(ap)
{
var ao=this;

this.Gh.tabIndex=-1;
setTimeout(function()
{
ao.cWD("autoFold","fold",!0);
}
);
if(this.aja())
{
this.RC();
this.ML();
getTop().callBack.call(this,this.MU.cgP,[ap]);
}
},

cJH:function(ap)
{
switch(ap.keyCode)
{
case 8:
case 46:
this.avM();
break;
case 37:
var rp=this.YC,
HU=rp.bP,
acY=HU[HU.length-1];
if(ap.shiftKey)
{
var aIy=this.MX(acY)-1;
if(aIy>=0)
{
this.pG(this.mR[aIy],"shift");
}
else if(this.adr()==-1)
{
this.zW(this.mR[0]);
this.focus("start");
}
}
else
{
this.RC();
this.zW(acY);
this.focus("start");
}
break;
case 39:
var rp=this.YC,
HU=rp.bP,
acY=HU[HU.length-1];
if(ap.shiftKey)
{
var bBd=this.MX(acY)+1,
Xt=this.mR.length-1;

if(bBd<=Xt)
{
this.pG(this.mR[bBd],"shift");
}
else if(this.adr()==Xt)
{
this.zW();
this.focus("start");
}
}
else
{
var aHi=rp.aE[acY].nextSibling
.getAttribute("addr");
this.RC();
this.zW(aHi);
this.focus("start");
}
break;
case 36:
if(ap.shiftKey&&this.adr()!=-1)
{
this.pG(this.mR[0],"shift");
}
else
{
this.zW(this.mR[0]);
this.focus("start");
}
this.sP(ap);
break;
case 35:
var Xt=this.mR.length-1;

if(ap.shiftKey&&this.adr()!=Xt)
{
this.pG(this.mR[Xt],"shift");
}
else
{
this.zW();
this.focus("start");
}
this.sP(ap);
break;
case 13:
break;
default:
getTop().callBack.call(this,this.MU.aOm,[ap]);
break;


}

if(!((ap.ctrlKey||ap.metaKey)
&&(ap.keyCode==67||ap.keyCode==86||ap.keyCode==88))

&&ap.keyCode!=9)
{
this.sP(ap);
}

this.ML();
},

cAF:function(ap)
{
if((ap.keyCode==13 ||ap.keyCode==113 ))
{
var HU=this.YC.bP,
acY=HU[HU.length-1];
this.edit(acY);
this.sP(ap);
}
},

cBA:function(ap)
{
var ao=this;
this.jo.setTimeout(function()
{
ao.avM();
ao.sG.value=ao.Gh.value;
ao.adG("paste");
ao.focus("end");
}
);
},

ctw:function()
{
var ao=this;
this.jo.setTimeout(function()
{
ao.avM();
}
);
},

ggY:function(ap,Wx,ez)
{
getTop().stopPropagation(ap);
var
ao=this,
aT=ap.srcElement||ap.target,
ggj=aT.parentNode,
eH=ggj.getAttribute("addr");
eH&&ao.Pw(eH);

},

csQ:function(ap,Wx,ez)
{
var aT=ap.srcElement||ap.target;
if(aT.tagName=="IMG"
&&getTop().isObjContainTarget(Wx,ap.srcElement
||ap.target))
{
this.Pw(ez);
}
},

cIB:function(ap,Wx,ez)
{
if(getTop().isObjContainTarget(Wx,ap.srcElement||ap.target))
{
this.edit(ez);
getTop().stopPropagation(ap);
}
},

cFq:function(ap,Wx)
{
if(!this.RP
&&!this.Ze(Wx)
&&getTop().isObjContainTarget(Wx,ap.srcElement
||ap.target))
{
this.aeI(Wx,"over");
getTop().showGGoupMember&&getTop().showGGoupMember(Wx.getAttribute("addr"),Wx);
}
},

cDE:function(ap,Wx)
{
if(!this.RP
&&!this.Ze(Wx)
&&!getTop().isObjContainTarget(Wx,ap.relatedTarget
||ap.toElement)
&&getTop().isObjContainTarget(Wx,ap.srcElement
||ap.target))
{
this.aeI(Wx,"normal");
getTop().hideGGoupMember&&getTop().hideGGoupMember(Wx.getAttribute("addr"));

}
},

cyl:function(ap)
{
var aT=ap.srcElement||ap.target;
if(aT.className=="menu_item_nofun")
{
return;
}

var ao=this;
switch(aT.getAttribute("opt"))
{
case"cut":
ao.ML();
if(!getTop().gbIsIE)
{
alert(getTop().T('\u60A8\u7684\u6D4F\u89C8\u5668\u5B89\u5168\u8BBE\u7F6E\u4E0D\u5141\u8BB8\u7F16\u8F91\u5668\u81EA\u52A8\u6267\u884C\u526A\u5207\u64CD\u4F5C\uFF0C\u8BF7\u4F7F\u7528\u952E\u76D8\u5FEB\u6377\u952E($cmd$+X)\u6765\u5B8C\u6210\u3002')
.replace(ao.aIP()));
}
else
{
ao.jo.document.execCommand("Cut");
}
break;
case"copy":
ao.ML();
if(!getTop().gbIsIE)
{
alert(getTop().T('\u60A8\u7684\u6D4F\u89C8\u5668\u5B89\u5168\u8BBE\u7F6E\u4E0D\u5141\u8BB8\u7F16\u8F91\u5668\u81EA\u52A8\u6267\u884C\u590D\u5236\u64CD\u4F5C\uFF0C\u8BF7\u4F7F\u7528\u952E\u76D8\u5FEB\u6377\u952E($cmd$+C)\u6765\u5B8C\u6210\u3002')
.replace(ao.aIP()));
}
else
{
ao.jo.document.execCommand("Copy");
}
break;
case"paste":
ao.ML();
if(!getTop().gbIsIE)
{
var bCL=prompt(getTop().T([
'\u56E0\u4E3A\u4F60\u7684\u6D4F\u89C8\u5668\u7684\u5B89\u5168\u8BBE\u7F6E\u539F\u56E0\uFF0C\u672C\u7F16\u8F91\u5668\u4E0D\u80FD\u76F4\u63A5\u8BBF\u95EE\u4F60\u7684\u526A\u8D34\u677F\u5185\u5BB9\uFF0C\u4F60\u9700\u8981\u5728\u672C\u5BF9\u8BDD\u6846\u91CD\u65B0\u7C98\u8D34\u4E00\u6B21\u3002\n\n',
'\u8BF7\u4F7F\u7528\u952E\u76D8\u5FEB\u6377\u952E($cmd$+V)\u628A\u5185\u5BB9\u7C98\u8D34\u5230\u4E0B\u9762\u7684\u65B9\u6846\u91CC\uFF0C\u518D\u6309 \u786E\u5B9A\u3002'])
.replace(ao.aIP()));
if(bCL)
{
ao.sG.value=bCL;
ao.adG();
ao.focus("end");
}
}
else
{
ao.jo.document.execCommand("Paste");
}
break;
case"edit":
ao.ML();
ao.edit(aT.getAttribute("addr"));
break;
case"delete":
ao.ML();
if(ao.aja())
{
ao.avM();
}
else
{
ao.jo.document.execCommand("delete");
}
break;
case"selectall":
ao.ML();
ao.bup();
break;
}
},

cwc:function(ez,fFF)
{
var ao=this;
ao.bcB("");
ao.add(ez,false,fFF);
ao.focus();
},

aWa:function()
{
var bi=this.hG;
if(bi.setCapture)
{
bi.setCapture();
}
else
{
this.jo.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);
}
},

sP:function(ap)
{
getTop().preventDefault(ap);

},

ban:function()
{
var bi=this.hG;
if(bi.releaseCapture)
{
bi.releaseCapture();
}
else
{
this.jo.releaseEvents(Event.MOUSEMOVE|Event.MOUSEUP);
}
}
};


QMAddrInput.gN={
adW:"QMAddrInput_aTGdf$#HAsGf",
cBD:25,
cIW:40,
alo:13,
aIc:1,
rW:["cut|\u526A\u5207|$cmd$+X","copy|\u590D\u5236|$cmd$+C","paste|\u7C98\u8D34|$cmd$+V",
"edit|\u7F16\u8F91","delete|\u5220\u9664","seperater","selectall|\u5168\u9009|$cmd$+A"]
};

QMAddrInput.jL=function(qc)
{
var bP=[],
cr=qc&&qc[this.gN.adW];
for(var i in cr)
{
bP.push(cr[i]);
}
return bP;
};

QMAddrInput.YI=function(kJ)
{
var aI=kJ.jo,
adW=this.gN.adW;
if(!aI[adW])
{
aI[adW]=new aI.Object;
}
aI[adW][kJ.jJ]=kJ;
};


QMAddrInput.cD=
{
fXy:getTop().TE([
'<div id="qmAddrInputFold" class="smart_contact_info_wrap" >',
'<span class="smart_contact_info">\u5171<font id="qmAddrInputFoldCnt">$addrCnt$</font>\u4E2A</span>',
'<span class="smart_contact_gd smart_contact_gd1"></span><span class="smart_contact_gd smart_contact_gd2"></span><span class="smart_contact_gd smart_contact_gd3"></span>',
'</div>'
]),
bfA:getTop().TE(
[
'<div style="position:absolute;color:#A0A0A0;padding-top:1px;',
'$@$if(!$defaulttext$)$@$',
'display:none;',
'$@$endif$@$',
'">$defaulttext$</div>',

'<div class="$css$" style="float:left;border:none;overflow:hidden;width:$width$px;">',





'<input type="input" class="js_input" style="border:none;outline:none;-webkit-appearance:none;width:100%;ime-mode:active" ime-mode="disabled" $accesskey$/>',

'<div style="width:1px;height:1px;overflow:auto;*overflow:hidden;white-space:nowrap;border:none;margin:0;padding:0;"></div>',
'</div>',

'<div style="clear:both;border:none;margin:0;padding:0;" unselectable="on">',
'<input type="text" style="position:absolute;border:none;padding:0;width:10px;left:-9999px;top:-9999px;" tabindex=-1 >',

'</div>'
]
),
cIg:getTop().T([
'<div style="width:8px;height:8px;*width:12px;*height:12px;',
'font-size:1px;border:2px solid #7B7D84;position:absolute;top:18px;left:9px;"></div>',


'<div style="background:#fff;width:11px;height:11px;font:1px;opacity:0;filter:alpha(opacity:0);"></div>'
]),
cGu:getTop().T([
'<table style="position:absolute;z-index:999;left:-200px;top:0;"',
' cellspacing="0" cellpadding="0" onmousedown="return false;" unselectable="on">',
'<tr><td>',
'<div style="border:1px solid #ACA899;width:$width$px;padding:2px;background:#fff;">',
'$items$',
'</div>',
'</td><td style="height:100%;filter:alpha(opacity=50);opacity:0.5;">',
'<div style="margin-top:4px;border-left:2px solid black;height:100%;"></div>',
'</td></tr>',
'<tr><td style="filter:alpha(opacity=50);opacity:0.5;">',
'<div style="margin-left:4px;border-top:2px solid black;height:2px;"></div>',
'</td><td style="filter:alpha(opacity=50);opacity:0.5;">',
'<div style="margin-left:0px;border-top:2px solid black;height:2px;"></div>',
'</td></tr>',
'</table>'
]),
cEX:getTop().T([
'<div class="menu_item" onmouseover="',
'if (this.className == \x27menu_item\x27)',
'{',
'this.className = \x27menu_item_high\x27;',
'}',
'" onmouseout="',
'if (this.className == \x27menu_item_high\x27)',
'{',
'this.className = \x27menu_item\x27;',
'}',
'" style="padding:0 20px;line-height:19px;" unselectable="on" opt="$operate$">',
'<div style="float:right;" unselectable="on" opt="$operate$">$shortcut$</div>',
'$name$',
'</div>'
]),
cCc:getTop().T([
'<div style="font-size:1px;height:7px;overflow:hidden;" unselectable="on">',
'<div style="border-top:1px solid #ACA899;margin-top:3px;"></div>',
'</div>'
]),
bBS:getTop().TE([
'$@$if($nick$)$@$"$nick$"<$@$endif$@$',
'$addr$',
'$@$if($nick$)$@$>$@$endif$@$',
'$splitchar$'
]),
bBW:getTop().T([
'$alias$',
'$@$if($domain$)$@$',
'<span class="domain" unselectable="on" addr="$addr$">@$domain$</span>',

'$@$endif$@$',
])
};

QMAddrInput.cD.aWE=getTop().TE([
'<div class="',
'$@$if(!$isvalid$)$@$',
'$css.error$',
'$@$else if($isdomainerr$)$@$',
'$css.dmerror$',
'$@$else$@$',
'$css.normal$',
'$@$endif$@$',
'" style="float:left;white-space:nowrap;" ',
'$@$if(!$isvalid$)$@$',
'title="$@$sec errmsg$@$$@$if(!$addrError$)$@$',
'\u8BE5\u5730\u5740\u683C\u5F0F\u6709\u9519\u8BEF \uFF0C\u8BF7\u53CC\u51FB\u4FEE\u6539',
'$@$else$@$',
'\u8BE5\u90AE\u4EF6\u5730\u5740\u4E0D\u5B58\u5728 \uFF0C\u8BF7\u53CC\u51FB\u4FEE\u6539',
'$@$endif$@$$@$endsec$@$ "',
'$@$else if($isdomainerr$)$@$',
'title="$@$sec errdomainmsg$@$\u8BE5\u5730\u5740\u7684\u57DF\u540D\u53EF\u80FD\u4E0D\u5B58\u5728\uFF0C\u8BF7\u53CC\u51FB\u4FEE\u6539$@$endsec$@$" ',
'$@$else$@$',
'title="$addr$"',
'$@$endif$@$',
'addr="$addr$" unselectable="on">',
'$@$if($nick$)$@$',
'<b unselectable="on" addr="$addr$">$nick$</b>',
'<span unselectable="on" addr="$addr$"',
'$@$if($dispmode$=="onlynick")$@$',
' style="display:none";',
'$@$endif$@$',
'>&lt;',
QMAddrInput.cD.bBW,
'&gt;</span>',
'$@$else$@$',
'<b unselectable="on" addr="$addr$">',
QMAddrInput.cD.bBW,
'</b>',
'$@$endif$@$',
'<span class="semicolon">',
'$splitchar$',
'</span>',
'<a href="javascript:;" class="addr_del" name="del"></a>',
'</div>'
]);

QMAddrInput.cmY=function()
{
var aq=getTop(),
bt="IS_SHOW_TOADDR_TIP",
eF=aq.getGlobalVarValue(bt);

if(typeof eF=="undefined")
{
aq.setGlobalVarValue(bt,"loading")
aq.QMAjax.send("/cgi-bin/readtemplate",
{
content:aq.T("sid=$sid$&t=tip&s=isshowtip&tipid=29").replace({sid:aq.getSid()}),
onload:function(bh,bO)
{
aq.setGlobalVarValue(bt,bO)
}
}
);
}

return aq.gnIEVer!=7&&eF=="true";
};

QMAddrInput.ajs=function()
{
getTop().ossLog("realtime","all","stat=tips&type=close&tipid=29");
getTop().setGlobalVarValue("IS_SHOW_TOADDR_TIP","false");
};

function qmaddrinput_js(){}
