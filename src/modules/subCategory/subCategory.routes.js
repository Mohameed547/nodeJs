import { Router } from "express";
import * as SubCategoryController from './controller/subCategory.controller.js'



const router = Router({mergeParams:true})



router.get('/',SubCategoryController.getSubCategories)
      .get('/_id',SubCategoryController.getSubCategory)
      .post('/',SubCategoryController.addSubCategory)
      .put('/_id',SubCategoryController.updateSubCategory)
      .delete('/_id',SubCategoryController.deleteSubCategory)

export default router