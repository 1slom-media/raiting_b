import model from "./model.js";

const GET = async (req, res) => {
    try {
      const categories = await model.GET(req.params);
      res.send(categories);
    } catch (error) {
      return new Error (error.message)
    }
};

const POST = async (req, res) => {
    try {
      const categories = await model.POST(req.body);
       res.status(201).json({
        status:201,
        message:"categories upload",
        data:categories
      })
    } catch (error) {
      return new Error (error.message)
    }
};

const PUT = async (req, res) => {
    try {
      const categories = await model.PUT(req.params,req.body);
       res.status(202).json({
        status:202,
        message:"categories update",
        data:categories
      })
    } catch (error) {
      return new Error (error.message)
    }
};

const DELETE = async (req, res) => {
    try {
      const categories = await model.DELETE(req.params);
       res.status(202).json({
        status:204,
        message:"categories deleted",
        data:categories
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