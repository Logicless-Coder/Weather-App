import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import "./css/Header.css";

function Header(props) {
    return (
        <Container maxWidth="false" className="header">
            <Typography align="center" variant="h3">
                Weather App
            </Typography>
        </Container>
    );
}

export default Header;
