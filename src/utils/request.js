export function request (url, options) {
  global.BUS.$axios.defaults.headers['Content-Type'] = 'application/json'
  return global.BUS.$axios(url, options)
    .then((data) => {
      return data.data
    })
    .catch(err => ({
      statusCode: 500,
      err: err,
      message: err.toString()
    }))
}
