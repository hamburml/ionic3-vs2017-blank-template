You need:
Java JDK 1.8
VS 2017 with Apache Cordova Tools
VS 2017 Builds Tools
Android Studio with android sdk with build-tools and ndk!
Android Studio (in Launch Screen):
  Configure - SDK Manager - SDK Platforms, SDK Tools, SDK Update Sites (three tabs)
  SDK Platforms: Android 8.1 to Android 6.0
  SDK Tools: Android SDK Build-Tools, SDK Platform-Tools, SDK Tools, Google Play services, Google USB Driver, NDK


Before you open this project, set these environment variables:
JAVA_HOME to jdk folder
Add to PATH:
C:\Users\<yourUser>\AppData\Local\Android\Sdk\platform-tools
C:\Users\<yourUser>\AppData\Local\Android\Sdk
C:\Users\<yourUser>\AppData\Local\Android\Sdk\tools
C:\Users\<yourUser>\AppData\Local\Android\Sdk\tools\bin

After you opened the project:
- set the nodejs which is used from VS to your global VS!
  Go to: Tools - Options - Projects and Solutions - Web Package Management
  Add your path to nodejs as an external tool and move it TO THE TOP!

- set ANDROID_HOME for Tools for Apache Cordova
  Go to: Tools - Options - Tools for Apache Cordova
  Set ANDROID_HOME to C:\Users\<yourUser>\AppData\Local\Android\Sdk (android studio creates this folder)

- install the NPM Task Runner Extension for your VS 2017 (https://marketplace.visualstudio.com/items?itemName=MadsKristensen.NPMTaskRunner)
  Go to: Tools - Extensions and Updates - Select 'Online' on the left - Search for 'NPM Task Runner' - click download and restart VS 2017.
  
