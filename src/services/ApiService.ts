class ApiService {
  constructor() {
    console.info('ApiService Initialized');
  }

  // eslint-disable-next-line class-methods-use-this
  async get(url: string) {
    const response = await fetch(url);
    return response.json();
  }
}

export default ApiService;
