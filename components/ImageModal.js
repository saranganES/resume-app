import * as api from "../store/actions/common/API_Links";

const ImageModal = (props) => {
    
    return <div {...props}>
                <div className="modal-dialog modal-dialog-centered justify-content-center" data-backdrop="static">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close-button position-absolute top-0 end-0" 
                                onClick={() => {console.log("false");
                                props.showMenu(false)}}>
                                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/clear-black.svg`} ></img>
                            </button>
                            
                            <div className="menu-image d-flex justify-content-center">
                                <img src={`${props.imageUrl ? api.CMS_URL+props.imageUrl.substring(1):"/images/food-4.jpg"}`} ></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
}

export default ImageModal;