// // 返回的是函数，需要加()
// const router = require('koa-router')();
// // 效果等同
// // const fn_router = require('koa-router');
// // const router = fn_router();

// //post page2 to page1
// router.post('/page1', async (ctx) => {
//     let body = ctx.request.body;
//     let  name = body.name;
//     let  password = body.password;  
//     let msg; 
//     await ctx.render('page1', {name,password,msg});
// });

// module.exports = router;

async function gopage1(ctx) {
        let body = ctx.request.body;
        let name = body.name;
        let password = body.password;  
        let msg; 
        await ctx.render('page1', {name,password,msg});
}

module.exports = {
    'B /page1': gopage1
}