/**
 * React Native Google Maps App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

// Seoul, South Korea coordinates
const SEOUL_REGION = {
  latitude: 37.5665,
  longitude: 126.978,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={SEOUL_REGION}
      >
        <Marker
          coordinate={{
            latitude: SEOUL_REGION.latitude,
            longitude: SEOUL_REGION.longitude,
          }}
          title="Seoul"
          description="Capital of South Korea"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default App;
