import { View, Text, StyleSheet } from "react-native";

export default function App() {
  const nombreProduitsDisponibles = 3;
  const valeurTotaleStock = 1960;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Catalogue de produits
      </Text>

      <Text>
        Nombre de produits disponibles :{" "}
        {nombreProduitsDisponibles}
      </Text>

      <Text>
        Valeur totale du stock : {valeurTotaleStock} MAD
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});