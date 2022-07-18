import React from "react"
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Heading from "../../sharedcomponents/header";
import carte from '../../assets/carte.png'

function AboutUs() {
    return (
        <div>
            <Heading />
            <h1>About Us</h1>
            <div className="float-left">
                <h3>About Us</h3>
                <div style={{width: "50vh", }}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus suspendisse faucibus interdum posuere lorem ipsum. Justo nec ultrices dui sapien. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Purus viverra accumsan in nisl nisi. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Aliquam etiam erat velit scelerisque in dictum non consectetur. Tristique senectus et netus et malesuada fames. Neque viverra justo nec ultrices dui sapien eget mi. Sed cras ornare arcu dui vivamus. Egestas maecenas pharetra convallis posuere morbi leo urna. Massa vitae tortor condimentum lacinia quis vel. Ornare suspendisse sed nisi lacus. Eget arcu dictum varius duis at consectetur. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Enim facilisis gravida neque convallis a cras semper auctor.</p>
                    <p>Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Lacus suspendisse faucibus interdum posuere lorem ipsum. Ultricies leo integer malesuada nunc vel risus commodo viverra. Fringilla est ullamcorper eget nulla facilisi. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Venenatis a condimentum vitae sapien pellentesque habitant. Cras sed felis eget velit aliquet sagittis id consectetur. Platea dictumst vestibulum rhoncus est. Vitae sapien pellentesque habitant morbi. Scelerisque purus semper eget duis at tellus. Leo urna molestie at elementum eu. Dolor sit amet consectetur adipiscing. Imperdiet sed euismod nisi porta lorem mollis aliquam. Pharetra massa massa ultricies mi quis hendrerit dolor. Enim diam vulputate ut pharetra sit amet aliquam id. In massa tempor nec feugiat nisl pretium fusce id.</p>
                </div>
            </div>
            <div className="float-right">
                <img src={carte} style={{width: "50vh", margin: "10vh"}} alt="Map of Gallery"></img>
            </div>
        </div>
    )
}

export default AboutUs