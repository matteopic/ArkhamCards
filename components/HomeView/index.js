import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
} from 'react-native';

import MenuItem from './MenuItem';

export default class Home extends React.Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  };

  render() {
    const {
      navigator,
    } = this.props;
    return (
      <ScrollView>
        <MenuItem navigator={navigator} text="Popular Decks" screen="Browse.Decks" />
        <MenuItem navigator={navigator} text="All Cards" screen="Browse.Cards" />
        <MenuItem navigator={navigator} text="Campaigns" screen="Campaigns" />
        <MenuItem navigator={navigator} text="Settings" screen="Settings" />
      </ScrollView>
    );
  }
}
