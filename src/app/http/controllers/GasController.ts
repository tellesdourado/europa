import { GasService } from "../service/GasService";
import { Request, Response } from "express";

class GasController {
  public async find(req: Request, res: Response) {
    const { lat, lng } = req.params;
    const gasService = new GasService();
    const result = await gasService.findGasByCoord({
      lat,
      lng,
    });

    return res.status(200).send({ result });
  }
}

export { GasController };
