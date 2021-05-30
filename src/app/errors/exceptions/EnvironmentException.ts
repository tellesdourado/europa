class EnvironmentException extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "Unable to find this Env";
    this.stack = (<any>new Error()).stack;
  }
}

export { EnvironmentException };
