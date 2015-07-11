/* eslint no-console:0 */

import express from 'express';

const PORT = 8080;

const app = express();

app.listen(PORT, () => {
  console.log(`Server up and running in port ${PORT}`);
});
