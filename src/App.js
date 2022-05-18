import React, { useContext } from 'react';
import './style.css';
import { Theme } from './ThemeContext';

export default function App() {
  const { dark, setTheme } = useContext(Theme);
  console.log(dark);
  return (
    <div className={dark ? 'dark' : 'light'}>
      <button onClick={() => setTheme((prev) => !prev)}>Toggle</button>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
