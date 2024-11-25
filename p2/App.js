import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.text}>Hardius Pratama</Text>

      {/* Dua kotak dengan tata letak Flexbox */}
      <View style={styles.boxContainer}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa', // Latar belakang abu-abu terang
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24, // Ukuran font 24
    color: 'blue', // Warna biru
    fontWeight: 'bold', // Gaya teks tebal
    marginBottom: 20, // Jarak antara teks dan kotak
  },
  boxContainer: {
    flexDirection: 'row', // Tata letak horizontal
    justifyContent: 'space-between', // Jarak merata di antara kotak
    width: '70%', // Lebar kontainer diatur
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: '#8FBC8F', // Warna hijau (Dark Sea Green)
    borderRadius: 10, // Sudut melengkung
    shadowColor: '#556B2F', // Bayangan hijau gelap
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: '#F5DEB3', // Warna krem (Wheat)
    borderRadius: 10, // Sudut melengkung
    shadowColor: '#D2B48C', // Bayangan krem tua
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
});
