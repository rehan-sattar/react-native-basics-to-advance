import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ListItem from './ListItem';
import { Spinner } from './common';

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
    const { fetchingAllEmployees } = this.props;
    const listJSX = (
      <FlatList
        data={allEmployees}
        renderItem={({ item }) => <ListItem name={item.name} />}
        keyExtractor={item => item.uid}
      />
    );
    const renderList = allEmployees.length === 0 ? <Text>No employees</Text> : listJSX;
    return fetchingAllEmployees ? <Spinner style={{ marginTop: 150 }} /> : renderList;
  };

  render() {
    return <View>{this.renderEmployeeList()}</View>;
  }
}

const mapStateToProps = ({ employees }) => ({
  employees: employees.employees,
  fetchingAllEmployees: employees.fetchingAllEmployees
});

export default connect(
  mapStateToProps,
  actions
)(EmployeeList);
