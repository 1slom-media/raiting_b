import model from "./model.js";

const GET = async (req, res) => {
    try {
      const renkingi = await model.GET(req.params);
      res.send(renkingi);
    } catch (error) {
      console.error(error);
    }
};

const POST = async (req, res) => {
  try {
    const renkingi = await model.POST(req.body);
    res.status(201).json({
      status:201,
      message:"renkingi created",
      data:renkingi
    })
  } catch (error) {
    console.error(error);
  }
};

const PUT = async (req, res) => {
  try {
    const renkingi = await model.PUT(req.params,req.body);
    res.status(202).json({
      status:202,
      message:"renkingi update",
      data:renkingi
    })
  } catch (error) {
    console.error(error);
  }
};


const DELETE = async (req, res) => {
  try {
    const renkingi = await model.DELETE(req.params);
    res.status(202).json({
      status:203,
      message:"renkingi deleted",
      data:renkingi
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