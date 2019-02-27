import React , {Component} from 'react' ;
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

import { Card, CardImg, CardText, CardBody,
            CardTitle, Breadcrumb, BreadcrumbItem ,Button,
                  Modal, ModalHeader, ModalBody,
                        Label,  Col  } from 'reactstrap';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
            
class CommentForm extends Component {

  constructor(props) {
      super(props);
  
  
      this.state = {
        isModalOpen: false
      };
    }


    toggleModal = () => {
      this.setState({
        isModalOpen: !this.state.isModalOpen
      });
    }

    
  handleSubmit = (values) =>{
      console.log('Current State is: ' + JSON.stringify(values));
      alert('Current State is: ' + JSON.stringify(values));
  }



    render() {
        return (
      <div>
      <Button outline onClick={this.toggleModal}><span className="fa fa-pencil">
      </span> Submit Comment</Button>

    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                  <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                  <ModalBody>
                  <LocalForm onSubmit={(values) => this.handleSubmit(values)}>


                 
                          <Label htmlFor="firstname" md={2}>Raiting</Label>
                     
                              <Col >
                          <Control.select model=".rating"  id="rating" className="form-control" >
                                      <option value="1" >1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                         </Control.select>
                         </Col>
                
              


                
                              <Label htmlFor="firstname" md={5} >Your Name</Label>
                              <Col >
                                  <Control.text model=".author" id="author" name="author"
                                      placeholder="Your name"
                                      className="form-control"
                                      validators={{
                                          required, minLength: minLength(3), maxLength: maxLength(15)
                                      }}
                                       />
                                  <Errors
                                      className="text-danger"
                                      model=".author"
                                      show="touched"
                                      messages={{
                                          required: 'Required',
                                          minLength: 'Must be greater than 2 characters',
                                          maxLength: 'Must be 15 characters or less'
                                      }}
                                   />
                              </Col>
                      
                  
                              <Label htmlFor="comment"  md={5}>Comment</Label>
                              <Col >
                                  <Control.textarea model=".comment" id="comment" name="comment"
                                      rows="6"
                                      className="form-control"  validators={{
                                          required
                                      }}
                                       />
                                  <Errors
                                      className="text-danger"
                                      model=".comment"
                                      show="touched"
                                      messages={{
                                          required: 'Required'
                                      }}
                                   />
                              </Col>
                       

                      
                              <Col >
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



  
 
  const RenderDish = ({dish}) => {
    
    if(dish != null) {
        
      return (
               <Card>
                 <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle >{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>

                 </CardBody>

               </Card>
            );
} else 
      return (
        <div></div>
      );

}

const RenderComments = ({comments}) => {
   
if(comments != null) {
      
        var commentList =   comments.map((comment)=> {

        return (
              
             
              <div key={comment.id}>
              <p>{comment.comment}</p>
              <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', 
                                             { year: 'numeric', month: 'short', day: '2-digit' })
                                                       .format(new Date(Date.parse(comment.date)))}</p>
              </div>
            
        );
    
   });

            return (
                            <div>
                                <h4>Comments</h4>
                                    <ul className="list-unstyled">
                                        
                                            {commentList}
                                    </ul>
                                    <CommentForm />
                            </div>
                    )
        } else 
        return (
                 <div>
                    <CommentForm />
                 </div>
                 );
        }

        
   
   const DishDetail = (props) => {    
     if(props.dish != null) {
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
            else 
            return (
                <div ></div>
            )
     }

export default DishDetail