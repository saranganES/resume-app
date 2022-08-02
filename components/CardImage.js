import Image from "next/image";

const CardImage = (props) => {

    const imageHeight = props.imageHeight;

    return <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/food-5.jpg`}
                  className={`card-img-top ${imageHeight}`}
                  height={250} 
                  width={250} 
                  alt="a nice image" />

}