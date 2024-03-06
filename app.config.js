const widgetConfig = {
  // Paths to all custom fonts used in all widgets
  widgets: [
    {
      name: 'Hello', // This name will be the **name** with which we will reference our widget.
      label: 'My Hello Widget', // Label shown in the widget picker
      minWidth: '160dp',
      minHeight: '60dp',
      description: 'This is my first widget', // Description shown in the widget picker
      previewImage: './assets/widget-preview/hello.png', // Path to widget preview image

      // How often, in milliseconds, that this AppWidget wants to be updated.
      // The task handler will be called with widgetAction = 'UPDATE_WIDGET'.
      // Default is 0 (no automatic updates)
      // Minimum is 1800000 (30 minutes == 30 * 60 * 1000).
      updatePeriodMillis: 1800000,
    },
  ],
};

export default ({ config }) => ({
  ...config,
  name: 'My Expo App Name',
  plugins: [['react-native-android-widget', widgetConfig]],
});