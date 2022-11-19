import React from "react";
import { Button } from "reactstrap";

export function EditorialBanner() {
    return(
        <React.Fragment>
            <div className = "editorial-banner-block">
                <div className = "editorial-banner-image-block">
                    <div className="banner-image">
                        <img className="banner-img" src = "https://thumbs.dreamstime.com/z/camera-pencil-brush-banner-pencils-brushes-photography-design-art-concept-website-72389892.jpg" alt="Camera Store Banner"></img>
                    </div>
                </div>
                <div className="editorial-banner-text-block p-3">
                    <div className="banner-text">
                        <p className="banner-text-heading block-margin-btm-2">
                            <span className = "pt-bold">SAVE 5% ON ALL CAMERAS</span></p>
                        <p className="banner-normal-text">Find all your cameras from different categories here and get it delivered quickly. To expore</p>
                        <Button color="primary">FIND OUT MORE</Button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}