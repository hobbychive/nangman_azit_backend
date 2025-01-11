const express = require("express");
const scheduleRoutes = require("./routes/scheduleRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/schedules", scheduleRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
