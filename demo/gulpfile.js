var gulp=require("gulp"),
    css=require("gulp-clean-css");
    $=require("gulp-load-plugins")();

var uglify = require('gulp-uglify');

function jscss(file,filename,type){
    gulp.src(file)
        .pipe($.concat(filename+"."+type))
        .pipe($.if('*.js', $.uglify()))
        .pipe($.if('*.css',css()))
        .pipe(gulp.dest("dist/"+type+"/"))
        .pipe(gulp.dest('../../../Public/Home/7230mobile/' + type))
}

// 首页JS
var indexJs = ['js/swiperm2.js'];
var cateJs = ['js/jquery-1.7.1.minm2.js'];
//Cindex.html
var cindexJs = ['js/iscrollm2.js','js/statm2.js','js/jquery-1.7.1.minm2.js','js/mbm2.js'];
//排行榜
var phJs = ['js/iscrollm2.js','js/statm2.js'];
//专区内页
var zqInfoJs = ['js/jquerym.js','js/globalm.js','js/wapm.js'];

//文章内页  7230mv2
var documentJs = ['js/globalmv2.js','js/jquery.qqFacemv2.js','js/statmv2.js','js/ajaxmv2.js','js/viewportmv2.js','js/newsmv2.js'];

//下载页面  mv2
var downJs = ['js/globalmv2.js','js/jquery.qqFacemv2.js','js/statmv2.js','js/ajaxmv2.js','js/viewportmv2.js','js/downmv2.js'];
//网游 包含(单机,软件，礼包) m2
var wgameJs = ['js/jquery-1.7.1.minm2.js','js/mbm2.js'];
//标签内页  7230mv2
var tagsJs = ['js/globalmv2.js','js/jquery.qqFacemv2.js','js/statmv2.js','js/viewportmv2.js','js/7230advmv2.js'];
//down/tags
var tagssJs = ['js/globalmv2.js','js/jquery.qqFacemv2.js','js/statmv2.js','js/viewportmv2.js','js/downmv2.js'];

gulp.task("js",function() {
    jscss(indexJs,'swiperm2','js')
    jscss(zqInfoJs,'wapm','js')
    jscss(cindexJs,'iscrollm2','js')
    jscss(phJs,'statm2','js')
    jscss(documentJs,'newsmv2','js')
    jscss(downJs,'downmv2','js')
    jscss(wgameJs,'mbm2','js')
    jscss(tagsJs,'globalmv2','js')
    jscss(tagssJs,'tagssJs','js')
    jscss(cateJs,'jquery-1.7.1.minm2','js')
})

// css
var indexCss = ['css/m7230.css'];    //首页，装机必备，专区列表,

var zqInfoCss = ['css/basem.css','css/libaom.css'];//专区内页 m

var zqInfoListCss = ['css/basem.css','css/newsm.css'];// zqInfoListCss

var packageListCss = ['css/basem.css','css/libaom.css','css/newsm.css'];// packageList

var libaoPCss = ['css/basem.css','css/libaop.css'];//top/index  package

var gameCss = ['css/gamed.css','css/basem.css'];//Filter/index

var cindexCss = ['css/downDetail.css','css/basem2.css'];//  Cindex

var newCss = ['css/basemv2.css','css/newsmv2.css'];//文章内页    mv2

var libaoCateCss = ['css/libaop.css','css/newsd.css','css/basem.css'];//文章内页    mv2

var csssCss = ['css/newsd.css','css/basem.css'];//Widget/cs

var downCss = ['css/basemv2.css','css/downmv2.css'];//下载内页   mv2

var wangyCss = ['css/basem2.css','css/downm2.css'];//下载内页   m2

var phCss = ['css/phm2.css','css/basem2.css'];//排行榜页面    m2

var libaoCss = ['css/basem2.css','css/packagem2.css'];//大礼包   m2

var searchCss = ['css/basem2.css','css/searchm2.css'];//搜索页面     m2
var articleCss = ['css/basem2.css','css/articlem2.css'];//攻略、资讯列表    m2
var csCss = ['css/basem2.css','css/km2.css'];//厂商    m2
var csInfoCss = ['css/basem2.css','css/tagsm2.css'];//厂商内页    m2

var tagsCss = ['css/basem2.css','css/tagsm2.css'];//tagsm    m2

var downtagsCss = ['css/tagsmv2.css','css/basemv2.css'];//厂商内页    mv2

var kInfoCss = ['css/basem2.css','css/kzqm.css'];//合集内页  /Zq/m/css/k.css

var cateIndexCss = ['css/base-min-m2.css','css/down-min-m2.css'];//合集内页  /Zq/m/css/k.css

var ztInfoCss = ['css/basem.css','css/kzqm.css'];//专题内页  /Zq/m/css/k.css

var ztInfohzCss = ['css/basem.css','css/km.css'];//专题内页  /Zq/m/css/k.css

gulp.task("css",function() {
    jscss(indexCss,'m7230','css')       //m
    jscss(zqInfoCss,'libaom','css')      //m
    jscss(packageListCss,'newsm','css')      //m
    jscss(libaoPCss,'libaop','css')      //m
    jscss(zqInfoListCss,'news-min','css')      //m
    jscss(libaoCateCss,'newsd','css')      //m
    jscss(csssCss,'newsss','css')      //m
    jscss(gameCss,'gamed','css')      //Filter/index
    jscss(cindexCss,'downDetailm2','css')      //Cindex
    jscss(newCss,'newsmv2','css')          //mv2
    jscss(downCss,'downmv2','css')         //mv2
    jscss(wangyCss,'downm2','css')         //m2
    jscss(phCss,'phm2','css')  //m2
    jscss(libaoCss,'packagem2','css')     //m2
    jscss(searchCss,'searchm2','css')    //m2
    jscss(articleCss,'articlem2','css')   //m2
    jscss(ztInfoCss,'k-min','css')   //m2
    jscss(ztInfohzCss,'k-min-m','css')   //m2
    jscss(csCss,'km2','css')   //m2
    jscss(tagsCss,'tags-min','css')   //m2
    jscss(downtagsCss,'tagsmv2','css')   //m2
    jscss(csInfoCss,'tagsm2','css')   //m2
    jscss(kInfoCss,'kzqm','css')  //m
    jscss(cateIndexCss,'dbown-min-m2','css')  //m
})






