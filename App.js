import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MovieContext } from "./Context";
import StackNavigator from './StackNavigator';
import { StripeProvider } from "@stripe/stripe-react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <MovieContext>
        <StripeProvider publishableKey="pk_test_51NFr73SHfC7XrxxPJmDb3hv2vAYpa5d2XU3OEA5u7rUvrcB3NFIeLESKUkWorUe6ZWoJz5Qv6Fq9IF2QqAYfduan00GduoJiva">
          <StackNavigator />
          <StatusBar style="auto" />
        </StripeProvider>
      </MovieContext>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
