import store from '../store/store';
const authMiddleware = (to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      if (!store.getters.loggedIn) {
        console.log('There is no token, redirect to login. (' + to.path + ')');
  
        next({
          name: 'Login',
        })
      } else {
        console.log('There is a token, resume. (' + to.path + ')');
        next()
      }
    } else if (to.matched.some(record => record.meta.requiresVisitor)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      if (store.getters.loggedIn) {
  
        next({
          name: 'ListProducts',
        })
      } else {
        next()
      }
    }
    else {
      console.log('You\'re on the login page');
      next() // make sure to always call next()!
    }
  };
  export default authMiddleware;