import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
      <View style={styles.body}>
        <Text>Second part!</Text>
      </View>
      <View style={styles.menu}>
        <Text>Third part!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: StatusBar.height ? Platform.OS === 'android': 0,
    backgroundColor: '#646',
    flexDirection: 'column',
    flex: 1,
  },
  header: {
    backgroundColor: '#451',
    flex: 1,
    flexGrow: 0.1,
  },
  body: {
    backgroundColor: '#2f1',
    flex: 1,
    flexGrow: 1,
  },
  menu: {
    backgroundColor: '#21f',
    flex: 1,
    flexGrow: 0.1,
  }
});
