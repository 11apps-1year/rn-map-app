// Mock react-native-gesture-handler
jest.mock('react-native-gesture-handler', () => ({
  GestureHandlerRootView: ({ children }) => children,
  gestureHandlerRootHOC: jest.fn(),
  Swipeable: jest.fn(),
  DrawerLayout: jest.fn(),
  State: {},
  PanGestureHandler: jest.fn(),
  TapGestureHandler: jest.fn(),
  FlingGestureHandler: jest.fn(),
  ForceTouchGestureHandler: jest.fn(),
  LongPressGestureHandler: jest.fn(),
  NativeViewGestureHandler: jest.fn(),
  PinchGestureHandler: jest.fn(),
  RotationGestureHandler: jest.fn(),
  RawButton: jest.fn(),
  BaseButton: jest.fn(),
  RectButton: jest.fn(),
  BorderlessButton: jest.fn(),
  TouchableHighlight: jest.fn(),
  TouchableNativeFeedback: jest.fn(),
  TouchableOpacity: jest.fn(),
  TouchableWithoutFeedback: jest.fn(),
  ScrollView: jest.fn(),
  Directions: {},
}));

// Mock react-native-screens
jest.mock('react-native-screens', () => ({
  enableScreens: jest.fn(),
  ScreenContainer: jest.fn(),
  Screen: jest.fn(),
  NativeScreen: jest.fn(),
  NativeScreenContainer: jest.fn(),
  ScreenStack: jest.fn(),
  ScreenStackHeaderConfig: jest.fn(),
  ScreenStackHeaderSubview: jest.fn(),
  ScreenStackHeaderLeftView: jest.fn(),
  ScreenStackHeaderCenterView: jest.fn(),
  ScreenStackHeaderRightView: jest.fn(),
}));

// Mock react-native-safe-area-context
jest.mock('react-native-safe-area-context', () => {
  const inset = { top: 0, right: 0, bottom: 0, left: 0 };
  return {
    SafeAreaProvider: ({ children }) => children,
    SafeAreaConsumer: ({ children }) => children(inset),
    SafeAreaView: ({ children }) => children,
    useSafeAreaInsets: () => inset,
    useSafeAreaFrame: () => ({ x: 0, y: 0, width: 390, height: 844 }),
  };
});

// Mock @react-navigation/native
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    NavigationContainer: ({ children }) => children,
    useNavigation: () => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
    }),
    useRoute: () => ({
      params: {},
    }),
    DarkTheme: {
      dark: true,
      colors: {
        primary: 'rgb(10, 132, 255)',
        background: 'rgb(1, 1, 1)',
        card: 'rgb(18, 18, 18)',
        text: 'rgb(229, 229, 231)',
        border: 'rgb(39, 39, 41)',
        notification: 'rgb(255, 69, 58)',
      },
    },
    DefaultTheme: {
      dark: false,
      colors: {
        primary: 'rgb(0, 122, 255)',
        background: 'rgb(242, 242, 242)',
        card: 'rgb(255, 255, 255)',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(216, 216, 216)',
        notification: 'rgb(255, 59, 48)',
      },
    },
  };
});

// Mock @react-navigation/native-stack
jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: () => ({
    Navigator: ({ children }) => children,
    Screen: () => null,
  }),
}));

// Mock react-native-maps
jest.mock('react-native-maps', () => {
  const { View } = require('react-native');
  const MockMapView = (props) => View(props);
  MockMapView.Marker = (props) => View(props);
  MockMapView.Animated = MockMapView;
  return {
    __esModule: true,
    default: MockMapView,
    PROVIDER_GOOGLE: 'google',
    PROVIDER_DEFAULT: null,
    Marker: (props) => View(props),
    Callout: (props) => View(props),
    Polygon: (props) => View(props),
    Polyline: (props) => View(props),
    Circle: (props) => View(props),
    Overlay: (props) => View(props),
    Heatmap: (props) => View(props),
    Geojson: (props) => View(props),
  };
});
