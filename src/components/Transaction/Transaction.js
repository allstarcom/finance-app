import { Pressable, Text, View, Modal, Switch, Alert } from 'react-native';
import styles from '../../styles/main.js'
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { deleteTransaction } from '../../redux/transactionSlice.js';
import * as database from '../../database/index.js';
import { useDispatch } from 'react-redux'
import { setTransactionMode } from '../../redux/transactionSlice'; // Import setMode action creator




export default function Transaction(props) {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handlePress = () => {
        navigation.navigate('Transaction Detail', { transaction: props });
    }

    const handleEditTransaction = () => {
        console.log(props)
        dispatch(setTransactionMode("edit"))
        navigation.navigate('Transaction Form', { transactionToEdit: props });
    }

    const handleTransactioRemove = () => {
        Alert.alert(
            'Remove Transaction',
            'Do you permanently want to remove this transaction?', [
            {
                text: 'Confirm',
                onPress: () => {
                    dispatch(deleteTransaction(props.id))
                    database.remove(props.id)
                }
            },
            {
                text: 'Cancel'
            }
        ]);
    }

    return (
        <>
            <View style={[styles.individualTask, styles.borderShadow]}>
                <View>
                    <Text>{props.transactionName}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Pressable onPress={handleTransactioRemove}>
                            <MaterialCommunityIcons name="delete-circle" size={24} color="red" />
                        </Pressable>
                        <Pressable onPress={handleEditTransaction}>
                            <MaterialCommunityIcons name="pencil" size={24} color="blue" />
                        </Pressable>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text>${props.amount}</Text>
                        <View style={{ width: 10 }} />
                        <Pressable onPress={handlePress} >
                            <FontAwesome name="angle-right" size={24} color="black" />
                        </Pressable>
                    </View>
                </View>
            </View>
        </>
    )
}
