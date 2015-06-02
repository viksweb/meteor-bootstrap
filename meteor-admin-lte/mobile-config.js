// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
  id: 'com.example.matt.uber',
  name: 'Oasis Private Doctor',
  description: 'private doctor',
  author: 'Kevin@ihealth',
  email: 'contact@example.com',
  website: 'http://example.com'
});

// Set up resources such as icons and launch screens.
App.icons({
  
  // ... more screen sizes and platforms ...
});

App.launchScreens({
  
  // ... more screen sizes and platforms ...
});

// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);

// Pass preferences for a particular PhoneGap/Cordova plugin
App.configurePlugin('com.phonegap.plugins.facebookconnect', {
  APP_ID: '1234567890',
  API_KEY: 'supersecretapikey'
});