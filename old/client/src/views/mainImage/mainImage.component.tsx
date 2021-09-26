import "./mainImage.styles.scss";
import { HOME_DATA } from "../../assets/data";
import { Button } from "../../components/button/button.component";

export const MainImage = () => {
    interface asset {
        homePage: any;
    }

    const {
        homePage: {
            mobile: { imageHeader },
        },
    }: asset = HOME_DATA;

    return (
        <div className="mainImage-container">
            <img src={imageHeader.default} alt="" />
            <div className="mainImage-text-container">
                {/* overline */}
                <div className="mainImage-overline">NEW PRODUCT</div>
                {/* h1 */}
                <div className="mainImage-title">XX99 Mark II HeadphoneS</div>
                {/* body */}
                <div className="mainImage-body">
                    Experience natural, lifelike audio and exceptional build
                    quality made for the passionate music enthusiast.
                </div>
                <div className="mainImage-button">
                    <Button color="orange">SEE PRODUCT</Button>
                </div>
            </div>
        </div>
    );
};

// height 510
