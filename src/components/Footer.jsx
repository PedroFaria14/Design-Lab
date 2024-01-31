import React from 'react'
import style from './Footer.module.css'
const Footer = () => {
  console.log("Footer component rendered");
  // Restante do código...

  return (
    <footer className={style.footer}>
      <h3>
      Escreva sobre o que você possa gostar!
      </h3>

      <p> Design Lab &copy; 2023 </p>
    
    </footer>
    
  );
}


export default Footer
