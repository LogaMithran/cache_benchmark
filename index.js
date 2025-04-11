import express from "express";
import morgan from "morgan";
import UserRouter from "./router/user.router.js"

const app = express();
const PORT = 3000;

app.use(morgan("dev"))
// Define a basic route
app.use("/users", UserRouter)

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
