import React, { Component } from 'react';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      title: '',
      message: ''
    };

    this.changeHandler = this.changeHandler.bind(this);
  };

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className='contactMainContainer'>
        <p className='contactTitle'>Contact</p>
        <div className='contactContainer'>
          <p className='contactText'>If you have any enquiries, please feel free to use the contact form below. We are always happy to help with a new project.</p>
          <form action='https://formspree.io/your@email.com' method='POST'>
            <input
              className='contactInput'
              type='text'
              name='name'
              placeholder='Name'
              value={this.state.name}
              onChange={this.changeHandler} />
            <input
              className='contactInput'
              type='email'
              name='email'
              placeholder='Email'
              value={this.state.email}
              onChange={this.changeHandler} />
            <input
              className='contactInput'
              type='text'
              name='title'
              placeholder='Title'
              value={this.state.title}
              onChange={this.changeHandler} />
            <textarea
              className='contactTextArea'
              type=''
              name='message'
              placeholder='Enter your message here...'
              value={this.state.message}
              onChange={this.changeHandler} />
            <input
              disabled
              type='submit'
              className='contactButton'
              value='Send' />
          </form>
        </div>

        <style jsx>
          {`
            .contactMainContainer {
              margin-top: 200px;
            }

            .contactContainer {
              width: 100%;
              max-width: 700px;
              margin: 0px auto;
              margin-top: 20px;
              margin-bottom: 70px;
              padding-left: 10px;
              padding-right: 10px;
              box-sizing: border-box;
            }
            
            .contactTitle {
              width: 100%%;
              display: block;
              padding-bottom: 40px;
              font-size: 28px;
              font-weight: 700;
              text-align: center;
            }

            .contactText {
              width: 100%;
              padding-left: 20px;
              padding-right: 20px;
              padding-bottom: 30px;
              box-sizing: border-box;
              font-size: 16px;
              text-align: left;
            }

            .contactInput {
              width: 100%;
              margin-bottom: 10px;
              padding: 10px;
              border: 1px solid #919191;
              border-radius: 3px;
              box-sizing: border-box;
            }

            .contactTextArea {
              height: 200px;
              width: 100%;
              margin-bottom: 20px;
              padding: 10px;
              border: 1px solid #919191;
              border-radius: 3px;
              box-sizing: border-box;
              font-family: Oxygen, Arial, sans-serif;
            }

            .contactButton {
              height: 40px;
              width: 100px;
              padding: 10px;
              margin: 0px auto;
              border: none;
              border-radius: 3px;
              background-color: red;
              color: white;
              
            }

            .contactButton:hover {
              background-color: darkred;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Contact;