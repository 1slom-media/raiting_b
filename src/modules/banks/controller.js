import model from "./model.js";

const GET = async (req, res) => {
    try {
      const banks = await model.GET(req.params,req.query);
      res.send(banks);
    } catch (error) {
      return new Error (error.message)
    }
};

const POST = async (req, res) => {
    try {
      const banks = await model.POST(req.body);
       res.status(201).json({
        status:201,
        message:"banks upload",
        data:banks
      })
    } catch (error) {
      return new Error (error.message)
    }
};

const PUT = async (req, res) => {
    try {
      const banks = await model.PUT(req.params,req.body);
       res.status(202).json({
        status:202,
        message:"banks update",
        data:banks
      })
    } catch (error) {
      return new Error (error.message)
    }
};

const DELETE = async (req, res) => {
    try {
      const banks = await model.DELETE(req.params);
       res.status(202).json({
        status:204,
        message:"banks deleted",
        data:banks
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