import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';

export default class Hello360 extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            This is pretty cool
          </Text>
        </View>
        <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            can I make two
          </Text>
        </View>
      </View>
      </View>


    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 500,
    height: 300,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    //justifyContent: 'center',
    //alignItems: 'center',
    
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('Hello360', () => Hello360);


