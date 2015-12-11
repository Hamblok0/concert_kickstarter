import $ from 'jquery';

class CreateUser {
  constructor() {
    this.access_token = null;
    this.refresh_token = null;
    this.token_expires = null;
    this.token_created = null;
  }
  isLoggedIn() {
    return this.access_token !== null;
  }

  register(data, done) {
    let url = 'https://gigster-app.herokuapp.com/users';

    let options = {
      url: url,
      method: 'POST',
      data: {
        user: data
      }
    };

    $.ajax(options).then(response => {
      done(null, response);
    }).fail(error => {
      done(error);
    });
  }
  login(data, done) {
    let url = 'https://gigster-app.herokuapp.com/oauth/token';
  }

  logout() {
    this.token = null;
  }
}

export default new CreateUser();
