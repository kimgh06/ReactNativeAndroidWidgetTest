import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { WidgetPreview, requestWidgetUpdate } from 'react-native-android-widget';

import { HelloWidget } from './HelloWidget';
import useStore from './store';
import { GetBob } from './getBob';

export function HelloWidgetPreviewScreen() {
  const { text, setBob, bobNum, setBobNum, setText, getAsyncItem, bob } = useStore(s => s)

  const getData = async e => {
    try {
      const newBob = await GetBob();
      setBobNum(0);
      let imbob = JSON.stringify(newBob[0]?.DDISH_NM.replace(/<br\s*\/>/g, '\n'))
      setBob(imbob);
      const value = await getAsyncItem('text');
      console.log('getdata', imbob);
      setText(value);

      await requestWidgetUpdate({
        widgetName: 'Hello',
        renderWidget: e => <HelloWidget text={imbob} />,
        widgetNotFound: e => {
          console.log('not found')
        }
      })
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(e => {
    if (text === '') {
      getData()
    }
  }, [])
  return (
    <View style={styles.container}>
      <WidgetPreview
        renderWidget={() => <HelloWidget text={bob} />}
        width={320}
        height={100}
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
