import React, { Component } from "react";
import SimpleList from "../pattern-components/SimpleList";
import BasicPage from "../pattern-components/BasicPage";
import "../pattern-components/patterns.scss";
import DisplayForm from "../pattern-components/AddItemForm";

class UIShellBody extends Component {
  components = {
    "Regularly Used Items": SimpleList,
    "Basic Page": BasicPage
  };
  defaultComponent = "Basic Page";

  render() {
    let curScreen = this.props.patternName;
    const PatternName = this.components[curScreen];
    return (
      <div className="pattern-container">
        <PatternName showDescription={true} itemBank={this.props.itemBank }/>
        <DisplayForm />
      </div>

    );
  }
}
export default UIShellBody;
