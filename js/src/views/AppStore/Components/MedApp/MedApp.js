/* @flow */
import React, { Component } from 'react';
import { Link } from 'react-router';

/** Stylesheets **/
import styles from './MedApp.css';

type Props = {|
  hash: string
|}

// type State = {|
//
// |}

class MedApp extends Component {
  props: Props
  // state: State = {
  // }

  render () {
    const { hash } = this.props;

    return (
      <Link to={ `/dapps/${hash}` }>
        <div className={ styles.MedApp }>
          MedApp
        </div>
      </Link>
    );
  }
}

export default MedApp;