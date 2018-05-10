import React, {Component} from 'react';
import Clock from './clock';
import {Grid, Row, Col, Button, Form, FormControl} from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'January 1, 2019',
            newDeadLine: ''
        };
    }

    changeDeadline() {
        this.setState({deadline: this.state.newDeadLine});
        console.log(this.state);
    }

    render() {
        return (
            <Grid style={{marginTop:"15%"}}>
                <Row className="show-grid text-center" style={{margin:"10px"}}>
                    <Col md={8} mdOffset={2} xs={12}>
                        <h1 style={{fontSize:"4.5em"}}>Count Down to {this.state.deadline}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} mdOffset={2} xs={12} className="text-center" style={{marginTop:"10px",fontSize:"3.5em"}}>
                        <Clock deadline={this.state.deadline} />
                    </Col>
                </Row>
                <Row>
                    <Col md={8} mdOffset={2} xs={12} className="text-center" style={{marginTop:"10px"}}>
                    <Form style={{margin:"10px"}}>
                        <FormControl style={{marginTop: "auto",fontSize:"15px"}} type="text"
                                     onChange={event => this.setState({newDeadLine: event.target.value})}
                                     placeholder="Enter your deadline"/>
                        <Button style={{margin: "10px",width:"200px",height:"50px",borderRadius:"10px",fontSize:"25px"}} bsStyle="primary"
                                onClick={() => this.changeDeadline()}>Submit</Button>
                    </Form>
                    </Col>
                </Row>
            </Grid>
        );
    }

}

export default App;
