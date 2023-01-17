import model from "./model.js";

const GET = async (req, res) => {
    try {
      const news = await model.GET(req.params);
      res.send(news);
    } catch (error) {
      console.error(error);
    }
};

const POST = async (req, res) => {
  try {
    const news = await model.POST(req.body);
    res.status(201).json({
      status:201,
      message:"news created",
      data:news
    })
  } catch (error) {
    console.error(error);
  }
};

const PUT = async (req, res) => {
  try {
    const news = await model.PUT(req.params,req.body);
    res.status(202).json({
      status:202,
      message:"news update",
      data:news
    })
  } catch (error) {
    console.error(error);
  }
};


const DELETE = async (req, res) => {
  try {
    const news = await model.DELETE(req.params);
    res.status(202).json({
      status:203,
      message:"news deleted",
      data:news
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