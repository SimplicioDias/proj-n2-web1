import { Text, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native"

// REACT-NATIVE
// TouchableOpacityProps : TIPAGEM do TouchableOpacity     
// TextProps : TIPAGEM do Text [etc]

import { styles } from "./styles"

// TYPESCRIPT
type Props = TouchableOpacityProps & {
    title: string
    style?: ViewStyle
    variant?: "default" | "card" ; // adcionar qalquer variacao

}

const variantStyle = {
    default: styles.button,
    card: styles.CardButton, // adcionar qalquer variacao

}


export function Button({ title, style, variant="default", ...rest }: Props) {

    const buttonStyle = variantStyle[variant];

    return (

        <TouchableOpacity activeOpacity={0.5} style={[buttonStyle, style]} {...rest}>

            <Text style={styles.title}> {title}</Text>

        </TouchableOpacity >
    
    )
}

