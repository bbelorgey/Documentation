import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        email: "homer.simpson@wildcodeschool.fr",
        name: "Homer",
        lastname: "Simpson"
      }
    }
  }
  render() {
    const { email, name, lastname } = this.state.profile;
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>{lastname}</CardSubtitle>
            <CardText>{email}</CardText>
          </CardBody>
        </Card>
        <Button
              outline
              tag={Link}
              to="/"
              color="primary">
              Sign Out
            </Button>
      </div>
    )
  };
}
export default Profile;

