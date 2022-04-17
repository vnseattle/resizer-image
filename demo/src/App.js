import React, { useState } from 'react';
import { resize } from "resizer-image";

function App() {
  const [images, setImages] = useState([]);
  const sizes = [
    { w: 0, h: 0 }, // changes width, keeps height
    { w: 160, h: 0 }, // changes width, keeps height
    { w: 0, h: 90 }, // changes height, keeps width
    { w: 160, h: 90 },
    { w: 320, h: 180 },
    { w: 480, h: 270 },
    { w: 640, h: 360 }
  ]

  const onFileChange = async (e) => {
    const input = e.target.files[0];
    const resizedImages = await resize(input, sizes);
    setImages(resizedImages)
  }

  return (
    <div >
      <input
        type="file"
        onChange={onFileChange}
        accept="image/*"
      />
      {images.map((img, index) => <div key={index}>
        {sizes[index].w}x{sizes[index].h}<br />
        <img src={img} alt='resized' />
      </div>)}
    </div>
  );
}



export default App;
