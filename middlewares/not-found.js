const notFound = (req, res) => res.status(404).json('route does not exist  brooo');
module.exports = notFound; // send this function to app.js for other routes