import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent'

import './ImageField.scss';

class ImageField extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            urlToSend: '',
            userInputURL: ''
         };
    }
    onImageDrop = (files) => {
        const CLOUDINARY_UPLOAD_PRESET = "ffusji9p";
        const CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/db0oxvrdr/image/upload";

        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', files[0])
            upload.end((err, response) => {
                if (err) { console.error(err) }
                if (response.body.secure_url !== '') {
                    this.setState({ urlToSend: response.body.secure_url }, () => {
                        if (this.state.urlToSend) {
                            this.props.handlePictureUpload(this.state.urlToSend)
                        }
                    }) 
                }
          });

          this.props.handlePictureUpload(this.state.urlToSend)
    }
    userInputEnter = (e) => {
        e.preventDefault();
        console.log("enter")
        this.setState({ urlToSend: this.state.userInputURL})
    }
    render() {
        return (
            <div>
                Image
                {(this.state.urlToSend || this.props.imageToEdit) ? 
                    <div>
                        <img src={`${this.props.imageToEdit || this.state.urlToSend}`} width="150px" />
                        <div onClick={() => this.setState({ urlToSend: ''})}>change picture</div>
                    </div>
                    :
                    <div>
                        Link: <input value={this.state.userInputURL} onChange={(e) => this.setState({ userInputURL: e.target.value})}/>
                        <button onClick={this.userInputEnter}>ENTER</button>
                        <div>OR</div>
                        <Dropzone
                            className="imageDrop"
                            multiple={false}
                            accept="image/*"
                            onDrop={this.onImageDrop}>
                            <p>Upload</p>
                        </Dropzone>
                    </div>
                }
            </div>
        );
    }
}

export default ImageField;