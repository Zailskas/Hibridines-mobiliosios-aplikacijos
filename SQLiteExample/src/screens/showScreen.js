import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import {showAll} from '../../store/actions/carAction'


class showScreen extends Component {
  componentDidMount() {
    this.props.showAll();
  }
  render() {
    const {cars} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cars</Text>
        <ScrollView style={styles.container}>
          {cars.cars.map((car, index) =>
            <View style={styles.cars} key={index}>
              <Text style={styles.make}>
                {car.Make} {car.Model}

              </Text>
            </View>
          )}
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
    flex: 1,
  },
  cars: {
    padding: 20,
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
  model: {
    fontSize: 14,
    color: '#999',
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

const mapStateToProps = (state) => {
  return {
    cars: state.cars
  }
}
export default connect(mapStateToProps, {showAll}) (showScreen);