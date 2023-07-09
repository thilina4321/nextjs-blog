import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/thilina.jpeg'
          alt='An image showing Max'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Thilina</h1>
      <p>
        I blog about web development - especially about the javascript frameworks
        like ReactJs, NextJs, NodeJs, etc.
      </p>
    </section>
  );
}

export default Hero;
