import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlexWidget, TextWidget, WidgetPreview } from 'react-native-android-widget';
import { HelloWidget } from './Widget';

export default function App() {
  useEffect(e => {
    console.log(e)
  }, []);
  return (
    <View style={styles.container}>
      <WidgetPreview
        renderWidget={() => <HelloWidget />}
        width={320}
        height={200}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
