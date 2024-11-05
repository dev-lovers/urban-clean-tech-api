import { Request, Response } from "express";

class ApiController {
  public status(req: Request, res: Response) {
    res.json({ message: "Server running!" });
  }
}

export default new ApiController();
