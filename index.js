import express from "express";
import dotenv from "dotenv";

import cors from "cors";
import unitRoute from "./src/routes/unitRoute.js";
import siteRoute from "./src/routes/siteRoute.js";
import realestateRoute from "./src/routes/realestateRoute.js";
import galleryRoute from "./src/routes/galleryRoute.js";
import amenityRoute from "./src/routes/amenityRoute.js";
import paymentRoute from "./src/routes/paymentRoute.js";
import paymentTypeRoute from "./src/routes/paymentTypeRoute.js";
import authRoute from "./src/routes/authRoute.js";
import articleRoute from "./src/routes/articleRoute.js";
import userRoute from "./src/routes/userRoute.js";

const { WEBSITE_URL, PORT } = dotenv.config(process.cwd, ".env").parsed;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
  })
);

app.use("/api/unit", unitRoute);
app.use("/api/site", siteRoute);
app.use("/api/realestate", realestateRoute);
app.use("/api/gallery", galleryRoute);
app.use("/api/amenity", amenityRoute);
app.use("/api/payment", paymentRoute);
app.use("/api/paymentType", paymentTypeRoute);
app.use("/api/auth", authRoute);
app.use("/api/article", articleRoute);
app.use("/api/user", userRoute);

app.get("/", (_, res) => {
  res.json({
    message:
      "Hello, this is riseaddisproperties, your most trusted realestate properties site provider",
    developer: {
      name: "Melka Tolessa",
      phoneNumber: "0931213930",
      github: "https://github.com/Melka1",
      email: "melkatole1@gmail.com",
      portfolio: "https://portfolio-melka1.vercel.app/",
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});

export { app };
