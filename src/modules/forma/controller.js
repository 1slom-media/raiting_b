import model from "./model.js";

const GET = async (req, res) => {
    try {
      const forma = await model.GET(req.params);
      res.send(forma);
    } catch (error) {
      return new Error (error.message)
    }
};

const POST = async (req, res) => {
    try {
      const forma = await model.POST(req.body);
       res.status(201).json({
        status:201,
        message:"forma upload",
        data:forma
      })
    } catch (error) {
      return new Error (error.message)
    }
};

const PUT = async (req, res) => {
    try {
      const forma = await model.PUT(req.params,req.body);
       res.status(202).json({
        status:202,
        message:"forma update",
        data:forma
      })
    } catch (error) {
      return new Error (error.message)
    }
};

const DELETE = async (req, res) => {
    try {
      const forma = await model.DELETE(req.params);
       res.status(202).json({
        status:204,
        message:"forma deleted",
        data:forma
      })
    } catch (error) {
      return new Error (error.message)
    }
  };
  

export default {
    GET,
    POST,
    PUT,
    DELETE
  };