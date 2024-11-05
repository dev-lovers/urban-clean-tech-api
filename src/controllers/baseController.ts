import { Request, Response } from "express";

class BaseController {
  public info(req: Request, res: Response) {
    res.json({
      message: "Welcome to Urban Clean Tech API",
      endpoints: {
        status: "/api/status",
      },
    });
  }
}

export default new BaseController();
