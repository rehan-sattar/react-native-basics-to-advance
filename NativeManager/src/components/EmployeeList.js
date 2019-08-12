import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ListItem from './ListItem';
import { Spinner } from './common';

class EmployeeList extends Component {
  componentDidMount() {
    const { fetchAllEmployees } = this.props;
    fetchAllEmployees();
  }

  renderEmployeeList = () => {
    const { fetchingAllEmployees, employees } = this.props;
    const listJSX = (
      <FlatList
        data={employees}
        renderItem={({ item }) => <ListItem employee={item} />}
        keyExtractor={item => item.uid}
      />
    );
    const renderList = employees.length === 0 ? <Text>No employees</Text> : listJSX;
    return fetchingAllEmployees ? <Spinner style={{ marginTop: 150 }} /> : renderList;
  };

  render() {
    return <View>{this.renderEmployeeList()}</View>;
  }
}

const mapStateToProps = ({ employees }) => ({
  employees: employees.allEmployees,
  fetchingAllEmployees: employees.fetchingAllEmployees
});

export default connect(
  mapStateToProps,
  actions
)(EmployeeList);
