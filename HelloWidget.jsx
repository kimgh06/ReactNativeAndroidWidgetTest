import React from 'react';
import { FlexWidget, TextWidget } from 'react-native-android-widget';

export function HelloWidget({ text }) {
  return (
    <FlexWidget
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <FlexWidget
        clickAction='OPEN_APP'
        style={{
          height: 160,
          width: 100,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ddd',
          borderRadius: 16,
        }}
      >
        <TextWidget
          text={text}
          style={{
            fontSize: 20,
            fontFamily: 'Inter',
            color: '#000000',
          }}
        />
      </FlexWidget>
    </FlexWidget>
  );
}
