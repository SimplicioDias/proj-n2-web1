import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import { router } from "expo-router";
import { Button } from "@/components/button";
import { useFavoritos } from "@/contexts/FavoritosContext";
import Card from "@/components/card-atleta";

export default function FavoritosScreen() {
    const { favoritos, removeFavorito } = useFavoritos();

    const handleRemoveFavorito = async (playerId: number) => {
        try {
            await removeFavorito(playerId);
            Alert.alert("Sucesso", "Jogador removido dos favoritos!");
        } catch (error) {
            Alert.alert("Erro", "Erro ao remover jogador dos favoritos");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Meus Favoritos</Text>
                <Text style={styles.subtitle}>{favoritos.length} jogador(es) favorito(s)</Text>
            </View>

            {favoritos.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>Nenhum jogador favorito ainda!</Text>
                    <Text style={styles.emptySubText}>Adicione jogadores aos favoritos para vê-los aqui.</Text>
                    <Button 
                        title="Voltar" 
                        onPress={() => router.back()} 
                        style={styles.backButton}
                    />
                </View>
            ) : (
                <>
                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        {favoritos.map((player) => (
                            <View key={player.id} style={styles.cardContainer}>
                                <Card player={player} />
                                <View style={styles.removeButtonContainer}>
                                    <Button 
                                        title="❌ Remover dos Favoritos"
                                        onPress={() => handleRemoveFavorito(player.id)}
                                        style={styles.removeButton}
                                    />
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                    
                    <View style={styles.footer}>
                        <Button title="Voltar" onPress={() => router.back()} />
                    </View>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        padding: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 8,
        color: '#333',
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        color: '#666',
    },
    scrollContainer: {
        padding: 16,
        paddingBottom: 32,
    },
    cardContainer: {
        marginBottom: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    removeButtonContainer: {
        alignItems: 'center',
        marginTop: 8,
    },
    removeButton: {
        backgroundColor: '#ff4444',
    },
    footer: {
        padding: 16,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
    },
    emptyText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 8,
        color: '#666',
    },
    emptySubText: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 24,
        color: '#999',
    },
    backButton: {
        backgroundColor: '#2196F3',
    },
}); 