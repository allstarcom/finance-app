import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  transactions: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#e0e0e0',
  },
  individualTask: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#bcbcbc',
    borderRadius: 10,
  },
  borderShadow: {
    shadowOffset: { width: -3, height: 4 },
    shadowColor: '#171717',
    shadowRadius: 4,
    shadowOpacity: 0.3,
    elevation: 4,
  },
  transactionCard: {
    backgroundColor: '#354F52',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  transactionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFFFFF',
  },
  transactionRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  transactionLabel: {
    fontWeight: 'bold',
    marginRight: 5,
    color: '#FFFFFF',
  },
  transactionText: {
    flex: 1,
    color: '#FFFFFF',
  },
  summaryContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191414', 
    paddingHorizontal: 20,

  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  summaryText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  summaryValue: {
    fontSize: 18,
    color: '#1DB954', 
  },
  summaryHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
});

export default styles;
