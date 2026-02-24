const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export {asyncHandler}

// const asyncHandler = (fn) => async () => {
//     try{ 
//         await fn (req, res, next)
//     } catch (error) {                                        //wrapper function #2
//         res.status(err.code || 500).json({
//             success: failed,
//             message: err.message
//         })
//     }
// }