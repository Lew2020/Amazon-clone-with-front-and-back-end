import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/I/61vPCF-ObIL._SL1500_.jpg"
          alt=""
        />

        <div className="home__row">
           <Product
            id="12321341"
            title="Swivel Laptop Stand, Lamicall Laptop Riser - [360-Rotating] Ergonomic Aluminum Computer Desk Holder Compatiblewith  MacBook,    Air, Pro, Dell XPS, HP and ..."
             price={29.74}
             rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/613gQeDFgDL._AC_SL1300_.jpg"
          />
          <Product
            id="49538094"
            title="1080P Webcam with Microphone,Web Camera with Wide Angle for Conferencinge/Online Teaching/Business Meeting,Low-Light Correction and Manual Focus Computer Camera for PC/Mac/Laptop/MacBook (Black)"
            price={39.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61FGhmzvq6L._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="Blink Mini – Compact indoor plug-in smart security camera, 1080 HD video, night vision, motion detection, two-way audio, Works with Alexa – 1 camera"
            price={34.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61LrV6Id5gL._SL1000_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Mens Messenger Bag 15.6 Inch Waterproof Vintage Genuine Leather Waxed Canvas Briefcase Large Satchel Shoulder Bag Rugged Leather Computer Laptop Bag, Grey"
            price={42.48}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81EPTX8VhwL._AC_SL1100_.jpg"
            />
          <Product
            id="3254354345"
            title="DC Comics Batman Batmobile Car Twin Bed by Delta Children"
            price={219.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/914v07JOVhL._SX355_.jpg"
            />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="903850"
            title="Colorful Handmade Ethiopian Habesha Baskets 9005306 (9x12 Art Print, Wall Decor Travel Poster)"
            price={12.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71%2ByLWYWOSL._AC_SY450_.jpg"
          />
           <Product
            id="90385073"
            title="2021 1080P Streaming Business Webcam with Microphone & Privacy Cover, AutoFocus, NexiGo N930P HD USB Web Camera, for Zoom Meeting YouTube Skype FaceTime"
            price={66.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71OEMAn%2B0XL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
         <Product
            id="23445937"
            title="Sceptre Curved 32'Gaming Monitor Up to 240Hz 1ms AMD FreeSync Premium Build-in Speakers, HDMI Displayport Gunmetal 2021 (C325B-FWD240)"
            price={337.06}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61GQflvRNWL._AC_SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
