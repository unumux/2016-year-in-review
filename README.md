# 2016-year-in-review

## Adding images

- Place the image in the `images-src` folder
- Run `npm run minify`
- The images will be minified and placed in the `images` folder. Reference the images from that path, not images-src
- Be sure to include both the `images` and `images-src` folders in commits

## Tweaking image compression

The script used to minify images is `minify.js`. You can modify that file to change compression options. Original, unmodified images are ALWAYS in images-src. 