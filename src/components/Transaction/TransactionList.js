import { ScrollView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import styles from '../../styles/main';
import Transaction from './Transaction'; // Removed curly braces


export default function TransactionList() {

    const transactions = useSelector((state) => state.transaction.transactions);
    console.log(transactions)

    return (
        <>
            <View style={styles.transactions}>
                {
                    transactions.length > 0 ? (
                        <ScrollView>
                            {transactions.map((task, index) => (
                                <Transaction key={index} {...task} />
                            ))}
                        </ScrollView>
                    ) : (
                        <Text>No tasks available</Text>

                    )

                }

            </View>
        </>

    );
}
