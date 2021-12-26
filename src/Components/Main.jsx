import React, { Component } from "react";
import FillField from "./FillField";
import "./main.scss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default class Main extends Component {
  state = {
    array: [],
  };

removeFunc = (index) => {
    let removeArray = [...this.state.array]
    removeArray.splice(index,1)
    this.setState({
        array:removeArray
    })
}

  buttonFunc = (name, email, age, password) => {
    let newObj = {
      name: name,
      email: email,
      age: age,
      password: password,
    };
    let newArray = [...this.state.array, newObj];
    this.setState({
      array: newArray,
    });
    
  };
  render() {
    return (
      <div className="main">
        <div className="main-section">
          <h1>USER ADD</h1>
          <FillField butFunc={this.buttonFunc} />

          <div className="user-section">
            {this.state.array.map((el, index) => {
              return (
                <Card className="user-block" sx={{ maxWidth: 275 }}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {el.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {el.email}
                    </Typography>
                    <Typography variant="body2">{el.age}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={()=> {this.removeFunc(index)}} variant="outlined" color="error">
                      Remove
                    </Button>
                  </CardActions>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
