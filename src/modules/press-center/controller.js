import model from "./model.js";

const GET = async (req, res) => {
    try {
      const pressCenter = await model.GET(req.params);
      res.send(pressCenter);
    } catch (error) {
      console.error(error);
    }
};

const POST = async (req, res) => {
  try {
    const pressCenter = await model.POST(req.body);
    res.status(201).json({
      status:201,
      message:"pressCenter created",
      data:pressCenter
    })
  } catch (error) {
    console.error(error);
  }
};

const PUT = async (req, res) => {
  try {
    const pressCenter = await model.PUT(req.params,req.body);
    res.status(202).json({
      status:202,
      message:"pressCenter update",
      data:pressCenter
    })
  } catch (error) {
    console.error(error);
  }
};


const DELETE = async (req, res) => {
  try {
    const pressCenter = await model.DELETE(req.params);
    res.status(202).json({
      status:203,
      message:"pressCenter deleted",
      data:pressCenter
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