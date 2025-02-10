import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Rout } from './routs.tsx'; 
import store from './store.ts'; 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Rout /> 
    </Provider>
  </StrictMode>
);