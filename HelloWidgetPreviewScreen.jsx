import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { WidgetPreview } from 'react-native-android-widget';

import { HelloWidget } from './HelloWidget';
import useStore from './store';

export function HelloWidgetPreviewScreen() {
  const { text, setText } = useStore(s => s)
  async function getData() {
    const value = await AsyncStorage.getItem('text');
    console.log(value)
    setText(value)
  }
  useEffect(e => {
    console.log(text === '', text.length)
    if (text === '') {
      getData();
    }
  }, [])
  return (
    <View style={styles.container}>
      <WidgetPreview
        renderWidget={() => <HelloWidget text={text} />}
        width={320}
        height={200}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
