# Friends of North Shore Elementary

This is the respository for the FNSE website located at http://fnse.org. 

## Services and Tools Used

**Content Manager**: Built with [Hugo](https://gohugo.io)

**Hosting**: Hosted at [Netlify](http://netlify.com).

**Compiler**: Compiled with [CodeKit](https://codekitapp.com)

Hugo is a static site generator, which means every page on the site has its HTML generated ahead of time. So, this site has no database. Whenever an edit is made through the front end, the entire site is rebuilt very quickly. This happens as a post commit hook in Netlify. Netlify detects the change, rebuilds, and redeploys to their CDN. The site is served quickly since there is no server to run.

Non technical users will not need to know what is happening. They'll just make a change, the site rebuilds, and the changes will appear. Technical users can also edit the code directly, manually trigger a rebuild, and commit the code. To work on the site, programmers must use Codekit or some other tool that can compile the SASS files into CSS, and mizimize the JS files. Before writing code, hugo must be [installed locally](https://gohugo.io/getting-started/installing/) and [the local server must be running](https://gohugo.io/getting-started/usage/).

## Introduction to the Code

## Colors, Assets, Fonts, Marketing stuff all in one place?

## Performance

- lazy load (https://www.andreaverlicchi.eu/lazyload/)
- http://www.webpagetest.org (As of this writing the home page has all A's)
- cloudinary website speed test (https://webspeedtest.cloudinary.com) is useful, but watch the resolution in the recommendations
