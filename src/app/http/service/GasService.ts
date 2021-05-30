import { RequestClient } from "../../client/RequestClient";

class GasService {
  private request = new RequestClient().getInstance();
  async findGasByCoord() {
    // this.request.get("")
  }
}

export { GasService };
