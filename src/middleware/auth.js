export default async function ({ to, from, next }) {
  console.log('执行了auth中间件')
  return next()
}
