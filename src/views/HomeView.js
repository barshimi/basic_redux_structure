'use strict'

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {homeActionCreators} from 'actions/home_action'
import DuckImage from 'static/Logo-Big.png'
import classes from 'styles/homeView.scss'

export class HomeView extends React.Component {
  static propTypes = {
    actions: PropTypes.object,
    counter: PropTypes.number.isRequired
  }

  AddCounter = () => {
    this.props.actions.incrementCounter(this.props.counter)
  }

  AddDouble = () => {
    this.props.actions.doubleIncrement(this.props.counter)
  }

  render () {
    return (
      <div className='container text-center'>
        <div className='row'>
          <div className='col-xs-2 col-xs-offset-5'>
            <img className={classes.full_logo}
              src={DuckImage}
              alt='Tikal Full Stack developers' />
          </div>
        </div>
        <h1 className={classes.welcome}>Welcome you to the React Redux Basic Structure</h1>
        <h2 className={classes.counter_title}>
          Sample Counter:
          {' '}
          <span className={classes['counter--green']}>{this.props.counter}</span>
        </h2>
        <button className='btn btn-default' onClick={this.AddCounter}>
          Increment
        </button>
        {' '}
        <button className='btn btn-default' onClick={this.AddDouble}>
          Double
        </button>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Object.assign({}, homeActionCreators), dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
