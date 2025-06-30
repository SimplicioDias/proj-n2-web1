import { View, Text, StyleSheet } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { Button } from "@/components/button";

export default function Dashboard() {

    const { nome, idade, nascimento, nacionalidade, camisa, altura, peso, posicao  } = useLocalSearchParams();
    return (
        <View style={styles.container}>

            <Text style={styles.title}> RETORNA OS JOGADORES AQUI </Text>
            <Text> Pesquisa: { nome }</Text>

            {/* CARD-ATLETA 1 */}
            <View style={styles.card}> 
                <Text style={styles.title}> Nome: { nome }</Text>
                <Text style={styles.title}> Idade: { idade }</Text>
                <Text style={styles.title}> Data de Nascimento: { nascimento }</Text>
                <Text style={styles.title}> Nacionalidade: { nacionalidade }</Text>
                <Text style={styles.title}> Camisa: { camisa }</Text>
                <Text style={styles.title}> Altura: { altura }</Text>
                <Text style={styles.title}> Peso: { peso }</Text>
                <Text style={styles.title}> Posição: { posicao }</Text>
                <Button title="favoritos" variant="card" />
            </View>

            
            {/* CARD-ATLETA 2 */}
            <View style={styles.card}> 
                <Text style={styles.title}> Nome: { nome }</Text>
                <Text style={styles.title}> Idade: { idade }</Text>
                <Text style={styles.title}> Data de Nascimento: { nascimento }</Text>
                <Text style={styles.title}> Nacionalidade: { nacionalidade }</Text>
                <Text style={styles.title}> Camisa: { camisa }</Text>
                <Text style={styles.title}> Altura: { altura }</Text>
                <Text style={styles.title}> Peso: { peso }</Text>
                <Text style={styles.title}> Posição: { posicao }</Text>
                <Button title="favoritos" variant="card" />
            </View>


            {/* CARD-ATLETA 3 */}
            <View style={styles.card}> 
                <Text style={styles.title}> Nome: { nome }</Text>
                <Text style={styles.title}> Idade: { idade }</Text>
                <Text style={styles.title}> Data de Nascimento: { nascimento }</Text>
                <Text style={styles.title}> Nacionalidade: { nacionalidade }</Text>
                <Text style={styles.title}> Camisa: { camisa }</Text>
                <Text style={styles.title}> Altura: { altura }</Text>
                <Text style={styles.title}> Peso: { peso }</Text>
                <Text style={styles.title}> Posição: { posicao }</Text>
                <Button title="favoritos" variant="card" />
            </View>

            <Button title="Voltar" onPress={() => router.back()}  />
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 32,
        gap: 16,
    },

    card: {
        flex: 0.5,
        borderWidth: 2,
        width: "100%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        gap: 6,
    },

    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
})