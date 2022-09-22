import { Request, Response } from "express";
import loginClientService from "../../Services/Client/loginClient.service";

const loginClientController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const login = await loginClientService({ email, password });
    return res.status(200).json(login);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({
        message: err.message,
      });
    }
  }
};

export default loginClientController;
