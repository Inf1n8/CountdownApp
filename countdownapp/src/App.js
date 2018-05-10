import React, { Component } from 'react';
import Clock from './clock';
import 'bootstrap/dist/css/bootstrap.css';
import { Grid, Row, Col, Button } from 'react-bootstrap';

class App extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            deadline:'May 11, 2018',
            newDeadLine:''
        };
    }
    changeDeadline()
    {
        this.setState({deadline : this.state.newDeadLine});
        console.log(this.state);
    }
    render(){
        return(
            <Grid>
                <Row>
                    <Col xs={12}  >
                        <h1 className="text-center">Count Down to {this.state.deadline}</h1>
                    </Col>
                </Row>
                <Row>
                    <Clock deadline={this.state.deadline}/>
                </Row>
                <Row>
                    <input onChange={event => this.setState({newDeadLine:event.target.value})} placeholder="Enter your deadline"/>
                    <Button bsStyle="primary" onClick={() => this.changeDeadline()}>Submit</Button>
                </Row>
            </Grid>
        );
    }

}

export default App;
