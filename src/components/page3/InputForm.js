import React, { Component } from 'react';

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangeContent = this.handleChangeContent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { items: [], title: '', category: '', content: '' };
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.hadleChange = this.handleSubmit.bind(this);
    // this.state = { items: [], url: '', title: '', category: '', content: '' };
  }
  // hadleChange(event) {
  //   this.setState({ url: event.target.value },
  //     { title: event.target.value },
  //     { category: event.target.value }, { content: event.target.value });
  // }
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
      url: this.state.url,
      title: this.state.title,
      category: this.state.category,
      content: this.state.content,
    };
    // if (newItem.title === ''||newItem.category === ''||newItem . content === '') {
    //   alert('you must insert all!!');
    // }
    console.log(this.state.url);
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: '',
      url: '',
    }));
  }
  render() {
    return (
      <div>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <h3>
          Posts
          </h3>
          <ul className="list-group">

            <li className="list-group-item" id="1" src={this.state.url}>
            title: {this.state.title} / category: {this.state.category} /
             content: {this.state.content} </li>
            <li className="list-group-item" id="2" >
            title: {this.state.title} / category: {this.state.category} /
              content: {this.state.content} </li>
            <li className="list-group-item" id="3" >
              title: {this.state.title} / category: {this.state.category} /
                content: {this.state.content} </li>
            <li className="list-group-item" id="4" >
            title: {this.state.title} / category: {this.state.category} /
            content: {this.state.content} </li>
          </ul>
        </form>
      </div>
    );
  }
}


export default InputForm;
