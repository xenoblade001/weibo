/**
 * @description error 404 路由
 * @author sun
 */

const router = require('koa-router')()

// 故意制造一个错误


// error
router.get('/error', async(ctx,next)=>{
  await ctx.render('error')
})

//404
router.get('*', async(ctx,next)=>{
  await ctx.render('404')
})

module.exports = router