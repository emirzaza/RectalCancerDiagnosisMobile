import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const History = ({ data }) => {
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.UserID}</Text>
      <Text style={styles.cell}>{item.Username}</Text>
      <Text style={styles.cell}>{item.Email}</Text>
      <Text style={styles.cell}>{item.Name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Previous Results</Text>
      <View style={styles.tableHeader}>
        <Text style={styles.headerCell}>ID</Text>
        <Text style={styles.headerCell}>Name</Text>
        <Text style={styles.headerCell}>Description</Text>
        <Text style={styles.headerCell}>Result</Text>
      </View>
      {data && data.length > 0 ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.UserID.toString()}
        />
      ) : (
        <Text style={styles.noData}>No data available</Text>
      )}
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f7ff',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    width: '90%',
    maxWidth: 1000,
    backgroundColor: '#d9e9f3',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    color: '#0056b3',
    fontSize: 16,
    textAlign: 'left',
  },
  row: {
    flexDirection: 'row',
    width: '90%',
    maxWidth: 1000,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cell: {
    flex: 1,
    fontSize: 14,
    textAlign: 'left',
  },
  noData: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#999',
    marginTop: 20,
    textAlign: 'center',
  },
});