import express, { Router } from "express";
import { getApiHealth } from "../controller";
import { postSignup } from "../controller/auth";

const routes:Router = express.Router()

routes.route("/health").get(getApiHealth)

// Auth APIs signup
routes.route("/signup").post(postSignup)

const ApiRoutes = routes;
export default ApiRoutes;