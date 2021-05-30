import { EnvironmentException } from "../../errors/exceptions/EnvironmentException";

class Environment {
  public getEnv(name: string): string {
    const value = process.env[name];
    if (value != undefined) {
      return value;
    }
    throw new EnvironmentException();
  }
}

export { Environment };
