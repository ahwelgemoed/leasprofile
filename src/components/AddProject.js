import React, { Component } from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import FileUpload from 'react-firebase-file-uploader';
import firebase from 'firebase';
import { Container, Row, Col } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class AddProject extends Component {
  state = {
    Title: '',
    Body: '',
    person: [],
    Technology: [],
    Technologys: [],
    subTitle: '',
    BannerImg: '',
    bodyImg: [],
    People: [],
    progress: 0
  };
  inputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleProgress = progress => this.setState({ progress });

  onaddPersonSubmit = () => {
    this.setState({
      People: [...this.state.People, this.state.person],
      person: []
    });
  };
  onaddTechnologySubmit = () => {
    this.setState({
      Technologys: [...this.state.Technologys, this.state.Technology],
      Technology: []
    });
  };
  inputPeopleChange = e => {};
  handleUploadSuccess = filename => {
    this.setState({
      image: filename
    });

    firebase
      .storage()
      .ref('images')
      .child(filename)
      .getDownloadURL()
      .then(url =>
        this.setState({
          bodyImg: [...this.state.bodyImg, url]
        })
      )
      .then(toast('Body Images Uploaded'));
  };
  handleUploadSuccessF = filename => {
    this.setState({
      image: filename
    });

    firebase
      .storage()
      .ref('images')
      .child(filename)
      .getDownloadURL()
      .then(url =>
        this.setState({
          BannerImg: url
        })
      )
      .then(toast('Feture Image Uploaded'));
  };
  onSubmit = e => {
    e.preventDefault();
    const {
      Title,
      Body,
      Technologys,
      subTitle,
      BannerImg,
      bodyImg,
      People
    } = this.state;
    const newProject = {
      Title,
      Body,
      Technology: Technologys,
      People,
      bodyImg,
      BannerImg,
      subTitle
    };
    const { firestore } = this.props;
    console.log(newProject);
    firestore
      .add(
        {
          collection: 'projects'
        },
        newProject
      )
      .then(() => console.log('Saved'))
      .then(toast('Saved'))
      .then(() => this.props.history.push('/'));
  };
  render() {
    return (
      <div style={{ zIndex: '99' }}>
        <Container>
          <ToastContainer />
          <Row>
            <Col sm={12}>
              <h1>Add Project</h1>
              <div className="form-group">
                <label htmlFor="Title">Title</label>
                <input
                  placeholder="Title"
                  className="form-control form-control-sm"
                  type="text"
                  name="Title"
                  onChange={this.inputChange}
                  value={this.state.Title}
                />
                <label htmlFor="Sub-Title">Sub-Title</label>
                <input
                  placeholder="Sub-Title"
                  className="form-control form-control-sm"
                  type="text"
                  name="subTitle"
                  onChange={this.inputChange}
                  value={this.state.subTitle}
                />
                <Col sm={12}>
                  <label htmlFor="person">Person</label>
                  <input
                    placeholder="person"
                    className="form-control form-control-sm"
                    type="text"
                    name="person"
                    onChange={this.inputChange}
                    value={this.state.person}
                  />
                  <button
                    onClick={this.onaddPersonSubmit}
                    className="btn btn-primary"
                  >
                    Add Person
                  </button>
                  <ul>
                    {this.state.People.map(p => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </Col>
                <Col sm={12}>
                  <label htmlFor="Technology">Technology</label>
                  <input
                    placeholder="Technology"
                    className="form-control form-control-sm"
                    type="text"
                    name="Technology"
                    onChange={this.inputChange}
                    value={this.state.Technology}
                  />
                  <button
                    onClick={this.onaddTechnologySubmit}
                    className="btn btn-primary"
                  >
                    Add Technology
                  </button>
                  <ul>
                    {this.state.Technologys.map(p => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </Col>

                <label htmlFor="body">Body</label>
                <textarea
                  className="form-control form-control-sm"
                  name="Body"
                  onChange={this.inputChange}
                  value={this.state.body}
                />
                <Col sm={24} className="colPadd">
                  <label htmlFor="body">Body Images</label>
                  <span className="badge badge-secondary">
                    {this.state.progress}
                  </span>

                  <FileUpload
                    onProgress={this.handleProgress}
                    className="btn btn-info"
                    accept="image/*"
                    multiple
                    storageRef={firebase.storage().ref('images')}
                    onUploadSuccess={this.handleUploadSuccess}
                  />
                </Col>
                <Col sm={24} className="colPadd">
                  <label htmlFor="body">Upload Feature Image</label>

                  <FileUpload
                    className="btn btn-info"
                    accept="image/*"
                    storageRef={firebase.storage().ref('images')}
                    onUploadSuccess={this.handleUploadSuccessF}
                  />
                </Col>
                <button onClick={this.onSubmit} className="btn btn-primary">
                  Save
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default firestoreConnect()(AddProject);
