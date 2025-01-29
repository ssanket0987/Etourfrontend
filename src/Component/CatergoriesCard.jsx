import { Button, Card, Image } from "react-bootstrap";

export default function CategoriesCard  ({ title, text, imageUrl, buttonLabel, buttonLink })  {
  return (
      <Card style={{ width: '18rem', margin: '1rem' }}>
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{text}</Card.Text>
              <Button variant="primary" href={buttonLink}>
                {buttonLabel}
              </Button>
          </Card.Body>
      </Card>
  );
};