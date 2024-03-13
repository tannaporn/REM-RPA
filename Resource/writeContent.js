function writeContent(e,content){

var doc = document.getElementsByTagName('iframe')[0].contentWindow.document;
doc.open();
doc.write(content);
doc.close();

}