var goindex= async (ctx) => {
  
  await ctx.render('index',{});

}

module.exports = {

  'A /': goindex,
  'B /': goindex

};