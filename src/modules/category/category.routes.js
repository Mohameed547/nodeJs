import { Router } from "express";
import * as categoryController from './controller/category.controller.js'
import uploadFile,{ customValidation } from "../../middleware/uploadFile.js";
import SubCategoryRouter from "../SubCategory/subCategory.routes.js";




const router = Router()



router.get('/',categoryController.getCategories)
      .get('/_id',categoryController.getCategory)
      .post('/',uploadFile(customValidation.images,'category').single('image'),categoryController.addCategory)
      .put('/_id',uploadFile(customValidation.images,'category').single('image'),categoryController.updateCategory)
      .delete('/_id',categoryController.deleteCategory)
      .use('/_id/subCategories',SubCategoryRouter)

export default router