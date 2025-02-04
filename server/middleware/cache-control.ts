export default defineEventHandler((event) => {
    let res = event.node.res
    const year = 31536000
    const week = 60 * 60 * 24 * 1000 * 7
    const url = event.node.req.url
    const maxage = url!.match(/(.+)\.(jpg|jpeg|gif|css|png|js|ico|svg|mjs)/) ? year : week
   
    res.setHeader('Cache-Control', `max-age=${maxage} s-maxage=${maxage}`);
})