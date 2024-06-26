import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { HelloWidgetPreviewScreen } from './HelloWidgetPreviewScreen';
import { useEffect } from 'react';
import { requestWidgetUpdate } from 'react-native-android-widget';
import { HelloWidget } from './HelloWidget';
import useStore from './store';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const { bob, setBobNum, setBob } = useStore(s => s)
  const fun = async e => {
    if (bob === undefined) {
      setBob('밥이 없어요.');
    }
    console.log(bob)
    await requestWidgetUpdate({
      widgetName: 'Hello',
      renderWidget: e => <HelloWidget text={bob} />,
      widgetNotFound: e => {
        console.log('not found')
      }
    })
    await AsyncStorage.setItem('bob', bob);
  }
  useEffect(e => {
    fun();
  }, [bob])
  return (
    <>
      <View style={{ height: 500 }}>
        <HelloWidgetPreviewScreen />
        <Text style={{ fontSize: 20 }} >예시</Text>
        <View>
          <Button
            title='아침'
            onPress={e => setBobNum(0)}
          />
          <Button
            title='점심'
            onPress={e => setBobNum(1)}
          />
          <Button
            title='저녁'
            onPress={e => setBobNum(2)}
          />
        </View>
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