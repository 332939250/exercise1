const fs = require('fs');  //文件操作

// 根据自己定义得exports方式解析　　比方说“Ａ｜｜AAA”
function addMapping(router, mapping) {

    for (var url in mapping) {
        let path = url.substring(2);
        if (url.startsWith('A')) {
            router.get(path, mapping[url]);
        } else if (url.startsWith('B')) {
            router.post(path, mapping[url]);
        } else {
            console.log(`invalid URL: ${url},please check your js`);
        }

    }

}


// 读取ｒｏｕｔｅｓ文件夹的ｊｓ文件，自动解析
function addControllers(router, dir) {

    fs.readdirSync(__dirname + '/' + dir).filter((f) => {

        return f.endsWith('.js');

    }).forEach((f) => {

        let mapping = require(__dirname + '/' + dir + '/' + f);

        addMapping(router, mapping);

    });

}

module.exports = function (dir) {

    let  routes_dir = dir || 'routes';
    let router = require('koa-router')();

    addControllers(router, routes_dir);

    return router.routes();

};