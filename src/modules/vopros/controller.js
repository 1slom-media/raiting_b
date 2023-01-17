import model from "./model.js";

const GET = async (req, res) => {
    try {
      const vopros = await model.GET(req.params);
      res.send(vopros);
    } catch (error) {
      console.error(error);
    }
};

const POST = async (req, res) => {
  try {
    const vopros = await model.POST(req.body);
    res.status(201).json({
      status:201,
      message:"vopros created",
      data:vopros
    })
  } catch (error) {
    console.error(error);
  }
};

const PUT = async (req, res) => {
  try {
    const vopros = await model.PUT(req.params,req.body);
    res.status(202).json({
      status:202,
      message:"vopros update",
      data:vopros
    })
  } catch (error) {
    console.error(error);
  }
};


const DELETE = async (req, res) => {
  try {
    const vopros = await model.DELETE(req.params);
    res.status(202).json({
      status:203,
      message:"vopros deleted",
      data:vopros
    })
  } catch (error) {
    console.error(error);
  }
};



export default {
  GET,
  POST,
  PUT,
  DELETE,
};