import model from "./model.js";

const GET = async (req, res) => {
    try {
      const uslugiy = await model.GET(req.params);
      res.send(uslugiy);
    } catch (error) {
      console.error(error);
    }
};

const POST = async (req, res) => {
  try {
    const uslugiy = await model.POST(req.body);
    res.status(201).json({
      status:201,
      message:"uslugiy created",
      data:uslugiy
    })
  } catch (error) {
    console.error(error);
  }
};

const PUT = async (req, res) => {
  try {
    const uslugiy = await model.PUT(req.params,req.body);
    res.status(202).json({
      status:202,
      message:"uslugiy update",
      data:uslugiy
    })
  } catch (error) {
    console.error(error);
  }
};


const DELETE = async (req, res) => {
  try {
    const uslugiy = await model.DELETE(req.params);
    res.status(202).json({
      status:203,
      message:"uslugiy deleted",
      data:uslugiy
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