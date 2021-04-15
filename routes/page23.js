const router = require('koa-router')();

//post : page1 to page2
router.post('/page2', async (ctx) => {
    let body = ctx.request.body;
    let  name = body.name;
    let  password = body.password;  
     
    if(name==='' || password===''){
    　let msg='Please input your name/password!(from gopage2 post)';
      await ctx.render('page1', {name,password,msg});
    }
    else {
      await ctx.render("page2", {name,password});
    }
});

//post : page1 to page3
router.post('/page3', async (ctx) => {
    let body = ctx.request.body;
    let  name = body.name;
    let  password = body.password;  
     
    if(name==='' || password===''){
    　let msg='Please input your name/password!(from gopage3 post)';
      await ctx.render('page1', {name,password,msg});
    }
    else {
      await ctx.render("page3", {name,password});
    }
});

module.exports = router;