const authService = {
  async login({ email, password }: { email: string; password: string }) {
    return Promise.resolve(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNTE2MjM5MDIyLCJmaXJzdE5hbWUiOiJUb21hc3oiLCJzZWNvbmROYW1lIjoiV29sbnkiLCJlbWFpbCI6InRvbWFzei53b2xueUBnbWFpbC5jb20iLCJwaG9uZSI6IjEyMzQ1Njc4OSIsImFkZHJlc3MiOiJNYcWbbGFuYSwgMzYifQ.pG7FYO3Y6hqeIYdIzdF3h29JnL9HsbiCUMkuJ-N5zlk'
    );
  },
  async register({
    email,
    password,
    firstName,
    secondName,
    phone,
    address
  }: {
    email: string;
    password: string;
    firstName: string;
    secondName: string;
    phone: string;
    address: string;
  }) {
    return Promise.resolve();
  }
};

export default authService;
