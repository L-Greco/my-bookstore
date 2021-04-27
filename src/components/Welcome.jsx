import {Jumbotron, Button }from "react-bootstrap"

const Welcome = (props) => (
    <Jumbotron>
  <h1>{props.h1}</h1>
  <p>
    {props.p}
  </p>
  <p>
    <Button variant="primary">{props.btn}</Button>
  </p>
</Jumbotron>
)

export default Welcome