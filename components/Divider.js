import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Divider = (props) => {
  if (props.type === 'strike') {
    return (
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{...styles.divider, width: '20%', marginVertical: 0}} />
        <Text style={{...props.style, paddingHorizontal: 15}}>{props.children}</Text>
        <View style={{...styles.divider, width: '20%', marginVertical: 0}} />
      </View>
    );
  }
  else return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
    marginVertical: 20,
    width: '100%'
  }
});

export default Divider;