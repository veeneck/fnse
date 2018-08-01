# Friends of North Shore Elementary

This is the respository for the FNSE website located at http://fnse.org. 

## Services and Tools Used

**Content Manager**: Built with [Hugo](https://gohugo.io)

**Hosting**: Hosted at [Netlify](http://netlify.com).

**Compiler**: Compiled with [CodeKit](https://codekitapp.com)

Hugo is a static site generator, which means every page on the site has its HTML generated ahead of time. So, this site has no database. Whenever an edit is made through the front end, the entire site is rebuilt very quickly. This happens as a post commit hook in Netlify. Netlify detects the change, rebuilds, and redeploys to their CDN. The site is served quickly since there is no server to run.

Non technical users will not need to know what is happening. They'll just make a change, the site rebuilds, and the changes will appear. Technical users can also edit the code directly, manually trigger a rebuild, and commit the code. To work on the site, programmers must use Codekit or some other tool that can compile the SASS files into CSS, and mizimize the JS files. Before writing code, hugo must be [installed locally](https://gohugo.io/getting-started/installing/) and [the local server must be running](https://gohugo.io/getting-started/usage/).

## Introduction to the Code

The best way to familiarize yourself with the code is to understand Hugo. The tutorials on their website are a great point to start with. That said, here are some key locations to be aware of:

`/content`: This directory holds the markdown files that represent all of the content on the site. When users edit text, the text is found on one of these files. These files also contain _front matter_, which is a config block at the top of each file. That block may dictate which images or tags the page uses.

`/themes/charity/layouts`: All of the HTML files, which use Hugo templating, that the entire site is built off of.

`/themes/charity/static`: All of the static assets. CSS is written in the `sass` directory, and then compiled into CSS with Codekit or any other comparible tool. JS is minizmied in a similar fashion. Images live in the `/images` directory.

## Responsive Concerns

## SEO

## Colors, Assets, Fonts, Marketing stuff all in one place?

## Performance

- lazy load (https://www.andreaverlicchi.eu/lazyload/)
- http://www.webpagetest.org (As of this writing the home page has all A's)
- cloudinary website speed test (https://webspeedtest.cloudinary.com) is useful, but watch the resolution in the recommendations
