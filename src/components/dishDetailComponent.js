import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, Button, BreadcrumbItem,  Modal, ModalHeader, ModalBody, ModalFooter, Col, Row, Label  } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Control, LocalForm, Errors } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);


class CommentForm extends Component {
      
      constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
            this.state = {
      isModalOpen: false
    };
       this.toggleModal = this.toggleModal.bind(this);
    }



      handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }


  render() {
    return (
               <div>
        <Button outline color="danger" onClick={this.toggleModal}>{this.props.buttonLabel}<span><i className="fa fa-pencil"></i> Submit Comment</span></Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} className={this.props.className}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
              <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            


                                
                            
                                         <Label htmlFor="rating" md={2}>Rating</Label>
                                
                                <Col>
                                    <Control.select model=".rating" name="rating"
                                        className="form-control">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Control.select>
                                </Col>
                           

                        
                                <Label htmlFor="name" md={5}>Your Name</Label>
                                <Col>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                        <Errors
                                            className="text-danger"
                                            model=".name"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be greater than 3 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                </Col>
                            
                            
                          
                  
                         
                      
                           
                                <Label htmlFor="comment" md={5}>Comment</Label>
                                <Col>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                          
                                <Col>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            
                        </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}






 function RenderDish({dish}) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name}/>
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else
      return (
        <div></div>
      );
  }



function RenderComments({comments}) {
  if (comments != null) {
  return (
    <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map((comment) => {
            return (
              <li key={comment.id}>
              <p>{comment.comment}</p>
              <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
              </li>
            );
          })}
          </ul>
          <CommentForm />
      </div>
    );
  }
    else {
      return (
        <div></div>
  );
  }
}








  const DishDetail = (props) => {
    if (!props.dish) {
      return (<div></div>);
    }

   return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                      <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} /> 
                        </div>                 
                </div>
                </div>
            );
  }


export default DishDetail;