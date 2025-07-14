import { ConfigContext, ExpoConfig } from "expo/config";
export default ({ config }: ConfigContext): ExpoConfig => (
  {
    ...config,
    "name": "SG",
    "slug": "sg",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "sg",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.bio-paul.sg",
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff",
      },
      "edgeToEdgeEnabled": true,
      "package": "com.bio_paul.sg",
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png",
    },
    "plugins": [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "image": "./assets/images/splash-icon.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#ffffff",
        },
      ],
      [
        "react-native-nfc-manager",
        {
          "nfcPermission": "Custom permission message",
          "selectIdentifiers": ["A0000002471001"],
          "systemCodes": ["8008"],
        },
      ],
    ],
    "experiments": {
      "typedRoutes": true,
    },
    "extra": {
      "router": {},
      "eas": {
        "projectId": "1088da75-80e7-4364-9532-8e84084af547",
      },
    },
  }
  // }
);
