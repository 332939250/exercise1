
async function gopage3(ctx) {
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
}

module.exports = {
    'B /page3': gopage3
}