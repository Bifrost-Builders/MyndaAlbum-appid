import React from 'react';

class ImageUpload extends React.Component {
  handleFileChange = (event) => {
    const imageContainer = document.getElementById("image-container");
    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
      const newImg = document.createElement("img");
      newImg.src = URL.createObjectURL(files[i]);
      imageContainer.appendChild(newImg);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="card">
          <div id="image-container"></div>
          <label htmlFor="input-file">Upload Image</label>
          <input type="file" accept="image/jpeg, image/png, image/jpg" id="input-file" multiple onChange={this.handleFileChange} />
        </div>
      </div>
    );
  }
}

export default ImageUpload;
