require('dotenv').config()
const axios = require('axios');
const CryptoJS = require('crypto-js');
const NotificationOS = require('../configs/notifierOS');
let count = 1;
const axiosAuth = axios.create({
  baseURL: 'http://127.0.0.1:3000',
  // http://127.0.0.1:3000   https://www.apimastersoft.com.br

});
const login = () => {
  return new Promise((resolve, reject) => {
    const encPass = CryptoJS.AES.encrypt(process.env.USER_PASSWORD, process.env.CRYPTO);
    const pass = encPass.toString(); 
    const query = `
    mutation createToken($email: String!, $password: String!) {
      createToken(email: $email password: $password){
          token
      }
    }`;
    axiosAuth.post('/macweb',{
      query,
      variables: { 
        email: process.env.USER_EMAIL,
        password: pass
    }})
    .then(result => {
      const resultToken = result.data.data.createToken.token;
      return resultToken.split('$U')[0];
    })
    .then(token => {
      axiosAuth.interceptors.request.use((config) => {
        const conf = config;
        if (token) {
          conf.headers.Authorization = `Bearer ${token}`;
        }
        return conf;
      }, err => Promise.reject(err));
      resolve(token);
    }).catch(err => {
      if( err.message.match("Cannot read property 'data' of undefined")) {
        const title = 'Atenção! Problemas no MacWatcher';
        const msg = 'Problema ao se Conectar a API de Integração com o MacWeb. Favor entrar em contato com o suporte.'
        const notifier = new NotificationOS(title, msg);
        if (count <= 10) {
          console.log(`Sem conexão com a api. Tentativa de Conexão ${count}...`)
          setTimeout(() => {
            login();
          }, 6000);
        } else {
          notifier.sendNotification();
          count = 1;
        }
        count++;

      }
    });
  });
};

axiosAuth.interceptors.response.use(response => response, (error) => {
  if (error.response.data.errors[0].message === 'Unauthorized! Token not provided!') {
   throw new Error(error.response.data.errors);
  }
  return Promise.reject(error);
});

module.exports = {
  axiosAuth,
  login,
};