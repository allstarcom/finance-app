import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        alignSelf: 'stretch',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: 'grey',
        borderBottomWidth: 3,
        paddingTop: 30,
        padding: 20,
        justifyContent: 'space-between',
        marginTop: 15
    },
    tasks: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#e0e0e0'
    },
    individualTask: {
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#bcbcbc',
        borderRadius: 10
    },
    form: {
        alignSelf: 'stretch',
        backgroundColor: '#bcbcbc',
        padding: 10,
        flexDirection: 'column',
        alignItems: 'center'
    },
    borderShadow: {
        shadowOffset: { width: -3, height: 4 },
        shadowColor: '#171717',
        shadowRadius: 4,
        shadowOpacity: 0.3,
        elevation: 4
    },
    errorMsg: {
        color:'red'
    },
    btn:{
        width: 50
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', 
      },
      modalContent: {
        width: 300, 
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 5, 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4
      },
      modalButtons : {
            flexDirection:'row',
            justifyContent:'space-evenly',
            alignItems: 'center'
      },
      modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      modalText: {
        fontSize: 16,
        marginBottom: 10,
      },
      closeButton: {
        alignSelf: 'flex-end',
        padding: 10,
      },
      closeButtonText: {
        fontSize: 16,
        color: 'grey'}
});


export default styles;
