const express = require('express');
const helmet = require('helmet');
const escapeHTML = require('escape-html');

const app = express();

app.use(helmet());

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  const name = req.query.name
  res.status(200).send(`<!DOCTYPE html>
<html>
<body>
  <div id="app">
    <h1>Hello ?name=${escapeHTML(name)}</h1>
  </div>
  <footer>
  <a href="https://github.com/azu/vue-client-side-template-injection-example">Source Code</a>
  </footer>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.5.13/dist/vue.js"></script>
  <script>
      new Vue({
        el: '#app'
      });
  </script>
</body>
</html>`);
});

module.exports = app;
