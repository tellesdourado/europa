import { app } from "./app";
import { config } from "dotenv";
config();
import { Environment } from "./app/http/helpers/Environment";
const env = new Environment();

app.listen(env.getEnv("PORT"), () =>
  console.log(`server is running on port: ${env.getEnv("PORT")}`)
);
