import React, { Component } from "react";
import {
  TextInput,
  Form,
  DropdownV2,
  Tile,
  Button
} from "carbon-components-react";
import Header from "./Header";
import "./patterns.scss";
import { throws } from "assert";

class DisplayForm extends Component {
  constructor(props) {
    super(props);
    const defaultData = [
      { label: "ItemName", value: "Item Name", type: "textinput" },
      {
        label: "AisleNumber",
        value: "Aisle Number (optional)",
        type: "textinput"
      }
    ];
    this.state = {
      data: props.data || defaultData,
      showDescription: props.showDescription || false,
      itemName: {},
      aisleNumber: {}
    };

    this.handleChangeItemName = this.handleChangeItemName.bind(this);
    this.handleChangeAisleNumber = this.handleChangeAisleNumber.bind(this);
  }

  handleChangeItemName(event) {
    this.setState({ itemName: event.target.value });
  }

  handleChangeAisleNumber(event) {
    this.setState({ aisleNumber: event.target.value });
  }

  handleSubmit() {
    let newItem = {
      itemName: this.state.itemName,
      aisleNumber: this.state.aisleNumber
    };

    if (!this.state.props.addToItemBank(newItem)) {
      //todo: display failure
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data) this.setState({ data: nextProps.data });
  }

  render() {
    const data = this.state.data;
    const showDescription = this.state.showDescription;
    return (
      <div className="bx--grid">
        {showDescription && (
          <Header
            title="Display Form"
            subtitle="Displays a model object as a form in a read only display."
          />
        )}
        <div className="bx--row">
          <div className="bx--col-xs-12">
            <Tile>
              <Form>
                {data.map(item => {
                  if (item.type === "textinput") {
                    return (
                      <div key={item.label} className="display-form-item">
                        <TextInput
                          id={item.label}
                          hint={item.value}
                          labelText={
                            item.label.charAt(0).toUpperCase() +
                            item.label.slice(1).replace(/([A-Z])/g, " $1")
                          }
                          onChange={
                            item.label === "ItemName"
                              ? this.handleChangeItemName
                              : this.handleChangeAisleNumber
                          }
                        />
                        <Button
                          className="add-delete-row-buttons"
                          onClick={this.handleEvent}
                        >
                          Add Item
                        </Button>
                      </div>
                    );
                  } else if (item.type === "dropdown") {
                    return (
                      <div key={item.label} className="display-form-item">
                        <p className="bx--label left-align">{item.label}</p>
                        <DropdownV2
                          disabled
                          id={item.label}
                          label={"Select a " + item.label.toLowerCase() + ".."}
                          items={item.value}
                          selectedItem={item.value[0]}
                        />
                      </div>
                    );
                  } else {
                    return <div />;
                  }
                })}
              </Form>
            </Tile>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}
export default DisplayForm;
