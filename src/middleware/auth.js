import jwt from 'jsonwebtoken'


const auth = (req,res,next)=>{
    const authorization =req.headers.authorization
    const token = authorization.split('')
    const payload = jwt.verify(token, 'fridaynotesystem')
    if (!payload){
        return res.status(400).json({message: 'invalid payload'})
    }
    req.user=payload
    next()
}


export default auth