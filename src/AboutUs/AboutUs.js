import {IoBagCheck} from "@react-icons/all-files/io5/IoBagCheck";
import {GiWorld} from "@react-icons/all-files/gi/GiWorld";
import {FaShoppingBasket} from "@react-icons/all-files/fa/FaShoppingBasket";

const AboutUs = () => {
    const iconsStyle = {
        height:"100%",
        width:"100%",
        color:"#64b5c8"
    }
    return(
        <div className="hogarth_AboutUs_Container">
            <div className="hogarth_AboutUs_InnerContainer">
                <div className="hogarth_AboutUs_InnerSecOne">
                    <h3 className="hogarth_AboutUs_TitleOne">At the Same Time that we are earnest to explore <br/>& learn all things.</h3>
                </div>
                <div className="hogarth_AboutUs_SecTwo">
                    <h2 className="hogarth_AboutUs_TitleSecond">Our obsession with quality and focus on craft ensures creativity remains at the heart of our offering. With access to the best talent and highly skilled expertise across the creative, production and technology space, we are able to marry old traditions with new solutions to deliver the best work in the most efficient way.</h2>
                </div>
            </div>
            
            <div className="hogarth_AboutUs_Icons">
                <div className="hogarth_AboutUsIcons_Inner">
                    <div className="hogarth_AboutUsIcon_One"><FaShoppingBasket style={iconsStyle}/></div>
                    <div className="hogarth_AboutUsIcon_One"><GiWorld style={iconsStyle}/></div>
                    <div className="hogarth_AboutUsIcon_One"><IoBagCheck style={iconsStyle}/></div>
                </div>
                
            </div>
        </div>
    )
}

export default AboutUs;