import React from 'react';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';

export default function() {
  return (
    <div className="container">
      <header>
        <h2>Projects</h2>
      </header>

      <p>
        Life will feel it is always a great need for eu valley, the valley
        CNN ridiculous smile at any time chat mainstream clinical homes.
        Mauris floor was very warm and we need it. One customer now nibh
        Bureau dark pools behavior.
      </p>

      <div className="row">
        <div className="col-4 col-12-mobile">
          <article className="item">
            <a href="/#" className="image fit">
              <img src={pic2} alt="" />
            </a>
            <header>
              <h3>Ipsum Feugiat</h3>
            </header>
          </article>
          <article className="item">
            <a href="/#" className="image fit">
              <img src={pic3} alt="" />
            </a>
            <header>
              <h3>Rhoncus Semper</h3>
            </header>
          </article>
        </div>
        <div className="col-4 col-12-mobile">
          <article className="item">
            <a href="/#" className="image fit">
              <img src={pic4} alt="" />
            </a>
            <header>
              <h3>Magna Nullam</h3>
            </header>
          </article>
          <article className="item">
            <a href="/#" className="image fit">
              <img src={pic5} alt="" />
            </a>
            <header>
              <h3>Natoque Vitae</h3>
            </header>
          </article>
        </div>
        <div className="col-4 col-12-mobile">
          <article className="item">
            <a href="/#" className="image fit">
              <img src={pic6} alt="" />
            </a>
            <header>
              <h3>Dolor Penatibus</h3>
            </header>
          </article>
          <article className="item">
            <a href="/#" className="image fit">
              <img src={pic7} alt="" />
            </a>
            <header>
              <h3>Orci Convallis</h3>
            </header>
          </article>
        </div>
      </div>
    </div>
  )}