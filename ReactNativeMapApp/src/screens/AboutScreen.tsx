/**
 * AboutScreen - App information screen
 * Displays app name, version, and description
 */

import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from './HomeScreen';

type Props = NativeStackScreenProps<RootStackParamList, 'About'>;

// App information
const APP_INFO = {
  name: 'React Native Map App',
  version: '0.0.1',
  description: 'A React Native application featuring Google Maps integration with navigation support.',
};

function AboutScreen({ navigation }: Props) {
  const isDarkMode = useColorScheme() === 'dark';

  const dynamicStyles = {
    container: {
      backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
    },
    text: {
      color: isDarkMode ? '#ffffff' : '#000000',
    },
    label: {
      color: isDarkMode ? '#aaaaaa' : '#666666',
    },
  };

  return (
    <View style={[styles.container, dynamicStyles.container]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.content}>
        <Text style={[styles.appName, dynamicStyles.text]}>
          {APP_INFO.name}
        </Text>
        <Text style={[styles.label, dynamicStyles.label]}>Version</Text>
        <Text style={[styles.version, dynamicStyles.text]}>
          {APP_INFO.version}
        </Text>
        <Text style={[styles.label, dynamicStyles.label]}>About</Text>
        <Text style={[styles.description, dynamicStyles.text]}>
          {APP_INFO.description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 24,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
  },
  label: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginTop: 16,
    marginBottom: 4,
  },
  version: {
    fontSize: 18,
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default AboutScreen;
