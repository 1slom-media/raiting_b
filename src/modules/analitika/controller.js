import model from "./model.js";

const GET = async (req, res) => {
    try {
      const analitika = await model.GET(req.params,req.query);
      res.send(analitika);
    } catch (error) {
      console.error(error);
    }
};

const POST = async (req, res) => {
  try {
    const analitika = await model.POST(req.body);
    res.status(201).json({
      status:201,
      message:"analitika created",
      data:analitika
    })
  } catch (error) {
    console.error(error);
  }
};

const PUT = async (req, res) => {
  try {
    const analitika = await model.PUT(req.params,req.body);
    res.status(202).json({
      status:202,
      message:"analitika update",
      data:analitika
    })
  } catch (error) {
    console.error(error);
  }
};


const DELETE = async (req, res) => {
  try {
    const analitika = await model.DELETE(req.params);
    res.status(202).json({
      status:203,
      message:"analitika deleted",
      data:analitika
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