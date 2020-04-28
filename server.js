const express = require('express');
const app = express();
const port = 80;
const buildLocation = `${__dirname}/dist/static`;
app.use(express.static(buildLocation));
app.get('*', function(req, res) {
 res.sendFile(`${buildLocation}/index.html`);
});
app.listen(port, () => console.info(`Server running on port ${port}`));