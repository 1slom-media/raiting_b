import model from "./model.js";

const GET = async (req, res) => {
    try {
      const infarmatsia = await model.GET(req.params);
      res.send(infarmatsia);
    } catch (error) {
      console.error(error);
    }
};

const POST = async (req, res) => {
  try {
    const infarmatsia = await model.POST(req.body);
    res.status(201).json({
      status:201,
      message:"infarmatsia created",
      data:infarmatsia
    })
  } catch (error) {
    console.error(error);
  }
};

const PUT = async (req, res) => {
  try {
    const infarmatsia = await model.PUT(req.params,req.body);
    res.status(202).json({
      status:202,
      message:"infarmatsia update",
      data:infarmatsia
    })
  } catch (error) {
    console.error(error);
  }
};


const DELETE = async (req, res) => {
  try {
    const infarmatsia = await model.DELETE(req.params);
    res.status(202).json({
      status:203,
      message:"infarmatsia deleted",
      data:infarmatsia
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