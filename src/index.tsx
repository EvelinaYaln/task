import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Main from './pages/main';
import { store } from './app/appStore';
import reportWebVitals from './reportWebVitals';
import './shared/styles/global.scss';
import { ErrorBoundary } from './shared/ui/ErrorBoundary/ErrorBoundary';
import { ErrorFallback } from './shared/ui/ErrorFallback/ErrorFallback';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<ErrorFallback />}>
      <Provider store={store}>
        <Main />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
