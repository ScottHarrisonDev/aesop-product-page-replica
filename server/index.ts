import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 8000;

// For this project we can make this a public API
// For a project that has private data and/or endpoints
// which could change the state of the application I would
// always use a strict approach
app.use(cors({
  origin: '*'
}));

app.get("/test-endpoint", (req, res) => {
  res.status(200).send("test");
});

module.exports = app.listen(PORT, () => {
  console.log(`API Server is running @ http://localhost:${PORT}`);
});
