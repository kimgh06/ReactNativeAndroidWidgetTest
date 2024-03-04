import React from 'react';
import { FlexWidget, TextWidget } from 'react-native-android-widget';

export function HelloWidget() {
  return (
    <FlexWidget
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
        text="잘 됨"
        style={{
          fontSize: 32,
          fontFamily: 'Inter',
          color: '#000000',
        }}
      />
    </FlexWidget>
  );
}