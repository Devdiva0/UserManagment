import { ZodError } from "zod"; 
export const validate = (schema) => (req, res, next) => {
   try {
    req.body = schema.parse(req.body);
    next();

   }
    catch (err) {
        console.log("ZOD error", err);
        if(err instanceof ZodError) {
            return res.status(400).json({
                message: "Validation failed",
                errors: err.issues,
            });
} 
return res.status(500).json({
    message: "Internal server error",
});
    }
};
// this a custom validation middleware that uses Zod schema to validate the incoming request body
//if the data is valid request proceed to the next schema otherwise the proper error response is return