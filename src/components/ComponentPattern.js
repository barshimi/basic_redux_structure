import React from 'react'
// import css from 'styles/css.css'

export default class CoreLayout extends React.Component {
  static propTypes = {
    children: React.PropTypes.element,
    name: React.PropTypes.string,
    actions: React.PropTypes.object,
    navTitle: React.PropTypes.object,
    menuState: React.PropTypes.string
  }

  static defaultProps = {
    name: 'Guest'
  };

  componentWillMount () {
    // add event listeners (Flux Store, WebSocket, document, etc.)
  }

  componentDidMount () {
    // React.getDOMNode()
  }

  componentWillUnmount () {
    // remove event listeners (Flux Store, WebSocket, document, etc.)
  }

  get smilingMessage () {
    return (this.state.smiling) ? 'is smiling' : ''
  }

  render () {
    return (
      <div onClick={this.handleClick}>
        {this.props.name} {this.smilingMessage}
      </div>
    )
  }
}
