class Hello {
  constructor() {
    this.message = 'Hello from the API!';
  }

  hello() {
    return [
      {
        message: this.message,
      },
    ];
  }
}

module.exports = Hello;
