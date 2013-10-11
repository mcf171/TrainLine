(function(){if(!window.xyTree)window.xyTree={};})();xyTree.TreeNormal=function(name,objectname){var rootnode=new xyTree.NodeNormal();rootnode.name=name;rootnode.tree=this;this.treename=name;this.maxlevel=0;this.root=rootnode;this.treeArray=[];this.treeArray[0]=this.root;this.current=0;this.tempString='';this.objectname=objectname;this.divtree;};xyTree.TreeNormal.prototype.add=function(node){this.root.add(node);};xyTree.TreeNormal.prototype.toString=function(){this.tempString='';this.rootnode.display();return this.tempString;};


