import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// 폴더에 index이름을 가진 아이는 한개만 허용된다.
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
