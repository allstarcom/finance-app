import { Pressable, Text, View, Modal, Switch, Alert } from 'react-native';
import  styles  from '../../styles/main.js'

export default function Transaction(props) {

    const handleModalToggle = () => {
        console.log("Pressed")
    }

    return (
        <>
            <Pressable onPress={handleModalToggle}>

            <View style={[styles.individualTask, styles.borderShadow]}>

                    <Text>Id: {props.id}</Text>
                    <Text>Amount: {props.amount}</Text>
                    <Text>Transaction: {props.transactionName}</Text>


                </View>
            </Pressable>

        </>
    )
}
