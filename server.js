// Dependencies
// =============================================================
const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an 'express' server
const app = express();
// Sets an initial port
const PORT = process.env.PORT || 3000;

// Sets up Morgan tool
app.use(morgan('tiny'));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up the Express app to establish a static directory to access static files
app.use(express.static(__dirname + '/'));



// Routes
const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Start the server on the port
app.listen(PORT, () => {
  console.log(`listening on PORT ${chalk.green(PORT)}`)
});
