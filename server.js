// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give the server useful functionality
// ==============================================================================

const express = require("express");
const path = require('path');
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an 'express' server
const app = express();
// Sets an initial port
const PORT = process.env.PORT || 3000;

// Sets up the Express app to establish a static directory to access static files
app.use(express.static(path.join(__dirname, '/public')));

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));