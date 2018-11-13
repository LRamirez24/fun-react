import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';


class DishDetail extends Component {

  renderDish(dish) {
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



    renderComments(comments) {
  	   if (comments != null) {
          return comments.map((comment) => {
      return (
          <ul key={comment.id} className='list-unstyled'>
            <li>{comment.comment}</li>
            <li>--{comment.author}, {comment.date}</li>
          </ul>
      );
    })
  }
    else {
        return(
            <div></div>
          );
    }
  }

  render() {
    if (!this.props.dish) {
      return (<div></div>);
    }

    return (<div className='row'>
      <div className='col-12 col-md-5 m-1'>
        {this.renderDish(this.props.dish)}
      </div>
      <div className='col-12 col-md-5'>
        <h4>Comments</h4>
        {this.renderComments(this.props.dish.comments)}
      </div>
    </div>);
  };
}

export default DishDetail;