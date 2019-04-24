import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WithClass from '../../../hoc/WithClass';
import Auxiliar from '../../../hoc/Auxiliar';
import styles from './Person.module.css';

class Person extends Component {
  render() {
    console.log('[Persons.js] rendering');

    return (
      <Auxiliar classes={styles.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I'm {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type='text'
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Auxiliar>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default WithClass(Person, styles.Person);
