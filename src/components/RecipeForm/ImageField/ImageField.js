import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent'

import './ImageField.scss';

class ImageField extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            urlToSend: '',
            userInputURL: '',
            showEditImage: false
         };

         this.imgElem = React.createRef();
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.imageToEdit)
        if (nextProps.imageToEdit) {
            this.setState({ showEditImage: true })
        }
    }
    onImageDrop = (files) => {
        const CLOUDINARY_UPLOAD_PRESET = "ffusji9p";
        const CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/db0oxvrdr/image/upload";

        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', files[0])
            upload.end((err, response) => {
                if (err) { console.error(err) }
                console.log("loading");
                if (response.body.secure_url !== '' && response.status === 200) {
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
        this.setState({ urlToSend: this.state.userInputURL}, () => {
            this.props.handlePictureUpload(this.state.urlToSend)
        })
        
    }
    changePicture = () => {
        this.setState({
            userInputURL: '',
            showEditImage: false
        })
    }
    render() {
        return (
            <div>
                Image:
                {(this.state.urlToSend || this.state.showEditImage) ? 
                    <div className="picture-display">
                        <img ref={this.imgElem} src={`${this.props.imageToEdit || this.state.urlToSend}`} width="150px" />
                        <div className="picture-display__changeBtn" onClick={this.changePicture}>change picture</div>
                    </div>
                    : <div className="load-image">
                        <input 
                            value={this.state.userInputURL} 
                            onChange={(e) => this.setState({ userInputURL: e.target.value})}
                            placeholder="link url"
                            onBlur={this.userInputEnter}
                        />
                        {/* <button className="load-image__enterBtn" onClick={this.userInputEnter}>ENTER</button> */}
                        <Dropzone
                            className="imageDrop"
                            multiple={false}
                            accept="image/*"
                            onDrop={this.onImageDrop}>
                            <p>UPLOAD FROM COMPUTER</p>
                        </Dropzone>
                    </div>
                }
            </div>
        );
    }
}

export default ImageField;