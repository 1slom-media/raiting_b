import model from "./model.js";

const GET = async (req, res) => {
    try {
      const raiting = await model.GET({
        ...req.params,
        page: req.query.page,
        size: req.query.size
      });
      res.send(raiting);
    } catch (error) {
      console.error(error);
    }
};

const POST = async (req, res) => {
  try {
    const raiting = await model.POST(req.body);
    res.status(201).json({
      status:201,
      message:"raiting created",
      data:raiting
    })
  } catch (error) {
    console.error(error);
  }
};

const PUT = async (req, res) => {
  try {
    const raiting = await model.PUT(req.params,req.body);
    res.status(202).json({
      status:202,
      message:"raiting update",
      data:raiting
    })
  } catch (error) {
    console.error(error);
  }
};


const DELETE = async (req, res) => {
  try {
    const raiting = await model.DELETE(req.params);
    res.status(202).json({
      status:203,
      message:"raiting deleted",
      data:raiting
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