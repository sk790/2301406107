import express from "express"
import { register } from "./controller.js"


const router = express.Router()

router.route('/test/register').post(register)

export default router