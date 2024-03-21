import { Pressable, ScrollView, Text, View, Modal } from 'react-native';
import styles from '../../styles/main';
import { useSelector } from 'react-redux'



export default function TransactionList() {

    const transactions = useSelector((state) => state.post.transactions);
    console.log(posts)

    return (
        <>
            <View style={styles.tasks}>
                {
                    transactions.length > 0 ? (
                        <ScrollView>
                            {posts.map((task, index) => (
                                <Task key={index} {...task} />
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
