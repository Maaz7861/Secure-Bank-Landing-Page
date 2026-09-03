const { Jimp } = require('jimp');

async function removeWhiteBackground() {
    console.log("Loading image with Jimp...");
    const image = await Jimp.read('public/logo.jpeg');
    
    console.log("Processing image to remove white background...");
    
    // Iterate through all pixels
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
        const red   = this.bitmap.data[idx + 0];
        const green = this.bitmap.data[idx + 1];
        const blue  = this.bitmap.data[idx + 2];
        const alpha = this.bitmap.data[idx + 3];

        // Check if pixel is white or very close to white
        // White is RGB(255, 255, 255). We use a threshold for off-white.
        if (red > 240 && green > 240 && blue > 240) {
            // Set alpha to 0 (transparent)
            this.bitmap.data[idx + 3] = 0;
        }
    });

    console.log("Saving transparent image to public/logo.png...");
    await image.write('public/logo.png');
    console.log("Done!");
}

removeWhiteBackground().catch(console.error);
