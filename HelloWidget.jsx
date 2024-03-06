import React from 'react';
import { FlexWidget, TextWidget } from 'react-native-android-widget';

export function HelloWidget({ text }) {
  return (
    <FlexWidget
      clickAction='OPEN_APP'
      style={{
        height: 'match_parent',
        width: 'match_parent',
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
  );
}
