
import connectionDB from '../DB/connectionDB.js'
import globalError from './middleware/globalError.js'
import categoryRouter from './modules/category/category.routes.js'
import brandRouter from './modules/brand/brand.routes.js'
import subCategoryRouter from './modules/subCategory/subCategory.routes.js'
import  productRouter  from './modules/product/product.routes.js'
const bootstrap = (app,express) =>{
    const baseUrl = '/api/v1';
    connectionDB()
    app.use(express.json())
    app.use('/uploads', express.static('/uploads'))
    app.use(`${baseUrl}/categories`,categoryRouter)
    app.use(`${baseUrl}/brands`,brandRouter)
    app.use(`${baseUrl}/subCategories`,subCategoryRouter)
    app.use(`${baseUrl}/products`,productRouter)


    app.use('*',(req,res) =>{
        return res.json({message:'not-found'})
    })
    app.use(globalError)
}




export default bootstrap