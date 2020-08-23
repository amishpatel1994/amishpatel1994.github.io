# Portfolio

This is my portfolio made with <3 using reactjs and gatsby.

## Screenshot

![Screenshot](./src/assets/img/demo.png)

### Personalization

Edit `config.js` to put up your details

### Deploying using Github page

`package.json` has a default script that uses `gh-pages` module to publish on Github pages. Simply running `npm run deploy` would publish the site on github pages.

Additionally, it also has [path-prefix](https://www.gatsbyjs.org/docs/path-prefix/) value set for gatsby config in `config.js`. Change `pathPrefix` to relevant path if your gatsby site is hosted on subpath of a domain, `https://theanubhav.com/somePath/`. If you are hosting it as root site, i.e, `https://theanubhav.com/` , remove the pathPrefix configuration.

### Acknowledgments

Huge shoutout to the following two folks for helping me kickstart my own portfolio website:
* (@anubhavsrivastava)[https://github.com/anubhavsrivastava/gatsby-starter-prologue] for the starter template 
* (@stephane-monnot)[https://github.com/stephane-monnot/react-vertical-timeline] for the react vertical timeline component

### License

[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](LICENSE)

refer `LICENSE` file in this repository.
