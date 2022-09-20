import { CookieScheme } from '~auth/runtime';

export default class CustomScheme extends CookieScheme {
  async login(endpoint, { reset = true } = {}) {
    if (!this.options.endpoints.login) {
      return;
    }

    // Ditch any leftover local tokens before attempting to log in
    if (reset) {
      this.$auth.reset({ resetInterceptor: false });
    }

    await this.$auth.request(this.options.endpoints.csrf);

    // Make login request
    const response = await this.$auth.request(this.options.endpoints.login, endpoint);

    // Update tokens
    this.updateTokens(response);

    // Initialize request interceptor if not initialized
    if (!this.requestHandler.interceptor) {
      this.initializeRequestInterceptor();
    }

    await this.fetchUser();

    return response;
  }
}
