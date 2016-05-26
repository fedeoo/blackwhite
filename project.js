var SRC_BASE_PATH = "lib";
var DIST_BASE_PATH = "dist";
var PAGE="index";
module.exports = {
    jsSrc: SRC_BASE_PATH + "/js/**/*.js",
    jsDest: DIST_BASE_PATH + "/js",
    htmlDir: "pages",
    htmls: "pages/**/*.html",
    cssSrc:SRC_BASE_PATH +"/less/**/*.less",
    cssDest: DIST_BASE_PATH + "/css",
    imgSrc: SRC_BASE_PATH + "/img/**/*.*",
    imgDest: DIST_BASE_PATH+"/img"
};
