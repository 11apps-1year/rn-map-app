/**
 * HomeScreen - Main screen with Google Maps view
 * Displays a map centered on Seoul, South Korea
 */

import React, { useLayoutEffect } from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define navigation param list type
// This will be centralized in App.tsx in a later subtask
export type RootStackParamList = {
  Home: undefined;
  About: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

// Seoul, South Korea coordinates
const SEOUL_REGION = {
  latitude: 37.5665,
  longitude: 126.978,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

function HomeScreen({ navigation }: Props) {
  const isDarkMode = useColorScheme() === 'dark';

  // Configure header with About navigation button
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => navigation.navigate('About')}
          accessibilityLabel="Go to About page"
          accessibilityRole="button"
        >
          <Text style={[styles.headerButtonText, isDarkMode && styles.headerButtonTextDark]}>
            About
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, isDarkMode]);

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
  headerButton: {
    marginRight: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  headerButtonText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
  headerButtonTextDark: {
    color: '#0A84FF',
  },
});

export default HomeScreen;
