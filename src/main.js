/* eslint-disable no-sequences */
/* eslint-disable import/no-cycle */
// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';
// eslint-disable-next-line import/no-cycle
import { Home } from './components/Home.js';
// eslint-disable-next-line import/no-cycle
import { Register } from './components/Register.js';
// eslint-disable-next-line import/named
// eslint-disable-next-line import/no-cycle
// eslint-disable-next-line import/named
import { Login } from './components/Login.js';

const rootDiv = document.getElementById('root');
const routes = {
  '/': Home,
  '/register': Register,
  '/login': Login,
};

export const onNavigate = (pathname) => {
  window.history.pushState( // aquí anexamos un registro en la sesión de nuestro navegador
    {},
    pathname,
    window.location.origin + pathname,
  );
  //  aquí temovemos nuestro primer elemento
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  //  aquí insertamos el nuevo elemento
  rootDiv.append(routes[pathname, Register]());
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]());
};

rootDiv.appendChild(component());
// myFunction();
