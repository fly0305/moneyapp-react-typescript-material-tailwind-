export class ApiClient {
  static token?: string;

  static setToken(token: string) {
    this.token = token;
  }

  static clearToken() {
    delete this.token;
  }
}
