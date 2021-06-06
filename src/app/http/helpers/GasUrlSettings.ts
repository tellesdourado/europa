import { GeolocationInterface } from "../../Interfaces/GeolocationInterface";
import { Environment } from "./Environment";

class GasUrlSettings {
  private env = new Environment();
  //   private url: string = this.env.getEnv("GOOGLE_PLACE_BASE_URL");
  private geolocation = {} as GeolocationInterface;
  private fields: string[] = [
    "photos",
    "formatted_address",
    "name",
    "opening_hours",
    "rating",
    "geometry",
  ];

  private radius: number = 5000;

  public setFields(fields: string[]) {
    this.fields = fields;
  }

  public setRadius(radius: number) {
    this.radius = radius;
  }

  public setGeolocation(geolocation: GeolocationInterface) {
    this.geolocation = geolocation;
  }

  public getUrlByLocationName() {
    return `${this.env.getEnv("GOOGLE_PLACE_BASE_URL")}?`;
  }

  public getUrlByLocationRound() {
    return `${this.env.getEnv("GOOGLE_PLACE_BASE_URL")}?location=${
      this.geolocation.lat
    },${this.geolocation.lng}&radius=${
      this.radius
    }&type=gas_station&key=${this.env.getEnv("GOOGLE_API_API_KEY")}`;
  }
}

// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-5.5331947,-47.4486122&radius=5000&type=gas_station&keyword=gas_station&key=AIzaSyDimxkgtpD15GDejAbFvOGtBJYuQlEpakQ

// FOTO https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=AIzaSyDimxkgtpD15GDejAbFvOGtBJYuQlEpakQ

export { GasUrlSettings };
