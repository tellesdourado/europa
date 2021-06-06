import { RequestClient } from "../../client/RequestClient";
import { GeolocationInterface } from "../../Interfaces/GeolocationInterface";
import { GasUrlSettings } from "../helpers/GasUrlSettings";

class GasService {
  private request = new RequestClient().getInstance();
  async findGasByCoord(geolocation: GeolocationInterface) {
    const gasUrl = new GasUrlSettings();
    gasUrl.setGeolocation(geolocation);
    return gasUrl.getUrlByLocationRound();
  }
}

export { GasService };
