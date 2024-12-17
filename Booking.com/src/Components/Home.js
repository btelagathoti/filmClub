import React from "react";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./home.css"
import DatePicker from "react-datepicker";
const Home = () => {
    //     const checkin = Date.now();

    // console.log(new Intl.DateTimeFormat('en-US', {
    //             year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'
    //                 })
    //                 .format(checkin));
    const [checkindate, setcheckinDate] = useState(new Date());
    // console.log(checkindate);
    const [checkoutdate, setcheckoutDate] = useState(new Date());
    // console.log(setcheckoutDate);
    const datePicked = () => {
        console.log(checkindate);
        console.log(checkoutdate);
    }
    return (
        <div>
            {/* Carousel components starts */}
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://virtualbackgrounds.site/wp-content/uploads/2020/11/hotel-room-in-new-york.jpg" class="d-block w-100  homepagebg_img" alt="img1"></img>
                        <div class="carousel-caption d-none d-md-block">
                            <a class="singleroom" aria-label="take me to singleroom" href=''><h1>Single Room</h1></a>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://img.pikbest.com/ai/illus_our/20230414/c233bd605fb76b736db0e09647b8bce8.jpg!w700wp" class="d-block w-100 homepagebg_img" alt="img2"></img>
                        <div class="carousel-caption d-none d-md-block">
                            <a class="deluxe" aria-label="take me to deluxe" href=''><h1>Deluxe Double Room</h1></a>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.pinimg.com/736x/12/1b/1c/121b1c52cf055a78cc593130fbf3152d.jpg" class="d-block w-100 homepagebg_img" alt="img3"></img>
                        <div class="carousel-caption d-none d-md-block">
                            <a class="suite" aria-label="take me to suite" href=''><h1>Junior Suite</h1></a>

                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            {/* Carousel components ends */}

            <form className="datepickercomponent">
                <input className="datepickeritem" type="text" placeholder="Where are you going"></input>
                <DatePicker className="datepickeritem" selected={checkindate} onChange={(checkindate) => setcheckinDate(checkindate)} />
                <DatePicker className="datepickeritem" selected={checkoutdate} onChange={(checkoutdate) => setcheckoutDate(checkoutdate)} />
                <button className="datepickersearch " type="submit" onClick={datePicked}>Search</button>
            </form>
        </div>

    )
}

export default Home;