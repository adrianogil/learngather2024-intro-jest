const app = require('./http-server').app;
const port = 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
