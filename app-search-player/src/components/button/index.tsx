import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

// REACT-NATIVE
// TouchableOpacityProps : TIPAGEM do TouchableOpacity     
// TextProps : TIPAGEM do Text [etc]

import { styles } from "./styles"

// TYPESCRIPT
type Props = TouchableOpacityProps & {
    title: string

}

export function Button({ title, onPress, ...rest }: Props) {
    return (

        <TouchableOpacity activeOpacity={0.5} style={styles.button} {...rest}>

            <Text style={styles.title}> {title}</Text>

        </TouchableOpacity >
    
    )
}