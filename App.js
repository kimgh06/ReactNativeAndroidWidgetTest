import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { HelloWidgetPreviewScreen } from './HelloWidgetPreviewScreen';
import { useEffect, useState } from 'react';
import { requestWidgetUpdate } from 'react-native-android-widget';
import { HelloWidget } from './HelloWidget';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useStore from './store';

export default function App() {
  const [text, setText] = useState('')
  const setZusText = useStore(s => s.setText);
  const fun = async e => {
    await AsyncStorage.setItem('text', text);
    const value = await AsyncStorage.getItem('text');
    setZusText(text)
    await requestWidgetUpdate({
      widgetName: 'Hello',
      renderWidget: e => <HelloWidget text={value} />,
      widgetNotFound: e => {
        console.log('not found')
      }
    })
  }
  useEffect(e => {
    fun();
  }, [text])
  return (
    <>
      <View style={{ height: 500 }}>
        <HelloWidgetPreviewScreen />
        <TextInput value={text} onChange={e => setText(e.nativeEvent.text)} style={{ borderColor: 'black', borderWidth: 1 }} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});