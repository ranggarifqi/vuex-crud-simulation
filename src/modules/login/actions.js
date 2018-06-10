import router from '../../router';

export default {
  loginAction: (context, {email, password}) => {
    //Well, this is just a simulation...so...deal with it B-)
    setTimeout(() => {
      if (email == 'admin@admin.com' && password == 'admin') {
        localStorage.setItem('access_token', 'lololololololo');
        console.log('benar!');
        router.push('/');
      } else {
        console.log('salah!');
        context.commit('reset');
      }
    }, 3000);
  }
}
