export default async function ({ to, from, next, store, message }) {
  console.log('执行了user-info中间件')
  return next()
}
