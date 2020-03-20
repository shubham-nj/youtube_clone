import React from "react";

import { Form, Row, Col } from "react-bootstrap";
class SearchBar extends React.Component {
  state = {
    searchTerm: ""
  };
  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = event => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;
    onFormSubmit(searchTerm);
    event.preventDefault();
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col>
            <Form.Control
              placeholder="Search"
              onChange={this.handleChange}
              style={{ borderRadius: "0px", marginBottom: "10px" }}
            />
          </Col>
        </Row>
      </Form>
    );
  }
}

export default SearchBar;
