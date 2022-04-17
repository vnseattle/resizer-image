/*************************************************************
Resizer Images
© 2022 Henry Nguyen a.k.a Dev9x
************************************************************/
const initalSizes = [
    { w: 160, h: 90 },
    { w: 320, h: 180 },
    { w: 480, h: 270 },
    { w: 640, h: 360 }
]
/**
 * 
 * @param {*} input = a file or base64 image 
 * @param {*} sizes = an array of sizes in pixels [{x: number , y: number }]
 * @returns an array of resized image in blob 
 */
export const resize = async (input, sizes = initalSizes) => {
    const results = [];
    let imageBase64 = input; // base64 default
    if (typeof input === 'object') { // file object 
        imageBase64 = await objectToBase64(input);
    }
    const image = await base64ToImage(imageBase64);// base64 to Image file 
    for (let i = 0; i < sizes.length; i++) {
        let width = sizes[i].w;
        let height = sizes[i].h;
        if (height <= 0) {
            height = width * image.height / image.width;
        }
        if (width <= 0) {
            width = height * image.width / image.height;
        }
        if (height + width === 0) {
            width = image.width;
            height = image.height;
        }
        const resizedImage = await resizeImage(image, width, height); // resize the image
        results.push(resizedImage)
    }
    return results.length > 1 ? results : results;
}

export const objectToBase64 = (file) => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => resolve(reader.result), false);
        reader.readAsDataURL(file);
    });
}


export const base64ToImage = (base64) => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener("load", () => resolve(image));
        image.addEventListener("error", (error) => reject(error));
        image.setAttribute("crossOrigin", "anonymous");
        image.src = base64;
    });
}

const resizeImage = (img, width, height) => {
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(img, 0, 0, width, height);
    return new Promise((resolve) => {
        canvas.toBlob((file) => {
            resolve(URL.createObjectURL(file));
        }, "image/jpeg");
    });
}
