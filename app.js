/*import router */

const Koa = require('koa');

const views = require('koa-views');

const router = require('koa-router')();

const bodyParser = require('koa-bodyparser');

const app = new Koa();

const cfenv = require('cfenv');



/*configure middware */

// app.use(views(__dirname +'/public',{
  app.use(views('public',{
    extension:'ejs'

}));



app.use(bodyParser());



/*configure router */ 

router.get('/',async (ctx) => {

    await ctx.render('index');

})



router.post('/page1', async (ctx, next) =>{

    let name = ctx.request.body.username;

    let password = ctx.request.body.password;

    console.log(ctx.request.body);

    await ctx.render('page1',{

         name,

         password

        });



    await next();

    //await ctx.render('page1');

});



router.post('/page2', async(ctx) =>{

    let name = ctx.request.body.username;

    let password = ctx.request.body.password;



    await ctx.render('page2',{

        name,

        password

    })

    //await ctx.render('page2');

});



/*start router*/





app.use(router.routes());           

app.use(router.allowedMethods());   



let appEnv = cfenv.getAppEnv();



app.listen(appEnv.port,appEnv.bind,()=>{

    console.log(`app started at port ${appEnv.port} and url is ${appEnv.url}`);

});