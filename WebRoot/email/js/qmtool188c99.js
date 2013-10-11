


var ddf=new Date().getTime();







var	dE,eS;


















var qmAnimation=function(jy)
{
this.QL=null;
this.Fy=[];
this.blp={};
this.Pk(jy,true);
};

eS=qmAnimation;
dE=eS.prototype;








dE.play=function(jy)
{
if(typeof jy=="function")
{
if(this.QL)
{
this.Fy.push(jy);
}
else
{
this.oJ(jy(),true);
}
}
else
{
this.stop();
this.oJ(jy);
}
};

dE.stop=function()
{
var dj=this;
var bkS=this.Fy;
this.Fy=[];

this.JU();

E(bkS,function(bqN)
{
var aaT=bqN();
if(aaT)
{
dj.Pk(aaT);
if(typeof(dj.Px)=="function")
{
dj.Px.call(dj,dj.aao,true);
}
}
}
);
};













dE.updateStyle=function(py,aP,afv)
{
var aGm=this.bhU||(this.bhU={}),
di=aP.style;

if(afv)
{
aGm[py]=di.cssText;
for(var i in afv)
{
di[i]=afv[i];
}
}
else
{
di.cssText=aGm[py];
}
};



dE.Xg=function(aFI)
{
var aFG=true,
aES=now();

if(aFI||(aES>this.aFd))
{
this.akK.clearInterval(this.QL);

this.aFd=0;
this.QL=null;

if(typeof(this.Px)=="function")
{
this.Px.call(this,this.boe,aFI);
}

if(this.Fy.length>0)
{
this.oJ(this.Fy.shift()(),true);
}

aFG=false;
}
else
{
var aGe=aES-this.aGn;
if(typeof(this.akJ)=="function")
{
this.akJ.call(this,this.aEC(aGe,this.alx,this.bqI,this.aav),
aGe/this.aav);
}
}
return aFG;
};

dE.oJ=function(jy,bpd)
{
if(bpd&&!jy)
{
if(this.Fy.length>0)
{
this.oJ(this.Fy.shift()(),true);
}
return;
}

this.Pk(jy);

this.aGn=now();
this.aFd=this.aGn+this.aav;

if(this.Xg())
{
var dj=this;
this.QL=this.akK.setInterval(function()
{
dj.Xg();
},
13
);
}
};

dE.Pk=function(jy,bnW)
{
if(jy)
{
var Cx=this.blp;
var tx=bnW?Cx:this;
var aDj=this.constructor;

tx.akK=jy.win||Cx.akK||window;

tx.alx=typeof(jy.from)=="number"?jy.from:Cx.alx;
tx.aao=typeof(jy.to)=="number"?jy.to:Cx.aao;
tx.boe=typeof(jy.completeto)=="number"?jy.completeto:tx.aao;
tx.bqI=tx.aao-tx.alx;

tx.aav={fast:200,slow:600}[jy.speed]||jy.speed||Cx.aav;

var aai=aDj.aGd[jy.tween]||Cx.aEC||aDj.aGd.Linear;
tx.aEC=typeof(aai)=="function"?aai:(aai[jy.easing]||aai.easeIn);

tx.akJ=jy.onaction||Cx.akJ;
tx.Px=jy.oncomplete||Cx.Px;
}
};

dE.JU=function()
{
if(!this.QL)
return false;

return this.Xg(true);
};





















eS.play=function(au,ar)
{
var ao=this,
eu=ao.gN,
aS=eu.aFv,
Kp=now()+Math.random(),
aQ=extend({},aS,ar),
aU,aI,cr,lz;

try
{
aU=au.ownerDocument;
aI=aU.defaultView||aU.parentWindow;
cr=aI[eu.ZU];
}
catch(bj)
{
return au;
}
try
{
var ao=this,
eu=ao.gN,
aS=eu.aFv,
Kp=now()+Math.random(),
aQ=extend({},aS,ar),
aU=au.ownerDocument,
aI=aU.defaultView||aU.parentWindow,
cr=aI[eu.ZU],
lz;

}
catch(e)
{
callBack.call(au,ar.oncomplete,[ar.to,false,false]);
return au;
}

if(!cr)
{
cr=aI[eu.ZU]={};
}

function aFS(De,LQ)
{
au.setAttribute(eu.Qe,De+"|"+LQ);
}

function aCY(De)
{
return(au.getAttribute(eu.Qe)||"").split("|")[0];
}

function aDt(bmu)
{
au.setAttribute(eu.akS,bmu);
}

function aDJ()
{
return au.getAttribute(eu.akS)||"";
}

function oJ(De,wI)
{
var aDH=cr[De],
QJ=aDH[eu.aFh],
wT;

aFS(De,QJ.actiontype);

if(typeof QJ.onready=="function")
{
wT=QJ.onready.call(au,wI);
}


if(wI||wT==false)
{
var iV=wT&&wT.to;
QJ.oncomplete(
typeof iV=="number"?iV:QJ.to,
wI,
wT==false
);
}
else
{

if(wT)
{
wT.onaction=wT.oncomplete=null;
}

aDH.play(wT||{});
}
}

aQ.onaction=function(cM,hx)
{
ar.onaction.call(au,cM,hx);
};

aQ.oncomplete=function(cM,wI,alD)
{
aFS("",ar.actiontype);
delete cr[Kp];

ar.oncomplete.call(au,cM,wI,alD);

var aka=aDJ().split("|"),
akt=aka.shift();


if(akt)
{
aDt(aka.join("|"));

if(aka.length==0)
{
oJ(akt);
}
else
{
oJ(akt,wI);
}
}
};

aQ.win=aI;
lz=cr[Kp]=new ao(aQ);
lz[eu.aFh]=aQ;

if(aCY())
{
var aEI=aDJ();
aDt(aEI+(aEI?"|":"")+Kp);

if(aQ.type!="wait")
{

var ZH=cr[aCY()];
ZH&&ZH.stop();
}
}
else
{
oJ(Kp);
}

return au;
};






eS.stop=function(au)
{
var ao=this,
eu=ao.gN,
aU,aI,cr,ajT;

try
{
aU=au&&au.ownerDocument;
aI=aU.defaultView||aU.parentWindow;
cr=aI[eu.ZU];
ajT=(au.getAttribute(eu.Qe)||"").split("|")[0];

if(ajT)
{
au.setAttribute(eu.akS,"");
cr[ajT].stop();
}
}
catch(bj)
{
}

return au;
};






eS.isPlaying=function(au)
{
return!!au.getAttribute(this.gN.Qe);
};






eS.getActionType=function(au)
{
return(au.getAttribute(this.gN.Qe)||"").split("|").pop();
};






















eS.aFW=function(au,LQ,ar)
{
var mJ=gbIsIE?1:0,
aQ=ar||{},
kK=aQ.speed,
kE=aQ.from,
iV=aQ.to,
aaq=aQ.durlimit||0,
boX=aQ.basespeed||1.8,
bpy=aQ.unilimit,
aEq=typeof kK=="undefined"||kK=="uniform",
aks=false,bhJ;

function alB()
{
var oZ=arguments,
gp=aQ["on"+oZ[0]];
if(typeof gp=="function")
{
return gp.call(oZ[1],oZ[2]);
}
}

function aEt(aw)
{
return aw.scrollHeight-(gbIsIE
?0:parseInt(getStyle(aw,"paddingTop"))
+parseInt(getStyle(aw,"paddingBottom")));
}

return qmAnimation.play(au,extend({},aQ,
{
actiontype:LQ,
speed:aEq?"fast":kK,
to:mJ,
onready:function(wI)
{
if(!wI)
{
var di=this.style,
pd,oY,Qh,rT;

aks=false;
rT=alB("ready",this)||{};
Qh=rT.speed;
pd=typeof rT.from=="number"
?rT.from:kE;
oY=typeof rT.to=="number"
?rT.to:iV;

if(LQ=="expand")
{
if(typeof pd!="number"||isNaN(pd))
{
var cN=parseInt(di.height);
if(isNaN(cN))
{
pd=di.height=mJ;
}
else
{
pd=cN;
}
}
else
{
di.height=pd;
}
}
else
{
if(typeof oY!="number"||isNaN(oY)||oY<mJ)
{
oY=mJ;
}
}
bhJ=di.overflow;
di.overflow="hidden";
di.visibility="visible";
if(di.display=="none")
{
di.display="";
}


if(gbIsIE)
{
var mE=this.scrollHeight;
}

if(LQ=="expand")
{
if(typeof oY!="number"||isNaN(oY))
{
oY=aEt(this);
aks=true;
}
}
else
{
if(typeof pd!="number"||isNaN(pd))
{
var cN=parseInt(di.height);
pd=isNaN(cN)
?aEt(this):cN;
}
}

var hc=oY-pd,
bmx=oY;
if(aaq>0&&Math.abs(hc)>aaq)
{
if(hc>0)
{
oY=pd+aaq;
}
else
{
pd=oY+aaq;
}
}

if(!Qh)
{
if(aEq)
{
var aFp=Math.abs(pd-oY),
ajK=rT.unilimit||bpy;
Qh=(rT.basespeed||boX)
*(ajK
?Math.min(Math.max(aFp,ajK[0]),ajK[1])
:aFp);
}
else
{
Qh=kK;
}
}

return oY==pd
?false
:{
from:Math.max(pd,mJ),
to:Math.max(oY,mJ),
completeto:bmx,
speed:Qh
};
}
},
onaction:function(cM,hx)
{
this.style.height=cM+"px";
alB("action",this,hx);
},
oncomplete:function(cM,wI,alD)
{
if(!wI)
{
if(cM==mJ)
{
show(this,false);
}


this.style.height=aks?"auto":(cM+"px");
this.style.overflow=bhJ;
alB("complete",this,cM,alD);
}
}
}
));
};






eS.expand=function(au,ar)
{
return this.aFW(au,"expand",ar);
};







eS.fold=function(au,ar)
{
return this.aFW(au,"fold",ar);
};

eS.gN={
ZU:"QMaNiMatiON_CachE",
aFh:"sTatiC_Play_Conf",
Qe:"QMaNiMatiON_PlaY",
akS:"QMaNiMatiON_WaiT",
aFv:{
from:1,
to:100,
speed:"fast"
}
};

eS.aGd=
{


Linear:function(t,b,c,d)
{
return c*t/d+b;
},
Sine:
{
easeIn:function(t,b,c,d)
{
return-c*Math.cos(t/d*(Math.PI/2))+c+b;
},
easeOut:function(t,b,c,d)
{
return c*Math.sin(t/d*(Math.PI/2))+b;
},
easeInOut:function(t,b,c,d){
return-c/2*(Math.cos(Math.PI*t/d)-1)+b;
}
},
Cubic:
{
easeIn:function(t,b,c,d)
{
return c*(t/=d)*t*t+b;
},
easeOut:function(t,b,c,d)
{
return c*((t=t/d-1)*t*t+1)+b;
},
easeInOut:function(t,b,c,d)
{
if((t/=d/2)<1)return c/2*t*t*t+b;
return c/2*((t-=2)*t*t+2)+b;
}
},
none:false
};





























var qmTab=function(fR)
{
this.adi(fR);
this.aAR();
};

eS=qmTab;
dE=eS.prototype;



dE.change=function(Gv)
{
var MZ=this.aHj,
hP=this.le,
MJ=hP.afM,
vo=MZ[Gv];

if(!vo||!vo.pC)
return false;

if(MJ==Gv)
return true;

if(MJ)
{
var RW=MZ[MJ].nN;
var ahc=vo.nN;

setClass(MZ[MJ].gj,this.Ga.normal);

if(this.MS)
{
this.MS.stop();

function azU(cM)
{
var jC=cM/100;
setOpacity(RW,jC);
setOpacity(ahc,1-jC);
}

var aKV={
display:"",
position:"absolute",
width:getStyle(RW,"width"),
height:getStyle(RW,"height"),
zIndex:1
};

this.MS.updateStyle("pre",RW,aKV);
this.MS.updateStyle("cur",ahc,(aKV.zIndex=2)&&aKV);

var cin=[];
var bji=this.uL.cbZ;
this.MS.play(
{
onaction:function(lR,dsA)
{
azU(lR);
},
oncomplete:function(lR,aNh)
{
azU(lR);

this.updateStyle("pre",RW);
this.updateStyle("cur",ahc);

show(RW,false);
show(ahc,true);

if(typeof(bji)=="function")
bji(Gv,MJ);

}
}
);
}
else
{
show(RW,false);
show(ahc,true);
}
}
else{
show(vo.nN,true);
}

setClass(vo.gj,this.Ga.select);

hP.afM=Gv;

if(typeof(this.uL.nw)=="function")
this.uL.nw(Gv,MJ);

return true;
};

dE.enable=function(Gv,aVZ){
var vo=this.aHj[Gv];
if(!vo)
return false;

setClass(vo.gj,this.Ga[
(vo.pC=aVZ||typeof(aVZ)=="undefined"?true:false)?
"normal":"disable"]);

return true;
};

dE.getSelectedTabId=function(){
return this.le.afM;
};



dE.adi=function(fR){
var MZ=this.aHj={};
for(var i in fR.tab)
MZ[i]={
qy:i,
gj:fR.tab[i].obj,
nN:fR.tab[i].container,
pC:true
};

this.Ga=fR.style;
this.uL={
nw:fR.onchange,
cbZ:fR.onchangeend
};
this.le={
afM:null
};

if(fR.isEnableAnimation!=false)
{
this.MS=new qmAnimation({
win:fR.win,
from:100,
to:0,
speed:400,
tween:"Sine",
easing:"easeOut"
});
}
};

dE.aAR=function(){
var dj=this;
var MZ=this.aHj;

for(var i in MZ){
(function(){
var iM=MZ[i];
show(iM.nN,false);








iM.gj.onclick=function()
{
dj.change(iM.qy);
}
iM.gj.onmouseover=function(nD){
if(iM.pC&&dj.le.afM!=iM.qy)
setClass(iM.gj,dj.Ga.over);
}






iM.gj.onmouseout=function(nD){
try{
if(iM.pC&&dj.le.afM!=iM.qy&&
!isObjContainTarget(iM.gj,nD.relatedTarget||nD.toElement))
setClass(iM.gj,dj.Ga.normal);
}
catch(e)
{}
}






})();
}
};









































var qmSimpleThumb=function(fR){
this.adi(fR);
this.aAR();
};

eS=qmSimpleThumb;
dE=eS.prototype;



dE.enable=function(){
var hP=this.le;
if(hP.pC==true)
return;

hP.pC=true;
if(hP.pA==-1)
return this.goPage(1);

this.aKk();
};

dE.disable=function(){
var hP=this.le;
if(hP.pC==false)
return;

hP.pC=false;
this.aKk();
};

dE.getDataLength=function(){
return this.Sd.length;
};

dE.getId=function(){
return this.va;
};

dE.getSelectedData=function(){
var Nu=this.le.Nu;

return Nu<0?null:this.Sd[Nu];
};

dE.goPage=function(Np){
var hP=this.le,
Xa=hP.pA;
if(hP.pC&&Np>=1&&Np<=hP.Mz){
hP.pA=Np;

this.aKk();
if(this.bTK())
this.bhh();
this.bOV();

callBack.call(this,this.uL.bWC,[Np,Xa]);


return true;
}
return false;
};

dE.select=function(Cb){
var tQ=this.Sd,
hP=this.le;

Cb=parseInt(Cb);

if(Cb<0)
{

}
else if(isNaN(Cb)||((Cb=Cb%tQ.length)==hP.Nu))
{
this.uL.Cp.call(this,Cb,hP.asF);
return false;
}

hP.asF=hP.Nu;
hP.Nu=Cb;

this.bhh();

if(typeof(this.uL.Cp)=="function")
{
this.uL.Cp.call(this,Cb,hP.asF);
}

return true;
};

dE.onmouseover=function(au)
{
if(typeof(this.uL.aDP)=="function")
{
this.uL.aDP.call(this,au);
}
return true;
},

dE.onmouseout=function(au)
{
if(typeof(this.uL.aEN)=="function")
{
this.uL.aEN.call(this,au);
}
return true;
},

dE.setExternInfo=function(tW,cbI)
{
var eC=parseInt(tW),
aE=this.Sd,
aHq=this.agK.RH,
hX=aE.length-1;

if(!isNaN(eC)&&eC>=0&&eC<=hX)
{
var aAf=Math.floor((hX-eC)/aHq),
cR=hX-eC-aAf*aHq,
bq=this.FZ.aaa[aAf].firstChild.childNodes;

if(cR<0||cR>=bq.length)
{
return;
}

bq[cR].lastChild.innerHTML=cbI;
}
};

dE.update=function(afL){
this.bRB(afL);
this.bXj();
this.goPage(this.le.pA=Math.min(this.le.pA,this.le.Mz));
};



dE.bZQ=function(){
var CW=[];
var aax=qmSimpleThumb.cD.aBh;
var hP=this.le;
var bOJ=this.Ga.thumb.container;

for(var i=0,cQ=Math.max(hP.Mz,1);i<cQ;i++)
CW.push(aax.replace({border:bOJ}));

return qmSimpleThumb.cD.cbY.replace({
container:CW.join("")
});
};

dE.aGJ=function(anp,bSD){
return qmSimpleThumb.cD.alR.replace({
images_path:getPath("image"),
msg:anp,
dispload:bSD?"":"none"
});
};

dE.caR=function(Np){
var MG=this.Sd;
var Ru=MG.length;

if(Ru==0)
return this.aGJ("\u6682\u65E0\u6570\u636E");

var bhR=this.agK.RH;
var bek=Np*bhR;
var SH=bek-bhR;
var bYR=bek-1;



if(MG[SH].indexOf)
{
if(MG[SH].indexOf("loading")==0)
{
return this.aGJ(MG[SH].substr(7)||"\u6570\u636E\u52A0\u8F7D\u4E2D...",true);
}
else if(MG[SH].indexOf("custom")==0)
{
return this.aGJ(MG[SH].substr(6));
}
}

var CW=[];
var aax=qmSimpleThumb.cD.blt;
var pV=this.Ga.thumb;
var Nh={
img:pV.img,
normal:pV.normal,
over:pV.over,
images_path:this.agK.bYp
};

if(MG[SH].thumb.indexOf("http")==0)
{

Nh.images_path="";
}

for(var i=SH,cQ=Math.min(Ru--,bYR+1);i<cQ;i++){
var bdg=Ru-i;
Nh.value=bdg;
Nh.url=MG[bdg].thumb;
CW.push(aax.replace(Nh));
}

return CW.join("");
};

dE.adi=function(fR){
this.va=fR.id||T("qmSimpleThumb_$date$").replace({
date:now()
});
this.agK={
bYp:fR.imgpath,
RH:fR.numperpage||8
};
this.FZ=fR.dom;
this.Ga=fR.style;
this.uL={
bWC:fR.onchangepage,
Cp:fR.onselect,
aDP:fR.onmouseover,
aEN:fR.onmouseout
};
this.le={
pA:-1,
Mz:0,
Nu:-1,
asF:-1,
pC:null
};

var nN=this.FZ.container;
this.MS=new qmAnimation({
win:fR.win,
speed:"slow",
tween:"Cubic",
easing:"easeOut",
onaction:function(lR){
nN.scrollLeft=lR;
},
oncomplete:function(lR,aNh){
if(!aNh)
nN.scrollLeft=lR;
}
});

this.update(fR.data);
this[fR.enabled?"enable":"disable"]();
};

dE.bXj=function(){
var nN=this.FZ.container;
nN.innerHTML=this.bZQ();
this.FZ.aaa=GelTags("td",nN);
};

dE.aKk=function(){
var fX=this.FZ;
var hP=this.le;
var pV=this.Ga.btn;
var pC=hP.pC;
var pA=hP.pA;
var Mz=hP.Mz;

if(fX.pagetxt&&pC)
fX.pagetxt.innerHTML=qmSimpleThumb.cD.baO.replace({
page:pA,
total:Mz
});

if(fX.prevbtn)
{



setClass(fX.prevbtn,!pC||pA==1?
pV.disable:pV.normal);

}

if(fX.nextbtn)
{
setClass(fX.nextbtn,!pC||pA==Mz?
pV.disable:pV.normal);


}
};

dE.bTK=function(){
var pA=this.le.pA;
if(pA>0){
var asS=this.FZ.aaa[pA-1].firstChild;
if(!asS.innerHTML){
asS.innerHTML=this.caR(pA);
return true;
}
}
return false;
};

dE.bhh=function(){
var pV=this.Ga.thumb;
var hP=this.le;

var Ru=this.Sd.length-1;
var RH=this.agK.RH;
var aaa=this.FZ.aaa;

function bhC(asZ,bem){
if(asZ<0||asZ>Ru)
return;

var bif=Math.floor((Ru-asZ)/RH);
var abK=Ru-asZ-bif*RH;

var Ws=aaa[bif].firstChild.childNodes;
if(abK<0||abK>=Ws.length)
return;

var gj=Ws[abK];
gj.setAttribute("select",bem&&pV.select&&pV.select!=pV.over
&&pV.select!=pV.normal?"true":"false");
setClass(gj,bem?pV.select:pV.normal);
};

bhC(hP.Nu,true);
bhC(hP.asF,false);
};

dE.aAR=function(){
var dj=this;
var fX=this.FZ;
var hP=this.le;

addEvent(fX.prevbtn,"click",function(ap){
preventDefault(ap);
dj.goPage(hP.pA-1);
});

addEvent(fX.nextbtn,"click",function(ap){
preventDefault(ap);
dj.goPage(hP.pA+1);
});

addEvent(fX.container,"drag",preventDefault);

addEvent(fX.container,"click",function(nD){
preventDefault(nD);
var sK=nD.srcElement||nD.target;
var Nh=sK.getAttribute("param");
if(Nh)
dj.select(Nh);
});

addEvent(fX.container,"mouseover",function(ap)
{

dj.onmouseover(ap);
});
addEvent(fX.container,"mouseout",function(ap)
{

dj.onmouseout(ap);
});
};

dE.bOV=function(){
var pA=this.le.pA;
if(pA>0){
var nN=this.FZ.container;
var asS=this.FZ.aaa[pA-1];


this.MS.stop();
this.MS.play({
from:nN.scrollLeft,
to:asS.offsetLeft
});










}
};

dE.bRB=function(afL){
this.Sd=afL;
this.le.Mz=1+parseInt((this.Sd.length-1)/this.agK.RH);
};


eS.cD={};

eS.cD.cbY=T([
'<table cellpadding="0" cellspacing="0" border="0">',
'<tr>$container$</tr>',
'</table>'
]);

eS.cD.aBh=T([
'<td><div class="$border$"></div></td>'
]);

eS.cD.dNV=T([
'<div class="$border$">$content$</div>'
]);

eS.cD.blt=T([
'<div class="$normal$" un="item" param="$value$"',
'onmouseover="',
'this.getAttribute(\x27select\x27)!=\x27true\x27&&getTop().setClass(this,\x27$over$\x27);',
'" onmouseout="',
'this.getAttribute(\x27select\x27)!=\x27true\x27&&getTop().setClass(this,\x27$normal$\x27);',
'">',
'<img class="$img$" src="$images_path$$url$" param="$value$"/>',

'</div>'
]);

eS.cD.alR=T([
'<div style="text-align:center;">',
'<img src="$images_path$ico_loading1104474.gif" style="display:$dispload$;"/>',
'$msg$',
'</div>'
]);

eS.cD.baO=T([
'$page$ / $total$'
]);
































































var qmGroupThumb=function(fR){
this.adi(fR);
};

eS=qmGroupThumb;
dE=eS.prototype;



dE.changeGroup=function(CY){
this.ZR.change(CY);
};

dE.enable=function(){
if(this.le.pC==true)
return false;

this.le.pC=true;

var acF=this.ZR.getSelectedTabId();
if(acF)
this.Gn[acF].enable();
};

dE.disable=function(){
if(this.le.pC==false)
return false;

this.le.pC=false;

var acF=this.ZR.getSelectedTabId();
if(acF)
this.Gn[acF].disable();
};

dE.getDataLength=function(CY){
return this.Gn[CY].getDataLength();
};

dE.getId=function(){
return this.va;
};

dE.getSelectedData=function(){
var xe=this.le.xe;
return!xe?null:this.Gn[xe].getSelectedData();
};

dE.goPage=function(Np){
var LU=this.Gn[this.ZR.getSelectedTabId()];
if(LU)
LU.goPage(Np);
};

dE.select=function(Cb,CY){
var LU=this.Gn[CY||this.ZR.getSelectedTabId()];
return LU?LU.select(Cb):false;
};

dE.update=function(afL,CY){
var LU=this.Gn[CY];
LU&&LU.update(afL);
};



dE.adi=function(fR){
this.va=fR.id||T("qmSimpleThumb_$date$").replace({
date:now()
});

this.uL={
Cp:fR.onselect,
nw:fR.onchange
};

this.le={
xe:null,
ME:-1,
pC:null
};

var dj=this;
var bhP=this.Gn={};
var beG={};
var beY=fR.group;
for(var aiO in beY){
var aJH=beY[aiO];
beG[aiO]=aJH.dom;
bhP[aiO]=new qmSimpleThumb({
id:aiO,
win:fR.win,
imgpath:fR.imgpath,
numperPage:fR.numperpage||8,
enabled:false,
dom:{
container:aJH.dom.container,
prevbtn:fR.dom.prevbtn,
nextbtn:fR.dom.nextbtn,
pagetxt:fR.dom.pagetxt
},
style:{
thumb:fR.style.thumb,
btn:fR.style.btn
},
data:aJH.data,
onselect:function(acN,aQi){
dj.bYI(this,acN,aQi);
}
});
}

this.ZR=new qmTab({
win:fR.win,
tab:beG,
style:fR.style.group,
onchange:function(Gv,MJ){
dj.bYd(Gv,MJ);
}
});

this.ZR.change(fR.defgroupid||aiO);
this[fR.enabled==false?"disable":"enable"]();
};

dE.bYd=function(CY,aEu){
var ao=this;
if(!ao.le.pC)
return;


callBack.call(ao,ao.uL.nw,[CY,aEu]);

if(aEu)
ao.Gn[aEu].disable();
ao.Gn[CY].enable();
};

dE.bYI=function(aLf,acN,aQi){
var hP=this.le;
var xe=hP.xe;
var ME=hP.ME;

if(acN!=-1){
hP.xe=aLf.getId();
hP.ME=acN;

var bdh=this.Gn[xe];
if(acN!=-1&&xe!=aLf.getId()&&bdh)
bdh.select(-1);
}
else if(xe==aLf.getId()){

hP.ME=-1;
}

if((xe!=hP.xe||ME!=hP.ME)&&
typeof(this.uL.Cp)=="function")
this.uL.Cp.call(this,
{
groupid:hP.xe,
thumbidx:hP.ME
},
{
groupid:xe,
thumbidx:ME
});
};





qmActivex=function(){
this.va="qmActiveX_"+(new Date()).valueOf();
this.aJP={};
this.Gk=null;
};

eS=qmActivex;
dE=eS.prototype;

dE.screenSnap=function(bkp){
var yP=this.ZW("screensnap");
if(!yP)
return false;

try{
yP.dJl=(getDomain()=="foxmail.com")?1:0;
}
catch(e){
}

var anu=function(kI){
return function(){
if(typeof(bkp)=="function")
bkp(kI);
};
};

yP.OnCaptureFinished=anu(true);
yP.OnCaptureCanceled=anu(false);

yP.DoCapture();

return true;
};














dE.upload=function(bfN){
this.stopUpload();
this.Gk=bfN;

var kR=bfN.config;
if(!kR||!kR.url)
throw{message:"qmActivex:no upload cgi url"};


kR.mode=kR.mode||"download";
kR.from=kR.from||"";
kR.scale=kR.scale||"";
kR.widthlimit=kR.widthlimit||"";
kR.heightlimit=kR.heightlimit||"";

return this.bSH()?true:this.cca();
};

dE.stopUpload=function(){
var iB=this.Gk;
if(!iB)
return;

this.Gk=null;
if(iB.aJh=="form"){
removeSelf(iB.ZG);
}
else if(iB.aJh=="activex"){
if(iB.zX!=90)
this.ZW("uploader").StopUpload();
}
};

dE.hasClipBoardImage=function(){
var yP=this.ZW("screensnap");
return yP?yP.IsClipBoardImage:false;
};

dE.checkImageType=function(ccA,bgj){
var cah=ccA.toLowerCase();
var aEU="gif|jpg|jpeg|bmp|png".split("|");
for(var i=aEU.length-1;i>=0;i--)
if(cah.indexOf(aEU[i])!=-1)
break;

if(-1==i){
var Eo=T("\u53EA\u5141\u8BB8\u4E0A\u4F20 <b>#type#</b> \u683C\u5F0F\u7684\u56FE\u7247","#").replace({
type:aEU
});
if(bgj=="showerr")
showError(Eo);
return bgj=="returnerr"?Eo:false;
}

return true;
};

dE.ZW=function(PN)
{
var bdP={
"screensnap":0,
"uploader":2
}[PN];
if(!detectActiveX(bdP,1))
return null;

if(!this.aJP[PN])
this.aJP[PN]=createActiveX(bdP);

return this.aJP[PN];
};

dE.bVM=function()
{
var yP=this.ZW("screensnap");
return yP&&yP.IsClipBoardImage?yP.SaveClipBoardBmpToFile(1):null;
};

dE.bSH=function()
{
var oM=this.ZW("uploader");


if(!oM)
{
return false;
}

var iB=this.Gk;
if(iB.fileCtrl&&(getTop().gnIEVer>6||!getTop().gbIsIE))
{

return false;
}

iB.screenImg=this.bVM();
if(!iB.fileCtrl&&!iB.screenImg)
{
iB.config.url='';
return false;
}


iB.aJh="activex";
iB.zX=0;
iB.onupload.call(this,"start");

oM.StopUpload();
oM.ClearHeaders();
oM.ClearFormItems();

var kR=iB.config;

if(kR.url.indexOf("http")!=0)
{
oM.URL=[location.protocol,"//",location.host,kR.url].join("");
}
else
{
oM.URL=kR.url;
}

var dj=this;
oM.OnEvent=function(po,aAK,acf,azr,aZT){
dj.caI(po,aAK,acf,azr,aZT);
}

oM.AddHeader("Cookie",document.cookie);

oM.AddFormItem("sid",0,0,getSid());
oM.AddFormItem("mode",0,0,kR.mode);
oM.AddFormItem("from",0,0,iB.fileCtrl?kR.from:"snapscreen");
oM.AddFormItem("scale",0,0,kR.scale);
oM.AddFormItem("widthlimit",0,0,kR.widthlimit||0);
oM.AddFormItem("heightlimit",0,0,kR.heightlimit||0);


if(iB.fileCtrl){
oM.AddFormItemObject(iB.fileCtrl);
}
else{
oM.AddFormItem("UploadFile",1,4,iB.screenImg);
}

oM.StartUpload();

return true;
};

dE.cca=function(){
var iB=this.Gk;
if(!iB.fileCtrl)
return false;

for(var uS=iB.fileCtrl.parentNode;uS&&uS.tagName!="FORM"&&uS.tagName!="BODY";)
uS=uS.parentNode;

if(!uS||uS.tagName!="FORM")
return false;

iB.aJh="form";
iB.onupload.call(this,"start");

var JQ=iB.window||window;
var aIB=this.va;

JQ[aIB+"Instance"]=this;
JQ.qmActiveXDoUploadFinish=function(cbx){
var gj=JQ[cbx.id+"Instance"];
if(gj)
gj.bZf();
};

if(iB.ZG)
{
dKa(iB.ZG);
}

createBlankIframe(JQ,{
id:aIB,
virtual:false,
onload:bZp
});
var biF=false;
function bZp(ax)
{
var kd=this;

if(!biF)
{
iB.ZG=kd;

var kR=iB.config||{};
uS.action=kR.url||["/cgi-bin/upload?sid=",getTop.getSid()].join("");
uS.target=aIB;

uS.sid.value=getSid();
uS.mode.value=kR.mode||"download";
uS.scale.value=kR.scale||"";
uS.widthlimit.value=kR.widthlimit||"";
uS.heightlimit.value=kR.heightlimit||"";
uS.submit();
return biF=true;
}
ax.qmActiveXDoUploadFinish(kd);
}
};

dE.bZf=function()
{
var iB=this.Gk;
if(!iB)
return debug("_doFormUploaderEvent: upload info not exist",null,61882714);
if(!iB.ZG)
return;
try
{
var bfu=iB.ZG.contentWindow.document;
var bUh=bfu.body;
if(bUh.className==iB.ZG.id)
return;

var bfZ=[];
var biB=GelTags("script",bfu);
for(var i=0;i<biB.length;i++)
bfZ.push(biB[i].innerHTML);
this.arD(bfZ.join(""));
}
catch(e)
{
debug(e.message,61882714);
this.GU(false);
}
};

dE.caI=function(po,aAK,acf,azr,aZT){
var iB=this.Gk;
if(!iB)
return debug("_doActivexUploaderEvent: upload info not exist",null,61882714);
switch(aAK){
case 1:

return this.GU(false,{
errCode:acf
});
case 2:

iB.zX=parseInt(acf*90/azr);
return iB.onupload.call(this,"uploading",{
percent:iB.zX
});
case 3:

var oM=this.ZW("uploader");
if(oM.ResponseCode!="200")
return this.GU(false,{
errCode:acf
});

this.arD(oM.Response);
}
};

dE.arD=function(bRM){

var SI=bRM||"";
var Ad=SI.indexOf('On_upload("');
var Vt=SI.indexOf('");',Ad);
var NF=(Ad!=-1&&Vt!=-1)?SI.substring(Ad+11,Vt):"err";

if(NF!="err")
{
NF=SI.substring(Ad+11,Vt).replace(new RegExp("\"","ig"),"").split(",");
return this.GU(true,{

imgParam:NF[0],
imgwidth:NF[1],
imgheight:NF[2]
});
}
Ad=SI.indexOf('On_upload_Fail("');
Vt=SI.indexOf('");',Ad);

var aFx=function(lR){
lR=parseInt(lR);
return(isNaN(lR)?"5":(parseInt(100*parseInt(lR)/(1024*1024))/100));
};
if(Ad!=-1&&Vt!=-1){
NF=SI.substring(Ad+16,Vt).replace(new RegExp("\"","ig"),"").split(",");
return this.GU(false,{
curSize:aFx(NF[0]),
allowSize:aFx(NF[1])
});
}

return this.GU(false);
};
dE.GU=function(kI,atd){
if(!this.Gk)
return;

try
{
this.Gk.onupload.call(this,kI?"ok":"fail",atd);
}
catch(bj)
{
doPageError(bj.message,this.Gk.window.location.href,"_uploadFinish callback");
}

this.stopUpload();
};














function qmFlash(fR)
{
if(!(this.va=fR.id))
{
throw Error(0,"config.id can't use null");
}

if(!(this.ame=fR.win))
{
throw Error(0,"config.win win is null");
}

this.bpW=fR.flash;
this.aRs=this.constructor;
this.MU=fR;
this.SW();
}

eS=qmFlash;
dE=eS.prototype;

eS.get=function(azx,NK)
{
var AG=NK[this.gN.amR];
return AG&&AG[azx];
};

eS.getFlashVer=function()
{
var iM="";
var NA=-1;
var Nx=-1;
var Ns=-1;
var Nq=navigator.plugins;
if(Nq&&Nq.length){

for(var i=0,aOv=Nq.length;i<aOv;i++){
var anw=Nq[i];
if(anw.name.indexOf('Shockwave Flash')!=-1){
iM=anw.description.split('Shockwave Flash ')[1];
NA=parseFloat(iM);
Ns=parseInt(iM.split("r")[1]);
Nx=parseInt(iM.split("b")[1]);
break;
}
}
}
else{
try
{
var amI=new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
if(amI)
{
iM=amI.GetVariable("$version").split(" ")[1];
var Yj=iM.split(",");
NA=parseFloat(Yj.join("."));
Ns=parseInt(Yj[2]);
Nx=parseInt(Yj[3]);
}
}
catch(e)
{
}
}

return{
version:(isNaN(NA)?-1:NA)||-1,
build:(isNaN(Ns)?-1:Ns)||-1,
beta:(isNaN(Nx)?-1:Nx)||-1,
desc:iM
};
};

eS.isSupported=function()
{
var MQ=this.getFlashVer();
return MQ.version>=10||MQ.version==9&&MQ.build>50;
};

eS.gN={
aLL:5*1000 ,
amR:"qmFlashCaches_ASDr431gGas",
anz:"onFlashEvent_ASDr431gGas"
};

dE.getFlash=function(){
return this.bpW||getFlash(this.va,this.ame);
};

dE.isDisabled=function(){
return this.aTj||false;
};

dE.disable=function(aVh){
this.aTj=aVh!=false;
return this;
};











dE.getLoadedPercent=function(aSk){
var dj=this;
function gp(lR){
try{
aSk.call(dj,lR);
}
catch(e){
}
}

var gj=this.getFlash();
if(!gj)
return gp("notfound");

var amz=0;
(function(){
var FR=arguments.callee;
if(!FR.anh)
FR.anh=getTop().now();

var zX=0;
var adq=false;
try{
zX=gj.PercentLoaded();
}
catch(e){
adq=true;
}

if(zX!=amz)
gp(amz=zX);

if(zX!=100){
if(getTop().now()-FR.anh>qmFlash.gN.aLL){
gp(adq?"noflash":"timeout");
}
else{
setTimeout(FR,100);
}
}
})();
};












dE.setup=function(aQt){
var dj=this;
function gp(kI,YF){
try{
aQt.call(dj,kI,YF);
}
catch(e){
}
}

this.getLoadedPercent(function(lR){
if(lR==100){
setTimeout(function(){
try{
if(!dj.getFlash().setup(qmFlash.gN.anz,dj.va))
return gp(false,"setuperr");
}
catch(e){
return gp(false,"nosetup");
}

gp(true);
});
}
else if(typeof lR!="number"){
gp(false,lR);
}



});
};



dE.SW=function(){
var xI=this.ame;
var amW=this.aRs.gN;
var Nj=amW.amR;
var Pv=amW.anz;

if(!xI[Nj])
xI[Nj]=new xI.Object;

xI[Nj][this.va]=this;

if(!xI[Pv]){
xI[Pv]=function(){
var qy=arguments[0];
var amh=arguments[1];
var LJ=xI[Nj][qy];

if(LJ&&typeof(LJ.MU[amh])=="function"){
var amS=[];
for(var i=2,cQ=arguments.length;i<cQ;i++)
amS.push(arguments[i]);
LJ.MU[amh].apply(LJ,amS);
}
};
}
};




var QMTimeLang={
bfU:new Date(1970,0,5,0,0,0,0)
};

eS=QMTimeLang;







eS.formatRefer=function(mL,aJV)
{
return T('$date$ $time$').replace({
date:this.formatDate(mL,aJV),
time:this.formatTime(mL)
});
};







eS.formatDate=function(mL,aJV)
{
var dB=mL;
var bhE=aJV||new Date();

var aEd=dB-this.bfU;
var bjI=bhE-this.bfU;
var aKn=24*3600000;
var bgh=Math.floor(aEd/aKn)
-Math.floor(bjI/aKn);

if(Math.abs(bgh)<3)
{

return T('$day$').replace({
day:["\u524D\u5929","\u6628\u5929","\u4ECA\u5929","\u660E\u5929","\u540E\u5929"][bgh+2]
});
}

var beQ=7*aKn;
var bdK=Math.floor(aEd/beQ)
-Math.floor(bjI/beQ);

if(Math.abs(bdK)<2)
{

return T('$weekpos$\u5468$weekday$').replace({
weekpos:["\u4E0A","\u672C","\u4E0B"][bdK+1],
weekday:this.formatWeek(dB)
});
}

var bwo="";
if(dB.getYear()==bhE.getYear())
{
bwo="%MM%-%DD%";
}
else
{
bwo="%YY%-%MM%-%DD%";
}
return formatDateByLocale({year:dB.getFullYear(),month:dB.getMonth()+1,day:dB.getDate(),pattern:bwo});








};







eS.formatTime=function(mL)
{
var nH=mL.getHours();
var xv=mL.getMinutes();
var vk;
if(nH<6)
{
vk="\u51CC\u6668";
}else if(nH<9)
{
vk="\u65E9\u4E0A";
}else if(nH<12)
{
vk="\u4E0A\u5348";
}else if(nH<13)
{
vk="\u4E2D\u5348";
}else if(nH<18)
{
vk="\u4E0B\u5348";
}else if(nH<22)
{
vk="\u665A\u4E0A";
}else
{
vk="\u6DF1\u591C";
}
return T('$desc$$hour$:$min$').replace({
desc:vk,
hour:nH==12?nH:nH%12,
min:this.CX(xv)
});
};






eS.formatWeek=function(mL)
{
return["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"][mL.getDay()];
};






eS.CX=function(ln)
{
return ln<10?"0"+ln:ln;
};




var QMDragDrop={
groups:{},
setGroup:function(aM,aGH)
{
var ao=this;
if(!ao.agV(aM))
{
ao.groups[aM]=aGH;
for(var i=0;i<aGH.length;i++)
{
aGH[i].setGroupId(aM);
}
}
return ao;
},

addGroup:function(aM,bdX)
{
var ao=this,
fb;
if(!(fb=ao.agV(aM)))
{
fb=[];
ao.setGroup(aM,fb);
}

fb.push(bdX);
bdX.setGroupId(aM);

return ao;
},

delGroup:function(aM)
{
var ao=this,
fb;
if(fb=ao.agV(aM))
{
if(delete ao.groups[aM])
{

}
else
{
debug('error delete dragdrop group:'+aM);
}
}

return ao;
},

getDragFromGroup:function(aM)
{
var ao=this,
fb,
bjF=[];
if(fb=ao.agV(aM))
{
if(fb[i]instanceof QMDragDrop.Draggable)
{
bjF.push(fb[i]);
}
}
return bjF;
},

getDropFromGroup:function(aM)
{
var ao=this,
fb,
Bl=[];
if(fb=ao.agV(aM))
{
for(var i=0;fb&&i<fb.length;i++)
{
if(fb[i]instanceof QMDragDrop.DropTarget)
{
Bl.push(fb[i]);
}
}
}
return Bl;
},

agV:function(aM)
{
var ao=this;
for(var groupid in ao.groups)
{
if(groupid==aM)
{
return ao.groups[groupid];
}
}
}
};

eS=QMDragDrop;


























eS.Draggable=function(aw,bp,DJ)
{
this.ha=null;
this.bmh=[];
this.mf={};
this.mh={};
this.axA=0;
this.axz=0;
this.hV=2;

this.fP(aw,bp,DJ);
};

eS.Draggable.STATE={
bGs:0,
azz:1,
acE:2
};

eS.Draggable.prototype={
setGroupId:function(aM)
{
this.jJ=aM;
return this;
},

addDropTarget:function(aPb)
{
if(aPb)
{
this.bmh.push(aPb);
}
return this;
},

moveTo:function(sj,rI,bS,aL)
{
var ao=this,
aB=ao.ha,
aom=aB.offsetLeft,
aqH=aB.offsetTop;
qmAnimation.play(aB,{
from:0,
to:1,
speed:Math.max(Math.abs(sj-aom),Math.abs(rI-aqH))*0.5||10,
onaction:function(cM){
cM=cM||0;
this.style.left=aom+(sj-aom)*cM;
this.style.top=aqH+(rI-aqH)*cM;
},
oncomplete:function(){
this.style.left=sj;
this.style.top=rI;

if(bS)
{
bS.call(ao,aL);
}
}
});
},


exchangePos:function(ahx)
{
if(ahx&&this.EC)
{
ahx.parentNode.insertBefore(this.ha,ahx);
this.EC.parentNode.insertBefore(ahx,this.EC);
this.ha.parentNode.insertBefore(this.EC,this.ha);
}
},

getElement:function()
{
return this.ha;
},

getPlaceHolder:function()
{
return this.EC;
},

lock:function(beb)
{
this.mf.lockx=!!beb;
this.mf.locky=!!beb;
},

fP:function(aw,bp,DJ)
{
if(aw)
{
this.ha=aw;
this.uh=aw.ownerDocument;
this.jo=this.uh.parentWindow||this.uh.defaultView;
this.bUP=getStyle(aw,'position');
this.Pk(bp).bHa(DJ);
}
},

Pk:function(bp)
{
var ao=this,
bA=ao.mf;

bA.handle=bp.handle||ao.ha;
bA.maxContainer=bp.maxcontainer;
bA.lockx=!!bp.lockx;
bA.locky=!!bp.locky;
bA.transparent=!!bp.transparent;
bA.placeholder=!!bp.placeholder;
bA.threshold=bp.threshold||5;
bA.holderhtml=bp.holderhtml;


bA.oTitle=bp.oTitle;

if(bA.transparent)
{
var cs=calcPos(ao.ha);
var bwR='<div style="display:none;background:#FFF;position:absolute;opacity:0.5;filter:alpha(opacity=50);width:100%;height:100%;z-index:999;cursor:move;"></div>';
insertHTML(ao.ha,'afterBegin',bwR);
ao.JI=ao.ha.firstChild;
ao.JI.style.height=cs[5]+'px';
}

return ao;
},

bHa:function(DJ)
{
var ao=this;

ao.mh={
ondragstart:function(){},
ondrag:function(){},
ondragend:function(){}
};
extend(ao.mh,DJ);

function aje(ap)
{

var xz=getEventTarget(ap).tagName;
if(!gbIsIE&&xz&&xz.toLowerCase()=='input')
{
return;
}


if(ao.mf.lockx&&ao.mf.locky)
{
return;
}

ao.axA=ap.clientX-ao.ha.offsetLeft+(parseInt(getStyle(ao.ha,'marginLeft'))||0)+bodyScroll(ao.jo,'scrollLeft');
ao.axz=ap.clientY-ao.ha.offsetTop+(parseInt(getStyle(ao.ha,'marginTop'))||0)+bodyScroll(ao.jo,'scrollTop');


if(ao.mf.oTitle)
{
var EZ=gbIsIE?calcPos(ao.jo.frameElement):[0,0,0,0];
ao.ape=EZ[3]+ap.clientX;
ao.aqF=EZ[0]+ap.clientY;
}
else
{
ao.ape=ap.clientX;
ao.aqF=ap.clientY;
}

ao.hV=QMDragDrop.Draggable.STATE.acE;

ao.apN(ap);
}

addEvent(ao.mf.handle,'mousedown',aje);
return ao;
},

apN:function(ap)
{
var ao=this,
bA=ao.mf,
aim=QMDragDrop.DataTransfer;


if(!bA.oTitle)
{


preventDefault(ap);
}

if(!ao.aaO||!ao.EO)
{
ao.aaO=function(ap)
{

preventDefault(ap);


if(gbIsIE&&bA.oTitle)
{
}
else
{
ao.jo.getSelection?ao.jo.getSelection().removeAllRanges():ao.uh.selection.empty();
}


if(ao.hV==QMDragDrop.Draggable.STATE.acE&&bA.threshold)
{

var bbf=Math.abs(ao.ape-ap.clientX),
bbh=Math.abs(ao.aqF-ap.clientY);
if(bbf>bA.threshold||bbh>bA.threshold)
{
callBack.call(ao,ao.mh['ondragstart'],[ap]);

ao.hV=QMDragDrop.Draggable.STATE.bGs;
ao.aRH();

if(!bA.oTitle)
{

ao.ha.style.left=ao.ape-ao.axA+bodyScroll(ao.jo,'scrollLeft');
ao.ha.style.top=ao.aqF-ao.axz+bodyScroll(ao.jo,'scrollTop');
}
}
return;
}

var avm=ap.clientX-ao.axA+bodyScroll(ao.jo,'scrollLeft'),
auM=ap.clientY-ao.axz+bodyScroll(ao.jo,'scrollTop');

if(bA.oTitle)
{
}
else
{

if(!bA.lockx)
{
ao.ha.style.left=avm+'px';
}

if(!bA.locky)
{
ao.ha.style.top=auM+'px';
}
}

if(bA.maxContainer)
{
var yA=calcPos(bA.maxContainer),
Js=calcPos(ao.ha);

if(Js[1]>yA[1])
{
ao.ha.style.left=avm+yA[1]-Js[1]+'px';
}
else if(Js[3]<yA[3])
{
ao.ha.style.left=avm+yA[3]-Js[3]+'px';
}

if(Js[2]>yA[2])
{
ao.ha.style.top=auM+yA[2]-Js[2]+'px';
}
else if(Js[0]<yA[0])
{
ao.ha.style.top=auM+yA[0]-Js[0]+'px';
}
}

ao.hV=QMDragDrop.Draggable.STATE.azz;
callBack.call(ao,ao.mh['ondrag'],[ap]);


var atN=new aim(aim.TYPE.DOWN,ao,ap.clientX,ap.clientY,ap);
ao.acD(atN);
};

ao.EO=function(ap)
{

if(ao.hV==QMDragDrop.Draggable.STATE.acE)
{
ao.JU();
return;
}


ao.JU();

var atN=new aim(aim.TYPE.UP,ao,ap.clientX,ap.clientY,ap);
ao.acD(atN);

ao.hV=QMDragDrop.Draggable.STATE.acE;

callBack.call(ao,ao.mh['ondragend'],[ap]);

ao.aRH();
};
}

if(gbIsIE&&ao.ha.setCapture)
{
var xJ=bA.oTitle||ao.ha;
xJ.setCapture(true);
addEvents(xJ,{
mousemove:ao.aaO,
mouseup:ao.EO,
losecapture:ao.EO
});



}
else
{
addEvents(ao.uh,{
mousemove:ao.aaO,
mouseup:ao.EO
});



ao.jo.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);
addEvent(ao.jo,'blur',ao.EO);
}

return ao;
},

JU:function()
{
var ao=this;

var bA=ao.mf,
xJ=bA.oTitle||ao.ha;

if(gbIsIE&&xJ.releaseCapture)
{
addEvents(xJ,{
mousemove:ao.aaO,
mouseup:ao.EO,
losecapture:ao.EO
},true);

xJ.releaseCapture();





}
else
{
addEvents(ao.uh,{
mousemove:ao.aaO,
mouseup:ao.EO
},true);


ao.jo.releaseEvents(Event.MOUSEMOVE|Event.MOUSEUP);
removeEvent(ao.jo,'blur',ao.EO);
}

return ao;
},

aUn:function(aqo)
{

var ao=this;
if(aqo)
{
var mA=ao.ha.cloneNode(true),
cs=calcPos(ao.ha);

mA.style.position='static';
mA.style.width=cs[4]+'px';
mA.style.height=cs[5]+'px';
if(ao.mf.holderhtml)
{
mA.innerHTML=ao.mf.holderhtml;

}
mA.removeAttribute('id');
mA.removeAttribute('name');
ao.ha.parentNode.insertBefore(mA,ao.ha);
ao.EC=mA;
}
else
{
if(ao.EC)
{
ao.ha.parentNode.removeChild(ao.EC);
ao.EC=null;
}
ao.ha.style.position=ao.bUP;
}
},

aRH:function()
{
var ao=this,
bA=ao.mf,
Ro=ao.hV==QMDragDrop.Draggable.STATE.acE;

if(bA.oTitle)
{
return;
}

ao.ha.style.position=Ro?'absolute':'absolute';

if(bA.transparent)
{
show(ao.JI,!Ro);
}
if(bA.placeholder)
{
var agS=ao.EC,
rQ=agS&&agS.offsetLeft,
oz=agS&&agS.offsetTop;

!Ro&&ao.aUn(true);
Ro&&ao.moveTo(rQ,oz,ao.aUn,false);
}

return ao;
},

acD:function(rN)
{
var ao=this,
Bl=QMDragDrop.getDropFromGroup(ao.jJ);

for(var i=0;i<Bl.length;i++)
{
if(ao!=Bl[i])
{
Bl[i].listen(rN);
}
}
return ao;
}
};














eS.DropTarget=function(bwT,DJ,arB)
{
this.ha=null;
this.mh={};
this.azS=null;
this.hV=-1;

this.fP(bwT,DJ,arB);
};

eS.DropTarget.STATE={
avT:0,
ayl:1,
aUw:2,
ZB:3
};

eS.DropTarget.prototype={
setGroupId:function(aM)
{
this.jJ=aM;
return this;
},

getElement:function()
{
return this.ha;
},

getDragTarget:function()
{
return this.azS;
},

listen:function(rN)
{
var ao=this,
AM=QMDragDrop.DropTarget.STATE;

ao.azS=rN.target;









var Ju=ao.azS.getElement(),
rQ=Ju.offsetLeft+Ju.offsetWidth/2,
oz=Ju.offsetTop+Ju.offsetHeight/2;


if(ao.isOver(rQ,oz,rN))
{
if(rN.type==QMDragDrop.DataTransfer.TYPE.DOWN)
{
ao.hV=(ao.hV==AM.avT||ao.hV==AM.ayl)
?AM.ayl:AM.avT;
}
else
{
ao.hV=AM.ZB;
}
}
else
{
ao.hV=AM.aUw;
}

switch(ao.hV)
{
case AM.avT:
callBack.call(ao,ao.mh['ondragenter'],[rN]);

break;
case AM.ayl:
callBack.call(ao,ao.mh['ondragover'],[rN]);

break;
case AM.ZB:
callBack.call(ao,ao.mh['ondrop'],[rN]);

break;
case AM.aUw:
callBack.call(ao,ao.mh['ondragleave'],[rN]);

break;
default:
break;
}
},


isOver:function(sj,rI)
{
var lU=this.ha;

var ajp=lU.offsetLeft;
var	aCu=ajp+lU.offsetWidth;
var	ajq=lU.offsetTop;
var aCt=ajq+lU.offsetHeight;
return(sj>ajp&&sj<aCu&&rI>ajq&&rI<aCt);
},

fP:function(aw,DJ,arB)
{
if(aw)
{
this.ha=aw;

this.mh={
ondragenter:function(){},
ondragover:function(){},
ondragleave:function(){},
ondrop:function(){}
};
extend(this.mh,DJ);

if(arB)
{
this.isOver=arB;
}
}
}
};

eS.DataTransfer=function(eY,bws,sj,rI,ap)
{
this.type=eY;
this.target=bws;
this.x=sj;
this.y=rI;
this.event=ap;
};

eS.DataTransfer.TYPE={
DOWN:1,
UP:2
};






























































var QMPanel=inheritEx("QMPanel",Object,
function(aG)
{
return{
$_constructor_:function(ar)
{
if(ar)
{
var oI=this.constructor,
aGl=oI.get(ar.sId);

aGl&&aGl.destroy();
this.aYE(ar);
oI.$_add&&oI.$_add(ar.sId,this);
this.fP(ar);
}
},

configHelp_:function(ar,CF,OE)
{
for(var i in CF)
{
if(OE||typeof(ar[i])=="undefined"||ar[i]==null)
{
ar[i]=CF[i];
}
}
return ar;
},

autoAlignCenter_:function()
{
var ao=this,
aQ=ao.bY,
eO=ao.ia,
vi=aQ.oEmbedWin||getTop(),
ZI=vi.document.body;

if(!aQ.nX)
{
var rQ=(Scale.fixBodyWidth(ZI.clientWidth)-eO.offsetWidth)/2+bodyScroll(vi,"scrollLeft");
aQ.nX=rQ;
eO.style.left=rQ+"px";
}
if(!aQ.nY)
{
var oz=Math.max(2,(Scale.fixBodyHeight(ZI.clientHeight)-eO.offsetHeight)/2
+bodyScroll(vi,"scrollTop")-25);
aQ.nY=oz;
eO.style.top=oz+"px";
}
},

dfConfig_:function(ar)
{
var vi=ar.oEmbedWin||getTop(),
ZI=vi.document.body;

this.configHelp_(ar,
{
oEmbedWin:vi,
oEmbedToDom:ZI,
sEmbedPos:"afterBegin",
oCallerWin:window,
nZIndex:1100,


bDisplay:true,
sBodyHtml:""
}
);



},

aYE:function(ar)
{
return this.vu=[
ar.sId||(ar.sId=["__QmDefPanelId","__"].join(unikey())),
this.constructor.classname
].join("_");
},

processHtml_:function(cP)
{
var aef=this.vu;
return cP.toString().replace(/ (id|for)=[\"\']?(\w+)[\"\']?/gi,[' $1="',aef,'_$2"'].join(""));
},

insertHtml_:function(ar)
{
ar.sPanelId=this.vu;
ar.sBodyHtml=this.processHtml_(ar.sBodyHtml);
insertHTML(ar.oEmbedToDom,ar.sEmbedPos,QMPanel.cD.ye.replace(ar));
},

initMemVar_:function(ar)
{
this.bY=ar;
this.hJ="";
this.ia=S(this.vu,ar.oEmbedWin);
},

htmlReady_:function(ar)
{
var ao=this;
ao.hJ="hide";
callBack.call(this,ar.onload);
ao.setEvent_();
ar.bDisplay&&this.show();
},

setEvent_:function()
{
},


panelDomCtrl_:function(pY,bS)
{
var ao=this;
show(ao.ia,pY);
if(pY)
{
ao.autoAlignCenter_();
}
callBack.call(ao,bS);
},


panelDomDestroy_:function()
{
var ao=this;
removeSelf(ao.ia);
ao.ia=null;
},

panelDestroy_:function()
{
var ao=this,
aX=ao.bY.sId,
oI=ao.constructor;

if(oI.get(aX))
{
oI.$_del(aX);
ao.panelDomDestroy_();
}
},

fP:function(ar)
{
this.dfConfig_(ar);
this.insertHtml_(ar);
this.initMemVar_(ar);
this.htmlReady_(ar);
},


destroy:function()
{
var ao=this;
ao.panelDomCtrl_(false);
ao.panelDestroy_();
},

getConfig:function()
{
return this.bY;
},



option:function(rc,pl)
{
var ao=this,
bqH=
{
nX:"left",
nY:"top",
nWidth:"width",
nHeight:"height",
nZIndex:"zIndex"
},
akR=
{
nWidth:"scrollWidth",
nHeight:"scrollHeight"
},
rZ;

if(typeof pl!="undefined")
{
ao.bY[rc]=pl;
if(rZ=bqH[rc])
{
ao.ia.style[rZ]=typeof pl=="number"&&rZ!="zIndex"
?pl+"px":pl;
}
}

if(rc=="status")
{
return ao.hJ;
}

if(!pl&&ao.bY[rc]=="auto"&&akR[rc])
{

var ir=ao.ia,
aFY,hf;
if(!isShow(ir))
{
aFY=getStyle(ir,"left");
ir.style.left="-9999px";
hf=show(ir,true)[akR[rc]];
show(ir,false).style.left=aFY;

}
else
{
hf=ir[akR[rc]];
}
return hf;
}

return pl?ao:ao.bY[rc];
},


S:function(Wa)
{
var vi=this.bY.oEmbedWin||getTop();
return S([this.vu,Wa].join("_"),vi);
},


isContain:function(aP)
{
return isObjContainTarget(this.ia,aP);
},


getPanelDom:function()
{
return this.ia;
},


show:function()
{
var ao=this;
if(ao.hJ!="showing"&&ao.hJ!="show")
{
ao.hJ="showing";

ao.panelDomCtrl_(true,function()
{
ao.hJ="show";
setTimeout(function()
{
try
{
callBack.call(ao,ao.bY.onshow);
}
catch(bj)
{
debug("onshow error : "+bj.message);
}
}
);
}
);
}
return ao;
},


hide:function(bS)
{
var ao=this;
if(ao.hJ!="hiding"||ao.hJ!="hide")
{
ao.hJ="hiding";
ao.panelDomCtrl_(false,function()
{
ao.hJ="hide";
setTimeout(function()
{
callBack.call(ao,ao.bY.onhide);
}
);
callBack.call(ao,bS);
}
);
}
else
{
callBack.call(ao,bS);
}
return ao;
},





bpC:function()
{
try
{
var eO=this.ia;




if(eO.parentNode==null)
{
return false;
}

if(gbIsIE)
{
return!!eO.ownerDocument;
}
else
{
var aI=eO.ownerDocument.defaultView,
kd=aI.frameElement;
if(kd)
{
return kd.contentDocument==eO.ownerDocument;
}
else
{

return aI==getTop();
}
}
}
catch(e)
{
return false;
}
},


close:function(axe)
{
if(this.hJ!="close")
{
var ao=this;
if(ao.bpC())
{
axe&&(this.bY.bAnimation=false);
this.hide(function()
{
ao.hJ="close";
ao.panelDestroy_();
callBack.call(ao,ao.bY.onclose);
}
);
}
else
{

ao.hJ="close";
ao.panelDestroy_();
}

}
return this;
},

setBody:function(cP)
{
this.ia.innerHTML=this.processHtml_(cP);
callBack.call(this,this.bY.onload);
return this;
},


setHtml:function(aGC,cP)
{
((typeof aGC=="string"?this.S(aGC):aGC)||{}).innerHTML=this.processHtml_(cP);
return this;
},


isShow:function()
{
return this.hJ=="show"||this.hJ=="showing";
},


isClose:function()
{
return this.hJ=="close";
}
};
},
{
cD:
{
ye:TE([
'<div id="$sPanelId$" class="$sClassName$" $sAttr$ ',
'style="$sStyle$;display:none;z-index:$nZIndex$;position:absolute;left:$nX$px;top:$nY$px;',
'$@$if($nHeight$&&!isNaN($nHeight$))$@$ height:$nHeight$px; $@$endif$@$',
'$@$if($nWidth$&&!isNaN($nWidth$))$@$ width:$nWidth$px; $@$endif$@$"',
'>',
'$sBodyHtml$',
'</div>'])
}
}
);

















































var QMDialog=inheritEx("QMDialog",QMPanel,
function(aG)
{
return{
initMemVar_:function(ar)
{
callBack.call(this,aG.initMemVar_,[ar]);
this.JI=null;
this.akN=null;
this.Fn=null;

var oI=this.constructor;
this.bpZ=ar.bModal?oI.QN:oI.aky;

},


aDc:function(aal)
{
var ao=this,
cv=ao,
oI=ao.constructor,
ajU,
aap=ao.bpZ,
amA=function(aCX,bqD,bqB)
{
for(var i=aCX.length-1;i>=0;i--)
{
cv=aCX[i];
cv.option("nZIndex",ajU?bqB:bqD);
cv.aDS(ajU);
ajU=true;
}
};

if(aal>0)
{
for(var i in aap)
{
if(aap[i]==ao)
{
cv=aap.splice(i,1)[0];
break;
}
}
if(aal==2)
{
aal=0;
}
}
if(aal==0)
{
aap.push(cv);
}
amA(oI.QN,1120,1106);
amA(oI.aky,1110,1105);
},

setEvent_:function()
{
var aQ=this.bY,
ao=this;

if(aQ.bModal)
{
addEvent(this.JI,"mousedown",function()
{
var aju=ao.constructor.QN,
aDN=aju[aju.length-1];
aDN&&aDN.spark();
}
);
}
else
{
addEvent(this.ia,"mousedown",function()
{
if(!aQ.bModal)
{
ao.aDc(2);
}
}
);
}

var vi=aQ.oEmbedWin,
eO=this.ia;

if(aQ.bMin)
{
this.S("_minbtn_").onclick=function(ap)
{
ao.min();
return false;
}
}
if(aQ.bClose)
{
this.S("_closebtn_").onclick=function(ap)
{
ao.close();
return false;
}
}

eO.tabindex="-1";
addEvent(eO,"keydown",function(ap){
if(ap&&ap.keyCode==27)
{
ao.close();
preventDefault(ap);
}
});

new(QMDragDrop.Draggable)(ao.ia,
{
handle:ao.S("_head_"),
maxcontainer:aQ.oEmbedWin.document.body
},
{
ondragstart:function(){
callBack.call(ao,aQ.ondragstart);
},
ondrag:function(){
callBack.call(ao,aQ.ondrag);
},
ondragend:function()
{
ao.bY.nX=parseInt(ao.ia.style.left);
ao.bY.nY=parseInt(ao.ia.style.top);
}
}
).lock(!aQ.bDraggable);
},

dfConfig_:function(ar)
{

this.configHelp_(ar,{bModal:true});

var amV=
{
bDraggable:true,
bClose:true,
bAnimation:true,
sEmbedPos:"beforeEnd",
sTitle:""
};

var oI=this.constructor,
fJ=ar.bModal?oI.QN:oI.aky,
ald=fJ[fJ.length-1];

if(ald&&!ar.bAlignCenter)
{
extend(amV,
{
nX:ald.option("nX")+20,
nY:ald.option("nY")+20
}
);
}
this.configHelp_(ar,amV);

var bi=S("qmdialog_container",getTop());
if(!bi)
{
var aU=getTop().document;

insertHTML(aU.body,
aU.readyState=="complete"?"beforeEnd":"afterBegin",
'<span id="qmdialog_container"></span>');

bi=S("qmdialog_container",getTop());
}

this.configHelp_(ar,
{
oEmbedWin:getTop(),
oEmbedToDom:bi,
nZIndex:ar.bModal?1110:1105
},
true
);

return callBack.call(this,aG.dfConfig_,[ar]);
},

insertHtml_:function(ar)
{
var aef=this.vu;

ar.sBodyHtml=QMDialog.cD.ye.replace(ar);
ar.sClassName="qm_dialog";
callBack.call(this,aG.insertHtml_,[ar]);
},

htmlReady_:function(ar)
{
var ao=this;
if(ar.bModal)
{
ao.JI=ao.bmI(ar.oEmbedWin);
}
if(ar.bMin)
{
insertHTML(ao.ia,"afterEnd",
ao.processHtml_(ao.constructor.cD.bpq.replace(ar))
);
this.akN=this.S("_min_animation_");
}

callBack.call(this,aG.htmlReady_,[ar]);
},


bmI:function(ax)
{
ax=ax||getTop();
var aX="qqmail_mask",
WV=S(aX,ax);

if(!WV)
{
insertHTML(
ax.document.body,

"beforeEnd",
T([
'<div id="$id$" class="$class$" style="z-index:98;display:none;"',
' onkeypress="return false;" onkeydown="return false;"',
' tabindex="0"></div>'
]).replace(
{

'class':'editor_mask opa50Mask ',
id:aX
}
)
);
WV=S(aX,ax);
}
return WV;
},





panelDomCtrl_:function(pY,bS,QM)
{
this.aDc(pY?0:1);

var	ao=this,
aQ=ao.bY,
QM=QM||(aQ.bAnimation?"ani1":"ani0"),
lz=getTop().qmAnimation,
bnh=this.constructor.QN.length,
eO=ao.ia,
pK=ao.S("_content_");

function bja()
{
if(aQ.sUrl&&pY)
{
ao.S("_dlgiframe_").height="0";
ao.S("_dlgiframe_").height=ao.ia.offsetHeight-ao.S("_head_").offsetHeight-2;
}
}

if(this.bY.bModal&&bnh==(pY?1:0))
{


callBack(getTop().iPadPrevent);
show(this.JI,pY);
}

hideWindowsElement(!pY);

if(QM=="ani0")
{
callBack.call(this,aG.panelDomCtrl_,[pY,bS]);
bja();
}
else if(QM=="ani2")
{
var Qf=ao.akN,
aFs=ao.Fn,
nx=calcPos(show(aFs,true)),
aDG=(ao.bgW||eO.offsetWidth)-nx[4],
aDQ=(ao.bjP||eO.offsetHeight)-nx[5],
aEs=aQ.nX-nx[3],
aEH=aQ.nY-nx[0],
aFM=function(blC)
{
E(["left","top","width","height"],function(bnm,nF)
{
Qf.style[bnm]=blC[nF]+"px";
}
);
};

if(pY)
{
lz.play(eO,
{
win:window,
speed:300,
onready:function()
{
show(Qf,true);
show(aFs,false);
},
onaction:function(cM,hx)
{
aFM(
[
nx[3]+(aEs*hx),
nx[0]+(aEH*hx),
nx[4]+(aDG*hx),
nx[5]+(aDQ*hx)
]
);
},
oncomplete:function()
{
show(Qf,false);

eO.style.top=eO.getAttribute("originTop");
callBack.call(ao,bS);
}
}
);
}
else
{
ao.bgW=eO.offsetWidth;
ao.bjP=eO.offsetHeight;

lz.play(eO,
{
win:window,
speed:300,
onready:function()
{

eO.setAttribute("originTop",eO.style.top);
eO.style.top="-1000px";
show(Qf,true);
},
onaction:function(cM,hx)
{
aFM(
[
aQ.nX-(aEs*hx),
aQ.nY-(aEH*hx),
ao.bgW-(aDG*hx),
ao.bjP-(aDQ*hx)
]
);
},
oncomplete:function()
{
show(Qf,false);
callBack.call(ao,bS);
}
}
);
}
return;
}
else if(QM=="ani1")
{
if(pY)
{
lz.play(eO,
{
win:window,
speed:300,
easing:"easeOut",
tween:"Sina",
from:-30,
to:0,
onready:function()
{
show(setOpacity(eO,0),true);
ao.autoAlignCenter_();
bja();
pK.style.visibility="hidden";
},
onaction:function(cM,hx)
{
setOpacity(eO,hx).style.marginTop=cM+"px";
},
oncomplete:function()
{
setOpacity(eO,1).style.marginTop=0;
pK.style.visibility="visible";
callBack.call(ao,bS);
}
}
);
}
else
{
lz.play(eO,
{
win:window,
speed:300,
easing:"easeIn",
tween:"Sina",
from:0,
to:-30,
onaction:function(cM,hx)
{
setOpacity(eO,1-hx).style.marginTop=cM+"px";
},
oncomplete:function(cM)
{
show(eO,false);
callBack.call(ao,bS);
}
}
);
}
}
},


panelDomDestroy_:function()
{
var ao=this;
if(ao.bY.sUrl)
{

try
{
ao.S("_dlgiframe_").contentWindow.location.replace("javascript:'';");
}
catch(bj)
{
}
}
if(ao.bY.bAnimation)
{
qmAnimation.stop(ao.ia);
}
ao.Fn&&removeSelf(ao.Fn);
removeSelf(ao.ia);
removeSelf(ao.akN);
ao.ia=null;
},

aDS:function(aYX)
{
var ao=this;
eO=ao.ia;

setClass(eO,"qm_dialog "+(aYX?"qm_dialog_flash":""));
},






S:function(Wa)
{
var ao=this,
aQ=ao.bY,
aB=callBack.call(ao,aG.S,[Wa]);
if(aQ.sUrl&&!aB)
{
aB=S(Wa,aG.S("_dlgiframe_").contentWindow);
}
return aB;
},


close:function(bop)
{
var Kt=this.bY.onbeforeclose;
if(Kt&&!Kt.call(this))
{
return;
}
if(bop)
{
this.bY.bAnimation=false;
}
callBack.call(this,aG.close);
callBack(getTop().iPadRemoveEvent);
return this;
},

min:function()
{
if(this.hJ!="show")
{
return;
}

var ao=this,
bkQ=S("minimize_container",getTopWin()),
aQ=ao.bY,
aFB=ao.vu+"_min",
Kh=ao.Fn,
aGr=ao.bY.onbeforemin;

if(aGr&&!aGr.call(ao))
{
return;
}

if(!Kh)
{
insertHTML(bkQ,"beforeEnd",ao.constructor.cD.bnT.replace(
{
dialogId:aQ.sId,
id:aFB,
title:aQ.sTitle
}
));
this.Fn=Kh=S(aFB,getTopWin());
}

ao.panelDomCtrl_(false,
function()
{
ao.hJ="min";
show(Kh,true);
callBack.call(ao,ao.bY.onmin);
},
"ani2"
);
return ao;
},

max:function()
{
if(this.hJ!="min")
{
return;
}
var ao=this,
Kh=ao.Fn,
nx=calcPos(Kh),
aQ=ao.bY;

ao.panelDomCtrl_(true,function(){
ao.hJ="show";
show(Kh,false);
callBack.call(ao,ao.bY.onmax);
},"ani2");
return this;
},

spark:function()
{
var ao=this,
gU=4,
aZs=function()
{
if(--gU>0)
{
setTimeout(arguments.callee,80);
}
var aWv=gU%2;
ao.aDS(aWv);
};
aZs();
return ao;
},

getMinDom:function()
{
return this.Fn;
},

getDialogWin:function()
{
var aQ=this.bY;
return aQ.sUrl?this.S("_dlgiframe_").contentWindow:aQ.oEmbedWin;
},

setHeader:function(cP)
{
this.S("_title_").innerHTML=this.processHtml_(cP);
return this;
},

setBody:function(cP)
{
this.S("_content_").innerHTML=this.processHtml_(cP);
callBack.call(this,this.bY.onload);
return this;
}

};
},
{
cD:
{
ye:TE([
'<div style="cursor:$@$if($bDraggable$)$@$move$@$endif$@$;" class="dialog_head" id="_head_">',
'<span id="_title_">$sTitle$</span>',
'$@$if($bMin$)$@$',
'<a title="\u6700\u5C0F\u5316" class="ico_minimize" href="javascript:;" initlized="true" id="_minbtn_"><em class="ico_minimize_inner"></em></a>',
'$@$endif$@$',
'<a title="\u5173\u95ED" dlg="close" class="ico_close_d" href="javascript:;" id="_closebtn_" initlized="true"></a>',
'</div>',
'<div id="_content_">',
'$@$if($sUrl$)$@$',
'<iframe id="_dlgiframe_" frameborder="0" scrolling="no" src="$sUrl$" style="width:100%;"></iframe>',
'$@$else$@$',
'<div class="dialog_inner">',
'<div class="dialog_content" id="_body_">',
'$sBodyHtml$',
'</div>',
'$@$if($sFootHtml$)$@$',
'<div class="dialog_operate" id="_foot_">',
'$sFootHtml$',
'<div class="clr"></div>',
'</div>',
'$@$endif$@$',
'</div>',
'$@$endif$@$',
'</div>'
]),

bnT:T('<span id="$id$" style="display:none;"><a href="javascript:;" onclick="getTop().QMDialog(\'$dialogId$\',\'max\');" nocheck="true">$title$</a>&nbsp;|&nbsp;</span>'),

bpq:T('<div id="_min_animation_" style="display:none;position:absolute;z-index:$nZIndex$;border-width:2px;left:$nX$;top:$nY$;" class="bd_upload"></div>')
},

aky:[],
QN:[]
}
);





















































var QMMenu=inheritEx("QMMenu",QMPanel,
function(aG)
{
return{
initMemVar_:function(ar)
{
var ao=this;
callBack.call(ao,aG.initMemVar_,[ar]);
ao.uP;
ao.cPK;

ao.uY=null;
ao.Co=null;
ao.Ss=null;
ao.RN=null;


ao.Fr=null;
},

setEvent_:function()
{
var ao=this,
aQ=ao.bY,
cMp=null,
nL=ao.S("_menuall_"),
aFm=ao.S("_foot_"),
ir=ao.getPanelDom();





function Fl(au,bol)
{




while(au)
{
var aX=au.id||"";
if(aX.indexOf("_menuitem_")>-1)
{
return!bol&&au.className.indexOf("menu_item_nofun")>-1?0:au;
}
else if(/_QMMenu$/.test(aX))
{

return 0;
}
au=au.parentNode;
}
return null;
}

function avl(ap)
{
if(aQ.bProxyScroll!==false)
{
var aT=getEventTarget(ap),
vS=typeof(ap.wheelDelta)=="undefined"?
ap.detail/3:-ap.wheelDelta/120,
lQ=nL.scrollTop+vS*20;
nL.scrollTop=Math.min(Math.max(lQ,0),nL.scrollHeight-nL.offsetHeight);

while(aT)
{
if(aT.getAttribute&&aT.getAttribute('scroll')=='true')
{
return;
}
aT=aT.parentNode;
}

preventDefault(ap);
stopPropagation(ap);
}
}

function aDm(aM)
{
var bq=aQ.oItems;
for(var i in bq)
{
if(bq[i].sId==aM)
{
return bq[i];
}
}
}


addEvents(ir,
{
contextmenu:preventDefault,
mousewheel:avl,
DOMMouseScroll:avl,

mouseout:function(ap)
{
var Zv=ao.uP,
KG=Fl(ap.relatedTarget||ap.toElement,1);

if(KG==null&&aQ.bAutoClose)
{
ao.aEf();
}
if(KG===0||KG==Zv)
{

return;
}
if(Zv)
{


var	aX=Zv.getAttribute("itemid"),
blA=['sub',aX,'_QMMenu'].join(''),
ZE=KG;

while(ZE)
{
if(ZE.id==blA)
{
return;
}
ZE=ZE.parentNode;
}
if(ao.uY&&KG==null&&Zv==ao.uY.atp)
{

return;
}
ao.Qj().aEo();
ao.RN=setTimeout(function(){

ao.alX();
},100);
setClass(ao.uP,"menu_item");
return ao.uP=null;
}
},
mouseover:function(ap)
{
if(aQ.bAutoClose)
{
ao.bpl();
}
var aT=Fl(getEventTarget(ap));
if(aT)
{

ao.pG(aT);


var aX=aT.getAttribute("itemid"),
bn=aDm(aX);
if(bn.oSubMenu)
{
ao.aVQ(bn,aT);
}
}
if(ao.Co)
{

ao.Co.Qj().aEo();
ao.Co.selectItem(ao.atp);
}
},
click:function(ap)
{
var aCQ=getEventTarget(ap),
aT;

if(aCQ.getAttribute("qmmenuopt")=="close")
{
ao.close();
}
else if(aT=Fl(getEventTarget(ap)))
{
var aX=aT.getAttribute("itemid"),
bn=aDm(aX);


if(!bn.oSubMenu)
{
ao.Qj();
callBack.call(ao,aQ.onitemclick,[aX,bn]);
setClass(aT,"menu_item");
ao.close();
ao.alm();
}
}
}
}
);

addEvent(ao.ia,"mousedown",stopPropagation);
},

dfConfig_:function(ar)
{
this.configHelp_(ar,
{
bAutoClose:true,
nZIndex:1121,
nWidth:"auto",
nMinWidth:100,
nMaxWidth:9999,
bAnimation:true,
nMaxItemView:1000000,
sClassName:ar.sClassName?ar.sClassName:"qmpanel_shadow rounded5",
nArrowDirection:"Up"
}
);


this.configHelp_(ar,
{
nHeight:"auto"

},true);

if(ar.nArrowPos&&ar.nArrowDirection=="Up")
{
ar.nX-=ar.nArrowPos;
ar.nY+=12;
}

return callBack.call(this,aG.dfConfig_,[ar]);
},

insertHtml_:function(ar)
{
var ao=this,
bq=ar.oItems,
JT=ar.oFootItems,
aDu=bq.length>ar.nMaxItemView,
blT=aDu?ar.nMaxItemView:bq.length,
aef=ao.vu,
EL=0;

for(var i=0;i<bq.length;i++)
{
var bkG=bq[i].nHeight=bq[i].nHeight||ar.nItemHeight||22;
if(i<blT)
{
EL+=bkG;
}
if(bq[i].sId===0)
{
bq[i].sId="0";
}
ao.configHelp_(bq[i],{
bDisSelect:!(bq[i].sId)
});
}

if(JT)
{
for(var i=0,cQ=JT.length;i<cQ;i++)
{
if(JT[i].sId===0)
{
JT[i].sId="0";
}
ao.configHelp_(JT[i],{
nHeight:ar.nItemHeight||22,
bDisSelect:!(JT[i].sId)
});
}
}

ar.sBodyHtml=QMMenu.cD.ye.replace(
{
nArrowPos:ar.nArrowPos||0,
nArrowDirection:ar.nArrowDirection,
nX:ar.nX,
sWidthDetect:ar.sWidthDetect||"mini",
mwidth:ar.nWidth-2,
mheight:aDu?EL:"auto",
nMinWidth:ar.nMinWidth,
oItems:ar.oItems,
oFootItems:ar.oFootItems
}
);

callBack.call(this,aG.insertHtml_,[ar]);
},

ZA:function()
{
var ao=this;
if(ao.bY.nWidth=="auto")
{
var eZ=ao.S("_menuall_"),
aFm=ao.S("_foot_");
if(eZ&&eZ.offsetWidth>10)
{





var ahb=(Math.max(ao.bY.nMinWidth,Math.min(eZ.scrollWidth,ao.bY.nMaxWidth))+(gbIsIE?0:eZ.offsetWidth-eZ.scrollWidth));
if(typeof ao.bY.nMaxWidth==="number"&&ahb>ao.bY.nMaxWidth)
{
ahb=ao.bY.nMaxWidth;
}
else if(typeof ao.bY.nMinWidth==="number"&&ahb<ao.bY.nMinWidth)
{
ahb=ao.bY.nMinWidth;
}
aFm.style.width=eZ.style.width=ahb+"px";

setClass(eZ,"txtflow");

}
}
},

panelDomCtrl_:function(pY,bS)
{
var	ao=this,
eO=ao.ia;
if(true)

{
callBack.call(this,aG.panelDomCtrl_,[pY,bS]);
return ao.ZA();
}

if(pY)
{
var zw=true;
show(eO,true);
qmAnimation.expand(eO,
{
win:window,
from:0,
speed:200,
easing:"easeOut",
tween:"Cubic",
oncomplete:function()
{
callBack.call(ao,bS);
},
onaction:function()
{
if(zw)
{
ao.ZA();
zw=0;
}
}
}
);
}
else
{


qmAnimation.fold(eO,

{
win:window,
speed:200,
easing:"easeIn",
tween:"Cubic",
oncomplete:function()
{
show(eO,false);
callBack.call(ao,bS);
}
}
);
}
},


panelDomDestroy_:function()
{
var ao=this;
if(ao.bY.bAnimation)
{
qmAnimation.stop(ao.ia);
}
removeSelf(ao.ia);
ao.ia=null;
},


akv:function(nF)
{
var ao=this;
return typeof(nF)=="number"?
ao.S("_menuall_").childNodes[nF]:
ao.S("_menuitem_"+nF);
},

pG:function(kj)
{
var lg=(typeof(kj)=="string"||typeof(kj)=="number")?this.S("_menuitem_"+kj):kj;

if(this.uP==lg)
{
return this;
}

if(lg)
{
lg.className="menu_item_high";
}
if(this.uP)
{
this.uP.className="menu_item";
}
this.uP=lg;
return this;
},

Qj:function()
{
var ao=this;
if(ao.Ss)
{
clearTimeout(ao.Ss);
ao.Ss=null;
}
return ao;
},

aEo:function()
{
var ao=this;
if(ao.RN)
{
clearTimeout(ao.RN);
ao.RN=null;
}
return ao;
},




bpl:function()
{
var ao=this,
eZ=ao;
while(eZ.Co)
{
eZ=eZ.Co;
}
while(eZ)
{
if(eZ.Fr)
{
clearTimeout(eZ.Fr);
eZ.Fr=null;
}
eZ=eZ.uY;
}
return ao;
},

aEf:function()
{
var ao=this;
if(ao.Fr)
{
clearTimeout(ao.Fr);
}
ao.Fr=setTimeout(function(){
ao.alm().close();
ao.Fr=null;
},500);
return ao;
},

aVQ:function(aCV,aDW)
{
var ao=this,
aQ=ao.bY,

rT=ao.configHelp_(aCV.oSubMenu,aQ);
rT.sId="sub"+aCV.sId;
rT.nZIndex=aQ.nZIndex+1;
if(ao.uY)
{
if(ao.uY.bY.sId==rT.sId)
{

return ao;
}
}
ao.Qj();
ao.Ss=setTimeout(function(){

if(ao.uY)
{


ao.alX();
}
if(ao.isShow())
{
var cs=calcPos(aDW);
cs[0]-=5;
cs[1]-=1;
cs[2]+=7;
cs[3]+=2;
var	ZO=ao.uY=new QMMenu(rT),
aDf=calcAdjPos(cs,ZO.option('nWidth'),ZO.option('nHeight'),aQ.oEmbedWin,1);
ZO.option('nY',Math.max(0,aDf[0])).option('nX',Math.max(0,aDf[3])).Co=ao;
ZO.atp=aDW;
}
},100);
},

alX:function()
{
var ao=this;
if(ao.uY)
{

ao.uY.close();
ao.uY=null;
}
return ao;
},




alm:function()
{
var ao=this,
akG=ao.Co;
if(akG)
{
akG.uY=null;
akG.alm().close();
ao.Co=null;
}
return ao;
},


toggle:function()
{
var ao=this;
ao.isShow()?ao.hide():ao.show();
return ao;
},

selectItem:function(kj)
{
var ao=this;
ao.pG(kj);
if(ao.uP)
{

scrollIntoMidView(ao.uP,ao.S("_menuall_"));
}
return ao;
},

selectItemByOffset:function(rf)
{
var ao=this,
Gf=-1,
bq=ao.bY.oItems,
aK=Math.abs(rf),
kb=rf/aK,
i;
if(ao.uP==null)return ao;
Gf=ao.getCurItemIndex();
for(i=0;i<aK;i++)
{
Gf+=kb;
while(Gf>=0&&Gf<bq.length&&bq[Gf].bDisSelect)
Gf+=kb;
if(Gf<0||Gf>=bq.length)break;
}
if(i<aK)return ao;
ao.selectItem(bq[Gf].sId);
return ao;
},
getCurItemIndex:function()
{
var ao=this,
bq=ao.bY.oItems,
Gf=-1;
if(ao.uP==null)return-1;
return QMMenu.indexOf.call(bq,ao.uP.getAttribute("itemid"));
},
addItem:function(nF,bw)
{
var ao=this,
lg=ao.akv(nF);
ao.configHelp_(bw,{
nHeight:22
});
if(lg)
{
insertHTML(lg,"beforeBegin",ao.constructor.cD.ye.replace(bw,"item"));
}
else
{

var Kd=ao.S("_menuall_").childNodes;
insertHTML(ao.S("_menuall_"),"beforeEnd",ao.constructor.cD.ye.replace(bw,"item"));
}
},

delItem:function(nF)
{
var ao=this,
lg=ao.akv(nF);
if(lg)
{
removeSelf(lg);
}
},

itemOption:function(nF,aR,cf)
{
var ao=this,
lg=this.akv(nF),
bq=ao.bY.oItems;
if(lg)
{
switch(aR)
{
case"bDisSelect":
lg.className=(cf?"menu_item_nofun":"menu_item");
break;
case"bDisplay":
lg.style.display=cf?"":"none";
break;
}
}
},

close:function(axe)
{
var ao=this,
Kt=ao.bY.onbeforeclose;
if(Kt&&!Kt.call(ao))
{
return;
}

axe&&(this.bY.bAnimation=false);
ao.Qj();
ao.alX();
return callBack.call(ao,aG.close);
},




autoClose:function()
{
return this.aEf();
},

option:function(rc,pl)
{
var ao=this;
if(typeof pl!="undefined")
{
switch(rc)
{
case"nHeight":

var nL=ao.S("_menuall_");
nL.style.height=typeof pl=="number"?
(pl-(ao.bY.nGap?ao.bY.nGap:12)+'px'):pl;

break;
case"nX":
ao.bY.nArrowPos&&ao.bY.nArrowDirection=="Up"&&(pl-=ao.bY.nArrowPos);
break;
case"nY":
ao.bY.nArrowPos&&ao.bY.nArrowDirection=="Up"&&(pl+=12);
break;
}
return callBack.call(ao,aG.option,[rc,pl]);
}
else
{
var eI=callBack.call(ao,aG.option,[rc]);
switch(rc)
{
case"nHeight":
if(!eI)
{
var nL=ao.S("_menuall_");
eI=ao.ia.offsetHeight||nL.offsetHeight;
}
break;
case"nX":
ao.bY.nArrowPos&&ao.bY.nArrowDirection=="Up"&&(eI+=ao.bY.nArrowPos);
break;
case"nY":
ao.bY.nArrowPos&&ao.bY.nArrowDirection=="Up"&&(eI-=12);
break;
}
return eI;
}
}


};
},
{



makeMenuItem:function(akm,aat)
{
var bq=[];
for(var aV=0,aK=aat?Math.min(akm.length,aat.length):akm.length;aV<aK;aV++)
{
bq.push({
sId:aat?aat[aV]:aV,
sItemValue:akm[aV]
});
}
return bq;
},



indexOf:function(aM)
{
var ao=this;
for(var i=0,len=ao.length;i!=len;++i)
{
if(ao[i].sId==aM)return i;
}
return-1;
},
cD:
{
ye:TE([
'$@$if($nArrowPos$>0&&$nArrowDirection$=="Up")$@$',
'<span class="arrow" style="left:$nArrowPos$px;"></span>',






'$@$else if($nArrowPos$>0&&$nArrowDirection$=="Left")$@$',
'<div class="c_arrow" style="left:-10px;top:$nArrowPos$px;">',
'<div class="c_arrow_d"></div>',
'<div class="c_arrow_u"></div>',
'</div>',
'$@$endif$@$',
'<div style="margin:0pt;" $@$if($nArrowDirection$=="Left")$@$class="c_list_msg_pop"$@$endif$@$>',
'<div $@$if($nArrowDirection$=="Up")$@$class="menu_base"$@$endif$@$>',
'<div class="menu_bd$@$if($nArrowDirection$=="Left")$@$ ui_menu_bd$@$endif$@$">',


'<div id="_menuall_"',
'style="overflow-y:auto;$@$if(isNaN($mwidth$))$@$width:$@$if(gbIsIE&&$sWidthDetect$!="float")$@$$nMinWidth$px;$@$else$@$auto$@$endif$@$;$@$else$@$overflow-x:hidden;width:$mwidth$px;$@$endif$@$',
'$@$if($mheight$)$@$height:$mheight$$@$endif$@$$@$if(!isNaN($mheight$))$@$px$@$endif$@$;">',
'$@$for($oItems$)$@$',
'$@$sec item$@$',
'<div id="_menuitem_$sId$" itemid="$sId$" class="menu_item$@$if($bDisSelect$)$@$_nofun$@$endif$@$"',

'style="height:$nHeight$$@$if(!isNaN($nHeight$))$@$px$@$endif$@$;line-height:$nHeight$$@$if(!isNaN($nHeight$))$@$px$@$endif$@$;$sStyle$" title="$sTitle$" onclick=";">$sItemValue$</div>',
'$@$endsec$@$',
'$@$endfor$@$',
'</div>',
'<div id="_foot_"',
'style="overflow-y:auto;$@$if(isNaN($mwidth$))$@$width:$@$if(gbIsIE)$@$$nMinWidth$px;$@$else$@$auto$@$endif$@$;$@$else$@$overflow-x:hidden;width:$mwidth$px;$@$endif$@$',
'padding-top:3px;border-top:1px solid #ccc;$@$if(!$oFootItems$)$@$display:none;$@$endif$@$height:auto;">',
'$@$for($oFootItems$)$@$',
'<div id="_menuitem_$sId$" itemid="$sId$" class="menu_item$@$if($bDisSelect$)$@$_nofun$@$endif$@$"',
'style="height:$nHeight$px;line-height:$nHeight$px;" onclick=";">$sItemValue$</div>',
'$@$endfor$@$',
'</div>',
'$@$if($nArrowPos$>0||$nArrowDirection$=="Left")$@$',
'<a class="btn_close" qmmenuopt="close"  onmousedown="return false;"></a>',
'$@$endif$@$',
'</div>',
'</div>',
'</div>'])
}
}
);








































function QMSelect(ar)
{
this.constructor=arguments.callee;
this.agZ(ar).vK();
}



QMSelect.prototype=
{





get:function(eY)
{
var ao=this;
switch(eY=eY||1)
{
case 1:
case 2:
return ao.Ko[eY==1?"sItemValue":"sId"];
case 8:
return S(ao.cOP,ao.bN);
case"menu":
return ao.mK;
}
},







set:function(cf,eY)
{
var ao=this,
bn=ao.Hf(cf,eY);
if(!bn.bpY)
{
S(ao.bY.sId,ao.bN).innerHTML=(ao.Ko=bn).sItemValue;
}
return ao;
},







update:function(ar)
{
var ao=this;
ao.configHelp_(ar,ao.bY);





ao.configHelp_(ar.oMenu,ao.bY.oMenu);

ao.bY=ar;
ao.Ko=ao.Hf(ar.sDefaultId,2,1);
ao.vK().set(ar.sDefaultId,2);
},




Hf:function(cf,eY,zw)
{
var bk=(eY==2)?"sId":"sItemValue",
aQ=this.bY,
bn,
bq=aQ.oMenu.oItems;
if(aQ.oMenu.oFootItems)
{
bq=bq.concat(aQ.oMenu.oFootItems);
}
for(var aV=0,cQ=bq.length;aV<cQ;aV++)
{
if(bq[aV].sId||bq[aV].sId===0)
{
if(bq[aV][bk]==cf)
{
return bq[aV];
}
else if(zw&&!bn)
{
bn=bq[aV];
}
}
}
return bn||{sItemValue:aQ.sDefaultItemValue,bpY:1};
},


configHelp_:function(ar,CF,OE)
{
for(var i in CF)
{
if(OE||typeof(ar[i])=="undefined"||ar[i]==null)
{
ar[i]=CF[i];
}
}
return ar;
},

agZ:function(ar)
{
var ao=this;
ao.bN=ar.oContainer.ownerDocument.parentWindow||ar.oContainer.ownerDocument.defaultView;

ao.configHelp_(ar,{
sDefaultItemValue:"",
sId:QMSelect.cD.bmk+Math.random()
});
ao.bY=ar;
ao.Ko=ao.Hf(ar.sDefaultId,2,!ar.sDefaultItemValue);

return this;
},
vK:function()
{
var aq=getTop(),
ao=this,
aQ=ao.bY,
kX=S(aQ.sId,ao.bN);
if(!kX)
{
if(aQ.sName)
{
insertHTML(aQ.oContainer,"beforeEnd",
QMSelect.cD.bph.replace(aQ)
);
}

insertHTML(aQ.oContainer,"beforeEnd",
QMSelect.cD.bqj.replace(
extend(aQ,{
content:ao.Ko.sItemValue,
images_path:getPath("image")
})
)
);


}
if(!(kX=S(aQ.sId+"_div",ao.bN)))
{

return;
}

ao.configHelp_(aQ.oMenu,
{
oEmbedWin:ao.bN,

sId:"select",

nWidth:kX.clientWidth+3,
nMinWidth:kX.clientWidth+3,
onitemclick:function(aM)
{
if(aQ.sName)
{
S(aQ.sName,ao.bN).value=aM;
}
if(!callBack.call(ao,aQ.onselect,[ao.Hf(aM,2)]))
{
ao.Ko=ao.Hf(aM,2);
ao.set(aM,2);
}
callBack.call(ao,aQ.onchange,[ao.Hf(aM,2)])
},
onshow:function()
{
var aX=ao.Ko.sId;
if(aX||aX===0)
{
this.selectItem(aX);
}
},
onload:function()
{

var mz=this,
cs=calcPos(kX),
LX=bodyScroll(ao.bN,'clientHeight'),
Gb=bodyScroll(ao.bN,'scrollTop'),
oU=LX+Gb;

callBack.call(ao,aQ.onafteropenmenu,[mz,kX]);

var cN=parseInt(mz.option("nHeight")),
cj=cs[2],
VV=kX.offsetHeight,
Fb=cj-cN-VV,
aKY=true;

if(aQ.oMenu.bAutoItemView)
{
var aNq=LX/2+Gb,
jT;

if(aQ.oMenu.nMaxHeight)
{
jT=Math.min(cN,aQ.oMenu.nMaxHeight);
if(cj>aNq&&cj-jT-VV>0)
{
cj=cj-jT-VV;
aKY=false;
}
}
else if(cj<aNq)
{

jT=Math.floor((oU-cj)*0.66);
}
else if(cj+cN<oU)
{

jT=cN;
}
else
{

jT=Math.floor((LX-(oU-cj+VV))*0.66);
cj=cj-Math.min(cN,jT)-VV;
aKY=false;
}
if(cN>jT)
{
mz.option("nHeight",jT);
}
}
else if(Fb>0&&cj+cN>oU)
{
cj=Fb;
}
if(aQ.oMenu.bOverLap)
{
cj+=aKY?-1:1;
}
mz.option("nX",cs[3]).option("nY",cj);
}
}
);

addEvent(ao.bN.document.body,(gbIsFF?"DOMMouseScroll":"mousewheel"),function()
{
aq.QMMenu("select","close");
}
);

kX.onclick=function()
{
if(kX.className.indexOf("btn_disabled")!=-1)return false;
callBack.call(ao,aQ.onbeforeopenmenu,[aQ.oMenu]);
ao.mK=new aq.QMMenu(aQ.oMenu);
return false;
};

kX.onkeydown=function(ap)
{
var eZ=ao.mK,
kX=S(aQ.sId+"_div",ao.bN),
ey=(ap||ao.bN.event).keyCode;
if(ey==38)
{
if(eZ==null)return false;
eZ.selectItemByOffset(-1);
}
else if(ey==40)
{
if(eZ==null)return false;
eZ.selectItemByOffset(1);
}
else if(ey==13)
{
if(eZ!=null)
{
ao.bY.oMenu.onitemclick(eZ.bY.oItems[eZ.getCurItemIndex()].sId);
aq.QMMenu("select","close");
ao.mK=null;
}else
{
kX.onclick();
}
}
return false;
}
return ao;
},
disable:function(aXh)
{
var	kX=S(this.bY.sId+"_div",this.bN),
dz=kX.className.replace("btn_disabled","");
dz=aXh?dz+" btn_disabled":dz;
kX.className=dz;
}
};

QMSelect.cD=
{
bqj:TE(
[
'<a tabindex="-1" class="btn_gray ',
'$@$if($sMenuType$!="dropdown")$@$',
' btn_select ',
'$@$else$@$',
' btn_dropdown ',
'$@$endif$@$',
'$@$if($nWidth$)$@$ btn_select_limiting$@$endif$@$" href="javascript:;" id="$sId$_div" style="width:$nWidth$px;$sStyle$">',
'<span id="$sId$" class="btn_select_txt">$content$</span>',
'<span class="ico_select_s"></span>',
'</a>'






]
),
bph:T(
'<input type="hidden" id="$sName$" name="$sName$" value="$sDefaultId$"/>'
),
bmk:"QmCs_2_"
};




var QMAddrParser=
{


parseAddr:function(bR)
{

bR=bR.replace('\t',' ');

var aO,gH,awa,aE,
aOY=[],
gf=getTop().trim(bR||"");

for(var i=0,aK=gf.length;i<aK;i=awa[0])
{
aO=[];
gH=[];
awa=this.bIJ(gf,i,aO,gH);
aE=this.bBB(awa[1],aO,gH);
if(aE.addr)
{
aOY.push(aE);
}
}

return aOY;
},






























isEmailAddress:function(bR)
{
var dvT=/^(.+)@(.+)$/,
dEb="\\(\\)><@,;:\\\\\\\"\\.\\[\\]",
cSV="\[^\\s"+dEb+"\]",

cko=cSV+'+',

KJ="("+cko+")",
dso=new RegExp("^"+KJ+"(\\."+KJ+")*$"),
bzG=bR.match(dvT);

if(bzG==null)
{
return false;
}

var pM=bzG[1],
hg=bzG[2];

for(var i=0;i<pM.length;i++)
{
if(pM.charCodeAt(i)>126||hg.charCodeAt(i)<32)
{
return false;
}
}

if(pM.match(dso)==null)
{
return false;
}

var duo=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/;
for(var i=0;i<hg.length;i++)
{
if(hg.charCodeAt(i)>126||hg.charCodeAt(i)<32)
{
return false;
}
}

var cfU=hg.match(duo);
if(cfU!=null)
{
for(var i=1;i<=4;i++)
{
if(cfU[i]>255)
{
return false;
}
}
}

var dkn=new RegExp("^"+cko+"$"),
cjD=hg.split(".");
for(var i=0;i<cjD.length;i++)
{
if(cjD[i].search(dkn)==-1)
{
return false;
}
}
return true;
},





bIJ:function(bR,dT,bf,apM)
{
var rX,XC,aJA,ek,
ql='N',
bBG='<(",;\uFF0C\uFF1B\u3001 ',
bmy='<("DDDDDD',
bmm='>)"',
hk=0,
fZ=dT,
KJ="",
Dk=0,
aOj=0;

for(var i=dT;ql!='D';)
{
rX=bR.charAt(i);
XC=ql;
Dk=0;


if(rX=='\\'&&ql!='<')
{
rX=bR.charAt(++i);
Dk=1;
}


if(rX=='')
{
ql='D';
hk=i;
}

else if(ql=='N')
{
if(!Dk&&(ek=bBG.indexOf(rX))>-1)
{
if(bR.charAt(i+1)!='<')
{
ql=bmy.charAt(ek);
aJA=bmm.charAt(ek);
hk=(ek>2)?i:i-1;
}
else if(rX!=' ')
{
ql=bmy.charAt(ek);
aJA=bmm.charAt(ek);
hk=(ek>2)?i:i-1;
}
else
{
KJ+=rX;
}
}





else
{
KJ+=rX;
}
++i;
}
else
{
if(!Dk&&rX==aJA)
{
ql='N';
hk=i;
}
else
{
KJ+=rX;
}
++i;
}

if(ql!=XC||aOj)
{
if(XC=='"'||getTop().trim(KJ)!="")
{
bf.push([KJ,XC,fZ,
bR.substr(fZ,hk-fZ+1)]);
apM.push(XC);
}
aOj=0;
KJ="";
fZ=hk+1;
}
}
return[i,bR.substr(dT,i-dT)];

},



bBB:function(Of,auB,apM)
{
var kH="",
eH="";
switch(apM.join(""))
{
case'N':
case'<':
eH=auB[0][0];
break;
case'"<':
case'N<':
case'"N':
kH=auB[0][0];
eH=auB[1][0];
break;
}

eH=getTop().trim(eH);
kH=getTop().trim(kH);


if(!/[^0-9]/.test(eH))
{
eH+="@qq.com";
}
eH=this.ddY(eH);
return this.isEmailAddress(eH)?{
nick:kH,
addr:eH,
valid:true
}:{
nick:"",
addr:(new RegExp("[;,\uFF1B\uFF0C\u3001 ]$")).test(Of)
?Of.slice(0,-1)
:Of,
valid:false
};
},







ddY:function(ez)
{
if(/^(400\d{7})@qq.com$/.test(ez)||/^(800\d{6,7})@qq.com$/.test(ez))
{
return RegExp.$1+"@b.qq.com";
}
return ez;
}
};






var JS=(function()
{
var cr={};

function aJQ(dv,iY)
{
var aq=getTop();
iY=typeof iY=="string"?[iY]:iY;

E(iY,function(ji)
{
if(cr[ji]!==true)
{
loadJsFile(dv+ji,true,aq.document,function()
{
var Ll=cr[ji];
cr[ji]=true;
if(isArr(Ll))
{
for(var i in Ll)
{
Ll[i]();
}
}
}
);
}
});
}

function bIc(iY,bV)
{
iY=(typeof iY=="string")?[iY]:iY;

function aJJ()
{
var lN=true;
E(iY,function(ji)
{
lN=lN&&(cr[ji]===true);
});
lN&&bV();
return lN;
}

if(!aJJ())
{
E(iY,function(ji)
{
var Ll=cr[ji];
if(Ll===true)
{
return;
}
else if(!isArr(Ll))
{
cr[ji]=[aJJ];
}
else
{
Ll.push(aJJ);
}
});
}
}


















return(
{
load:aJQ,
wait:bIc
})
})();






var	dE,eS;




function clsXfBatchDownload(ebZ,bV)
{
var ao=this;
ao.doQ=ebZ;
ao.ddF={
"sid":21513,
"data":[]
};
ao.chQ=bV;

if(typeof(XFLIB)=="undefined")
{
bV("check");
var edo=location.protocol==="https:"?"https://static.xf.qq.com/js/xf/xflib2.0.js":"http://x.soso.com/js/xf/xflib2.0.js";
loadJsFile(edo,true);
}
waitFor(function()
{
return typeof(XFLIB)!="undefined";
},
function(aJe)
{
if(aJe)
{
if(!ao.bDN())
{
bV("check_err");
}
else
{
setCookie("qm_ftn_key","",new Date(),"/","qq.com");
bV("get_url");
ao.ehH();
}
}
else
{
bV("load_err");
}
});
}
clsXfBatchDownload.prototype=
{
bDN:function()
{
return XFLIB.IsXFInstalled();
},
ehH:function()
{
this.epy(this.eyt());
},
eyt:function()
{
var bfp=[];
for(var aV in this.doQ)
{
bfp.push(
this.doQ[aV].replace("t=exs_ftn_download","t=exs_ftn_getfiledownload&s=email").replace(/^http:\/\/mail.qq.com/,"")
);
}
return bfp;
},
epy:function(aQQ)
{
var aK=Math.min(100,aQQ.length),
gq=new QMAjax,
aO={},
ao=this;
(function bVl(jt)
{
if(jt>=aK)
{
return ao.cas(aO,aK);
}
QMAjax.send([aQQ[jt],"&nm=",jt,"&rn=",Math.random()].join(""),
{
method:"GET",
onload:function(bh,bO)
{
var bd="name"+jt;
if(bh&&bO.indexOf(bd)>0)
{
aO[bd]=bO.split('"')[1];
}
bVl(jt+1);
}
},
gq);
})(0);
},
cTV:function(bz)
{
var ejY=/fname=([^&]+)/g;
ejY.test(bz);
return RegExp.$1;
},
cas:function(biE,aLl){

var	ao=this,
bUB=0,
eMh=ao.ddF.data;
for(var aV=0;aV<aLl;aV++)
{
if(typeof biE["name"+aV]!="undefined")
{
var amQ=biE["name"+aV].split("|");
if(amQ[0]!="error"&&amQ[0].indexOf("http://")==0)
{
eMh.push({
"url":amQ[0].replace(/#/g,"_"),
"file_name":ao.cTV(amQ[0]),
"cookie":amQ[1]
});
bUB++;
}
}
}
if(bUB<aLl)
{
ao.chQ("geturl_err",aLl-bUB);
}
if(bUB>0)
{
showProcess(0);
ao.bUt();
}
},
bUt:function()
{
XFLIB.startDownload_BatchTask(this.ddF);
}
}





















var QMSender=function(rY)
{
this.bN=rY.oWin;
this.IV=[];
this.aGY=false;
this.aLp=null;

var ao=this;
getTop().goUserInfo.wait(function()
{
ao.bRx(rY);
});
}

eS=QMSender;
dE=eS.prototype;

dE.bRx=function(rY)
{
var bi=S("Senderdiv",this.bN);
if(!bi)
{
return;
}
try
{
var jd=getTop().goUserInfo.get('RealDefaultAllMail');
}
catch(e)
{
var tI=arguments.callee;
return setTimeout(function()
{
tI.apply(this.bN,arguments);
},500);
}

if(!jd||!jd.length)
{
return;
}

var asg=rY.nCurFolderId;
var aeP=rY.sCurSaveFrom;
var aQg=rY.bShowNode;
var bBg=typeof(rY.sTitle)=="undefined"?
"\u53EF\u9009\u62E9\u90AE\u7BB1\u522B\u540D\u6216POP\u6587\u4EF6\u5939\u7684\u90AE\u4EF6\u5730\u5740&#10;\u4F5C\u4E3A\u53D1\u4FE1\u5E10\u53F7\u3002":rY.sTitle;

var bEw=typeof(rY.sDesContent)=="undefined"?
"\u53D1\u4EF6\u4EBA\uFF1A":rY.sDesContent;
var djh=rY.bDraft||false;
var dAN=(this.bN.location.getParams()["s"]=="background"&&this.bN.location.getParams()["recoverCompose"]=="true")
var cyz=rY.bFromReload;

this.aLp=function(av)
{

var bZb=S("sendmailname_val",this.bN);
if(!bZb)
{
return;
}

var uy="",
ZF=GelTags("span",S("sendmailname_val",this.bN))[0],
arA=GelTags("b",S("sendmailname_val",this.bN))[0],
kH=ZF.getAttribute("nickname"),
eL=kH?kH.split("|"):[];


if(eL[0]==av.email)
{
uy=eL[1];
}
ZF.innerHTML=this.cD.aOF.replace(av);
arA.innerHTML=htmlEncode(uy)||av.nick.replace(/(^\"|\"$)/g,"");
S("sendname",this.bN).value=htmlDecode(arA.innerHTML);


this.brJ(av);


if(av.sms)
{
loadJsFileToTop(["$js_path$qmtip181b8c.js"]);
var Oj=this.bN;

waitFor(function()
{
return QMTip;
},
function(bh)
{

if(bh&&S("sendmailname",Oj).value==av.email)
{
QMTip.show({
tipid:10001,
domid:'sendmailname_val',
win:Oj,
msg:['<span class="black">\u5C06\u4F7F\u7528\u624B\u673A\u53F7\u90AE\u7BB1\u53D1\u4FE1\uFF0C\u8FD9\u6837\u5BF9\u65B9\u56DE<br/>\u4FE1\u60A8\u5C31\u4F1A\u83B7\u5F97\u77ED\u4FE1\u63D0\u9192\u3002<a onclick="window.open(\'http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=8&&no=1000605\')">\u8BE6\u60C5</a></span>'].join(''),
arrow_direction:'down',
arrow_offset:25,
height_offset:4,
tip_offset:-110,
width:305,
auto_hide:1,
notlog:true,
bForceShow:true
});
}
}
);
}
callBack.call(this,rY.onclickItemCallBack,[av]);
}

var aRe=typeof(rY.sAlignType)=="undefined"?
"left":aRe,
bTi=rY.sVerAlign||"bottom";

var awO=300;
var cS=parseInt(rY.sWidth)||awO;
var abD,aXd;
this.aGY=(cS<0);


if(this.aGY)
{
abD=getStrDispLen(rY.sCurSaveFrom)+60;
cS=abD+(gbIsIE?50:50);
}
else
{
abD=cS-(gbIsIE?40:40);
}
aXd=abD-25;

var bxp=Math.floor(cS*23/awO);
var byq=Math.floor(cS*20/awO);

var vm=[];
var zx=[];
var zT=null;
var ahk=this.gN;
var bsr=this.cD.bGq;
var bAj=this.cD.aOF;
var bCh=this.cD.bnP;
var bDF=this.cD.bCT;

var bDh=this.IV=[];

var bgv=this;



















for(var i=0;i<jd.length;i++)
{
(function()
{
var aE=jd[i];
var gk=aE.email;
var hg=gk.split("@").pop();
var aVl=ahk.hasOwnProperty(hg);
var Rs={
nick:aE.nickname&&"\""+aE.nickname+"\"",
email:gk,
phone:aE.phone,
emaildisp:this.aGY?gk:subAsiiStr(gk,aVl?byq:bxp,"..."),
signid:aE.signid,
domain:bCh.replace({images_path:getPath("image"),margin_top:(aE.phone==1?416:(aVl?ahk[hg]:321))}),
sms:aE.phone==1&&aE.smsleft>0


};

bDh.push(Rs);
vm.push(extend({smtp:aE.smtp==2?'':''},Rs));

zx.push(function(e)
{
bgv.aLp(Rs);
});

if(!asg&&!aeP&&getTop().goUserInfo.get('RealDefaulSender')==gk)
{

zT=Rs;
}
else if((aeP&&aeP.toLowerCase()==aE.email)
||(!aeP&&asg&&asg==aE.folderid)
||zT==null)
{
zT=Rs;
}
})();
}

bi.innerHTML=bDF.replace({
title:bBg,
desContent:bEw,
email_width:aXd,
sel_width:abD,
width:cS,
images_path:getPath("image"),
nick:zT.nick,
email:bAj.replace(zT)
});

var OR=0;
S("sendmailname_val",this.bN).onclick=function()
{
if(!OR)
{
for(var i=0;i<jd.length;i++)
{
var aUA=getStrDispLen(jd[i].email+(jd[i].smtp==2?'':''));
if(OR<aUA)
{
OR=aUA;
}
}
OR=Math.max(this.clientWidth,OR+42);
}
var aiY=calcPos(this),
bq=[],
brg=GelTags("span",this)[0],cgj=0;

for(var i=0;i<vm.length;i++)
{

brg.innerHTML==vm[i].email&&(cgj=i);
bq.push({
sId:i,
sItemValue:bsr.replace(extend({selected:brg.innerHTML==vm[i].email},vm[i]))
});
}

var ZF=this.getElementsByTagName("span")[0],
uy="",
beu=ZF&&ZF.innerHTML||"";

for(var i=0;i<jd.length;i++)
{

if(jd[i].email==beu)
{
uy=jd[i].nickname;

var kH=ZF.getAttribute("nickname"),
eL=kH?kH.split("|"):[];



if(eL[0]==beu)
{
uy=eL[1];
}

break;
}
}

bq.push({
sId:"border",
nHeight:5,
sItemValue:[
'<div style="border-top:1px solid;margin-top:2px;padding-top:2px;font-size:0;line-height:0;height:0;"></div>'
].join(""),
bDisSelect:true
});
bq.push({
sId:"send__nickname",
nHeight:25,
sItemValue:[
'<div style="padding-left:15px;overflow:hidden">',

'<span id="snn_getAlias" style="line-height:25px;">',
'<font style="color:#000">\u53D1\u4FE1\u6635\u79F0\uFF1A</font>',
'<span title="',uy,'">',subAsiiStr(uy,16,"...",true),'</span>',
'&nbsp;<a href="javascript:;" onclick="getTop().QMSender.initAlias(\'',uy,'\');return false">\u4FEE\u6539</a>&nbsp;&nbsp;&nbsp;&nbsp;',
'</span>',
'<span id="snn_setAlias" style="display:none;line-height:25px;">',
'<input onkeyup="if(event.keyCode==13){getTop().QMSender.setAlias()};" class="text" onchange="" style="width:120px" type="text" value=""/>',

'&nbsp;<input type="button" value="\u786E\u8BA4" onclick="getTop().QMSender.setAlias();return false" />',
'</span>',
'</div>'
].join(""),
bDisSelect:true
});
var aIn=bq.length>17?17:bq.length,
dld=new(getTop().QMMenu)({
oEmbedWin:bgv.bN,
sId:"sendermenu",
nMaxItemView:17,
nX:aRe=="left"?aiY[3]:aiY[3]-(OR-this.clientWidth),
nY:bTi=="bottom"?aiY[2]:(aiY[2]-21*aIn-21),

nMinWidth:230,
bAnimation:false,
nItemHeight:21,
oItems:bq,
onitemclick:function(aM)
{
zx[aM]();
},
onshow:function()
{

dld.selectItem(cgj);
}
});
};

if(S("sendmailname",this.bN))
{
S("sendmailname",this.bN).value=zT.email;
}
var Oj=this.bN;
if(Oj.setSignature&&!djh&&!dAN)
{
if(getTop().goUserInfo.get('RealUserSignatureId')!=-1)
{
S("signtype",this.bN)&&(S("signtype",this.bN).value=getTop().goUserInfo.get('RealUserSignatureId'));
}

if(!cyz)
{
Oj.setSignature("sign",getTop().goUserInfo.get('RealUserSignatureId'));
}












}
show(aQg?bi[aQg]:bi,true);
if(vm.length>1)
{
getTop().requestShowTip("sendmailname_val",17,this.bN);
}
};
eS.setAlias=function()
{
var aq=getTop(),
aI=aq.getMainWin(),
xd=S("sendermenu_QMMenu",aI)?"sendermenu_QMMenu_":"sendermenu__",
bT=GelTags("input",S(xd+"snn_setAlias",aI))[0],
aJj=GelTags("span",S(xd+"snn_getAlias",aI))[0],
anO=GelTags("span",S("sendmailname_val",aI))[0],
arA=GelTags("b",S("sendmailname_val",aI))[0],
cB=bT.value;

S("sendname",aI).value=cB||" ";
anO.setAttribute("nickname",[anO.innerHTML,cB].join("|"));

arA.innerHTML=htmlEncode(cB);
aJj.innerHTML=htmlEncode(cB);

if(S("useraddr").innerHTML==anO.innerHTML)
{
S("useralias").innerHTML=htmlEncode(cB);
}

show(S(xd+"snn_setAlias",aI),false);
show(S(xd+"snn_getAlias",aI),true);
}
eS.initAlias=function(aDY)
{
var aq=getTop(),
aI=aq.getMainWin(),
xd=S("sendermenu_QMMenu",aI)?"sendermenu_QMMenu_":"sendermenu__",
aJj=GelTags("span",S(xd+"snn_getAlias",aI))[0],
bT=GelTags("input",S(xd+"snn_setAlias",aI))[0];



bT.value=htmlDecode(aJj.innerHTML);

show(S(xd+"snn_setAlias",aI),true);
show(S(xd+"snn_getAlias",aI),false);
setTimeout(function(){
bT.select();
});
}

dE.brJ=function(av)
{
var Oj=this.bN;
S("sendmailname",Oj).value=av.email;
if(Oj.setSignature)
{
Oj.setSignature("sign",av.signid==-2?getTop().goUserInfo.get('RealUserSignatureId'):av.signid);
}
}


dE.setSenderSelected=function(mB)
{
var bq=this.IV;
for(var i=bq.length-1;i>=0;i--)
{
if(bq[i].email==mB)
{
this.aLp(bq[i]);
return;
}
}
}

dE.gN={

"hotmail.com":0,
"live.com":0,
"live.cn":0,
"msn.com":0,
"msn.cn":0,

"yahoo.com.cn":30,
"yahoo.cn":30,
"yahoo.com":30,
"ymail.com":30,
"rocketmail.com":30,

"gmail.com":61,
"vipgmail.com":61,

"sina.com":95,
"sina.com.cn":95,
"vip.sina.com":95,
"my3ia.sina.com":95,
"sina.cn":95,

"163.com":383,
"vip.163.com":383,
"126.com":352,
"vip.126.com":352,
"yeah.net":223,

"foxmail.com":159,

"sohu.com":193,
"vip.sohu.com":193,

"vip.qq.com":288,
"qq.com":288,

"21cn.com":256,
"21cn.net":256
};

dE.cD={
bCT:T([
'<div title="$title$" style="float:left; margin-left:-3px;" class="textoftitle">&nbsp;$desContent$</div>',
'<div id="sendmailname_val" unselectable="on" onmousedown="return false" ',
'style="cursor:pointer; padding:0 0 0 3px;  float:left;">',
'<b>$nick$</b> &lt;<span>$email$</span>&gt;<span class="addrtitle" style="font-family: arial,sans-serif; padding-left:4px; font-size:9px; position:relative; top:-1px;" >\u25BC</span>',
'</div>',
]),
bGq:TE([



'<div class="composeAccount" style="">',
'<input type="button" class="ft_upload_success" style="$@$if(!$selected$)$@$visibility:hidden;$@$endif$@$">$email$$smtp$',
'</div>'
]),
aOF:T([



'$email$'
]),
bnP:T([
'<img src="$images_path$spacer104474.gif" style="background-position:0 -$margin_top$px;" valign="absmiddle" >'
])
};








































var QMAutoComplete=inherit("QMAutoComplete",Object,
function(aG)
{
return{

$_constructor_:function(ar)
{
this.agZ(ar);
},






show:function(av)
{
var ao=this;
ao.pH=av;
return ao.gl();
},
close:function()
{
var ao=this;
ao.mK&&ao.mK.hide();
return ao;
},
isShow:function()
{
var eZ=this.mK;
return eZ&&eZ.isShow();
},
getSelection:function()
{
return this.pH[this.mK.getSelectItemId()];
},









setHeader:function(cP)
{
var eZ=this.mK;
return eZ&&eZ.setHeader(cP);
},

agZ:function(ar)
{
var ao=this,
bT=ao.Kj=ar.oInput;

ao.aLG=ar.oPosObj||bT;
ao.bN=ao.aLG.ownerDocument.parentWindow
||ao.aLG.ownerDocument.defaultView;
ao.pH=null;
ao.mK=null;
ao.aHR=ar.defaultValue||"";
ao.bhj=!(ar.notSupportKey||0);

ao.kq=ar.type||"";

bT.setAttribute("autocomplete","off");


ao.azy=ar.sUrl;
ao.bWV=ar.ondata;

ao.JR=ao.azy?500:20;
ao.JR=(typeof ar.nDelay=="number")?
ar.nDelay:ao.JR;

ao.bUy=ar.ongetdata;
ao.Cp=ar.onselect;
ao.axF=ar.onclick;
ao.aOm=ar.onkeydown;
ao.bSk=ar.ontouchstart;

addEvents(bT,
{
keydown:ao.mD(ao.aIM),
keypress:ao.mD(ao.aTI),
keyup:ao.mD(ao.aUL),
focus:ao.mD(ao.xT),
blur:ao.mD(ao.azD)
}
);

ao.mK=new QMAutoComplete.bSF(
{
sId:unikey(),
oItems:[],
supportKey:ao.bhj,
oEmbedWin:ao.bN,
nWidth:ar.nWidth||"auto",
nMinWidth:ar.nMinWidth||100,
nItemHeight:ar.nItemHeight||21,
nMaxItemView:ar.nMaxItemView||0,
type:ar.type,
sClassName:ar.sClassName,
oClass:ar.oClass,
bDisplay:false,
onselect:function(aM)
{
callBack.call(ao,ao.Cp,[ao.pH[aM]]);
},
onclick:function(ap,aM)
{
callBack.call(ao,ao.axF,[ap,ao.pH[aM]]);
},
ontouchstart:function(ap)
{
callBack.call(ao,ao.bSk,[ap]);
}
}
);
return ao.ayf();
},
mD:function(ea)
{
var ao=this;
return function(ap)
{
return ea.call(ao,ap);
};
},
aTI:function(ap)
{
if(gbIsOpera&&ap.keyCode==13)
{
preventDefault(ap);
}
},
aUL:function(ap)
{
if(!ap.ctrlKey)
{
var ey=ap.keyCode,
ao=this;
if(!(ey==38||ey==40||(ey==13&&ao.bvj!=229)||ey==27))
{
ao.asG&&clearTimeout(ao.asG);
ao.asG=setTimeout(function()
{

if(ao.azy)
{
var EU=trim(ao.Kj.value);
if(EU=="")
{
ao.close();
}
else
{
EU=encodeURIComponent(EU);
QMAjax.send([ao.azy,"&resp_charset=UTF8&q=",EU].join(""),
{
method:"get",
onload:function(bh,bO)
{
if(bh)
{
ao.pH=ao.bWV.call(ao,bO);
ao.gl().asG=0;
}




}
}
);
}
}
else
{
ao.pH=ao.bUy(ao.Kj,ey);
ao.gl().asG=0;
}
},
ao.JR
);
}
}
},
aIM:function(ap)
{
var ao=this,
ey=ap.keyCode;
callBack.call(ao,ao.aOm,[ap,1]);


ao.bvj=ey;
if(ao.isShow()&&this.bhj)
{
switch(ey)
{
case 13:
callBack.call(ao,ao.Cp,[ao.getSelection()]);
ao.close();
preventDefault(ap);
break;
case 38:
ao.mK.selectItem(-1);
preventDefault(ap);
break;
case 40:
ao.mK.selectItem(1);
preventDefault(ap);
break;
case 9:
callBack.call(ao,ao.Cp,[ao.getSelection()]);
ao.close();

break;
case 27:


ao.close();
preventDefault(ap);
break;
}
}
callBack.call(ao,ao.aOm,[ap,0]);
},
xT:function(ap,axp)
{
var ao=this;
ao.VT=true;
axp&&ao.Kj.focus();
return ao.ayf();
},
azD:function(ap)
{
var ao=this;
ao.VT=false;
setTimeout(function()
{
!ao.VT&&
ao.close().ayf();
},
20
);
},
ayf:function()
{
var ao=this;
if(ao.aHR)
{
var lb=ao.Kj,
cB=lb.value;
if(ao.VT)
{
if(cB==ao.aHR)
{
var dz=lb.className.replace(/graytext/ig,"");
if(this.kq=="rss")
{
dz=dz.replace(/textInput/ig," textInput2");
}
lb.className=dz;
lb.value="";
}
}
else
{
if(cB=="")
{
var dz=(this.kq=="rss"?lb.className.replace(/textInput2/ig," textInput"):lb.className)+" graytext";
lb.className=dz;
lb.value=ao.aHR;
}
}
}
return ao;
},
gl:function()
{
var ao=this;
if(!ao.pH||ao.pH.length==0)
{
ao.close();
}
else
{
var cs=calcPos(ao.aLG);
ao.mK.setContent(
{
oItems:ao.pH
}
).option("nX",cs[3]).option("nY",cs[2]);
}
return ao;
}
}
}
);

QMAutoComplete.bSF=inheritEx("QMAutoCompleteMenu",QMPanel,
function(aG)
{
return{
processHtml_:function(cP)
{
return cP;
},

initMemVar_:function(ar)
{
callBack.call(this,aG.initMemVar_,[ar]);

if(ar.supportKey)
{
this.aIE(this.zh=0);
}
},

setEvent_:function()
{
var aQ=this.bY,
ao=this,
nL=this.S("_menuall_"),
OW=this.S("_title_"),
aNb=function(ap){
var ap=ap||aQ.oEmbedWin.event,
aT=getEventTarget(ap);
while(aT&&aT!=nL&&aT.parentNode!=nL)
{
aT=aT.parentNode;
}
return aT;
};

if(aQ.supportKey)
{
nL.onmouseover=function(ap){


if(now()-(ao.bZD||0)>500)
{
var aT=aNb(ap),
AL=parseInt(aT.id.substr(ao.vu.length+1));
if(!isNaN(AL))
{
ao.aIE(AL);
}
}
};
OW.onclick=function(ap){
var ap=ap||aQ.oEmbedWin.event;
callBack.call(ao,aQ.onclick,[ap,""]);
};
nL.onclick=function(ap){
var aT=aNb(ap),
bt=aT.getAttribute("key");
callBack.call(ao,aQ.onclick,[ap,bt]);
if(bt)
{
callBack.call(ao,aQ.onselect,[bt]);
setClass(aT,"menu_item");
if(aQ.type!="rss")
{
ao.hide();
}
}
};
}

addEvents(this.ia,
{
mousedown:preventDefault,
touchstart:function(ap)
{
callBack.call(ao,aQ.ontouchstart,[ap]);
}
}
);
},

dfConfig_:function(ar)
{
var bq=ar.oItems,
EL=(ar.nItemHeight||21)*(ar.nMaxItemView||bq.length);

this.configHelp_(ar,
{
mheight:EL,
nWidth:"auto",
nHeight:EL,
nZIndex:1121
}
);


this.configHelp_(ar,{sStyle:"background:#fff"},true);
return callBack.call(this,aG.dfConfig_,[ar]);
},







bdN:function(ar)
{
var bq=ar.oItems,
bX=[],
aQ=this.bY,
jh=(aQ&&aQ.oClass&&aQ.oClass.classnormal)?aQ.oClass.classnormal:"menu_item";
this.atC=0;
for(var i=0,cQ=bq.length;i<cQ;i++)
{

bX.push('<div unselectable="on" style="height:',bq[i].nItemHeight||ar.nItemHeight,'px;" onclick=";" ');
var aX=bq[i].sId;
if(aX||aX===0)
{
bX.push('key="',i,'" id="',this.vu,'_',this.atC++,'" class="',jh,'" >');
}
else
{
bX.push('class="menu_item_onfun">');
}
bX.push(bq[i].sItemValue,'</div>');
}
return bX;
},


insertHtml_:function(ar)
{

var bq=ar.oItems,
bX=[
'<div style="margin:0px;">',
'<div class="menu_base">',
'<div class="menu_bd" style="padding:0;">',
'<div unselectable="on" id="',this.vu,'__title_" style="white-space:nowrap;width:',ar.nMinWidth,'px;line-height:',ar.nItemHeight,'px;',(ar.header?'':'display:none;'),'">',ar.header,'</div>',
'<div unselectable="on" id="',this.vu,'__menuall_" style="overflow-y:auto;height:auto;line-height:',ar.nItemHeight,'px;width:'];


if(ar.nWidth=="auto")
{

bX.push(!getTop().gbIsIE?ar.nMinWidth+"px":"auto");
}
else
{

bX.push(ar.nWidth-(getTop().gbIsIE?0:2),"px;overflow-x:hidden;");
}
bX.push('">');
bX=bX.concat(this.bdN(ar));
bX.push('</div></div></div></div>');
ar.sBodyHtml=bX.join("");

callBack.call(this,aG.insertHtml_,[ar]);
},

ZA:function(Da,asx)
{
var biD=this.bY.nMaxItemView||this.bY.oItems.length,
Xe=this.atC<=biD?"auto":this.bY.nItemHeight*biD;
this.option("nHeight",Xe);
Da.style.height=Xe=="auto"?"auto":Xe+"px";

if(this.bY.nWidth!="auto")
{
if(Da.style.width!=this.bY.nWidth)
{
asx.style.width=Da.style.width=this.bY.nWidth-(getTop().gbIsIE?0:2)+"px";
}
}
else
{
if(gnIEVer>6&&Da.ownerDocument.documentElement.clientHeight)
{
asx.style.width=Da.style.width="auto";
}

if(Da.offsetWidth>10)
{
asx.style.width=Da.style.width=
(Math.max(Da.offsetWidth,Da.scrollWidth,asx.offsetWidth,this.bY.nMinWidth)
+(gbIsIE?(gnIEVer>6?18:0):Da.offsetWidth-Da.scrollWidth))+"px";


if(gnIEVer==8)
{
Da.style.zoom="";
Da.style.zoom=1;
}
}

}
},

setHeader:function(cP)
{
if(cP)
{
this.S("_title_").innerHTML=this.processHtml_(cP);
show(this.S("_title_"),1);
}
else if(cP=="")
{
show(this.S("_title_"),0);
}
},

setContent:function(ar)
{
var ao=this,
nL=ao.S("_menuall_"),
OW=ao.S("_title_");

this.configHelp_(ao.bY,ar,true);
if(ao.bY.nWidth=="auto")
{
OW.style.width=nL.style.width=gbIsIE&&gnIEVer!=7?ao.bY.nMinWidth+"px":"auto";
}
ao.setHeader(ar.oItems.header);

nL.innerHTML=ao.bdN(ar).join("");
if(ao.bY.supportKey)
{
ao.selectItem(ao.zh=0);
}

ao.show();
ao.ZA(nL,OW);
callBack.call(ao,ao.bY.onload,[ar]);

ao.bZD=now();

return ao;
},

selectItem:function(rf)
{
var ao=this,
lg=ao.aIE((ao.zh+rf+ao.atC)%ao.atC);

scrollIntoMidView(lg,ao.S("_menuall_"));



},

getSelectItemId:function()
{
var bhK=this.S(this.zh);
return bhK&&bhK.getAttribute("key");
},

aIE:function(bgr)
{
var lg=this.S(this.zh),
aQ=this.bY,
jh=(aQ&&aQ.oClass&&aQ.oClass.classnormal)?aQ.oClass.classnormal:"menu_item",
bSu=(aQ&&aQ.oClass&&aQ.oClass.classhigh)?aQ.oClass.classhigh:"menu_item_high";

if(lg)
{
lg.className=jh;
}

if(lg=this.S(bgr))
{
lg.className=bSu;
this.zh=bgr;
}
return lg;
}
};
}
);















function Dz(ar)
{
var cXo=getTop().getMainWin().location.getParams()["folderkey"];
ar.bL.push('&t=mail_mgr2&resp_charset=UTF8&ef=js&sid=',getSid(),getTop().bnewwin?'&newwin=true':'');
ar.bL.push(cXo?("&folderkey="+cXo):"");
QMAjax.send(ar.aY||'/cgi-bin/mail_mgr',{
content:ar.bL.join(""),
onload:function(bh,bO,fU){
var byZ=bO.indexOf(ar.An)>=0,
bdD=bO.indexOf("cgi exception")>=0;
if(bh&&(byZ||bdD))
{
var aO=evalValue(bO);
if(bdD)
{

showError(aO.errmsg,0,true);
}
else
{
ar.nv(aO,bO,fU);
}
}
else if(ar.sO)
{
showError(ar.sO);
}
}
});
}

var AjaxSendMailMgr=Dz;
function setRollBack(bG,cT)
{

if(bG&&bG>0)
{
setGlobalVarValue('DEF_ROLLBACK_ACTION',{
msg:cT,
rbkey:bG
});
}
}

function getRollbackText(bG)
{
return bG&&bG>0?"&nbsp;<a href='#' style='color:white' onclick='getTop().rollback(2);return false;'>[\u64A4\u9500]</a>":"";
}














function setMailFilter(bD,ar)
{

var asU=true,
bF=ar.oMail,
aK=bF.length,
acd=QMMailList.aVA(ar),
bZs=acd[1],
aIl=acd[0];


function eyv(mB)
{

if(/^service@tencent.com$/.test(mB))
{
return false;
}
return!/(10000|newsletter-noreply|postmaster)@qq.com/g.test(mB);
}

for(var i=aK-1;i>=0;i--)
{
var nM=bF[i].oChk;

if(nM&&/^[@C]/.test(nM.value))
{
asU=false;
}
}

asU=asU&&ar.sFid==1&&aK>1&&aIl&&eyv(aIl);
if(!asU)
{
return;
}

bD.sEmail=aIl;
bD.sNickname=htmlEncode(bZs);
bD.sFolderName=htmlEncode(bD.sFolderName);

var 
blz='\u63D0\u793A',
aiN="&fun=addfilter&t=foldermgr_json&resp_charset=UTF8&ef=js&sid="+getSid(),
aQ=
({
move:{

kt:3,
ahH:"\u79FB\u52A8",
Xb:"\u81EA\u52A8\u79FB\u52A8\u5230\u6587\u4EF6\u5939 <span class='bold'>$sFolderName$</span> \u4E2D",
dD:T(aiN+'&action=move&sender=$sEmail$&folderid=$sFolderId$&oldmail=$oldmail$')
},
star:{

kt:2,
ahH:"\u6807\u8BB0",
Xb:"\u81EA\u52A8\u6807\u661F",
dD:T(aiN+'&action=star&sender=$sEmail$&oldmail=$oldmail$')
},
tag:{

kt:2,
ahH:"\u6807\u8BB0",
Xb:"\u81EA\u52A8\u8BBE\u7F6E $sTagName$ \u6807\u7B7E",
dD:T(aiN+'&action=tag&sender=$sEmail$&tagid=$sTagId$&oldmail=$oldmail$')
},
read:{

kt:1,
ahH:"\u6807\u8BB0",
Xb:"\u81EA\u52A8\u6807\u4E3A\u5DF2\u8BFB",
dD:T(aiN+'&action=read&sender=$sEmail$&oldmail=$oldmail$')
},
"delete":{

kt:4,
ahH:"\u5220\u9664",
Xb:"\u81EA\u52A8\u5220\u9664",
dD:T(aiN+'&action=delete&sender=$sEmail$&oldmail=$oldmail$')
}
})[bD.sFilterType];


ossLog("realtime","all","stat=noting&locval=,,auto_filter_label,"+aQ.kt);

confirmBox({
style:'cnfx_move',
confirmBtnTxt:'\u521B\u5EFA',
cancelBtnTxt:'\u5173\u95ED',
sType:"custom",
recordInfo:'\u5BF9\u5386\u53F2\u90AE\u4EF6\u6267\u884C\u8BE5\u6536\u4FE1\u89C4\u5219',
enableRecord:true,
defaultChecked:true,
title:blz,
msg:T([
'<div class="cnfx_content">',
'<span class="icon_finish_b" style="float:left;margin:15px 10px 0;display:$imgdisp$;"></span>',
'<table style="width:$width$px;height:$height$px;">',
'<tr><td style="vertical-align:top;"><div style="padding-top:17px;word-break:break-all;line-height:150%;" class="bold b_size">',
'\u5DF2\u6210\u529F',aQ.ahH,'\u90AE\u4EF6',
'</div></td></tr>',
'</table>',
'</div>',
'<div style="border-top: 1px solid #E3E3E3; margin-top: 4px; width: 400px; padding: 18px 30px;">',
'<h3 class="b_size bold">\u662F\u5426\u521B\u5EFA\u6536\u4FE1\u89C4\u5219\uFF1F</h3>',
'<div class="b_size" style="border-left: 3px solid #DEDEDE; margin-left: 16px; padding-left: 10px; margin-top: 10px;">',
'<div style="width:400px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">',
'\u5982\u679C \u53D1\u4EF6\u4EBA\u662F <span class="bold">$sNickname$</span>&lt;$sEmail$&gt;\uFF0C',
'</div>',
'<div style="margin: 6px 0pt 8px 14px;">\u5219 ',aQ.Xb,'\u3002</div>',
'<div class="f_size">',
'<input type="checkbox" checked="checked" id="recordstatus" style="vertical-align: middle;"><label for="recordstatus">\u5BF9\u5386\u53F2\u90AE\u4EF6\u6267\u884C\u8BE5\u6536\u4FE1\u89C4\u5219</label>',
'</div>',
'</div>',
'</div>',
''
]).replace(bD),
onreturn:function(kI,aVC,bRN){

if(kI)
{
bD.oldmail=aVC?1:0;

QMAjax.send('/cgi-bin/foldermgr',{
content:aQ.dD.replace(bD),
onload:function(bh,sV)
{
if(bh&&sV.indexOf("addfilter")>0)
{
showInfo("\u521B\u5EFA\u6210\u529F");
if(aVC)
{

reloadFrmLeftMain(false,true);
}
}
else
{
showError("\u521B\u5EFA\u5931\u8D25");
}
}
});
}
},
onload:function()
{
var ao=this;

ao.S("_foot_").style.background="white";
}
});
return;
}



function colorTag(ap,gu,ax)
{
ap=ap||ax.event;
stopPropagation(ap);
preventDefault(ap);

var aX="tag"+gu,
bEA=QMMenu(aX,"isClose");
if(bEA===false)
{
return;
}

var au=getEventTarget(ap),
aTJ=function(ja)
{
return/\bflagbg(\d+)\b/.test(ja)&&RegExp.$1;
},
bDq=aTJ(au.className),

bDW=T(['<div class="flag_menu_item"><div id="flagbg$flagbg$" class="flagbg$flagbg$"></div></div>']),
axI=[
['0','1','2','3','4'],
['5','6','7','8','9'],
['11','12','13','14','15'],
['16','17','18','19','20'],
['21','22','23','24','25'],
['26','27','28','29','30'],
['31','32','33','34','35']
],
aAo=
{
nHeight:5,
sItemValue:'<div style="height:1px; overflow:hidden;"></div>'
},
bq=[];

bq.push(aAo);

for(var aV=0,KL=axI.length;aV<KL;aV++)
{
for(var oV=[],iA=0,aah=axI[aV].length;iA<aah;iA++)
{
oV.push(bDW.replace({
flagbg:axI[aV][iA]
}));
}
bq.push({
nHeight:24,
sItemValue:oV.join("")
});
if(aV==1)
{
bq.push(aAo);
}
}

bq.push(aAo);

new QMMenu({
oEmbedWin:ax,
sId:aX,
nWidth:148,
oItems:bq,

onshow:function()
{




},
onload:function()
{
var mz=this,
cs=calcPos(au),
cN=parseInt(mz.option("nHeight")),
cj=cs[2],

oU=bodyScroll(ax,'clientHeight')+bodyScroll(ax,'scrollTop'),
Fb=cj-cN-au.clientHeight;
if(Fb>0&&cj+cN>oU)
{
cj=Fb;
}
mz.option("nX",cs[3]).option("nY",cj);

var nL=mz.S("_menuall_"),
aza=null;
function Fl(ap)
{
var aT=getEventTarget(ap);
while(aT&&aT!=nL)
{
if(aT.id.indexOf("flagbg")>-1)
{
return aT;
}
aT=aT.parentNode;
}
return null;
}

addEvents(nL,
{
mousemove:function(ap)
{
var aT=Fl(ap);
if(aza)
{
aza.parentNode.style.borderColor="#fff";
}
if(aza=aT)
{

aT.parentNode.style.borderColor="#aaa";
}
},
click:function(ap)
{
var aT=Fl(ap);
if(aT)
{
colorTag.bQI(gu,aTJ(aT.className),bDq,au,ax);

mz.close();
}
}
}
);
}
});
}


colorTag.bQI=function(gu,aHL,bUf,au,ax)
{
var gh='\u9009\u62E9\u6807\u7B7E\u989C\u8272\u6210\u529F';
if(aHL==bUf)
{
return showInfo(gh);
}

QMAjax.send('/cgi-bin/foldermgr',{
content:['&fun=setcolor&sid=',getSid(),"&tagid=",gu,"&flagbg=",aHL].join(""),
onload:function(bh,bO,fU){
var aY=ax.location.href,
bZX=getMainWin().location.href;

if(bh&&bO.indexOf(gh)>0)
{



setClass(au,au.className.replace(/\bflagbg\d+\b/i,"flagbg"+aHL));

if(aY.indexOf('t=folderlist_setting')>-1)
{
reloadLeftWin();
}
else
{

if(/cgi-bin\/(mail_list|readmail)|t=folderlist_setting/.test(bZX))
{
reloadFrmLeftMain(false,true);
}
}
return showInfo(gh);
}
var xB=getErrMsg(fU,'msg_txt');
showError(xB||"\u6807\u7B7E\u989C\u8272\u8BBE\u7F6E\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
}
});
};














function setMailRead(pJ,ar)
{
var bF=ar.oMail,
aK=bF.length,
Dk=0,
aEj,
aic=pJ?1:-1,
bL=[],
cI=getMainWin(),
lr=isSelectAllFld(cI),
gF=ar.sFid,
tL,
dwf=ar.bNoShowFilter||false,
nC=checkSelectGroup();

if(!aK)
{
return showError('\u672A\u9009\u4E2D\u4EFB\u4F55\u90AE\u4EF6');
}

else if(lr||nC)
{
var cC=getSelectAllParam(cI),
aAc=pJ?cC.totalcnt:0;

tL=cC.groupid;
bL=['mailaction=',cC.type,'&fun=mail_flag',pJ?'unread':'read'];
cC.fid&&bL.push('&folderid=',cC.fid);
cC.tid&&bL.push('&srctagid=',cC.tid);
tL&&bL.push('&groupid=',tL);

if(cC.flags)
{
var wW=cC.flags.split("|");
E(wW,function(nd)
{
if(nd!="")
{
bL.push('&flag=',nd);
}
});
}
nC&&bL.push(getSelectGroupUrl());

setFolderUnread(gF,aAc);
setMailListInfo(aAc,null);
}
else
{
bL=['mailaction=mail_flag&flag=new&status=',pJ];


ar.bSelectAll&&getTop().ossLog("delay","all","stat=selectall&opt=21");
}
showSelectALL(cI,false);

var IW={
system:{
cnt:"0",
foldertagid:"sysmsg",
notcnt:"0",
notfoldertagid:"notsysmsg"
},
friend:{},
important:{}
};
for(var i=0;i<aK;i++)
{
var cd=bF[i];
if(cd.bUnr!=pJ)
{
if(cd.oChk)
{
cd.oChk.setAttribute('unread',pJ?'true':'false');

var xf=cd.oChk.getAttribute('gid');
setGroupUnread(xf,getGroupUnread(xf)+aic);
}
Dk++;


if(cd.sFid)
{
aEj=aEj||{};
aEj[cd.sFid]=(aEj[cd.sFid]||0)+1;
}

bL.push('&mailid=',cd.sMid);
if(cd.oTable&&!pJ)
{

var bUO=GelTags("table",cd.oTable)[0],
nG=bUO.rows[0].cells[1];
if(nG.className=="new_g")
{
nG.innerHTML="";
}
}

var aos=false;
for(var ps=cd.oTagIds,bsy=ps.length,j=0;j<bsy;j++)
{
var gF='tag_'+ps[j];
setTagUnread(gF,getFolderUnread(gF)+aic);
if(!aos)
{
var bbi=S(["folder_tag_",ps[j],"_td"].join(""));
if(attr(bbi,"st")!="true")
{
aos=true;
}
}
}
if(!lr&&aos)
{
setTagUnread('tag',getFolderUnread('tag')+aic);
}

if(!lr&&cd.bAddrvip)
{
setFolderUnread('addrvip',getFolderUnread('addrvip')+aic);
}

if(!lr)
{
E(cd.oSysTag,function(cf,bG)
{
if(IW[bG])
{
var fbu=IW[bG];
cf=="1"&&IW[bG].cnt&&(IW[bG].cnt++);
cf=="0"&&IW[bG].notcnt&&(IW[bG].notcnt++);
}
});
}
}
}

QMMailList.selectedUI({oMail:[],oACB:ar.oACB});
if(Dk||lr)
{



var QV=aic*Dk;

if(!lr)
{
if(aEj)
{
E(aEj,function(caP,fe)
{
setFolderUnread(fe,getFolderUnread(fe)+aic*caP);
});
}
else
{
setFolderUnread(ar.sFid,getFolderUnread(ar.sFid)+QV);
}

setMailListInfo(getMailListInfo().unread+QV,null);
}





if(!lr)
{
E(IW,function(cf,bG)
{
if(IW[bG])
{
IW[bG].cnt&&setFolderUnread(IW[bG].foldertagid,getFolderUnread(IW[bG].foldertagid)+(pJ?1:-1)*IW[bG].cnt);
IW[bG].notcnt&&setFolderUnread(IW[bG].notfoldertagid,getFolderUnread(IW[bG].notfoldertagid)+(pJ?1:-1)*IW[bG].notcnt);
}
});
}


rdVer(cd.sMid,1);
var aI=ar.oWin;
if(ar.sFid==8)
{


if(lr)
{
if(tL)
{
QV=parseInt(S("folder_"+tL,getMainWin()).getAttribute("totalCnt"));
setGroupUnread(tL,pJ?QV:0);
!pJ&&(QV*=-1);
setGroupUnread("gall",getGroupUnread("gall")+QV);
}
else
{
var auA=finds("#folder_group a.left",getMainWin().document);

QV=0;
E(auA,function(gX)
{
var xf=gX.id.split("_")[1],
adu=parseInt(gX.getAttribute("totalCnt"));

setGroupUnread(xf,pJ?adu:0);
QV+=adu;
});
setGroupUnread("gall",pJ?QV:0);
}
}
else
{
setGroupUnread("gall",getGroupUnread("gall")+QV);
}
}

var bet=pJ?'\u8BBE\u7F6E\u672A\u8BFB':'\u8BBE\u7F6E\u5DF2\u8BFB';
Dz({
bL:bL,
An:"new successful",
sO:T([bet,'\u90AE\u4EF6\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5']),
nv:function(aO,bO,fU)
{


var asb=0,
aKi=0;
for(var i=0;i<aK;i++)
{
var cd=bF[i];
if(cd.bUnr!=pJ&&cd.bStar)
{
asb++;
}








if(!pJ)
{

QMMailCache.addData(cd.sMid,{bUnread:null});
aKi=1;
}
else
{

QMMailCache.addData(cd.sMid,{bUnread:true});
aKi=1;
}
}

if(aKi)
{
QMMailCache.setExpire();
}


(gF!=5&&gF!=6)&&
setFolderUnread("starred",getFolderUnread("starred")+(pJ?1:-1)*asb);







if(aI.goback)
{
aI.goback();
}
if(/folderid=(1|pop|personal|all)/i.test(aI.location.href)||lr||nC)
{
reloadLeftWin();
}

if(!pJ&&Dk>4&&!dwf)
{
setMailFilter({
sFilterType:"read"
},ar
);
}
setRollBack(aO.rbkey,bet+"\u90AE\u4EF6");
}
});
}
}













function pendingMail(rM,ar,gP)
{
var bF=ar.oMail,
aK=bF.length,
bL=[],
cI=getMainWin(),
lr=isSelectAllFld(cI),
gF=ar.sFid,
nC=checkSelectGroup();


if(!aK)
{
return showError('\u672A\u9009\u4E2D\u4EFB\u4F55\u90AE\u4EF6');
}

else if((lr&&aK>1)||nC)
{
var cC=getSelectAllParam(cI);
bL=['mailaction=',nC?"mail_pendingall":cC.type,'&fun=mail_flag',rM?'pending':'unpending'];
cC.fid&&bL.push('&folderid=',cC.fid);
cC.tid&&bL.push('&srctagid=',cC.tid);
cC.groupid&&bL.push('&groupid=',cC.groupid);
if(cC.flags)
{
var wW=cC.flags.split("|");
E(wW,function(nd)
{
if(nd!="")
{
bL.push('&flag=',nd);
}
});
}
nC&&bL.push(getSelectGroupUrl());
}
else
{
bL=['mailaction=mail_flag&flag=pending'];



}
showSelectALL(cI,false);

for(var i=0;i<aK;i++)
{
var cd=bF[i];
bL.push('&mailid=',cd.sMid);
}

bL.push('&status='+rM);

Dz({
bL:bL,
An:'pending successful',
sO:rM?'\u6807\u8BB0\u5F85\u529E\u72B6\u6001\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5':'\u6807\u8BB0\u4E3A\u5DF2\u5B8C\u6210\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5',
nv:function(aO,bO,fU)
{
showInfo(rM?"\u8BBE\u7F6E\u6210\u529F":"\u90AE\u4EF6\u5DF2\u6807\u8BB0\u4E3A\u5DF2\u5B8C\u6210");
if(gP)
{
gP(aO);
}
else
{

cI.location.replace(cI.location);
}
}
});
};














function starMail(rM,ar)
{
var bF=ar.oMail,
aK=bF.length,
biA={
fg:0,
'fg fs1':1,
qm_ico_flagoff:2,
qm_ico_flagon:3
},
bXY=['fg','fg fs1','qm_ico_flagoff','qm_ico_flagon'],
bL=[],
cI=getMainWin(),
lr=isSelectAllFld(cI),
gF=ar.sFid,
nC=checkSelectGroup();


if(!aK)
{
return showError('\u672A\u9009\u4E2D\u4EFB\u4F55\u90AE\u4EF6');
}

else if((lr&&aK>1)||nC)
{
var cC=getSelectAllParam(cI);

bL=['mailaction=',cC.type,'&fun=mail_flag',rM?'star':'unstar'];
cC.fid&&bL.push('&folderid=',cC.fid);
cC.tid&&bL.push('&srctagid=',cC.tid);
cC.groupid&&bL.push('&groupid=',cC.groupid);
if(cC.flags)
{
var wW=cC.flags.split("|");
E(wW,function(nd)
{
if(nd!="")
{
bL.push('&flag=',nd);
}
});
}
nC&&bL.push(getSelectGroupUrl());
}
else
{
bL=['mailaction=mail_flag&flag=star'];


ar.bSelectAll&&getTop().ossLog("delay","all","stat=selectall&opt=22");
}
showSelectALL(cI,false);

for(var i=0;i<aK;i++)
{
var cd=bF[i];
bL.push('&mailid=',cd.sMid);
if(rM==null)
{
rM=!(biA[cd.oStar.className]&1);
}
}

for(var i=0,mv=0;i<aK;i++)
{
var cd=bF[i],
Qm=cd.oStar;
if(cd.oChk)
{

cd.oChk.setAttribute('star',rM?'1':'0');
}
if(cd.bStar!=rM)
{
mv+=cd.bUnr?1:0;
QMMailCache.addData(cd.sMid,{star:rM});
rdVer(cd.sMid,1);
}
setClass(Qm,bXY[(biA[Qm.className]&2)+(rM?1:0)]);
Qm.title=rM?'\u53D6\u6D88\u661F\u6807':'\u6807\u4E3A\u661F\u6807';
}

bL.push('&status='+rM);


if(mv&&(gF!=5&&gF!=6))
{
setFolderUnread("starred",getFolderUnread("starred")+(rM?1:-1)*mv);
}

Dz({
bL:bL,
An:'star successful',
sO:rM?'\u6807\u8BB0\u661F\u6807\u90AE\u4EF6\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5':'\u53D6\u6D88\u661F\u6807\u90AE\u4EF6\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5',
nv:function(aO,bO,fU)
{


QMMailList.selectedUI({oMail:[],oACB:ar.oACB});


if(!callBack(ar.oncomplete,[ar,rM]))
{
var aI=ar.oWin;
if(aI.showMailFlag)
{
aI.showMailFlag(rM);

}
}
if(rM&&aK>2)
{
setMailFilter({
sFilterType:"star"
},ar
);
}

(lr||nC)&&reloadLeftWin();
}
});
}









function moveMailJs(KN,bXr,bmP,ar)
{
if(bmP==KN)
{
return showError(gsMsgMoveMailSameFldErr);
}

var cbX=ar.bML,
bF=ar.oMail,
aK=bF.length,
wb=unikey('mv'),
bL=[ar.bML?'&location=mail_list':''],
LC=KN=="new",

amb=false,
chR;



cI=getMainWin(),
lr=isSelectAllFld(cI),
nC=checkSelectGroup();


for(var i=aK-1;i>=0;i--)
{
var cd=bF[i],
nM=cd.oChk;
if(cd.bTms)
{
return showError("\u8BF7\u4E0D\u8981\u9009\u62E9\u5B9A\u65F6\u90AE\u4EF6\uFF0C\u60A8\u4E0D\u80FD\u79FB\u52A8\u5B9A\u65F6\u90AE\u4EF6\u3002");
}





amb=amb||cd.bUnr;
bL.push('&mailid=',cd.sMid);
}











ar.oWin[wb]=1;

var aDw=function()
{

!ar.bIsJump&&aK>0&&showInfo('\u90AE\u4EF6\u79FB\u52A8\u4E2D...',-1);

var xQ=LC?"\u5DF2\u5C06\u90AE\u4EF6\u6210\u529F\u79FB\u52A8":T("\u5DF2\u5C06\u90AE\u4EF6\u6210\u529F\u79FB\u52A8 <a href='/cgi-bin/mail_list?sid=$sid$&folderid=$folderid$&page=0' style='color:white' onclick='getTop().hiddenMsg();' target='mainFrame' >[\u67E5\u770B]</a>").replace({
sid:getSid(),
folderid:KN
});


Dz({
bL:bL,
An:'mail_move successful',
sO:'\u79FB\u52A8\u90AE\u4EF6\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5',
nv:function(aO,bO,fU)
{
var Ie,cmT;
if(ar.oWin[wb])
{

Ie=callBack(ar.onbeforesend,[{sucMsg:xQ+getRollbackText(aO.rbkey)}]);
}
if(LC)
{
var chL=evalValue(bO);
cmT=
{
sDestName:chR,
sDestId:(chL&&chL.sDesId)||""
};
}
var CR=callBack(ar.oncomplete,[ar,aO,cmT]);



!(Ie&&CR)&&aO.msg&&showInfo(aO.msg+getRollbackText(aO.rbkey));


(LC||nC)&&reloadLeftWin();

if(ar.oWin[wb])
{

if(!CR)
{
if(
!(ar.bML&&ar.oWin.location.href.indexOf('s=search')>0)
&&aO&&aO.url&&!ar.bIsJump
)
{
var aY=aO.url;
var aPj=aY.indexOf("#");
if(aPj>=0)
{
aY=aY.substr(0,aPj);
}
aY+="&r="+Math.random();
goUrlMainFrm(aY,true,true);
}
else
{
reloadFrmLeftMain(true,true);
}
}
else
{
QMMailList.selectedUI({oMail:[],oACB:ar.oACB});
amb
&&!LC&&reloadLeftWin();
}
}
else
{

(amb||lr)&&!LC&&reloadLeftWin();
}

if(!LC&&aK>2)
{

setMailFilter({
sFilterType:"move",
sFolderId:KN,
sFolderName:bXr
},ar
);
}

setRollBack(aO.rbkey,'\u79FB\u52A8\u90AE\u4EF6');
}
});
};

if(lr||nC)
{
var cC=getSelectAllParam(cI);

bL=[];
bL.push('&mailaction=',cC.type);
bL.push('&fun=mail_move'+(LC?'_new':''));
cC.fid&&bL.push('&folderid=',cC.fid);
cC.tid&&bL.push('&srctagid=',cC.tid);
cC.groupid&&bL.push('&groupid=',cC.groupid);
if(cC.flags)
{
var wW=cC.flags.split("|");
E(wW,function(nd)
{
if(nd!="")
{
bL.push('&flag=',nd);
}
});
}
nC&&bL.push(getSelectGroupUrl());
}
else
{

bL.push('&mailaction=',cbX&&!aK&&LC?"onlyaddfolder":"mail_move");


ar.bSelectAll&&getTop().ossLog("delay","all","stat=selectall&opt=24");
}
bL.push('&destfolderid=',LC?-1:KN);
if(bmP=="14"||bmP=="4")
{
bL.push("&kvclick=mail_mgr|draft|movedraft|1");
}
if(LC)
{
promptFolder({
type:'folder',
onreturn:function(gB){




bL.push('&foldername=',gB);
chR=gB;
aDw();
}
});
}
else if(aK)
{




aDw();
}
else
{
showError('\u672A\u9009\u4E2D\u4EFB\u4F55\u90AE\u4EF6');
}
}











function configPreRmMail(ar,jF)
{
var bL=ar.oWin.location.getParams();

if(bL['s']=='search'||!ar.bML||((ar.sFid=='pop'||ar.sFid=='personal')&&jF=='moveMailJs')||getMainWin().tmpSortTypePrev=='5')
{
return false;
}
ar['bSelectGroup']=checkSelectGroup();
var dPK={},
aQ=ar,
ccK=aQ.onbeforesend,
bQs=aQ.oncomplete,
aJY=false;
if((bL['s']=='star'||bL['showtag']=='1'||bL['s']=="addrvip")&&jF=='moveMailJs')
{

aJY=true;
}
else
{
aQ.onbeforesend=function(iK)
{
callBack(ccK,[iK]);
return(aJY=configPreRmMail.cdh(aQ,iK));
};
}
aQ.oncomplete=function(ar,bf)
{
callBack(bQs,[ar,bf]);
return aJY;
}
return true;
}

















configPreRmMail.cdh=function(ar,iK)
{












var bVL="toarea",
aI=ar.oWin,
bF=ar.oMail,
aK=bF.length,
bfT=S('nextpage',aI),
aY=null,
bfo=null,
asw=null,
RR=null,
FO=null,

bt="_pReRmMaIl_",
bjH=0;
E(SN("mailid",aI),function(bC)
{
if(bC.type=="checkbox")
{
bjH++;
}
}
);
if(bjH==aK||aK==0||ar['bSelectGroup'])
{
return false;
}
aI[bt]=aI[bt]||{aI:aI,nI:0};


if(bfT)
{
aY=[bfT.href.replace(/(&|\?)(loc|r|t)=.*?(&|$)/gi,"$1"),'&ef=js&resp_charset=UTF8&record=n&t=mail_list_fragment&listcount=',aK,'&r=',Math.random()].join('');
}

function aoP()
{









var ahw=getMailListInfo(),
mv=0;

for(var i=0;i<aK;i++)
{
ahw.totle--;
bF[i].bStar&&(ahw.star--);
bF[i].bUnr&&mv++;

var dh=bF[i].oTable.parentNode,
gX=dh.previousSibling;
if(!gX.tagName||gX.tagName.toLowerCase()!='a')
{
gX=gX.previousSibling;
}
if(!FO)
{
FO=dh;
while((FO=FO.nextSibling)&&FO.className!='list_btline');


RR=FO;
while((RR=RR.previousSibling)&&RR.className!=bVL);
}
removeSelf(bF[i].oTable);

bfo=gX;
asw=dh;
var nl=GelTags('span',gX)[0];
nl&&(nl.innerHTML=(parseInt(nl.innerHTML)-1)+" \u5C01");
if(GelTags('table',dh).length==0)
{
removeSelf(gX);
removeSelf(dh);
}


if(bF[i].oChk&&bF[i].bUnr)
{

var xf=bF[i].oChk.getAttribute('gid');
setGroupUnread(xf,getGroupUnread(xf)-1);
}
}
getTop().fuck=ar
ar.oACB.checked=false;

setMailListInfo(ar.sFid==4?null:ahw.unread-mv,ahw.star,ahw.totle);

if(ar.sFid==8)
{
setGroupUnread("gall",getGroupUnread("gall")-mv);
}
aK&&(iK||{}).sucMsg&&showInfo(iK.sucMsg);

if(mv)
{
setFolderUnread(ar.sFid,getFolderUnread(ar.sFid)-mv);
}
QMMailCache.setExpire();
}

function afD(bh,bO)
{
if(bh)
{


var cI=getMainWin();

bO=trim(bO);
var bjh=bO.substr(0,18),
aae;
if(/<!--mlf\d{8}-->/.test(bjh))
{
aae=bO.split(bjh);
aae.shift();
}

if(cI[bt].aI!=cI||!aae||!aae.length)
{

return;
}







if(FO)
{

if(RR==asw)
{

FO.parentNode.insertBefore(asw,FO);
FO.parentNode.insertBefore(bfo,asw);

}



for(var i=0,bdq=Math.min(cI[bt].nI,aae.length);i<bdq;i++)
{
insertHTML(RR,'beforeEnd',aae[i]);
}
cI[bt].nI=0;


var gX=RR.previousSibling;
if(!gX.tagName||gX.tagName.toLowerCase()!='a')
{
gX=gX.previousSibling;
}
var nl=GelTags('span',gX)[0];
nl.innerHTML=(parseInt(nl.innerHTML)+bdq)+" \u5C01";

var asr=SN("mailid",cI);
for(var i=asr.length-1;i>=0;i--)
{
if(asr[i].getAttribute('init')!="true"&&asr[i].type=='checkbox')
{
MLIUIEvent(asr[i],aI,ar.sFid);
}
}
}
}
else
{

}
}

aoP();
if(aY)
{
if(aI[bt].nI)
{
aI[bt].nI+=aK;
}
else
{
aI[bt].nI=aK;
QMAjax.send(aY,
{
method:'GET',
onload:afD
}
);
}
}

return true;
};










function rmMail(eY,ar)
{
var bF=ar.oMail,
aK=bF.length,
RG=0,
bL=[],
arC={},
aJw=[],
cI=getMainWin(),
lr=isSelectAllFld(cI),
nC=checkSelectGroup();

if(!aK)
{
showError(gsMsgNoMail);
return false;
}

else if(lr||nC)
{
var cC=getSelectAllParam(cI);

bL.push('&mailaction=',cC.type);
cC.fid&&bL.push('&folderid=',cC.fid);
cC.tid&&bL.push('&tagid=',cC.tid);
cC.groupid&&bL.push('&groupid=',cC.groupid);
if(cC.flags)
{
var wW=cC.flags.split("|");
E(wW,function(nd)
{
if(nd!="")
{
bL.push('&flag=',nd);
}
});
}

if(nC)
{
bL.push(getSelectGroupUrl());
for(var i=0;i<aK;i++)
{
bL.push('&mailid=',bF[i].sMid);
}
}
}

else
{
bL=['mailaction=mail_del',ar.bML?'&location=mail_list':''];












var bur=false,bEe=false;


for(var i=0;i<aK;i++)
{
var cd=bF[i],
akh=cd.sSName,
bVg=cd.sSEmail;

if(cd.bTms===true)
{
bEe=true;
}
else
{
bur=true;
}

bL.push('&mailid=',cd.sMid);
RG=cd.bUnr||RG;



if(cd.bUnr&&bVg.match(/tuan@mail-admin.qq.com|newsletter-noreply@qq.com/))
{
var abY=cd.sColId;

arC[abY]?(arC[abY]++):(arC[abY]=1);
arC[abY]==5&&aJw.push(abY);
}
}

ar.bSelectAll&&getTop().ossLog("delay","all","stat=selectall&opt=25");
}

if(eY==1)
{
var ben=aJw.length,
bje='\u5F7B\u5E95\u5220\u9664\u540E\u90AE\u4EF6\u5C06\u65E0\u6CD5\u6062\u590D\uFF0C\u60A8\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F',
iU=getTop().getSid();

if(ar.sFid=='4'||ar.sFid=='14')
{
bje='\u5220\u9664\u540E\u8349\u7A3F\u5C06\u65E0\u6CD5\u6062\u590D\uFF0C\u60A8\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F';
if(bEe===true)
{
if(bur===true)
{
bje='\u5220\u9664\u540E\u8349\u7A3F\u5C06\u65E0\u6CD5\u6062\u590D\uFF0C\u60A8\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F';
}
else
{
bje='\u5220\u9664\u540E\u5B9A\u65F6\u90AE\u4EF6\u5C06\u4E0D\u4F1A\u53D1\u51FA\uFF0C\u60A8\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F';
}
}

ar.sDelIngMsg='\u8349\u7A3F\u5220\u9664\u4E2D...';
ar.sDelRetMsg='\u5DF2\u5C06\u8349\u7A3F\u6210\u529F\u5220\u9664';
}

confirmBox({
title:"\u5220\u9664\u786E\u8BA4",
mode:"prompt",
msg:TE([
'<div>$sMsg$</div>',
'<div>',
'$@$if($bHasBoth$)$@$',
'<div>\u5220\u9664\u7684\u5B9A\u65F6\u90AE\u4EF6\u4E5F\u5C06\u4E0D\u4F1A\u53D1\u51FA\u3002</div>',
'$@$endif$@$',
'$@$if($bUnsubscribe$)$@$',
'<div>',
'<input style="vertical-align:middle; height:13px; width:13px; padding:0; margin:0 5px 0 0" id="unsubscribe" type="checkbox" name="Unsubscribe" >',
'<label for="unsubscribe"><span id="unsubscribe_text" style="color:#333; font-size:12px;">\u540C\u65F6\u9000\u8BA2\u9009\u4E2D\u7684\u8BA2\u9605\u90AE\u4EF6</span></label>',
'</div>',
'$@$endif$@$',
'</div>'
]).replace(
{
sMsg:bje,
bHasBoth:(bEe===true&&bur===true)?true:false,
bUnsubscribe:(ben>0)
}
),
onreturn:function(bh)
{
if(bh)
{
if(lr||nC)
{
bL.push('&fun=mail_perdelall');
}
else
{
var nM=this.S("unsubscribe");

bL.push('&Fun=PerDel');


if(nM&&nM.checked)
{
var bjS=""
for(var i=0;i<ben;i++)
{
bjS+=("&colid="+aJw[i]);
}
getTop().QMAjax.send(getTop().T("/cgi-bin/setting10?action=desubscribe&sid=$sid$$colidlist$").replace({
sid:iU,
colidlist:bjS
}),
{
method:"GET",
onload:function(bh,bO){}
});
ar.sDelRetMsg="\u5220\u9664\u90AE\u4EF6\u5E76\u9000\u8BA2\u6210\u529F";
}
}
doRmMail(ar,bL,RG);
}
}
});
}




else
{
if(lr||nC)
{
bL.push('&fun=mail_delall');
}
else if(ar.sFid=="14")
{
bL.push("&fun=PerDel");
}
doRmMail(ar,bL,RG);
}

return true;
}

function doRmMail(ar,gJ,bTk)
{
var xQ=ar.sDelRetMsg||"\u5DF2\u5C06\u90AE\u4EF6\u6210\u529F\u5220\u9664",
cTX=ar.sDelIngMsg||"\u90AE\u4EF6\u5220\u9664\u4E2D...",
lC=ar.sFid,
wb=unikey('rm');

if(ar.bPop&&getTop().goUserInfo.get("POP_PROPOSE"))
{
confirmBox({
title:"\u90AE\u7BB1\u529F\u80FD\u63A8\u8350",
mode:"prompt",
msg:T([
'<div class="dialog_f_t">\u5728$dn$\u90AE\u7BB1\u4E2D\u5220\u9664\u90AE\u4EF6\uFF0C\u540C\u65F6\u4E5F\u5220\u9664\u539F\u90AE\u7BB1\u4E2D\u7684\u5BF9\u5E94\u90AE\u4EF6?</div>',
'<div class="dialog_f_d">',
'\u60A8\u4E5F\u53EF\u4EE5\u8FDB\u5165\u201C\u4FEE\u6539\u8BBE\u7F6E\u201D\u4E2D\u8BBE\u7F6E\u3002',
'<a href="http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=26&&no=326" target="_blank" >\u4E86\u89E3\u8BE6\u8BF7</a>',
'</div>'
]).replace(
{
dn:getDomain(true)
}
),
onreturn:function(bh)
{
if(bh)
{
runUrlWithSid(T("/cgi-bin/foldermgr?fun=updpop&updflag=22&folderid=$folderid$").replace({
folderid:lC
}
));
showInfo('\u8BBE\u7F6E\u6210\u529F\uFF01\u5E76\u5C06\u5F53\u524D\u9009\u4E2D\u90AE\u4EF6\u5220\u9664\u3002');

}
}
});
}






showInfo(cTX,-1);
ar.oWin[wb]=1;



Dz({
bL:gJ,
An:'mail_del successful',
sO:'\u5220\u9664\u90AE\u4EF6\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5',
nv:function(aO,bO,fU)
{
xQ=xQ+getRollbackText(aO.rbkey);

var Ie;
if(ar.oWin[wb])
{
Ie=callBack(ar.onbeforesend,[{sucMsg:xQ}]);
}

var aY=aO.url,
CR=callBack(ar.oncomplete,[ar,aO]);






!(Ie&&CR)&&showInfo(xQ);
if(!CR&&ar.oWin[wb])
{
if(ar.bML&&ar.oWin.location.href.indexOf('s=search')>0)
{
reloadFrmLeftMain(true,true);
}
else
{
var aPj=aY.indexOf("#");
if(aPj>=0)
{
aY=aY.substr(0,aPj);
}
ar.oWin.location.href=aY+"&r="+Math.random();
}
}
var aY=gJ.join("");
if(bTk||isSelectAllFld(ar.oWin)||ar.sFid==3||ar.sFid==4||ar.sFid==1||aY.indexOf("mail_grpsearchall")>-1||aY.indexOf("mail_grpoprall")>-1)
{
reloadLeftWin();
}
if(ar.oMail.length>4)
{
setMailFilter({
sFilterType:"delete"
},ar
);
}

setRollBack(aO.rbkey,'\u5220\u9664\u90AE\u4EF6');
}
});
}































































function reportSpamJson(bD,ar)
{

if(getTop().isSelectAllFld(getMainWin()))
{
return showError('\u4E0D\u80FD\u5BF9\u5168\u6587\u4EF6\u5939\u6267\u884C\u6B64\u64CD\u4F5C');
}


var bF=ar.oMail,
aK=bF.length,
RG=0,
bmz=ar.sFid==6,
nC=checkSelectGroup(),
bL=[ar.bML?'&location=mail_list':'','&mailaction=mail_spam&isspam=true&Fun=',3<ar.sFid&&ar.sFid<7?"PerDel":"Del",'&srcfolderid=',ar.sFid];

if(!aK)
{
showError(gsMsgNoMail);
return false;
}
if(nC)
{
var cC=getSelectAllParam(getMainWin());
cC.tid&&bL.push('&srctagid=',cC.tid);
}

var buH=bD.bBlackList===false?false:true,
bE,

qe={};
for(var i=0;i<aK;i++)
{
bE=bF[i];
bL.push('&mailid=',bE.sMid);

if(/(@groupmail.qq.com|10000@qq.com)/.test(bE.sSEmail))
{

buH=false;
}

if(typeof qe.sender=="undefined")
{
qe.sender=bE.sSEmail;
qe.nickname=bE.sSName;
}
else if(qe.sender!=bE.sSEmail)
{
qe.sender="";
}
}











QMMailList.selectedUI(ar);



var HV=["\u53D1\u4EF6\u4EBA"];

if(qe&&qe.sender&&qe.sender.indexOf(',')<0)
{
HV[0]=qe.sender;
}


var CB=bD.oAddrList,
agD=0;
if(CB&&CB.length>0)
{
if(CB[0].length>0)HV[agD++]=CB[0];
if(CB[1])HV[agD++]=CB[1];
}





































































































bL.push("&s=readmail_spam&reporttype=",bmz?11:8,"&s_reject_what=00");
nC&&bL.push(getSelectGroupUrl());
reportSpamJson.bTp(bL,"readmail_spam",ar);
return false;
}

reportSpamJson.bPm=function(ez)
{
var ek=ez.indexOf("@"),
vQ='...';
if(ek>-1)
{
var bQA=ez.substr(0,ek),
bSP=ez.substr(ek);
return subAsiiStr(bQA,18,vQ)+subAsiiStr(bSP,18,vQ);
}
else
{
return subAsiiStr(ez,36,vQ);
}
};


reportSpamJson.cQn=function(Gq)
{
var aJE=T([
'<div><input type="checkbox" name="refuse$id$" id="refuese$id$" $TCHECK$>\u5C06<label for="refuese$id$">$TVALUE$</label>\u52A0\u5165\u9ED1\u540D\u5355</div>'
]),
cU=[],
i;
for(i=0;i<Gq.length;i++)
{
cU.push(aJE.replace({
id:i,
TVALUE:Gq[i]!="\u53D1\u4EF6\u4EBA"?"&lt;"+reportSpamJson.bPm(Gq[i])+"&gt;":Gq[i],
TCHECK:""
})
);
}
return cU.join('');
};

reportSpamJson.bTp=function(gJ,bRL,ar)
{















var xQ="\u8BBE\u4E3A\u5783\u573E\u90AE\u4EF6\u6210\u529F",
aCz=0,
wb=unikey('spam'),
bF=ar.oMail,
RG=0,
cfI=0,
avV=false,
bL=['mailaction=mail_spam&isspam=true'],
Ie;

switch(bRL)
{
case"readmail_spam":
case"readmail_spam_newwin":
if(ar.sFid==6)
{
xQ="\u4E3E\u62A5\u6210\u529F\uFF0C\u90AE\u4EF6\u5DF2\u7ECF\u5F7B\u5E95\u5220\u9664\uFF0C\u611F\u8C22\u60A8\u5BF9QQ\u90AE\u7BB1\u53CD\u5783\u573E\u90AE\u4EF6\u5DE5\u4F5C\u7684\u652F\u6301";
}
else
{
xQ=["\u4E3E\u62A5\u6210\u529F\u3002\u5DF2\u5C06\u90AE\u4EF6\u6210\u529F\u79FB\u5165\u5783\u573E\u7BB1 <a style='color:white' onclick=\"javascript: getTop().goUrlMainFrm('/cgi-bin/mail_list?sid=",getSid(),"&folderid=6&page=0', false);\">[\u67E5\u770B]</a>"].join("");
cfI=10000;
}


break;
case"readmail_reject":
case"readmail_reject_newwin":
xQ=(ar.sFid==6?"\u4E3E\u62A5\u6210\u529F\uFF0C\u5E76\u5C06\u6B64\u53D1\u4EF6\u4EBA\u6DFB\u52A0\u5230\u9ED1\u540D\u5355":"\u5DF2\u5C06\u6B64\u53D1\u4EF6\u4EBA\u6DFB\u52A0\u5230\u9ED1\u540D\u5355\uFF0C\u5E76\u5C06\u8BE5\u90AE\u4EF6\u79FB\u5165\u5783\u573E\u90AE\u4EF6\u7BB1");
break;
case"readmail_group":
case"readmail_group_newwin":
xQ="\u62D2\u6536\u6210\u529F\uFF0C\u5C06\u4E0D\u518D\u6536\u53D6\u6B64\u8BDD\u9898\u90AE\u4EF6"
break;
}

for(var i=bF.length-1;i>=0;i--)
{
avV=avV||bF[i].bSys;
RG+=bF[i].bUnr?1:0;
}
showInfo('\u90AE\u4EF6\u4E3E\u62A5\u4E2D...',-1);
ar.oWin[wb]=1;
if(ar.bML&&!getTop().QMTip)
{
loadJsFileToTop(["$js_path$qmtip181b8c.js"]);
}



Dz({
bL:gJ,
An:'spam successful',
sO:'\u4E3E\u62A5\u90AE\u4EF6\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5',
nv:function(aO,bO,fU)
{
var aY=aO.url,
CR=callBack(ar.oncomplete,[ar,aO]);


!(Ie&&CR)&&showInfo(xQ,cfI);

if(aY&&!CR&&ar.oWin[wb])
{
if(ar.bML&&ar.oWin.location.href.indexOf('s=search')>0)
{
reloadFrmLeftMain(false,true);
}
else
{
var aPj=aY.indexOf("#");
if(aPj>=0)
{
aY=aY.substr(0,aPj);
}

goUrl(ar.oWin,aY+"&r="+Math.random(),false);

QMMailCache.setExpire();
}

if(!aO.nodlg&&aO.showReportInfo)
{
aO.showReportInfo(aO.reportCnt,aO.acceptCnt,aO.allCnt,aO.trushCnt);
}
}
else if(ar.bML&&!aO.nodlg&&getTop().QMTip&&ar.oWin[wb])
{

var bep=10002;

aO.sid=getSid();
aO.tipid=bep;
var bUp=TE([
"<p>\u60A8\u603B\u5171\u4E3E\u62A5\u4E86 $reportCnt$ \u6B21</p>",
"<p style='font-weight:normal;'>$@$if($acceptCnt$)$@$\u88AB\u7CFB\u7EDF\u91C7\u7EB3\u4E86 $acceptCnt$ \u6B21<br/>$@$endif$@$\u4ECA\u5929\u6211\u4EEC\u7CFB\u7EDF\u6536\u5230 $allCnt$ \u6B21\u4E3E\u62A5<br/>\u603B\u5171\u62E6\u622A\u4E86 $trushCnt$ \u5C01\u5783\u573E\u90AE\u4EF6<br/>\u611F\u8C22\u60A8\u5BF9QQ\u90AE\u7BB1\u53CD\u5783\u573E\u5DE5\u4F5C\u7684\u652F\u6301\uFF01",
"<div style=''></div>",
"<div style='text-align:right;font-weight:normal;'><a onclick=\"javascript: getTop().goUrlMainFrm('/cgi-bin/help_report_spam?sid=$sid$', false);getTop().QMTip.close('', $tipid$, false, true);\" style='text-decoration:underline;'>\u4E3E\u62A5\u6570\u636E\u4E2D\u5FC3</a>&nbsp;<a href='javascript;' onclick='getTop().runUrlWithSid(\"/cgi-bin/help_report_spam?type=0&ixspaminfo=1\");getTop().QMTip.close(\"\", $tipid$, false, true);return false;' style='text-decoration:underline;'>\u4EE5\u540E\u4E0D\u518D\u63D0\u793A</a></div>"
]).replace(aO);

QMTip.show2({
bForceShow:true,
type:4,
win:ar.oWin,
tipid:bep,
domid:"gotnomail",
msg:bUp,
arrow_direction:"none",
arrow_offset:0,
width:400,
height_offset:150,
tip_offset:-300,
close_fork:1
});
}
{
reloadLeftWin();
setRollBack(aO.rbkey,"\u4E3E\u62A5\u90AE\u4EF6");
}
}
});
};








function reportNoSpamJson(bD,ar)
{

var xQ="\u6210\u529F\u6807\u8BB0\u4E3A\u201C\u975E\u5783\u573E\u90AE\u4EF6\u201D",
bF=ar.oMail,
aK=bF.length,
aCz=0,
wb=unikey('spam'),
bL=[ar.bML?'&location=mail_list':'','&mailaction=mail_spam&isspam=false'],
nC=checkSelectGroup(),
bE;

if(!aK)
{
showError(gsMsgNoMail);
return false;
}

for(var i=0;i<aK;i++)
{
bE=bF[i];
bL.push('&mailid=',bE.sMid);
aCz+=bE.bUnr?1:0;
}
nC&&bL.push(getSelectGroupUrl());

ar.oWin[wb]=1;



var Ie=false;

Dz({
bL:bL,
An:'spam successful',
sO:'\u8BBE\u7F6E\u4E0D\u662F\u5783\u573E\u90AE\u4EF6\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5',
nv:function(aO,bO,fU)
{
var aY=aO.url,

CR=false;

!(Ie&&CR)&&showInfo(xQ+getRollbackText(aO.rbkey));
if(aY&&!CR&&ar.oWin[wb])
{
ar.oWin.location.href=aY;
}
if(aCz||nC)
{
reloadLeftWin();
}
setRollBack(aO.rbkey,"\u8BBE\u7F6E\u4E0D\u662F\u5783\u573E\u90AE\u4EF6");
}
});
}








function isSelectAllFld(dC)
{
var bjr=false;
E(GelTags("div",S("selectAll",dC)),
function(bI,dT)
{
if("selected"==bI.getAttribute("un"))
{
bjr=isShow(bI);
return false;
}
}
);
return bjr;
}






function getSelectAllParam(dC)
{
var uB=S("selectAll",dC),
chS=uB.getAttribute("fid"),
bJY={
"type":uB.getAttribute("ftype"),
"fid":chS,
"tid":uB.getAttribute("tid"),
"flags":uB.getAttribute("flags"),
"totalcnt":uB.getAttribute("totalcnt")};

chS==8&&(bJY=extend(bJY,{groupid:uB.getAttribute("groupid")}));
return bJY;
}

function setSelectAllFlag()
{

}






function showSelectALL(dC,zG)
{
var uB=S("selectAll",dC);

if(uB)
{
displayGrayTip(uB,zG);
!zG&&selectAllFld(dC,zG);
show(S("tips_bar",dC),!zG);
}
}






function selectAllFld(dC,abSelect)
{
var oL="&selectall="+(abSelect?1:0),
uB=S("selectAll",dC);

if(uB)
{
E(GelTags("div",uB),
function(bI,dT)
{
var LE=bI.getAttribute("un");
LE=="unselect"&&show(bI,!abSelect);
if(LE=="selected")
{
var nl=GelTags("span",bI)[0],
fZ=nl.getAttribute("start"),
hk=nl.getAttribute("end"),
Yh=4,
jH=parseInt((hk-fZ)/Yh),
ahO=function(Mx){nl.innerHTML=Mx;};

if(!!abSelect)
{
if(nl.innerHTML==hk)
{
return;
}
ahO(fZ);
setTimeout(function()
{
ahO(hk-(--Yh)*jH);
Yh!=0&&setTimeout(arguments.callee,150);
},
150
);
}
else
{
ahO(fZ);
}
show(bI,!!abSelect);
}
}

);
var dzy=uB.getAttribute("fid"),
dxZ=uB.getAttribute("totalcnt");
getTop().ossLog("realtime","all","stat=selectallCompare&mailcount="+dxZ+"&folderid="+dzy);
E(["prevpage","nextpage","prevpage1","nextpage1"],function(aM)
{
var iC=S(aM,dC);
if(iC)
{
var fi=iC.href;
iC.href=fi.match(/selectall/)?fi.replace(/&selectall=\d/,oL):(fi+oL);
}
});
}
}






var QMMailList={},
dE,eS;






































QMMailList.getCBInfo=function(ax,bc)
{
var avn=true,
aO={
oMail:[],
oWin:ax,
sFid:ax.location.getParams()['folderid'],
bML:true
};

var aYd=GelTags("input",S('list',ax));
if(aYd.length===0)
{
aYd=GelTags("input",S('qqmail_mailcontainer',ax));
}

E(aYd,function(bC)
{
if(bC.title=="\u9009\u4E2D/\u53D6\u6D88\u9009\u4E2D")
{

aO.oACB=bC;
}
else if(bC.type=="checkbox"&&bC.name=="mailid"&&(bc&&bC.value==bc||!bc&&bC.checked))
{
var qx=bC.value,
hi=bC.parentNode;
while(hi.tagName.toUpperCase()!="TABLE")
{
hi=hi.parentNode;
}

var yj=hi.rows[0].cells,
nG=yj[yj.length-1],
agb=GelTags("input",nG)[0],
aaQ=GelTags("td",GelTags('tr',nG)[0]),

ayj=aaQ[aaQ.length-1],
wj=GelTags("table",nG),
uO,
ps=[],
bF={};
for(var aV=0,aK=wj.length;aV<aK;aV++)
{
if(uO=wj[aV].getAttribute("tagid"))
{
ps.push(uO);
}
}
var agG=bC.getAttribute("ssystag")||"",
afc=[],bfL={};
if(agG!="")
{
afc=agG.split("|");
}
for(var i=0;i<afc.length-1;i++)
{
if(afc[i]!="")
{
var fq=afc[i].split(":");
if(fq[0]&&fq[1]!="")
{
bfL[fq[0]]=fq[1];
}
}
}
bF.sMid=qx;
bF.bSys=agb&&{"s1bg":1}[agb.className];
bF.bDft=agb&&{"drifticon":1}[agb.className];
bF.bUnr=bC.getAttribute("unread")=="true";
bF.bSubUnr=aaQ[1]&&aaQ[1].className=="new_g"&&GelTags("b",aaQ[1]).length>0;
bF.bStar=ayj&&ayj.className=="fg fs1";
bF.bAddrvip=bC.getAttribute("addrvip")=="1";
bF.oSysTag=bfL||{};
bF.bTms=bC.getAttribute("isendtime")==1;
bF.oTagIds=ps;
bF.sSName=bC.getAttribute("fn");
bF.sSEmail=bC.getAttribute("fa");
bF.sColId=bC.getAttribute("colid");
var cVU=bC.getAttribute("rf");



bF.oTable=hi;
bF.oStar=ayj;
bF.oChk=bC;
aO.oMail.push(bF);

var aua=GelTags('div',nG);
for(var aV=0,aK=aua.length;aV<aK;aV++)
{
if(aua[aV].className=='TagDiv')
{
bF.oTCont=aua[aV];
break;
}
}

}
avn&&bC.type=="checkbox"&&bC.name=="mailid"&&!bC.checked&&(avn=false);
});


aO.bSelectAll=avn;
return aO;
};






QMMailList.selectedUI=function(ar)
{
var aI=getMainWin(),
aRw={},
aig=false;
if(aI.location.href.indexOf('/cgi-bin/mail_list')<0)
{
return;
}
for(var bF=ar.oMail,i=bF.length-1;i>=0;i--)
{
aRw[bF[i].sMid]=1;
}
ar=ar||this.getCBInfo(aI);
E(SN("mailid",aI),function(bC)
{
if(bC.type=="checkbox")
{
var vx=bC.value in aRw,
Ng=bC.getAttribute('unread')=='true'&&ar.sFid!=4,
hi=bC;
while(hi.tagName.toUpperCase()!="TABLE")
{
hi=hi.parentNode;
}

if(hi.style.backgroundColor!="")
{
hi.style.backgroundColor="";
}
setClass(hi,[Ng?"i F":"i M",vx?" B":""].join(""));

setClass(GelTags("table",hi)[0],Ng?"i bold":"i");


var agH=bC.getAttribute("isendtime"),
agM=bC.getAttribute("rf");

setClass(GelTags("div",hi.rows[0].cells[1])[1],
'cir '+((Ng?'Ru':'')||{0:'Rc',1:'Ti'}[agH]||{r:'Rh',f:'Rz'}[agM]||(Ng?'':'Rr'))
);

bC.checked=vx;
aig=aig||vx;

}
});
E(SN("selectgroup",aI),function(bC)
{
bC.checked=false;
});
if(!aig&&ar.oACB)
{

ar.oACB.checked=aig;
}
};







QMMailList.aVA=function(EF)
{
for(var ahS=null,YH=null,bF=EF.oMail,i=bF.length-1;i>=0;i--)
{
var cd=bF[i],
kH=cd.sSName,
gk=cd.sSEmail;
if(YH!=kH)
{
YH=YH===null?kH:'';
}
if(ahS!=gk)
{
ahS=ahS===null?gk:'';
}
}
return[ahS,YH];
};





























function BaseMailOper(ar)
{
var ao=this;
ao.fP(ao.bY=ar);
}




BaseMailOper.bzB=function(ar)
{
var PA=BaseMailOper,
aI=ar.oWin;
if(!PA.getInstance(aI))
{
new PA(ar);
}
return PA.getInstance(aI);
};

BaseMailOper.getInstance=function(ax)
{
return ax["__gBmOi_"];
};

BaseMailOper.prototype={
fP:function(ar)
{
var ao=this,
aI=ar.oWin,
jZ=aI.location,
fi=jZ.href;
if(fi.indexOf("/cgi-bin/mail_list")>0)
{
ar.mnFolderType=0;
}
else if(fi.indexOf("t=readmail_conversation")>0)
{
ar.mnFolderType=2;
}
else if(fi.indexOf("readmail_group.html")>0)
{
ar.mnFolderType=3;
}
else
{

ar.mnFolderType=1;
}
ar.bAutoTag=jZ.getParams()['folderid']==1||ar.sFolderid==1||ar.bAutoTag;
aI["__gBmOi_"]=ao;

return ao;
},

getConfig:function()
{
return this.bY;
},

setMailInfo:function(EF)
{
this.bY.atK=EF;
},

getMailInfo:function()
{
return this.bY.atK;
},







apply:function(kj,bGY)
{
var ao=this,
aQ=ao.bY,
kQ=aQ.atK,
aI=aQ.oWin;








QMMLCache.upVer();
if(kQ.oWin.location.getParams().flag=="addrvip")
{
getTop().reloadAllFrm(false,false,false);
}
switch(kj)
{
case"mark":
case"move":
case"preview":
return false;
case"opennew":
if(kQ.oMail.length==1)
{

var il=GelTags("table",kQ.oMail[0].oTable)[0].parentNode,
LS=il.onclick.toString(),
cEs=T([
'{',
'shiftKey:true,',
'hitmailid:"$hitmailid$"',
'}'
]).replace({
"hitmailid":il.getAttribute("hitmailid")||""
});



LS=LS.split("{")[1].split("}")[0].replace(/event/ig,cEs);

if(/\WRD/.test(LS))
{
eval(LS);
}
else
{
debug("opennew error");
}
}
break;
case"new":
configPreRmMail(kQ,'moveMailJs');
moveMailJs('new','',kQ.sFid,kQ);
break;
case"delmail":

configPreRmMail(kQ,'rmMail');
rmMail(0,kQ);
break;
case'predelmail':
configPreRmMail(kQ,'rmMail');
rmMail(1,kQ);
break;
case'frwmail':


kQ.oWin.FwMailML();
break;
case'spammail':

configPreRmMail(kQ,'spammail');
reportSpamJson({bBlackList:true},kQ);
break;
case"read":
case"unread":
setMailRead(kj=="unread",kQ);
break;
case"star":
case"unstar":
starMail(kj=="star",kQ);
break;
case"rmalltag":
QMTag.rmTag('',kQ);
break;
case"newtag":
QMTag.newMailTag(kQ);
break;
case'autotag':
QMTag.setMailAutoTag(kQ);
break;
case'createreceiverule':
getTop().ossLog("delay","all","stat=donothing&locval=maillist,clickcreatereceiverule,,1,1");
goUrlMainFrm(T('/cgi-bin/setting2?sid=$sid$&Fun=Create&CurFilterID=0&sender=1&sendercontent=$sendercontent$').replace({
sid:getSid(),
sendercontent:kQ&&kQ.oMail&&kQ.oMail[0]&&kQ.oMail[0].sSEmail
}));
break;
default:
var atE;
if(atE=/fid_(.+)/.exec(kj))
{
configPreRmMail(kQ,'moveMailJs');

moveMailJs(atE[1],bGY,kQ.sFid,kQ);
}
else if(atE=/tid_(.+)/.exec(kj))
{


QMTag.setMailTag(atE[1],kQ);
}
break;
}
return true;
}
};














var QMTag={
aQl:"",
Xm:{},
ayv:[]
};






QMTag.set=function(xu,BY)
{
var ao=this;
if(!BY||BY>ao.aQl)
{
BY&&(ao.aQl=BY);
ao.ayv=[];
ao.Xm={};

for(var aV=0,aK=xu.length;aV<aK;aV++)
{
var lK=xu[aV],
uO=lK.id,
bIS;
if(uO!=bIS)
{
ao.ayv.push(uO);
ao.Xm[uO]=lK;
lK.NB=aV;
}
}
}
};

QMTag.get=function()
{
for(var cU=[],ao=this,kM=ao.ayv,aV=0,aK=kM.length;aV<aK;aV++)
{
cU.push(ao.Xm[kM[aV]]);
}
return cU;
};





QMTag.setItem=function(gu,rK,cf)
{
var aQw=this.Xm;
if(aQw[gu])
{
aQw[gu][rK]=cf;
}
};

QMTag.getItem=function(gu,rK)
{
var lK=this.Xm[gu];

return lK&&rK?lK[rK]:lK;
};


QMTag.agp=function(bO)
{
try
{
var aO=eval(bO),
atQ=aO.taglist;
aO.mailids.length--;
aO.taglist.length--;

atQ&&atQ.length&&QMTag.set(atQ,aO.timestamp);
}
catch(e)
{

}
return aO;
};

QMTag.setMailTag=function(gu,ar)
{
var bF=ar.oMail,
aK=bF.length,
gU=0,

bL=[],
cI=getMainWin(),
lr=isSelectAllFld(cI),
nC=checkSelectGroup();

if(!aK)
{
return showError('\u672A\u9009\u4E2D\u4EFB\u4F55\u90AE\u4EF6');
}

else if(lr||nC)
{
var cC=getSelectAllParam(cI);

bL=['mailaction=',cC.type,'&fun=mail_flagtag&tagid=',gu];
cC.fid&&bL.push('&folderid=',cC.fid);
cC.tid&&bL.push('&srctagid=',cC.tid);
cC.groupid&&bL.push('&groupid=',cC.groupid);
if(cC.flags)
{
var wW=cC.flags.split("|");
E(wW,function(nd)
{
if(nd!="")
{
bL.push('&flag=',nd);
}
});
}
nC&&bL.push(getSelectGroupUrl());
}
else
{
bL=['mailaction=mail_tag&fun=add&tagid=',gu];


ar.bSelectAll&&getTop().ossLog("delay","all","stat=selectall&opt=23");
}
showSelectALL(cI,false);


for(var i=0;i<aK;i++)
{
var cd=bF[i],
bK=cd.sMid;

if(QMTag.addTagUI(cd.oTCont,gu,ar.sFid,bK,!ar.bML))
{
gU++;
bL.push('&mailid=',bK);
rdVer(bK,1);
QMMailCache.addData(bK,{addTagId:gu});
if(cd.bUnr)
{

var gF='tag_'+gu,
ps=cd.oTagIds,
aos=true;
setTagUnread(gF,getFolderUnread(gF)+1);
if(attr(S(["folder_tag_",gu,"_td"].join("")),"st")!="true")
{
for(var i=0;i<ps.length;++i)
{
bbi=S(["folder_tag_",ps[i],"_td"].join(""));
if(attr(bbi,"st")!="true")
{
aos=false;
break;
}
}
}
else
{
aos=false;
}
if(aos)
{
setTagUnread('tag',getFolderUnread('tag')+1);
}
}
}
}
QMMailList.selectedUI({oMail:[],oACB:ar.oACB});
if(gU)
{
AjaxSendMailMgr({
bL:bL,
An:'mail_tag successful',
sO:'\u8BBE\u7F6E\u6807\u7B7E\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5',
nv:function(aO,bO,fU)
{
var aO=QMTag.agp(bO),
aI=ar.oWin;


if(aI.QMReadMail)
{
aI.QMReadMail.modifyTag(gu,0);
}

if(aK>2)
{
setMailFilter({
sFilterType:"tag",
sTagId:gu,
sTagName:QMTag.getItem(gu).name
},ar
);
}
(lr||nC)&&reloadLeftWin();
return;
}
});
}
};






QMTag.newMailTag=function(ar)
{
ar=ar||{};
promptFolder({
type:'tag',
onreturn:function(gB){
var bF=ar&&ar.oMail,
aK=bF&&bF.length,
bL=[],
cI=getMainWin(),
lr=isSelectAllFld(cI),
nC=checkSelectGroup();

if(lr||nC)
{
var cC=getSelectAllParam(cI);

bL=['mailaction=',cC.type,'&fun=mail_flagtag_new&tagname=',encodeURI(gB)];
cC.fid&&bL.push('&folderid=',cC.fid);
cC.tid&&bL.push('&srctagid=',cC.tid);
cC.groupid&&bL.push('&groupid=',cC.groupid);
if(cC.flags)
{
var wW=cC.flags.split("|");
E(wW,function(nd)
{
if(nd!="")
{
bL.push('&flag=',nd);
}
});
}
nC&&bL.push(getSelectGroupUrl());
}
else
{
bL=['&mailaction=mail_tag&fun=add&tagname=',encodeURI(gB)];


ar.bSelectAll&&getTop().ossLog("delay","all","stat=selectall&opt=23");
}
showSelectALL(cI,false);


for(var i=0;i<aK;i++)
{
bL.push('&mailid=',bF[i].sMid);
}
AjaxSendMailMgr({
bL:bL,
An:'mail_tag successful',
sO:'\u521B\u5EFA\u6807\u7B7E\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5',
nv:function(aO,bO,fU)
{
showInfo("\u6807\u7B7E\u521B\u5EFA\u6210\u529F");
reloadLeftWin();
callBack(ar.oncomplete,[ar,aO]);
var aOB=ar&&ar.oWin.QMReadMail;

if(aOB)
{

rdVer(aOB.getMailId(),1);
return reloadFrmLeftMain(true,true);
}
else if(!ar)
{

return reloadFrmLeftMain(true,true);
}

var aO=QMTag.agp(bO);
QMMailList.selectedUI({oMail:[],oACB:ar.oACB});

for(var i=0;i<aK;i++)
{
var cd=bF[i];
QMTag.addTagUI(cd.oTCont,aO.newtag.id,ar.sFid,cd.sMid,!ar.bML);
}

reloadFrmLeftMain(true,false);
(lr||nC)&&reloadLeftWin();
}
});
}
});

};


QMTag.bCy=function(bGZ,bAd)
{
confirmBox({
title:"\u6536\u4FE1\u89C4\u5219",
msg:"\u5BF9\u4E8E\u6536\u4EF6\u7BB1\u4E2D\u7B26\u5408\u6761\u4EF6\u7684\u5DF2\u6709\u90AE\u4EF6\uFF0C\u60A8\u662F\u5426\u4E5F\u8981\u6807\u4E0A\u6B64\u6807\u7B7E\uFF1F",
confirmBtnTxt:'\u662F',
cancelBtnTxt:'\u5426',
onreturn:function(bh)
{
if(bh)
{
AjaxSendMailMgr({
bL:['&fun=AutoTag&mailaction=mail_filter&filterid=',bGZ],
An:'mail_tag successful',
sO:'\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5',
nv:function(aO,bO,fU)
{
var aO=eval(bO);
if(aO.count)
{
reloadFrmLeftMain(1,1);
}
return showInfo(
T(aO.count?"\u64CD\u4F5C\u6210\u529F\uFF0C\u6807\u8BB0\u4E86$count$\u5C01\u90AE\u4EF6\u3002<a href='/cgi-bin/mail_list?sid=$sid$&folderid=all&tagid=$tagid$'  style='color:white' onclick='getTop().hiddenMsg();' target='mainFrame'>[\u67E5\u770B]</a>":"\u64CD\u4F5C\u6210\u529F\uFF0C\u60A8\u6CA1\u6709\u9700\u8981\u79FB\u52A8\u6216\u6807\u8BB0\u7684\u90AE\u4EF6\u3002").replace(aO),
30000);
}
});
}
else
{
reloadFrmLeftMain(1,!bAd);
}
}
});
};






QMTag.setMailAutoTag=function(ar)
{
var bF=ar.oMail,
acH=false,
aRv=/[~!#\$%\^&\*\(\)=\+|\\\[\]\{\};\':\",\?\/<>]/ig,
bL=['&mailaction=mail_tag&Fun=AutoTag'];


if(isSelectAllFld(getMainWin()))
{
return showError('\u5168\u9009\u6587\u4EF6\u5939\u4E0D\u80FD\u65B0\u5EFA\u81EA\u52A8\u6807\u7B7E');
}

for(var aV=bF.length-1;aV>=0;aV--)
{
if(bF[aV].bSys)
{
return showError('\u7CFB\u7EDF\u90AE\u4EF6\u4E0D\u80FD\u65B0\u5EFA\u81EA\u52A8\u6807\u7B7E');
}
bL.push('&mailid=',bF[aV].sMid);
}
confirmBox(
{
mode:"prompt",

title:'\u65B0\u5EFA\u81EA\u52A8\u6807\u7B7E',
sType:"custom",
msg:[
'<div style="padding:10px;">',
'<div style="width:100%;margin:10px;"><b>\u5BF9\u4E8E\u53D1\u4EF6\u4EBA</b><input type="text" id="addr" style="width:300px;margin-left:54px;"/></div><div style="margin:10px;"><b>\u6765\u4FE1\u81EA\u52A8\u6807\u4E3A\u6807\u7B7E</b><input type="text" id="name" style="width:300px;margin-left:15px;"/></div>',
'<div class="graytext" style="width:450px;margin:10px;">\u8BE5\u53D1\u4EF6\u5730\u5740\u7684\u6765\u4FE1\uFF0C\u4F1A\u81EA\u52A8\u52A0\u4E0A\u6807\u7B7E\uFF0C\u4FBF\u4E8E\u60A8\u8BC6\u522B\u548C\u7BA1\u7406\u90AE\u4EF6\u3002</div>',
'</div>'
].join(''),
onload:function()
{
var ao=this;
addEvents([ao.S("addr"),ao.S("name")],
{
keydown:function(ap)
{
if(ap.keyCode==13)
{
acH=true;
ao.close();
}
}
}
);
},
onshow:function()
{
var cv=this,
cd=ar.atK,
acd=QMMailList.aVA(ar),
uy=acd[1],
gk=acd[0];

if(!uy||!gk)
{
cv.S('addr').focus();
}
else
{
cv.S('addr').value=gk.split(',')[0];
cv.S('name').value=trim(htmlDecode(uy).split(/[,@]/)[0].replace(aRv,''))+"\u7684\u6765\u4FE1";
}
},
onreturn:function(bh)
{

var cv=this,
eH=trim(cv.S('addr').value),
bd=trim(cv.S('name').value);
if(!bh&&!acH)
{
return;
}
if(!eH)
{
return showError('\u8BF7\u8F93\u5165\u53D1\u4EF6\u4EBA\u540D\u79F0\u6216\u5730\u5740');
}
var aK=getAsiiStrLen(bd);
if(aK==0||aK>50)
{
return showError(aK?"\u6807\u7B7E\u540D\u79F0\u592A\u957F\uFF0C\u8BF7\u4F7F\u7528\u5C11\u4E8E50\u4E2A\u5B57\u7B26(25\u4E2A\u6C49\u5B57)\u7684\u540D\u79F0":'\u8BF7\u8F93\u5165\u6807\u7B7E\u540D\u79F0');
}
if(aRv.test(bd))
{
return showError('\u6807\u7B7E\u540D\u79F0\u4E0D\u80FD\u5305\u542B ~!#$%^&*()=+|\\[]{};\':",?/<> \u7B49\u5B57\u7B26');
}

bL.push('&sender=',encodeURI(eH),'&tagname=',encodeURI(bd));
AjaxSendMailMgr({
aY:'/cgi-bin/setting2',
bL:bL,
An:'mail_tag successful',
sO:'\u8BBE\u7F6E\u81EA\u52A8\u6807\u7B7E\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5',
nv:function(aO,bO,fU)
{
showInfo("\u8BBE\u7F6E\u81EA\u52A8\u6807\u7B7E\u6210\u529F\uFF0C\u901A\u8FC7\u6536\u4FE1\u89C4\u5219\uFF0C\u6765\u4FE1\u5C06\u81EA\u52A8\u6807\u4E0A\u6807\u7B7E\u3002");

var aI=ar.oWin,
aO=QMTag.agp(bO);

if(!ar.bML&&aI.QMReadMail)
{

rdVer(aI.QMReadMail.getMailId(),1);

}
else
{
QMMailList.selectedUI({oMail:[],oACB:ar.oACB});
for(var i=bF.length-1;i>=0;i--)
{
var cd=bF[i];
QMTag.addTagUI(cd.oTCont,aO.newtag.id,ar.sFid,cd.sMid,!ar.bML);
}
}

QMTag.bCy(aO.filterid,ar.bML);
return;
}
});
}
}
);


};








QMTag.rmTag=function(gu,ar)
{
var bF=ar.oMail,
aK=bF.length,
gU=0,
bL=[],
cI=getMainWin(),
lr=isSelectAllFld(cI),
cEE=ar.bNoCheck,
nC=checkSelectGroup();

if(!aK)
{
return showError('\u672A\u9009\u4E2D\u4EFB\u4F55\u90AE\u4EF6');
}
else if(lr||nC)
{
var cC=getSelectAllParam(cI);

bL=['mailaction=',cC.type,'&fun=mail_flaguntag'];
cC.fid&&bL.push('&folderid=',cC.fid);
cC.tid&&bL.push('&srctagid=',cC.tid);
cC.groupid&&bL.push('&groupid=',cC.groupid);
if(cC.flags)
{
var wW=cC.flags.split("|");
E(wW,function(nd)
{
if(nd!="")
{
bL.push('&flag=',nd);
}
});
}
nC&&bL.push(getSelectGroupUrl());
}
else
{
bL=['&mailaction=mail_tag&fun=del'];


ar.bSelectAll&&getTop().ossLog("delay","all","stat=selectall&opt=23");
}
showSelectALL(cI,false);

if(gu)
{
bL.push('&tagid=',gu);
}


for(var i=bF.length-1;i>=0;i--)
{
if(QMTag.rmTagUI(bF[i].oTCont,gu)||cEE)
{
gU++;
var cd=bF[i],
bK=cd.sMid;
bL.push('&mailid=',bK);
rdVer(bK,1);
QMMailCache.addData(bK,{removeTagId:gu});

if(cd.bUnr)
{

var ps=gu?cd.oTagIds:[gu],
aos=true;

if(gu)
{
var gF='tag_'+gu;
setTagUnread(gF,getFolderUnread(gF)-1);
}
else
{
E(cd.oTagIds,function(pz){
var gF='tag_'+pz;
setTagUnread(gF,getFolderUnread(gF)-1);
});
}





if(gu=="")
{
for(var ps=cd.oTagIds,j=0;j<ps.length;++j)
{
if(ps[j]==gu)continue;
bbi=S(["folder_tag_",ps[j],"_td"].join(""));
if(attr(bbi,"st")!="true")
{
aos=true;
break;
}
}
}
else if(attr(S(["folder_tag_",gu,"_td"].join("")),"st")!="true")
{
for(var ps=cd.oTagIds,j=0;j<ps.length;++j)
{
if(ps[j]==gu)continue;
bbi=S(["folder_tag_",ps[j],"_td"].join(""));
if(attr(bbi,"st")!="true")
{
aos=false;
break;
}
}
}
else
{
aos=false;
}
if(aos)
{
setTagUnread('tag',getFolderUnread('tag')-1);
}
}
}
}
QMMailList.selectedUI({oMail:[],oACB:ar.oACB});
if(gU)
{
AjaxSendMailMgr({
bL:bL,
An:"mail_tag successful",
sO:T(['\u79FB\u9664\u6807\u7B7E\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5']),
nv:function(aO,bO,fU)
{
QMTag.agp(bO);
























(lr||nC)&&reloadLeftWin();
}
});
}
};










QMTag.rmTagUI=function(XW,gu)
{
if(gu)
{
for(var wj=GelTags("table",XW),aV=wj.length-1;aV>=0;aV--)
{
if(wj[aV].getAttribute("tagid")==gu)
{
removeSelf(wj[aV]);
return true;
}
}
}
else
{
XW.innerHTML='';
return true;
}
return false;
};



QMTag.addTagUI=function(XW,gu,fe,bc,bJp)
{
for(var Jb=GelTags("table",XW),aV=Jb.length-1;aV>=0;aV--)
{
if(Jb[aV].getAttribute('tagid')==gu)
{
return false;
}
}

var ci=
TE([
'<table cellspacing="0" cellpadding="0" border="0" class="tagleftDiv flagbg$flagbg$" tagid="$id$">',
'<tr>',
'<td class="falg_rounded">\n',
'</td>',
'<td colspan="2">\n',
'</td>',
'<td class="falg_rounded">\n',
'</td>',
'</tr>',
'<tr>',
'<td>\n',
'</td>',
'<td class="tagbgSpan" tid2="$id$">',
'<span>\u4E2Da</span>$name$<span>\u4E2Da</span>',
'$@$if($t$=="mail_list")$@$<div class="closeTagSideDiv flagbg$flagbg$" style="display:none" title="\u53D6\u6D88\u6B64\u6807\u7B7E" tid2="$id$">&nbsp;&nbsp;&nbsp;</div>$@$endif$@$',
'</td>',
'$@$if($t$!="mail_list")$@$<td title="\u53D6\u6D88\u6B64\u6807\u7B7E" class="closeTagDiv $disclose$" tid2="$id$">&nbsp;</td>$@$endif$@$',
'<td>\n',
'</td>',
'</tr>',
'<tr>',
'<td class="falg_rounded">\n',
'</td>',
'<td colspan="2">\n',
'</td>',
'<td class="falg_rounded">\n',
'</td>',
'</tr>',
'</table>'
]).replace(extend({
t:bJp?"readmail":"mail_list",
folderid:fe,
mailid:bc||""
},QMTag.getItem(gu)));

insertHTML(XW,"beforeEnd",ci);
return true;
};






QMTag.showTagClose=function(Xj,gI)
{
function gl(Xj,gI)
{
try
{
for(var oV=GelTags("div",Xj),aV=oV.length-1;aV>=0;aV--)
{
if(oV[aV].className.indexOf("closeTagSideDiv")>-1)
{
show(oV[aV],gI);
return;
}
}
}
catch(e)
{
}
}

var ao=arguments.callee;

if(ao.xw)
{
clearTimeout(ao.xw);
}
if(ao.aji!=Xj)
{
gl(ao.aji,0);
}
ao.aji=Xj;
ao.xw=setTimeout(function()
{
gl(Xj,gI);
},
gI?500:100);
};








QMTag.readclose=function(ap,ar)
{
var aT=getEventTarget(ap),
dz;
while(aT)
{
dz=aT.className;
if(/closeTag(Side)?Div/.test(dz))
{


QMTag.rmTag(aT.getAttribute('tid2'),ar);
return true;
}
else if(dz=='tagbgSpan')
{

readTag(aT.getAttribute('tid2'),ar.oWin,ar.sFid);
return true;
}
aT=aT.parentNode;
}
return false;
};


function readTag(gu,ax,ke)
{
ke=ke>100?ke:"all";
goUrlMainFrm(T('/cgi-bin/mail_list?sid=$sid$&tagid=$tagid$&folderid=$folderid$&page=0').replace({
tagid:gu,
folderid:ke,
sid:getSid()
}));




}







function initMailSelect(auu,aUJ,bCG,ax,fe,bxS,bED)
{
var PA=BaseMailOper,
aQ={
sFolderid:fe,
bReadMode:aUJ&&fe!=4&&fe!=14,
bStarMode:aUJ,
bAutoTag:bxS||false,
bTagMode:bCG&&fe!=5&&fe!=6,
moMoveItem:auu,
bSpam:bED||false,
oWin:ax
},
wc=PA.bzB(aQ);

aQ=wc.getConfig();


if(auu)
{
E(SN("selmContainer",ax),function(aw){
if(!aw.innerHTML)
{
new QMSelect({
oContainer:aw,

sDefaultItemValue:"\u79FB\u52A8\u5230...",
sMenuType:"dropdown",
oMenu:{
nWidth:"auto",
nMaxWidth:180,

bAutoItemView:true,
bAutoClose:true,
oItems:auu
},
onafteropenmenu:function(eZ,aYA){
var cd;
if(aQ.mnFolderType==0)
{

cd=QMMailList.getCBInfo(aQ.oWin);
}
else
{


cd=aQ.oWin.QMReadMail.getCBInfo(aQ.oWin);
}

wc.setMailInfo(cd);
},
onselect:function(bw){


wc.apply(bw.sId,bw.sItemValue);
return true;
}
});
}
});
}


function aVg()
{
var bq=[],
yi={nHeight:10,sItemValue:'<div style="background:#CCC; height:1px; margin-top:5px; overflow:hidden;"></div>'},
aMx=T([
'<div style="white-space:nowrap;zoom:1;">',
'<input type="button" class="item_square flagbg$flagbg$"/>',
'<span class="item_square_txt">$name$ &nbsp</span>',


'</div>']);

if(aQ.bReadMode)
{
bq.push(
{sId:"read",sItemValue:"\u5DF2\u8BFB\u90AE\u4EF6"},
{sId:"unread",sItemValue:"\u672A\u8BFB\u90AE\u4EF6"},
yi
);
}
if(aQ.bStarMode)
{
bq.push(
{sId:"star",sItemValue:"\u661F\u6807\u90AE\u4EF6"},
{sId:"unstar",sItemValue:"\u53D6\u6D88\u661F\u6807"}
);
if(aQ.bTagMode)
{
bq.push(yi);
}
}
if(aQ.bTagMode)
{
bq.push(
{
sId:'rmalltag',
sItemValue:'\u53D6\u6D88\u6807\u7B7E'
},
extend({bDisSelect:true,sId:'deltaghr'},yi)
);
for(var alH=QMTag.get(),i=0,aK=alH.length;i<aK;i++)
{
var lK=alH[i];
bq.push(
{
sId:'tid_'+lK.id,
sItemValue:aMx.replace(lK)
}
);
}
if(aK)
{
bq.push(yi);
}
bq.push({
sId:'newtag',
sItemValue:'\u65B0\u5EFA\u6807\u7B7E'
});









}
return bq;
}


E(SN("markContainer",ax),function(aw){
if(aw.innerHTML)
{
return;
}
if(!(aQ.bReadMode||aQ.bStarMode||aQ.bTagMode))
{
show(aw,false);
return;
}
new QMSelect({
oContainer:aw,

sMenuType:"dropdown",
sDefaultItemValue:"\u6807\u8BB0\u4E3A...",
oMenu:{
nWidth:"auto",
nMaxWidth:180,

bAutoItemView:true,
bAutoClose:true,
oItems:[]
},
onselect:function(bw){
var eZ=this.get("menu");

wc.apply(bw.sId,bw.sItemValue);
eZ.hide();

return true;
},

onbeforeopenmenu:function(aTl)
{
aQ.dxQ=aQ.bTagMode?QMTag.get():[];
aTl.sDefaultId="";
aTl.oItems=aVg();
},

onafteropenmenu:function(eZ){
var cd;

if(aQ.mnFolderType==0)
{

cd=QMMailList.getCBInfo(aQ.oWin);
var aFQ=cd.oMail.length;
eZ.itemOption("rmalltag","bDisplay",aFQ);
eZ.itemOption("deltaghr","bDisplay",aFQ);
}
else
{


cd=aQ.oWin.QMReadMail.getCBInfo(aQ.oWin);
}

wc.setMailInfo(cd);
}
});
});
}












var QMFileAdaptor=(function(aN)
{


return{

isBrowser:function(RS)
{
return(
{
ie:gbIsIE,
safari:gbIsSafari,
chrome:gbIsChrome,
ff:gbIsFF
})[RS];
},
browserVer:function()
{
return gnIEVer;
},

getDomWin:function(aw)
{
var aU=aw.ownerDocument;
return aU.parentWindow||aU.defaultView;
},

isSystem:function(RS)
{
return(
{
win:gbIsWin,
mac:gbIsMac
})[RS];
},


S:S,
removeSelf:removeSelf,
insertHTML:insertHTML,
finds:finds,

addEvent:addEvent,
stopPropagation:stopPropagation,
preventDefault:preventDefault,
createActiveX:createActiveX,

createBlankIframe:createBlankIframe,
unikey:unikey,
generateFlashCode:generateFlashCode,
detectActiveX:detectActiveX,

E:E,
trim:trim,
qmFlash:qmFlash,
T:T,
extend:extend,
evalValue:evalValue
};

}
)();







(function(A,aN)
{
var fW={},oR,aI=window;

oR=fW.components={};
fW.libs={};

var vY=function(){}

var ago=function(){}
ago.prototype=
{
create:function(aC,ay)
{
var ao=this,
afr=ao.orders[aC],
bE=ao.ats(aC,ay.oOrders||afr),
vd=oR[bE.sCom];

debug("uploader implement:"+bE.sCom);
ay.sType=aC;

if(vd)
{
if(aC=="popup"&&/Flash/.test(bE.sCom))
{

bE=ao.ats(aC,afr,+bE.nIdx+1);
oR[bE.sCom]&&new oR[bE.sCom](ay);
}
return new vd(ay);
}
},

orders:
{
"base":["Base"],
"popup":["FlashPopup","Html5Popup","ActivexPopup","RawinputPopup"],
"drag":["Html5Drag","ActivexDrag"],
"paste":["ActivexPaste"]
},

















ats:function(aC,alw,dT)
{
dT=dT||0;
if(alw)
{
for(var i in alw)
{
if(i>=dT)
{
var akU=alw[i],
vd=oR[akU]&&new(oR[akU]);

if(vd&&vd.detect(aC))
{
return(
{
nIdx:i,
sCom:akU
})
}
}
}
}
return{nIdx:-1};
}
}

var LH=new ago();

fW.qmCreater=ago;


fW.create=function(aC,ay)
{
return LH.create(aC,ay);
}

fW.create.oCreaterInstance=LH;

fW.createCom=function(aR,ea,aaA)
{
var Pu=oR[aaA],
Gc=(Pu&&new Pu)||{},
vd=function()
{
if(arguments.length>0)
{
this.name=aR;
this.init_.apply(this,arguments);
}
};

vd.prototype=Gc;
A.extend(
vd.prototype,
typeof(ea)=="function"?ea(Pu&&Pu.prototype):ea
);
oR[aR]=vd;
}









var EH=function(av)
{
var ao=this;
ao.Cy={};
ao.set(av);
}
EH.prototype=
{
set:function(bG,ep)
{
var ao=this;
if(!bG)
{
return;
}
if(typeof bG=="object")
{
A.extend(ao.Cy,bG);
}
else
{
ao.Cy[bG]=ep;
}
return ao;
},

get:function(bG)
{
var ao=this;
if(bG)
{
return ao.Cy[bG];
}
else
{
return ao.Cy;
}
},

upload:function()
{
var ao=this;
ao.oUploader.upload(ao);
},

destroy:function()
{
var ao=this;
ao.oUploader.rmFile(ao);
},

cancel:function()
{
var ao=this;
ao.oUploader.cancel(ao);
},

uploader:function()
{
return this.oUploader;
}
}

fW.qmFile=EH;

fW.oUtil=
{
isFileDragOver:function(ap)
{
var anJ=ap.dataTransfer.types,ank=false;
if(anJ===null)
{
return true;
}
else
{
A.E(anJ,function(pz)
{
if(pz=="Files")
{
ank=true;
return true;
}
})
return ank;
}
}
};














fW.createCom("Base",
{
init_:function(ay)
{
var ao=this,
iD={};

if(typeof ay=="function")
{
ay=ay.call(ao,ao.name);
}

ao.FM={};
ay.sUrl=ay.sUrl||"";
ay.sFile=ay.sFile||"UploadFile";
ay.oBodyData=ay.oBodyData||{};
ao.initConfg(ay);
},

initConfg:function(ay)
{
this.oCfg=A.extend(this.oCfg||{},ay);
},

qmFile:EH,

nConcurrent:1,

detect:function(aC)
{
return true;
},

callBack:function(ahT,bD)
{
var ao=this,aS=ao.oCfg,
gp=aS[ahT]||vY;

gp.apply(ao,bD);
},

getUploadingCnt:function()
{
var ao=this,Jz=0,
fN=ao.getFile();

for(var i in fN)
{
if(fN[i].get("sStatus")=="uploading")
{
Jz+=1;
}
}
return Jz;
},

isBusy:function()
{
var ao=this;
return ao.getUploadingCnt()>=ao.nConcurrent;
},

cancel:function(aH)
{
var ao=this;

if(aH.get("sStatus")=="uploading")
{
aH.set("sStatus","cancel");
ao.calcUsedTime(aH);
ao.ossLog(aH);
aH.fCancel&&aH.fCancel();
}
else if(aH.get("sStatus")=="ready")
{
aH.set("sStatus","cancel");
}
clearInterval(aH.Nv);
clearTimeout(aH.dR);
ao.rmFile(aH);
},

onextraselect:function(aH)
{
var ao=this;
ao.callBack("onextraselect",[aH]);
},

onselect:function(iY)
{
var ao=this;
ao.callBack("onselect",[iY]);
},

calcSpeed:function(aH,ub)
{
var ao=this,
wu=new Date().valueOf();

if(!aH.get("nSize"))
{
return;
}

if(!aH.Hd)
{
aH.amv=aH.get("nUploadPercent");
aH.Hd=wu;
return;
}
else if(wu-aH.Hd>(ub||1000))
{

var Cm=
aH.get("nSize")*(aH.get("nUploadPercent")-aH.amv)/100/
(wu-aH.Hd),
aiW=aH.get("nSize")*(100-aH.get("nUploadPercent"))/100/Cm;

if(Cm>0)
{
aH.set(
{
nSpeed:(Cm/1024*1000).toFixed(2),
nRemainTime:(aiW/1000).toFixed(2)
});
}

aH.amv=aH.get("nUploadPercent");
aH.Hd=wu;
}
},

onprocess:function(aH)
{
var ao=this;

if(aH.get("nUploadPercent")>=100&&aH.get("nPercent")>=80)
{

return;
}

ao.calcSpeed(aH);

aH.set(
{
sStatus:"uploading",
sUploadStep:"posting",
nPercent:aH.get("nUploadPercent")*0.8
}
);
ao.callBack("onprocess",[aH]);

if(aH.get("nUploadPercent")==100)
{
if(!aH.get("nSpeed"))
{
ao.calcSpeed(aH,0);



}
aH.Nv=setInterval(function()
{
if(aH.get("nPercent")>=99)
{
clearInterval(aH.Nv);
return;
}
ao.callBack("onprocess",[
aH.set(
{
"nPercent":aH.get("nPercent")+1,
"sUploadStep":"waiting"
}
)
]);
},100);
}
},

oncomplete:function(aH)
{
var ao=this;

if(aH.get("sStatus")=="uploading")
{
var ej=aH.get("sStatus");
aH.set("sStatus","complete");
ao.calcUsedTime(aH);
ao.ossLog(aH);
aH.set("sStatus",ej);
ao.rmFile(aH);
clearTimeout(aH.dR);
aH.dR=setTimeout(function()
{
clearInterval(aH.Nv);
aH.set("sStatus","complete");
aH&&aH.get()&&ao.callBack("oncomplete",[aH]);
},Math.max(1600-(new Date()).valueOf()+aH.get("nUpTime"),0)
);
}
},

onerror:function(aH)
{
var ao=this;

if(/(uploading)|(ready)|(stopped)/.test(aH.get("sStatus")))
{
var ej=aH.get("sStatus");
aH.set("sStatus","error");
ao.calcUsedTime(aH);
ao.ossLog(aH);
aH.set("sStatus",ej);




clearTimeout(aH.dR);
aH.dR=setTimeout(function()
{
clearInterval(aH.Nv);
aH.set("sStatus","error");
aH&&aH.get()&&ao.callBack("onerror",[aH]);
},Math.max(1600-(new Date()).valueOf()+aH.get("nUpTime"),0)
);
}
},

calcUsedTime:function(aH)
{
var Yp=aH.get("nUpTime");

if(Yp)
{
aH.set("nUsedTime",new Date().valueOf()-aH.get("nUpTime"));
}
},

cfg:function(aH)
{
return A.extend({},this.oCfg,aH&&aH.oCfg);
},

upload:function(aH)
{

},

ossLog:function(aH)
{
debug("ossLog sStatus:"+aH.sStatus);
},

parser:function(eG,aH)
{
return["complete",{}];
},

err:function(aC,Kl)
{
return[].slice.call(arguments).join(",");
},

prepareUpload_:function(aH)
{
var ao=this;

if(!ao.getFile(aH.get("sId")))
{

ao.addFile(aH);
}

if(ao.isBusy())
{
return false;
}
return true;
},

getFile:function(aM)
{
return arguments.length?this.FM[aM]:this.FM;
},

rmFile:function(aH)
{
var ao=this;
delete ao.FM[aH.get("sId")];
},

addFile:function(av)
{
var ao=this,cE;

if(av instanceof ao.qmFile)
{
cE=av;
}
else
{
av.sId=av.sId||A.unikey();
av.nTry=0;
av.sType=ao.name;
cE=new ao.qmFile(av);
cE.oUploader=ao;
}
cE.set("sStatus","ready");
ao.FM[cE.get("sId")]=cE;
return cE;
}
}
);

window.QMFileUpload=fW;

})(QMFileAdaptor);








(function(A,aN)
{
var oR=QMFileUpload.components,
aI=window;

var bu=QMFileUpload.oUtil;
var vY=function(){};

QMFileUpload.createCom("ActivexPopup",function(aG)
{
return(
{
init_:function(ay)
{
var ao=this;
aG.init_.call(ao,ay);
ao.initConfg();
ao.oN();
},

detect:function()
{

return A.isBrowser("ie")&&A.detectActiveX(2);
},

upload:function(aH)
{
var ao=this,aS=ao.cfg(aH);

if(!ao.prepareUpload_(aH))
{
return false;
}

var iP=A.createActiveX(2,A.getDomWin(aS.oContainer));

ao.yH(aH,aS,iP);
iP.AddFormItem(aS.sFile,4,0,aH.get("sFid"));

aH.set(
{
sStatus:"uploading",
nTry:aH.get("nTry")+1,
nUpTime:new Date().valueOf()
});
aH.fCancel=function()
{
iP.StopUpload();
};
iP.StartUpload();
},

sb:function(lj,aH)
{
var ao=this,
YZ="axver=",
gF=aH.get("sFid");

try
{
YZ+=lj.Version;
}
catch(e)
{

}

lj.OnEvent=function(po,aUf,FX,JX,atF)
{
switch(aUf)
{
case 1:
ao.onerror(
aH.set(
{
sError:ao.err("internal",FX,JX,YZ)
})
);
break;
case 2:
ao.onprocess(
aH.set(
{
nUploadPercent:FX/JX*100
})
);
break;
case 3:
debug(["OnEvent",lj.ResponseCode,lj.Response]);
if(lj.ResponseCode!="200")
{
ao.onerror(
aH.set(
{
sError:ao.err("http",lj.ResponseCode,YZ)
})
);
}
else
{
var aO=ao.parser(lj.Response,aH);
(ao["on"+aO[0]]||vY).call(ao,aH.set(aO[1]));
}
break;
}
}
},

yH:function(aH,ay,lj)
{
var ao=this;
ao.sb(lj,aH);

lj.URL=ay.sUrl;

lj.AddHeader("Cookie",document.cookie);

A.E(ay.oBodyData,function(bw,bG)
{
lj.AddFormItem(bG,0,0,bw);
});
},

Zh:function(qU,lj)
{
var ao=this,
iP=lj||A.createActiveX(2);

if(qU&&typeof qU=="string")
{
var fG=[];
A.E(qU.split("\r\n"),function(aIj)
{
var OJ=A.trim(aIj).split(" ");
if(OJ.length>=2)
{
var cE,
gF=OJ.shift(),
fC=OJ.join(" "),
fj=parseInt(iP.GetFileSize(fC));

cE=ao.addFile(
{
sFid:gF,
sStatus:"ready",
sName:fC.split(/[\\\/]/).pop(),
nSize:fj
});
fG.push(cE);
}
}
);
ao.onselect(fG);
}
},

oN:function()
{
var ao=this,
aS=ao.oCfg,
bi=aS.oContainer;

A.addEvent(bi,"click",
function(ap)
{
var iP=A.createActiveX(2);
if(iP)
{
var aRV=iP.SelectFiles(aI);
ao.Zh(aRV,iP);
A.stopPropagation(ap);
}
});
}
});
},"Base");

QMFileUpload.createCom("ActivexPaste",function(aG)
{
return(
{
oN:function()
{
var ao=this,
aS=ao.oCfg,
bi=aS.oContainer;

if(bi&&aS.bBindKeyDown)
{
A.addEvent(bi,"keydown",
function(ap)
{
if((ap.ctrlKey||ap.metaKey)&&
(ap.keyCode==86||ap.keyCode==118)&&!ap.cancelBubble
)
{
ao.getClipBoardFiles(ap);
}
});
}
},

detect:function()
{
return A.detectActiveX(2);
},

getClipBoardFiles:function(ap)
{
var ao=this,
iP=A.createActiveX(2);

if(iP)
{
var anf=iP.GetClipboardFiles();
ao.Zh(anf);
if(anf)
{

A.preventDefault(ap);
}
}
}
});
},"ActivexPopup");

function afi()
{
var iP=A.createActiveX(0),
fC="";

try{fC=iP.GetDLLFileName();}catch(e){}
if(fC.indexOf("_2.dll")!=-1)
{
return['<object classid="CLSID:B0F77C07-8507-4AB9-B130-CC882FDDC046"',
' width=100% height=100%></object>'].join("");
}
else
{
return['<object classid="CLSID:F4BA5508-8AB7-45C1-8D0A-A1237AD82399"',
' width=100% height=100%></object>'].join("");
}
}

bu.getDragCode4Ax=afi;

QMFileUpload.createCom("ActivexDrag",function(aG)
{
return(
{
oN:function()
{
var ao=this,
aS=ao.oCfg,xV,
bi=aS.oContainer;

bi.innerHTML=afi();
setTimeout(function()
{
xV=ao.aAr=bi.firstChild;
A.extend(xV,ao.oCfg.oActivexCfg,
{
OnFilesDroped:function(qU)
{
ao.aBo(qU);
}
});
},200);
},

aBo:function(qU)
{
var ao=this,xV=ao.aAr;
switch(qU)
{
case"ENTER":
xV.text=ao.oCfg.sEnter;
break;
case"LEAVE":
xV.text=ao.oCfg.sLeave;
break;
case"OVER":
break;
default:
xV.text=ao.oCfg.sLeave;
ao.Zh(qU);
break;
};
},

detect:function()
{
return A.detectActiveX(4,1);
},

initConfg:function(ay)
{
var ao=this;
aG.initConfg.apply(ao,arguments);

ao.oCfg.sEnter="\u91CA\u653E\u9F20\u6807";
ao.oCfg.sLeave="\u5C06\u6587\u4EF6\u62D6\u62FD\u81F3\u6B64\u533A\u57DF";
ao.oCfg.oActivexCfg=
{
text:ao.oCfg.sLeave,
backColor:0xffffff,
textColor:0x000000,
textFacName:"\u5B8B\u4F53",
textFontSize:10,
textFontWeight:500
};
}
});
},"ActivexPopup");

})(QMFileAdaptor);






(function(A,aN)
{
var fW=QMFileUpload,
oR=fW.components;

var bu=QMFileUpload.oUtil;

var vY=function(){};

var ajz=A.T([
"top:0;left:0;",
"position:absolute;",
"cursor:pointer;",
"width:$width$px;",
"height:$height$px;",
"overflow:hidden;",
"background-color:#fff;",
"filter: alpha(opacity=0);",
"zoom:1;",
"opacity:0.0;",
"z-index:1;"
]);









var anE=A.T([
'cursor: pointer; ',
'font-family: Times;',
'position: absolute; ',
'cursor: pointer; ',
'width:200px; ',
'height:200px; ',
'font-size:50px; ',
A.isBrowser("ff")?'right:426px; ':'right:0px;'
]);

fW.createCom("RawinputPopup",function(aG)
{
return({
init_:function(ay)
{
var ao=this;
aG.init_.call(ao,ay);
ao.oN();
},

detect:function(aC)
{
return true;
},

upload:function(aH)
{
var ao=this,aS=ao.cfg(aH);

if(!ao.prepareUpload_(aH))
{
return false;
}

ao.yH(aH,aS,function()
{
ao.Qw(aH);
});
return true;
},

Qw:function(aH)
{
var ao=this,Yp=new Date().valueOf(),
anm=function()
{
ao.onprocess(
aH.set(
{
nTry:aH.get("nTry")+1,
nUpTime:Yp,
nUploadPercent:-1
})
);
};

aH.oForm.submit();
anm();

setTimeout(function()
{
if(aH.get("sStatus")=="uploading")
{
anm();
setTimeout(arguments.callee,1000);
}
},1000);
},

yH:function(aH,ay,bS)
{
var ao=this,
vN="if"+ay.sId,
aI=A.getDomWin(ay.oContainer),
Tk=aI.document,
aZ={

id:vN,
obj:Tk.body,
where:"beforeEnd",
style:"display:none;",
onload:function(ax)
{
var kd=this,
fu=aH.oForm;

A.extend(fu,
{
method:"post",
target:vN,
action:ay.sUrl
});
fu.encoding="multipart/form-data";
fu.style.display="none";

fu.firstChild.name=ay.sFile;

A.E(ay.oBodyData,function(bw,bG)
{
var MP=Tk.createElement("input");
MP.type="hidden";
MP.name=bG;
MP.value=bw;
fu.appendChild(MP);
});
Tk.body.appendChild(fu);

aZ.onload=function()
{
var cV,aO;
try
{
cV=getTop().htmlDecode(kd.contentWindow.document.documentElement.innerHTML);
cV=cV.replace(/BODY/g,'body');
var rJ=cV.match(/<body>(.*?)<\/body>/);
if(rJ[1])
{
cV=rJ[1];
}
aO=ao.parser(cV,aH);
}
catch(e)
{
aO=["complete",{}];
}

A.removeSelf(kd);
A.removeSelf(fu);

(ao["on"+aO[0]]||vY).call(ao,aH.set(aO[1]));
aH.oForm=aH.oFile=null;
};

aH.fCancel=function()
{
A.removeSelf(kd);
A.removeSelf(fu);
}

bS();
}
};

A.createBlankIframe(aI,aZ);
},

GQ:function()
{
var ao=this,aS=ao.oCfg,aB=ao.cG,
aU=A.getDomWin(aB).document,
bT=aU.createElement("input");

bT.type="file";
bT.name=aS.sFile;
bT.style.cssText=anE;

bT.onchange=function()
{
ao.nw(this);
}

A.addEvent(bT,"click",function(ap)
{
A.stopPropagation(ap);
});

aB.appendChild(bT);
},

nw:function(bC)
{
var ao=this,
aU=A.getDomWin(bC).document,
fu=aU.createElement("form");

fu.appendChild(bC);

ao.GQ();
var cE=ao.addFile(
{
sName:bC.value.split("\\").pop()
}
);
cE.oForm=fu;
ao.onselect([cE]);
},

oN:function()
{
var ao=this,aS=ao.oCfg,
bi=ao.oCfg.oContainer,
aU=A.getDomWin(bi).document,
aB=aU.createElement("span");

ao.cG=aB;
aB.style.cssText=ajz.replace(
{
width:bi.offsetWidth,
height:bi.offsetHeight+1
});
ao.GQ();

bi.style.position="relative";
bi.insertBefore(aB,bi.firstChild);
}
});
},"Base");

fW.createCom("Html5Popup",function(aG)
{
return({

init_:function(ay)
{
var ao=this;
aG.init_.call(ao,ay);
ao.oN();
},

doHtml5Upload_:function(aH,cL)
{
var ao=this;
cL.send(aH.oFile);
},

detect:function(aC)
{
var aI=window,
bT=aI.document.createElement('input');
bT.type='file';
return'multiple'in bT&&
aI.File!=aN&&
aI.XMLHttpRequest!=aN&&
(new XMLHttpRequest).upload!=aN;
},

upload:function(aH)
{
var ao=this,aS=ao.cfg(aH);

if(!ao.prepareUpload_(aH))
{
return false;
}

var dA=new XMLHttpRequest();
ao.yH(aH,aS,dA);

aH.set(
{
sStatus:"uploading",
nTry:aH.get("nTry")+1,
nUpTime:new Date().valueOf()
});
aH.fCancel=function()
{
dA.abort();
};

ao.doHtml5Upload_(aH,dA);

return true;
},

oN:function()
{
var ao=this,aS=ao.oCfg,
bi=ao.oCfg.oContainer,
aU=A.getDomWin(bi).document,
aB=aU.createElement("span");

ao.cG=aB;
aB.style.cssText=ajz.replace(
{
width:aS.nWidth||bi.offsetWidth,
height:aS.nHeight||bi.offsetHeight+1
});
ao.GQ();

bi.style.position="relative";
bi.insertBefore(aB,bi.firstChild);
},

GQ:function()
{
var ao=this,aS=ao.oCfg,aB=ao.cG,
aU=A.getDomWin(aB).document,
bT=aU.createElement("input");

bT.type="file";
bT.title="\u672A\u9009\u62E9\u6587\u4EF6";
bT.name=aS.sFile;
bT.style.cssText=anE;

if(aS.bMulti!==false)
{
bT.multiple="true";
}

bT.onchange=function()
{
ao.nw(this);
}

A.addEvent(bT,"click",function(ap)
{
A.stopPropagation(ap);
});

aB.appendChild(bT);
},

nw:function(bC)
{
var ao=this,fG=[],
fN=bC.files;

A.removeSelf(bC);
ao.GQ();

A.E(fN,function(bw)
{
var cE=ao.addFile(
{
sName:bw.name,
nSize:parseInt(bw.size,10)
});
cE.oFile=bw;
fG.push(cE);
});
ao.onselect(fG);
},

yH:function(aH,ay,cL)
{
var ao=this,
aS=ay||{};

cL.upload.onprogress=function(ap)
{
if(ap.lengthComputable)
{
ao.onprocess(
aH.set(
{
nUploadPercent:ap.loaded/ap.total*100
})
);
}
}


cL.onreadystatechange=function()
{
if(cL.readyState==4)
{
cL.onreadystatechange=cL.upload.onprogress=null;

if(cL.status==200)
{
var aO=ao.parser(cL.responseText,aH);
ao["on"+aO[0]].call(ao,
aH.set(aO[1])
);
}
else
{
ao.onerror(
aH.set(
{
sError:ao.err("http",cL.status)
})
);
}
}
}


cL.open("POST",aS.sUrl,true);

if(!aS.bToFtn)
{
cL.setRequestHeader("content-type","application/octet-stream");
}

}
});
},"Base");


QMFileUpload.createCom("Html5Drag",function(aG)
{
return(
{
oN:function()
{
var ao=this,aS=ao.oCfg,
dz=ao.oCfg.sContainerCss||"",
bi=ao.oCfg.oContainer,
vT=ao.oCfg.oArea,
aU=A.getDomWin(bi).document,
aB=A.finds("div[ui-type]",bi)[0]||aU.createElement("div"),
Eh,









bCu=function(ap)
{
if(bu.isFileDragOver(ap))
{
if(ap.target==aB)
{

aB.innerHTML=aS.sEnter;
aS.ondragover&&aS.ondragover.call(ao,ap);
}
}
A.stopPropagation(ap);
A.preventDefault(ap);
},
bEU=function(ap)
{
if(bu.isFileDragOver(ap))
{
if(ap.target==aB)
{

aB.innerHTML=aS.sLeave;

aS.ondragleave&&aS.ondragleave.call(ao,ap);
}
}
A.stopPropagation(ap);
A.preventDefault(ap);
},
bIR=function(ap)
{
if(ap.dataTransfer.files.length)
{
if(ap.target==aB)
{
ao.aBM(ap);
}
else
{
ao.cHm(ap);
}
aB.innerHTML=aS.sLeave;
}
A.stopPropagation(ap);
A.preventDefault(ap);
},
ayP=function(ap)
{
aS.onproxyclose&&aS.onproxyclose.apply(ao);
},
bGi=function()
{
setTimeout(function()
{
if(vT&&Eh)
{
Eh.style.height=vT.clientHeight+"px";
Eh.style.width=vT.clientWidth+"px";
}
},1000);
};


aB.setAttribute("ui-type","html5drag_msg");

aB.style.cssText="width:100%; font-size:14px; text-align:center; ";
if(bi.clientHeight)
{
aB.style.lineHeight=bi.clientHeight+"px";
}
else
{
aB.style.position="absolute";
aB.style.paddingTop="20%";
aB.style.marginTop="-20px";
}
aB.innerHTML=aS.sLeave;








A.addEvent(aB,"dragover",bCu);
A.addEvent(aB,"dragleave",bEU);
A.addEvent(aB,"drop",bIR);
A.addEvent(aB,"click",ayP);

if(vT)
{

var cS=vT.clientWidth,
cN=vT.clientHeight,
cEp="position:absolute;";
Eh=aU.createElement("div");
Eh.style.cssText=cEp;
Eh.style.pointerEvents="none";
Eh.setAttribute("ui-type","html5drag")
setTimeout(function()
{
Eh.style.height=vT.clientHeight+"px";
Eh.style.width=vT.clientWidth+"px";
},2000);

A.addEvent(Eh,"dragover",bCu);
A.addEvent(Eh,"dragleave",bEU);
A.addEvent(Eh,"drop",bIR);
A.addEvent(Eh,"click",ayP);
vT.insertBefore(Eh,vT.firstChild);
}

A.addEvent(A.getDomWin(bi),"resize",bGi);
A.addEvent(getTop(),"resize",bGi);

bi.insertBefore(aB,bi.firstChild);
},

aBM:function(ap)
{
var ao=this,fG=[],
fN=ap.dataTransfer.files;

A.E(fN,function(bw)
{
var cE=ao.addFile(
{
sName:bw.name,
nSize:parseInt(bw.size,10)
});
cE.oFile=bw;
fG.push(cE);
});
ao.onselect(fG);
},
cHm:function(ap)
{
var ao=this,fG=[],
fN=ap.dataTransfer.files;

if(fN.length==1)
{
var cE=ao.addFile(
{
sName:fN[0].name,
nSize:parseInt(fN[0].size,10)
});
cE.oFile=fN[0];
ao.onextraselect(cE);
}
},

initConfg:function(ay)
{
var ao=this;
aG.initConfg.apply(ao,arguments);

ao.oCfg.sEnter="\u91CA\u653E\u9F20\u6807";
ao.oCfg.sLeave="\u5C06\u6587\u4EF6\u62D6\u62FD\u81F3\u6B64\u533A\u57DF";
}
});
},"Html5Popup");

})(QMFileAdaptor);






(function(A,aN)
{
var oR=QMFileUpload.components,
aI=window,
aBi=A.T([
'<span style="top:0;left:0;position:absolute;width:100%;height:100%;margin:$margin$;z-index:0;overflow:hidden;">',
'$code$',
'</span>']);

var bu=QMFileUpload.oUtil;

var vY=function(){};

QMFileUpload.createCom("FlashPopup",function(aG)
{
return({







init_:function(ay)
{
var ao=this;
aG.init_.call(ao,ay);
ao.oN();
},

detect:function()
{
return A.qmFlash.isSupported();
},

upload:function(aH)
{
var ao=this,qE=ao.zD,
aS=ao.cfg(aH);

if(!ao.prepareUpload_(aH))
{
return false;
}

ao.yH(aS);
aH.set(
{
sStatus:"uploading",
nTry:aH.get("nTry")+1,
nUpTime:new Date().valueOf()
}
);
aH.fCancel=function()
{
qE.cancel();
};
ao.doFlashUpload_(aH,qE);
return true;
},

cancel:function(aH)
{
var ao=this;
aG.cancel.call(ao,aH);
},

getFile:function(hE)
{
var ao=this,
fN=aG.getFile.call(ao);

for(var i in fN)
{
if(fN[i].get("sFid")==hE)
{
return fN[i];
}
}
return fN;
},

yH:function(ay)
{
var ao=this,qE=ao.zD;

A.E(ay.oBodyData,function(bw,bG)
{
qE.addUploadVar(bG,bw);
});
qE.setUploadUrl(ay.sUrl);
},

aBm:function(gn)
{
var ao=this,
aS=ao.oCfg;

return aBi.replace(
{
height:aS.nHeight||gn.offsetHeight,
width:aS.nWidth||gn.offsetWidth,
margin:aS.nMargin||0,
code:A.generateFlashCode(
"flashUploader_"+aS.sId,
aS.sFlashUrl||"../flash/uploader.swf?"+Math.random(),
{
width:"100%",
height:"100%"
},
{
wmode:"transparent"
})
});
},

oN:function()
{
var ao=this,
aS=ao.oCfg,
bi=aS.oContainer,
aI=A.getDomWin(bi);

if(bi)
{
aS.sId=Math.random();

var cV=ao.aBm(bi);

bi.style.position="relative";
if(A.browserVer()==6)
{
bi.style.zoom=1;
bi.style.overflow="hidden";
}
A.insertHTML(bi,"afterBegin",cV);

setTimeout(function(){
(new A.qmFlash({
id:"flashUploader_"+aS.sId,
win:aI,
onSelect:function(ajE,ajh)
{
ao.onFlashSelect_.apply(ao,arguments);
},
onProcess:function(kf,ik)
{
ao.onFlashProcess_.apply(ao,arguments);
},
onError:function(kf,VU,iz,ik)
{
ao.onFlashError_.apply(ao,arguments);
},
onComplete:function(kf,av,aeQ)
{
ao.onFlashComplete_.apply(ao,arguments);
}
})).setup(function(kI,aLU)
{
if(kI)
{



bi.firstChild.style.zIndex=2;
ao.initFlash_(this.getFlash());
}
else
{
bi.removeChild(bi.firstChild);
debug("the flash uploader is not ok...");
}
});
},300);
}
},

getFlash:function()
{
return this.zD;
},

doFlashUpload_:function(aH,uG)
{
var ao=this,
aS=ao.cfg(aH);

uG.upload(aH.get("sFid"),aS.sFile);
},

initFlash_:function(uG)
{
var ao=this,aS=ao.oCfg;

ao.zD=uG;
if(aS.bMulti!==false)
{
uG.initlize("multi");
}
else
{
uG.initlize("single");
}


uG.clearUploadVars();
},

onFlashSelect_:function(ajE,ajh)
{
var ao=this,aS=ao.oCfg,qE=ao.zD,fG=[];

for(var i=ajE;i<=ajh;i++)
{
var cE=ao.addFile(
{
sFid:i,
sName:qE.getFileInfo(i,"name"),
nSize:parseInt(qE.getFileInfo(i,"size"),10)
});
fG.push(cE);
}
ao.onselect(fG);
},

onFlashProcess_:function(kf,ik)
{
var ao=this;
ao.onprocess(
ao.getFile(kf).set(
{
nUploadPercent:ik
})
);
},

onFlashComplete_:function(kf,av,aeQ)
{
var ao=this,
cE=ao.getFile(kf),
fk=ao.parser(av,cE);

cE.set(
{
nPostMode:aeQ,
nUpType:ao.zD.getCurUptype()
});

(ao["on"+fk[0]]||vY).call(ao,cE.set(fk[1]));
},

onFlashError_:function(kf,VU,iz,ik)
{
var ao=this,
cE=ao.getFile(kf);

ao.onerror(
cE.set(
{
nUpType:ao.getFlash().getCurUptype(),
nUploadPercent:ik,
sError:ao.err(
"internal",
parseInt(iz.replace(/Error #/g,''),10),
"flashver="+A.qmFlash.getFlashVer().desc
)
})
);
}
});
},"Base");

})(QMFileAdaptor);









(function()
{
QMFileAdaptor.extend(QMFileAdaptor,
{

getCookie:getCookie,
getSid:getSid,
getUin:getUin,
getPath:getPath,
ossLog:ossLog,
QMAjax:QMAjax
});
})();






;(function(A)
{
var fW=QMFileUpload,
oR=fW.components,
bu=fW.oUtil,
bbD=[location.protocol,"//",location.hostname,"/cgi-bin/upload"].join("");

var cbN={
"unknow":100000000,
"http":200000000,
"cgi":300000000,
"internal":400000000
};

var bSp={
"RawPost":3,
"CheckPost":7,
"MultiPost":9
};

var LH=new fW.qmCreater();

LH.orders=
{
"base":["Base"],
"popup":["FlashPopupMail","Html5PopupMail","ActivexPopupMail","RawinputPopupMail"],
"drag":["Html5DragMail","ActivexDragMail"],
"paste":["ActivexPasteMail"]
};


fW.create=function(aC,ay)
{
return LH.create(aC,ay);
}

fW.create.oCreaterInstance=LH;

fW.getMailLib=function(aG)
{
return(
{
addToUrl:function(dkp)
{
var aY=this.oCfg.sUrl,
aO=[];

A.E(dkp,function(bw,bG)
{
aO.push([bG,encodeURIComponent(bw||"")].join("="));
});
this.oCfg.sUrl=[(aY.split("?")||"")[0],aO.join("&")].join("?");
},

ossLog:function(aH)
{
var ao=this,aS=ao.cfg(aH),tK,
bd=ao.name,kt=0,aOc=0;

var fj=aH.get("nSize")/1024/1024,
aFJ=0;
if(fj>=1&&fj<6)
{
aFJ=Math.floor(fj);
}
else if(6<=fj&&fj<=50)
{
aFJ=6;
}
else if(50<fj&&fj<=1024)
{
aFJ=7;
}
else if(fj>1024)
{
aFJ=9;
}

debug(aS,2);
if(aH.get("sStatus")=="error")
{
var fq=(aH.get("sError")||"").split(",");
tK=cbN[fq[0]];


if(/^size,-1,\d+$/i.test(aH.get("sError")))
{
tK=900000003;
}
else if(tK)
{
if(aH.get("nUploadPercent")<100&&fq[0]=="internal")
{
tK=500000000;
}
tK+=Math.abs(fq[1]);


tK+=parseInt(aFJ)*100000;

if(/Flash/.test(bd)&&(aOc=aH.get("nPostMode")))
{
tK+=parseInt(aH.get("nPostMode"))*10000000;
}
}
}
else if(aH.get("sStatus")=="cancel")
{
tK=typeof aH.nLastPercentOssLog!="undefined"?900000002:900000001
}
else if(aH.get("sStatus")=="stopped"&&aH.get("sUploadStep")=="paused")
{
tK=900000;
}
else if(aH.get("sStatus")=="uploading")
{
tK=-1;
}
else if(aH.get("sStatus")=="complete")
{
var tK=0;

tK=aFJ*100000;

if(aH.get("nTry")>1)
{
tK+=1000000;
}

if(/Flash/.test(bd)&&(aOc=aH.get("nPostMode")))
{
tK+=(aOc*10000000);
}
}

if(typeof tK=="undefined")
{
return;
}

if(/Flash/.test(bd))
{
kt=aS.utype||aH.get("nUpType")||bSp[aS.sFlashMode]||3;

if(aH.get("bFtnFile"))
{
kt=3;
}
}
else if(/Activex/.test(bd))
{
kt=2;
}
else if(/Rawinput/.test(bd))
{
kt=5;
}
else if(/Html5/.test(bd))
{
kt=1;
}
else if(/Ftn/.test(bd))
{
kt=6;
}

var cCw=aH.get("nRetryTimes")||0;

var bit=/http:\/\/(.*?)\//.exec(ao.cfg(aH).sUrl);
A.ossLog("delay","all",
A.T("stat=$stat$&ftype=$ftype$&utype=$utype$&errno=$errno$&retry=$retry$&fsize=$fsize$&utime=$utime$&percent=$percent$&fid=$fid$&errdetail=$errdetail$&uphost=$uphost$&filename=$filename$").replace(
{
stat:aS.bOssLog===false?"custom":"attach",
retry:cCw,
ftype:aH.get("bFtnFile")?"1":"0",
errno:tK,
utype:kt,
fsize:aH.get("nRealPostSize")||aH.get("nSize"),
fid:aH.get("bFtnFile")?(aH.get("sFileId")||""):"",
utime:tK==900000003?0:(aH.get("nRealPostTime")||aH.get("nUsedTime")||-1),
percent:aH.get("nUploadPercent"),
uphost:((bit&&bit[1])||aH.get("sIP")),
errdetail:aH.get("sError"),
filename:aH.get("sName")
}
));
},


parser:function(eG,aH)
{
var ao=this,aS=ao.cfg(aH),aO={},ej="error";

if(/.*\/cgi-bin\/uploadfile/.test(aS.sUrl))
{
var fq;
if(eG.indexOf("/data/")!=-1)
{
fq=eG.split("|");

aO.sFileId=fq[0].split("/").pop();

if(aO.sFileId)
{
fq[1]&&(aO.sFileUrl=fq[1]);
ej="complete";
}
else
{
ej="error";
aO.sError=ao.err("unknow",709394);
}

aO.sFilePath=A.trim(eG);
}
else if(fq=/"errorcode" : "(.*)"/gi.exec(eG))
{
ej="error";
aO.sError=ao.err("cgi",fq[1]);
}
else
{
ej="error";
aO.sError=ao.err("unknow",709390);
}
}

else if(/.*\/cgi-bin\/upload/.test(aS.sUrl))
{
if(/var\s*result\s*=\s*"qmfileuploadsuccess";/.test(eG))
{
var fq=/viewfileurl="(.*?)";/.exec(eG);

aO.sFileUrl=fq&&(fq[1]+"&sid="+A.getSid());

fq=/filepath="(.*?)";/.exec(eG);


aO.sFileId=fq&&fq[1].split("/").pop();


aO.sFilePath=A.trim(fq[1]);

fq=/filesize="(.*?)";/.exec(eG);
var fj=parseInt(fq&&fq[1],10);
fj&&(aO.nSize=fj);

if(aO.sFileId)
{
ej="complete";
}
else
{
ej="error";
aO.sError=ao.err("unknow",709395);
}
}
else if(/title\s*:\s*"cgi exception",/.test(eG))
{
var fq=/errcode\s*:\s*"(.*?)",/gi.exec(eG);
aO.sError=ao.err("cgi",fq?fq[1]:"0");
}
else
{
ej="error";
aO.sError=ao.err("unknow",709397);
}
}

else if(/\/ftn_handler/.test(aS.sUrl))
{
var fq=/parent\.ftn_post_end\((.*?)\)/.exec(eG);
if(fq[1]==0)
{
ej="complete";
}
else
{
aO.sError=ao.err("cgi",fq?fq[1]:"709398");
}
}
else
{
aO.sError=ao.err("unknow","709399");
}

return[ej,aO];
},

getMailUploadUrl:function()
{
return bbD;
},

callBack:function(ahT,bD)
{
var ao=this;
if(ahT=="onprocess")
{
ao.setKeepAlive(true);
ao.cYt(bD);
}
else if(ahT=="oncomplete"||ahT=="onerror")
{
ao.checkClearAlive();
}
aG.callBack.apply(ao,arguments);
},

cYt:function(aH)
{
var ao=this;
aH=aH[0];

if(aH&&aH.get("nPercent")>=0&&!aH.cfn)
{
var AL=setInterval(function()
{
if(aH.get("sStatus")!="uploading")
{
clearInterval(aH.cfn);
return;
}

if(aH.get("nPercent")==aH.baC
&&aH.nLastPercentOssLog!=aH.baC)
{
ao.calcUsedTime(aH);
ao.ossLog(aH);
aH.nLastPercentOssLog=aH.baC;
}
aH.baC=aH.get("nPercent");
},60000);
aH.cfn=AL;
}
},

setKeepAlive:function(rM)
{
var ao=this;

if(rM)
{
if(ao.aIF)
{
return;
}
ao.aIF=setInterval(
function()
{
A.QMAjax.send("/cgi-bin/readtemplate?t=keep_alive&ef=js&sid="+A.getSid()+"&r="+Math.random(),
{
method:"GET",
headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},
onload:function(lN,bO,cL)
{
if(bO.indexOf("<!--cgi exception-->")!=-1
&&bO.indexOf('errcode : "-2"')!=-1)
{


var	fN=ao.getFile();
for(var i in fN)
{
var cE=fN[i];
if(cE.get("sStatus")=="uploading")
{
cE.fCancel&&cE.fCancel();
ao.onerror(cE);
}
}
}
}
});
},15*60*1000
);
}
else
{
clearInterval(ao.aIF);
ao.aIF=null;
}
},

checkClearAlive:function()
{
var ao=this;
setTimeout(function()
{
if(ao.getUploadingCnt())
{
ao.setKeepAlive(false);
}
},2000);
}
});
}

var EH=fW.qmFile;

var XL=function(av)
{
EH.call(this,av);
}
XL.prototype=new EH({});

XL.prototype.uploadToFtn=function()
{
var ao=this;
return ao.oUploader.uploadToFtn(ao);
}

fW.getFtnLib=function(aG)
{
return(
{
qmFile:XL,

oncomplete:function(aH)
{
var ao=this;

if(aH.get("bFtnFile"))
{
A.QMAjax.send(
A.T("/cgi-bin/ftnGetURL?sid=$sid$&t=ftn.json&s=part&fid=$fid$&ef=js").replace(
{
sid:A.getSid(),
fid:aH.get("sFileId")
}),
{
onload:function(lN,bO,cL)
{
if(lN)
{
var cU=A.evalValue(bO),nB;

if(cU.errcode=="0")
{
if(cU.oFile&&cU.oFile.sKey&&cU.oFile.sFetchCode)
{
aH.set(cU.oFile).set(
{
sDownloadPage:["http://mail.qq.com/cgi-bin/ftnExs_download?t=exs_ftn_download&k=",cU.oFile.sKey,"&code=",cU.oFile.sFetchCode].join("")

});
aG.oncomplete.call(ao,aH.set("sStatus","uploading"));
return;
}
else
{
nB=ao.err("cgi",cU.errcode);
}
}
else
{
nB=ao.err("http",cU.errcode);
}
aG.onerror.call(ao,aH.set({sError:nB}));
}
else
{
aG.onerror.call(ao,
aH.set(
{
sError:ao.err("http",bO)
}
)
);
}
}
}
);
}
else
{
aG.oncomplete.call(ao,aH);
}
},

uploadToFtn:function(aH)
{
var ao=this,
agn=aH.get("nAppId")||2;

if(!ao.prepareUpload_(aH))
{
return false;
}

A.QMAjax.send(
A.T("/cgi-bin/ftnCreatefile?sid=$sid$&path=$path$&type=direct&s=comCreate&appid=$appid$&dirid=$dirid$&ef=js&resp_charset=UTF8&loc=$loc$").replace(
{
sid:A.getSid(),
loc:["ftnCreatefile","ftnCreatefile","comCreate",
(aH.get("sFrom")||"")+agn].join(","),
appid:agn,
dirid:aH.get("sPathId")||"",
path:encodeURIComponent(aH.get("sName"))
}),
{
headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},
onload:function(lN,bO,cL)
{
var cU,
cmJ=window.gnTestSvr?window.gnTestSvr:"";
if(lN)
{
cU=A.evalValue(bO);
if(cU.errcode=="0"&&cU.url)
{

aH.set(cU.data);
aH.oCfg=A.extend(
aH.oCfg||{},
{
sUrl:cmJ?cU.url.replace(/(:?\d+\.){3}(:?\d+)\:\d{4}/gi,cmJ):cU.url,
sFile:"file",
bToFtn:true,
oQueryData:{},
oBodyData:{
mode:/Flash/.test(aH.oUploader.name)?"flashupload":"formupload"
}
}
);

ao.upload(aH.set("sStatus","ready"));
return true;
}
}

ao.onerror(
aH.set(
{
nPercent:0,
sError:(cU&&cU.errcode)?
ao.err("cgi",cU.errcode,cU.appname):ao.err("http",cL.status)
})
);
}
}
);

ao.onprocess(
aH.set(
{
nUploadPercent:0,
bFtnFile:true,
nUpTime:new Date().valueOf()
}
));
return true;
}
});
}

})(QMFileAdaptor);







;(function(A,aN)
{
var fW=QMFileUpload,
oR=fW.components,
bu=fW.oUtil,
vY=function(){};

function auq(aG)
{
return(
{
addToUrlAx:function()
{
var ao=this,aS=ao.oCfg;

aS=ao.oCfg;
aS.sUrl=aS.sUrl||ao.getMailUploadUrl();
ao.addToUrl(
{

resp_charset:A.isSystem("mac")?"UTF8":"",
t:"qmfileupload",
ef:"qdata",
ssl_edition:A.getCookie("ssl_edition"),
sid:A.getSid(),
mode:"file"
});
},

initConfg:function(ay)
{
var ao=this;
aG.initConfg.apply(ao,arguments);
ao.addToUrlAx();
}
});
};

fW.createCom("ActivexPopupMail",function(aG)
{
return A.extend(fW.getMailLib(aG),fW.getFtnLib(aG),auq(aG));
},"ActivexPopup");

fW.createCom("ActivexPasteMail",function(aG)
{
return A.extend(fW.getMailLib(aG),fW.getFtnLib(aG),auq(aG));
},"ActivexPaste");

fW.createCom("ActivexDragMail",
function(aG)
{
return A.extend(fW.getMailLib(aG),fW.getFtnLib(aG),auq(aG),
{
initConfg:function(ay)
{
var ao=this;
aG.initConfg.apply(ao,arguments);
ao.addToUrlAx();

ao.oCfg.sLeave="\u5C06\u6587\u4EF6\u62D6\u62FD\u81F3\u6B64\u533A\u57DF\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5FEB\u6377\u952Ectrl+c\u3001ctrl+v\u6765\u6DFB\u52A0\u9644\u4EF6\u3002";
}
});
},"ActivexDrag");

})(QMFileAdaptor);






;(function(A,aN)
{
var fW=QMFileUpload,
oR=fW.components;

fW.createCom("RawinputPopupMail",function(aG)
{
return A.extend(fW.getMailLib(aG),fW.getFtnLib(aG),
{
initConfg:function(ay)
{
var ao=this,aS;
aG.initConfg.apply(ao,arguments);
aS=ao.oCfg;
aS.sUrl=aS.sUrl||ao.getMailUploadUrl();
ao.addToUrl(
{
t:"qmfileupload",
ef:"qdata",
sid:A.getSid(),
mode:"file"
});
}
});
},"RawinputPopup");


function auq(aG)
{
return(
{
uploadToFtn:function(aH)
{
fW.getFtnLib(aG).uploadToFtn.apply(this,arguments);
},
doHtml5Upload_:function(aH,cL)
{
var ao=this,
aS=ao.cfg(aH)
bd=aH.get("sName");

if(A.isBrowser("safari"))
{
bd=encodeURIComponent(bd).replace(/%(\w{2})/ig,function(cjp,aoS)
{
return String.fromCharCode(parseInt(aoS,16));
}
);
}
cL.setRequestHeader("X-QQMAIL-FILENAME",bd);

if(aS.bToFtn)
{
var fu=new FormData();
fu.append('timeout',60000);
fu.append('mode',"html5upload");
fu.append('Upload',"Submit Query");
fu.append('Filename',aH.oFile.name);
fu.append('file',aH.oFile);


cL.send(fu);
}
else
{
cL.send(aH.oFile);
}
},

addToUrlHtml5:function()
{
var ao=this,aS=ao.oCfg;

aS=ao.oCfg;
aS.sUrl=aS.sUrl||ao.getMailUploadUrl();
ao.addToUrl(
{
t:"qmfileupload",
ef:"qdata",
sid:A.getSid(),
resp_charset:"UTF8",
mode:"file"
});
}
});
};

fW.createCom("Html5PopupMail",
function(aG)
{
return A.extend(fW.getMailLib(aG),auq(aG),
{
initConfg:function(ay)
{
var ao=this,aS;
aG.initConfg.apply(ao,arguments);
ao.addToUrlHtml5();
}
});
},"Html5Popup");

fW.createCom("Html5DragMail",
function(aG)
{
return A.extend(fW.getMailLib(aG),auq(aG),
{
initConfg:function(ay)
{
var ao=this,aS;
aG.initConfg.apply(ao,arguments);
ao.addToUrlHtml5();
ao.oCfg.sLeave=A.detectActiveX(2,1)?'\u5C06\u6587\u4EF6\u62D6\u62FD\u81F3\u6B64\u533A\u57DF\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5FEB\u6377\u952Ectrl+c\u3001ctrl+v\u6765\u6DFB\u52A0\u9644\u4EF6\u3002':'\u5C06\u6587\u4EF6\u62D6\u62FD\u81F3\u6B64\u533A\u57DF';
}
});
},"Html5Drag");


var EH=fW.qmFile;
var XL=function(av)
{
EH.call(this,av);
}
XL.prototype=new EH({});
XL.prototype.uploadToFtn=function()
{
var ao=this;
return ao.oUploader.uploadToFtn(ao);
}
fW.createCom("Html5DragCROS",function(aG)
{
return A.extend(
fW.getMailLib(aG),
auq(aG),
{
qmFile:XL,
uploadToFtn:function(aH)
{
fW.getFtnLib(aG).uploadToFtn.apply(this,arguments);
}
}
);
},"Html5Drag");

})(QMFileAdaptor);






;(function(A,aN)
{
var fW=QMFileUpload,
oR=QMFileUpload.components;

QMFileUpload.createCom("FlashPopupMail",function(aG)
{
var cgM=fW.getFtnLib(aG);

return A.extend(fW.getMailLib(aG),cgM,
{
aGD:function(aqo)
{
var ao=this,qE=ao.zD;

if(aqo&&!ao.bVe)
{
ao.bVe=true;
setInterval(function()
{
},1000);
}
},

initFlash_:function(uG)
{
var ao=this;
aG.initFlash_.call(ao,uG);

uG.addUploadVar("timeout",60000);





},

uploadToFtn:function(aH)
{
aH.oCfg={sFlashMode:"RawPost"};
cgM.uploadToFtn.apply(this,arguments);
},

doFlashUpload_:function(aH,uG)
{
var ao=this,
aS=ao.cfg(aH);
aH.set(
{
bVirtual:aS.sFlashMode!="RawPost"
}
);
uG.upload(aH.get("sFid"),aS.sFile,aS.sFlashMode=="RawPost"?0:1);
},

onFlashProcess_:function(kf,ik)
{
var ao=this;
ao.aGD(true);
aG.onFlashProcess_.apply(ao,arguments);
},










onFlashComplete_:function(kf,av,aeQ)
{
var ao=this;
ao.aGD(false);
ao.getFile(kf).set(
{
nUpType:ao.getFlash().getCurUptype(),
nPostMode:aeQ,
nRetryTimes:ao.getFlash().getRetryTimes()
});

aG.onFlashComplete_.apply(ao,arguments);
},

onFlashError_:function(kf,VU,iz,ik)
{
var ao=this,
cE=ao.getFile(kf);
ao.aGD(false);

ao.getFile(kf).set(
{
nUpType:ao.getFlash().getCurUptype(),
nPostMode:ao.getFlash().getCompleteMode(),
nRetryTimes:ao.getFlash().getRetryTimes()
});

aG.onFlashError_.apply(ao,arguments);
},

initConfg:function(ay)
{
var ao=this,aS,
Op=
{
sid:A.getSid(),
lang:"utf8",
ssl_edition:A.getCookie("ssl_edition"),
skey:A.getCookie("skey"),
uin:A.getUin(),
qm_sk:A.getCookie("qm_sk"),
mode:"file"
};

aG.initConfg.apply(ao,arguments);
aS=ao.oCfg;
aS.sFlashMode=aS.sFlashMode||"RawPost";

if(aS.sFlashMode=="RawPost")
{
aS.sUrl=ao.getMailUploadUrl();
Op.ef="qdata";
Op.t="qmfileupload";

}

if(aS.sFlashMode=="CheckPost")
{
Op.sid=Op.sid.split(',')[0];

}

aS.sFlashUrl=A.getPath("swf")+"uploader.swf?r="+Math.random();








ao.addToUrl(Op);
},

cancel:function(aH)
{
var ao=this;

aH.set("nUpType",ao.getFlash().getCurUptype());
aG.cancel.call(ao,aH);
}
});
},"FlashPopup");
})(QMFileAdaptor);

























































var QMTreeView=(function(aN)
{
function extendEx(ar,CF,OE)
{
for(var i in CF)
{
if(OE||typeof(ar[i])=="undefined"||ar[i]==null)
{
ar[i]=CF[i];
}
}
return ar;
}

function cGm(ar)
{
var ao=this;
ao.bY=ar;
ao.fP();
}

cGm.prototype={
fP:function()
{
var ao=this,
aQ=ao.bY,
bi=aQ.oContainer,
aJK=aQ.oDefaultItem;
ao.aWg={};
ao.zJ=bi.ownerDocument;
ao.bXU=1;

addEvent(bi,"click",function(ap){

stopPropagation(ap);
preventDefault(ap);
if(callBack.call(ao,ao.bY.onclick,[ap]))
{
ao.axF(ap);
}
});

ao.bao(aJK).aZo(bi,aJK).bej(aJK);

callBack.call(ao,ao.bY.onload);

return ao;
},





bao:function(Nn)
{
var ao=this,
iy=now(),
lG;
for(var aV=Nn.length-1;aV>=0;aV--)
{
lG=extendEx(Nn[aV],{
nTime:iy,
sDisplay:"",
sHashCode:ao.bXU++
}
);
ao.aWg[lG.sHashCode]=lG;
}
return ao;
},

aZo:function(oq,Nn)
{
var anU=QMTreeView.cD.ye,
bX=[],
lG;
for(var aV=0,aK=Nn.length;aV<aK;aV++)
{
var lG=Nn[aV];
bX.push(anU.replace(extend({sClass:'groupclose',sub:0},lG)));
if(lG.sType!="item")
{
bX.push(anU.replace(extendEx({sClass:'groupsub',sDisplay:'none',sub:1},lG)));
}
}
oq.innerHTML=bX.join("");
return this;
},

aYm:function(oq,aR,cf)
{
if(typeof cf=="undefined")
{
return oq.getAttribute(aR);
}
else
{
oq.setAttribute(aR,cf);
return oq;
}
},




ama:function(IN,btw,oq)
{
var ao=this,
cNd=btw||0,
dh=oq||ao.bY.oContainer,
bik=GelTags("div",dh),
aO=[];
if(typeof IN!="undefined")
{
for(var aV=0,aK=bik.length;aV<aK;aV++)
{
var aeq=bik[aV];
if((IN==null^ao.aYm(aeq,'key')==IN)&&ao.aYm(aeq,'sub')==cNd)
{
aO.push(aeq);
}
}
}
return aO;
},

bTO:function(oq)
{
var ao=this,
aeq=oq.parentNode.firstChild,
aO=[];
while(aeq)
{
if(ao.aYm(aeq,'key')!=null)
{
aO.push(aeq);
}
aeq=aeq.nextSibling;
}
return aO;
},

aAM:function(oq)
{
var ao=this;
while(oq)
{
if(ao.aYm(oq,'sub')=='1')
{
return oq;
}
oq=oq.nextSibling;
}
},





amG:function(bU)
{
var ao=this;

return ao.aWg[typeof bU=="string"?bU:ao.aYm(bU,'key')];
},

addNodeData:function(av)
{
var ao=this,
lG=ao.aWg,
aE=av||[];
for(var i=0,len=aE.length;i<len;i++)
{
var cA=aE[i];
!lG[cA.sHashCode]&&(lG[cA.sHashCode]=cA);
}
},

axF:function(ap)
{
var aT=getEventTarget(ap),
ao=this;
while(!ao.aYm(aT,'key'))
{
aT=aT.parentNode;
}
if(ao.aYm(aT,'sub')=='0')
{
var lG=ao.amG(aT);
if(lG.sType=='group'||lG.sType=='moreItem')
{
lG.nStatus&2?
ao.aKN(aT):
ao.YL(aT);
}

callBack.call(ao,ao.bY.onselect,[lG]);
}
},

aKN:function(oq)
{
var ao=this,
lG=ao.amG(oq);
if(lG.sType=='item'||!(lG.nStatus&2))
{
return;
}
var bdR=ao.aAM(oq),
apH=ao.ama(null,0,bdR),
nK,dyw;
for(var iA=apH.length-1;iA>=0;iA--)
{

bgO=ao.amG(nK=apH[iA]);
if(bgO.sType=="moreItem")
{
dyw=ao.aAM(nK);
show(nK,1);
show(dyw,0);
bgO.nStatus&=13;
}
}
if(lG.sType=="moreItem")
{
show(oq,1);
}
else
{
setClass(oq,'groupclose');
}
show(bdR,0);
lG.nStatus&=13;
},







collapse:function(IN)
{
for(var ao=this,oV=ao.ama(IN),aV=0,KL=oV.length;aV<KL;aV++)
{
ao.aKN(oV[aV]);
}
},

bej:function(Nn)
{
var ao=this;
for(var aV=0,KL=Nn.length;aV<KL;aV++)
{
var aE=Nn[aV];
if(aE.bExpanded)
{
ao.expand(aE.sHashCode);
}
}
return ao;
},

YL:function(oq,aer)
{
var ao=this,
lG=ao.amG(oq);
if(lG.sType=='item'||(lG.nStatus&2)&&!aer)
{
return;
}
var bdR=ao.aAM(oq),
ale=callBack.call(ao,ao.bY.ongetdata,[lG]);

if(lG.sType=="moreItem")
{
show(oq,0);
}
else
{
if(ao.bY.bUnique&&lG.sType=="group")
{
var EG=ao.bTO(oq);
for(var aV=0,KL=EG.length;aV<KL;aV++)
{
if(EG[aV]!=oq)
{
ao.aKN(EG[aV]);
}
}
}
setClass(oq,'groupopen');
}
if(ale!=null)
{
ao.bao(ale).aZo(bdR,ale).bej(ale);

}
show(bdR,1);
lG.nStatus|=3;
},




expand:function(IN,aer)
{
for(var ao=this,oV=ao.ama(IN),aV=0,KL=oV.length;aV<KL;aV++)
{
ao.YL(oV[aV],aer);
}
},

toggle:function(IN)
{
var ao=this,
lG=ao.amG(IN);
ao[lG.nStatus&2?'collapse':'expand'](lG.sHashCode);
return ao;
},

showItem:function(IN,gI)
{
for(var ao=this,oV=ao.ama(IN),aV=0,KL=oV.length;aV<KL;aV++)
{
show(oV[aV],gI);
}
}












};

cGm.cD={
ye:T(['<div class="$sClass$" style="display:$sDisplay$" key="$sHashCode$" sub="$sub$">$sItemValue$</div>'])
};

return cGm;
})();

var gnQmToolLoad=new Date().getTime()-ddf;




function qmtool_js(){}
