const { registerPlugin } = require('@scullyio/scully');
const StoryblokClient = require('storyblok-js-client');

let Storyblok = new StoryblokClient({
  accessToken: 'xWSn5AzGpBqUF00dEPJkLgtt'
})

function getAllArticles(route) {
  return Storyblok.getAll('cdn/stories').then(stories => {
    const r = stories.map(story => {
      return ({
        route: `/articles/${story.slug}`
      });
    });
    return r;
  });
}

const validator = async () => [];
registerPlugin('router', 'getAllArticles', getAllArticles, validator);

exports.config = {
  projectRoot: './src',
  projectName: 'angular-roma',
  outDir: './dist/static',
  routes: {
    '/articles/:slug': {
      type: 'getAllArticles',
    } 
  }
};