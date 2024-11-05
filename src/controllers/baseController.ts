import { Request, Response } from "express";

class BaseController {
  public info(req: Request, res: Response) {
    res.json({
      message: "Welcome to Urban Clean Tech API",
      endpoints: {
        api: {
          status: "/api/status",
        },
        socket: {
          gps: "/gps",
        },
      },
    });
  }
}

export default new BaseController();
