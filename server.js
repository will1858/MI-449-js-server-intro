// Require Node's http module and assign it to a variable
var http = require('http')
// Create a new server that just says "Hi!!" at every route
var server = http.createServer(function (request, response) {
  var randomnum = Math.random()
  if (request.url === '/') {
    response.end(
      '<h1>Home</h1>' +
      '<img src="https://i.imgur.com/jKhQJVH.jpg" alt="Waving hi">'
    )
  } else if (request.url === '/random-joke') {
    if (randomnum < 0.33) {
      response.end(
        '<a href="/">Home</a>' + '<h1>Why did the donut visit the dentist?   To get a new filling.</h1>'
      )
    } else if (randomnum < 0.66) {
      response.end(
        '<a href="/">Home</a>' + '<h1>Why did the physics teacher break up with the biology teacher? There was no chemistry.</h1>'
      )
    } else {
      response.end(
        '<a href="/">Home</a>' + ' <h1>I forgot my cell phone when I went to the toilet yesterday. We have 245 tiles.</h1>'
      )
    }
  } else if (request.url === '/cuteness') {
    response.end(
      '<a href="/">Home</a>' + '<h1>Cute</h1>' +
      '<img src="https://i.imgur.com/o8tn7yy.jpg" alt="Waving hi">'
    )
  } else {
    response.end(
      '<a href="/">Home</a>' + '<h1>Page Not Found</h1>' + '    http://localhost:8080"+request.url' + '  cannot be found' +
      '<img src="https://sitechecker.pro/wp-content/uploads/2017/12/404.png" alt="Waving hi">'
    )
  }
})

// Listen on port 8080, so that we can reach the app at
// localhost:8080
var port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')
