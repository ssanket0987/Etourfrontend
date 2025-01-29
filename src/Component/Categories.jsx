import React from "react";
import { Row, Col } from "react-bootstrap";
import CategoriesCard from "./CatergoriesCard";
// import CategoriesCard from "./CategoriesCard";

const cardData = [
    {
        title: "International Package",
        text: "Explore the best international destinations.",
        imageUrl:
            "https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        buttonLabel: "Explore",
    },
    {
        title: "Domestic Package",
        text: "Discover beautiful places in your country.",
        imageUrl:
            "https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        buttonLabel: "Discover",
    },
    {
        title: "Holiday Special",
        text: "Get amazing deals for the holiday season.",
        imageUrl:
            "https://images.unsplash.com/photo-1547448415-e9f5b28e570d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        buttonLabel: "Book Now",
    },
];

export default function Categories() {
    return (
        <>
            <div
                style={{
                    backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
            url("https://images.unsplash.com/photo-1531572753322-ad063cecc140?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
        `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "75vh",
                    padding: "2rem",
                    paddingInline:'8vw'
                }}
            >
                <h1
                    style={{
                        marginLeft: "1rem",
                        paddingBottom: "1.5rem",
                        color: "#ffffff",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                    }}
                >
                    Categories
                </h1>

                <Row className="g-4">
                    {cardData.map((data, index) => (
                        <Col key={index} md={4} className="mb-4">
                            <CategoriesCard
                                title={data.title}
                                text={data.text}
                                imageUrl={data.imageUrl}
                                buttonLabel={data.buttonLabel}
                            />
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
}
