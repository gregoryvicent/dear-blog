# DearBlog

DearBlog is a project made in Node.js and Express.js using the Pug templating engine.

The goal of this project was to create a simple and easy to use blog website that would showcase a person's essentials while allowing for dynamic content creation plus browser friendly path integration.

## Technologies

- *Javascript*
- *Node.js*
- *Express*
- *Pug*
- *Markdown*
- *HTML*
- *CSS*

## Posts on DearBlog

Each post within the DearBlog website is created from a Markdown type file used for its simplicity and convenience when generating content for the web.

Internally DearBlog takes these Markdown files and converts them to HTML to finally translate this into a Pug template.

The only thing the user needs to worry about is generating Markdown content inside the folder located at `/src/public/posts` providing the necessary data in the header of these files for DearBlog to work correctly.

These data are:

**title**: Provides the title of the browser tab, it is important for the SEO of the blog.
**date**: The date the entry was created, helps organize each of the blog entries in order of age.
**img**: Indicates the cover image of the post in question.
**description**: Provides the description for both SEO and DearBlog itself.

### Images inside the posts on DearBlog

Post images are located inside the address `/src/public/assets/img/posts/[name-of-your-post]`. It is recommended to create a folder with the name of your post for each post you have and save the corresponding images of each post in their respective folder, this to maintain order within DearBlog and avoid possible errors (we are working to improve this process).

## Get Started

First clone the repository:
```
git clone https://github.com/gregoryvicent/dear-blog.git
```

Now go into the project folder:
```
cd DearBlog
```

Install necessary dependencies with npm:
```
npm install
```

Start the server using:
```
npm start
```

Or in development mode with:
```
npm run dev
```

In local mode the server runs on port 4000.

DearBlog is working now.