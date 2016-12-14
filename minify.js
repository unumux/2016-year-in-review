const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require("imagemin-pngquant");
const imageminSvgo = require("imagemin-svgo");
 
imagemin(['images-src/**/*.{jpg,jpeg,png,svg}'], 'images',
    {
        use: [
            imageminMozjpeg({ quality: 90 }),
            imageminPngquant(),
            imageminSvgo()
        ]
    }).then(() => {
        console.log('Images optimized');
});