# Receipt Scanner

Receipt Scanner is a cross-platform mobile app that allows you to scan your receipts and track your spending habits and budget. It is developed using React Native framework and uses various modules to access the camera, extract text, store data, and display charts.

## Features

- Scan receipts using your phone camera and save them in a local database.
- View, edit, and delete your receipts from the History screen.
- Filter your receipts by date, store, or category.
- See the total amount spent and the remaining budget for the current month on the Home screen.
- Customize your app preferences, such as currency, budget, and categories on the Settings screen.
- Enable or disable notifications and feedback options on the Settings screen.

## Installation

To install the app, you need to have [Node.js](https://nodejs.org/en/) and [Expo CLI](https://docs.expo.dev/) installed on your machine. Then, follow these steps:

- Clone this repository or download the zip file.
- Navigate to the project folder and run `npm install` to install the dependencies.
- Run `expo start` to start the app in development mode.
- Scan the QR code with your phone or use an emulator to run the app.

## Dependencies

The app uses the following modules:

- [expo-camera](https://docs.expo.dev/versions/latest/sdk/camera/) to access the phone camera and scan receipts.
- [react-native-text-detector](https://github.com/zsajjad/react-native-text-detector) to extract text from the scanned receipts and store them in a local database using AsyncStorage.
- [react-native-charts-wrapper](https://github.com/wuxudong/react-native-charts-wrapper) to display charts and graphs of the user’s spending habits and budget.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
