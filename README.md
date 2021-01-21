项目遇到的问题集合
## index.html
####1. 前端打印,有的需求是要横向纵向兼容,有时候会出现横向打印会出现一页空白页,这个时候我们要将body加一个css属性display:table;就可以解决问题.
####2.设置页面打印只能横向打印 纵向打印 纵向@page { size: portrait; } 横向@page { size: landscape; }
####3.打印可以使用打印插件 jqprint

## dataDeduplication.html
#### 数组常用的几种去重方法