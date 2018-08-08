# Friends of North Shore Elementary

This is the respository for the FNSE website located at http://fnse.org. 

1. [Services and Tools Used](#services-and-tools-used)
2. [Code & Build Process](#introduction-to-the-code--build-process)
3. [The Site Content](#notes-on-the-content)
4. [CSS Organization](#notes-on-the-css)
5. [JavaScript Dependencies](#notes-on-the-javascript)
6. [Responsive Concerns](#responsive-concerns)
7. [SEO](#seo)
8. [Style Guide](#style-guide)
9. [Performance](#performance)
10. [Comaptibility, Support & Known Issues](#compatibility-support-and-known-issues)


## Services and Tools Used

**Domain**: [Godaddy](http://godaddy.com)

**Content Manager**: Built with [Hugo](https://gohugo.io)

**Hosting**: Hosted at [Netlify](http://netlify.com).

**Compiler**: Compiled with [CodeKit](https://codekitapp.com) locally, and with [Gulp](https://gulpjs.com) on the server.

**Admin Panel**: [Forestry.io](http://forestry.io) provides the user interface to edit content.

**Forms**: Wufoo or Netlify offering?

Hugo is a static site generator, which means every page on the site has its HTML generated ahead of time. So, this site has no database. Whenever an edit is made through the front end, the entire site is rebuilt very quickly. This happens as a post commit hook in Netlify. Netlify detects the change, rebuilds, and redeploys to their CDN. The site is served quickly since there is no server to run.

Non technical users will not need to know what is happening. They'll just make a change, the site rebuilds, and the changes will appear. Technical users can also edit the code directly, manually trigger a rebuild, and commit the code. To work on the site, programmers must use Codekit or some other tool that can compile the SASS files into CSS, and mizimize the JS files. Before writing code, hugo must be [installed locally](https://gohugo.io/getting-started/installing/) and [the local server must be running](https://gohugo.io/getting-started/usage/).

## Introduction to the Code & Build Process

The best way to familiarize yourself with the code is to understand Hugo. The tutorials on their website are a great point to start with. That said, here are some key locations to be aware of:

`/content`: This directory holds the markdown files that represent all of the content on the site. When users edit text, the text is found on one of these files. These files also contain _front matter_, which is a config block at the top of each file. That block may dictate which images or tags the page uses.

`/themes/charity/layouts`: All of the HTML files, which use Hugo templating, that the entire site is built off of.

`/themes/charity/static`: All of the static assets. CSS is written in the `sass` directory, and then compiled into CSS with Codekit or any other comparible tool. JS is minizmied in a similar fashion. Images live in the `/images` directory.

As far as the build process goes, there are 3 steps to be aware of:

1. SCSS is compiled into CSS locally. I used CodeKit, but any tool is fine. The CSS must be committed because that is what will be served. The build process in Netlify does not duplicate this step currently.

2. JS must be minified locally. I used CodeKit, but any tool is fine. The minified file must be committed because that is what will be served. The build process in Netlify does not duplicate this step currently.

3. Images are complicated. See below:

Every image that a user uploads goes into the `/images/user` folder. Now, have a look at `gulpfile.js`. Notice each image in the `images/user` folder is looped over, and resaved as different sizes. Each size of the image will be added to `/images/responsive`, which is what we will serve to the site visitor. Not only are the images resized, but they are also compressed by the same script. Every time Netlify deploys, this process must be run. So, our build script is:

    gulp img; hugo

Netlify first processes all of the images, and then rebuilds Hugo. So, if a user adds an image through Forestry, it will be saved under `/images/user`, and then Netlify will detect the new image, run the build process, and deploy the site. **Important**: Netlify does not commit these changes -- it completely copies the repo each deploy and stores the responsive images there. So, if things break locally with images, it is because you haven't generated the responsive versions. The same command (`gulp img; hugo`) must be run in terminal inside of the fnse directory.

## Notes on the Content

The content is broken down into 3 main types:
- **Page**: A web page with a unique URL.
- **Module**: A section inside of a webpage.
- **Question**:	A single FAQ question.

### Pages

Each page consists of front matter like `title`, `description`, `hero_image` and `url`. Additionally, there is a `modules` variable in the front matter that is an array of modules ID's. `/themes/charity/layouts/default/baseof.html` is the entry point for how this is rendered while `/themes/charity/layouts/partials/content.html` contains the branching logic for each type of module.

### Modules

A module can be included on any page. There are a few main types of modules:
- Text Left
- Text Right
- Half Half
- Quote
- Carousel
- Center List
- Hero
- Footer

Each module can further be customized with class names in the front matter. For example, Questions about North Shore has `module text_left faq blue_module padded-module` as class names. `padded-module` allows the background color to extend the entire height by using padding instead of margin. `blue_module` turns the background blue, and adjusts the text and link colors accordingly. `faq` is a custom class hook that can be used in the CSS to add specific styling to that one module. There is no master list of options, but every option is used on the site. If you need to make a new module, find the type on the site, and look at the front matter of the corresponding markdown file.

### Questions

To make it easier to view in the admin panel, questions are separated out into their own content type. These are simply posts with the quesiton as the title and the answer as the content.

## Notes on the CSS

If you find yourslef having to debug the CSS, the first place to start would be `/sass/core/layout.scss`. You will find all shared styles across pages and modules. At the top, you can uncomment the debug section to outline everything in red. If you explore the `core` folder more, each file is self explanatory. `animations.scss` hols the animations, `constants.scss` holds variables, `typography.scss` loads fonts and sets default rules, and so on.

Outside of `core`, we have the `/sass/modules` directory. Here, we have each type of module listed in the content section above. Carousel, Text Left, Quote, etc. Not only are the module specific rules defined in these files, but also content specific rules. For example, the **Stay In Touch** module has a custom grid of 9 photos in it. This is accomplished by using the Half half module, and then putting specific CSS rules in `half_half.scss` to achieve the desired look. So, if you need to debug a certain module, first find out what type of module it is, and then jump into the appropriate CSS file.

## Notes on the JavaScript

The JavaScript for this site is fairly common. The goal was to keep it small and remove the need for things like jQuery. The vast majority of what it is doing is to improve initial page load performance or implement cross browser features. It can all be found at `/themes/charity/static/js/index.js`. It is then minified into `index-min.js` and served. The file is commented, and here are the cliff notes:

**LazyLoad**: Using a native JS [lazyload script](https://www.andreaverlicchi.eu/lazyload/) to only load images when they come into view. In modern browsers, this uses `IntersectionObserver`, and in older browsers this attaches to the scroll event. Anything with a class name of `lazy` and a `data-src` attribute will automatically be lazy loaded.

**ZenScroll**: Just a small, convenient [solution for smooth scrolling](https://github.com/zengabor/zenscroll) on anchor links for browsers that don't support `scroll-behavior: smooth;`

**MapKitJS**: The map in the zoned FAQ module has a nice visual impact. Using my developer account, I've added a functional Apple Maps implementation. The keys for this setup were created using https://mapkitjs.rubeng.nl/#/.

**Animations**: CSS Animations are used to add subtle effects while scrolling. Any element with a class name of `triggerMe` will be checked on scroll. If the element is in view, it will be given a class of `triggeredCSS3` where animations can be attached.

**Carousel**: https://glidejs.com for carousel

As much of the JS as possible is loaded as needed. For example, maps are only loaded when they're about to come into view. The combination of this, lazy load and deferred loading has decreased the initial load from ~12mb to ~600kb.

## Responsive Concerns

The site uses `@media` queries to handle different screen sizes. The breakpoints can be found in `mixins.scss`. For a quick look at the expected responsive design, view the site in [Google's Resizer](https://material.io/tools/resizer/#url=https%3A%2F%2Ffnse.netlify.com). The responsive CSS is fairly straightforward, while the image handling is more complex. There are two specific spots where responsive images are used.

**Hero Image**: To avoid using a polyfill for `object-fit:cover`, the hero image uses a CSS background instead of an image. At the time of this writing, image-set in CSS has [poor support](https://cloudfour.com/examples/image-set/) but looks like it will be implemented. So, for now, browser that don't support it will just load the 1440px background image. Browsers that do support it will conditionally load the 1440px or 1920px background image. See `hero.html` for the scoped inline CSS.

**Left and Right Module Images**: The vast majority of images on the site are in the Left text and Right text modules. Those modules use the partial `img.html` which contains an `img` tag with a `srcset`.

    <figure class="triggerMe">
        <img class="coreImage triggerMe lazy" data-src="/images/responsive/{{ $fileName }}@768.{{ $fileType }}"
            data-srcset="/images/responsive/{{ $fileName }}@1080.{{ $fileType }} 1080w,
                         /images/responsive/{{ $fileName }}@768.{{ $fileType }} 768w"
            data-sizes="(min-width: 35em) 100vw,
     			        45vw" />
 	    <figcaption>
 		    {{ .Params.caption }}
 	    </figcaption>
    </figure>

The `data-sizes` mimic the sizes in `mixins.scss`. For phones, the image will be full width. For tablet and PC, the image takes up 45% of the width. The browser will choose the best fit. **Note:** To debug this, there is a funciton at the bottom of the JavaScript file that you can call on document load and it will print out the pixel density, resolution, and browser decision.

## SEO

There is no complex SEO strategy in place yet. We'll try to convince people to link to the site on social media / other sites, but due to the nature of the site and small community, that may not do much. So, for now, just the staples are in place:

- Each page has a descriptive title.
- Each page has a proper meta description.
- H1, H2 and H3's are used properly, and represent the page structure.
- Captions and alt texts as much as possible.
- Sitemap in place.

## Style Guide

Style guide for the site, and anyone who may want to make a separate document

Colors, Assets, Fonts, Marketing stuff all in one place?

Use a style guide generator for my own consistency? Make a living style guide?

## Performance

- lazy load (https://www.andreaverlicchi.eu/lazyload/)
- http://www.webpagetest.org (As of this writing the home page has all A's)
- cloudinary website speed test (https://webspeedtest.cloudinary.com) is useful, but watch the resolution in the recommendations
- https://website.grader.com/results/fnse.netlify.com
- http://nibbler.silktide.com/en_US (another tester)
- https://gtmetrix.com/reports/fnse.netlify.com/2xJupMhD
- https://developers.google.com/speed/pagespeed/insights/?url=fnse.netlify.com&tab=desktop

## Compatibility, Support and Known Issues

- compatibility. currently IE+ and all modern browsers
- noscript
- print styles are weak right now
