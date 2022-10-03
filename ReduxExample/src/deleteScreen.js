import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {showAll, deleteCar} from '../store/actions/carAction';

class deleteScreen extends Component {
  componentDidMount() {
    this.props.showAll();
  }
  render() {
    const {cars} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Delete car</Text>
        <ScrollView style={styles.container}>
          {cars.cars.map((car, index) => (
            <View style={styles.cars} key={index}>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={styles.make}>
                  {car.make} {car.model}
                </Text>
              </View>
              <View style={styles.deleteButton}>
                <TouchableOpacity onPress={() => this.props.deleteCar(car.id)}>
                  <View style={styles.addButtonContainer}>
                    <Text style={styles.addButton}>DELETE</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carsContainer: {
    borderTopWidth: 3,
    borderTopColor: '#ddd',
  },
  cars: {
    padding: 20,
    flexDirection: 'row',
    backgroundColor: '#ededed',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 5,
  },
  make: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  deleteButton: {
    flex: 1,
    alignItems: 'flex-end',
  },
  addButton: {
    fontSize: 18,
  },
  addButtonContainer: {
    width: 100,
  
    backgroundColor: 'tomato',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
const mapStateToProps = (state) => {
  return {
    cars: state.cars,
  };
};
export default connect(mapStateToProps, {showAll, deleteCar})(deleteScreen);