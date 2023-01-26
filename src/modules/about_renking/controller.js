import model from "./model.js";

const GET = async (req, res) => {
    try {
      const about_renking = await model.GET(req.params);
      res.send(about_renking);
    } catch (error) {
      console.error(error);
    }
};

const POST = async (req, res) => {
  try {
    const about_renking = await model.POST(req.body);
    res.status(201).json({
      status:201,
      message:"about_renking created",
      data:about_renking
    })
  } catch (error) {
    console.error(error);
  }
};

const PUT = async (req, res) => {
  try {
    const about_renking = await model.PUT(req.params,req.body);
    res.status(202).json({
      status:202,
      message:"about_renking update",
      data:about_renking
    })
  } catch (error) {
    console.error(error);
  }
};


const DELETE = async (req, res) => {
  try {
    const about_renking = await model.DELETE(req.params);
    res.status(202).json({
      status:203,
      message:"about_renking deleted",
      data:about_renking
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