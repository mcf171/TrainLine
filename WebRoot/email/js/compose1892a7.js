


(function()
{
var aq=getTop();

aq.osslogAjaxCompose(0);
aq.initAddress&&aq.initAddress();
}
)();




var goCompose=
{
sUrlCreator:"urlcreator@qq.com",
sUrlCreatorFullName:"\u7F51\u9875\u751F\u6210\u52A9\u624B<urlcreator@qq.com>",
sQzone:getTop().getUin()+"@qzone.qq.com",
sQzoneFullName:["\u53D1\u8868\u5230\u6211\u7684Qzone<",getTop().getUin(),"@qzone.qq.com>"].join(""),
oQmSender:null,
ali:"",
bWA:false,
cnm:null,

bNT:false,
fdF:false,
bOk:false,
fns:false,
fBS:false,
dOS:false,
aNA:null,
acO:null,
egk:false,
sIphoneUpImgKey:""
}

function isNeedToClearMLCache()
{
debug("compose: need to update maillist? "+goCompose.egk);
return goCompose.egk;
};









function outputWbr(bR)
{
bR&&document.write(aXn(bR));
}






function aXn(bR,Te)
{
var iD=Te||12,
gf=bR||"",
bP=[],
aK=gf.length/iD;

for(var i=0;i<aK;i++)
{
bP[i]=getTop().htmlEncode(gf.substr(i*iD,iD));
}
return bP.join("<wbr>");
}






function addExistAttach(av,cbG,byB)
{
var aq=getTop(),
eLC=aq.T('<input id="$id$" name="$attachname$" value="$mailattach$" type="hidden" />'),
aFP=av.forward,
qG=av.attach;

for(var i=0,aK=qG.length;i<aK;i++)
{
var bFQ=qG[i].mailid.indexOf("@")==0?qG[i].attid:(qG[i].symname||qG[i].attid);
if(!cbG)
{
aq.insertHTML(cbG?aq.S("exist_file",window):document.frm,'beforeEnd',eLC.replace(
{
id:bFQ,
mailattach:[qG[i].mailid,bFQ,qG[i].name].join("|"),
attachname:byB?"replymailattach":"mailattach"
}
));
}
else if(cbG&&!aq.S(bFQ,window))
{
if(QMAttach.getAttachSize()+QMAttach.bYr(qG[i].size)>QMAttach.getAttachLimit())
{
QMAttach.showAttachLimit(QMAttach.getAttachLimit());
return;
}


aq.insertHTML(cbG?aq.S("exist_file",window):document.frm,'beforeEnd',QMAttach.boC("exist").replace(
{
id:bFQ,
value:[qG[i].mailid,bFQ,qG[i].name].join("|"),
viewname:aXn(qG[i].name),
newname:qG[i].newname,
size:qG[i].size,
viewfileurl:qG[i].viewfileurl,
attachname:byB?"replymailattach":"mailattach"
}
));
}
}
}

function checkReplyAttach()
{
var ge=false;
getTop().E(["exist_file","exist_BigAttach"],function(Wk)
{
if(getTop().S(Wk,window))
{
tS=getTop().S(Wk,window).childNodes;
for(var i=0,aK=tS.length;i<aK;i++)
{
if(tS[i].nodeType!=3&&getTop().isShow(tS[i]))
{
ge=true;
}
}

}
});

if(getTop().isShow(getTop().S("replyexistAttach",window))&&!ge)
{
getTop().show(getTop().S("replyexistAttach",window),false);
}
}

function addExistAttach_Big(av,byB)
{
var aq=getTop(),
crh=av.bigattach,bqX=byB?aq.S("exist_BigAttach",window):aq.S("BigAttach",window);
for(var i=0,aK=crh.length;i<aK;i++)
{
!aq.S("eabig_"+crh[i].id,window)
&&
aq.insertHTML(bqX,'beforeEnd',QMAttach.boC("exist_big").replace(
aq.extend(crh[i],{mode:byB?"replaybigattach":""})
));
}
}

function ossLogDelAttachOpt(aw)
{
if(aw)
{
var auh=aw.className.indexOf("attsep")!=-1?
aw:getTop().parents("div.attsep",aw)[0];

if(auh)
{
var eDD=getTop().finds("input.ico_att",auh);

getTop().osslogAjaxCompose(110,eDD?1:0,encodeURIComponent(auh.innerText||auh.textContent||""));
}
}
}


var QMAttach=
{
mbHideBigAttach:false,
mbHideAttach:false,

mnAttBigSizeIn:0,
mnAttBigSizeEx:0,


ciV:20,

Gg:"normal",
cHN:"exe|msi|scr|cmd|bat|com",
azV:50,
bKJ:0,

eUX:100,

cCe:{},

aER:[],
bdr:{},

bbt:null,
azG:null,
bsd:null,

auX:null,

cNj:false,

onprogress:null,
onfinish:null,

bwn:"\u5C06\u6587\u4EF6\u62D6\u62FD\u81F3\u6B64\u533A\u57DF",
cQb:"\u91CA\u653E\u9F20\u6807",

initHideAttach:function(ar)
{
if(ar)
{
this.mbHideBigAttach=ar.hideBigAttach;
this.mbHideAttach=ar.hideAttach;
}
},
aBM:function(ap)
{
QMAttach.hideDragAndDropContainer();
QMAttach.aTT();
},
eHt:function(ap)
{
var ao=QMAttach;
ao.bmJ=1;

if(getTop().QMFileUpload.oUtil.isFileDragOver(ap))
{
ao.bLg();
ao.eGV();


setTimeout(function()
{
clearTimeout(+ao.bok);
});

var bkV=ap.dataTransfer;

if(bkV)
{
bkV.effectAllowed=bkV.dropEffect="none";
}
getTop().preventDefault(ap);
}
},
eIE:function(ap)
{
var ao=QMAttach;
ao.bmJ=0;
clearTimeout(+ao.bok);
ao.bok=setTimeout(function()
{

if(!ao.bmJ)
{
ao.hideDragAndDropContainer();
ao.aTT();
}
},200);
},
fAF:function(ap)
{
QMAttach.aTT();
},
preview:function(bU)
{
var aq=getTop();
aq.ossLog("delay","all","stat=nothing&loc=compose,attachpreview,0,0&locval=compose,attachpreview,0,0");
aq.loadJsFileToTop(["$js_path$qmplayer/player181b8c.js","$js_path$com/kits/qmpreviewer/js/qmpreviewer186c8e.js"]);
aq.waitFor(
function()
{
return aq.QMPlayer&&aq.QMPreviewer;
},
function(bh)
{
if(bh)
{
var aX=typeof(bU)=="string"?bU:aq.attr(bU,"uploadid"),
rC=function(aM)
{
var iJ=aq.finds("div.attsep span[uploadid]",aq.S("attachContainer",window));
for(var i=0,l=iJ.length;i<l;i++)
{
if(aq.attr(iJ[i],"uploadid")==aM)
{
return iJ[i]
}
}
return;
},
bpS=function(aw)
{
return aq.parents("div.attsep",aw)[0]
},
ddy=function(dbc)
{
return"txt,html".indexOf(aq.getFileTypeByExt(dbc||""))>-1;
},
czE=function(aM)
{
var bE,
baU=rC(aM);

if(baU&&aq.attr(baU,"attachtype")=="big")
{
var gF=aq.attr(baU,"fid"),
bt=aq.attr(baU,"key"),
iS=aq.attr(baU,"code");
bE={};
bE.yozo=aq.gbUseYozo?1:0;
bE.sAttachId_=aM;
bE.sName=aq.finds("span[expiretime] span",bpS(baU))[0].innerHTML.replace(/\<.*?\>/gi,"");
bE.sSuffix=bE.sName.split(".").pop();
bE.sFrom="bigattach";
bE.sThumb=aq.getIconByExt(bE.sSuffix);
bE.sType=aq.getViewTypeByExt(bE.sSuffix);
bE.sUrl=({
"doc":aq.TE([
"/cgi-bin/ftnfilefunc?sid=$sid$&code=$code$&k=$k$&oper=$oper$",
"&appid=2&t=attachments_content&nocheckframe=true&s=yozo&fromattach=1",
"&ftnpreviewtype=$type$&filename=$filename$&nofixedname=$@$eval getTop().htmlEncode($filename$)$@$&ef=qfunc"
]),
"compress":aq.TE([
"/cgi-bin/ftnviewcompress?sid=$sid$&cpsfile=$@$eval getTop().encodeURI($filename$)$@$",
"&fid=$fid$&action=list&t=cps.json&fromattach=1"
])

}[bE.sType]||aq.T("/cgi-bin/ftnDownload302?sid=$sid$&fid=$fid$&code=$code$&k=$k$")).replace({
oper:"doc,xls,ppt,docx,xlsx,pptx,pdf,eml,pps,rtf,docm,dot,dotx,dotm,"
.indexOf(bE.sSuffix+",")!=-1?"htmlopen":"view",
sid:aq.getSid(),
code:iS,
fid:gF,
k:bt,
type:bE.sType,
filename:bE.sName
});
}

else if(QMAttach.oFileUploadMgr.getFileById(aM))
{
aq.E(QMAttach.oFileUploadMgr.getUploadList("complete"),function(aH)
{
if(aH.get("sId")==aM)
{
var cSU=aH.get("sUploadMode")=="collection"?"collection":"attach",
deE,
bun;

if(cSU=="collection")
{
bun=[aH.get("mailid"),aH.get("attachid"),aH.get("attachname")].join("|");
}
else
{
deE=aH.get("sFileId");
}

bE={};
bE.yozo=aq.gbUseYozo?1:0;
bE.sAttachId_=aM;
bE.sName=aH.get("sName");
bE.sSuffix=bE.sName.split(".").pop();
bE.sFrom="attach";
bE.sThumb=aq.getIconByExt(bE.sSuffix);
bE.sType=bE.sSuffix.toLowerCase()=="eml"?"other":aq.getViewTypeByExt(bE.sSuffix);
bE.sUrl=aH.get("sFileUrl")?aH.get("sFileUrl"):
aq.T([
'/cgi-bin/$appname$?sid=$sid$&upfilelistitem=$upfileid$&mailattach=$mailattach$',
'&filename=$filename$&t=$t$&readprev=$compose$&filepath=$filepath$',
'&action=$action$$viewdocparam$'
]).replace({
sid:aq.getSid(),
appname:{
"txt":"viewfile",
"html":"viewfile",
"eml":"readmail"
}[aq.getFileTypeByExt(bE.sSuffix||"")]||{
"compress":"viewcompress",
"video":"viewfile",
"music":"viewfile",
"img":"viewfile"
}[bE.sType]||"viewdocument",
action:bE.sType=="compress"?"list":(ddy(bE.sSuffix)?"view":""),
compose:aH.get("sComposePage")=="group"?aH.get("sComposePage"):"normal",
t:bE.sType=="compress"?"cps.json":(bE.sType=="doc"?"attachments_content":""),
filename:aq.encodeURI(bE.sName),
upfileid:deE,
filepath:(aH.get("sFilePath"))||"",
mailattach:bun,
viewdocparam:bE.sType=="doc"?"&s=yozo&fromattach=1&from=attachfolder":""
});

return false;
}
});
}

else
{
var iJ=aq.finds("div.attsep span[uploadid]",aq.S("attachContainer",window));
aq.E(iJ,function(aw)
{
if(aq.attr(aw,"uploadid")==aM)
{

bE={};
bE.yozo=aq.gbUseYozo?1:0;
bE.sAttachId_=aM;
bE.sName=aq.finds("span[ui-type='filename']",bpS(baU))[0].innerHTML.replace(/\<.*?\>/gi,"");
bE.sSuffix=bE.sName.split(".").pop();
bE.sFrom="attach";
bE.sThumb=aq.getIconByExt(bE.sSuffix);
bE.sType=bE.sSuffix.toLowerCase()=="eml"?"other":aq.getViewTypeByExt(bE.sSuffix);
bE.sUrl=aq.T([
'/cgi-bin/$appname$?sid=$sid$&upfilelistitem=$upfileid$&mailattach=$mailattach$',
'&filename=$filename$&t=$t$&readprev=$compose$&filepath=$filepath$',
'&action=$action$$viewdocparam$'
]).replace({
sid:aq.getSid(),
appname:{
"txt":"viewfile",
"html":"viewfile",
"eml":"readmail"
}[aq.getFileTypeByExt(bE.sSuffix||"")]||{
"compress":"viewcompress",
"video":"viewfile",
"music":"viewfile",
"img":"viewfile"
}[bE.sType]||"viewdocument",
action:bE.sType=="compress"?"list":(ddy(bE.sSuffix)?"view":""),
compose:initComposeForPage.pageId=="group"?initComposeForPage.pageId:"normal",
t:bE.sType=="compress"?"cps.json":(bE.sType=="doc"?"attachments_content":""),
filename:aq.encodeURI(bE.sName),
filepath:"",
mailattach:aq.finds("input[name='replymailattach']",bpS(aw)).length
&&aq.finds("input[name='replymailattach']",bpS(aw))[0].value
||aq.finds("input[name='mailattach']",bpS(aw)).length
&&aq.finds("input[name='mailattach']",bpS(aw))[0].value,
viewdocparam:bE.sType=="doc"?"&s=yozo&fromattach=1&from=attachfolder":""
});

return false;
}
});
}
return bE;
},
kF=function(aC)
{
return function(eEF)
{
var iJ=aq.finds("div.attsep span[uploadid]",aq.S("attachContainer",window)),
cR=-1,
aYe=eEF.sAttachId_,
bE;
for(var i=0;i<iJ.length;i++)
{
if(aq.attr(iJ[i],"uploadid")==aYe)
{
cR=i;
break;
}
}

if(aC=="prev"&&cR>0)
{
bE=czE(aq.attr(iJ[cR-1],"uploadid"));
aq.ossLog("delay","all","stat=nothing&loc=compose,attachpreview,1,0&locval=compose,attachpreview,1,0");
}
else if(aC=="next"&&cR<iJ.length-1)
{
bE=czE(aq.attr(iJ[cR+1],"uploadid"));
aq.ossLog("delay","all","stat=nothing&loc=compose,attachpreview,1,1&locval=compose,attachpreview,1,1");
}

return bE;
}
};

aq.QMPreviewer.show(
czE(aX),
{
fPrev:kF("prev"),
fNext:kF("next")
},
{

bIsShowBreakLine:false,
bShowDownBtn:false
}
);
}
}
);
},
dragOverEvent:function(my)
{
var aq=getTop();


aq.addEvents([window,getPageEditor()&&getPageEditor().getEditWin()],
{

dragleave:QMAttach.eIE,
dragenter:QMAttach.eHt,
drop:QMAttach.aBM
},my
);
},

initAttBigSize:function(ar)
{
if(ar)
{
this.mnAttBigSizeIn=ar.nAttBigSizeIn||0;
this.mnAttBigSizeEx=ar.nAttBigSizeEx||0;
}
},




checkAttachWarnningType:function()
{
var ao=this,
Kv=[],
awb=getTop().S("exist_file",window),
aBa=awb?awb.childNodes:[];

getTop().E(aBa,function(aP)
{
if(aP.tagName=="DIV")
{
var eB=getTop().S("eas_"+aP.id.split("_").pop(),window),
fC=eB&&(eB.innerText||eB.textContent)||"";
if(ao.bcy(fC))
{
Kv.push(ao.bty(fC));
}
}
}
);

getTop().E(ao.aER,function(aM)
{
var eB=getTop().S("Uploader"+aM,window),
fC=eB&&eB.value||"";
if(ao.bcy(fC))
{
Kv.push(ao.bty(fC));
}
}
);

return Kv;
},
retryUpload:function(aR)
{
var cE=this.oFileUploadMgr.getFileById(aR);
if(cE)
{
if(/cgi,-2/.test(cE.get("sError")))
{
getTop().goUrlTopWin("/cgi-bin/logout?sid="+getTop().getSid());
}
else
{
this.oFileUploadMgr.retry(cE);
this.onmgrprocess
&&this.onmgrprocess.call(this,cE);
}
}
},





delAttach:function(aR)
{
var ao=this;
aOP=getTop().S(aR,window)

aX=aR.replace('Uploader',''),
duw=ao.oFileUploadMgr.getFileById(aX);
if(aOP&&aOP.disabled)
{

ao.cea(aOP.value);
}
ao.oFileUploadMgr.rmFile(duw);

ao.GU();
getTop().removeSelf(getTop().S("D"+aR,window));
ossLogDelAttachOpt(aOP);

setEditedAttach(true);
return ao.aRc();
},






delExistAttach:function(aM)
{
var cQg=getTop().S("eas_"+aM,window);







ossLogDelAttachOpt(getTop().S("ea_"+aM,window));
getTop().removeSelf(getTop().S("ea_"+aM,window));

setEditedAttach(true);
return this.aRc();
},

delBigAttach:function(aw)
{
var dh=getTop().parents("div.attsep",aw)[0];

if(dh)
{
checkReplyAttach();
ossLogDelAttachOpt(dh);
getTop().removeSelf(dh);

setEditedAttach(true);
}
},















getAttachLimitByAddr:function()
{
if(goCompose.acO&&goCompose.acO.getAttachLimit())
{
return goCompose.acO.getAttachLimit().nLim||this.azV*1024*1024;
}
else
{
return this.azV*1024*1024;
}
},





getAttachLimit:function()
{
return this.azV*1024*1024;
},





getAttachSize:function()
{
var ao=this,
fj=0,
awb=getTop().S("exist_file",window),
aBa=awb?awb.childNodes:[];
getTop().E(aBa,function(aP)
{
if(aP.tagName=="DIV")
{
var eB=getTop().S("s"+aP.id,window);
if(eB)
{
fj=fj+ao.bYr(eB.innerHTML);
}
}
}
);
fj=fj+ao.oFileUploadMgr.getTotalSize();

return fj;
},

eFg:function()
{
var rh=0,
bP=this.oFileUploadMgr.getUploadList();
for(var i=0,l=bP.length;i<l;i++)
{
bP[i].get("bUpToFtn")
&&
(rh=rh+(+bP[i].get("nSize")));
}
return this.getAttachSize()+rh;
},





getExistList:function()
{
return this.oFileUploadMgr.getUploadList("complete");
},

missAttach:function(xU)
{
var aq=getTop();
aq.confirmBox({
msg:aq.TE(['%@%if(%type%=="fw")%@%',
'\u4EE5\u4E0B\u9644\u4EF6\u63D0\u53D6\u5931\u8D25\uFF0C\u8BF7\u5220\u9664\u540E\u91CD\u8BD5\uFF1A',
'%@%else%@%',
'\u4EE5\u4E0B%len%\u4E2A\u9644\u4EF6\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u5220\u9664\u540E\u91CD\u8BD5\uFF1A',
'%@%endif%@%<br/>',
'%@%for(%list%)%@%',
'<span style="color:red;" title="%name%">',
'%@%eval subAsiiStr(%name%,%_root_.width%,"...",1)%@%',
'</span>;&nbsp;',
'%@%if(%_root_.len%<5)%@%<br/>%@%endif%@%',
'%@%endfor%@%'],'%').replace({
len:xU.length,
width:xU.length<5?40:15,
list:xU
}),
title:"\u5931\u8D25\u4FE1\u606F",


mode:"alert",
onreturn:function(bh)
{

if(bh)
{
aq.E(xU,function(eg){
QMAttach.delAttach(eg.id);
});

}






}
});
},





hasAttach:function(cuf)
{
var aBa=this.oFileUploadMgr.getUploadList("complete"),
tS;

if(aBa.length>0)
{
return true;
}


if(getTop().S("exist_file",window))
{
tS=getTop().S('exist_file',window).childNodes;
for(var i=0,aK=tS.length;i<aK;i++)
{
if(tS[i].nodeType!=3)
{
return true;
}
}
}

if(getTop().S("filecell",window))
{
tS=getTop().S('filecell',window).childNodes;
for(var i=0,aK=tS.length;i<aK;i++)
{
if(tS[i].nodeType!=3)
{
return true;
}
}
}

if(cuf&&getTop().S("BigAttach",window))
{
tS=getTop().S('BigAttach',window).childNodes;
for(var i=0,aK=tS.length;i<aK;i++)
{
if(tS[i].nodeType!=3&&getTop().isShow(tS[i]))
{
return true;
}
}
}

return false;
},





hasUploadError:function()
{
return this.ccZ("error")!=0;
},


initDragAndDropContainer:function()
{
var	ao=this,
bi=ao.auX,aq=getTop();

if(!bi)
{
bi=ao.auX=document.createElement("div");
document.body.insertBefore(bi,document.body.firstChild);
bi.id="dndContainer";
bi.className="QMEditorMenuBorder";
bi.innerHTML=aq.T([
'<div style="padding:5px 5px 0;font-size:12px;">',
'<a class="right" onclick="QMAttach.hideDragAndDropContainer();">',
'\u5173\u95ED',
'</a>',

'</div>',
'<div style="height:150px;"></div>'
]);
}
ao.hideDragAndDropContainer();
},
eGV:function()
{
var	ao=this,
vT=getTop().finds("#QMEditorArea [ui-type='html5drag']",window)[0];
if(vT)
{
vT.style.pointerEvents="auto";
}

},
aTT:function()
{
var	ao=this,
vT=getTop().finds("#QMEditorArea [ui-type='html5drag']",window)[0];
if(vT)
{
vT.style.pointerEvents="none";
}
},
bLg:function(dIS,qh,lI)
{
var	ao=this,
bi=ao.auX,aq=getTop(),
nx=aq.calcPos(aq.S("AttachFrame",window));

if(bi)
{
bi.style.left=nx[3]+'px';
bi.style.top=(nx[2]+2)+'px';
}
},




hideDragAndDropContainer:function()
{



var ao=this,
bi=ao.auX;
ao.aTT();

if(bi)
{
bi.style.left=bi.style.top=-400+'px';
}

},









outputBtn:function(cqx,cQf,bnG,cCg)
{
var aq=getTop(),
ao=this,
ccj=typeof(bnG)!="number"
?this.azV:(this.azV=bnG);
},





isUploading:function()
{
return this.oFileUploadMgr.isUploading();
},

isPictureInserting:function()
{
return false;
},

attrUpload:function(cNb,gC)
{
var aq=getTop(),
ao=this,
tR=new aq.QMAjax;

cNb.callBack("onprocess",[
gC.set(
{
sType:"CollectionAttach",
nPercent:100
})
]);

aq.getAttachList(
gC.cE,
function(bh,aL,cL,qM)
{
if(bh)
{

var tg=aL.attach[0],
dqp="SIZEUploader"+gC.get("sId"),
aQk=aq.S(dqp,window);
aQk.name=tg.byte;
aQk.innerHTML=["(",tg.newname?(tg.newname+"&nbsp;"):"",ao.Zz(gC.get("nSize")),")"].join("");
aq.show(aQk,1);
aq.S("Uploader"+gC.get("sId"),window).value=[tg.mailid,tg.symname||tg.attid,tg.name].join("|");
gC.set("attachid",tg.symname||tg.attid);



if(aq.S("from",document))
{
aq.S("from",document).value="attachfolder";
}
var aGq=tg.viewfileurl;
ao.attrUploadComplete.call(QMAttach,"/data/"+(aGq?"|"+aGq:""),gC,true);
}
else
{
var nB;
if(aL&&aL.errcode)
{
nB="cgi,"+aL.errcode;
}
else if(!aL&&qM=="abort")
{
nB="http,700";
}
else if(cL.readyState=="4")
{
nB="http,"+cL.status;
}
else
{
nB="unknow,0";
}

ao.attrUploadComplete.call(QMAttach,nB,gC,false);
}
},
tR
);
},

attrUploadComplete:function(gh,gC,ge)
{
var ao=this;

if(ge===false)
{
ao.bsX.onerror(
gC.set(
{
nPercent:0,
sError:gh
}
)
);

ao.arH(gC,"error");
}
else
{
var jE=getTop().trim(gh);
var bfF=gh.split("|");

if(bfF.length>1)
{
var aGq;
bfF[1]&&(aGq=getTop().trim(bfF[1]));
if(aGq)
{

gC.set("sFileUrl",aGq);
}
jE=bfF[0];
}
gC.set("sFileId",jE.split('/').pop());

ao.bsX.oncomplete(
gC.set(
{
nPercent:100,
sStatus:"complete"
})
);
ao.arH(gC,"complete");
}
},
















addExistFileCell:function(av)
{
var ao=this;

getTop().E(av,function(aH)
{
ao.aAk(aH);
ao.arH(aH,"complete");

});
},




setUpAttInput:function()
{
var ao=this,
aq=getTop(),
cnM=aq.S("upfilelist",window),
aUb=aq.S("cattachlist",window);

var kC=[],biJ=[];
aq.E(ao.oFileUploadMgr.getUploadList("complete"),function(aH)
{


var aME=aH.get("sFileId");

if(aME&&!aH.get("bUpToFtn"))
{
if(aH.get("bVirtual"))
{
biJ.push(aME);
}
else
{
kC.push(aME);
}
}
}
);

if(aUb)
{
aUb.value=kC.join("|");

var cKB=aq.SN("cNoteattachelist",window),dfS=[];
if(cKB&&cKB.length>0)
{
aq.E(cKB,function(bC)
{
dfS.push(bC.value);
})
aUb.value+="|"+dfS.join("|");

}
}
if(!cnM)
{
aq.insertHTML(aUb,"afterEnd",aq.T('<input name="upfilelist" type="hidden" id="upfilelist" value="$value$" />').replace(
{
value:biJ.join("|")
}
));
}
else
{
cnM.value=biJ.join("|");
}


this.eRN();


return kC.length+biJ.length;
},

eRN:function()
{
var lP=0,
aq=getTop();

try
{
var bIU=aq.S("attachContainer",window),
aUb=aq.S("cattachlist",window),
bXe=bIU&&aq.finds("div.attsep",bIU);

lP=1;

if(bXe&&bXe.length>0)
{
var cpD=[];
for(var i in bXe)
{
var auh=bXe[i];
cpD.push(
[
(auh.innerText||auh.textContent||"").replace(/(.+\s\(.+\))(.+)/gi,"$1"),
aq.finds("input.ico_att",auh).length,
aq.finds("input[ext='netdisk']",auh).length
].join(",")
);
}
lP=2;

aq.E(this.oFileUploadMgr.getUploadList(),
function(aH)
{
cpD.push([aH.get("sName"),aH.get("sStatus"),
aH.get("sType"),(aH.get("sFileId")||"").substr(0,10)].join(","));
}
);
lP=3;
aq.insertHTML(aUb,"afterEnd",aq.T('<input name="attachlist_log" type="hidden" id="attachlist_log" value="$value$" />').replace(
{
value:encodeURIComponent(cpD.join("|"))
}
));
lP=4;
}
}
catch(e)
{
getTop().ossLog("realtime","all","stat=custom&type=attachlistlogerr&info="+
[lP,e.message].join(",")
);
}
},
showAttachLimitByAddr:function(buq,bV)
{
debug(getTop().gnIEVer);
var aq=getTop();
cS=(getTop().gnIEVer==6?500:"auto"),
emy=(getTop().gnIEVer==6?"none":"");
new aq.QMDialog({
sId:"attachAlert",
sTitle:"\u63D0\u793A",
sBodyHtml:aq.TE([
'<div class="dialog_content" un="eve_complete_div">',
'<div class="dialog_feedback">',
'<span class="dialog_icon icon_info_b"></span>',
'<div class="dialog_f_c">',
'<div class="dialog_f_t" style="font-weight: normal;">\u4F60\u7684\u90AE\u4EF6\u5927\u5C0F\u8D85\u8FC7\u4E86',
'$@$if($domain$)$@$',
' @$domain$ ',
'$@$else$@$',
'\u5BF9\u65B9',
'$@$endif$@$',
'\u7684\u9650\u5236\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u5BFC\u81F4\u9000\u4FE1\uFF0C<span style="display:',
emy,
';"><br></span>\u662F\u5426\u5C06\u666E\u901A\u9644\u4EF6\u8F6C\u4E3A\u8D85\u5927\u9644\u4EF6\u53D1\u9001\uFF1F</div>',
'</div>',
'</div>',
'</div>',
'<div class="dialog_operate">',
'<a class="btn_blue btn_space" id="transfer">\u8F6C\u4E3A\u8D85\u5927\u9644\u4EF6\u53D1\u9001</a>',
'<a class="btn_gray btn_space" id="gosend">\u7EE7\u7EED\u53D1\u9001</a>',
'<a class="btn_gray" id="cancel">\u53D6\u6D88</a>',
'</div>']).replace({
image_path:aq.getPath('image'),
domain:goCompose.acO.getAttachLimit().sDom,
size:this.Zz(buq)
}),
nHeight:null,
nWidth:cS,
onload:function()
{
var cJ=this;

aq.addEvent(cJ.S("transfer"),"click",function(){
getInputObj("transattach").value=true;
cJ.close();
bV(true);

});
aq.addEvent(cJ.S("gosend"),"click",function(){
getInputObj("transattach").value=false;
cJ.close();
bV(true);
});
aq.addEvent(cJ.S("cancel"),"click",function(){
getInputObj("transattach").value=false;
cJ.close();
bV(false);
});

}

});
},
showAttachLimit:function(buq)
{
var aq=getTop();

new aq.QMDialog({
sId:"attachAlert",
sTitle:"\u9644\u4EF6\u63D0\u793A",
sBodyHtml:aq.TE([
'<div class="dialog_content" un="eve_complete_div">',
'<div class="dialog_feedback">',
'<span class="dialog_icon icon_info_b"></span>',
'<div class="dialog_f_c">',
'$@$if($hideBigAttach$==0)$@$',
'<div class="dialog_f_t">\u60A8\u6240\u9009\u62E9\u7684\u6587\u4EF6\u8D85\u8FC7\u4E86 $size$ \u7684\u9644\u4EF6\u5927\u5C0F\u4E0A\u9650\u3002</div>',
'<div class="dialog_f_d">\u5EFA\u8BAE\u4F7F\u7528 <a id="link_bigattach" nocheck="true"><input type="button" class="ico_attbig" align="absmiddle" style="margin:0 3px 0 0!important;margin:0 3px 2px 0" />\u8D85\u5927\u9644\u4EF6</a> \u4E0A\u4F20\u53D1\u9001\u3002</div>',
'$@$else$@$',
'<div>\u60A8\u6240\u9009\u62E9\u7684\u6587\u4EF6\u8D85\u8FC7\u4E86 $size$ \u7684\u9644\u4EF6\u5927\u5C0F\u4E0A\u9650\u3002</div>',
'$@$endif$@$',
'</div>',
'</div>',
'</div>'
]).replace({
hideBigAttach:this.mbHideBigAttach?1:0,
image_path:aq.getPath('image'),
size:this.Zz(buq)
}),
nHeight:null,
onload:function()
{
var cJ=this;
aq.addEvent(cJ.S("link_bigattach"),"click",function(){
cJ.close();
initFileTransporter();
});

}

});
},


rmFileCell:function(iY)
{
var aq=getTop();

aq.E(iY,function(aH)
{
aq.removeSelf(aq.S("DUploader"+aH.get("sId"),window));
});
},











aAk:function(aH)
{
var bd="Uploader"+aH.get("sId");

var dh=document.createElement("div");
dh.className="attsep";
dh.id="D"+bd;




dh.innerHTML=this.boC(aH.get("sUploadMode")).replace(
{
id:aH.get("sId"),
name:bd,
value:aH.get("sName"),
images_path:getTop().getPath("image",true),
ext:aH.get("sUploadMode"),
filename:getTop().htmlEncode(aH.get("sName")),
dispfname:aXn(aH.get("sName")),
size:aH.get("nSize")||0,
formatsize:this.Zz(parseInt(aH.get("nSize")||0)),
mailattach:aH.get("sUploadMode")=="collection"?[aH.mailid,aH.attachid,aH.attachname].join("|"):"",
ftn:aH.get("bUpToFtn")
}
);

getTop().S(aH.get("bUpToFtn")?"BigAttach":"filecell",window).appendChild(dh);
getTop().show(getTop().S("attachContainer",getTop().getMainWin()),true);

setFileNameToSubject(aH.get("sName"));

return this;
},





aRc:function()
{
var bEH=this.hasAttach();
getTop().show(getTop().S('sAddAtt1',window),!bEH);
getTop().show(getTop().S('sAddAtt2',window),bEH);
return this;
},




drN:function()
{
var ao=this;
ao.bbt=ao.azG=ao.bsd=null;
return ao;
},





dCb:function()
{
var ao=this;
if(ao.bNM)
{
ao.bNM.disable();
}
getTop().show(getTop().S("flashUploadContainer",window),false);
return ao;
},






Zz:function(hP)
{
if(isNaN(hP))
{
return"";
}
if(hP>1024*1024)
{
return parseInt(hP*100/(1024*1024))/100.0+"M";
}
if(hP>1024)
{
return parseInt(hP*100/1024)/100.0+"K";
}
return hP+"Byte";
},





dgQ:function()
{
return(this.bKJ||1)-1;
},






boC:function(dO)
{
var bLz=this.cCe,
cz=bLz[dO];










if(dO=="exist")
{
return getTop().TE([
'<div class="attsep" id="ea_$id$" >',

'<span style="margin-right:5px;cursor:pointer;" onclick="QMAttach.preview(\'$id$\')" uploadid="$id$">',
'<input type="button" class="ico_att" style="margin:1px 3px 0 0!important;margin:0 -1px 2px 0" />',
'<input type="hidden" id="$id$" name="$attachname$" value="$value$">',
'<span ui-type="filename" compose_path="$id$" id="eas_$id$">$viewname$</span>&nbsp;',
'<span class="addrtitle">(',
'$@$if($newname$)$@$',
'$newname$&nbsp;',
'$@$endif$@$',
'<span id="sea_$id$">$size$</span>)</span>',
'</span>',
'$@$if($viewfileurl$)$@$',

'<a title="\u6DFB\u52A0\u5230\u6B63\u6587" style="margin-right:5px;" class="att_addpic" onClick="attachInsertImage(\x27$viewfileurl$\x27)" ></a>',
'$@$endif$@$',

'<a onClick="delExistAttach(\x27$id$\x27);checkReplyAttach();return false" class="att_del">\u5220\u9664</a>',
'</div>'
]);
}
else if(dO=="exist_big")
{
return getTop().TE([

'<div class="addrtitle attsep" id="eabig_$id$" mode="$mode$">',

'<span id="A$name$" style="margin-right:5px;"',


'>',
'<a href="$downloadlink$"></a>',
'<input type="button" class="ico_attbig" style="margin:0 3px 0 0!important;margin:0 3px 2px 0" />',
'<input type="hidden" name="fid" value="$fid$" />',
'<span  class="black" expiretime="$exptime$">',
'<span ui-type="filename">$filename$</span>',
'<span class="addrtitle">&nbsp;($filesize$)</span>',
'</span>',
'</span>',

'<a onClick="delBigAttach(this)" class="att_del">\u5220\u9664</a>',
'</div>'
])
}
else if(!cz)
{
var apg=[

'<span id="A$name$" style="margin-right:5px;" ',
' _onclick="QMAttach.preview(\'$id$\')" _uploadid="$id$">',
'<input type="button" class="',
'$@$if($ftn$)$@$',
'ico_attbig',
'$@$else$@$',
'ico_att',
'$@$endif$@$',
'" style="margin:0 3px 0 0!important;margin:0 3px 2px 0;" />'
];
switch(dO)
{
case"rawinput":

apg=apg.concat(
[
'<input name="$name$" ext="$ext$" id="$name$" type="hidden" value="$value$" filename="$filename$" filesize="$size$" />',
'<span ui-type="filename" id="S$name$">$dispfname$</span>&nbsp;<input type="button" class="ss_icon_loading" id="L$name$" style="width:16px;height:15px;padding:0;border:none;margin:0 3px 0 0!important;margin:0 3px 2px 0;" /><span id="SIZE$name$" name="$size$" class="addrtitle" style="display:none;"></span>',
'</span>',
'<span id="E$name$" class="upload_ctrl" ',
'style="display:none;color:red;margin-right:5px;cursor:default">',
'\u4E0A\u4F20\u5931\u8D25',
'</span>',
]
);
break;

case"collection":
case"netdisk":
case"control":
apg=apg.concat(
[
dO=="collection"?
'<input name="mailattach" ext="$ext$" id="$name$" type="hidden" value="$mailattach$" filename="$filename$" filesize="$size$">':'<input ext="$ext$" id="$name$" type="hidden" value="$value$" filename="$filename$" filesize="$size$" disabled>',
'<span ui-type="filename" id="S$name$" class="addrtitle">$dispfname$</span>&nbsp;<span id="SIZE$name$" name="$size$" class="addrtitle">($formatsize$)</span>',
'</span>',
'<span id="W$name$" style="color:grey; margin-right: 5px; cursor: default;">\u7B49\u5F85\u4E0A\u4F20</span>',
'<span id="P$name$" class="bd_upload attchUploadstyle" style="display:none">',
'<div id="PB$name$" class="fdbody"></div>',
'</span>',
'<span id="E$name$" class="upload_ctrl" ',
'style="display:none;color:red;margin-right:5px;cursor:default">',
'\u4E0A\u4F20\u5931\u8D25',
'</span>',
]
);
break;
}
bLz[dO]=cz=getTop().TE(apg.concat([
'<span id="CON$name$" class="upload_ctrl process" >',



'<a id="R$name$" style="display:none;margin-right:5px;" onclick="QMAttach.retryUpload(\x27$id$\x27)" class="att_reupl">\u91CD\u8BD5</a>',

'<a id="V$name$" style="display:none;margin-right:5px;" onclick="attachInsertImage(this.getAttribute(\x27viewfileurl\x27));" class="att_addpic">\u6DFB\u52A0\u5230\u6B63\u6587</a>',



'<a onclick="delAttach(\x27$name$\x27);return false" class="att_del">\u5220\u9664</a>',
'</span>'
]));
}

return cz;
},





dga:function()
{
return(this.bKJ++);
},




cAP:function()
{
var bsj=this.oFileUploadMgr.getUploadList("ready");
return bsj.length?bsj[0]:null;
},




drp:function()
{
return this.oFileUploadMgr.getUploadList().length
},




ccZ:function(pL)
{
return this.oFileUploadMgr.getUploadList(pL).length
},





bEb:function()
{
if(!getTop().goUserInfo.get("UPLOADEXPIRE"))
{
return true;
}

var aq=getTop();
new aq.QMDialog({
sId:"attachAlert",
sTitle:"\u90AE\u7BB1\u63D0\u793A",
sBodyHtml:aq.T([
'<div class="dialog_feedback">',
'<span class="dialog_icon icon_info_b"></span>',
'<div class="dialog_f_c" style="font-size:12px;padding-top:0;width:330px;">',
'\u60A8\u6700\u8FD124\u5C0F\u65F6\u5185\u53D1\u9001\u8D85\u8FC7<b style="color:red;"> $size$M </b>\u7684\u666E\u901A\u9644\u4EF6\uFF0C\u572824\u5C0F\u65F6\u671F\u6EE1\u524D\u5C06\u4E0D\u80FD\u53D1\u9001\u5927\u9644\u4EF6\uFF0C\u4E3A\u4FDD\u8BC1\u670D\u52A1\u8D44\u6E90\u5408\u7406\u5229\u7528\uFF0C\u8BF7\u6539\u7528"\u8D85\u5927\u9644\u4EF6"\u529F\u80FD\u53D1\u9001\u3002',
'</div>',
'</div>',
'<div class="dialog_operate">',
'<input class="wd2 btn" type=button id="confirm" value=\u786E\u8BA4 style="margin-right:5px;" >',
'<input class="wd2 btn" type=button id="cancel" value=\u53D6\u6D88>',
'<div class="clr"></div>',
'</div>'
]).replace(
{
imgPath:aq.getPath("image"),
size:200
}),
onload:function(){
var cJ=this;
aq.addEvent(cJ.S("confirm"),"click",function(){
cJ.close();
initFileTransporter();
});
aq.addEvent(cJ.S("cancel"),"click",
function(){cJ.close()});

},
onshow:function(){
this.S("confirm").focus();
}
});

return false;
},




bcy:function(iu)
{
var bCc=this.cHN.split("|"),
ge=false,
cHD=(iu||"").split(".").pop().toLowerCase();
for(var i=0;i<bCc.length;i++)
{
if(cHD==bCc[i])
{
ge=true;
}
}
return ge;
},





cea:function(cfo)
{
if(cfo)
{
var cdQ=getTop().S(cfo,window);

cdQ&&getTop().removeSelf(cdQ);
}
},

























bty:function(iu)
{
var aWd=iu.length,
bHC=aWd-6,
cIT=iu.substr(0,bHC),
cFX=iu.substr(bHC);

return getTop().subAsiiStr(cIT,8,"...")+cFX;
},






bYr:function(xa)
{
xa=xa.toLowerCase();
if(xa.indexOf("k")!=-1)
{
return parseFloat(xa)*1024;
}
if(xa.indexOf("m")!=-1)
{
return parseFloat(xa)*1024*1024;
}
return parseFloat(xa);
},




cBd:function(aM,cDK,cuw)
{
var bd="Uploader"+aM,
aq=getTop();

aq.E(cDK.split("|"),function(bap)
{

aq.show(aq.S(bap+bd,window),true);

}
);

aq.E(cuw.split("|"),function(bap)
{

aq.show(aq.S(bap+bd,window),false);
}
);

return this;
},




arH:function(ER,pL,VU,iv)
{
if(!ER)
{
return this;
}
var aX=ER.get("sId"),
aq=getTop(),
aoh="",
alS="",

cjl=typeof ER.cE=="string";


switch(pL)
{
case"ready":
alS="E|O|R|P";
aoh="W";

break;
case"uploading":
if(cjl)
{
alS="W|E|O|R|P";
}
else
{
aoh="P";
alS="W|E|O|R";

}

break;
case"complete":
alS="W|E|O|R|P|L";
aoh="";



!ER.get("sComposePage")
&&ER.set("sComposePage",initComposeForPage.pageId);

var bqk=aq.S("AUploader"+aX,window);

if(bqk)
{
bqk.style.cursor="pointer";
bqk.onclick=new Function(bqk.getAttribute("_onclick"));
bqk.setAttribute("uploadid",bqk.getAttribute("_uploadid"));
}

if(ER.get("sFileUrl"))
{
aoh="V";
aq.S("VUploader"+aX,window).setAttribute("viewfileurl",ER.get("sFileUrl"));
}

aq.hasClass(aq.S("CONUploader"+aX,window),"process")
&&aq.rmClass(aq.S("CONUploader"+aX,window),"process");
aq.hasClass(aq.S("SUploader"+aX,window),"addrtitle")
&&aq.rmClass(aq.S("SUploader"+aX,window),"addrtitle");



if(ER.get("bUpToFtn"))
{
var dqN=aq.S("DUploader"+aX,window);
aq.insertHTML(dqN,"afterEnd",
QMAttach.boC("exist_big").replace(
{
id:ER.get("sId"),
downloadlink:ER.get("sDownloadPage"),
exptime:ER.get("nServerSecond")+ER.get("nExpireTime"),
filename:aXn(ER.get("sName")),
filesize:this.Zz(parseInt(ER.get("nSize")||0)),
fid:ER.get("sFileId")
})
);
aq.removeSelf(dqN);
this.GU();
break;
}
else
{
if(/Rawinput/.test(ER.get("sType"))&&ER.get("nSize"))
{
var aQk=aq.S("SIZEUploader"+aX,window);
aQk.innerHTML="("+this.Zz(parseInt(ER.get("nSize")||0,10))+")";
aq.show(aQk,true);
}
this.GU();
break;
}
case"error":
if(cjl)
{
aoh="E|R";
alS="W|O|P";
}
else
{
aoh="E|O|R";
alS="W|P|L";
}

var bGW=aq.S("EUploader"+aX,window),
nB=ER.get("sError")||"";


if(bGW)
{
if(/cgi,-501,ftnCreatefile/.test(nB))
{
bGW.innerHTML="\u4E2D\u8F6C\u7AD9\u5269\u4F59\u5BB9\u91CF\u4E0D\u8DB3";
}
else if(/cgi,-113,ftnCreatefile/.test(nB))
{
bGW.innerHTML="\u6587\u4EF6\u6D89\u53CA\u654F\u611F\u8BCD\u8BED";
}
else if(/cgi,-2/.test(nB))
{
bGW.innerHTML="\u767B\u5F55\u8D85\u65F6";
}
bGW.title=aq.T("\u9519\u8BEF\u7C7B\u578B\uFF1A$type$\n\u9519\u8BEF\u6D88\u606F\uFF1A$msg$").replace(
{
type:ER.get("sType"),
msg:nB.split(",").slice(0,2).join(",")
}
);
}
this.GU();
break;
}





return this.cBd(aX,aoh,alS);
},



GU:function()
{
var ao=this,
TN=ao.cAP();

if(!TN&&!this.isUploading()&&typeof(ao.onfinish)=="function")
{
try
{
ao.onfinish.call(ao);
}
catch(bj)
{
getTop().doPageError(bj.message,"compose.js","QMAttach.onfinish");
}
ao.onprogress=null;
ao.onfinish=null;
}
},

getInfoUid:function(cvw)
{
var aO=[];

getTop().E(this.oFileUploadMgr.getUploadList("complete"),function(aH){
if(cvw[aH.get("sFileId")])
{
aO.push({
name:getTop().htmlEncode(aH.get("sName")),
id:"Uploader"+aH.get("sId")
});
}
});
return aO;
},




























































































































initFileUpload:function(ar)
{
var aq=getTop(),
ao=this,
Mw=QMAttach.oFileUploadMgr;

aq.waitFor(function()
{
return!!aq.QMFileUpload
&&!!aq.S('AttachFrame',window)
},
function(bh)
{
if(bh)
{
getTop().osslogAjaxCompose(100);

var czL=
{
onproxyclose:function()
{
ao.aTT();
ao.hideDragAndDropContainer();
},
onselect:function()
{
Mw.oCfg.onselect.apply(Mw,arguments);
},

onprocess:function()
{
Mw.oCfg.onprocess.apply(Mw,arguments);
},

oncomplete:function()
{
Mw.oCfg.oncomplete.apply(Mw,arguments);
},

onerror:function()
{
Mw.oCfg.onerror.apply(Mw,arguments);
}
};

ao.bsX=aq.QMFileUpload.create("base",czL);


















































ao.blM=aq.QMFileUpload.create("popup",
aq.extend(
{
oContainer:aq.S('AttachFrame',window)
},czL)
);

if(ao.blM.name=="FlashPopupMail")
{
var boV=getTop()["__UploadSvrProxy__"],
aS={},
bYf=location.protocol;
if(bYf=="https:"||!ar.sFlashMode||ar.sFlashMode=="RawPost")
{
aS.sFlashMode="RawPost";
if(bYf=="https:")
{
aS.utype="12";
ao.blM.initConfg(aS);
}
}
else 
{
aS.sFlashMode=ar.sFlashMode;
if(!boV)
{


aS.sFlashMode="RawPost";
ao.blM.initConfg(aS);

getTop().loadJsFile("http://upload.mail.qq.com/proxyinfo.js",true,getTop().document,
function()
{
boV=getTop()["__UploadSvrProxy__"];
if(boV&&boV.ip)
{
aS.sUrl="http://"+boV.ip+"/cgi-bin/uploadfile";
aS.sFlashMode="CheckPost";
ao.blM.initConfg(aS);
}
},{},true);
}
else
{
aS.sUrl="http://"+boV.ip+"/cgi-bin/uploadfile";
ao.blM.initConfg(aS);
}
}
}
ao.cOY=aq.QMFileUpload.create("paste",
aq.extend(
{
oContainer:document.body
},czL)
);



ao.initDragAndDropContainer();
ao.ccA={};
ao.cSY=aq.QMFileUpload.create("drag",
aq.extend(
{
oArea:aq.finds("#QMEditorArea",window)[0],
oContainer:ao.auX.lastChild
},
{
onproxyclose:function()
{
ao.aTT();
ao.hideDragAndDropContainer();
getPageEditor().focus()
},
onextraselect:function(aH)
{
ao.aTT();
ao.hideDragAndDropContainer();

if("bmp|jpg|jpeg|gif|png".indexOf(aH.oFile.name.toLowerCase().split(".").pop())>-1)
{
aq.showInfo("\u6B63\u5728\u6DFB\u52A0\u56FE\u7247\u5230\u6B63\u6587...",1);
ao.ccA[aH.get("sId")]=1;

aH.upload();
}
},
onselect:function()
{
ao.aTT();
Mw.oCfg.onselect.apply(Mw,arguments);
},
onprocess:function(aH)
{
if(ao.ccA[aH.get("sId")])
{
aq.showInfo("\u6B63\u5728\u6DFB\u52A0\u56FE\u7247\u5230\u6B63\u6587..."+Math.floor(aH.get("nPercent"))+"%",-1);
}
else
{
Mw.oCfg.onprocess.apply(Mw,arguments);
}
},
oncomplete:function(aH)
{
if(ao.ccA[aH.get("sId")])
{
aq.hiddenMsg();
if(aH.get("sFileUrl"))
{
attachInsertImage(aH.get("sFileUrl"));
}
else
{
aq.showError("\u56FE\u7247\u63D2\u5165\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u4E00\u6B21");
}
ao.GU();


aH.destroy&&aH.destroy();
delete ao.ccA[aH.get("sId")];
}
else
{
Mw.oCfg.oncomplete.apply(Mw,arguments);
}
},
onerror:function()
{
if(ao.glR)
{
aq.showError("\u56FE\u7247\u4E0A\u4F20\u5931\u8D25");
ao.GU();
Mw.rmFile(aH);
}
else
{
Mw.oCfg.onerror.apply(Mw,arguments);
}
}
})
);














QMAttach.dragOverEvent();

var vM="moreupload",
deL=aq.S(vM,window);

deL.onclick=function()
{

var cs=aq.calcPos(aq.S("AttachFrame",window)),
rW=[
{sId:'drag',sItemValue:'\u62D6\u62FD\u4E0A\u4F20'},
{
sId:'attachfolder',
sItemValue:'\u4ECE\u6536\u85CF\u7684\u9644\u4EF6\u4E2D\u9009\u62E9'
}];

if((ar.attachs&&ar.attachs.length
||ar.bigattachs&&ar.bigattachs.length)&&window["attachflag"]!="replyattach")
{
rW.push(
{
sId:'addExist',
sItemValue:'\u6DFB\u52A0\u539F\u90AE\u4EF6\u9644\u4EF6'
}
);
}


var bFV;
if(aq.S("bigAttachLink",window))
{
bFV=aq.calcPos(aq.S("bigAttachLink",window))[2]+4;
}
else
{
bFV=cs[2]+(aq.gbIsIE?-7:2);
}
var eZ=aq.QMMenu(vM);
if(!eZ||!eZ.isShow())
{
aq.hideMenuEvent();
new aq.QMMenu({
oEmbedWin:window,
sId:vM,
nX:cs[3],
nY:bFV,
nItemHeight:21,

nWidth:aq.getLocale()=="zh_CN"?150:200,
oItems:rW,
onitemclick:function(aM)
{
switch(aM)
{
case'drag':
if(!ao.cSY)
{
showInstallActiveXDialog();
}
else
{
ao.bLg(true);
}
break;
case'attachfolder':
openAttachFolder();
break;
case'addExist':
addExistAttach({attach:ar.attachs},true)
addExistAttach_Big({bigattach:ar.bigattachs});
aq.ossLog("delay","all","stat=nothing&loc=compose,rlyatt,0,0");
aq.show("attachContainer",true,aq.getMainWin());
window["attachflag"]="replyAllAttach";
var aYZ=aq.S("domnewRcpt",window);
aq.show(aYZ,0);
getInputObj("newrcpt",null,false).value="";
break;
}
}
});
}
return false;
}
}
});
},


onmgrprocess:function(aH)
{
var ao=this,
aB=getTop().S("PBUploader"+aH.get("sId"),window);

if(aB)
{
aB.style.width=Math.round(aH.get("nPercent"))+"%";
}

if(ao.onprogress)
{
try
{
if(aH.get("nPercent")<0)
{
ao.onprogress.call(ao,-1);
}
else
{
var hp=ao.oFileUploadMgr,
fj=QMAttach.eFg(),
bGO=hp.getUploadList("ready"),
aUv=0;
for(var i=0,l=bGO.length;i<l;i++)
{
var VK=bGO[i].get("nSize")?(+bGO[i].get("nSize")):0;
aUv=aUv+VK;
}
aUv=aUv+(100-aH.get("nPercent"))/100*aH.get("nSize");

ao.onprogress.call(ao,(fj-aUv)/fj*100);
}
}
catch(bj)
{
}
}

this.arH(aH,aH.get("sStatus"));
},


onmgrerror:function(aH)
{
this.arH(aH,aH.get("sStatus"));
},


onmgrcomplete:function(aH)
{
this.arH(aH,aH.get("sStatus"));
setEditedAttach(true);
},

eBw:function(iY,bV)
{
var aq=getTop(),ao=this,
aLy=[],Kv=[],dfd=[];

aq.E(iY,function(aH)
{
var bDr=aH.get("nSize");
if(typeof bDr!="undefined"&&aH.get("nSize")<=0)
{
aLy.push(aH.get("sName"));
aH.destroy();
}
else if(ao.bcy(aH.get("sName")))
{
Kv.push(aH.get("sName"));
aH.destroy();
}
else
{
dfd.push(aH);
}
});
iY=dfd;

if(aLy.length>0||Kv.length>0)
{
aq.alertBox(
{
msg:aq.TE(
[
'$@$if($sizedisp$)$@$',
'<div class="dialog_f_t">\u4EE5\u4E0B\u6587\u4EF6\u5927\u5C0F\u4E3A 0 \u5B57\u8282\uFF0C\u8BF7\u68C0\u67E5\u540E\u91CD\u8BD5\u3002</div>',
'<div class="dialog_f_d addrtitle" style="width:400px;max-height:160px;_white-space:nowrap;word-wrap:break-word; word-break:break-all; overflow:hidden; text-overflow:ellipsis;">$sizefiles$</div>',
'$@$else if($typedisp$)$@$',
'<div class="dialog_f_t">\u51FA\u4E8E\u5B89\u5168\u6027\u8003\u8651\uFF0C\u4E0D\u5141\u8BB8\u6DFB\u52A0\u4EE5\u4E0B\u53EF\u6267\u884C\u6587\u4EF6\u6587\u4EF6\u3002</div>',
'<div class="dialog_f_d addrtitle" style="width:400px;max-height:160px;_white-space:nowrap;word-wrap:break-word; word-break:break-all; overflow:hidden; text-overflow:ellipsis;">$typefiles$</div>',
'$@$endif$@$'
]).replace(
{
sizedisp:aLy.length,
sizefiles:getTop().htmlEncode(aLy.join(", ")),
typedisp:Kv.length,
typefiles:getTop().htmlEncode(Kv.join(", "))
}
),
title:"\u786E\u8BA4",
onreturn:function()
{
bV(iY);
}
}
);
}
else
{
bV(iY);
}
},

ehE:function(iY,dWO,efj,bV)
{
var aq=getTop(),ao=this;

new aq.QMDialog({
sTitle:"\u9644\u4EF6\u63D0\u793A",
sBodyHtml:aq.TE([
'<div style="padding:10px 0 5px 10px;text-align:left;">',
'<img src="$image_path$ico_question104474.gif" align="absmiddle" style="float:left;margin:5px 10px 0;">',
'<div style="padding-top:10px;word-break:break-all;line-height:150%;margin:0 10px 10px 65px;" class="b_size">',
'$@$if($overtotal$==1)$@$',
'<div class="bold" style="margin-bottom:10px;">\u60A8\u6DFB\u52A0\u7684\u9644\u4EF6\u6587\u4EF6\u603B\u5927\u5C0F\u8D85\u8FC7$totalsize$M</div>',
'$@$else$@$',
'<div class="bold" style="margin-bottom:10px;">\u60A8\u6DFB\u52A0\u7684\u9644\u4EF6\u6587\u4EF6\u4E2D\uFF0C\u6709\u4E9B\u8D85\u8FC7\u4E86$singlesize$M</div>',
'$@$endif$@$',
'\u5EFA\u8BAE\u60A8\u8F6C\u4E3A\u8D85\u5927\u9644\u4EF6$@$if($locale$ == "zh_CN")$@$($aboutmore$)$@$endif$@$\u53D1\u9001\u3002<br>',
'<div class="addrtitle">\u8D85\u5927\u9644\u4EF6\u4E0D\u6C38\u4E45\u4FDD\u5B58\uFF0C\u66F4\u73AF\u4FDD\uFF0C\u5BF9\u65B9\u4E5F\u53EF\u4EE5\u9AD8\u901F\u4E0B\u8F7D\u3002</div>',
'</div>',
'</div>',
'<div style="text-align:right;">',
'<div style="padding:0 27px 12px 0;" id="dlgtype" dlgtype="$overtotal$">',
'<input class="btn_gray btn_input btn_space" id="bigAttSend" type="button" value="\u662F\uFF0C\u4F7F\u7528\u8D85\u5927\u9644\u4EF6" /> ',
'$@$if($overtotal$==1)$@$',
'<a class="btn_gray" id="cancel" value="" nocheck="true">\u4E0D\uFF0C\u53D6\u6D88\u4E0A\u4F20</a> ',
'$@$else$@$',
'<a class="btn_gray" id="send" value="" nocheck="true">\u4E0D\uFF0C\u4F7F\u7528\u666E\u901A\u9644\u4EF6</a> ',
'$@$endif$@$',
'</div>',
'</div>'
]).replace(
{
locale:aq.getLocale(),
image_path:aq.getPath("image"),
aboutmore:'<a href="http://service.mail.qq.com/cgi-bin/help?subtype=1&&no=1000593&&id=35" target="_blank">\u8BE6\u60C5</a>',
singlesize:ao.ciV,
totalsize:ao.azV,
oversingle:efj?1:0,
overtotal:dWO?1:0
}),
onshow:function(){
this.S("bigAttSend").focus();
},
onload:function(){
var cv=this,cJB=cv.S("dlgtype").getAttribute("dlgtype");

aq.addEvent(cv.S("bigAttSend"),"click",function()
{
bV(true);
aq.ossLog("delay","all","stat=nothing&locval=qmattach,toftn,1,"+cJB);
cv.close();
}
);
aq.addEvent(cv.S("send"),"click",function()
{
bV(false);
aq.ossLog("delay","all","stat=nothing&locval=qmattach,toftn,0,"+cJB);
cv.close();
}
);
aq.addEvent(cv.S("cancel"),"click",function()
{
aq.ossLog("delay","all","stat=nothing&locval=qmattach,toftn,-1,"+cJB);
cv.close();
}
);
}
});
},

onmgrselect:function(iY,bV)
{
var aq=getTop(),ao=this,
dfW=function()
{
aq.E(iY,function(aH)
{
aH.destroy();
});
};

if(!ao.bEb())
{
dfW();
return;
}

ao.eBw(iY,function(iY)
{
var dAR=0,bXy,bpc;
aq.E(iY,function(aH)
{
var bDr=aH.get("nSize");
if(typeof bDr!="undefined")
{
if(aH.get("nSize")>ao.ciV*1024*1024)
{
bXy=true;
}
dAR+=aH.get("nSize");
}
});


if(ao.getAttachSize()*1.3+dAR>ao.getAttachLimit())
{
bpc=true;
}

if(bpc&&!iY[0].uploadToFtn)
{
ao.showAttachLimit(ao.getAttachLimit());


var cgu=getTop().getMainWin(),
Mh=cgu.QMAddrInput,
chV=0;

Mh&&getTop().E(Mh.get("to",cgu).get("json"),
function(bw)
{
if(/qq.com$/gi.test(bw.addr))
{
chV=1;
return false;
}
}
);
getTop().ossLog("delay","all","stat=custom&type=attbigsize&info="
+[chV,ao.getAttachSize()+iY[0].get("nSize")].join(","));

dfW();
}
else if((bpc||bXy)&&iY[0].uploadToFtn)
{
ao.ehE(iY,bpc,bXy,function(eOC)
{
if(eOC)
{
if(getTop().detectActiveX(3))
{
initFileTransporter(true);
}
else
{
aq.E(iY,function(aH)
{
aH.set("bUpToFtn",true);
ao.aAk(aH);
});
bV(iY);
}
}
else
{
aq.E(iY,function(aH)
{
ao.aAk(aH);
});
bV(iY);
}
});
}
else
{
aq.E(iY,function(aH)
{
ao.aAk(aH);
});
bV(iY);
}


ao.aRc();
});



}
};





QMAttach.oFileUploadMgr=dyz({



onselect:function(iY)
{
var ao=this,
aq=getTop();

QMAttach.hideDragAndDropContainer();

!iY.length
&&(iY=[iY]);
aq.osslogAjaxCompose(101);

aq.E(iY,function(aH)
{
aH.set("sUploadMode",ao.dtl(aH));
});

QMAttach.onmgrselect(iY,function(iY)
{

aq.E(iY,function(aH)
{
aH.set("sFrom","attachToFtn");
ao.addFile(aH);
});
});
},
onprocess:function(aH)
{
QMAttach.onmgrprocess
&&QMAttach.onmgrprocess.call(QMAttach,aH);
},
onerror:function(aH)
{
getTop().osslogAjaxCompose(102,undefined,undefined,undefined,aH.get("sName"));
getTop().osslogAjaxCompose(104);


debug(["QMFileUpload ONERROR",aH.get("sType"),aH.get("nPercent"),aH.get("sError")].join(" : "));

if(/FlashPopup/.test(aH.get("sType")))
{

QMAttach.blM.initConfg({sFlashMode:"RawPost"});


}
QMAttach.onmgrerror
&&QMAttach.onmgrerror.call(QMAttach,aH);

this.ZM(aH);
},
oncomplete:function(aH)
{
getTop().osslogAjaxCompose(102,undefined,undefined,undefined,aH.get("sName"));
getTop().osslogAjaxCompose(102);
getTop().osslogAjaxCompose(103);
QMAttach.onmgrcomplete
&&QMAttach.onmgrcomplete.call(QMAttach,aH);

this.ZM(aH);
}
});

function dyz(ay)
{
var hp={};
hp.ox=[];
hp.bDl={};
hp.oCfg=ay;

hp.moTmpSelect=[];

function azB(aH)
{
return aH[aH.uploadToFtn&&aH.get("bUpToFtn")?"uploadToFtn":"upload"]();
}

getTop().extend(hp,
{
addFile:function(aH)
{
if(this.Ku(aH)&&!this.isUploading())
{

azB(aH);
}
},

initFileList:function(akL)
{


QMAttach.addExistFileCell(this.setUploadData(akL));
},
rmFile:function(aH)
{
var ej=aH.get("sStatus");
if(this.bYK(aH)&&ej=="uploading")
{


aH.cancel();

this.ZM(aH);
}
aH.destroy&&aH.destroy();
getTop().osslogAjaxCompose(105);
},

retry:function(aH)
{
if(this.apN(aH)&&!this.isUploading())
{

azB(aH);
}
},


isUploading:function()
{

var bP=this.ox;
for(var i=0,l=bP.length;i<l;i++)
{
if(bP[i].get("sStatus")=="uploading")
{
return true;
}
}
},

getTotalSize:function()
{
var rh=0,
bP=this.ox;
for(var i=0,l=bP.length;i<l;i++)
{
!bP[i].get("bUpToFtn")
&&
(rh=rh+(+bP[i].get("nSize")));
}
return rh;
},

getFileById:function(aM)
{
var bP=this.ox;
for(var i=0,l=bP.length;i<l;i++)
{
if(aM==bP[i].get("sId"))
{
return bP[i]
}
}
},

setUploadData:function(dV)
{
var HL=function(aR)
{
return this[aR];
};





var fG=this.ox=[];
for(var i=0,l=dV.length;i<l;i++)
{
fG.push(getTop().extend({},dV[i]));
fG[i].get=HL;
}
return fG;
},
getUploadList:function(aC)
{
var bP=this.ox,
UY=[],
ej;

for(var i=0,l=bP.length;i<l;i++)
{
ej=bP[i]['sStatus']||bP[i].get("sStatus");
if(!aC||aC==ej)
{
UY.push(bP[i]);
}
}

return UY
},
getUploadListExclude:function(aC)
{
var bP=this.ox,
UY=[],
ej;

for(var i=0,l=bP.length;i<l;i++)
{
ej=bP[i]['sStatus']||bP[i].get("sStatus");
if(aC!=ej)
{
UY.push(bP[i]);
}
}
return UY
},
getUploadData:function()
{
var bP=this.getUploadList("complete"),
UY=[];
for(var i=0,l=bP.length;i<l;i++)
{
UY.push(bP[i].get()||bP[i]);
}
return UY
},




cXE:function(aH)
{
return!!this.bDl[this.bDU(aH)]
},

dtl:function(aH)
{
return({
RawinputPopupMail:"rawinput",
Base:"collection",
googledrive:"netdisk",
dropbox:"netdisk",
weiyun:"netdisk"
})[aH.get("sType")]||"control";
},
cWO:function(aH)
{
var bP=this.ox;
cR=this.bzy(aH);
for(var i=cR+1,l=bP.length;i<l;i++)
{
if(bP[i].get("sStatus")=="ready")
{
return bP[i]
}
}
},
bDU:function(aH)
{
return[aH.get("sType"),aH.get("sId")].join("_")
},
bzy:function(aH)
{
var cR=-1,
bP=this.ox;
for(var i=0,l=bP.length;i<l;i++)
{
if(bP[i].get("sId")==aH.get("sId"))
{
cR=i;
break;
}
}
return cR;
},

ZM:function(aH)
{
var cnC=this.cWO(aH);
if(cnC)
{
azB(cnC);
}
},

Ku:function(aH)
{


var cTm=this.cXE(aH);
if(!cTm)
{
this.bDl[this.bDU(aH)]=aH;
this.ox.push(aH);
return true;
}
},

cFO:function(akL)
{
var czv={};
czv.sStatus=akL.sStatus;
czv.sId=akL.sId;
czv.sType=akL.sType;
},
bYK:function(aH)
{
var cR=this.bzy(aH);

if(cR>-1)
{
delete this.bDl[this.bDU(aH)];
this.ox.splice(cR,1);
return true;
}
},

apN:function(aH)
{
var cR=this.bzy(aH);

if(cR>-1)
{
aH.set(
{
sStatus:"ready",
nPercent:0
}
);
this.ox=this.ox.concat(this.ox.splice(cR,1));
return true;
}
}
}
);

return hp;
};



function openNewWinEdit()
{
bOI("opener");
getTop().goNewWin(location.pathname+location.search+'&plusopener=1'+"&from_wm_newwin=true");
return false;
}






function initComposeForPage(mx,ar)
{
var aq=getTop();


goCompose.egk=(ar||{}).clearlistcache;

if(getPageId())
{
return;
}

if(!goCompose.aNA)
{
var aBU="";

goCompose.aNA=setTimeout(function(){

if(aq.QMEditor)
{
aBU=(aq.QMEditor.isInitialized)?"inited":"noInited";
}
else
{
aBU="noEditor";
}

aq.ossLog("delay","all","stat=nothing&locval=editorErr,"+aBU+","+mx);
},20*1000);
}

if(!aq.QMEditor&&!ar.nowait)
{


aq.loadJsFileToTop(["$js_path$com/kits/qmeditor/qqmail/release/editor181b91.js"]);

var cdR=arguments,
ao=this;

return setTimeout(
function()
{
cdR.callee.apply(ao,cdR);
},
50
);
}

if(!aq.QMFileUpload)
{
aq.loadJsFileToTop(["$js_path$com/kits/qmfileupload/js/qmfileupload181b8c.js"]);
}


arguments.callee.pageId=mx;
arguments.callee.pageConfig=ar;

var cdp={
"compose":cMX,
"group":dvj,
"groupsms":dcJ,
"card":dBH,
"voice":daR,
"postcard":dfr,
"qq":dbX,
"readmailGroup":dvn,
"note":dBE,
"noteFirstPage":diK,
"remind":duH,
"readmailConv":cWb,
"urlcreator":eZg,
"qzone":eZg,
"qfcompose":cSF
}[mx];
if(cdp)
{
cdp(mx,ar||{});


}

aq.addEvent(window,"unload",function()
{
aq.cancelDoSend();
aq.QMDialog("composeExitAlert","close");
}
);

aq.setKeepAlive(window);


if("1"==aq.gbBackGroundSend)
{
aq.loadJsFileToTop(["$js_path$backsend181b8c.js"]);
}

aq.loadJsFileToTop(["$js_path$composeresp181b8c.js"]);
aq.loadJsFileToTop(["$js_path$libcompose181b8c.js"]);


aq.osslogAjaxCompose(1);
if(goCompose.sIphoneUpImgKey=="")
{
goCompose.sIphoneUpImgKey=(new Date()).valueOf();
}
}

function gmJ(aP,cKu)
{
var bvQ=["self","attach"];
for(var n=0;n<bvQ.length;n++)
{
var bd=bvQ[n];
if(aP[bd]&&getTop().QMDialog("ftnupload_"+bd))
{
for(var i in aP[bd].moFile)
{
cKu.moFile[i]=aP[bd].moFile[i];
cKu.moFile[i].listType=bd;
}
cKu.mnUploaderCount+=aP[bd].mnUploaderCount||0;
}
}
}
function gxt()
{
var bvQ=["self","attach"];
for(var n=0;n<bvQ.length;n++)
{
try
{
getTop().QMDialog("ftnupload_"+bvQ[n]).close();
}
catch(e){}
}
}
function gcy(aP)
{
var aIn=0;
for(var i in aP)
{
aIn++
}
return aIn;
}
function fYX(aP)
{
var dRT=aP||{},
aq=getTop();
for(var i in dRT)
{
aq.removeSelf(aq.S("BigAttach_"+i,window));
}
};


































































































function aTK()
{
if(goCompose.aNA)
{
clearTimeout(goCompose.aNA);
goCompose.aNA=null;
}
}






function Qx(ar)
{
var xK={
"card":"card",
"voice":"voice"
}[getPageId()];

var chj={
"note":true
}[getPageId()];

function WE(dO,bLf)
{
var gK=aog();
var cnJ=gK.sendtime;
var cjj=gK.verifycode;
var ckD=gK.verifycode_cn;


if(cnJ&&dO!="keeptimer"
&&(!cjj||!cjj.value)
&&(!ckD||!ckD.value))
{
cnJ.value=0;
}

if(typeof(ar.onsend)=="function")
{
ar.onsend.call(this,ar);
}
else
{
if(ar.safemode
&&aog().action.indexOf("groupmail_send")==-1)
{
alert('\u60A8\u5F53\u524D\u6B63\u5728\u4F7F\u7528QQ\u90AE\u7BB1\u53EA\u8BFB\u6A21\u5F0F\uFF0C\u90AE\u4EF6\u80FD\u6B63\u5E38\u53D1\u9001\uFF0C\u4F46\u6240\u53D1\u9001\u7684\u90AE\u4EF6\u5C06\u4E0D\u80FD\u4FDD\u5B58\u5230"\u5DF2\u53D1\u9001"\u6587\u4EF6\u5939\u3002');
}
doProcess(ar.t||"",xK||"send",chj,bLf);
}

return false
};

function dkH()
{
goCompose.bWA=true;
if(typeof(ar.onsave)=="function")
{
ar.onsave.call(this,ar);
}
else
{
doProcess("savedraft",xK||"save",chj);
}
return false;
};
function initTimeSendDlg(ay,bPE,dEr)
{

var aq=getTop(),
bCq=ay.sendtimeyear,
cJM=ay.sendtimemonth,
cBr=ay.sendtimeday,
cVK=ay.sendtimehour,
cVM=ay.sendtimemin,
eCM=ay.confirmbtn||"\u53D1\u9001",
jm=ay.title||"\u5B9A\u65F6\u53D1\u9001",
dVj=aq.T([
'<div style="padding:20px 28px;text-align:left;">',
'<div style="_zoom:1;">$tip$<span id="sendTimeType"></span></div>',
'<div id="sendTimeContainer" style="margin:6px 0 8px -4px;font-family:Tahoma">\u52A0\u8F7D\u4E2D...</div>',
'<div class="clr"></div>',
'<div class="addrtitle" id="sendtimemsg" style="margin-top:10px;"></div>',
'</div>'
]);
aq.loadJsFile("$js_path$qmlunar181b8c.js",true);
aq.loadJsFile("$js_path$qmdatectrl181b91.js",true);
var eKZ=ay.timetips||"\u9009\u62E9\u5B9A\u65F6\u53D1\u9001\u7684\u65F6\u95F4\uFF1A",
aAe=null;
new aq.QMDialog({
sId:"timeSend",
sBodyHtml:dVj.replace({
tip:eKZ
}),
sFootHtml:aq.T([
'<input id="confirm" class="wd2 btn btn_true" type="button" value="$confirmBtn$" />',
'<input id="cancel"  class="wd2 btn btn_true" type="button" value="\u53D6\u6D88" />'
]).replace({
confirmBtn:eCM
}),
sTitle:jm,
nWidth:470,

onshow:function(){
this.S("cancel").focus();
},
onload:function(){
var cJ=this;
aq.addEvent(cJ.S("confirm"),"click",function()
{
var jH=Math.floor((aAe.get("solarDate")-aq.now())/(60*1000))

if(jH<0)
{
return aq.showError("\u60A8\u8BBE\u7F6E\u7684\u5B9A\u65F6\u65F6\u95F4\u5DF2\u7ECF\u8FC7\u671F");
}
if(jH<5)
{
return aq.showError("\u60A8\u8BBE\u7F6E\u7684\u5B9A\u65F6\u65F6\u95F4\u8DDD\u79BB\u60A8\u8981\u53D1\u9001\u7684\u65F6\u95F4\u592A\u8FD1\u4E86");
}

bPE&&bPE(cJ);
cJ.close();
});
aq.addEvent(this.S("cancel"),"click",function()
{
cJ.close();
});
},

onbeforeclose:function()
{
var cJ=this;
dEr&&dEr(cJ)
return true;
}

});

aq.waitFor(function()
{
return aq.Lunar&&aq.QMDateCtrl;
},
function(bh)
{
if(!bh)
{
aq.loadJsFile("$js_path$qmlunar181b8c.js",true);
aq.loadJsFile("$js_path$qmdatectrl181b91.js",true);
return;
}
if(!bCq.value)
{

cft(new Date(aq.now()+3600*1000));
}
var fB=aq.QMDialog("timeSend");
var bxH=fB&&fB.S("sendTimeType");
if(bxH&&aq.getLocale()=="zh_CN")
{
bxH.innerHTML=aq.T('(<input type="radio" name="dateType" id="solar_radio" checked/><label for="solar_radio">\u516C\u5386</label><input type="radio" name="dateType" id="lunar_radio"/><label for="lunar_radio">\u519C\u5386</label>)');
}

aq.E(bxH.getElementsByTagName("input"),function(bC){
var AC=bC.id=="lunar_radio";
bC.onclick=function(){
aAe.changeDateType(AC,"sameday");
};
});
var bLl=fB&&fB.S("sendTimeContainer");

if(bLl)
{
bLl.innerHTML="";
}
debug([bCq.value,cJM.value,cBr.value])
aAe=new aq.QMDateCtrl({
container:bLl,
type:aq.QMDateCtrl.LUNAR_LEAP_SUPPORT,
year:{current:bCq.value,end:parseInt(bCq.value)+2},
month:{current:cJM.value},
day:{current:cBr.value},
hour:{current:cVK.value},
minute:{current:cVM.value},
onchange:function(atA)
{
chh(atA);
}
});
chh(aAe);
}
);
return false;

function cft(mL)
{
bCq.value=mL.getFullYear();
cJM.value=mL.getMonth()+1;
cBr.value=mL.getDate();
cVK.value=mL.getHours();
cVM.value=mL.getMinutes();
}

function chh(atA)
{
var qB=atA.get("solarDate");
var fB=getTop().QMDialog("timeSend");
var aB=fB&&fB.S("sendtimemsg");
if(atA.get("isLunar"))
{
if(aB)
{
var eqb=getTop().TE('\u65E5\u671F\u7B49\u540C\u4E8E&nbsp;<span class="black bold">\u516C\u5386\u7684$year$\u5E74$month$\u6708$day$\u65E5</span>&nbsp;\uFF0C\u5C4A\u65F6\u4E8E&nbsp;<span class="black bold">$hour$:$@$if($minute$<10)$@$0$@$endif$@$$minute$</span>&nbsp;\u6295\u9012\u3002');
aB.innerHTML=eqb.replace({
year:qB.getFullYear(),
month:qB.getMonth()+1,
day:qB.getDate(),
hour:qB.getHours(),
minute:qB.getMinutes()
});
}
}
else
{
if(aB)
{
aB.innerHTML=getTop().T('\u672C\u90AE\u4EF6\u5C06\u5728&nbsp;<span class="black bold">$time$</span>&nbsp;\u6295\u9012\u5230\u5BF9\u65B9\u90AE\u7BB1\u3002').replace({
time:getTop().QMTimeLang.formatRefer(qB)
});
}

}
cft(qB);
};
}



function ces(ap,bLf,anX)
{
var aq=getTop();
anX=(typeof(anX)=="undefined"?0:anX);
if(!bLf&&!doProcessCheck("",xK||"send",anX,function(bCj)
{
ces(ap,false,bCj);
}))
{
return false;
}
var cmh=aog().sendtimetip;
initTimeSendDlg(
{
sendtimeyear:getInputObj("sendtimeyear"),
sendtimemonth:getInputObj("sendtimemonth"),
sendtimeday:getInputObj("sendtimeday"),
sendtimehour:getInputObj("sendtimehour"),
sendtimemin:getInputObj("sendtimemin"),
confirmbtn:"\u53D1\u9001",
title:"\u5B9A\u65F6\u53D1\u9001",
timetips:cmh&&cmh.value||"\u9009\u62E9\u5B9A\u65F6\u53D1\u9001\u7684\u65F6\u95F4\uFF1A"
},function(aP)
{
aP.S("confirm").setAttribute("selected","true");
},function(aP)
{
if(aP.S("confirm").getAttribute("selected")=="true")
{
getInputObj("sendtime").value=1;
setTimeout(function()
{
WE("keeptimer",true);
}
);
}
else
{
var bH=getPageEditor();
bH&&bH.focus();
}
return true;
});
return false;
};


function bIn(QA)
{
return function(po)
{
po.onclick=QA;
};
};

getTop().E(getTop().SN("sendbtn",window),bIn(WE));
getTop().E(getTop().SN("savebtn",window),bIn(dkH));
getTop().E(getTop().SN("timeSendbtn",window),bIn(ces));

var aq=getTop(),
aRW=aq.S("noletter",window);

if(aRW)
{
aRW.onclick=function()
{
var bH=getPageEditor(),
aaP=bH.getContentObj("QQMAILSTATIONERY");

if(bH.getContentType()=="html"&&aaP)
{
var aB=getTop().GelTags("includetail",bH.getEditWin().document)[0];
bH.setContent(aaP.innerHTML+(aB?aB.innerHTML:""));
bH.focus();
}
else
{
useStationery();
this.checked=false;
bH.focus();
}
};
}
var axU=aq.S("mobile_email",window);
if(axU)
{
var bJm=aq.goUserInfo.get('RealDefaulSender'),
aGb=ceT("phone","1"),
bDx;

if(aGb)
{
bDx=function()
{
if(axU.checked)
{
aq.confirmBox(
{
msg:aq.T([
'<div class="dialog_f_t">\u662F\u5426\u4E34\u65F6\u6539\u7528$email$\u6765\u53D1\u4FE1?</div>',
'<div class="dialog_f_d">\u5BF9\u65B9\u56DE\u4FE1\u5230\u6B64\u5730\u5740\uFF0C\u76F8\u5E94\u624B\u673A\u4E0A\u4F1A\u7ACB\u5373\u6536\u5230\u77ED\u4FE1\u63D0\u9192\u3002</div>'
]).replace({email:aGb}),
width:450,
onreturn:function(kI)
{
if(kI)
{
goCompose.oQmSender.setSenderSelected(aGb);
aq.showInfo(
aq.T("\u5C06\u4F7F\u7528$email$\u53D1\u4FE1\uFF0C\u6B64\u5730\u5740\u6536\u5230\u90AE\u4EF6\u4F1A\u63D0\u9192\u5230\u624B\u673A\u3002").replace(
{
email:aGb
}
)
);
aq.ossLog("delay","all","stat=nothing&locval=,,mobileemailclick,1");
}
else
{
axU.checked=false;
}
}
}
);
}
else
{
var bKb=(bJm==aGb)?ceT("phone","0"):bJm;
if(bKb)
{
goCompose.oQmSender.setSenderSelected(bKb);
aq.showInfo(aq.T("\u5C06\u4F7F\u7528$email$\u53D1\u4FE1\uFF0C\u907F\u514D\u6536\u5230\u624B\u673A\u53F7\u90AE\u7BB1\u7684\u77ED\u4FE1\u63D0\u9192\u3002").replace({email:bKb}));
aq.ossLog("delay","all","stat=nothing&locval=,,mobileemailclick,2");
}
else
{
aq.showInfo("\u60A8\u53EA\u62E5\u6709\u624B\u673A\u53F7\u90AE\u7BB1\u5E10\u53F7\uFF0C\u65E0\u6CD5\u6539\u7528\u5176\u4ED6\u5E10\u53F7\u5730\u5740\u6765\u53D6\u6D88\u63D0\u9192");
axU.checked=true;
}
}
}
}
else
{
bDx=function()
{
aq.ossLog("delay","all","stat=nothing&locval=,,mobileemailclick,0");
aq.confirmBox(
{
msg:[
'<div class="dialog_f_t">\u60A8\u9700\u8981\u5148\u6CE8\u518C\u624B\u673A\u53F7\u90AE\u7BB1\uFF0C\u624D\u80FD\u5F00\u542F\u6B64\u529F\u80FD\u3002</div>',
'<div class="dialog_f_d">\u624B\u673A\u53F7\u90AE\u7BB1\u53CA\u9644\u5C5E\u77ED\u4FE1\u63D0\u9192\u90FD\u662F\u514D\u8D39\u7684\u3002<br>\u5F00\u901A\u540E\u5728\u4E0B\u6B21\u5199\u4FE1\u65F6\u624D\u53EF\u4F7F\u7528\u63D0\u9192\u529F\u80FD\u3002</div>'
].join(""),
width:430,
confirmBtnTxt:"&nbsp;\u5F00\u901A\u624B\u673A\u53F7\u90AE\u7BB1&nbsp;",
cancelBtnTxt:"&nbsp;\u4E86\u89E3\u8BE6\u60C5&nbsp;",
neverBtnTxt:"\u5173\u95ED",
onload:function(){
this.S("cancel").onclick=function()
{
window.open("http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=8&&no=1000605");
}
},
onreturn:function(bh,Xi,bRN){
if(bh)
{
aq.goNewWin(aq.T("/cgi-bin/register?sid=$sid$&action=phonelist&t=phone_alias_reg1&vipfun=phone&loc=register,mail,phone,2").replace(
{
sid:aq.getSid()
}
),false,true);
}
axU.checked=false;
}
}
);
}
}

axU.onclick=bDx;
axU.checked=(bJm==aGb);
}
var alZ=getTop().S("secmailcode",window);
if(alZ)
{
alZ.onclick=function()
{
if(alZ.value)
{
alZ.value="";
alZ.checked=false;
getTop().show(getTop().S("encrypt_mail_tips",window),false);
}
else
{
var aNg=QMAddrInput.get("to",window)||QMAddrInput.get("bcc",window);
if(aNg&&aNg.hasAddr(goCompose.sUrlCreator))
{
aq.showError("\u53D1\u7ED9\u7F51\u9875\u751F\u6210\u52A9\u624B\u7684\u90AE\u4EF6\u4E0D\u652F\u6301\u52A0\u5BC6");
alZ.checked=false;
}
else if(aNg&&aNg.hasAddr(goCompose.sQzone))
{
aq.showError("\u53D1\u8868\u5230\u6211\u7684Qzone\u7684\u90AE\u4EF6\u4E0D\u652F\u6301\u52A0\u5BC6");
alZ.checked=false;
}
else
{
new aq.QMDialog(
{
sid:"encryptdlg",
sTitle:"\u90AE\u4EF6\u52A0\u5BC6",
sBodyHtml:aq.TE([
'<div style="font-size:12px; padding:20px; text-align:left; line-height:1.6;">',
'<p style="border-bottom:1px solid #E4E4E4; margin:0 0 15px; padding:0 0 15px;">\u8BBE\u7F6E\u90AE\u4EF6\u52A0\u5BC6\u4E4B\u540E\uFF0C\u6536\u4EF6\u4EBA\u9700\u8981\u89E3\u5BC6\u540E\u624D\u80FD\u67E5\u770B\u90AE\u4EF6\u5185\u5BB9\u3002<br/>\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u67E5\u770B<a href="http://service.mail.qq.com/cgi-bin/help?subtype=1&&no=1000822&&id=23" target="_blank">QQ\u90AE\u7BB1\u52A0\u5BC6\u90AE\u4EF6</a>\u3002</p>',
'<p style="margin:12px 0;"><label><span class="setMailCode">\u8F93\u5165\u5BC6\u7801: </span><input type="password" id="pw1" value="" style="width:220px;margin:0;"/></label></p>',
'<p style="margin:12px 0;"><label><span class="setMailCode">\u786E\u8BA4\u5BC6\u7801: </span><input type="password" id="pw2" value="" style="width:220px;margin:0;"/></label></p>',
'</div>',
'<div class="dialog_operate">',
'<input id="ok" type="button" value="\u786E\u5B9A" class="btn wd1">',
'<input id="cancel" type="button" value="\u53D6\u6D88" class="btn wd1">',
'</div>'
]).replace({}),

nWidth:400,
onclose:function()
{
if(!alZ.value)
{
alZ.checked=false;
}
},
onshow:function()
{
this.S("pw1").focus();
},
onload:function()
{
var cv=this;

cv.S("ok").onclick=function()
{
var bGk=cv.S("pw1"),
ctV=cv.S("pw2");

if(!bGk.value)
{
bGk.focus();
getTop().showError("\u8BF7\u8F93\u5165\u5BC6\u7801");
}
else if(!ctV.value)
{
ctV.focus();
getTop().showError("\u8BF7\u8F93\u5165\u5BC6\u7801");
}
else if(bGk.value!=ctV.value)
{
bGk.focus();
getTop().showError("\u5BC6\u7801\u4E0D\u4E00\u81F4\uFF0C\u8BF7\u91CD\u65B0\u786E\u8BA4");
}
else
{
alZ.value=bGk.value;
getTop().show(getTop().S("encrypt_mail_tips",window),true);
cv.close();
}
}
cv.S("cancel").onclick=function()
{
cv.close();
}

}
});
}
}
}
}

}

function ceT(eV,cf)
{
var ciT=getTop().goUserInfo.get('RealDefaultAllMail');
for(var i in ciT)
{
var cie=ciT[i];
if(cie[eV]==cf)
{
return cie.email;
}
}

}






function eZg(mx,ar)
{
var aq=getTop();

var om=function()
{
var bH=getPageEditor(),
Bb=aEJ(ar,true);

dmY(ar);

if(ar.bigattachs_auto.length)
{
addExistAttach_Big({bigattach:ar.bigattachs_auto});
getTop().show(getTop().S("attachContainer",getTop().getMainWin()),true);
}

Qx(ar);
QMAttach.initAttBigSize(ar);

QMAttach.initFileUpload(ar);

getPageEditor().rmNetDiskAction();

aiS(getTop().goUserInfo.get('RealDefaultEditor'));

aq.show(aq.S("editor_toolbar_btn_container",window),
bH.isSupportToolBar());

!ar.pluscontent&&!(Bb||{}).isconfirm&&loadValue(true);

setNeedCloseConform(true);
setEditedAttach(false);
Oa();
typeof(ar.onload)=="function"&&ar.onload(agg);
};

var amX=aq.QMEditor.CONST.FUNCLIST.COMPOSE;
amX["tbExtern"]="Photo ScreenSnap Mo";

var bH=aq.QMEditor.createEditor(
{
editorId:mx,
editorAreaWin:window,
funclist:amX,
photoCGI:aq.getPhotoCGI(),
customtags:ahr(),
isOpenEditBar:true,

funcConfig:{Photo:{album:true,attach:true,iPhoneUpload:true}},

nAutoRisizeMinHeight:319,


onload:om,
onfocus:agg,
onmousedown:Yi,
onclick:oClipImg.checkUpload,
onbeforesaverange:bqL,
onkeydown:QH,
onkeyup:czq,
onputcontent:aQa,
onchangecontenttype:aPr,
onshowinstallactive:showInstallActiveXDialog,
onpreview:bof
}
).initialize(
ar.source||outputDataLoading(),
false,
aq.S("QMEditorArea",window).getAttribute("tIndex"),
aq.S("QMEditorArea",window).getAttribute("accKey")
);

getTop().addEvent(window,"unload",function()
{
QMAttach.dragOverEvent(true);
}
);

}






function cSF(mx,ar)
{
var aq=getTop(),
om=function()
{
var bH=getPageEditor();

ar.oMailInfo&&setComposeData(ar.oMailInfo);

Qx(ar);

aiS(true);

setNeedCloseConform(true);
setEditedAttach(false);
autoSave(false);
Oa();

S("subject").focus();
};

aq.QMEditor.createEditor(
{
editorId:mx,
editorAreaWin:window,
funclist:getTop().QMEditor.CONST.FUNCLIST.QF_COMPOSE,
photoCGI:getTop().getPhotoCGI(),
customtags:ahr(),

nAutoRisizeMinHeight:319,


onload:om,
onfocus:agg,
onmousedown:Yi,
onbeforesaverange:bqL,
onkeydown:QH,
onpaste:aNj,
onputcontent:aQa,
onchangecontenttype:aPr,
onchangebgmusic:ccS,
onshowinstallactive:showInstallActiveXDialog,
onpreview:bof,
onuploademl:uploadComposeEml
}
).initialize(
ar.source,
false,
S("QMEditorArea",window).getAttribute("tIndex")||3,
aq.S("QMEditorArea",window).getAttribute("accKey")
);


}




function dmY(ay)
{
var aq=getTop(),
EM=aq.S("subject",window);

if(ay.initsubject&&EM)
{
EM.value=ay.initsubject;
}
}





function cMX(mx,ar)
{
var arR=getTop().GelTags("player",getTop().S("source",window)),
aq=getTop(),
XX={};

if(arR&&arR.length>0
&&arR[0].id.toLowerCase()=="cmd:bgmusic")
{
var jN=arR[0];
XX.url=jN.getAttribute("url");
XX.song=decodeURIComponent(jN.getAttribute("song"));
XX.singer=decodeURIComponent(jN.getAttribute("singer"));
}

var om=function()
{
var bH=getPageEditor(),
Bb=aZL(ar),
cxD=false;


if(Bb)
{
cxD=true;
}
else
{
Bb=aEJ(ar,true);
}

dmY(ar);

if(ar.bigattachs_auto.length)
{
addExistAttach_Big({bigattach:ar.bigattachs_auto});
getTop().show(getTop().S("attachContainer",getTop().getMainWin()),true);
}

if(XX.song||XX.url)
{
bH.setBgMusicInfo(XX.song,
XX.singer,XX.url
);
}

Qx(ar);
QMAttach.initAttBigSize(ar);

QMAttach.initFileUpload(ar);

getPageEditor().rmNetDiskAction();
goCompose.oQmSender=new aq.QMSender(
{
oWin:window,
nCurFolderId:ar.folderid,
sCurSaveFrom:ar.saveFrom||aq.goUserInfo.get('RealDefaulSender'),
sWidth:180,
bShowNode:"parentNode",
sVerAlign:"top",
bDraft:ar.subtmpl=="draft",
bFromReload:cxD,
onclickItemCallBack:function(av)
{
getTop().S("mobile_email",window)&&(getTop().S("mobile_email",window).checked=(av.phone=="1"));
}
}
);


var lS=ar.saveFrom||aq.goUserInfo.get('RealDefaulSender');
var adK=aq.S("source",window)&&aq.S("source",window).innerHTML;
var asT=null;


if(asT=(adK.match(/<sign signid="(.*?)" nreadytime="(.*?)">/)||adK.match(/<sign signid="(.*?)">/)||(location.getParams()["s"]=="background"&&location.getParams()["recoverCompose"]=="true")))
{







}
else
{

if(ar.subtmpl!="draft"&&!cxD)
{
if(aq.oAcctEmail&&aq.oAcctEmail[lS])
{
lS=aq.oAcctEmail[lS];
}
goCompose.oQmSender.setSenderSelected(lS);
}
}



aof();
aiS(getTop().goUserInfo.get('RealDefaultEditor'));

aq.show(aq.S("editor_toolbar_btn_container",window),
bH.isSupportToolBar());

!ar.pluscontent&&!(Bb||{}).isconfirm&&loadValue(true);

setNeedCloseConform(true);
setEditedAttach(false);
autoSave(false);
Oa();
setMultiSignatureSelect();
setOtherComposeOptionEvent();
typeof(ar.onload)=="function"&&ar.onload(agg);





aq.gbIsMac&&!aq.detectActiveX(0,2)&&aq.requestShowTip("QMEditorToolBarPlusArea",32,window);
if(ar.encryptmail=="false"&&ar.xqqstyle=="800"&&ar.subtmpl=="forward")
{
setTimeout(function()
{
getTop().fireMouseEvent(getTop().S("otherComposeOptionBtn",window),"click");
getTop().requestShowTip("savesendbox",78,window);
},
1000
);
}
};

function aJs()
{
aq.waitFor(
function()
{
return!ar.asyncGetContent||getTop().goAsyncContent;
},
function(bh)
{
om();
},500,10000
);
}
var bH=aq.QMEditor.createEditor(
{
editorId:mx,
editorAreaWin:window,
funclist:aq.QMEditor.CONST.FUNCLIST.COMPOSE,
photoCGI:aq.getPhotoCGI(),
customtags:ahr(),
isOpenEditBar:true,

funcConfig:{Photo:{album:true,attach:true,iPhoneUpload:true}},

nAutoRisizeMinHeight:319,
isNoEditScroll:getTop().location.href.indexOf("from_wm_newwin")==-1?false:true,

onload:ajr(aJs),
onfocus:agg,
onmousedown:Yi,
onclick:oClipImg.checkUpload,
onbeforesaverange:bqL,
onkeydown:QH,
onkeyup:czq,
onpaste:function()
{
aNj.apply(this,arguments);
oClipImg.analyse.apply(this,arguments);
},
onputcontent:aQa,
onchangecontenttype:aPr,
onchangebgmusic:ccS,
onshowinstallactive:showInstallActiveXDialog,
onpreview:bof
}
).initialize(
ar.source||outputDataLoading(),
false,
aq.S("QMEditorArea",window).getAttribute("tIndex"),
aq.S("QMEditorArea",window).getAttribute("accKey")
);



deJ();

getTop().initAddress(showQuickAddr);

getTop().addEvent(window,"unload",function()
{
QMAttach.dragOverEvent(true);

}
);
}







function dvj(mx,ar)
{
var aq=getTop(),
om=function()
{
var Bb=aZL(ar)
||aEJ(ar,true);

QMAttach.initHideAttach(ar);
QMAttach.initFileUpload(ar);

getPageEditor().rmNetDiskAction();

Qx(ar);
aiS(getTop().goUserInfo.get('RealDefaultEditor'));

getTop().show(getTop().S("editor_toolbar_btn_container",window),getPageEditor().isSupportToolBar());

if(!(Bb||{}).isconfirm)
{
loadValue(true);
}
setNeedCloseConform(true);
setEditedAttach(false);

Oa();

enableAutoSave();
autoSave(false);

typeof(ar.onload)=="function"&&ar.onload(agg);



};

function aJs()
{
aq.waitFor(
function()
{
return!ar.asyncGetContent||aq.goAsyncContent;
},
function(bh)
{
om();
},500,10000
);
}

aq.QMEditor.createEditor({
editorId:mx,
editorAreaWin:window,
funclist:aq.QMEditor.CONST.FUNCLIST.GROUP,
photoCGI:aq.getPhotoCGI(),

photoConfig:{
widthlimit:1024,
heightlimit:1024,
sizelimit:1
},
customtags:ahr(),
isOpenEditBar:true,


nAutoRisizeMinHeight:319,
funcConfig:{Photo:{align:"left",url:true,album:true,attach:true,iPhoneUpload:true}},


onload:ajr(aJs),
onfocus:agg,
onmousedown:Yi,
onbeforesaverange:bqL,
onkeydown:QH,
onpaste:aNj,
onputcontent:aQa,
onshowinstallactive:showInstallActiveXDialog,
onpreview:bof
}).initialize(
ar.source||outputDataLoading(),
false,
aq.S("QMEditorArea",window).getAttribute("tIndex"),
aq.S("QMEditorArea",window).getAttribute("accKey")
);


deJ();

aq.addEvent(window,"unload",function()
{
QMAttach.dragOverEvent(true);
}
);
}






function dcJ(mx,ar)
{
var fI=getTop(),
IS=fI.S("QMEditorArea",window);
if(!IS)
return;
fI.QMEditor.createEditor({
editorId:mx,
editorAreaWin:window,
height:fI.getStyle(IS,"height"),
funclist:fI.QMEditor.CONST.FUNCLIST.GROUP,
photoCGI:fI.getPhotoCGI(),
photoConfig:{
widthlimit:1024,
heightlimit:1024,
sizelimit:1
},
customtags:ahr(),

onload:ajr(om),
onfocus:dhm,
onblur:dgf,
onmousedown:Yi,
onkeydown:aSR,
onpaste:aSR,

onshowinstallactive:showInstallActiveXDialog
}).initialize(ar.source||outputDataLoading(),false,5);


var bH=null,
fyy=fI.S('editorToolContainer',window),
bgz,aVO,bnD,
dum=62,fnS=62,
mJ,jT,fjJ=+IS.clientHeight,
vO;


function om()
{
Qx(ar);

QMAttach.initHideAttach(ar);
QMAttach.initFileUpload(ar);

getPageEditor().rmNetDiskAction();

aiS(false);

fI.show(fI.S("editor_toolbar_btn_container",window),getPageEditor().isSupportToolBar());



(bH=getPageEditor()).setContent('');
bgz=IS.getElementsByTagName('iframe')[0];
aVO=bgz.contentWindow;
bnD=aVO.document;

mJ=+bnD[fI.gbIsIE?'body':'documentElement'].scrollHeight;
jT=+IS.getAttribute('maxHeight');
IS.style.height='';
fI.show(fI.S('smsInputHead',window),true);

fI.addEvent(bnD.body,'click',function(ap)
{
aSR(ap);
});



};

function dhm(ap)
{

mJ=dum;
aSR(ap);
}

function dgf(ap)
{
return;
}

function aSR(ap)
{

if(ap&&ap.ctrlKey&&(ap.keyCode==10||ap.keyCode==13))
{
QH(ap);
return;
}


setTimeout(function(){

if(!fI.gbIsIE&&ap.keyCode==8)
{
bgz.style.height=mJ+'px';
}
var bhS=aVO.document[fI.gbIsIE?'body':'documentElement'].scrollHeight;
aVO.document.body.style.overflowY=(bhS>jT?'auto':'hidden');
bgz.style.height=(bhS>jT?jT:
(bhS<mJ?mJ:bhS))+'px';
},0);
}



window.ajustEditor=aSR;


var cke=fI.S('quickEditorContainer',window),
cmx=fI.S('fullModeLink',window),
cdZ=fI.S('foldLink',window),
aRn=fI.S('expandLink',window);
if(cmx&&cdZ&&aRn)
{
aRn.onclick=function()
{
YL(cke,true,function(){
fI.show(aRn,false);
var NQ=new Date();
NQ.setTime(NQ.getTime()+(300*24*3600*1000));
fI.setUserCookie('QUICK_EDITOR_FOLD',1,NQ);
});

}
cdZ.onclick=function()
{
YL(cke,false,function(){
fI.show(aRn,true);
var NQ=new Date();
NQ.setTime(NQ.getTime()+(300*24*3600*1000));
fI.setUserCookie('QUICK_EDITOR_FOLD',0,NQ);
});
}
cmx.onclick=function()
{
if(!bH)
return;
var	bFU=bH.getContent().toLowerCase(),
bEa=bH.getContent(true),
aUk=fI.trim(bEa.replace(/&nbsp;/ig,'')),
ze=aog(),
cVD=fI.S('filecell',window),
cZt=fI.S('BigAttach',window);
if(cVD.innerHTML.length>10||cZt.innerHTML.length>10||ze.mailtype.value=='vote')
{
fI.confirmBox(
{
msg:[
'<div class="dialog_f_t">\u5207\u6362\u5230\u5B8C\u6574\u683C\u5F0F\u4F1A\u4E22\u5931\u9644\u4EF6\u548C\u6295\u7968\u6570\u636E\u3002</div>',
'<div class="dialog_f_d" style="font-size:14px;">\u60A8\u786E\u5B9A\u7EE7\u7EED\u5207\u6362\uFF1F</div>'
].join(""),
width:430,
onreturn:function(kI)
{
if(kI)
{

chH();
}
}
}
);
}
else
{
chH();
}
function chH()
{
if(aUk)
{
bOI();
}
ze.action='/cgi-bin/grouplist1?sid='+getTop().getSid();
ze.target='mainFrame';
ze.t.value='compose_group';
ze.s.value='';
ze.submit();
}
};
}

function YL(aw,aiP,gP)
{
var lz=getTop().qmAnimation;
lz[aiP?'expand':'fold'](aw,
{
durlimit:300,
type:'wait',
speed:'fast',
oncomplete:function()
{
gP();
fI.show(aw,aiP);
}
});
}

getTop().addEvent(window,"unload",function()
{
QMAttach.dragOverEvent(true);
}
);
}






function dBH(mx,ar)
{
var om=function()
{
aZL(ar)||aEJ(ar,true,1);
Qx(ar);
aof();
aiS(getTop().goUserInfo.get('RealDefaultEditor'));

getTop().show(getTop().S("editor_toolbar_btn_container",window),getPageEditor().isSupportToolBar());
getTop().S("sendmailname",window).value=getTop().goUserInfo.get('RealDefaulSender');
Oa();
typeof(ar.onload)=="function"&&ar.onload(agg);
};
getTop().QMEditor.createEditor(
{
editorId:mx,
editorAreaWin:window,
funclist:getTop().QMEditor.CONST.FUNCLIST.MO,
customtags:ahr(),

onmousedown:Yi,
onload:ajr(om),
onkeydown:QH
}
).initialize(ar.source||outputDataLoading(),false,3);

getTop().initAddress(showQuickAddr);
}




function initCardListPage(ar,drA)
{
var aq=getTop();

aq.extend(window,drA);

initComposeForPage.pageId="card";
Qx(ar);
aof();
try{
aq.S("sendmailname",window).value=aq.goUserInfo.get('RealDefaulSender');
}catch(e)
{
debug(["getDefaultSender error:",e.message]);
}
}






function daR(mx,ar)
{

if(!getTop().S("QMEditorArea",window))
{
Qx(ar);

Oa();

aof();
setNeedCloseConform(true);
setEditedAttach(false);

typeof(ar.onload)=="function"&&ar.onload(agg);

try
{

getTop().S("sendmailname",window).value=getTop().goUserInfo.get('RealDefaulSender');
}
catch(e)
{
debug(e.message);
}

getTop().initAddress(showQuickAddr);
}

var om=function()
{
var aq=getTop();
aEJ(ar,true);
Qx(ar);






goCompose.oQmSender=new aq.QMSender(
{
nCurFolderId:"",
sCurSaveFrom:"",
sWidth:210,
bShowNode:"parentNode"
}
);

Oa();

aof();
setNeedCloseConform(true);

typeof(ar.onload)=="function"&&ar.onload(agg);
};

getTop().QMEditor.createEditor(
{
editorId:mx,
editorAreaWin:window,
funclist:getTop().QMEditor.CONST.FUNCLIST.MO,
customtags:ahr(),

onload:ajr(om),
onkeydown:QH
}
).initialize(ar.source,false,3);

aZL(ar);
}






function dfr(mx,ar)
{
ajr(function()
{
aZL(ar);
Qx(ar);

Oa();
aof();
getTop().S("sendmailname",window).value=getTop().goUserInfo.get('RealDefaulSender');

setNeedCloseConform(true);
})();
getTop().initAddress(showQuickAddr);
}






function dbX(mx,ar)
{
var om=function()
{
Qx(ar);
QMAttach.initAttBigSize(ar);

QMAttach.initFileUpload(ar);

getPageEditor().rmNetDiskAction();

aEJ(ar,true,2);
aof();
Oa();

if(typeof(ar.onload)=="function")
{
ar.onload();
}
};

getTop().QMEditor.createEditor(
{
editorId:mx,
editorAreaWin:window,
style:"border:none;icon:big;",
funclist:{tbExtern:"Mo Photo"},
photoCGI:getTop().getPhotoCGI(),
customtags:ahr(),

onload:ajr(om),
onfocus:agg,
onmousedown:Yi,
onbeforesaverange:bqL,
onkeydown:QH,
onputcontent:aQa
}
).initialize(ar.source||outputDataLoading(),false,5);
}






function dvn(mx,ar)
{
var om=function()
{
this.setContent(getTop().QMEditor.getBreakLine(1));
Oa();

if(typeof(ar.onload)=="function")
{
ar.onload();
}
aTK();
focusPageEditor(0);
};

getTop().QMEditor.createEditor(
{
editorId:mx,
editorAreaWin:window,
funclist:{tbExtern:"Mo"},
customtags:ahr(),

onmousedown:Yi,
onload:om,
onkeydown:QH
}
).initialize(ar.source,false);
}






function diK(mx,ar)
{
getTop().QMEditor.createEditor({
editorId:mx,
editorAreaWin:window,
height:ar.height||getTop().getStyle(getTop().S("QMEditorArea",window),"height"),

isNoEditScroll:true,

onmousedown:Yi,
onkeydown:QH,
onpaste:function()
{
callBack.call(this,ar.onpaste);
},
onfocus:function()
{
if(this.getContent(true)==getNoteFirstPageSource(true,ar.sDefaultText))
{
this.setContent(getTop().QMEditor.getBreakLine());
this.focus(0);
}
},
onblur:function()
{
var ci=this.getContent().toLowerCase();
if(!ci||ci==getTop().QMEditor.getBreakLine().toLowerCase())
{
this.setContent(getNoteFirstPageSource(false,ar.sDefaultText));
}
},
onload:function()
{
typeof(ar.onload)=="function"&&ar.onload(agg);
aTK();
}
}).initialize(
getNoteFirstPageSource(false,ar.sDefaultText),
false,
false,
getTop().S("QMEditorArea",window).getAttribute("accKey")
);
}






function dBE(mx,ar)
{
var fI=getTop();
var om=function()
{
Qx(ar);
if(ar.isPaste)
{
getPageEditor().setContent("");
getPageEditor().paste();
}
else if(ar.isReadCache)
{
var cjS=getTop().getGlobalVarValue("NOTE_CONTENT_CACHE");
if(cjS)
{
getPageEditor().setContent(cjS);
}
}
else if(ar.asyncGetContent||fI.goAsyncContent)
{
var EM=fI.S("subject",window);
if(EM)
{
EM.value=fI.goAsyncContent.subject;
EM.focus();
}
getPageEditor().setContent(fI.goAsyncContent.content);
}
else
{
getPageEditor()
.setContent(filterSourceContent(getTop().S("source",window).innerHTML)
||getTop().QMEditor.getBreakLine()
);
}

aiS(getTop().goUserInfo.get('RealDefaultEditor'));
getTop().show(getTop().S("editor_toolbar_btn_container",window),getPageEditor().isSupportToolBar());

loadValue(true);
setNeedCloseConform(true);
autoSave(false);

Oa();
aTK();
typeof(ar.onload)=="function"&&ar.onload(agg);
};

function aJs()
{
getTop().waitFor(
function()
{
return!ar.asyncGetContent||getTop().goAsyncContent
},
function(bh)
{
om();
},500,10000
);
}

getTop().QMEditor.createEditor({
editorId:mx,
editorAreaWin:window,
funclist:getTop().QMEditor.CONST.FUNCLIST.NOTE,
photoCGI:getTop().getPhotoCGI(),

nAutoRisizeMinHeight:319,
funcConfig:{Photo:{align:"left",url:true,album:true,attach:true,iPhoneUpload:true}},


onload:aJs,
onmousedown:Yi,
onkeydown:QH,
onpaste:aNj,
onchangecontenttype:aPr,
onshowinstallactive:showInstallActiveXDialog
}).initialize(
ar.source||outputDataLoading(),
false,
getTop().S("QMEditorArea",window).getAttribute("tIndex"),
getTop().S("QMEditorArea",window).getAttribute("accKey")
);


}


function cWb(mx,ar)
{
var om=function()
{

aiS(getTop().goUserInfo.get('RealDefaultEditor'));
getTop().show(getTop().S("editor_toolbar_btn_container",window),getPageEditor().isSupportToolBar());

loadValue(true);
setNeedCloseConform(true);


Oa();
aTK();
typeof(ar.onload)=="function"&&ar.onload(agg);

focusPageEditor(0);
};

getTop().QMEditor.createEditor({
editorId:mx,
editorAreaWin:window,
funclist:getTop().QMEditor.CONST.FUNCLIST.NOTE,
photoCGI:getTop().getPhotoCGI(),

nMinHeight:319,


onload:om,
onmousedown:Yi,
onkeydown:QH,
onpaste:aNj,
onchangecontenttype:aPr,
onshowinstallactive:showInstallActiveXDialog
}).initialize(
"",
false,
getTop().S("QMEditorArea",window).getAttribute("tIndex"),
getTop().S("QMEditorArea",window).getAttribute("accKey")
);


}




function duH(mx,ar)
{
ajr(
function()
{
Qx(ar);
Oa();
}
)();
getTop().initAddress(showQuickAddr);
}







function ahr()
{
return["sign","includetail"];
}






function ajr(ea)
{
return function()
{
aTK();

getTop().goUserInfo.deferget('RealDefaultEditor',ea);














};
}





function getPageId()
{
return initComposeForPage.pageId;
}



function getPageConfig()
{
return initComposeForPage.pageConfig;
}





function getPageEditor()
{
return getTop().QMEditor&&getTop().QMEditor.getEditor(getPageId());
}








function getInputObj(aR,vp,aIS)
{
var gK=vp||aog();
if(!gK)
{
return null;
}
var gj=gK[aR];
if(!gj)
{
getTop().insertHTML(gK,"afterBegin",
getTop().T('<input name="$name$" type="hidden" $disabled$/>').replace({
name:aR,
disabled:aIS?"disabled":""
})
);
gj=gK[aR];
}
return gj;
}

function attachInsertImage(bz)
{
var bH=getPageEditor();
if(bH.getContentType()=="text")
{
getTop().confirmBox(
{
msg:"\u65E0\u6CD5\u6DFB\u52A0\u56FE\u7247\u5230\u7EAF\u6587\u672C\uFF0C\u60A8\u662F\u5426\u6539\u7528\u5BCC\u6587\u672C\u7F16\u8F91\uFF1F",
title:"\u63D0\u793A",
onreturn:function(bh)
{
if(bh)
{
bH.changeContentType("html");
getTop().S("contenttype",window).checked=false;
setTimeout(function()
{
bH.insertImage(bz);
},100);
}
}
});
}
else
{
getPageEditor().insertImage(bz);
}
return false;
}






function focusPageEditor(ek,aM)
{
var bH=getPageEditor();
if(bH)
{
bH.resizeNoScrollEditor();
bH.focus(ek||0,bH.getContentObj(aM||"QQMAILSTATIONERY"));
}
}





function changeContentType(bmW)
{
var aq=getTop();
if(!getPageEditor().changeContentType(bmW.checked?"text":"html"))
{
bmW.checked=!bmW.checked;
}
else
{
aq.show(aq.S("signSelContainer",window),!bmW.checked);
}
}




function aPr()
{
var vx=this.getContentType()!="html",
aq=getTop();
if(vx)
{
(aq.S("noletter",window)||{}).checked=false;
getPageEditor().setBgMusicInfo();
}
aq.S("contenttype",window).checked=vx;









aq.show(aq.S("QMEditorToolBarPlusArea",window),!vx);
aq.show(aq.S("editor_toolbar_btn_container",window),!vx);
!vx&&bqL();
}






function outputDataLoading(bvt)
{
return getTop().T(['<div class="$className$" style="$height$font-size:12px;color:gray;$padding$">\u6570\u636E\u52A0\u8F7D\u4E2D...</div>'])
.replace({
className:bvt?"QMEditorBase":"",
padding:bvt?"padding:5px;":"",
height:bvt?"height:100%;":""
});
}






function outputToolBarControlBtn(aM)
{
return getTop().T([
'<span class="editor_btn" style="margin-right:0;">',
'<a id="$id$"  style="display:none;" unselectable="on" onmousedown="return false;" class="editor_btn_text qmEditorTxtStyle">',

'<font class="editor_netdisk_txtmini">\u6587\u5B57</font>\u683C\u5F0F<span>&#8593;</span><span style="display:none;" >&#8595;</span>',
'</a>',
'</span>'])
.replace({
id:aM||"editor_toolbar_btn_container"


});
}






function filterSourceContent(bpu)
{
return getTop().filteScript(bpu.replace(
/<div\s.*?\'?\"?QQMailBgMusicInfo\'?\"?.*?>.*?<\/div>/ig,""
).replace(/<player .*?><\/player>/ig,"")
.replace(/(^\s+)|(\s+$)/ig,"")
.replace(/.qmbox\s/ig,""));

}

function dXI(dRm)
{
var bH=getPageEditor(),
aq=getTop(),
dRJ=function(dV)
{
var bP=[];
aq.E(dV,function(bw)
{
bP.push(
{
sType:"weiyun",
sLink:bw.furl,
sName:bw.fname,
sFileSize:bw.fsize,
sIconUrl:aq.getIconByExt(bw.fname.split(".").pop())
}
);
});
return bP;
};


window.weiyunfileonload=function(bf)
{
if(bf&&(bf.ret==0))
{
var Tt=getTop().S("subject",window);
if(Tt&&!Tt.value)
{
if(bf.data.length>1)
{
Tt.value=
['"',getTop().htmlDecode(bf.data[0].fname),'"',
"\u7B49",bf.data.length,"\u4E2A\u6587\u4EF6"].join("");

}
else
{
Tt.value=getTop().htmlDecode(bf.data[0].fname);
}
}

getTop().E(bf.data,function(bw)
{
bw.fname=getTop().htmlDecode(bw.fname);
});
bH.insertNetDiskFile(dRJ(bf.data),function()
{

});
}
else
{
getTop().showError("\u5FAE\u4E91\u6587\u4EF6\u52A0\u8F7D\u5931\u8D25");
}
}
var aY=location.protocol+"//";
aY+=(location.protocol=="https:")?"s":"webcgi";
aY+=".weiyun.qq.com/qmail.fcg?cmd=1&callback=weiyunfileonload&key="+dRm;
getTop().loadJsFile(aY,true,document,null,{charset:"gb18030"});
}








function aEJ(ar,dzP,dhx)
{
if(dzP&&ar.subtmpl!="draft"&&ar.subtmpl!="background")
{
cfi();
}

var adK=getTop().S("source",window)&&getTop().S("source",window).innerHTML,
cfN=getTop().goUserInfo.get('getRealUserSignature')?(getTop().goUserInfo.get('getRealUserSignature'))(ar.folderid,ar.saveFrom):null,
ccT=ar.subtmpl=="draft"||ar.subtmpl=="content"||ar.subtmpl=="background"||ar.subtmpl==="from_star_list",
bX=[],
bH=getPageEditor();
if(!ccT)
{


var cRc=location.getParams()["weiyunfid"];
if(cRc)
{

dXI(cRc);
}

if(ar.pluscontent)
{
bX.push(ar.pluscontent,getTop().QMEditor.getBreakLine(1));
}
else
{
bX.push(getTop().QMEditor.getBreakLine(
dhx||(getTop().filteSignatureTag(cfN)?2:1),
{
family:getTop().goUserInfo.get("DEF_FONT_FAMILY"),
size:getTop().goUserInfo.get("DEF_FONT_SIZE"),
color:getTop().goUserInfo.get("DEF_FONT_COLOR")
}
));
}

bX.push(cfN);
}


if(!ar.isNoInclude&&adK&&(ar.subtmpl=="draft"||ar.subtmpl=="background"||ar.subtmpl==="from_star_list"))
{

bX.push(getTop().filteSignatureTag(adK,"2LOWCASE"));
}

if(!ccT&&(getPageId()=="compose"||getPageId()=="qq"))
{
bX=[getTop().goUserInfo.get("RealUserDefaultStationeryHeader"),bX.join(""),
getTop().goUserInfo.get("RealUserDefaultStationeryBottom")];

if(!!getTop().goUserInfo.get("RealUserDefaultStationeryHeader"))
{
getTop().requestShowTip("editor_toolbar_btn_container","45",window);
}
}

if(!ar.isNoInclude&&adK&&ar.subtmpl!="draft"&&ar.subtmpl!="background"&&ar.subtmpl!=="from_star_list")
{
adK=filterSourceContent(getTop().filteSignatureTag(adK));
if(adK)
{
bX.push(["<div><includetail>",adK,
"</includetail></div>"].join(""));
}
}


bH.setContent(bX=filterSourceContent(bX.join("")));









}




function Oa(my)
{
getTop().addEvent(document,"keydown",QH,my);
getTop().addEvent(document,"keyup",czq,my);
}




function aof()
{
var bT=getTop().S("savesendbox",window);
if(bT)
{
try
{
bT.checked=!getTop().goUserInfo.get('RealDefaultSaveSendbox');
}
catch(bj)
{
bT.checked=true;
}
if(!bT.checked)
{
bT.onclick=function()
{
getTop().show("auto_save_span",bT.checked,window);
var ddI=getTop().S("auto_save",window);
if(ddI)
{
!bT.checked&&(ddI.checked=false);
}
};
}
}
}






function aiS(gI)
{
gI=gI==null?true:gI;
getPageEditor().showToolBar(gI);

var bcY=getTop().S("editor_toolbar_btn_container",window);
if(!bcY)
{
return false;
}

var OH=getTop().GelTags("span",bcY);

getTop().show(OH[0],gI);
getTop().show(OH[1],!gI);

var tI=arguments.callee;
bcY.onclick=function()
{
tI(!gI);
return false;
};
}




function ccS()
{
var aq=getTop();
var ayX=aq.S("editor_bgmusic_container",window);
if(!ayX)
{
return;
}

if(ayX.getAttribute("inited")!="true")
{
ayX.innerHTML=aq.T([
'<div></div>',
'<div id="bg_music_listen" style="display:none;margin:4px 0 4px 0;">',
'<div id="mp3player_msg" ></div>',
'<div id="mp3player_container" style="display:none;" >\u64AD\u653E\u5668\u52A0\u8F7D\u4E2D...</div>',
'</div>']);
ayX.setAttribute("inited","true");
}

var bE=this.getBgMusicInfo();
aq.show(ayX,bE);
if(!bE)
{
return;
}

ayX.firstChild.innerHTML=aq.T([
'<span style="word-break:break-all;"><span class="graytext">\u80CC\u666F\u97F3\u4E50\uFF1A</span>$bgmusic$</span>',
'<a style="margin:0 5px 0 10px;" onclick="',
'if ( confirm( \x27\u60A8\u786E\u8BA4\u5220\u9664\u8BE5\u80CC\u666F\u97F3\u4E50\uFF1F\x27 ) ) {','getTop().audioStop();',
'getPageEditor().setBgMusicInfo();','}','">\u5220\u9664</a>',
'<a onclick="',
'tryListenBgMusic( this );',
'" >\u8BD5\u542C</a>']).replace({
bgmusic:bE.song?aq.T("$song$($singer$)").replace({
song:bE.song,
singer:bE.singer
}):aq.htmlEncode(bE.url)
});


aq.audioStop();
aq.show(aq.S("mp3player_container",window),false);
aq.show(aq.S("mp3player_msg",window),true);

function cfm(aLI)
{
tryListenBgMusic(ayX.firstChild.lastChild,bE.song,
bE.singer,aLI
);
}

if(bE.song)
{
getTop().S("mp3player_msg",window).innerHTML="\u6B4C\u66F2\u52A0\u8F7D\u4E2D...\u8BF7\u7A0D\u5019";
getTop().getMusicUrl(bE.song,bE.singer,function(kz,lA,bz)
{
if(!getPageEditor())
{
return;
}
if(bz)
{
getPageEditor().setBgMusicInfo(kz,lA,bz);
cfm("open");
}
else
{
getTop().S("mp3player_msg",window).innerHTML="\u6B4C\u66F2\u52A0\u8F7D\u5931\u8D25";
}
});
}

cfm("open");
}








function tryListenBgMusic(wP,kz,lA,dO)
{
var eD=["\u8BD5\u542C","\u5173\u95ED\u8BD5\u542C"];
if(dO!="close"
&&(wP.innerHTML==eD[0]||dO=="open"))
{

wP.innerHTML=eD[1];

var iM=getPageEditor().getBgMusicInfo();
if(iM&&iM.url)
{
getTop().show(getTop().S("mp3player_container",window),true);
getTop().show(getTop().S("mp3player_msg",window),false);


setTimeout(function()
{
getTop().audioPlay(
{
id:"bg_music_compose",
url:iM.url,
author:iM.singer,
title:iM.song,
autoplay:true,
global:true
}
);
},200);
}

getTop().show(getTop().S("bg_music_listen",window),true);
}
else
{

wP.innerHTML=eD[0];


getTop().audioStop();
getTop().show(getTop().S("mp3player_container",window),false);
getTop().show(getTop().S("mp3player_msg",window),true);

getTop().show(getTop().S("bg_music_listen",window),false);
}
}




function cfi(ckx)
{
var aPs,
aVd;

if(ckx=="editor")
{
aPs=getPageEditor().getContentObj("QQMAILSTATIONERY");
aVd=getPageEditor().getContentObj("QqMAiLcARdWoRD");
}
else
{
aPs=getTop().S("QQMAILSTATIONERY",window);
aVd=getPageEditor().getContentObj("QqMAiLcARdWoRD");
}

if(aPs)
{
aPs.id="";
}

if(aVd)
{
aVd.id="";
}

if(aPs||aVd)
{
cfi(ckx);
}
}





function Yi(ap)
{
getTop().hideMenuEvent(ap);
QMAttach.hideDragAndDropContainer();
}




function bqL()
{
var bH=getPageEditor(),
aaP=bH&&bH.getContentObj("QQMAILSTATIONERY");

aaP&&!bH.isSelectionInObject(aaP)&&
!bH.loadLastRange()&&bH.focus(0,aaP);
aaP&&QMAddrInput.get("to",window).hasAddr([getTop().getUin(),"@qzone.qq.com"].join(""))&&
getTop().showError("\u53D1\u8868\u5230\u6211\u7684Qzone\u7684\u90AE\u4EF6\u4E0D\u652F\u6301\u4FE1\u7EB8");
}





function agg(ap)
{

arguments.callee.editorEverFocus=true;
}




function aQa()
{
var aaP=this.getContentObj("QQMAILSTATIONERY"),
aRW=getTop().S("noletter",window);

this.adjustBodyStyle("padding",aaP?"0":"2px 4px 0");


ahf(getTop().gbIsIE?"auto":"100%");

if(aRW)
{
aRW.checked=!!aaP;
}
}





function ahf(aYY)
{
try
{
var Jb=getPageEditor().getContentTags("table");
for(var i=0,cQ=Math.min(Jb.length,50);i<cQ;i++)
{
var hi=Jb[i];
if(hi.className=="i")
{
hi.style.width=aYY;
}
}
}
catch(bj)
{
}
}




(function()
{
var oClipImg={};

oClipImg.filter=function(eG)
{
return eG.replace(/<img.*?__clipimgunikey__=[\'\"]?[\d]+[\'\"]?.*?>/gi,"");
}


oClipImg.checkUpload=function(ap)
{
var bH=this,
aT=getTop().getEventTarget(ap),
wb=getTop().attr(aT,"__clipimgunikey__");

if(wb)
{
window.open(
getTop().T("/cgi-bin/readtemplate?sid=$sid$&t=help_localpic&filepath=$path$").replace(
{
sid:getTop().getSid(),
path:encodeURIComponent(getTop().attr(aT,"url"))
})
);
}
}






oClipImg.analyse=function()
{
var bH=this;

setTimeout(function()
{
var aVO=bH.getEditWin(),
dfE=bH.getContent(),
cJq=function(eOA,bz)
{
var aY=eOA.match(/webkit\-fake\-url(.*?)(?=[\'\"])/gi);
return getTop().TE([
'<img CONTENTEDITABLE="false" UNSELECTABLE="on" onmousedown="return false;"  style="cursor:pointer;opacity:0.8;filter:(opacity=80)" url="$url$" noeditme="1" __clipimgunikey__="$id$" src="$imgpath$function/local_pic.png"/>'
]).replace(
{
id:getTop().unikey(),
url:aY||('file:///'+bz),
imgpath:getTop().getPath('image')
})
};

var ayh=dfE.replace(/<v:imagedata.*?src=[\'\"]file:\/\/\/(.*?)[\'\"].*?>[.\n]*?<\/v:imagedata>/gi,cJq).replace(/<img.*?src=[\'\"]file:\/\/\/(.*?)[\'\"].*?>/gi,cJq).replace(/<img.*?src=[\'\"]webkit\-fake\-url(.*?)[\'\"].*?>/gi,cJq);

if(ayh!=dfE)
{
bH.setContent(ayh);
getTop().ossLog("delay","all","stat=rmimgerr&type=3&info=0");
}
},13);
}

window.oClipImg=oClipImg;
})();





function aNj(ap)
{
var abq=arguments.callee;
var bhW=getTop().S("subjectsample",window);
if((!getTop().S("subject",window).value||getTop().S("subject",window).value==(bhW&&bhW.value))
&&!abq.Pf)
{
var dj=this;
var buR=this.getContent(true);
setTimeout(function()
{
var ayh=dj.getContent(true);
var aQP=buR.length;
var aQd=ayh.length;
var ciB=3001;
if(aQP>ciB||aQd>ciB)
{
return;
}

for(var i=0;i<aQP&&i<aQd;i++)
{
if(buR.charAt(aQP-i-1)!=ayh
.charAt(aQd-i-1))
{
break;
}
}
var cod=aQd-i;
var bgt=aQP-i;

for(var i=0;i<aQP&&i<aQd;i++)
{
if(buR.charAt(i)!=ayh.charAt(i))
{
break;
}
}
if(i<bgt)
{
bgt=i;
}
var ckK=(bgt==cod?ayh:ayh
.substring(bgt,cod)).replace(/[\r\n]/ig,"");
if(getTop().isUrl(ckK))
{
var aq=getTop();
var gq=abq.Pf=new aq.QMAjaxRequest(
"/cgi-bin/geturlinfo","POST",20*1000
);
gq.onComplete=function(oW)
{
var Dx=oW.responseText;
if(Dx.indexOf("ok|")==0)
{
if(!getTop().S("subject",window).value
||getTop().S("subject",window).value==(bhW&&bhW.value))
{
if(getTop().getMainWin().SubjectCtrl)
{
getTop().getMainWin().SubjectCtrl(1);
}
getTop().S("subject",window).value=getTop().trim(getTop().htmlDecode(Dx).substr(3)
.replace(/&#(x)?([^&]{1,5});?/g,
function(a,b,c)
{
return String.fromCharCode(parseInt(c,
b?16:10
));
}
).replace(/[\r\n]/g,""));
}
delete gq;
}
else
{
gq.onError();
}
};
gq.onError=function()
{
delete gq;
};
gq.send(getTop().T('sid=$sid$&url=$url$&pageid=$id$').replace(
{
sid:getTop().getSid(),
id:getPageId(),
url:encodeURIComponent(ckK)
}
));
}
},13
);
}
}








function trimEditorContent(Dh)
{
var cgG=Dh.getContent(true);
var ci=Dh.getContent();

return(!cgG||(cgG.replace(/ /ig,'')==''))
&&ci.toLowerCase().indexOf('img')==-1?"":ci;
}

































































































function noteFirstPageQuickSave()
{
if(getPageEditor().getContent(true)=="\u8BF7\u8F93\u5165\u8BB0\u4E8B\u5185\u5BB9...")
{
return getTop().showError('\u8BF7\u5148\u8F93\u5165\u5185\u5BB9',800);
}
getTop().S("content",window).value=getPageEditor().getContent();
window.unloadwarning=false;


getTop().S("sendbtn",window).onclick=null;

return aog().submit();
}







function getNoteFirstPageSource(deS,gB)
{
var iR=gB||"\u8BF7\u8F93\u5165\u8BB0\u4E8B\u5185\u5BB9...";
return deS?iR:["<div style='color:#a0a0a0;font-size:14px;'>",
iR,"</div>"].join("");
}





function delAttach(aR)
{
QMAttach.delAttach(aR);
}





function delExistAttach(aM)
{
QMAttach.delExistAttach(aM);
return false;
}







function delBigAttach(aw)
{
QMAttach.delBigAttach(aw);
return false;
}





function setFileNameToSubject(iu)
{
var EM=getTop().S("subject",window),
abq=arguments.callee;

if(iu&&EM&&!EM.value
&&!abq.dkK&&getPageId()!="groupsms")
{
var fC=iu.split("\\").pop();
EM.value=fC.split(".").slice(0,-1).join(".")
||fC;
abq.dkK=true;
}
}





















function addExistBigAttach(bxu,bz,iu,hE,xa,ik)
{
var cmW=getTop().S("BigAttach",window),
epg=typeof ik!="undefined";
if(!cmW)
{
return;
}

var gF="BigAttach_"+hE,
dh,
aBL=bz.replace(/^(.*?\?k=)([0-9a-zA-Z]+)(.*)?$/gi,"$2"),
dZc=bz.replace(/^(.*?\&code=)([0-9a-zA-Z]+)(.*)?$/gi,"$2");

if(getTop().S(gF,window))
{
dh=getTop().S(gF,window);
}
else
{
dh=document.createElement("div");
dh.id=gF;
cmW.appendChild(dh);
}




dh.className="addrtitle attsep";

if(!bz&&ik!=100)
{
dh.setAttribute("uncomplete",true);
}
else
{
dh.removeAttribute("uncomplete");
}

dh.innerHTML=getTop().TE([
"<span style='margin-right:5px;cursor:pointer;' onclick='QMAttach.preview(\"$@$if($fid$)$@$$fid$$@$else$@$$uid$$@$endif$@$\")' uploadid='$@$if($fid$)$@$$fid$$@$else$@$$uid$$@$endif$@$' key='$key$' code='$code$' fid='$fid$' attachtype='big'>",
"<input type='button' class='ico_attbig' align='absmiddle' style='margin:0 1px 0 0!important;margin:0 3px 2px 0'>",
"<input type='hidden' name='fid' value='$fid$' />",
"<span class='black' expiretime='$expire$'>",
"<span>$filename$</span>",
"<span style='font-weight:normal;' class='addrtitle'> $@$if($size$)$@$($size$)$@$endif$@$</span>",
"</span>",
"</span>",
"$@$if($percent$<100)$@$",
"<ul class='bd_upload' style='font-size:1px;width:100px;height:10px;overflow:hidden;border-width:1px;margin-left:5px;dispaly:block;'>",
"<ul class='fdbody' style='width:$percent$%;font-size:1px;height:10px;overflow:hidden;padding:0;border:0;'></ul>",
"</ul>",
"$@$endif$@$",

"<span>",
"<a href='$url$'></a>",
"<nobr>",





"$@$if($percent$==100)$@$",
"<nobr>",



"<a onClick='delBigAttach(this)' class='att_del'>\u5220\u9664</a>",
"</nobr>",
"$@$endif$@$",
"</span>"
]).replace({
expire:bxu,
filename:aXn(iu),
size:xa,
percent:epg?ik:100,
url:bz,
key:aBL,
code:dZc,
fid:hE||""
});
getTop().show(getTop().S("attachContainer",getTop().getMainWin()),true);
setFileNameToSubject(iu);
}











function addBigAttach(bxu,iu,xa,bz,gv,
hE)
{
if(QMAttach.mbHideBigAttach)
{

getTop().showError("\u7FA4\u4FE1\u606F\u6682\u65F6\u4E0D\u652F\u6301\u53D1\u9001\u8D85\u5927\u9644\u4EF6");
}
else
{








var aXk=(getTop().getDomain()=="qq.com"
?"http://mail.qq.com"
:"http://mail.foxmail.com");

if(/http:\/\/mail\.(qq|foxmail)\.com/.test(bz))
{
bz.replace(/http:\/\/mail\.(qq|foxmail)\.com/,aXk);
}
else
{
bz=aXk+bz;
}

!(new RegExp("&code=","ig")).test(bz)
&&(bz=[bz,"&code=",gv].join(""));
addExistBigAttach(bxu,bz,iu,hE,xa);
setEditedAttach(true);
}
}






function getCurrentReceivers(bJh)
{
if(getPageId()!="compose")
{
return"";
}

var aq=getTop(),
bBT=[];
aq.E(
bJh||["to","cc","bcc","sc"],
function(uW)
{
var bT=QMAddrInput.get(uW,window),
ads=bT&&bT.get();

ads&&(bBT=bBT.concat(ads));
}
);
return bBT.join(";");
}














































function initColorSubject()
{
var aq=getTop(),
ko=aq.S("cpanelBtn",window);
if(!ko)
{
return;
}

var aQq=["11","\u6A59\u7EA2\u8272","13","\u6DF1\u7EFF\u8272","14","\u9C9C\u7D2B\u8272","10","\u7EAF\u9ED1\u8272"],
bq=[{sItemValue:'<span style="margin-left:5px;">\u5F69\u8272\u4E3B\u9898...</span>'}];
for(var i=0,aK=aQq.length;i<aK;i+=2)
{
bq.push({
sId:aQq[i],
sItemValue:["<div id='",aQq[i],"' class='s",aQq[i],"_bg' style='margin-top:3px;width:15px;height:15px;float:left;'></div>&nbsp;",aQq[i+1]].join("")
});
}
if(aq.getLocale()=="zh_CN")
{
bq.push({
sItemValue:"<div style='float:right;margin-right:10px;'><a href='http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=11&&no=138' target='_blank'>\u5E2E\u52A9</a></div>"
});
}
ko.onclick=function()
{
var cs=aq.calcPos(this);
new aq.QMMenu({
oEmbedWin:window,
sId:"colorsubject",
nX:aq.getLocale()=="zh_CN"?cs[1]-96:cs[1]-146,
nY:cs[2]+1,
nWidth:aq.getLocale()=="zh_CN"?100:150,
oItems:bq,
nItemHeight:21,
onitemclick:setSubjectColor
});
};
}





function showSubjectMsg(gI)
{
var EM=getTop().S("subject",window);
if(gI)
{
if(EM.value=="")
{
EM.value=getTop().gsMsgNoSubject;
setTimeout(function()
{
showSubjectMsg(false);
},5000);
}
}
else
{
if(EM.value==getTop().gsMsgNoSubject)
{
EM.value="";

try
{
document.selection.createRange().select();
}
catch(bj)
{
}
}
}
}




function setSubjectColor(ciZ)
{
getTop().S("xqqstyle",window).value=ciZ;
getTop().S("subject",window).className="s"+ciZ;
showSubjectMsg(true);
getTop().show(getTop().S('cpanel',window),false);
}


















function initAddrCtrl(ax,bJh,ar)
{
var aq=getTop(),
aI=ax||window,
aFF=window.addrDomain={},
Nz=window.InputObjs=[],
aCE=window.NewInputAddrs=[],
dka="",
aYZ=aq.S("domnewRcpt",ax),
geA=aq.S("domAddExistFile",ax);

ar=aq.extend({
bAddrTip:false,
bDomCheck:true,
bNick:false
},ar);


try
{

aI.focus();
}
catch(bj){}


function djt(dYx)
{
if(dYx=="sc")
{
cZK(Nz.slice(3));
}
else
{
cZK(Nz.slice(0,3));
}
}

function eFU(bG)
{
for(var i=0;i<aCE.length;i++)
{
if(aCE[i].addr==bG)
{
return true;
}
}
return false;
}

function epO()
{

var bFM=aq.S("replyexistAttach",aI),bIU=aq.S("attachContainer",aI);

if(!aq.isShow(bFM)&&aCE.length>0)
{
if(!aq.isShow(bIU))
{
aq.show(bIU,1);
}
aq.show(aYZ,1);
}

}
function eGF()
{
var bFM=aq.S("replyexistAttach",aI);
if(aq.isShow(aYZ)&&aCE.length==0)
{
aq.show(aYZ,0);
}
if(aq.isShow(bFM)&&aCE.length==0)
{
emptyData(aI);
}
}

function cFO()
{


var aO=[],bd="",eLF=aq.S("new_addr1",aI),eLI=aq.S("new_addr2",aI);
for(var i=0;i<aCE.length;i++)
{
var bE=aCE[i],YH="";

aO.push(bE.nick?['"',getTop().encodeNick(bE.nick),
'"<',bE.addr,'>'].join(""):bE.addr);
YH=bE.nick?getTop().htmlEncode(getTop().encodeNick(bE.nick)):bE.addr;
bd+='<span class="">'+YH+'</span>';
if(i<aCE.length-1)
{
bd+=",&nbsp;";
}
}
getInputObj("newrcpt",null,false).value=aO.length>0?aO.join(";"):"";
aq.setHTML(eLF,bd);
aq.setHTML(eLI,bd);


}



function fFO(aC,uW)
{
var ht=QMAddrInput.get(uW,window),
aDA=aq.S("addrUrlCreator",window),
bcd=aq.S("addrQzone",window),
bKv=ht.hasAddr(goCompose.sUrlCreator),
bKu=ht.hasAddr(goCompose.sQzone),
bjb=aq.isShow(aDA),
bJH=aq.isShow(bcd),
aWb=false,
bai=false,
aWk,
aZt,
eH,
elf;

if(bKv&&!bjb)
{
aWb=true;
aWk=aDA;
eH=goCompose.sUrlCreator;
elf=goCompose.sUrlCreatorFullName;
}
else if(bKu&&!bJH)
{
aWb=true;
aWk=bcd;
eH=goCompose.sQzone;
elf=goCompose.sQzoneFullName;
}
if(!bKv&&bjb)
{
bai=true;
aZt=aDA;
}
else if(!bKu&&bJH)
{
bai=true;
aZt=bcd;
}


if(aWb)
{
aq.show(aWk,true);
aq.E(aq.CN("js_addr_div",document),function(dh)
{
aq.show(dh,false);
});
getPageEditor()&&getPageEditor().resizeEditor(true);

ht.del(eH,true);
aq.E(["to","cc","bcc","sc"],function(aM)
{
var aCc=QMAddrInput.get(aM,window);
aCc&&aCc.storeAndClear();
});
var aNg=QMAddrInput.get("to",window)||QMAddrInput.get("bcc",window);
aNg.disabled(false);
aNg.add(elf,true,aWk==aDA?"\u7F51\u9875\u751F\u6210\u52A9\u624B":"\u53D1\u8868\u5230\u6211\u7684Qzone");

var alZ=getTop().S("secmailcode",window);
var ekp=getTop().S("encrypt_mail_tips",window);
alZ&&(alZ.checked=false);
getTop().show(ekp,false);

getTop().ossLog("realtime","all",getTop().T('stat=linkasit&t=$t$').replace(location.getParams()));
}

if(bai)
{
aq.show(aZt,false);
if(!aWb)
{
aq.E(aq.CN("js_addr_div",document),function(dh)
{
aq.show(dh,true);
});
}
getPageEditor()&&getPageEditor().resizeEditor(true);

aq.E(["to","cc","bcc","sc"],function(aM)
{
var aCc=QMAddrInput.get(aM,window);
aCc&&aCc.restore();
});

if(aq.S("to",window).tagName.toLowerCase()=="input")
{

QMAddrInput.get("bcc",window).focus("end");
}
else
{

QMAddrInput.get("to",window).focus("end");
}
}
}

aq.E(
bJh||["to","cc","bcc","sc"],
function(uW)
{
var cnT=aq.S(uW+"AreaCtrl",aI),
vj=aq.S(uW,aI),
ckJ=0;
if(cnT&&vj)
{
var bcw=bBD(),
Mh=new QMAddrInput(
{
id:uW,
win:aI,
tabIndex:vj.tabIndex,
accessKey:vj.accessKey,
dom:{
container:cnT
},
feature:{
autoFold:ar.bAutoFold
},
dispMode:ar.bNick?'onlynick':'full',
maxHeight:ar.nMaxHeight,
filterFunc:function(ajn)
{
return bcw||!ajn.nShortcutGroupId;
},
onfocus:function()
{
setFocus(uW);
djt(uW);
},
onblur:function()
{
if(window["attachflag"]!="replyAllAttach")
{
aYZ&&epO();
}
},
onchange:function(aC)
{
var ads=this.get(";");
goCompose.acO&&goCompose.acO.check();

if(uW=="to"&&!ckJ
&&getTop().S("aSC",window)&&ads.split(";").length>=5)
{

ckJ=1;
getTop().requestShowTip("aSc",16,window);
}

fFO(aC,uW);
djt(uW);
if(getPageConfig()&&window["attachflag"]!="replyAllAttach")
{
aCE=window.NewInputAddrs=[];
if((getPageConfig().subtmpl=="reply"||getPageConfig().subtmpl=="reply_all")
&&((getPageConfig().attachs&&getPageConfig().attachs.length)||(getPageConfig().bigattachs&&getPageConfig().bigattachs.length)))
{
aq.E(["to","cc","bcc","sc"],function(aM)
{
var evf=QMAddrInput.get(aM,aI),ih=evf.get("json");

for(var i=0;i<ih.length;i++)
{

if(dka.indexOf(ih[i].addr)==-1)
{
!eFU(ih[i].addr)&&aCE.push(ih[i]);
}
}
});
cFO();
aYZ&&eGF();
}
}
else
{
debug("no config");
}
}
}
);
dka+=vj.defaultValue+";";
Mh.disabled(vj.disabled)
.add(vj.value);

vj.value="";

Nz.push(Mh);
}
}
);

if(!!ar.bDomCheck)
{

var kt=location.getParams()["s"]=="reply_all"?3:7;
(goCompose.acO=QMAddrDomainCheck.createChecker(Nz,kt,{oPermit:aq.S('receiverMsgContainer',window)})).check();
}

initAddrLinkEvent(aI);
}


function emptyData(ax)
{
var aq=getTop(),aI=ax||window,
bnI=aq.S("exist_file",aI),
dbR=aq.S("new_addrs",aI),
bFM=aq.S("replyexistAttach",aI),
cDN=aq.S("exist_BigAttach",aI);
aq.show(bFM,0);
bnI&&aq.setHTML(bnI,"");
aq.show(bnI,0)
cDN&&aq.setHTML(cDN,"");
aq.show(cDN,0);
dbR&&aq.setHTML(dbR,"");
getInputObj("newrcpt",null,false).value="";
}




function initAddrLinkEvent(ax)
{
getTop().E(["to","cc","bcc","sc"],function(uW)
{
var clJ=uW.toUpperCase(),
zq=QMAddrInput.get(uW,ax),
iC=getTop().S(["a"+clJ],ax),
bOB=getTop().S([uW+"_btn"],ax);

if(zq&&iC)
{
iC.onclick=uW=="sc"
?function(ap)
{
if(showSeparatedCopy())
{
getTop().ossLog("delay","all",getTop().T('stat=compose_send&t=$t$&sub=sc').replace(location.getParams()));
}
getTop().preventDefault(ap||window.event);
if(goCompose.acO)
{
goCompose.acO.check();
}
}
:function(ap)
{
setFocus(!this.disabled&&showInputCtrl(clJ)
?uW:(getFocus()==uW?"to":getFocus()));
QMAddrInput.get(getFocus(),ax).focus("end");
getTop().preventDefault(ap||window.event);

if(goCompose.acO)
{
goCompose.acO.check();
}

};
}

if(zq&&bOB)
{
bOB.onclick=function(ap)
{
var aq=getTop();
if(!(aq.QMLinkman&&aq.QMAddress&&aq.QMAddress.isInit()))
{
return;
}
aq.QMLinkman.showDlg(uW,QMAddrInput.get(uW,window),
{
bSupportGroup:bBD(),
oMainGroup:["hotgroup","tool","mailgroup","ggroup","domaingroup","qqgroup"]
}
);
getTop().preventDefault(ap||window.event);
}
}
});

var dzu=getTop().S("domAddExistFile",ax);
if(dzu)
{

dzu.onclick=function(ap)
{
ecH(ax);
return false;
}
}
}




function ecH(ax)
{
ax["attachflag"]="replyattach";
addExistAttach({attach:getPageConfig().attachs},true,true);
addExistAttach_Big({bigattach:getPageConfig().bigattachs},true);
getTop().ossLog("delay","all","stat=nothing&loc=compose,rlyatt,0,0");



getTop().show("attachContainer",true,ax);
getTop().show("replyexistAttach",true,ax);
getTop().show("domnewRcpt",false,ax);
}




function cZK(daM)
{
var aq=getTop(),
tI=arguments.callee,
gq=tI.ajax,
cr=tI.cache||(tI.cache={});

var aVy=[];
for(var i=0,len=daM.length;i<len;i++)
{
var Mh=daM[i],
ih=Mh&&!Mh.isDisabled()&&Mh.get("json")||[];

for(var j=0,len2=ih.length;j<len2;j++)
{
if(ih[j].valid)
{
aVy.push(ih[j].addr);
}
}
}
function dDA(eax)
{

for(var i=0,len=window.InputObjs.length;i<len;i++)
{
var Mh=window.InputObjs[i];
Mh&&!Mh.isDisabled()&&(Mh.setAddrError(eax));

}
}

if(aVy.length)
{
var gk;
if(cr[gk=aVy.sort().join(';')])
{
cut(cr[gk]);
dDA(cr['invalidaddr']||[]);
}
else
{
if(!gq)
{
gq=tI.ajax=new aq.QMAjax;
gq.url="/cgi-bin/laddr_domain_check";

gq.onComplete=function(qM)
{

var caC=eval(qM.responseText),
eca=caC&&caC.addrhistory||[],
csq=caC&&caC.invalidlocalaccount||[],
eCA=cr['invalidaddr']=cr['invalidaddr']||[];

cut(
cr[gq.gk]=eca
);
for(var i=0,aK=csq.length,bn;i<aK;i++)
{
bn=csq[i];
bn&&eCA.push(bn);
}
dDA(csq);
aq.ossLog("realtime","all","stat=custom&type=addressaptitude&info=open");
};
}
gq.gk=gk;
gq.abort();

gq.send(aq.T("acttype=4&sid=$sid$&uin=$uin$&addrfilt=$addr$").replace({
sid:aq.getSid(),
uin:aq.getUin(),
addr:gk
}));
}
}
else
{
cut([]);
}

function cut(Ex)
{
var cza=tI.showSpan||(tI.showSpan=aq.S("addrAssociation",window)),
eL,cpk=[],

dRa=aq.T('addAddr("\\\"$name$\\\"&lt;$email$&gt;;")'),
dnT=aq.TE([
'$@$for($_this_$)$@$$@$if($_idx_$<3)$@$',
'<a style="pointer:cursor;" title="$email$" onclick=\''+dRa+'\'>$htmlname$</a>',
'$@$if($_idx_$<$_root_.length$-1&&$_idx_$<2)$@$, $@$endif$@$',
'$@$endif$@$$@$endfor$@$'
]);

if(!cza){return;}

if(Ex.length)
{
for(var i=0,len=Ex.length;i<len;i++)
{
eL=aq.QMAddress.getAddress(Ex[i]);
if(eL)
{
cpk.push({
htmlname:eL.name,
name:aq.htmlEncode(aq.encodeNick(aq.encodeNick(aq.htmlDecode(eL.name)))),
email:eL.email
});
}
}

cza.innerHTML=dnT.replace(cpk);
}

aq.show(cza.parentNode,!!cpk.length);
}


}






function setFocus(uW)
{
if(uW)
{
arguments.callee.dyq=uW;
}
}





function getFocus()
{
return setFocus.dyq||"to";
}






function addAddr(ez,cti)
{
var ht=QMAddrInput.get(getFocus(),window);
if(ht)
{
ht.add(ez);
if(!cti)
{
ht.focus("end");
}
}
}






function showQuickAddr2(aL,ddf)
{
var aq=getTop(),
arX=ddf,
bk=aL.sType,
qK=aq.QMAddress,
aQ=getPageConfig(),
fIG=["hotgroup","tool","mailgroup","ggroup","domaingroup","qqgroup"];
if(!arX)
{
return false;
}

if(bk=='succeed')
{

if(arX.innerHTML.indexOf('lm_panel')<0)
{
var aHa=aQ.fromaddr||null,aVJ=aQ.fromname||null;
linkmanInstance=new aq.QMLinkman({
nType:0,
bSupportGroup:bBD(),
oMainGroup:fIG,
oContainer:arX,
sFromaddr:aQ.subtmpl=="forward"?aHa:null,
sFromname:aQ.subtmpl=="forward"?aVJ:null,
onselect:function(aAT)
{

debug(aAT[0],2);
var eNY=aq.isShow(aq.S("addrUrlCreator",window)),
gnX=aq.isShow(aq.S("addrQzone",window));
if(eNY)
{
if(!(aAT.length==1&&(aAT[0].email==goCompose.sUrlCreator||aAT[0].email==goCompose.sQzone)))
{
aq.showError("\u53D1\u7ED9\u7F51\u9875\u751F\u6210\u52A9\u624B\u7684\u90AE\u4EF6\u4E0D\u80FD\u540C\u65F6\u53D1\u7ED9\u5176\u4ED6\u5E10\u53F7");
return;
}
else if(aAT[0].email==goCompose.sQzone)
{
rmHelper('urlcreator');
}
}
if(gnX)
{
if(!(aAT.length==1&&(aAT[0].email==goCompose.sUrlCreator||aAT[0].email==goCompose.sQzone)))
{
aq.showError("\u53D1\u7ED9Qzone\u7684\u90AE\u4EF6\u4E0D\u80FD\u540C\u65F6\u53D1\u7ED9\u5176\u4ED6\u5E10\u53F7");
return;
}
else if(aAT[0].email==goCompose.sUrlCreator)
{
rmHelper('qzone');
}
}
aq.QMLinkman.addAddrEx(aAT,1,QMAddrInput.get(getFocus(),window));
}
});

}
}
else
{
arX.innerHTML=aq.T([
'<div style="padding:155px 0 0;text-align:center;">',
bk=='loading'?'<img src="$images_path$ico_loading1104474.gif" align="center"/> \u52A0\u8F7D\u4E2D...':
'<a href="javascript:\'\'" onclick="return getTop().QMAddress.$fun$();">$content$</a>',
'</div>'
]).replace({
images_path:aq.getPath("image"),
fun:'initAddress',
content:aL.sMsg
});
}

return bk!='succeed';
}






function showQuickAddr(aL)
{
var aq=getTop();
return showQuickAddr2(aL,aq.S("quickaddr_div",window));
}






function bBD()
{
var cC=location.getParams();
return';compose;compose_postcard;compose_postcard_dlg;compose_card;compose_video;'.indexOf(';'+cC['t']+';')>-1&&cC['s']!='reply_all';
}







function showSeparatedCopy(cmj)
{
var aq=getTop(),
bi=aq.S("trSC",window),
Ma=!aq.isShow(bi),
bfP=QMAddrInput.get("sc",window)[Ma&&!cmj?"clear":"flush"](),
aEB=!Ma?bfP.get("json"):null,
bzr={};
if(aEB)
{
for(var i=0,cQ=aEB.length;i<cQ;i++)
{
var aE=aEB[i];
bzr[aE.addr]=aE.format;
}
}

aq.E(["to","cc","bcc"],function(aM)
{
var cdm=aM.toUpperCase();
var axC=aq.S("a"+cdm,window);
var zq=QMAddrInput.get(aM,window).flush();

if(axC)
{
aq.setClass(axC,Ma?axC.className
+" nounderline cur_default":aq.trim(axC.className
.replace(/nounderline cur_default/,"")));
axC.disabled=Ma;
}

aq.show(aq.S("tr"+cdm,window),!Ma
&&(!axC||axC.getAttribute("show")=="true"));

if(zq)
{
zq.disabled(Ma);

if(!cmj&&Ma)
{
bfP.add(zq.get().join("; "));
}

if(aEB)
{
for(var ih=[],aE=null,i=0,cQ=aEB.length;i<cQ;i++)
{
if(zq.hasAddr((aE=aEB[i]).addr))
{
ih.push(aE.format);
delete bzr[aE.addr]
}
}
zq.clear().add(ih.join("; "));
}
}
}
);

var bZn=aq.S("aSC",window);
if(bZn)
{
bZn.innerHTML=Ma?"\u53D6\u6D88\u5206\u522B\u53D1\u9001":"\u5206\u522B\u53D1\u9001";

aq.show(bZn.previousSibling,Ma);
aq.show(bZn.previousSibling.previousSibling,!Ma);
}
aq.S("separatedcopy",window).value=Ma.toString();

bfP.disabled(!Ma);
aq.show(bi,Ma);

if(Ma)
{
bfP.focus("end");
}
else
{
var ih=[];
for(var aDl in bzr)
{
ih.push(aDl);
}
QMAddrInput.get("to",window).add(ih.join("; "));
QMAddrInput.get("to",window).focus("end");
}

return Ma;
}








function showInputCtrl(aM,aQm)
{
var bi=getTop().S("tr"+aM,window);
var iC=getTop().S("a"+aM,window);
var sF=getTop().isShow(bi);
var dio=QMAddrInput.get(aM.toLowerCase(),window),cxx;

getTop().show(bi,!sF);
if(aM=="CC")
{
cxx=sF?"\u6DFB\u52A0\u6284\u9001":"\u5220\u9664\u6284\u9001";
}
else if(aM=="BCC")
{
cxx=sF?"\u6DFB\u52A0\u5BC6\u9001":"\u5220\u9664\u5BC6\u9001";
}

iC.innerHTML=cxx;
iC.setAttribute("show",sF?"false":"true");
dio.disabled(sF)[aQm==false||sF
?"length"
:"focus"]("end");
getTop().setUserCookieFlag('CCSHOW',aM=="CC"?0:1,sF?0:1);

return!sF;
}




function rmHelper(bk)
{
var aNg=QMAddrInput.get("to",window)||QMAddrInput.get("bcc",window);
if(bk=="urlcreator")
{
aNg.del(goCompose.sUrlCreator);
}
else if(bk=="qzone")
{
aNg.del(goCompose.sQzone);
}
}








function hideRightArea(gI,duh)
{
var cib=getTop().S("rightArea",window);
if(!cib)
{
return false;
}

gI=!!gI;

var chW=getTop().S("rightAreaBtn",window);
chW.onclick=function(){hideRightArea(!gI);};
chW.innerHTML='<input type="button" hidefocus class='
+(!gI?'nextfd />':'prefd />');


getTop().show(cib,gI);
if(!duh)
{
getTop().setUserCookieFlag('CCSHOW',2,(!gI?'1':'0'));
}
return false;
}




function initCookieSetting()
{
var bKL=getTop().getUserCookie("CCSHOW")||"";
var cjs=window.QMAddrInput&&QMAddrInput.get("cc",window);
var cgQ=window.QMAddrInput&&QMAddrInput.get("bcc",window);

if(cjs&&(cjs.length()||bKL.charAt(0)==1))
{

if(getTop().location.href.indexOf("from_wm_newwin")!=-1)
{
if(getTop().opener.goReloadInfoOpener.cc&&getTop().opener.goReloadInfoOpener.cc!="")
{
showInputCtrl("CC",false);
}
}
else
{
showInputCtrl("CC",false);
}
}

if(cgQ&&(cgQ.length()||bKL.charAt(1)==1))
{

if(getTop().location.href.indexOf("from_wm_newwin")!=-1)
{
if(getTop().opener.goReloadInfoOpener.cc&&getTop().opener.goReloadInfoOpener.cc!="")
{
showInputCtrl("BCC",false);
}
}
else
{
showInputCtrl("BCC",false);
}
}

if(getTop().S("rightArea",window)&&bKL.charAt(2)==1)
{
hideRightArea(false,true);
}
}





function loadValue(dcu)
{
if(dcu&&getPageEditor())
{
ahf("100%");
getInputObj("content_compare",null,true).value=getPageEditor()
.getContent();
ahf(getTop().gbIsIE?"auto":"100%");
}

var ao=arguments.callee;
var cr=ao.AG;
getTop().E(ao.cob,function(cf,py)
{
var gj=getInputObj(cf,null,true);
if(gj&&gj.value!=cr[py])
cr[py]=gj.value;
}
);
}
loadValue.cob=["to","cc","bcc","subject","content_compare"];
loadValue.AG=[];





function bHr()
{
var vh=loadValue.cob,
cr=loadValue.AG,
dgC=function(cP)
{
return cP.replace(/<param .*?\">/ig,"").replace(/<script[^>]*?>.*?(<\/script>)/gi,"");
};
if(getPageEditor())
{
ahf("100%");
getInputObj("content_compare",null,true).value=getPageEditor()
&&getPageEditor().getContent();
ahf(getTop().gbIsIE?"auto":"100%");
}

for(var i=vh.length-1;i>=0;i--)
{
var ht=getInputObj(vh[i],null,true);
var cB=dgC(ht&&ht.value||"");
var dBe=dgC(cr[i]||"");
if(cB!=dBe)
{
return true;
}
}
var aq=getTop();
if(getPageId()=="group"&&aq.isShow(aq.S("Votelist",window)))
{
var dez=aq.S("votesubject",window);
if(dez.value!="")
{
return true;
}

var cfC=aq.SN("option",window);

for(var aV=0;aV<cfC.length;aV++)
{
if(cfC[aV].value!="")
{
return true;
}
}
}
return false;
}

function cml()
{
return getTop().QMDialog("ftnupload_attach");
}
function eOQ()
{
var cv=getTop().QMDialog("ftnupload_attach"),
hp=cv&&cv.getDialogWin().oMainObj;

return(hp&&hp.mnUploaderCount==hp.mnSuccessCount);
}

function evy()
{
return getTop().QMDialog("ftnupload_self");
}
function esx()
{
var cv=getTop().QMDialog("ftnupload_self"),
hp=cv&&cv.getDialogWin().oMainObj;

return(hp&&hp.mnUploaderCount==hp.mnSuccessCount);
}





function setNeedCloseConform(cpm)
{

getTop().log("setNeedCloseConform _abNeed="+cpm+" caller="+arguments.callee.caller.toString())
setNeedCloseConform.dhG=cpm;
}





function isNeedCloseConform()
{
return setNeedCloseConform.dhG;
}





function setEditedAttach(ggy)
{
setEditedAttach.fRU=ggy;
}





function isEditedAttach()
{
return setEditedAttach.fRU;
}




function getToBeReloadInfo()
{
var aq=getTop(),bE,
bTm=QMAttach.oFileUploadMgr&&QMAttach.oFileUploadMgr.getUploadData();

bE=
{


content:getPageEditor()&&getPageEditor().getContent(),
subject:aq.S("subject",window).value,
exbacode:aq.S("exist_BigAttach",window)&&aq.S("exist_BigAttach",window).innerHTML,
bacode:aq.S("BigAttach",window)&&aq.S("BigAttach",window).innerHTML,
excode:aq.S("exist_file",window)&&aq.S("exist_file",window).innerHTML,
fileuploaddata:bTm||[]
};

if(window.QMAddrInput)
{
getTop().E(["to","cc","bcc","sc"],
function(pz)
{
var bT=QMAddrInput.get(pz,window);
if(bT&&!bT.isDisabled())
{
bE[pz]=bT.get("newwin").join(";");
}
});
}

if(getPageId()=="group"&&aq.isShow(aq.S("Votelist",window)))
{
var dez=aq.S("votesubject",window);
var cfC=aq.SN("option",window);

var eas={
subject:dez.value
}
var ctF=[];
for(var aV=0;aV<cfC.length;aV++)
{
ctF[aV]=cfC[aV].value;
}

eas.type=aq.S("votetype1",window).checked?1:2;
eas.options=ctF;

bE.votelist=eas;
}


if(aq.S("qqgroupid",window)){
bE.groupId=aq.S("qqgroupid",window).value;
}

return bE;
}




function bOI(dVn)
{
getTop()[dVn=="opener"?"goReloadInfoOpener":"goReloadInfo"]=getTop().extend(getToBeReloadInfo(),
{
isconfirm:bHr()
}
);
}





function aZL(ar)
{
var Bb=getTop().goReloadInfo||getTop().goAsyncContent;
getTop().goReloadInfo=getTop().goAsyncContent=null;

if(ar.sPlusOpener)
{
var bDe=getTop().opener;
if(bDe)
{
Bb=bDe.goReloadInfoOpener;
bDe.goReloadInfoOpener=null;
}
}
if(!!Bb)
{
var aq=getTop(),
aGz=Bb.bacode,
ctE=Bb.excode,

dfG=ar&&ar.hideBigAttach,
bTm=Bb.fileuploaddata,
Tt=getTop().S("subject",window),
bqX=getTop().S("BigAttach",window),

bnI=getTop().S("exist_file",window),

bH=getPageEditor();
if(Bb.exbacode)
{
aGz+=Bb.exbacode;
}

if(dfG&&aGz)
{

getTop().showError("\u7FA4\u4FE1\u606F\u6682\u65F6\u4E0D\u652F\u6301\u53D1\u9001\u8D85\u5927\u9644\u4EF6");
aGz="";
}
bTm&&QMAttach.oFileUploadMgr.initFileList(bTm);
if(bnI&&ctE&&ctE.replace(/\s/ig,""))
{
bnI.innerHTML=ctE.replace(/name=\"replymailattach\"/g,'name="mailattach"');
aq.show("attachContainer",true,aq.getMainWin());
}

var dmr=window.QMAddrInput;
getTop().E(["to","cc","bcc","sc"],function(pz,dT)
{
var bT=dmr&&dmr.get(pz,window);
Bb[pz]&&bT&&bT.add(Bb[pz]);
});

if(Bb["sc"])
{
showSeparatedCopy(true);
}

if(Tt&&Bb.subject)
{
Tt.value=Bb.subject;
}

if(bqX&&aGz&&aGz.replace(/\s/ig,""))
{
bqX.innerHTML=aGz;
aq.show("attachContainer",true,aq.getMainWin());
}






if(bH)
{
if(Bb.content)
{
bH.setContent(Bb.content);
}
else
{
bH.setContent(
Bb.pluscontent||"",
getTop().QMEditor.getBreakLine(1),
bH.getContent()
);
}
}

if(getPageId()=="group"&&Bb.votelist)
{
var ezQ=Bb.votelist;
aq.show(aq.S("Votelist",window),true);
var dez=aq.S("votesubject",window);

dez.value=ezQ.subject;

var ctF=ezQ.options;

if(ctF.length>3)
{
for(var aV=3;aV<ctF.length;aV++)
{
var cPZ=aq.S("option_div",window);
var fdI=cPZ.getElementsByTagName("DIV");
var exr=document.createElement("DIV");
exr.style.margin=cPZ.childNodes[1].style.margin;
exr.innerHTML='<span class="votelist_l">\u9009\u9879'+(aV+1)+'\uFF1A</span><input name="option" type="txt" class="txt" style="width:305px" />';
cPZ.appendChild(exr);
}
}
if(ctF.length==2)
{
var cPZ=aq.S("option_div",window);
var fdI=cPZ.getElementsByTagName("DIV");
cPZ.removeChild(fdI[2]);
}

var cfC=aq.SN("option",window);
for(var aV=0;aV<cfC.length;aV++)
{
cfC[aV].value=ctF[aV];
}

if(ezQ.type==2)
{
aq.S("votetype1",window).checked=false;
aq.S("votetype2",window).checked=true;
}
}


if(aq.S("qqgroupid",window)&&Bb.groupId){
getTop().getMainWin()&&getTop().getMainWin().selectGroup(Bb.groupId);
}

return Bb;
}
return null;
}





function confirmCheckBeforeClose()
{
if(window.getFlashCurrentState&&getFlashCurrentState()==401)
{
return"recording";
}

if(getTop().S("voiceid",window)&&getTop().S("voiceid",window).value)
{
return"recorded";
}

if(bHr())
{
return"content";
}
if(cml())
{
return"ftnuploading";
}
if(isEditedAttach())
{
return"attach_edited";
}

return"exit";
}





function closePage(ap)
{
var aGg;
if(isNeedCloseConform())
{
var beT=(new Array(42)).join("-")+(new Array(5)).join(" ");
if(getTop().isDisableCtl("sendbtn",window))
{
getTop().QMDialog("composeExitAlert","close");
getTop().switchFolder("folder_newmail");

return getTop().T([beT,'\n\u63D0\u793A\uFF1A\u60A8\u786E\u5B9A\u8981\u7EC8\u6B62\u5F53\u524D\u884C\u4E3A\uFF1F\n',beT]);
}
else if((aGg=confirmCheckBeforeClose())!="exit")
{
getTop().QMDialog("composeExitAlert","close");
getTop().switchFolder("folder_newmail");

return getTop().T([beT,"\n",{
"driftcontent":'\u63D0\u793A\uFF1A\u672A\u53D1\u9001\u7684\u5185\u5BB9\u5C06\u4F1A\u4E22\u5931\u3002',
"content":'\u63D0\u793A\uFF1A\u672A\u4FDD\u5B58\u7684\u5185\u5BB9\u5C06\u4F1A\u4E22\u5931\u3002',
"recording":'\u63D0\u793A\uFF1A\u60A8\u6B63\u5728\u5F55\u5236\u97F3\u89C6\u9891\uFF0C\u672A\u53D1\u9001\u5C06\u4F1A\u4E22\u5931\u3002',
"recorded":'\u63D0\u793A\uFF1A\u60A8\u5DF2\u7ECF\u5F55\u5236\u97F3\u89C6\u9891\uFF0C\u672A\u53D1\u9001\u5C06\u4F1A\u4E22\u5931\u3002',
"ftnuploading":'\u63D0\u793A\uFF1A\u60A8\u6B63\u5728\u4E0A\u4F20\u6587\u4EF6\uFF0C\u5173\u95ED\u9875\u9762\u5C06\u505C\u6B62\u4E0A\u4F20\u3002'
}[aGg],"\n",beT]).replace({
content:getPageId()=="note"?"\u8BB0\u4E8B":"\u90AE\u4EF6"
});
}
}
setNeedCloseConform(true);
}





function redirectExitURLId(ajC)
{
if(ajC==1
&&(getTop().QMHistory.tryBackTo("readmail")||getTop().QMHistory.tryBackTo("mail_list")))
{
return;
}

var abm=["/cgi-bin/addressbook/addr_listall?","/cgi-bin/today?",

"/cgi-bin/cardlist?ListType=Cards&Cate1Idx=listall&t=card&loc=cardlist,cardlist,fromtab,1&",
"/cgi-bin/readtemplate?t=compose&s=cnew&",
"/cgi-bin/grouplist?t=compose_group&",
"/cgi-bin/note_list?",
"/cgi-bin/mail_list?folderid=8&t=mail_list_group&",
"/cgi-bin/readtemplate?t=compose_audiomail&",
"/cgi-bin/addr_listall?func=birthcard&t=birth_friendlist&",
"/cgi-bin/readtemplate?t=compose_video&",
"/cgi-bin/readtemplate?t=compose_postcard&",
"/cgi-bin/readtemplate?t=compose_drift&maxage=0&"
];

if(ajC<0||ajC>=abm.length)
{
ajC=1;
}
var aY=abm[ajC]+"sid="+getTop().getSid();
if(ajC==5)
{
aY+=("&"+getTop().getGlobalVarValue("DEF_NOTE_ORG"));
;
getTop().setGlobalVarValue("DEF_NOTE_ORG","");
}
if(getTop().bnewwin==1)
{
aY+="&newwin=true";
}
getTop().goUrlMainFrm((ajC==1
?getTop().QMHistory.getUrl(getTop().QMHistory.getLastRecordId())
:null)
||aY,false,ajC>=2
&&ajC<=4);
}





function exitConfirm(buj)
{
var aGg;
var aq=getTop();
var bzi=function()
{
if(typeof buj=="function")
{
buj();
}
else
{
aq.globalEval(buj,window);
}
}

var aMj=getPageConfig().subtmpl=="draft"
&&!location.getParams()["backurl"];
var qx=getTop().S("fmailid",window)&&aq.S("fmailid",window).value,
cpw=getTop().S("draftmailid",window)&&aq.S("draftmailid",window).value;

if(qx==getPageConfig().mailid)
{
qx="";
}

if(isNeedCloseConform()
&&getPageId()!="remind"
&&((aGg=confirmCheckBeforeClose())!="exit"
||(!aMj&&qx&&!goCompose.bWA&&getPageId()!="group")
||(!aMj&&cpw&&!goCompose.bWA&&getPageId()=="group")))
{
disableAutoSave();

if(getPageEditor())
{
getPageEditor().saveRange();
}

var bMQ=getTop().S("qqgroupid",window)&&!aq.S("qqgroupid",window).disabled;
var bJ={
exitstyle:"",
delstyle:"display:none",
exitbtn:"\u5426",
disattach:aq.getMainWin().sendAfterUpload()?"block":"none"
};

if(getPageId()=="note")
{
bJ.title="\u5185\u5BB9\u5DF2\u88AB\u4FEE\u6539\uFF0C\u786E\u5B9A\u4FDD\u5B58\u8BE5\u8BB0\u4E8B\u5417\uFF1F";
}
else if(getPageId()=="voice")
{
switch(aGg)
{
case"recording":
bJ.title="\u5185\u5BB9\u5F55\u5236\u4E2D\uFF0C\u786E\u5B9A\u4E0D\u53D1\u9001\u6B64\u97F3\u89C6\u9891\u90AE\u4EF6\u5417\uFF1F";
break;
case"recorded":
bJ.title="\u5DF2\u5F55\u5236\u5185\u5BB9\uFF0C\u786E\u5B9A\u4E0D\u53D1\u9001\u6B64\u97F3\u89C6\u9891\u90AE\u4EF6\u5417\uFF1F";
break;
default:
bJ.title="\u5185\u5BB9\u5DF2\u88AB\u4FEE\u6539\uFF0C\u786E\u5B9A\u4E0D\u53D1\u9001\u6B64\u97F3\u89C6\u9891\u90AE\u4EF6\u5417\uFF1F";
}
bJ.savestyle="display:none;";
bJ.exitbtn="\u786E\u5B9A";
}
else if(getPageId()=="postcard")
{
bJ.title="\u5185\u5BB9\u5DF2\u88AB\u4FEE\u6539\uFF0C\u786E\u5B9A\u4E0D\u53D1\u9001\u6B64\u660E\u4FE1\u7247\u5417\uFF1F";
bJ.savestyle="display:none;";
bJ.exitbtn="\u786E\u5B9A";
}
else if(getPageId()=="bottleDrift")
{
bJ.title="\u5185\u5BB9\u5DF2\u88AB\u4FEE\u6539\uFF0C\u786E\u5B9A\u4E0D\u53D1\u9001\u6B64\u6F02\u6D41\u74F6\u5417\uFF1F";
bJ.savestyle="display:none;";
bJ.exitbtn="\u786E\u5B9A";
}
else if(getPageId()=="urlcreator")
{
bJ.title="\u5185\u5BB9\u5DF2\u88AB\u4FEE\u6539\uFF0C\u786E\u5B9A\u4E0D\u4FDD\u5B58\u6B64\u7F51\u9875\u5417\uFF1F";
bJ.savestyle="display:none;";
bJ.exitbtn="\u786E\u5B9A";
}
else if(bMQ)
{
bJ.title=cpw&&!aMj
?"\u6B64\u90AE\u4EF6\u5DF2\u4FDD\u5B58\u4E3A\u8349\u7A3F\uFF0C\u662F\u5426\u9700\u8981\u4FDD\u7559\uFF1F"
:aMj?"\u8349\u7A3F\u5DF2\u88AB\u4FEE\u6539\uFF0C\u662F\u5426\u8981\u4FDD\u5B58\u6B64\u6B21\u6539\u52A8\uFF1F":"\u5185\u5BB9\u5DF2\u88AB\u4FEE\u6539\uFF0C\u662F\u5426\u8981\u5C06\u6B64\u90AE\u4EF6\u5B58\u4E3A\u8349\u7A3F\uFF1F";
if(!aMj)
{
bJ.exitstyle="display:none;";
bJ.delstyle="";
}
}
else
{
bJ.title=qx&&!aMj
?"\u6B64\u90AE\u4EF6\u5DF2\u4FDD\u5B58\u4E3A\u8349\u7A3F\uFF0C\u662F\u5426\u9700\u8981\u4FDD\u7559\uFF1F"
:aMj?"\u8349\u7A3F\u5DF2\u88AB\u4FEE\u6539\uFF0C\u662F\u5426\u8981\u4FDD\u5B58\u6B64\u6B21\u6539\u52A8\uFF1F":"\u5185\u5BB9\u5DF2\u88AB\u4FEE\u6539\uFF0C\u662F\u5426\u8981\u5C06\u6B64\u90AE\u4EF6\u5B58\u4E3A\u8349\u7A3F\uFF1F";
if(!aMj)
{
bJ.exitstyle="display:none;";
bJ.delstyle="";
}
}


aq.gbIsIE&&QMAttach.hideDragAndDropContainer();

var fB=new aq.QMDialog({
sId:"composeExitAlert",
sTitle:"\u79BB\u5F00\u63D0\u793A",
sBodyHtml:aq.TE([
'<div class="dialog_feedback">',
'<span class="dialog_icon icon_info_b"></span>',
'<div class="dialog_f_c">',
'<div $@$if($disattach$=="block")$@$class="dialog_f_t"$@$endif$@$>$title$</div>',
'<div class="dialog_f_d" style="width:370px;display:$disattach$"">\u8BF7\u6CE8\u610F\uFF1A\u5DF2\u8BBE\u5B9A\u4F20\u5B8C\u8D85\u5927\u9644\u4EF6\u540E\u90AE\u4EF6\u81EA\u52A8\u53D1\u9001\uFF0C\u73B0\u5728\u79BB\u5F00\uFF0C\u5C06\u4F7F<br/>\u81EA\u52A8\u53D1\u9001\u5931\u8D25\u3002\u70B9\u201C\u53D6\u6D88\u201D\u53EF\u505C\u7559\u5728\u5199\u4FE1\u9875\u9762\u3001\u7B49\u5F85\u81EA\u52A8\u53D1\u9001\u3002</div>',
'</div>',
'</div>',
'<div class="dialog_operate">',
'<a class="btn_gray" id="btn_exit_save" name="btn_exit_save" href="javascript:;" style="$savestyle$">\u662F</a>',
'<a class="btn_gray" id="btn_exit_notsave" name="btn_exit_notsave" href="javascript:;" style="$exitstyle$">$exitbtn$</a>',
'<a class="btn_gray" id="btn_delete_save" name="btn_delete_save" href="javascript:;" style="$delstyle$">\u5426</a>',
'<a class="btn_gray" id="btn_not_exit" href="javascript:;" href="javascript:;" initlized="true">\u53D6\u6D88</a>',




'<div class="clr"></div>',
'</div>'
]).replace(bJ),
nWidth:null,
nHeight:null,
bClose:true,
onshow:function()
{
var cJ=this;
if(bMQ||getPageId()=="voice"||
getPageId()=="note"||getPageId()=="postcard")
{
try
{
cJ.S("btn_exit_notsave").focus();
}
catch(fF)
{
debug("error when focus on element 'btn_exit_notsave'");
}
}
else
{
try
{
cJ.S("btn_delete_save").focus();
}
catch(fF)
{
debug("error when focus on element 'btn_delete_save'");
}
}
},
onload:function(){
var cJ=this;
aq.addEvent(cJ.S("btn_exit_save"),"click",function(ap)
{
if(aGg!="exit")
{
cJ.close();
doProcess(getPageId()=="note"?"":"savedraft",
{
card:"card",
note:"send"
}[getPageId()]||"save",getPageId()=="note"?1:0
);
setNeedCloseConform(false);
bzi();
}
else
{
aq.fireMouseEvent(cJ.S("btn_exit_notsave"),"click");
}
aq.preventDefault(ap);
});
aq.addEvent(cJ.S("btn_exit_notsave"),"click",function(ap)
{
aq.disableAll(true);
cJ.S("btn_exit_notsave").disabled=true;
setNeedCloseConform(false);
cJ.close();
bzi();
aq.preventDefault(ap);
});
aq.addEvent(cJ.S("btn_delete_save"),"click",function(ap)
{
var cpw,
bIT=function()
{
if(cJ.S("btn_exit_notsave"))
return aq.fireMouseEvent(cJ.S("btn_exit_notsave"),
"click"
);
};

if(getPageId()=="group")
{
cpw=getTop().S("draftmailid",window)&&aq.S("draftmailid",window).value;
}
else
{
cpw=getTop().S("fmailid",window)&&aq.S("fmailid",window).value;
}

if(cpw)
{
var gq=new aq.QMAjaxRequest("/cgi-bin/mail_mgr");

gq.onComplete=function(atm)
{
if(atm.responseText.indexOf("isMainFrameError")!=-1)
{
gq.onError();
}
else
{
getTop().hiddenMsg();
getTop().reloadLeftWin();
bIT();
}
};
gq.onError=function()
{
aq.showError("\u5220\u9664\u8349\u7A3F\u5931\u8D25");
bIT();
};
gq
.send(aq.T('sid=$sid$&Fun=$fun$&mailaction=$mailaction$&mailid=$mailid$')
.replace({
sid:aq.getSid(),
fun:"PerDel",
mailaction:"mail_del",
mailid:cpw
}));

cJ.S("btn_delete_save").disabled=true;
aq.disableAll(true);
aq.showInfo("\u6B63\u5728\u5220\u9664\u8349\u7A3F");
}
else
{
bIT();
}
aq.preventDefault(ap);
});
aq.addEvent(cJ.S("btn_not_exit"),"click",function(ap)
{
cJ.close();
aq.preventDefault(ap);
});







},
onbeforeclose:function(){
aq.disableAll(false);
enableAutoSave();
return true;
},
onclose:function(){
if(getPageEditor())
{
getPageEditor().loadRange();
}
}
});


return false;
}

setNeedCloseConform(false);
bzi();
return false;
}





function saveContentGoUrl(bz)
{
bOI();
var aq=getTop(),bFn=QMAttach.oFileUploadMgr;
if(QMAttach.oFileUploadMgr.getUploadList().length>QMAttach.oFileUploadMgr.getUploadList("complete").length)
{
aq.confirmBox(
{
title:"\u653E\u5F03\u672A\u5B8C\u6210\u7684\u4E0A\u4F20",
msg:"\u60A8\u8FD8\u6709\u672A\u5B8C\u6210\u4E0A\u4F20\u7684\u9644\u4EF6\uFF0C\u662F\u5426\u53D6\u6D88\u4E0A\u4F20\uFF1F",
confirmBtnTxt:"\u662F",
cancelBtnTxt:"\u5426",
width:430,
onreturn:function(kI)
{
if(kI)
{


QMAttach.rmFileCell(QMAttach.oFileUploadMgr.getUploadListExclude("complete"));
bOI();
setNeedCloseConform(false);
getTop().goUrlMainFrm(bz,false,true);
}
}
}
);
}
else
{
setNeedCloseConform(false);
getTop().goUrlMainFrm(bz,false,true);
}
}





function selectGroup(aM)
{
aM=String(aM).indexOf("@groupmail.qq.com")==-1
?(aM+"@groupmail.qq.com")
:aM;
var xJ=getTop().S("Gname_"+aM,window);
if(xJ)
{
getTop().S("qqgroupid",window).value=aM;
getTop().S("groupname",window).value=xJ.innerHTML;
}
}




function useStationery()
{
hideRightArea(true,true);
changeTab("stationery_div");
if((getTop().S("stationery",window).src=="")
||(getTop().S("stationery",window).src.indexOf("javascript:")==0))
setTimeout(
'getTop().S("stationery", window).src="/cgi-bin/readtemplate?t=stationery&sid="+getTop().getSid();',
10
);
}





function changeTab(aR)
{
var hU=["AddrTab","stationery_div","card_div"];
var dcE=["addr_cmd","stationery_cmd","card_cmd"];
var xk=["cptab","cptab cpslt"];
for(var i=0,cQ=hU.length;i<cQ;i++)
{
var xJ=getTop().S(hU[i],window);
if(xJ)
{
var cR=(aR==hU[i])?1:0;
getTop().S(dcE[i],window).className=xk[cR];
getTop().show(xJ,cR);
}
}
}



















































function autoSave(cRu)
{
if(cRu&&bHr()&&isEnabledAutoSave())
{
getPageId()!="note"?doProcess("autosave","save"):doProcess(
"note_autosave","send",true
);
}

goCompose.cnm=setTimeout(
function()
{
autoSave(true);
},
getPageId()=="note"?300000:300000
);
}

function clearAutoSave()
{
disableAutoSave();
clearTimeout(goCompose.cnm);
}

function isEnabledAutoSave()
{
var ckM=arguments.callee.cfD;
return typeof ckM!="boolean"?true:ckM;
}

function disableAutoSave()
{
isEnabledAutoSave.cfD=false;
}

function enableAutoSave()
{
isEnabledAutoSave.cfD=true;
}







function dwG(eG,Ny)
{

if(getTop().S("mailbgmusic",window))
{
getTop().S("mailbgmusic",window).value="use";
}

var pM=getTop().getUserInfo("alias");
var dCI=Ny.song?getTop().T('<b>$songDisp$</b>($singerDisp$)')
.replace({
songDisp:getTop().htmlEncode(Ny.song),
singerDisp:getTop().htmlEncode(Ny.singer)
}):"";
var cQY=Ny.song
?getTop().T('<a href="http://music.soso.com/music.cgi?w=$songorg$&pl=$singerorg$" target="_blank">\u67E5\u770B</a>&nbsp;')
.replace({
songorg:Ny.song,
singerorg:Ny.singer
})
:getTop().T('<a href="$url$" target="_blank">\u4E0B\u8F7D</a>').replace({
url:Ny.url
});
return getTop().T([
'$content$',
'<player id="cmd:bgmusic" url="$url$" song="$song$" singer="$singer$"></player> ',
'<div id=QQMailBgMusicInfo style="font:12px;color:#909090;">',
'<br><br><br><br>\u4F60\u7684\u670B\u53CB $alias$ \u4E3A\u8FD9\u5C01\u90AE\u4EF6\u63D2\u5165\u4E86\u80CC\u666F\u97F3\u4E50 - $bgmusic$',
'$viewurl$&nbsp;',
'<a id="_bgmusic_play_btn_" href="http://mail.qq.com/zh_CN/htmledition/playmusic.html?song=$song$&singer=$singer$&sender=$encodealias$&url=$encodeurl$" target="_blank">\u64AD\u653E</a>',
'</div>']).replace({
content:eG,
url:Ny.url,
alias:pM,
bgmusic:dCI,
viewurl:cQY,
song:Ny.song
?encodeURIComponent(Ny.song)
:"",
singer:Ny.singer
?encodeURIComponent(Ny.singer)
:"",
encodeurl:Ny.url
?encodeURIComponent(Ny.url)
:"",
encodealias:encodeURIComponent(pM)
}
);
}








function dEN(KX)
{
var aK=KX.length;
if(aK>10)
{
getTop().msgBox("\u6BCF\u6B21\u53D1\u9001\uFF0C\u597D\u53CB\u4E2A\u6570\u4E0D\u80FD\u8D85\u8FC710\u4E2A\u3002","dialog",true,0,"\u5931\u8D25\u4FE1\u606F");
return false;
}
if(!getTop().S("MyRssContent",window))
{
for(var aV=0;aV<aK;aV++)
{
if(KX[aV].valid&&!/@((vip.)?qq|foxmail).com/i.test(KX[aV].addr))
{
getTop().msgBox("\u53EA\u80FD\u5BF9QQ\u90AE\u7BB1\u7528\u6237\u53D1\u51FA\u63D0\u9192\u3002","dialog",true,0,"\u5931\u8D25\u4FE1\u606F");
return false;
}
}
}
return true;
}






function addrErrDlg(ay)
{
var aS=ay,aq=getTop();
new aq.QMDialog({
sId:aS.sId||"Address_error",
sTitle:aS.sTitle||"\u6536\u4EF6\u4EBA\u683C\u5F0F\u9519\u8BEF",
nHeight:null,
sBodyHtml:aq.T([
'<div class="dialog_feedback">',
'<span class="dialog_icon icon_caution_b"></span>',
'<div class="dialog_f_c">',
'<div class="dialog_f_t">$desc$</div>',
'<div class="dialog_f_d" style="max-height:64px;_height:53px;word-break:break-all;overflow:hidden;">" <span class="red">$result$</span> "</div>',
'</div>',
'</div>',
'<div class="dialog_operate">',
'<input type=button class="btn wd2" id="confirm" value="\u786E\u5B9A" >',
'</div>'
]).replace({
result:aS.oErrorAddrs.join('</b>","<b style="color:red;">'),
desc:aS.sDesc||""
}),
onload:function(){
var cJ=this;
aq.addEvent(this.S("confirm"),"click",function(){
cJ.close();
});
},
onshow:function(){
this.S("confirm").focus();
}
});
return false;

}








function doProcessCheck(tz,jF,aoE,asA)
{
if(jF=="voice"&&!CheckVoiceBeforeCompose())
{
return false;
}

if(jF=="card"&&window.setBirthCardReceiver
&&!setBirthCardReceiver(tz=="savedraft"?0:1))
{
return false;
}
var aq=getTop(),
iD=0;


try
{
var aEA={},
bhG=["to","cc","bcc","sc"],
beg=false,
beJ=[],
cbm=[],
cyA="",
dwa=0;

var ciH=false;

if(!(jF=="card"&&window.setBirthCardReceiver)
&&getPageId()!="qq"&&getPageId()!="note"&&getPageId()!="group"&&getPageId()!="groupsms")
{

for(var aV=bhG.length-1;aV>=0;aV--)
{
var aM=bhG[aV],
dvx=typeof(QMAddrInput)=="undefined",
bzA=window.QMAddrDomainCheck;
if(getPageId()=="card"&&dvx)
{

var zq=aEA[aM]=aq.QMAddrInput.get(aM,aq);
bzA=aq.QMAddrDomainCheck;
}
else if(!dvx)
{
var cv=aq.QMDialog('postcard_dlg'),
aI=window;
if(cv)
{
aI=cv.getDialogWin();
}
var zq=aEA[aM]=QMAddrInput.get(
aM,aI
);
}
if(!zq)
{

continue;
}
if(jF=="send"&&bzA&&!bzA.permit(zq.get('validemail')))
{
aq.showError('\u90AE\u4EF6\u5730\u5740\u8FC7\u591A\uFF0C\u65E0\u6CD5\u53D1\u9001\u3002');
return false;
}

if(getPageId()=="postcard")
{
if(!checkWordText())
{
return false;
}
}

var vj=aq.S(aM,window);
if(zq&&vj)
{

var blR=vj.disabled=zq
.flush().isDisabled();



var cB=vj.value=blR
?"":zq.get().join("; ");

if(!blR)
{










var bqU=zq.get("json");
for(var i=0;i<bqU.length;i++)
{
dwa++;
if(bqU[i].addr.indexOf("@qzone.qq.com")>-1)
{
cyA=bqU[i].addr;
}
}
beJ=blR?"":beJ
.concat(zq.get("errhtml"));
cbm=blR?"":cbm
.concat(zq.get("errQQhtml"));

if(!beg)
{
beg=!!cB;
}

if(getPageId()=="remind"&&!dEN(zq.get("json")))
{
ciH=true;
}
}
}
}



iD++;
if(aoE<iD)
{
if(jF=="send"&&getPageId()=="compose"&&dwa>1&&cyA!="")
{

aq.confirmBox(
{
title:"\u786E\u8BA4",
msg:aq.T('<div class="dialog_f_t" style="line-height:1.5; padding-bottom:10px;">\u7531\u4E8E\u6536\u4EF6\u4EBA\u5305\u62EC\u4E86$addr$\uFF0C<br> \u90AE\u4EF6\u5185\u5BB9\u5C06\u540C\u65F6\u53D1\u8868\u5230\u60A8\u7684QQ\u7A7A\u95F4\u3002</div><div>\u60A8\u786E\u5B9A\u7EE7\u7EED\u53D1\u9001\uFF1F</div>').replace(
{
addr:cyA
}),
onreturn:function(kI)
{
if(kI)
{
aq.ossLog("realtime","all","stat=nothing&loc=qzone,send,1,0");
setTimeout(
function()
{
asA(iD);
},
100
);
}
}
}
);
aq.ossLog("realtime","all","stat=nothing&loc=qzone,check,1,0");
return false;
}

}

if(getPageId()=="remind"&&ciH)
{
return false;
}
}
else
{
beg=true;
}

if(getPageId()!="note"
&&getPageId()!="group"
&&getPageId()!="groupsms"
&&!(aq.S("separatedcopy",window)&&aq.S("separatedcopy",window).disabled)
&&(jF=="voice"||jF=="send"||(jF=="card"&&tz=="")))
{
if(!beg)
{
if(jF=="card")
{
aq.showError(aq.gsMsgNoCardSender);

if(aq.QMDialog("GreetingCard"))
{
splashToCtrl(aq.QMDialog("GreetingCard").S("bccAreaCtrl"));
}
else
{
splashToCtrl("bccAreaCtrl");
}


aq.show(aq.S("cardTip",window),true);
}
else if(getPageId()=="postcard")
{
aq.showError(aq.gsMsgNoSender);
splashToCtrl("bccAreaCtrl");
}
else
{
aq.showError(aq.gsMsgNoSender);
splashToCtrl("toAreaCtrl");
}

for(var i=0,cQ=bhG.length;i<cQ;i++)
{
var zq=aEA[bhG[i]];
if(zq&&!zq.isDisabled())
{
zq.focus("end");
break;
}
}

return false;
}
iD++;
if(aoE<iD)
{
if(beJ.length)
{
return addrErrDlg({
sId:"Address_error",
sTitle:"\u6536\u4EF6\u4EBA\u683C\u5F0F\u9519\u8BEF",
sDesc:"\u60A8\u586B\u5199\u7684\u4EE5\u4E0B\u6536\u4EF6\u4EBA\u5B58\u5728\u683C\u5F0F\u9519\u8BEF\uFF1A",
oErrorAddrs:beJ
});






























}
if(cbm.length)
{
return addrErrDlg({
sId:"AddressQQ_error",
sTitle:"\u6536\u4EF6\u4EBA\u5730\u5740\u4E0D\u5B58\u5728",
sDesc:"\u60A8\u586B\u5199\u7684\u4EE5\u4E0B\u6536\u4EF6\u4EBA\u4E0D\u5B58\u5728\uFF1A",
oErrorAddrs:cbm
});
}

}


aq.gSendmailSubject=aq.S("subject",window).value;

}
}
catch(bj)
{
alert(bj.message)
}


try
{
var bQD=aq.S("qqgroupid",window);
if((jF=="send"||jF=="card")
&&bQD&&!bQD.disabled
&&bQD.value.indexOf("@")==-1)
{
if(jF=="card")
{
aq.showError("\u8BF7\u9009\u62E9\u4E00\u4E2AQQ\u7FA4");
changeTab("AddrTab");
aq.show(aq.S("cardTip",window),true);
window.scroll(0,0);
}
else
{
aq.showError("\u8BF7\u9009\u62E9\u4E00\u4E2AQQ\u7FA4");
}
return false;
}

if(bQD&&!aq.trim(getPageEditor().getContent(false)))
{
aq.confirmBox(
{
title:"\u5931\u8D25\u4FE1\u606F",
msg:"\u7FA4\u90AE\u4EF6\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u8BF7\u586B\u5199\u5185\u5BB9",
width:430,
onreturn:function(kI)
{
var bH=getPageEditor();
bH&&bH.focus();
}
}
);
return false;
}

if(jF=="send"&&getInputObj("mailtype").value=="vote")
{
if(aq.S("votesubject",window).value=="")
{
aq.showError("\u8BF7\u586B\u5199\u6295\u7968\u4E3B\u9898");
aq.S("votesubject",window).focus();
splashToCtrl("votesubject");
return false;
}

var aZ=aq.SN("option",window);
for(var i=0,cQ=aZ.length;i<cQ;i++)
{
if((aZ[i].value=="")&&(i<2))
{
aq.showError(["\u8BF7\u586B\u5199\u9009\u9879",i+1,"\u7684\u5185\u5BB9"].join(""));
aZ[i].focus();
splashToCtrl(aZ[i]);
return false;
}
}
}
}
catch(bj)
{
}


try
{
var Tt=aq.S("subject",window);
if(Tt.value==aq.gsMsgNoSubject)
{
Tt.value="";
}
var Ei=aq.isShow(Tt)?Tt.value:"";
if(aq.getAsiiStrLen(Ei)>240)
{
aq.showError("\u4E3B\u9898\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC7120\u4E2A\u4E2D\u6587\u5B57\u7B26");
return false;
}
iD++;
if(aoE<iD)
{
if(!goCompose.bNT&&!aq.trim(Ei)&&
(getPageId()=="compose"||getPageId()=="qfcompose")&&jF=="send")
{
aq.confirmBox(
{
msg:[
'<div class="dialog_f_t">\u60A8\u7684\u90AE\u4EF6\u6CA1\u6709\u586B\u5199\u4E3B\u9898\u3002</div>',
'<div class="dialog_f_d" style="font-size:14px;">\u60A8\u786E\u5B9A\u7EE7\u7EED\u53D1\u9001\uFF1F</div>'
].join(""),
width:430,
onreturn:function(kI)
{
if(kI)
{
setTimeout(
function()
{
goCompose.bNT=true;
asA(iD);
},
100
);
}
}
}
);
return false;
}
}
}
catch(bj)
{
}


try
{
var Kv=QMAttach.checkAttachWarnningType();
if(Kv.length!=0)
{
aq.msgBox("\u60A8\u7684\u9644\u4EF6\u4E2D\u5305\u542B\u53EF\u6267\u884C\u6587\u4EF6\uFF1A"+Kv.join(", ")+"\uFF0C\u51FA\u4E8E\u5B89\u5168\u6027\u8003\u8651\uFF0C\u90AE\u4EF6\u4E2D\u4E0D\u5141\u8BB8\u5305\u542B\u6B64\u7C7B\u9644\u4EF6","dialog",true,0,"\u5931\u8D25\u4FE1\u606F");
return false;
}
var bpv=QMAttach.getAttachSize(),
brG=QMAttach.getAttachLimit(),
dFl=QMAttach.getAttachLimitByAddr();




if(dFl>0&&dFl<brG&&(jF!="save"&&tz!="savedraft"&&tz!="autosave")&&!goCompose.fns)
{
if(bpv*1.3>dFl)
{

iD++;

if(aoE<iD)
{
QMAttach.showAttachLimitByAddr(dFl,function(Wt)
{
if(Wt)
{
setTimeout(
function()
{

asA(iD);
goCompose.fns=true;
});
}

});
return false;
}
}
}
else
{
if(bpv>brG)
{
QMAttach.showAttachLimit(brG);
return false;
}
}


var beU=false,
ali=aq.QMAddress&&aq.QMAddress.getGroupMail()?"":"none";


for(var bk in aEA)
{
if(beU&&ali)
{
break;
}

if(!aEA[bk])
{
continue;
}

var bP=aEA[bk].get("json");
for(var i=0,cQ=bP.length;i<cQ;i++)
{
var eH=bP[i].addr;
if(!beU
&&eH.indexOf("@vip.qq.com")==-1
&&eH.indexOf("@qq.com")==-1
&&eH.indexOf("@foxmail.com")==-1)
{
beU=true;
}

if(!ali&&aq.QMAddress.getGroupMail(eH))
{
ali=eH;
}

if(beU&&ali)
{
break;
}
}
}
goCompose.ali=ali;

if(
(cml()&&!eOQ()||evy()&&!esx())


&&tz!="autosave")
{
iD++;
if(aoE<iD)
{
aq.confirmBox(
{
sId:"confirmcheckuploading",
title:"\u6E29\u99A8\u63D0\u793A",
msg:["\u6709\u8D85\u5927\u9644\u4EF6\u8FD8\u672A\u4E0A\u4F20\u5B8C\u6BD5",tz=="savedraft"?"\uFF0C\u672A\u4E0A\u4F20\u5B8C\u7684\u9644\u4EF6\u4E0D\u4F1A\u5728\u8349\u7A3F\u4E2D\u4FDD\u5B58":"\uFF0C\u73B0\u5728\u5F3A\u884C\u53D1\u9001\u90AE\u4EF6\u5C06\u4F1A\u4E22\u5931\u9644\u4EF6"].join(""),
onreturn:function(TZ)
{
if(TZ)
{
asA(iD);
}
}
});
return false;
}

}
}
catch(bj)
{

}

iD++;
if(aoE<iD)
{
try
{
var HJ=getPageConfig().subtmpl;
if(!goCompose.bOk
&&tz!="savedraft"&&tz!="autosave"
&&HJ!="reply"&&HJ!="reply_all"
&&HJ!="forward"&&HJ!="draft"
&&HJ!="content"
&&aq.S("AttachFrame",window)&&!QMAttach.hasAttach(true))
{

var Ei=aq.isShow(aq.S("subject",window))?aq.S("subject",window).value:"";
var ci=getPageEditor().getContent(true);
var bBw=/attachment|attachments/ig;
if(!QMAttach.isUploading()
&&(Ei.indexOf("\u9644\u4EF6")!=-1
||ci.indexOf("\u9644\u4EF6")!=-1
||Ei.search(bBw)!=-1
||ci.search(bBw)!=-1))
{
aq.confirmBox(
{
msg:[
'<div style="padding:0 10px 0 0;"><b>',
'\u60A8\u7684\u90AE\u4EF6\u5185\u5BB9\u63D0\u5230\u9644\u4EF6\uFF0C\u4F46\u60A8\u53EF\u80FD\u5FD8\u8BB0\u4E86\u6DFB\u52A0\u9644\u4EF6\u3002',
'</b></div>',
'<div>',
'\u60A8\u786E\u5B9A\u7EE7\u7EED\u53D1\u9001\uFF1F',
'</div>'].join(""),
width:430,
onreturn:function(bh)
{
if(bh)
{
goCompose.bOk=true;
setTimeout(
function()
{
asA(iD);
},
100
);
}
}
}
);

return false;
}
}
}
catch(bj)
{

}
}


iD++;
if(aoE<iD)
{
var bT=getTop().S("savesendbox",window);
if(getPageId()=="compose"&&bT&&!bT.checked)
{
aq.QMAjax.send(aq.T("/cgi-bin/tip?sid=$sid$&args=savesendbox,28&t=tipcheck").replace(
{
sid:aq.getSid()
}),
{
method:"GET",
timeout:500,
onload:function(bh,bO)
{
if(bh)
{
if(bO=="1")
{
aq.confirmBox(
{
title:"\u63D0\u793A",
msg:
[
'<div class="dialog_f_t">\u60A8\u6240\u53D1\u51FA\u7684\u90AE\u4EF6\u5C06\u4E0D\u4FDD\u5B58\u5230\u201C\u5DF2\u53D1\u9001\u201D\u4E2D</div>',
'<div class="dialog_f_d">',
'<div style="margin-bottom: 6px; margin-top: 5px;">\u8FD9\u53EF\u80FD\u662F\u60A8\u5728\u8BBE\u7F6E\u4E2D\u53D6\u6D88\u4E86\u8BE5\u9009\u9879\uFF0C\u60A8\u53EF\u4EE5\uFF1A</div> ',
'<input type="radio" checked="checked" id="csavesendbox" value="1" name="cssb"><label for="csavesendbox">\u8BBE\u7F6E\u4E3A\u81EA\u52A8\u4FDD\u5B58\uFF0C\u5E76\u7EE7\u7EED\u53D1\u4FE1</label><br>',
'<input type="radio" value="0" name="cssb" id="cdonotsavesendbox"><label for="cdonotsavesendbox">\u4E0D\u4FDD\u5B58\uFF0C\u7EE7\u7EED\u53D1\u4FE1</label>',
'</div>'
].join(""),

onreturn:function(bh)
{
if(bh)
{

if(this.S("csavesendbox").checked)
{
bT.checked=true;

aq.QMAjax.send(aq.T("/cgi-bin/setting1?sid=$sid$&savesendbox=0&fun=submit&loc=send,save,1,0").replace(
{
sid:aq.getSid()
}),
{
method:"POST",
timeout:500,
onload:function()
{
aq.goUserInfo.reset();
}
});

}
else
{
aq.ossLog("realtime","all","stat=noting&loc=send,save,0,0");
}
setTimeout(
function()
{
asA(iD);
});
}
}
});
return false;
}
else
{
setTimeout(
function()
{
asA(iD);
});
}
}
else
{
setTimeout(
function()
{
asA(iD);
});
}
}
}
);
return false;
}
}


iD++;
if(aoE<iD)
{
try
{

}
catch(bj)
{
}

}
































































































































return true;
}







function doProcessSafe(tz,jF,acj)
{



try
{
acj();
}
catch(bj)
{
var ao=arguments.callee,
jm=getPageId()=="note"?"\u65E5\u5FD7\u4FDD\u5B58\u5931\u8D25 ":"\u90AE\u4EF6\u53D1\u9001\u5931\u8D25 ";

if(bj.dispmode=="dialog")
{
getTop().msgBox(bj.message,"dialog",true,0,jm);
}
else if(jF=="voice"||jF=="send"
||(jF=="card"&&tz==""))
{
getTop().msgBox(
getTop().T([
'<div>',
'\u5931\u8D25\u539F\u56E0\uFF1A$desc$ ',
'<div style="display:$cache$">\u5931\u8D25\u7801\uFF1A$code$ ',
'(<a href="http://support.qq.com/cgi-bin/beta1/titlelist_simple?pn=0&order=3&fid=350" target="_blank" title="\u628A\u5931\u8D25\u539F\u56E0\u4E0E\u5931\u8D25\u7801\u53D1\u5230\u90AE\u7BB1\u53CD\u9988\u610F\u89C1\uFF0C\u6211\u4EEC\u4F1A\u5C3D\u5FEB\u5904\u7406\uFF01">\u62A5\u544A\u5931\u8D25\u539F\u56E0</a>)',
'</div>',
'</div>',
'<div style="color:red;display:$cache$">',
'\u8BF7\u5C1D\u8BD5\u6E05\u7A7A\u6D4F\u89C8\u5668\u7F13\u5B58\uFF0C\u7136\u540E\u91CD\u65B0\u8FDB\u5165\u90AE\u7BB1\u3002',
'<a href="http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=7&&no=339" target="_blank">\u67E5\u770B\u5E2E\u52A9</a>',
'</div>']).replace({
desc:bj.message,
code:ao.uj,
cache:bj.clrcache==false?"none":""
}),"dialog",true,0,jm
);
getTop().recodeComposeStatus(4,null,[ao.uj,
encodeURIComponent(bj.message)].join('|'),true);
}
else
{
getTop().showError(bj.message);
}

getTop().disableAll(false);
enableAutoSave();
}
}

function isUseBackgroundSend()
{
var aiV=QMAttach.getExistList(),
ath=getPageId(),
fOJ=aiV.length?aiV[aiV.length-1].sUploadMode:"";
return(("compose"==ath||"group"==ath)

&&"1"==getTop().gbBackGroundSend);
}



function composeFormSubmit(nj,tz)
{
if(!nj)
{
return;
}
var fBK,
aq=getTop(),
abq=arguments.callee,
ath=getPageId(),
cTT=function()
{
if(nj.verifycode)
{
nj.verifycode.value="";
}
if(nj.verifycode_cn)
{
nj.verifycode_cn.value="";
}
},
eQu=function()
{
return tz=="savedraft"?"save":nj.actiontype.value;
};


aq.gfComposeFail=function(bOG)
{
if(bOG=="-1")
{
aq.loadJsFile("$js_path$libcompose181b8c.js",false,aq.document);
}
aq.showProcess(1);
abq(nj)
};



if("save"!=nj.actiontype.value&&isUseBackgroundSend())
{
doProcessSafe.uj=85;
setNeedCloseConform(false);
aq.showProcess(0);

aq.BackGroundSend.send(nj,ath,getToBeReloadInfo());

cTT();

isNeedToClearMLCache()
&&aq.QMMLCache.upVer();
}
else
{

aq.waitFor(
function()
{
return aq.ComposeLib;
},
function(bh)
{
if(!bh)
{
abq.bri=abq.bri||0;
abq.bri++;
aq.osslogAjaxCompose(13,abq.bri);
if(abq.bri>2)
{
aq.showError('\u53D1\u4FE1\u6A21\u5757\u52A0\u8F7D\u5931\u8D25 <a onclick="gfComposeFail(-1);" nocheck="true">[\u8BF7\u91CD\u8BD5]</a>',-1);
}
else
{
aq.loadJsFile("$js_path$libcompose181b8c.js",false,aq.document);
abq(nj);
}
return;
}

var drl=aq.ComposeLib,
aTw=drl.getFormData(nj),
cdK=nj.getAttribute("action")||"",
bVd=aTw.s,
aQo=eQu();

if(aQo=="save")
{

delete aTw.secmailcode;
}

debug("path"+cdK);

drl.send(
aq.extend(
aTw,
{
cginame:cdK.replace(/^.*?\/cgi-bin\/(\w+).*$/gi,"$1"),
ef:"js",
t:"compose_send.json"
}
),{
sType:"nil",
nTimeout:2*60*1000,
sSendingDesc:aq.TE([
'$@$if($type$=="note")$@$',
'\u8BB0\u4E8B\u6B63\u5728\u4FDD\u5B58\u4E2D',
'$@$else if($type$=="urlcreator")$@$',
'\u7F51\u9875\u6B63\u5728\u4FDD\u5B58\u4E2D',
'$@$else if($sendtime$==1)$@$',
'$@$if($s$=="comm")$@$',
'\u90AE\u4EF6\u6B63\u5728\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1',
'$@$else if($s$=="card")$@$',
'\u8D3A\u5361\u6B63\u5728\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1',
'$@$else if($s$=="postcard")$@$',
'\u660E\u4FE1\u7247\u6B63\u5728\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1',
'$@$else if($s$=="video")$@$',
'\u89C6\u9891\u6B63\u5728\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1',
'$@$else if($s$=="voice")$@$',
'\u97F3\u9891\u6B63\u5728\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1',
'$@$endif$@$',
'$@$else$@$',
'$@$if($handleString$=="send")$@$',
'\u90AE\u4EF6\u6B63\u5728\u53D1\u9001\u4E2D',
'$@$else if($s$=="group")$@$',
'\u90AE\u4EF6\u6B63\u5728\u4FDD\u5B58\u5230\u7FA4\u90AE\u4EF6\u8349\u7A3F\u7BB1',
'$@$else$@$',
'\u90AE\u4EF6\u6B63\u5728\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1',
'$@$endif$@$',
'$@$endif$@$',
'... [<a onclick="ComposeLib.abort();" nocheck="true" style="color:white;">\u53D6\u6D88</a>]'
]).replace({
handleString:"save"!=aQo?"send":"save",
sendtime:aTw.sendtime,
s:aTw.s,
type:getPageId()
}),
sCgiPath:cdK,
bCancelable:true,
onready:function()
{

aq.osslogAjaxCompose(8);
setNeedCloseConform(false);


},
oncomplete:function(bh,qM)
{
var sH={};

aq.disableAll(false,window);

cdK=="/cgi-bin/groupmail_send"&&aq.disableTimeSendBtn(true,window);

setNeedCloseConform(tz=="autosave"&&getPageConfig().subtmpl!="draft");

Oa(true);

setEditedAttach(false);

if(bh)
{
try
{
sH=eval("("+qM+")");
}
catch(e)
{}

aq.osslogAjaxCompose(9,sH.errcode,bVd,aQo);

if(typeof(sH.errcode)=="undefined")
{

aq.osslogAjaxCompose(12,sH.errcode,bVd,qM);
aq.showError("\u5904\u7406\u53D1\u4FE1\u72B6\u6001\u5F02\u5E38\uFF0C\u5BF9\u65B9\u53EF\u80FD\u5DF2\u6536\u5230\u6B64\u90AE\u4EF6\uFF0C\u8BF7\u786E\u8BA4 [-12]");
}
else if(+sH.errcode<0)
{

aq.recodeComposeStatus(2,null,0);

if(/<script[^>]*>(.*)?<\/script>/gi.test(sH.errmsg))
{
setNeedCloseConform(false);
var xB=aq.trim(sH.errmsg.replace(/<script[^>]*>(.*)?<\/script>/gi,""));
!(sH.errcode=="-106"||sH.errcode=="-102")&&
(xB&&xB.length>=4?aq.showError(xB):aq.showError(aq.T('\u53D1\u9001\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5 [$code$]').replace({code:sH.errcode})));
aq.globalEval(RegExp.$1);

if(sH.errcode=="-151")
{
QMAttach.missAttach(QMAttach.getInfoUid(aq.misslist));
}
else if(sH.errcode=="-161")
{
aq.showError("\u9644\u4EF6 "+aq.misslist[0].name+" \u4E0D\u5B58\u5728\u3002");
}
else if(sH.errcode=="-133")
{
aq.hiddenMsg();
aq.alertBox(
{
msg:xB,
title:"\u90AE\u7BB1\u63D0\u793A"
}
);
}
else if(sH.errcode=="-102"){
var bha=sH.errmsg.match("sVirusAttName=.*?(?=,)"),
bgL=sH.errmsg.match("sMatchRules=.*?(?=;)"),
bhF=bha&&bha[0].split('='),
bfO=bgL&&bgL[0].split('='),
aBW=bhF&&bhF[1],
aCq=bfO&&bfO[1];
aBW&&aCq&&aq.alertBox({
title:"\u75C5\u6BD2\u63D0\u9192",
msg:aq.T([
'<div class="dialog_f_t">\u60A8\u7684\u9644\u4EF6\u88AB\u68C0\u6D4B\u51FA\u542B\u6709\u75C5\u6BD2\uFF0C\u8BF7\u68C0\u67E5\u540E\u91CD\u8BD5\u3002</div>',
'<div class="dialog_f_d" style="margin-top:4px;">',
'<span class="addrtitle">\u6587\u4EF6\u540D\uFF1A</span>',
'<span class="tf" style="display:inline-block;width:242px;margin-top:-3px;vertical-a        lign:middle;">$sVirusAttName$</span>',
'<br /><span class="addrtitle">\u75C5\u6BD2\u540D\uFF1A</span>$sMatchRules$',
'</div>'
]).replace({
sVirusAttName:aBW.substr(1,aBW.length-2),
sMatchRules:aCq.substr(1,aCq.length-2)
})
});
}
else if(sH.errcode=="-106")
{
var bha=sH.errmsg.match("sVirusAttName=.*?(?=,)"),
bgL=sH.errmsg.match("sMatchRules=.*?(?=;)"),
bhF=bha&&bha[0].split('='),
bfO=bgL&&bgL[0].split('='),
aBW=bhF&&bhF[1],
aCq=bfO&&bfO[1];

aBW&&aCq&&aq.alertBox({
title:"\u75C5\u6BD2\u63D0\u9192",
msg:aq.T([
'<div class="dialog_f_t">\u60A8\u7684\u9644\u4EF6\u88AB\u68C0\u6D4B\u51FA\u542B\u6709\u75C5\u6BD2\uFF0C\u8BF7\u68C0\u67E5\u540E\u91CD\u8BD5\u3002</div>',
'<div class="dialog_f_d" style="margin-top:4px;">',
'<span class="addrtitle">\u6587\u4EF6\u540D\uFF1A</span>',
'<span class="tf" style="display:inline-block;width:242px;margin-top:-3px;vertical-align:middle;">$sVirusAttName$</span>',
'<br /><span class="addrtitle">\u75C5\u6BD2\u540D\uFF1A</span>$sMatchRules$',
'</div>'
]).replace({
sVirusAttName:aBW.substr(1,aBW.length-2),
sMatchRules:aCq.substr(1,aCq.length-2)
})
});
}

setTimeout(function()
{
setNeedCloseConform(false);
},500
);
}
else
{
aq.showError(sH.errmsg);
}
}
else
{
if(getPageId()==="urlcreator")
{
aq.showInfo("\u4FDD\u5B58\u6210\u529F");
setTimeout(function()
{
aq.goUrlTopWin("http://url.qmail.com/"+aTw.id);
},
3000
);
}
else if(getPageId()!="note")
{
if(aTw.sendtime==1)
{
aq.showInfo("\u4FDD\u5B58\u6210\u529F");
}
else
{
aq.showInfo("\u53D1\u9001\u6210\u529F");
}
}


aq.ComposeResp.handle(
{
sType:aQo,
sModule:getPageId(),
oPostData:aTw,
oRespData:sH,





fReportError:function()
{

aq.osslogAjaxCompose(11,sH.errcode,bVd,aQo);
}
}
);

try
{
isNeedToClearMLCache()
&&aq.QMMLCache.upVer();
}
catch(e)
{
aq.osslogAjaxCompose(17);
}
}
}
else
{

aq.osslogAjaxCompose(10,qM=="abort"?1:2,bVd,aQo);

aq.recodeComposeStatus(qM=="abort"?3:2,null,0);


if(qM=="abort")
{
aq.hiddenMsg()
}

else
{
aq.showError('\u53D1\u9001\u5931\u8D25 <a onclick="gfComposeFail();" nocheck="true">[\u8BF7\u91CD\u8BD5]</a>',-1);
}

}
}
}
);

cTT();
},
200
);
}

doProcessSafe.uj=90;

}










function doProcess(tz,jF,bmn,bOi,
anX)
{

getTop().osslogAjaxCompose(7);
doProcessSafe(tz,jF,function()
{
doProcessSafe.uj=00;
if(getTop().isDisableCtl("sendbtn",window))
{
return;
}
doProcessSafe.uj=10;
if(!doProcessCheck(tz,jF,anX||0,function(bCj)
{
doProcess(tz,jF,bmn,
bOi,bCj
);
}))
{
return;
}
doProcessSafe.uj=20;
disableAutoSave();
var ze=aog();
ze.target="actionFrame";
doProcessSafe.uj=25;
var ci="",
bH=getPageEditor();

if(!bH)
{
if(window.GetSendContent)
{
ci=window.GetSendContent(tz,jF,
bmn,bOi,anX
);
}
else
{
throw{message:"\u65E0\u6CD5\u83B7\u53D6\u7F16\u8F91\u5668"};
}
}
else
{
ahf("100%");
if(bH.getContentTags("sign")[0]&&bH.getContentTags("sign").length>=1)
{

var bHt=bH.getContentTags("sign"),
bnD=bH.getEditDoc(),
esB=tz===""&&jF==="send",
eoC=tz==="savedraft"&&jF==="save",
bXL,cOn;
for(var i=bHt.length-1;i>=0;i--)
{


if(esB||(eoC&&bHt[i].getAttribute("nreadytime")!=bH.getReadyTimeStamp()))
{
bXL=bHt[i].innerHTML;

getTop().insertHTML(bHt[i],"afterEnd",bXL);
getTop().removeSelf(bHt[i]);
}







}
}


if(tz!="autosave")
{
var ma=true,
bH=getPageEditor();
if(bH.isRunningShareLink()||bH.hasTODOShareLink())
{
doProcessSafe.uj=28;
getTop().showError("\u8BF7\u5728\u7F51\u76D8\u6587\u4EF6\u6DFB\u52A0\u5B8C\u6210\u540E\u518D\u53D1\u9001\u90AE\u4EF6");
ma=false;
}
else if(bH.shareLinkErrorCnt())
{
getTop().confirmBox({
msg:bH.shareLinkErrorCnt()+" \u4E2A\u7F51\u76D8\u6587\u4EF6\u6DFB\u52A0\u5931\u8D25\uFF0C\u5C06\u4ECE\u6B63\u6587\u4E2D\u5220\u9664\u3002\u60A8\u786E\u5B9A\u7EE7\u7EED\u53D1\u9001\uFF1F",
onreturn:function(bh)
{
doProcessSafe.uj=29;
if(bh)
{
bH.rmNetDiskAction();
doProcess(tz,jF,bmn,bOi,anX);
}
}
})
ma=false;
}
if(!ma)
{
getTop().cancelDoSend();
return false;
}
}
doProcessSafe.uj=30;

if(tz!="savedraft"&&jF!="save")
{
bH.rmNetDiskID();
}

ci=bH.getContent();

if(typeof(getTop().getMainWin().filteraudio)=="function"&&getPageId()=="note")
{
ci=getTop().getMainWin().filteraudio(ci);
}




bH.getContentType()=="text"
&&ci.substring(ci.length-4,ci.length)=="<br>"
&&(ci=ci.substring(0,ci.length-4));

ahf(getTop().gbIsIE?"auto":"100%");

try
{

getInputObj("content_compare",null,true).value=ci;
}
catch(bj)
{
}

ci=getTop().filteSignatureTag(filterSourceContent(oClipImg.filter(ci)),"FILTE<:");
}
if(ci==null)
{
throw{message:"\u65E0\u6CD5\u83B7\u53D6\u7F16\u8F91\u5668\u5185\u5BB9"};
}
doProcessSafe.uj=31;

if(jF=="voice")
{
ci=CombineVoiceMail(ci,getTop().S("voiceid",window).value,
getTop().S("voicename",window).value
);
DisableRecord();
}
doProcessSafe.uj=32;
if(bH&&bH.getBgMusicInfo())
{
ci=dwG(ci,bH
.getBgMusicInfo());
}
doProcessSafe.uj=32;

jF!='save'&&getTop().audioStop();
doProcessSafe.uj=33;
getTop().disableAll(true,window);
doProcessSafe.uj=34;
tz!=null?ze.t.value=tz:null;
ze.actiontype.value=jF;
getTop().isSaveData=false;

doProcessSafe.uj=35;
function ete()
{

var bDA="",cTG="",dsx=false,
bBj=0,
dzf=new RegExp("bmp|doc|eml|exl|gif|html|jpg|mov|pdf|ppt|psd|rar|swf|tu|txt"),
duk=getTop().T(
[
'<div style="padding:10px 0;font-size:12px;">',
'<div title="%filename%&#10;&#13;\u6587\u4EF6\u5927\u5C0F\uFF1A%filesize%&#10;&#13;\u5230\u671F\u65F6\u95F4\uFF1A%expiredtimeString%" class="bigatt_bt">',
'<div style="float:left;margin:2px 8px 0 0;">',
'<a target="_blank" href="%downloadlink%"><img border="0" src="http://res.mail.qq.com/zh_CN/htmledition/images/fj/fu_%filetype%.gif"/></a>',
'</div>',
'<div class="name_big" >',
'<span class=\'qqmailbgattach\' expiretime="%expiretime%" downloadlink="%downloadlink%">',
'<a style="color:#000;" target="_blank" href="%downloadlink%">%filename%</a><span style="color:#A0A0A0;"> (%filesize%, %expiredtimeDesc%)</span>',
'</span>',
'<div class="down_big">',
'<a target="_blank" href="%downloadlink%">\u8FDB\u5165\u4E0B\u8F7D\u9875\u9762</a><span style="display:none;">\uFF1A%downloadlink%</span>',
'</div>',
'</div>',
'</div>',
'</div>'],"%"
);
function cSw(aYD)
{
if(getTop().S(aYD,window))
{
var os=getTop().S(aYD,window).childNodes,eOv=aYD=="exist_BigAttach"?true:false;
for(var i=os.length-1;i>=0;i--)
{


if(os[i].nodeType==1&&getTop().isShow(os[i])&&!getTop().GelTags("div",os[i]).length)
{
var aBU="",
nl=getTop().GelTags("span",os[i])[1],
chu=getTop().GelTags("a",os[i])[0].href,
bGa=nl.getAttribute("expiretime"),
cA=nl.firstChild,
fC=(cA.innerText||cA.textContent||""),
Og=fC.split(".").pop(),
atk=new RegExp("\\((.+)\\)","ig").exec(nl.lastChild.innerHTML)[1],

aTs=getTop().formatDate(
new Date(parseInt(bGa)*1000),
"$YY$\u5E74$MM$\u6708$DD$\u65E5 $hh$:$mm$"
);

if(!dzf.test(Og))
{
Og="qita";
}

if(bH&&bH.getContentType()=="text")
{
aBU+=(nl.innerText||nl.textContent)
+(aTs!="NaN"?" (\u6709\u6548\u65F6\u95F4\u5230: "
+aTs+")":"")+"\n\u94FE\u63A5: "
+chu+"\n\n";

}
else
{
aBU+=duk.replace({
filename:fC,
filesize:atk,
filetype:Og,
expiretime:bGa,
expiredtimeString:(aTs!="NaN"
?aTs
:""),
expiredtimeDesc:(bGa=="-1"
?"\u65E0\u9650\u671F"
:aTs+" \u5230\u671F"),
downloadlink:chu
});
}
if(!eOv)
{

bDA+=aBU;

}

cTG+=aBU;
bBj++;
}
}

if(os.length>0&&getInputObj("newrcpt",null,false).value)
{
dsx=true;
}

}

}
cSw("BigAttach");
cSw("exist_BigAttach");

if(bBj>0&&ze.bigattachcnt)
{
ze.bigattachcnt.value=bBj;
}
doProcessSafe.uj=50;
function dkJ(aYD,gv)
{
if(gv)
{
var dch=getTop().T(
[
'<div id=QQMailBigAttach style="padding: 2px; margin-bottom: 15px;background-color:#E0ECF9;width:auto;font-family:Verdana,Arial,Tahoma;font-size:14px;" >',
'<hr style="display:none;" />',
'<div style="text-align:left;padding: 6px 0pt 10px 6px;">',
'<b style="font-size: 14px;"><img border="0" align="absmiddle" style="margin-right:4px;" src="http://res.mail.qq.com/zh_CN/htmledition/images/icon_att.gif"/>\u4ECE%domain%\u90AE\u7BB1\u53D1\u6765\u7684\u8D85\u5927\u9644\u4EF6</b>',
'</div>',

'<div style="padding: 0pt 8px 6px 12px;background:#fff;">',
'<div style="clear:both;" >%bigattachlist%</div>',
'</div>',
'</div>'],"%"
);
var cjZ="";
var hg=getTop().getDomain()=="qq.com"?"QQ":"foxmail.com";
var dtO=bH
&&bH.getContentType()=="text";

if(dtO)
{
cjZ="\u4EE5\u4E0B\u6587\u4EF6\u901A\u8FC7"+hg+"\u90AE\u7BB1\u7684\u4E2D\u8F6C\u7AD9\u53D1\u7ED9\u60A8\u3002\u4FDD\u5B58\u65F6\u95F4\u6709\u9650\u5236\uFF0C\u8BF7\u53CA\u65F6\u63D0\u53D6\u3002";
getInputObj(aYD,null).value="\n\n\n"+new Array(60).join("-")+"\n"
+cjZ+"\n"+gv;
}
else
{
getInputObj(aYD,null).value=dch.replace(
{
domain:hg,
bigattachlist:gv
}
);
}
}
else
{
getInputObj(aYD,null).value="";
}
}

dkJ("bigattachcontent",bDA);


dsx&&dkJ("replybigattachcontent",cTG);
};


function cNr()
{
doProcessSafe.uj=60;
QMAttach.setUpAttInput();
doProcessSafe.uj=65;
ete();
doProcessSafe.uj=70;

ci=getTop().fixNonBreakSpace(ci);
if(QMCharCode.hasNonGbkChar(ci))
{
bmn=true;
getInputObj("sendcharset").value="utf-8";
}
ze.content.value=ci;
doProcessSafe.uj=71;



if(jF=="voice"||jF=="send"
||(jF=="card"&&tz==""))
{
doProcessSafe.uj=72;
if(jF=="card")
{
if(!CheckHasSetCard())
throw{
message:getTop().gsMsgNoCard,
clrcache:false
};
ComposeCard(ci);
}

ze.actiontype.value="send";
doProcessSafe.uj=73;
if(getPageId()=="note")
{
getTop().showProcess(1,1,"\u8BB0\u4E8B\u4FDD\u5B58\u4E2D");
}
else
{
var dmU=[
"<img src='",getTop().getPath("image"),
"newicon/a_send.gif' width='14px' height='14px' align='absmiddle'>&nbsp;",
getTop().gsMsgSend
].join("");

getTop().showProcess(1,false,dmU);
}
doProcessSafe.uj=74;
if(getPageId()!="note"
&&ze.action.indexOf("/cgi-bin/compose_send")!=-1)
{
getTop().gSendTimeStart=new Date();

try
{



var aiV=QMAttach.getExistList(),
dae=
{
cgitm:getTop().g_cgiTimeStamp||0,
clitm:getTop().g_clientTimeStamp||0,
comtm:getTop().gSendTimeStart.valueOf(),



logattcnt:aiV.length,
logattsize:QMAttach.getAttachSize(),
logattmethod:aiV.length?aiV[aiV.length-1].sUploadMode:""
};
for(var k in dae)
{
var bT=document.createElement("input");
bT.type="hidden";
bT.name=k;
bT.value=dae[k];
ze.appendChild(bT);
}
}
catch(e)
{

}
}
doProcessSafe.uj=75;
}
else
{
getTop().isSaveData=true;
if(tz=="savedraft")
{
if(jF=="card")
{
if(!CheckHasSetCard())
{
throw{
message:getTop().gsMsgNoCard
};
}

ComposeCard(ci);
}
getTop().showProcess(1,1,getTop().gsMsgAutoSave);
}
else
{
getTop().showProcess(1,1,getPageId()=="note"
?"\u8BB0\u4E8B\u6B63\u5728\u88AB\u4FDD\u5B58"
:getTop().gsMsgAutoSave);
}
}
doProcessSafe.uj=80;

getTop().isUseActiveXCompose=false;
if(getTop().gbIsOpera)
{

var bT=document.createElement("input");
bT.type="hidden";
bT.name="random";
bT.value=Math.random();
ze.appendChild(bT);
}

if(getPageId()=="groupsms")
{
var fI=getTop(),
bFU=bH.getContent().toLowerCase(),
bEa=bH.getContent(true),
aUk=fI.trim(bEa.replace(/&nbsp;/ig,''));

if(!aUk&&bFU.indexOf("<img")<0)
{

fI.showError("\u7FA4\u90AE\u4EF6\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u8BF7\u586B\u5199\u5185\u5BB9");
fI.disableCtl('sendbtn',false,window);
return false;
}
else if(!aUk&&bFU.indexOf("<img")>=0&&!ze.subject.value)
{
ze.subject.value="\u56FE\u7247";
}
else if(aUk)
{

ze.subject.value='';
}
}

if(tz!="autosave"&&jF!="save"&&getTop().QMAddress)
{
getTop().QMAddress.setExpired(0);
}

composeFormSubmit(ze,tz);
}

function ckV()
{
doProcessSafe(tz,jF,function()
{







cNr();

});
}

function bLF(dnm)
{
doProcessSafe(tz,jF,function()
{
doProcessSafe.uj=50;
if(!dnm&&QMAttach.hasUploadError())
{
return getTop().confirmBox({

msg:jF=="save"?"\u4E0A\u4F20\u9644\u4EF6\u51FA\u9519\uFF01\n\u60A8\u786E\u5B9A\u8981\u4FDD\u5B58\u8FD9\u5C01\u7F3A\u5931\u9644\u4EF6\u7684\u90AE\u4EF6\u5417\uFF1F":"\u4E0A\u4F20\u9644\u4EF6\u51FA\u9519\uFF01\n\u60A8\u786E\u5B9A\u8981\u53D1\u9001\u8FD9\u5C01\u7F3A\u5931\u9644\u4EF6\u7684\u90AE\u4EF6\u5417\uFF1F",
onreturn:function(bh)
{
doProcessSafe.uj=51;
if(bh)
{
ckV();
}
else
{
getTop().cancelDoSend();
}

}
})

}
doProcessSafe.uj=52;
ckV();
});
}

function drB(ik)
{
ik==-1?
getTop().showProcess(1,1,"\u9644\u4EF6\u4E0A\u4F20\u4E2D","",false):
getTop().showProcess(2,1,ik,"\u9644\u4EF6\u4E0A\u4F20\u4E2D",false);
}

doProcessSafe.uj=40;

if(tz=="autosave")
{
bLF(true);
}
else
{
if(QMAttach.isUploading())
{
QMAttach.onprogress=drB;
QMAttach.onfinish=bLF;
}
else
{
bLF()
}
}
}
);
}






function QH(ap)
{
var aY=location.href;

if(ap.keyCode==10||ap.keyCode==13
||ap.keyCode==83)
{
if(((ap.keyCode!=83&&ap.ctrlKey)
||(ap.keyCode==83&&ap.altKey))&&aY.indexOf('compose_postcard_dlg')<0)
{
getTop().fireMouseEvent(getTop().SN("sendbtn",window)[0],"click");
}
else if(ap.keyCode==83&&ap.ctrlKey)
{

getTop().preventDefault(ap);
getTop().fireMouseEvent(getTop().SN("savebtn",window)[0],"click");

}
else if(ap.keyCode==10||ap.keyCode==13)
{
var lK=ap.srcElement||ap.target;
if(lK.id=="subject"||lK.id=="to"||lK.id=="cc"
||lK.id=="bcc")
{
return false;
}
}
}
else if(ap.ctrlKey||ap.metaKey)
{
if(ap.keyCode==83||ap.keyCode==115)
{
if(isEnableAutoSave()&&aY.indexOf("=compose_")==-1
&&aY.indexOf("=compose")!=-1)
{
doProcess('savedraft','save');
}
}
else if((ap.keyCode==86||ap.keyCode==118)
&&aY.indexOf("t=compose")!=-1
&&aY.indexOf("_card")==-1&&!ap.cancelBubble)
{
QMAttach.cOY&&QMAttach.cOY.getClipBoardFiles(ap);
}
}
else
{
setNeedCloseConform(true);
}

return true;
}






function czq(ap)
{
if(getTop().gnIEVer==6||getTop().gnIEVer==7||getTop().gnIEVer==8)
{
if(ap.ctrlKey&&ap.keyCode==83)
{
getTop().preventDefault(ap);
getTop().fireMouseEvent(getTop().SN("savebtn",window)[0],"click");
}
}
}



function initFileTransporter(boG)
{
var aq=getTop(),
bfR="ftnupload_attach",



ewi=aq.S("bigAttachLink",aq.getMainWin()),
eqf=aq.attr(ewi,"ftnv2"),
bST=eqf=="true"?true:false;

var aY=aq.T("/cgi-bin/ftnExs_files?sid=$sid$&t=exs_attachment&smethod=new&ftntype=1&listtype=attach$autoselect$").replace({
sid:aq.getSid(),
autoselect:boG?"&autoselect=true":""
}),
DY=aq.T("/cgi-bin/readtemplate?sid=$sid$&t=ftn_bigattach$autoselect$").replace({
sid:aq.getSid(),
autoselect:boG?"&cmd=bigattachUpload,1,1":""
});


aq.QMDialog(bfR,"max")||new aq.QMDialog({
sId:bfR,
sTitle:"<span class='attach_add_title'>\u6DFB\u52A0\u8D85\u5927\u9644\u4EF6</span>",
bMin:true,
nWidth:bST?467:440,
nHeight:bST?476:399,
sUrl:bST?DY:aY,
onbeforeclose:function()
{
if(bST&&this.getDialogWin()["_msg"])
{
this.getDialogWin()["_msg"]("/FtnUI/Dlg_close");
var ma=this.getDialogWin()["_bRet"];
return typeof(ma)=="undefined"?true:ma;
}
return true;
}
});
getTop().ftSendStatic("1002");
}

function openAttachFolder()
{
var aq=getTop(),
aY=[
'/cgi-bin/attachfolder?topmails=0&s=search&folderid=attach&hflag=attach&action=list&page=0&t=attachfolder_dlg&subject=&sender=&receiver=&searchmode=attach&advancesearch=0&showattachtag=1&fnviewtype=cell&nocheckframe=true&sid=',aq.getSid()
].join(''),
bYn="DEF_ATTACH_FOLDER_SELECT";
aq.setGlobalVarValue(bYn,{});
new aq.QMDialog({
sId:"attachFolderDlg",
sTitle:"\u6536\u85CF\u7684\u9644\u4EF6",
nWidth:467,
nHeight:aq.gbIsIE?431:426,
sUrl:aY,
onclose:function()
{
var ao=this,
bWO=aq.getGlobalVarValue(bYn);
if(bWO)
{
var av=bWO,



aE;
for(var k in bWO)
{
if(aE=bWO[k])
{
var cJK=QMAttach.bsX.addFile({
sName:aE.name,
nSize:+aE.size,
sStatus:"ready",
mailid:aE.mailid,
attachid:aE.attachid,
attachname:aE.name,
editname:aE.editname,
fileextenal:aE.ext,
filebyte:aE.size
});

cJK.cE=[{
mailid:aE.mailid,
attachid:aE.attachid,
attachname:aE.name,
editname:aE.editname,
fileextenal:aE.ext,
filebyte:aE.size
}];
cJK.upload=function()
{
QMAttach.attrUpload(QMAttach.bsX,this);
};

QMAttach.oFileUploadMgr.oCfg.onselect.call(QMAttach.oFileUploadMgr,[cJK],"attfld");
}
}

}
aq.setGlobalVarValue(bYn,{});
}
});
}































function showInstallActiveXDialog(aC)
{
var afV=getTop().detectActiveX(aC=="filetransport"?3:0);

if(aC=="failpaste")
{
getTop().showError("\u6B64\u6D4F\u89C8\u6A21\u5F0F\u4E0B\u53EA\u652F\u6301\u76F4\u63A5\u7C98\u8D34\u6587\u672C\u6570\u636E");
return;
}

function gl(Ke,lV)
{
var iy=lV==null?true:lV;
getTop().E(Ke.split(","),function(aM)
{
var fB=getTop().QMDialog("activexDialog");
var aB=fB&&fB.S(aM);
if(aB)
{
getTop().show(aB,iy);
}
}
);
}

function nm(Ke)
{
gl(Ke,false);
}

function aMc(mq)
{
return[
afV?"update":"setup",
getPageId(),
mq,
{
"paste":2,
"filetransport":3,
"drag":4
}[aC]||1
].join(",");
}

function Al()
{
var Wt=false
if(getTop().gbIsMac)
{
Wt=getTop().detectActiveX(0,2,null,Math.random());

}
else
{
Wt=getTop().detectActiveX(0,2);
}
if(Wt)
{

var bmT={
"ico_attbig_disabled":"ico_attbig",
"ico_screensnap_disable":"ico_screensnap"
},
Hk=getTop().SN("activexControlBtn",window);

for(var i=Hk.length-1;i>=0;i--)
{
var jh=bmT[Hk[i].className];
if(jh)
{
getTop().setClass(Hk[i],jh);
}
}

if(getPageEditor())
{
getPageEditor().updateToolBarUI("ScreenSnap");
}






return true;
}
return false;
}

function OY()
{

getTop().QMDialog("activexDialog","close");
focusPageEditor(0);






























}



function eDl()
{
var aq=getTop(),fB=aq.QMDialog("activexDialog");
if(fB)
{
getTop().QMDialog("activexDialog","close");



}


getTop().getActionWin().location="http://snip.qq.com/download";
}
function dWU()
{

nm("snipcheck");
gl("snipchecking");

setTimeout(function()
{



if(Al())
{
getTop().QMDialog("activexDialog","close");
}
else
{
getTop().QMDialog("activexDialog").S("snipcheck").innerHTML="\u91CD\u65B0\u68C0\u6D4B";
gl("snipFail,snipcheck");
nm("snipMsg,snipchecking");
}
},
500
);

}

function vK()
{
var bk=getTop().gbIsIE?"IE":"FF";
if(!getTop().gbIsIE&&!getTop().QMAXInfo.mbAblePlugin)
{

nm("setupMsg,setup,onlinesetup,cancel,checkMsg,check");
gl("finish,nosupportMsg");
return;
}
getTop().getActionWin().location="/zh_CN/"+getTop().QMAXInfo.get("path")+getTop().QMAXInfo.installer("download");

nm("setupMsg,setup,onlinesetup,cancel,checkMsg,check");
gl("download,downloadMsg");
var fB=getTop().QMDialog("activexDialog");
var aB=fB&&fB.S("download");
aB&&(aB.disabled=true);

getTop().ossLog("realtime","all","stat=custom&type=INSTALL_ACTIVEX&locval="+aMc("exe"));
}

function bku()
{
if(!getTop().gbIsIE&&!getTop().QMAXInfo.mbAblePlugin)
{

nm("setupMsg,setup,onlinesetup,cancel,checkMsg,check");
gl("finish,nosupportMsg");
return;
}

getTop().goUrlTopWin(getTop().T("/cgi-bin/readtemplate?t=browser_addon&check=false&returnsid=$sid$&s=install")
.replace(
{
sid:getTop().getSid(),
loc:aMc("cab")
}
)
);
}

function wa()
{
gl("detectContainer");
nm("optContainer");

setTimeout(function()
{
nm("detectContainer,download,downloadMsg");
gl("optContainer");

if(Al())
{
nm("setup,checkMsg,check,cancel");
gl("finishMsg,finish");
}
else
{
gl("setup,checkMsg,check,cancel");
}
},
500
);

getTop().QMDialog("activexDialog").S("hasinstall").checked=false;
};


function bly()
{
nm("detectContainer,download,downloadMsg,setup,checkMsg,check,cancel");
gl("optContainer,restartMsg,finish");
}

var akh=(getTop().getDomain()=="qq.com"?"QQ":"foxmail.com"),
jm=akh+"\u90AE\u7BB1"+getTop().QMAXInfo.getTitle()+"\u5B89\u88C5\u63D0\u793A";
var kS=getTop().T([
'<div id="optContainer" class="dialog_feedback">',
'<span class="dialog_icon icon_info_b"></span>',
'<div>',
'<div id="setupMsg" class="dialog_f_c" >',
'<div class="dialog_f_t">$msg$</div>',
'<div class="dialog_f_d">\u5B89\u88C5\u540E\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u529F\u80FD\uFF1A<br>',
'$func$',
'</div>',
'</div>',
'<div id="downloadMsg" class="dialog_f_c" style="display:none;">',
'<div class="dialog_f_t">\u8BF7\u5728\u8FD0\u884C\u5B89\u88C5\u7A0B\u5E8F\u6210\u529F\u540E\u518D\u70B9\u51FB\u786E\u5B9A\u3002</div>',
'<div class="dialog_f_d">\u6CA1\u6709\u4E0B\u8F7D\u6210\u529F\uFF0C\u53EF<a href="/zh_CN$path$$exe$" target="_blank">\u70B9\u51FB\u6B64\u5904</a>\u4E0B\u8F7D ',
'<div>',
'<input style="vertical-align:middle;" type="checkbox" id="hasinstall"> ',
'<label for="hasinstall">\u6211\u5DF2\u5B89\u88C5\u7A0B\u5E8F</label>',
'</div>',
'</div>',




'</div>',
'<div id="checkMsg" class="dialog_f_c" style="display:none;">',
'<div class="dialog_f_t">\u7CFB\u7EDF\u68C0\u6D4B\u5230$control$\u8FD8\u6CA1$opt$\u6210\u529F\u3002</div>',
'<div class="dialog_f_d">\u8BF7\u786E\u5B9A\u662F\u5426\u5DF2\u5B89\u88C5\u6210\u529F\uFF0C\u82E5\u5DF2\u5B89\u88C5\u6210\u529F\u8BF7\u9009\u62E9\u518D\u6B21\u68C0\u6D4B\u3002</div>',
'</div>',
'<div id="finishMsg" class="dialog_f_c" style="display:none;">',
'<div class="dialog_f_t">$control$\u5DF2\u5B89\u88C5\u6210\u529F\u3002</div>',
'<div class="dialog_f_d">\u60A8\u53EF\u4EE5\u9A6C\u4E0A\u4EAB\u53D7$control$\u5E26\u6765\u7684\u6109\u5FEB\u4F53\u9A8C\u3002<br>',
'$func$',
'</div>',
'</div>',

'<div id="restartMsg" class="dialog_f_c" style="display:none;">',
'<div class="dialog_f_t">\u5B89\u88C5\u5B8C\uFF0C\u8BF7\u91CD\u542FFirefox\uFF0C\u5C31\u80FD\u4EAB\u53D7$control$\u5E26\u6765\u7684\u6109\u5FEB\u4F53\u9A8C\u3002</div>',
'<div class="dialog_f_d">$func$</div>',
'</div>',
'<div id="nosupportMsg" class="dialog_f_c" style="display:none;">',
'<div class="dialog_f_t">\u62B1\u6B49\uFF0CQQ\u90AE\u7BB1$control$\u6682\u65F6\u8FD8\u4E0D\u652F\u6301\u60A8\u7684\u6D4F\u89C8\u5668\u73AF\u5883\u3002</div>',
'<div class="dialog_f_d">\u656C\u8BF7\u671F\u5F85\u6211\u4EEC\u540E\u7EED\u7684\u6539\u8FDB\u3002</div>',
'</div>',
'</div>',











'</div>',
'<div id="detectContainer" style="padding-top:60px;text-align:center;display:none;">',
'<img src="$images_path$ico_loading2104474.gif" align="absmiddle" style="margin-right:20px;">',
'\u7CFB\u7EDF\u6B63\u5728\u68C0\u6D4B$control$\u662F\u5426\u5B89\u88C5\u6210\u529F...',
'</div>']);
var dvH=getTop().T([
'<input class="wd3 btn" type=button id=\'setup\' style="$setupStyle$" value=\u4E0B\u8F7D$opt$>',
'<input class="wd3 btn" style="$onlineStyle$" type=button id=\'onlinesetup\' value=\u5728\u7EBF$opt$>',
'<input class="wd1 btn" type=button id=\'download\' value=\u786E\u5B9A style="display:none;">',
'<input class="wd3 btn" type=button id=\'check\' value=\u518D\u6B21\u68C0\u6D4B style="display:none;">',
'<input class="wd1 btn" type=button id=\'cancel\' value=\u53D6\u6D88>',
'<input class="wd1 btn" type=button id=\'finish\' value=\u5B8C\u6210 style="display:none;">'
]);
var ela=getTop().T([
'<div id="optContainer">',
'<div class="dialog_feedback">',
'<img class="dialog_icon" style="margin:1px 14px -4px 0;" src="$images_path$snip_74x74104474.jpg" />',
'<div class="dialog_f_c" id="setupMsg" style="margin-left:84px;white-space:nowrap;">',
'<div class="dialog_f_t">\u8BF7\u5B89\u88C5Snip\u622A\u5C4F\u5DE5\u5177\uFF0C\u5B89\u88C5\u540E\u53EF\u4EE5\u5728QQ\u90AE\u7BB1\u4E2D\u4F7F\u7528\u622A\u5C4F\u529F\u80FD\u3002</div>',
'<div class="dialog_f_d">\u5982\u5DF2\u5B89\u88C5\uFF0C\u8BF7\u5728Snip\u7684\u504F\u597D\u8BBE\u7F6E\u4E2D\u5173\u8054QQ\u90AE\u7BB1\u3002</div>',











'</div>',
'</div>',
'</div>'
]),
gmZ=getTop().T([
'<div id="snipFail"  style="display:none">\u5B89\u88C5\u5C1A\u672A\u6210\u529F\uFF0C\u8BF7\u786E\u8BA4\u662F\u5426\u5DF2\u7ECF\u4E0B\u8F7D\u5E76\u6210\u529F\u5B89\u88C5Snip\u3002</div>',
'<div id="snipMsg" ><div class="b_size bold">\u68C0\u6D4BSnip\u5B89\u88C5\u72B6\u6001</div>',
'<div style="margin:5px 0 0;" class="graytext">\u4E0B\u8F7D\u5E76\u6210\u529F\u5B89\u88C5Snip\u540E\u8BF7\u68C0\u6D4B\u5B89\u88C5\u72B6\u6001\u3002</div></div >'


]);

var Hb=getTop().TE([
getTop().gbIsIE||getTop().gbIsFF?
'<input hideFocus type="button"  onmousedown="return false" unselectable="on" style="margin:2px 5px 0;" class="ico_att"/>\u62D6\u62FD\u4E0A\u4F20\u9644\u4EF6<br>':'',
'<input hideFocus type="button"  style="margin:2px 5px 0;" class="ico_attbig"/>\u8D85\u5927\u9644\u4EF6<br>',
'<input hideFocus style="background: url($images_path$/newicon/compose14a9c5.png) no-repeat 0 -120px;margin:2px 5px 0;height:16px;width:16px;padding:0;border:0;" type=button unselectable="on">\u622A\u5C4F'
]).replace({
images_path:getTop().getPath("image",true)
}),
gh=afV
?getTop().T('<b>\u60A8\u7684$mailname$\u90AE\u7BB1$controlname$$control$\u7248\u672C\u8FC7\u4F4E\uFF0C\u8BF7\u5347\u7EA7\u5230\u65B0\u7684\u7248\u672C\u3002</b>')
:getTop().T('<b>\u60A8\u8FD8\u672A\u5B89\u88C5$mailname$\u90AE\u7BB1$controlname$$control$\u3002</b>'),
uA="\u622A\u5C4F",
cS=400,
cN=210;

switch(aC)
{
case"paste":
gh=getTop().T('<b>\u60A8\u662F\u5426\u5E0C\u671B\u7C98\u8D34\u63D2\u5165\u56FE\u7247\u6216\u8005\u7C98\u8D34\u6DFB\u52A0\u9644\u4EF6\uFF1F</b><br>$mailname$\u90AE\u7BB1\u622A\u5C4F$control$\u5C06\u80FD\u5E2E\u52A9\u60A8\u89E3\u51B3\u8BE5\u95EE\u9898\u3002');
cN=230;
break;
case"filetransport":
uA="\u4E2D\u8F6C\u7AD9";
break;
case"drag":
uA="\u62D6\u62FD";
break;
}

var aq=getTop();
if(aq.gbIsMac)
{
var qL=aq.detectActiveX(0,0)&&!aq.detectActiveX(0,2),
exd="\u8BF7\u5B89\u88C5Snip",
ePU="Snip\u63A7\u4EF6\u7248\u672C\u8FC7\u4F4E\uFF0C\u8BF7\u4E0B\u8F7D\u5347\u7EA7";

kS=ela.replace(
{
title:qL?ePU:exd,
images_path:getTop().getPath("image",true)
});
jm=qL?"\u5347\u7EA7Snip":"\u5B89\u88C5Snip";
cN=cN-30;
dvH=aq.T(['<a class="btn_gray btn_space" id="snipsetup">\u4E0B\u8F7DSnip</a>',





'<a href="http://snip.qq.com#faq10" target="_blank" id="hadsetup" class="btn_gray">\u6211\u5DF2\u5B89\u88C5Snip</a>',

]);
}

new aq.QMDialog({
sId:"activexDialog",
sTitle:jm,
sBodyHtml:kS.replace({
control:getTop().QMAXInfo.getTitle(),
images_path:getTop().getPath("image",true),
msg:gh.replace(
{
control:getTop().QMAXInfo.getTitle(),
mailname:akh,
controlname:uA
}
),


setupStyle:getTop().QMAXInfo.installer("download")?"":"display:none;",
onlineStyle:getTop().QMAXInfo.installer("online")?"":"display:none;",
opt:afV?"\u5347\u7EA7":"\u5B89\u88C5",
func:Hb,
path:getTop().QMAXInfo.get("path"),
exe:getTop().QMAXInfo.installer("download")
}),
sFootHtml:dvH.replace({
control:getTop().QMAXInfo.getTitle(),
images_path:getTop().getPath("image",true),
msg:gh.replace(
{
control:getTop().QMAXInfo.getTitle(),
mailname:akh,
controlname:uA
}
),


setupStyle:getTop().QMAXInfo.installer("download")?"":"display:none;",
onlineStyle:getTop().QMAXInfo.installer("online")?"":"display:none;",
opt:afV?"\u5347\u7EA7":"\u5B89\u88C5",
func:Hb,
path:getTop().QMAXInfo.get("path"),
exe:getTop().QMAXInfo.installer("download")
}),



onload:function()
{
var cv=this;
aq.addEvent(cv.S("setup"),"click",vK);
aq.addEvent(cv.S("snipsetup"),"click",eDl);
aq.addEvent(cv.S("snipcheck"),"click",dWU);
aq.addEvent(cv.S("onlinesetup"),"click",bku);
aq.addEvent(cv.S("download"),"click",(getTop().gbIsFF?bly:wa));
aq.addEvent(cv.S("check"),"click",wa);
aq.addEvent(cv.S("cancel"),"click",OY);
aq.addEvent(cv.S("hadsetup"),"click",OY);
aq.addEvent(cv.S("finish"),"click",OY);
aq.addEvent(cv.S("hasinstall"),"click",function()
{
cv.S("download").disabled=!cv.S("hasinstall").checked;
}
);

},
onshow:function()
{
if(this.S("setup"))
{
this.S("setup").focus();
}
}
});


if({
"compose":true,
"card":true,
"note":true
}[getPageId()])
{
autoSave(true,null);
}
}






function initSendTimeInput(ckG,vV)
{
var Du=new Date();

var dB=getTop().trim(ckG.replace(/\D/ig," ").replace(/ +/ig," "))
.split(" ");
var uz=Du.getFullYear();

if(dB[0]=="")
{

var dB=getTop().trim(ckG).split("\u6708");
var fl=
{
'\u6B63':1,
'\u4E00':1,
'\u4E8C':2,
'\u4E09':3,
'\u56DB':4,
'\u4E94':5,
'\u516D':6,
'\u4E03':7,
'\u516B':8,
'\u4E5D':9,
'\u5341':10,
'\u5341\u4E00':11,
'\u814A':12,

'\u521D':0,
'\u5EFF':20
};
var cjM=fl[dB[0]];
var cfH=fl[dB[1].charAt(1)];
if(cfH==10)
{

var cgh={'\u521D':10,'\u4E8C':20,'\u5EFF':20,'\u4E09':30}[dB[1].charAt(0)];
}
else
{
var cgh=fl[dB[1].charAt(0)]+cfH;
}

for(var i=uz-1;i<uz+1;i++)
{
var tU=getTop().Lunar||Lunar,
bkr=tU.lunarDateToSolar(i,cjM,cgh,tU.isChangeToLeapMonth(i,cjM));
if(bkr.valueOf()+24*60*60*1000>=Du.valueOf())
{

uz=bkr.getFullYear();
dB[0]=bkr.getMonth()+1;
dB[1]=bkr.getDate();
break;
}
}
}
else
{

if(dB[0]<Du.getMonth()+1)
{
uz++;
}
}

document.write(getTop().T(
[
'<textarea style="display:none;" name="sendtimetip" disabled>',
'\u53D1\u4FE1\u65F6\u95F4\u5DF2\u8BBE\u5728<b class="grn">%nick%</b>\u597D\u53CB\u751F\u65E5\uFF0C\u60A8\u53EF\u4EE5\u81EA\u884C\u4FEE\u6539\uFF1A','</textarea>',
'<input type="hidden" name="sendtimeyear" value="%year%" />',
'<input type="hidden" name="sendtimemonth" value="%month%" />',
'<input type="hidden" name="sendtimeday" value="%day%" />',
'<input type="hidden" name="sendtimehour" value="0" />',
'<input type="hidden" name="sendtimemin" value="0" />'
],
"%"
).replace(
{
nick:getTop().htmlEncode(vV),
year:uz,
month:dB[0],
day:dB[1]
}
)
);
}












function createPostNewWindow(aR,sg,av,dxS)
{
var aI=window,
aU=aI.document;
var cma="_creAtenEWpOstwIn_";
Xr=getTop().S(cma,aI);
if(!Xr)
{
Xr=aU.createElement("form");
Xr.id=cma;
Xr.method="post";
aU.body.appendChild(Xr);
}
Xr.innerHTML="";
if(sg.indexOf("sid=")<0)
{
sg=[sg,sg.indexOf("?")<0?"?":"&","sid=",getTop().getSid()].join("");
}
Xr.action=sg;
Xr.target=aR;
Xr.onsubmit=function(){
aI.open('about:blank',aR,dxS);
};
av=av||{};
av.sid=av.sid||getTop().getSid();
getTop().E(av,function(cf,bG){
var bT=aU.createElement("input");
bT.type="hidden";
bT.name=bG;
bT.value=cf;
Xr.appendChild(bT);
});
Xr.submit();
}

function setComposeData(av)
{
getPageEditor().setContent(av.content||"");
getInputObj("subject").value=av.subject||"";
}

function uploadComposeEml()
{
new QMDialog(
{
sId:"uploademldlg",
sTitle:"\u4E0A\u4F20eml\u6587\u4EF6",
sBodyHtml:TE([
'<form style="width:100%;" method="post" id="uploademl" name="uploademl" target="actionFrame" action="/cgi-bin/qf_upload" enctype="multipart/form-data">',
'<div class="dialog_txt">',
'\u8BF7\u9009\u62E9eml\u6587\u4EF6\uFF1A<input type="hidden" name="sid" value="$sid$"/>',
'<input type="file" name="UploadFile" class="btn" value=""/>',
'</div>',
'<div class="dialog_operate">',
'<input type="submit" value="\u4E0A\u4F20" class="wd2 btn"/>',
'<input type="button" value="\u53D6\u6D88" class="wd2 btn"  id="cancel"/>',
'<div class="clr"></div>',
'</div>',
'</form>'
]).replace(
{
sid:getSid()
}
),
onload:function()
{
var cv=this;
cv.S("cancel").onclick=function()
{
getActionWin().location.href="javascript:;";
cv.close();
}
}
}
);
}

function bof()
{
var bH=getPageEditor(),
ci;

ahf("100%");
ci=getPageEditor().getContent();
ahf(getTop().gbIsIE?"auto":"100%");

ci=getTop().filteSignatureTag(filterSourceContent(ci),"FILTE<:");
ci=getTop().fixNonBreakSpace(ci);

var dzL=getTop().T('height=$height$,width=$width$,top=$top$,left=$left$,toolbar=no,scrollbars= yes,menubar=no').replace(
{
top:100,
left:100,
height:500,
width:550
}
);
createPostNewWindow("newwin","/cgi-bin/readtemplate",{content:ci,t:"compose_preview"},dzL);
}





function setOtherComposeOptionEvent()
{
var aq=getTop(),
ko=aq.S("otherComposeOptionBtn",window),
apZ=aq.S("otherComposeOptionCntr",window);
aq.addEvent(ko,"click",function()
{
var sF=aq.isShow(apZ);

aq.show(apZ,!sF);
ko.getElementsByTagName("img")[0].className="arrow"+(!sF?"up":"down");

getPageEditor().resizeEditor();
apZ.scrollIntoView();

var ajk=getTop().document.body;
var azA=getTop().document.documentElementi;
azA.scrollTop=azA.scrollLeft=ajk.scrollTop=ajk.scrollLeft=0;
return;
aq.qmAnimation[sF?"fold":"expand"](apZ,{
durlimit:10,
type:"wait",
speed:"fast",
onready:function()
{
return{
from:apZ.clientHeight||0
};
},
onaction:function()
{
getPageEditor().resizeEditor();

},
oncomplete:function()
{
aq.show(apZ,!sF);
ko.getElementsByTagName("img")[0].className="arrow"+(!sF?"up":"down");

getPageEditor().resizeEditor();
}
});

});
}









function setDefSign(eRc)
{
var aq=getTop(),dhr=aq.TE([
'<div class="left" style="cursor:pointer;">',
'\u7B7E\u540D\uFF1A$@$if($sItemValue$)$@$$sItemValue$$@$else$@$\u4E0D\u4F7F\u7528$@$endif$@$<span class="addrtitle" style="font-family: arial,sans-serif; padding-left:4px; font-size:9px; position:relative; top:-1px;" >\u25BC</span>&nbsp;',
'</div>',
'<span class="left addrtitle" >&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>'
]);
return dhr.replace({sItemValue:eRc});
}
function setMultiSignatureSelect()
{
var aq=getTop();
try{
var jd=aq.goUserInfo.get('RealAllSignature');
}
catch(bj)
{
return setTimeout(arguments.callee,500);
}

if(!jd)
{
return;
}

var bi=aq.S("signSelContainer",window);
if(bi)
{
var eRU=aq.TE([
'<div style="$@$if($bNewStyle$)$@$margin-left:-18px;$@$endif$@$padding:0 0 0 12px;">',

'$@$if($sItemValue$)$@$$sItemValue$$@$else$@$\u7B7E\u540D1$@$endif$@$&nbsp;&nbsp;&nbsp;&nbsp;',
'</div>'
]),
ejO='<div style="width:100%;height:0;overflow:hidden;margin-left:-16px;padding:5px 26px 0 0;border-bottom:1px solid #E6E9ED;">&nbsp;</div>',
dDe=0;

function cUP()
{
var rW=[{sId:"-1",sItemValue:'<div style="padding:0 12px">\u4E0D\u4F7F\u7528</div>'}],
egP=cFc("sign"),
aEK=aq.goUserInfo.get('RealAllSignature');
akX=21;
rW.push({
sId:"border",
nHeight:11,
sItemValue:ejO,
bDisSelect:true
});
akX+=11;
for(var aX in aEK)
{
var aE=aEK[aX],
oA=eRU.replace
({
sItemValue:aE[1],
bNewStyle:(aX>199&&aX<300)?true:false
});

if(aX>=0&&(aX<100||(aX>199&&aX<300)))
{




rW.push({
sId:aX,
sItemValue:oA
});
akX+=21;
}

if(egP==aX)
{
dDe=rW.length-1;
}
}


if(rW.length<=2)
{
return false;
}

















akX+=21;
return{
oitems:rW,
nheight:akX,
selectidx:dDe
};
}

if(!cUP())
{
return;
}
aq.addEvent(bi,"click",function()
{
var cs=aq.calcPos(bi),
eZ=cUP(),
jd=aq.goUserInfo.get('RealAllSignature');
new(aq.QMMenu)({
oEmbedWin:window,
sId:"signatureMenu",
nX:cs[3]-1,
nY:cs[2]-eZ.nheight-8,
nItemHeight:21,
bAnimation:false,
oItems:eZ.oitems,
onitemclick:function(aM,bw)
{
aq.S("signtype",window)&&(aq.S("signtype",window).value=(aM!="newsign")?aM:"");
if(jd[aM])
{
setSignature("sign",aM,true);
bi.innerHTML=setDefSign(jd[aM][1]);
}
else if(aM==-1)
{
setSignature("sign",-1,true);
bi.innerHTML=setDefSign("\u4E0D\u4F7F\u7528");
}
else if(aM=="newsign")
{
var aY=aq.T("/cgi-bin/setting1?fun=list&edittype=$edittype$&t=signature_new&sid=$sid$&signid=$signid$").replace(
{
edittype:"addsign",
sid:aq.getSid(),
signid:-1
});
new aq.QMDialog(
{
sId:"editSignature_qqmail",
sUrl:aY,
sTitle:"\u6DFB\u52A0\u4E2A\u6027\u7B7E\u540D",
nWidth:604,
nHeight:444
});
}

}
});
});

var ctA=cFc("sign");
if(ctA==-1)
{
bi.innerHTML=setDefSign("\u4E0D\u4F7F\u7528");
}
else if(jd[ctA])
{
bi.innerHTML=setDefSign(jd[ctA][1]);
}




}
}





function syncMultiSignatureData()
{
setMultiSignatureSelect();
return;







}






function cFc(aC)
{
var bH=getPageEditor();
if(!bH)
{
return-1;
}

var clB=bH.getContentTags(aC)[0];
if(!clB)
{
return-1;
}
return clB.getAttribute("signid");
}







function cgR(aC,cf,aM,cAt)
{
var bH=getPageEditor();
if(!bH)
{
return;
}

var anY={};
function bre(aC)
{
return anY[aC]=bH.getContentTags(aC)[0];
}

function bLG(aC,po,bgS)
{
if(!bH)
{
return;
}

var ZZ=po.parentNode;
if(ZZ&&ZZ.tagName=="DIV"
&&ZZ.firstChild==po)
{
po=ZZ;
}
getTop().insertHTML(po,bgS,getTop().T('$breakline$<div><$type$></$type$></div>').replace({
breakline:getTop().QMEditor.getBreakLine(1,
{
family:getTop().goUserInfo.get("DEF_FONT_FAMILY"),
size:getTop().goUserInfo.get("DEF_FONT_SIZE"),
color:getTop().goUserInfo.get("DEF_FONT_COLOR")
}
),
type:aC
}));

bre(aC);
}

bre("sign");
bre("includetail");



if(!cf&&!anY[aC])
{
return;
}

if(!anY.sign)
{
var cWE=bH.getContentTags("includetail")[0];
bLG("sign",cWE||bH.getContentObj("QQMAILSTATIONERY")||
bH.getContentTags("body")[0],cWE?"beforeBegin":"beforeEnd");
}

var lK=anY[aC];
lK.innerHTML=cf;
lK.setAttribute("signid",aM);
lK.setAttribute("nreadytime",bH.getReadyTimeStamp());
if(aC=="sign")
{
syncMultiSignatureData();
cAt&&focusPageEditor(0);
}
}






function setSignature(aC,bU,cAt)
{
if(bU==-1)
{

return cgR(aC,"",-1);
}


var FR=arguments.callee;
function ddb()
{
setTimeout(function()
{
FR(aC,bU);
},
200
);
}

var cB="";
try
{
switch(aC)
{
case"sign":
var cho=getTop().goUserInfo.get('RealAllSignature')[bU];
if(cho&&(parseInt(bU)<100||(parseInt(bU)>199&&parseInt(bU)<300)))
{
cB=getTop().getSignatureHeader()+cho[0];
}
break;
default:
return;
}
}
catch(bj)
{
return ddb();
}

cgR(aC,cB,bU,cAt);
}





function sendAfterUpload(cjr)
{
if(cjr)
{
getTop().getMainWin().gbCkSendafterupload=cjr;
}
else
{
return(getTop().getMainWin().gbCkSendafterupload=="undefined")?0:getTop().getMainWin().gbCkSendafterupload;
}
}






var QMCharCode={

SY:[[0,127]
,[164,164],[167,168],[176,177],[183,183],[215,215],[224,225],[232,234],[236,237]
,[242,243],[247,247],[249,250],[252,252],[257,257],[275,275],[283,283],[299,299]
,[324,324],[328,328],[333,333],[363,363],[462,462],[464,464],[466,466],[468,468]
,[470,470],[472,472],[474,474],[476,476],[593,593],[609,609],[711,711],[713,715]
,[729,729],[913,929],[931,937],[945,961],[963,969],[1025,1025],[1040,1103],[1105,1105]
,[8208,8208],[8211,8214],[8216,8217],[8220,8221],[8229,8230],[8240,8240],[8242,8243],[8245,8245]
,[8251,8251],[8364,8364],[8451,8451],[8453,8453],[8457,8457],[8470,8470],[8481,8481],[8544,8555]
,[8560,8569],[8592,8595],[8598,8601],[8712,8712],[8719,8719],[8721,8721],[8725,8725],[8730,8730]
,[8733,8736],[8739,8739],[8741,8741],[8743,8747],[8750,8750],[8756,8759],[8765,8765],[8776,8776]
,[8780,8780],[8786,8786],[8800,8801],[8804,8807],[8814,8815],[8853,8853],[8857,8857],[8869,8869]
,[8895,8895],[8978,8978],[9312,9321],[9332,9371],[9472,9547],[9552,9587],[9601,9615],[9619,9621]
,[9632,9633],[9650,9651],[9660,9661],[9670,9671],[9675,9675],[9678,9679],[9698,9701],[9733,9734]
,[9737,9737],[9792,9792],[9794,9794],[12288,12291],[12293,12311],[12317,12318],[12321,12329],[12353,12435]
,[12443,12446],[12449,12534],[12540,12542],[12549,12585],[12832,12841],[12849,12849],[12963,12963],[13198,13199]
,[13212,13214],[13217,13217],[13252,13252],[13262,13262],[13265,13266],[13269,13269],[19968,40869],[63788,63788]
,[63865,63865],[63893,63893],[63975,63975],[63985,63985],[64012,64015],[64017,64017],[64019,64020],[64024,64024]
,[64031,64033],[64035,64036],[64039,64041],[65072,65073],[65075,65092],[65097,65106],[65108,65111],[65113,65126]
,[65128,65131],[65281,65374]]

};






QMCharCode.findGbkChar=function(yD)
{
var bdQ,bjZ,avg;
var SY=this.SY;
bdQ=0;
bjZ=SY.length-1;
while(bdQ<=bjZ)
{
avg=Math.floor((bdQ+bjZ)/2);
if(yD>SY[avg][1])
{
bdQ=avg+1;
}
if(yD<SY[avg][0])
{
bjZ=avg-1;
}
if(yD>=SY[avg][0]&&yD<=SY[avg][1])
{
return 1;
}
}
return 0;
};






QMCharCode.hasNonGbkChar=function(eG)
{
for(var i=Math.min(eG.length,10000)-1;i>=0;i--)
{
var cXr=eG.charCodeAt(i);
if(this.findGbkChar(cXr)==0)
{
return true;
}
}
return false;
};











function splashToCtrl(aXt,apU)
{
var aGA=aXt.style?aXt:getTop().S(aXt,window),
vy=0,
crG=isNaN(apU)?6:apU;
(function()
{
aGA.style.backgroundColor=(vy++%2==0)
?"#f9f2b3":"#fff";
if(vy<crG)
{
setTimeout(arguments.callee,100);
}
}
)();
}

function doVerifySubmit()
{
doProcess('',{card:"card",urlcreator:"save"}[getPageId()]||"send",false,false,99);
}

function doVerifyCancel(){}

function doFtnUploaded()
{
var aq=getTop();
new aq.QMDialog({
sId:"ftnfinished",
sTitle:"\u6B63\u5728\u81EA\u52A8\u53D1\u9001",
bClose:true,
sBodyHtml:aq.T([
'<div class="dialog_feedback" style="width:400px;">',
'<span class="dialog_icon icon_info_b"></span>',
'<div class="dialog_f_c">',
'\u8D85\u5927\u9644\u4EF6\u4E0A\u4F20\u5B8C\u6BD5\uFF0C\u5373\u5C06\u4E8E <span id="countsecond" class="red">10</span> \u79D2\u540E\u81EA\u52A8\u53D1\u9001\u672C\u90AE\u4EF6\u3002<br />\u6B64\u524D\u60A8\u53EF\u4EE5\u53D6\u6D88\u81EA\u52A8\u53D1\u9001\uFF0C\u7EE7\u7EED\u7F16\u8F91\u90AE\u4EF6\u3002',

'</div>',
'</div>',
'<div class="dialog_operate">',
'<input class="wd4 btn" type="button" id="confirm" value="\u53D6\u6D88\u81EA\u52A8\u53D1\u9001">',
'<div class="clr"></div>',
'</div>'
]).replace({
image_path:aq.getPath("image",true)
}),
onload:function(){
var ao=this;
var gU=10;
var jH=setInterval(function(){
ao.S("countsecond")
&&
(ao.S("countsecond").innerHTML=gU--);
},1000);
var cIC=setTimeout(function(){
ao.S("countsecond")&&aq.fireMouseEvent(aq.SN("sendbtn",window)[0],"click");
clearInterval(jH)
ao.close();
},10000);
aq.addEvent(ao.S("confirm"),"click",function(){
clearTimeout(cIC);
clearInterval(jH)
ao.close();
});
}
});
}

function aog()
{

if(getPageId()=='groupsms')
{
return getTop().S('frmCompose',window);
}
return getTop().S('frm',window);
}


function asyncGetContent(bz)
{
var fI=getTop(),
aY=fI.htmlDecode(fI.trim(bz));

fI.goAsyncContent=false;

if(aY&&/^https?:\/\/[\w.]+qq.com(\/)/i.test(aY))
{
fI.loadJsFile(aY,false,fI.document,function()
{
if(!fI.goAsyncContent||!fI.goAsyncContent.content)
{
fI.goAsyncContent={};
fI.showError("\u90AE\u4EF6\u5185\u5BB9\u83B7\u53D6\u5931\u8D25");
}
}
);
}
}

function deJ()
{



















}


function compose_js(){}









function compose_js(){}


