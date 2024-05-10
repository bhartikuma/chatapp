import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from 'reactstrap';

class TaskModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            dueDate: ''
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { isOpen, toggle, onSave } = this.props;
        return (
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>Task Details</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for='title'>Title</Label>
                            <Input
                                type='text'
                                name='title'
                                value={this.state.title}
                                onChange={this.handleChange}
                                placeholder='Enter Task Title'
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='description'>Description</Label>
                            <Input
                                type='text'
                                name='description'
                                value={this.state.description}
                                onChange={this.handleChange}
                                placeholder='Enter Task Description'
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='dueDate'>Due Date</Label>
                            <Input
                                type='date'
                                name='dueDate'
                                value={this.state.dueDate}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color='success' onClick={() => onSave(this.state)}>
                        Save
                    </Button>
                    <Button color='secondary' onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default TaskModal;
