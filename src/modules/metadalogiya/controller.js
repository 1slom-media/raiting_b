import model from "./model.js";

const GET = async (req, res) => {
    try {
      const metadalogia = await model.GET(req.params);
      res.send(metadalogia);
    } catch (error) {
      console.error(error);
    }
};

const POST = async (req, res) => {
  try {
    const metadalogia = await model.POST(req.body);
    res.status(201).json({
      status:201,
      message:"metadalogia created",
      data:metadalogia
    })
  } catch (error) {
    console.error(error);
  }
};

const PUT = async (req, res) => {
  try {
    const metadalogia = await model.PUT(req.params,req.body);
    res.status(202).json({
      status:202,
      message:"metadalogia update",
      data:metadalogia
    })
  } catch (error) {
    console.error(error);
  }
};


const DELETE = async (req, res) => {
  try {
    const metadalogia = await model.DELETE(req.params);
    res.status(202).json({
      status:203,
      message:"metadalogia deleted",
      data:metadalogia
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