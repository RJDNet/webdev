import React, { Component } from 'react';
import classnames from 'classnames';

class Infotab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabToggle: false
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      tabToggle: !this.state.tabToggle
    });
  }

  render() {
    const { tabToggle } = this.state;

    return (
      <div className={classnames('tabContainer', { 'tToggle': tabToggle })} onClick={this.handleToggle}>
        <div className='tabTitleContainer'>
          <span className='tabArrow'>▼</span>
          <span className='tabTitle'>{this.props.title}</span>
        </div>
        <div className='tabTextContainer'>
          <p className='tabText'>{this.props.text}</p>
        </div>

        <style jsx>
          {`
          .tabContainer {
            height: 38px;
            margin-top: 30px;
            border: 1px solid #a3a3a3;
            border-radius: 3px;
            box-shadow: 2px 2px 0px 0px #d3d3d3;
            overflow: hidden;
            cursor: pointer;
            transition: ease 0.15s;

            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
            -khtml-user-select: none; /* Konqueror HTML */
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
          }

          .tabContainer.tToggle {
            height: 160px;
          }

          .tabTitleContainer {
            padding: 10px;
            font-size: 15px;
            cursor: pointer;
            text-align: left;
          }

          .tabTitleContainer:hover {
            background-color: #ededed;
          }

          .tabTitle {
            width: 100%;
            padding-left: 15px;
            color: #3d3d3d;
            text-align: left;
            cursor: pointer;
          }

          .tabArrow {
            color: #686868;
            font-size: 12px;
          }

          .tabTextContainer {
            padding: 10px;
            border-top: 1px solid #c4c4c4;
            cursor: pointer;
          }

          .tabText {
            color: #3d3d3d;
            font-size: 14px;
            text-align: left;
            cursor: pointer;
          }
        `}
        </style>
      </div>
    );
  }
}

export default Infotab;