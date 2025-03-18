const app = require('./app');

app.listen(process.env.PORT, () => {
  console.log(`✓ [SERVER STARTED] port ${process.env.PORT}`);
})