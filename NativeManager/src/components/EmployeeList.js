import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class EmployeeList extends Component {
  state = {
    allEmployees: []
  };

  componentDidMount() {
    const { fetchAllEmployees } = this.props;
    fetchAllEmployees();
  }

  componentDidUpdate(prevProps, prevState) {
    const { employees } = this.props;
    if (prevProps.employees.length !== employees.length) {
      this.setState({
        allEmployees: employees
      });
    }
  }

  renderEmployeeList = () => {
    const { allEmployees } = this.state;
    const listJSX = (
      <FlatList
        data={allEmployees}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={item => item.uid}
      />
    );
    return allEmployees.length === 0 ? <Text>No Employees.. </Text> : listJSX;
  };

  render() {
    return <View>{this.renderEmployeeList()}</View>;
  }
}

const mapStateToProps = state => ({
  employees: state.employees.allEmployees
});

export default connect(
  mapStateToProps,
  actions
)(EmployeeList);
