import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './Components/SplashScreen';
import HomeScreen from './Components/HomeScreen';
import osScreen from './Components/OSScreen';
import GoogleScreen from './Components/GoogleScreen';
import MicrosoftScreen from './Components/MicrosoftScreen';
import AdobeScreen from './Components/AdobeScreen';
import FigmaScreen from './Components/FigmaScreen';
import VSCodeScreen from './Components/VSCodeScreen';
import WindowsShortcuts from './Components/WindowsShortcuts';
import AppleShortcuts from './Components/AppleShortcuts';
import LinuxShortcuts from './Components/LinuxShortcuts';
import WordShortcuts from './Components/WordShortcuts';
import ExcelShortcuts from './Components/ExcelShortcuts';
import PowerPointShortcuts from './Components/PowerPointShortcuts';
import PhotoshopShortcuts from './Components/PhotoshopShortcuts';
import PremierProShortcuts from './Components/PremierProShortcuts';
import XDShortcuts from './Components/XDShortcuts';
import IllustratorShortcuts from './Components/IllustratorShortcuts';
import ChromeShortcuts from './Components/ChromeShortcuts';
import MailShortcuts from './Components/MailShortcuts';
import DocsShortcuts from './Components/DocsShortcuts';
import SlidesShortcuts from './Components/SlidesShortcuts';
import SheetsShortcuts from './Components/SheetsShortcuts';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="OS" component={osScreen} />
        <Stack.Screen name="Google" component={GoogleScreen} />
        <Stack.Screen name="Microsoft" component={MicrosoftScreen} />
        <Stack.Screen name="Adobe" component={AdobeScreen} />
        <Stack.Screen name="Figma Shortcuts" component={FigmaScreen} />
        <Stack.Screen name="VSCode Shortcuts" component={VSCodeScreen} />
        <Stack.Screen name="Windows Shortcuts" component={WindowsShortcuts} />
        <Stack.Screen name="Apple Shortcuts" component={AppleShortcuts} />
        <Stack.Screen name="Linux Shortcuts" component={LinuxShortcuts} />
        <Stack.Screen name="Word Shortcuts" component={WordShortcuts} />
        <Stack.Screen name="Excel Shortcuts" component={ExcelShortcuts} />
        <Stack.Screen name="PowerPoint Shortcuts" component={PowerPointShortcuts} />
        <Stack.Screen name="Photoshop Shortcuts" component={PhotoshopShortcuts} />
        <Stack.Screen name="PremierPro Shortcuts" component={PremierProShortcuts} />
        <Stack.Screen name="XD Shortcuts" component={XDShortcuts} />
        <Stack.Screen name="Illustrator Shortcuts" component={IllustratorShortcuts} />
        <Stack.Screen name="Chrome Shortcuts" component={ChromeShortcuts} />
        <Stack.Screen name="Mail Shortcuts" component={MailShortcuts} />
        <Stack.Screen name="Docs Shortcuts" component={DocsShortcuts} />
        <Stack.Screen name="Slides Shortcuts" component={SlidesShortcuts} />
        <Stack.Screen name="Sheets Shortcuts" component={SheetsShortcuts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;