import { View, Text, StyleSheet, ScrollView, Alert } from "react-native"
import { useFavoritos } from "@/contexts/FavoritosContext"
import Card from "@/components/card-atleta"

export default function Favoritos() {
  const { favoritos, removeFavorito } = useFavoritos()

  const handleRemoveFavorito = async (playerId: number) => {
    try {
      await removeFavorito(playerId)
      Alert.alert("Sucesso", "Jogador removido dos favoritos!")
    } catch (error) {
      Alert.alert("Erro", "Erro ao remover jogador dos favoritos")
    }
  }

  if (favoritos.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Nenhum jogador favorito ainda!</Text>
        <Text style={styles.emptySubText}>
          Adicione jogadores aos favoritos para vê-los aqui.
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Favoritos</Text>
      <Text style={styles.subtitle}>
        {favoritos.length} jogador(es) favorito(s)
      </Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {favoritos.map((player) => (
          <View key={player.id} style={styles.cardContainer}>
            <Card player={player} />
            <View style={styles.removeButtonContainer}>
              <Text
                style={styles.removeButton}
                onPress={() => handleRemoveFavorito(player.id)}
                numberOfLines={0}
                adjustsFontSizeToFit={true}
              >
                ❌ Remover dos Favoritos
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
    color: "#666",
  },
  scrollContainer: {
    paddingBottom: 32,
  },
  cardContainer: {
    marginBottom: 16,
  },
  removeButtonContainer: {
    alignItems: "center",
    marginTop: 8,
  },
  removeButton: {
    color: "#ff4444",
    fontSize: 16,
    fontWeight: "bold",
    padding: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
    color: "#666",
  },
  emptySubText: {
    fontSize: 16,
    textAlign: "center",
    color: "#999",
  },
})
