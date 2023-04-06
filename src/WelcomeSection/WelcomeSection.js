import coverImage from "../Assets/Images/landingPageCoverImage.jpg";
import natureImage from "../Assets/Images/ForestUp.avif"
import MountainAnother from "../Assets/Images/MountainFinal.avif"
const WelcomeSection = () => {
    const welcomeContent = "WE NEED THE TONIC OF WILDNESS";
    const READMORE = "READ MORE";
    return(
        <div className="hogarth_welcome_sec carousel slide" id="carouselExampleIndicators">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div className="carousel-item active">
                    <img src={coverImage} alt="" className="hogarth_CoverImage"/>
                    <div className="hogarth_welcomeContent">
                        <div className="hogarth_WelcomeContent_Inner">
                            <div className="welcome_Content">
                                <h3 className="welcome_Content_h3">WE NEED THE TONIC OF WILDNESS</h3>
                            </div>
                        </div>
                        <div className="hogarth_ReadMore_Button">
                            <button className="hogarth_ReadButton">{READMORE}</button>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={MountainAnother} alt="" className="hogarth_CoverImage"/>
                    <div className="hogarth_welcomeContent">
                        <div className="hogarth_WelcomeContent_Inner">
                            <div className="welcome_Content">
                                <h3 className="welcome_Content_h3">The mountains are calling and I must go</h3>
                            </div>
                        </div>
                        <div className="hogarth_ReadMore_Button">
                            <button className="hogarth_ReadButton">{READMORE}</button>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={natureImage} alt="" className="hogarth_CoverImage"/>
                    <div className="hogarth_welcomeContent">
                        <div className="hogarth_WelcomeContent_Inner">
                            <div className="welcome_Content">
                                <h3 className="welcome_Content_h3">Nature always wears the colors of the spirit</h3>
                            </div>
                        </div>
                        <div className="hogarth_ReadMore_Button">
                            <button className="hogarth_ReadButton">{READMORE}</button>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            
        </div>
    )
}

export default WelcomeSection;