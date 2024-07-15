import express from "express"
import { register } from "./controller.js"


const router = express.Router()

router.route('/test/register').post(register)
router.route('/test/companies/:companyname/categories/:categoryname/products?top=n&minPrice=p&maxPrice=q').post(register)

export default router