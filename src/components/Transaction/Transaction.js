import { Pressable, Text, View, Modal, Switch, Alert } from 'react-native';
import styles from '../../styles/main.js'
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons'; 


export default function Transaction(props) {
    const navigation = useNavigation();
    const handlePress = () => {
        console.log("Pressed")
        navigation.navigate('Transaction Detail', { transaction: props });

    }

    return (
        <>
            <View style={[styles.individualTask, styles.borderShadow]}>
                <Pressable onPress={handlePress} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Text>{props.transactionName}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text>${props.amount}</Text>
                        <View style={{ width: 10 }} /> 
                        <FontAwesome name="angle-right" size={24} color="black" />
                    </View>
                </Pressable>
            </View>
        </>
    )
}
