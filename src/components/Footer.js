import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "./css/Footer.css";

function Footer(props) {
    return (
        <div className="footer">
            Made with{" "}
            <FavoriteIcon
                style={{ transform: "translateY(+20%)", color: "red" }}
            />{" "}
            by Abhishek Rathore
        </div>
    );
}

export default Footer;
