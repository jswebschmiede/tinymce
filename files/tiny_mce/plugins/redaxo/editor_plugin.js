(function(){tinymce.PluginManager.requireLangPack("redaxo");tinymce.create("tinymce.plugins.redaxo",{init:function(a,b){a.addCommand("mceRedaxoEmail",function(){var c=a.selection;if(c.isCollapsed()&&!a.dom.getParent(c.getNode(),"A"))return;a.windowManager.open({file:b+"/redaxoEmail.html",width:400+parseInt(a.getLang("redaxo.redaxoEmail_delta_width",0)),height:160+parseInt(a.getLang("redaxo.redaxoEmail_delta_height",0)),inline:1},{plugin_url:b,some_custom_arg:"custom arg"})});a.addButton("redaxoEmail",{title:"redaxo.redaxoEmail_ButtonDesc",cmd:"mceRedaxoEmail",image:b+"/img/redaxoEmail.gif"});a.onNodeChange.add(function(a,b,c,d){var e=a.selection;b.setDisabled("redaxoEmail",d&&c.nodeName!="A");b.setActive("redaxoEmail",0);if(c.nodeName=="A"){href=c.getAttribute("href");if(href.indexOf("mailto:")>=0){b.setActive("redaxoEmail",1)}}else if(a.dom.getParent(e.getNode(),"A")){el=a.dom.getParent(e.getNode(),"A");href=el.getAttribute("href");if(href.indexOf("mailto:")>=0){b.setActive("redaxoEmail",1)}}});a.addCommand("mceRedaxoMedia",function(){var c=a.selection;if(c.isCollapsed()&&!a.dom.getParent(c.getNode(),"A"))return;a.windowManager.open({file:b+"/redaxoMedia.html",width:400+parseInt(a.getLang("redaxo.redaxoMedia_delta_width",0)),height:160+parseInt(a.getLang("redaxo.redaxoMedia_delta_height",0)),inline:1},{plugin_url:b,some_custom_arg:"custom arg"})});a.addButton("redaxoMedia",{title:"redaxo.redaxoMedia_ButtonDesc",cmd:"mceRedaxoMedia",image:b+"/img/redaxoMedia.gif"});a.onNodeChange.add(function(a,b,c,d){var e=a.selection;b.setDisabled("redaxoMedia",d&&c.nodeName!="A");b.setActive("redaxoMedia",0);if(c.nodeName=="A"){href=c.getAttribute("href");if(href.indexOf("files/")>=0){b.setActive("redaxoMedia",1)}}else if(a.dom.getParent(e.getNode(),"A")){el=a.dom.getParent(e.getNode(),"A");href=el.getAttribute("href");if(href.indexOf("files/")>=0){b.setActive("redaxoMedia",1)}}})},createControl:function(a,b){return null},getInfo:function(){return{longname:"REDAXO email and filelink",author:"Andreas Eberhard",authorurl:"http://andreaseberhard.de",infourl:"http://rex.andreaseberhard.de/addons/tinymce.html",version:"3.5.6"}}});tinymce.PluginManager.add("redaxo",tinymce.plugins.redaxo)})()