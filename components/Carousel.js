import { Carousel } from "react-bootstrap";
import { useState } from "react";
import Image from "next/image";
import * as api from "../store/actions/common/API_Links";


const CarouselBanner = (props) => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
      
    const bannerImages = props.images;

    console.log("carousel",bannerImages);

    return <Carousel className="brand-banner" 
                     activeIndex={index} 
                     onSelect={handleSelect}>
                     {!bannerImages.length ? <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                src= "/images/food-5.jpg"
                                alt="a delicius food"
                                
                            />
                        </Carousel.Item> : ""}
                    { bannerImages?.map((i,k) => (
                        <Carousel.Item key={k}>
                            <img
                                className="d-block w-100"
                                src={`${i ? api.CMS_URL+i.substring(1): "/images/food-5.jpg"}`}
                                alt="a delicius food"
                                
                            />
                        </Carousel.Item>
                    )) }
            </Carousel>
}

export default CarouselBanner;