import styles from "./About.module.css";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o Mini <span>Blog</span>
      </h2>
      <p>
      O projeto é um blog dedicado à publicação de artes e designs, desenvolvido utilizando as tecnologias React e JavaScript, integradas ao Firebase para armazenamento e gerenciamento de dados. Esta plataforma oferece um ambiente dinâmico e interativo para artistas e entusiastas de design compartilharem suas criações e experiências.
      </p>
      <Link to="/posts/create" className="btn">
        Criar post
      </Link>
    </div>
  );
};

export default About;
