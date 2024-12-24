import { useRef, useState } from "react";
import { uploadFIleImage } from "../../services/api";
import { message } from "antd";


const ViewUserAvatar = () => {
    const fileInputRef = useRef(null);
    const [userImage, setUserImage] = useState(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            handleUpload(file);
        }
    };

    const handleUpload = async (file) => {
        const userId = localStorage.getItem("userId");
        const formData = new FormData();
        formData.append("file", file);
        try {
            const response = await uploadFIleImage(formData, userId);
            setUserImage(response.url);
            message.success("Upload avatar success.");
        } catch (error) {
            message.error("Upload failed!");
            console.error("Lỗi tải lên file:", error);
        }
    }

    return (
        <>
            <div className="sidebar-profile-img">
                <img src={userImage} alt="" />
                <button
                    type="button"
                    className="profile-img-btn"
                    onClick={handleButtonClick}
                >
                    <i className="far fa-camera" />
                </button>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    accept="image/*"
                    onChange={handleFileChange}
                />
            </div>
        </>
    )
}

export default ViewUserAvatar;