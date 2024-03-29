import React from 'react';
import { HelloWidget } from './HelloWidget';
import useStore from './store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const nameToWidget = {
  // Hello will be the **name** with which we will reference our widget.
  Hello: HelloWidget,
};

export async function widgetTaskHandler(props) {
  const widgetInfo = props.widgetInfo;
  const Widget = nameToWidget[widgetInfo.widgetName];

  switch (props.widgetAction) {
    case 'WIDGET_ADDED':
      // const { getAsyncItem } = useStore(s => s);
      // const bob = await getAsyncItem('bob');
      props.renderWidget(<Widget text={bob} />);
      break;

    case 'WIDGET_UPDATE':
      // const bob = await AsyncStorage.getItem('bob');
      props.renderWidget(<Widget text={bob} />);
      break;

    case 'WIDGET_RESIZED':
      const bob = await AsyncStorage.getItem('bob');
      props.renderWidget(<Widget text={bob} />);
      break;

    case 'WIDGET_DELETED':
      // Not needed for now
      break;

    case 'WIDGET_CLICK':
      // Not needed for now
      if (props.clickAction === 'touch') {
        console.log("OPEN_APP")
      }
      break;

    default:
      break;
  }
}
