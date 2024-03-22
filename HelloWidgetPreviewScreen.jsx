import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { WidgetPreview, requestWidgetUpdate } from 'react-native-android-widget';

import { HelloWidget } from './HelloWidget';
import useStore from './store';
import { GetBob } from './getBob';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function HelloWidgetPreviewScreen() {
  const { text, setBob, bobNum, setBobNum, bob } = useStore(s => s)

  const getData = async e => {
    try {
      const newBob = await GetBob(20240322);
      let bn = 1;
      if (newBob === null) {
        await requestWidgetUpdate({
          widgetName: 'Hello',
          renderWidget: e => <HelloWidget text={'밥이 없습니다.'} />,
          widgetNotFound: e => {
            console.log('not found')
          }
        })
        await AsyncStorage.setItem('bob', '밥이 없습니다.')
        setBob('밥이 없습니다.')
        throw "can't get bob";
      }

      setBobNum(bn);
      let imbob = newBob[bn]?.DDISH_NM?.replace(/<br\s*\/>/g, '\n')?.replace(/\([^)]*\)/g, '')
      await AsyncStorage.setItem('bob', imbob)
      setBob(imbob);

      console.log('getdata', imbob);

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
