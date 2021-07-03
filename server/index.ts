import express from 'express';
import cors from 'cors';
import {contentRouter} from "./src/controllers/content.controller";
import {productsRouter} from "./src/controllers/products.controller";
import {navigationRouter} from "./src/controllers/navigation.controller";

const app = express();
const PORT = 8000;

// For this project we can make this a public API
// For a project that has private data and/or endpoints
// which could change the state of the application I would
// always use a strict approach
app.use(cors({
  origin: '*'
}));

app.use("/content/", contentRouter);
app.use("/products/", productsRouter);
app.use("/navigation/", navigationRouter);

module.exports = app.listen(PORT, () => {
  console.log(`API Server is running @ http://localhost:${PORT}`);
});
