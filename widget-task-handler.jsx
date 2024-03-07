import React from 'react';
import { HelloWidget } from './HelloWidget';
import useStore from './store';

const nameToWidget = {
  // Hello will be the **name** with which we will reference our widget.
  Hello: HelloWidget,
};

export async function widgetTaskHandler(props) {
  const widgetInfo = props.widgetInfo;
  const Widget = nameToWidget[widgetInfo.widgetName];
  const { bob } = useStore(s => s);

  switch (props.widgetAction) {
    case 'WIDGET_ADDED':
      props.renderWidget(<Widget text={bob} />);
      break;

    case 'WIDGET_UPDATE':
      props.renderWidget(<Widget text={bob} />);
      break;

    case 'WIDGET_RESIZED':
      console.log('resized')
      await requestWidgetUpdate({
        widgetName: 'Hello',
        renderWidget: e => <HelloWidget text={bob} />,
        widgetNotFound: e => {
          console.log('not found')
        }
      })
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
