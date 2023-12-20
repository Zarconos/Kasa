import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Toggle from '../components/toggle';
import about from '../assets/photos/about.jpg'
import '../style/style.css';


const About = () => {

  return (
    <div>
      <Header />
      <div id="main">
      <section id="banner">
      <img src={about} alt="illustration" />
      </section>
      <div id='titles'>
       <Toggle class="titles" title="Fiabilité"> 
          <p>Non tellus orci ac auctor augue. Urna duis convallis convallis tellus. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Arcu non sodales neque sodales ut. Mattis pellentesque id nibh tortor id aliquet lectus. Amet mattis vulputate enim nulla aliquet porttitor. Elit ullamcorper dignissim cras tincidunt. Enim neque volutpat ac tincidunt vitae semper quis. Mattis aliquam faucibus purus in massa. Leo integer malesuada nunc vel. Ultrices tincidunt arcu non sodales neque sodales. Diam phasellus vestibulum lorem sed risus ultricies tristique. Mi sit amet mauris commodo quis imperdiet. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi.</p>
        </Toggle>
        <Toggle class="titles" title="Respect">
          <p>Porta lorem mollis aliquam ut porttitor. Fames ac turpis egestas sed tempus urna et pharetra. Nunc eget lorem dolor sed viverra ipsum. Neque egestas congue quisque egestas diam. Feugiat nibh sed pulvinar proin gravida hendrerit. Tincidunt augue interdum velit euismod. Lectus quam id leo in. Tempus urna et pharetra pharetra massa massa ultricies. Commodo nulla facilisi nullam vehicula ipsum a. Tortor at risus viverra adipiscing. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Eget dolor morbi non arcu risus quis.</p>
        </Toggle>
        <Toggle class="titles" title="Services">
          <p>Integer enim neque volutpat ac tincidunt vitae. Quis blandit turpis cursus in hac. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Odio aenean sed adipiscing diam donec. Egestas sed tempus urna et. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Sit amet facilisis magna etiam. Posuere urna nec tincidunt praesent semper. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Vel facilisis volutpat est velit egestas dui id ornare arcu. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Morbi quis commodo odio aenean sed. Mollis aliquam ut porttitor leo.</p>
        </Toggle>
        <Toggle class="titles" title="Sécurité">
          <p>Amet porttitor eget dolor morbi non arcu risus quis. Tellus molestie nunc non blandit massa enim nec dui. Neque volutpat ac tincidunt vitae semper quis. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. A diam maecenas sed enim ut sem viverra. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Morbi tincidunt ornare massa eget egestas purus viverra accumsan. Amet facilisis magna etiam tempor orci eu lobortis elementum. In nulla posuere sollicitudin aliquam ultrices. Orci ac auctor augue mauris augue. Erat velit scelerisque in dictum non consectetur a. Tincidunt id aliquet risus feugiat in ante metus dictum at.</p>
        </Toggle>
        </div>
        </div>
      {<Footer />}
    </div>
  );
};

export default About;
