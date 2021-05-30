import Axios from "axios";

class RequestClient {
  private axios = Axios.create();

  constructor() {}

  //   public setConfig() {}

  public getInstance() {
    return this.axios;
  }
}

export { RequestClient };
