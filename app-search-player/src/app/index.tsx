
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from 'react-native';
import { router } from "expo-router";
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { useFavoritos } from '@/contexts/FavoritosContext';


  
function IndexContent() {
    const [response, setResponse] = useState("")
    const [result, setResult] = useState("");
    const { favoritos } = useFavoritos();


    const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": "980805025emsh0b625f38045dff8p19cbacjsndd4c87d912e2",
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        },
    };
    
    const handleSearch = async (namePlayer : any) => {
        try {
            const response = await fetch(
                `https://api-football-v1.p.rapidapi.com/v3/players/profiles?search=${namePlayer}`,
                options
            );
            
            if (!response.ok) {
                Alert.alert("Erro", "Nenhum jogador encontrado");
                return;
            }
            
            const result = await response.json();
            setResult(result);

            const arrayPlayer = result.response;
            console.log(arrayPlayer)

            if (arrayPlayer.length > 0) {
                router.navigate({
                    pathname: "/dashboard",
                    params: {
                        arrayPlayer: JSON.stringify(arrayPlayer),
                    }
                });
            } else {
                Alert.alert("Erro", "Nenhum jogador encontrado");
            }
        } catch (error) {
            Alert.alert("Erro", "Ocorreu um erro ao buscar o jogador");
        }

    }

    return (

        // SearchPlayer da N1 
        <View style={styles.mainContainer}>
            <Text style={{fontSize: 35, color: "black", fontWeight:"bold"}}>Pesquisa de Atletas</Text>
            <Text style={styles.title}> Digite o nome: </Text>
            <Input onChangeText={(response) => setResponse(response)} id="name"></Input>
            <Button title="Pesquisar" onPress={() => handleSearch(response)}></Button>
            
            <View style={styles.favoritosContainer}>
                <Button 
                    title={`Ver Favoritos (${favoritos.length})`} 
                    onPress={() => router.push("/favoritos")}
                    style={styles.favoritosButton}
                />
            </View>
        </View>
    );
    
}

const styles = StyleSheet.create({
    title: {
        color: "blue",
        fontSize: 24,
        fontWeight: "bold",

    },

    mainContainer: {
        flex: 1,
        padding: 32,
       // backgroundColor: "blue",
        justifyContent: "center",
        gap:16,
    },
    
    favoritosContainer: {
        marginTop: 16,
    },
    
    favoritosButton: {
        backgroundColor: '#4CAF50',
    },
})

export default function Index() {
    return <IndexContent />;
}