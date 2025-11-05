import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchGroup: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 10,
  },
  searchFormGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 16,
    color: '#333',
  },
  searchControl: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  searchButton: {
    backgroundColor: '#34967C',
    borderRadius: 20,
    padding: 10,
    marginLeft: 10,
  },
  filterGroup: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 15,
  },
  filterContainer: {
    alignItems: 'center',
    width: 80,
    height: 60,
  },
  listingContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  paginationContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  showMoreButton: {
    backgroundColor: '#34967C',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  showMoreButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

export { styles };
