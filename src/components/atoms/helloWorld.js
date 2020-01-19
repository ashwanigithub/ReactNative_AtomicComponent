/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';

const HelloWorld = ({name}) => {
  return (
    <Text style={{backgroundColor: 'red', paddingTop: 50}}>
      Button component {name}
    </Text>
  );
};
export default HelloWorld;
