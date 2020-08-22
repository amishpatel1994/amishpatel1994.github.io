import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';
import ExperienceSection from '../components/ExperienceSection'


import pic8 from '../assets/images/portrait.jpg';
import Scroll from '../components/Scroll';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'experience', name: 'Work and Education', icon: 'fa-th' },
  // { id: 'projects', name: 'Projects', icon: 'fa-th' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hi! My name is <strong>Amish</strong> but I'm actually not Amish...
            </h2>
            <p>Jack of all trades and on my quest to master the software stack</p>
          </header>

          <footer>
            <Scroll type="id" element={'experience'}>
              <a href="#about" className="button">
                Show me
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="about" className="two">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          <a href="/#" className="image featured">
            <img src={pic8} alt="" />
          </a>

          <p>
            I found my love for software in first year of undergrad and haven't looked back ever since. 
            I find thrill in getting my hands dirty with new technologies and pride myself for being a quick learner through a series of internships where I had to learn new things from scratch everytime! 
            Aside from coding, I am passionate about racquet sports (badminton in particular), photography, and travelling.
          </p>
        </div>
      </section>

      <section id="experience" className="three">
        <ExperienceSection />
      </section>

      

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>

          <p>
            
          </p>

          <form method="post" action="#">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" />
              </div>
              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
