import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';




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
          return comments.map((comment) => {
      return (
          <ul key={comment.id} className='list-unstyled'>
            <li>{comment.comment}</li>
            <li>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
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

  const DishDetail = (props) => {
    if (!props.dish) {
      return (<div></div>);
    }

    return (
    <div className='container'>
    <div className='row'>
      <div className='col-12 col-md-5 m-1'>
        <RenderDish dish={props.dish} />
      </div>
      <div className='col-12 col-md-5'>
        <h4>Comments</h4>
        <RenderComments comments={props.dish.comments} />
      </div>
    </div>
    </div>
    );
  }


export default DishDetail;