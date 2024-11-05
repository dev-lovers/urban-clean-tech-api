import { Request, Response } from "express";

class RedirectController {
  public redirect(req: Request, res: Response) {
    res.redirect("/api");
  }
}

export default new RedirectController();
