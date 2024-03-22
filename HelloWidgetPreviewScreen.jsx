import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { WidgetPreview } from 'react-native-android-widget';

import { HelloWidget } from './HelloWidget';
import useStore from './store';
import { GetBob } from './getBob';

export function HelloWidgetPreviewScreen() {
  const { setBob, bobnum, bob } = useStore(s => s)

  const getData = async e => {
    try {
      const newBob = await GetBob();
      if (newBob === null) {
        throw "can't get bob";
      }

      let imbob = newBob[bobnum]?.DDISH_NM?.replace(/<br\s*\/>/g, '\n')?.replace(/\([^)]*\)/g, '')
      console.log(bobnum)
      setBob(imbob);
    } catch (e) {
      console.log(e);
      setBob('밥이 없습니다.')
    }
  }
  useEffect(e => {
    getData();
  }, [bobnum])
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
