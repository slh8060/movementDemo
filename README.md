做前端有段时间了，一直以来写的都是web端的页面。在移动端如此火的今天，不会
写移动端页面实在不是一个合格的前端码农。今天，我就模仿别人的页面写了一个demo,
记录了一些写demo的注意点，方便日后翻阅。

1、首先，先解释添加的几个<meta>的值：
`<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=1.0">`
`<meta name="apple-mobile-web-app-capable" content="yes">`
`<meta http-equiv="X-UA-COMPATIBLE" content="IE=edge">`


 `<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1.0">` 
         width:可视区域的宽度，值可为数字或关键词device-width；
         height:同width；
         intial-scale:页面首次被显示是可视区域的缩放级别，取值1.0则页面按实际尺寸显示，无任何缩放；
         maximum-scale=1.0, minimum-scale=1.0：可视区域的缩放级别，maximum-scale用户可将页面放大的程序，1.0将禁止用户放大到实际尺寸之上；
         user-scalable:是否可对页面进行缩放，no 禁止缩放。
`<meta http-equiv="x-ua-compatible" content="IE=edge">`
         `<meta http-equiv="X-UA-Compatible" content="IE=7">`  
         #以上代码告诉IE浏览器，无论是否用DTD声明文档标准，IE8/9都会以IE7引擎来渲染页面。  
         `<meta http-equiv="X-UA-Compatible" content="IE=8"> ` 
         #以上代码告诉IE浏览器，IE8/9都会以IE8引擎来渲染页面。  
         `<meta http-equiv="X-UA-Compatible" content="IE=edge">  
         #以上代码告诉IE浏览器，IE8/9及以后的版本都会以最高版本IE来渲染页面。`  
         `<meta http-equiv="X-UA-Compatible" content="IE=7,IE=9">`  
         `<meta http-equiv="X-UA-Compatible" content="IE=7,9">`  
         `<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
         #以上代码IE=edge告诉IE使用最新的引擎渲染网页，chrome=1则可以激活Chrome Frame.
  
`<meta name="apple-mobile-web-app-capable" content="yes">
         删除默认的苹果工具栏和菜单栏，默认值为yes,即显示工具栏和菜单栏。

2、rem单位。写移动端的页面，为了适配各个千奇百怪的移动端，不再使用px，而是rem.
关于rem的详细解释，可参考以下地址：
http://www.cnblogs.com/lyzg/p/4877277.html#_label2


3、逻辑像素和物理像素。
  物理像素：即设备像素；逻辑像素：CSS像素。
  当两者像素数相等时，像素比(物理像素／逻辑像素)为1:1。
  像素比(dpi)为2时，大约4个物理像素来显示一个CSS像素;
  设备像素值越高，每英寸显示的像素数越多。
  
  http://github.com/slh8060/movementDemo/raw/master/images/11.png
  
  
  
  
  
