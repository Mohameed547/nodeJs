import slugify from "slugify";
import Product from "../../../../DB/models/Product.js"
import asyncHandler from "../../../middleware/asyncHan.js";
import AppError from "../../../utils/AppError.js";





export const getProducts = asyncHandler(
    async (req,res,next)=>{
        const products = await Products.find().populate(
            [
                {
                    path: 'category',
                },
                {
                    path: 'subCategory',
                },
                {
                    path: 'brand',
                }
            ]
        )
        return products.length==0?
            next(new AppError("not found products",404)):
            res.status(200).json({message: "success",products,status:200})

    }
)


export const getProduct = asyncHandler(
    async (req,res,next)=>{
        const product = await Product.findById(req.params._id).populate(
            [
                {
                    path: 'category',
                },
                {
                    path: 'subCategory',
                },
                {
                    path: 'brand',
                }
            ]
        );
        return !product?
            next(new AppError("not found product",404)):
            res.status(200).json({message: "success",product,status:200})
    }
)


export const addProduct =asyncHandler(
    async (req,res,next)=>{
        req.body.maimImage = req.files.maimImage[0].filename
        req.body.coverImages = req.files.coverImages.map(element => element.filename);
        req.body.slug = slugify(req.body.title)
        const product = await Products.create(req.body)
        
        return res.status(404).json({message: "success",product,status: 404})
     }
     
)





export const updateProduct = asyncHandler(
    async (req,res,next)=>{
        if(req.files?.mainImage?.length){
            req.body.maimImage = req.files?.maimImage[0]?.filename
        }
        req.body.coverImages = req.files?.coverImages?.map(element => element.filename);
        req.body.slug = slugify(req.body.title)
        const product = await Products.findByIdAndUpdate(req.params._id,req.body,{title,slug},{new: true});
        return !product?
            next(new AppError("not found product",404)):
            res.status(200).json({message: "success",product,status:200})
    }
)




export const deleteProduct = asyncHandler(
    async (req,res,next)=>{
        const product = await Products.findByDelete(req.params._id);
        return !product?
            next(new AppError("not found product",404)):
            res.status(200).json({message: "success",product,status:200})
    }
)


