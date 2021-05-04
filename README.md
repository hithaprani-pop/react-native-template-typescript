# react-native-template-typeScript

## Usage

`npx react-native init MyTestApp --template @hithaprani/react-native-template-typeScript`

will generate a new reac-native project whith following things

- folder structure
- Most used packages like net-info, device-info, asyncstorage
- navigation(with 3 pages)
  - landing, login, Home(includes drawer)
- generalised from inputs
  - see \*src/UI/common/Input\* for more details
- AppConfig in \*src/Providers\* can manage following in app based on user Input
  - change language, theme(images can also be changed based on theme)
- Font famiy can be configured with ease
  - copy font files to \*assets/fonts\* folder and run
    ` npx react-native link (or) yarn react-native link`
- Button and Header can have a gradient/solid background found in \*src\UI\common\* folder
