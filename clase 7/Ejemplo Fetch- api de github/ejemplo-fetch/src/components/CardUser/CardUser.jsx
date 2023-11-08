import Card from "react-bootstrap/Card";
export default function CardUser({ data }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant='top'
        src={data.avatar_url}
        style={{ width: 123, height: 123 }}
      />
      <Card.Body>
        <Card.Title>{data.login}</Card.Title>
        <Card.Text>{data.url}</Card.Text>
      </Card.Body>
    </Card>
  );
}
