//Accepting a query parameter
module.exports = {
  add: add,
  answer: answer
}

function add (req, res) {
  req.app.locals.op1 = parseInt(req.query.op1, 10)
  req.app.locals.op2 = parseInt(req.query.op2, 10)
  res.send('Got it. <a href="/answer">Is this the answer?</a>')
}

function answer (req, res) {
  var result = req.app.locals.op1 + req.app.locals.op2
  res.send('I hope you are expecting ' + result)
}

//Accepting query parameter
// function webapps (req, res) {
//   res.send( req.query.name + ' is building web apps')
// }

//Returning a file
// module.exports = {
//   index: index
// }
//
// function index (req, res) {
//   res.sendFile(__dirname + '/index.html')
// }
//
// function index (req, res) {
//   res.send('<h2>Wombats are kindly creatures that never intentionally hurt anyone</h2>')
// }
