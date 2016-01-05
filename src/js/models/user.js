import $ from 'jquery';

class User {
  constructor() {
    this.access_token = null;
    this.refresh_token = null;
    this.token_expires = null;
    this.token_created = null;
    if (localStorage.getItem('user_auth')) {
      let {
        access_token,
        refresh_token,
        token_expires,
        token_created
      } = JSON.parse(localStorage.getItem('user_auth'));

      this.access_token = access_token;
      this.refresh_token = refresh_token;
      this.token_expires = token_expires;
      this.token_created = token_created;
    }


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

  pledge(data, done) {
    let url = `https://gigster-app.herokuapp.com/concerts/${data.concertId}/pledges`;

    let options = {
      url: url,
      method: 'POST',
      data: JSON.stringify({ pledge: { "quantity": data.quantity }}),
      beforeSend: (xhr) => {
        let userAuthStorage = JSON.parse(localStorage.getItem('user_auth'));
        xhr.setRequestHeader("Authorization", "Bearer " + userAuthStorage.access_token);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
      }
    };

    $.ajax(options).then(response => {
      done(null, response);
    }).fail(error => {
      done(error);
    });
  }

  updateProfile(data, done) {
    let url = 'https://gigster-app.herokuapp.com/me/band';

    let options = {
      url: url,
      method: 'PUT',
      data: {
        band: data
      },
      beforeSend: (xhr) => {
        let userAuthStorage = JSON.parse(localStorage.getItem('user_auth'));
        xhr.setRequestHeader("Authorization", "Bearer " + userAuthStorage.access_token);
      }
    };

    $.ajax(options).then(response => {
      done(null, response);
      console.log(response);
    }).fail(error => {
      done(error);
    });
  }

  createConcerts(data, done) {
    let url = 'https://gigster-app.herokuapp.com/bands/id/concerts';

    let options = {
      url: url,
      method: 'POST',
      data: {
        concert: data
      },
      beforeSend: (xhr) => {
        let userAuthStorage = JSON.parse(localStorage.getItem('user_auth'));
        xhr.setRequestHeader("Authorization", "Bearer " + userAuthStorage.access_token);
      }
    };

    $.ajax(options).then(response => {
      done(null, response);
      console.log(response);
    }).fail(error => {
      done(error);
    });
  }

  updateConcert(url, data, done) {
    let options = {
      url: url,
      method: 'PUT',
      data: {
        concert: data
      },
      beforeSend: (xhr) => {
        let userAuthStorage = JSON.parse(localStorage.getItem('user_auth'));
        xhr.setRequestHeader("Authorization", "Bearer " + userAuthStorage.access_token);
      }
    };
    $.ajax(options).then(response => {
      done(null, response);
    }).fail(error => {
      done(error);
    });
  }

  deleteConcert(url, data, done) {
    let options = {
      url: url,
      data: {

      },
      method: 'DELETE',
      beforeSend: (xhr) => {
        let userAuthStorage = JSON.parse(localStorage.getItem('user_auth'));
        xhr.setRequestHeader("Authorization", "Bearer " + userAuthStorage.access_token);
      }
    };
    $.ajax(options).then(response => {
      done(null, response);
    }).fail(error => {
      done(error);
    });
  }



  getMe(done){
    let userAuthStorage = JSON.parse(localStorage.getItem('user_auth'));
    let options = {
      url: 'https://gigster-app.herokuapp.com/me',
      headers: {
        Authorization: "Bearer " + userAuthStorage.access_token
      }
    }

    $.ajax(options).then(response => {
      done(response);
      console.log(response)
    })

  }

  login(data, done) {
    let url = 'https://gigster-app.herokuapp.com/oauth/token';
    data.grant_type = 'password';
    let options = {
      url: url,
      method: 'POST',
      data: data
    };

    $.ajax(options).then(response => {
      let {access_token, refresh_token, expires_in, created_at} = response;
      this.access_token = access_token;
      this.refresh_token = refresh_token;
      this.token_expires = expires_in;
      this.token_created = created_at;

      localStorage.setItem('user_auth', JSON.stringify({
        access_token: access_token,
        refresh_token: refresh_token,
        expires_in: expires_in,
        created_at: created_at
      }));

      done(null, response);
    }).fail(error => {
      done(error);
    });


  }
  logout() {
    this.access_token = null;
    this.refresh_token = null;
    this.token_expires = null;
    this.token_created = null;

    localStorage.removeItem('user_auth');


  }
}

export default new User();
