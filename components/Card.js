import Image from "next/image";

const Card = (props) => (
    <div className="card" {...props}>
        {props.children}
    </div>
)

export default Card;