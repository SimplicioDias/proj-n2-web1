import { View, Text, StyleSheet, Image, ImageProps } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { Button } from "@/components/button";
import  Card  from "@/components/card-atleta";

export default function Dashboard() {

    const { arrayPlayer } = useLocalSearchParams();
    const arrayPlayerObj = typeof arrayPlayer === "string" ? JSON.parse(arrayPlayer) : arrayPlayer;
    return (
        <View style={styles.container}>

            <Text style={styles.title}> RETORNA OS JOGADORES AQUI </Text>

            {arrayPlayerObj.map((r: any) => (
                <Card key={r.player.id} player={r.player}></Card>
            ) )}



    

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