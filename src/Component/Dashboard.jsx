import React from "react";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import Categories from "./Categories";
import CategoriesCard from "./CatergoriesCard";
import ReviewCard from "./ReviewCard";
import FeatureSection from "./FeaturesSection";
const reviews = [
    { name: "John Doe", review: "Great experience! Highly recommend.", image: "https://randomuser.me/api/portraits/men/10.jpg" },
    { name: "Michel Lee", review: "Amazing service and friendly staff!", image: "https://randomuser.me/api/portraits/men/15.jpg" },
    { name: "Michael Smith", review: "A truly unforgettable journey!", image: "https://randomuser.me/api/portraits/men/20.jpg" }
];
const slides = [
    {
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
        title: "First Slide",
        description: "Description for the first slide."
    },
    {
        image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=2070&auto=format&fit=crop",
        title: "Second Slide",
        description: "Description for the second slide."
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?q=80&w=2070&auto=format&fit=crop",
        title: "Third Slide",
        description: "Description for the third slide."
    }
];

export default function Dashboard() {
    return (
        <div style={{width:'100%'}}>
                <Row className="mx-0">
                <Col md={12} className="p-0" >
                    <Carousel>
                        {slides.map((slide, index) => (
                            <Carousel.Item key={index} interval={2000}>
                                <img
                                    className="d-block w-100"
                                    src={slide.image}
                                    alt={`Slide ${index + 1}`}
                                    style={{ objectFit: "cover", height: "80vh", width: "100vw" }}
                                />
                                <Carousel.Caption>
                                    <h3>{slide.title}</h3>
                                    <p>{slide.description}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <FeatureSection />

                    <Categories  />
                    <Container>
                        <h2 className="text-center my-4">What Our Customers Say</h2>
                        <Row className="justify-content-center">
                            {reviews.map((review, index) => (
                                <Col key={index} md={4} className="d-flex justify-content-center">
                                    <ReviewCard name={review.name} review={review.review} image={review.image} />
                                </Col>
                            ))}
                        </Row>
                    </Container>

                </Col>
            </Row>

        </div>
    );
}
