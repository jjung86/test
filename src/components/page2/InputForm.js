import React, { Component } from 'react';
import * as actions from '../../actions';

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangeContent = this.handleChangeContent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { items: [], title: '', category: '', content: '' };
  }
  handleChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  handleChangeCategory(event) {
    this.setState({ category: event.target.value });
  }
  handleChangeContent(event) {
    this.setState({ content: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      title: this.state.title,
      category: this.state.category,
      content: this.state.content,
    };
    // if (newItem.title === ''||newItem.category === ''||newItem . content === '') {
    //   alert('you must insert all!!');
    // }

    // Call Action addPost
    actions.addPost(newItem);
  }
  render() {
    return (
      <div>
        <form className="form-horizontal">
          <h3>
          New Post
          </h3>
          <div className="form-group">
            <label htmlFor="inputTitle" className="col-md-2 control-label" id="title">Title</label>
            <div className="col-md-8">
              <input
                type="Title"
                name="titel"className="form-control"
                value={this.state.title}
                onChange={event => this.setState({ title: event.target.value })}
                placeholder="Title"
              />
            </div>
          </div>
          <div className="form-group">
            <label
              htmlFor="inputCategory"
              className="col-md-2 control-label" id="category"
            >Category</label>
            <div className="col-md-8">
              <input
                type="Category"
                className="form-control"
                value={this.state.category}
                onChange={event => this.setState({ category: event.target.value })}
                placeholder="Category"
              />
            </div>
          </div>
          <div className="form-group">
            <label
              htmlFor="inputTitle" className="col-md-2 control-label" id="content"
            >
              Content</label>
            <div className="col-md-8">
              <textarea
                className="form-control" rows="5"
                value={this.state.content}
                onChange={event => this.setState({ content: event.target.value })}
              />
            </div>
          </div>
          <div className="col-md-10" />
          <button
            type="submit" className="btn btn-primary"
            onClick={(event) => { this.handleSubmit(event); }}
          >
            Submit</button>
        </form>
      </div>
    );
  }
}

export default InputForm;
