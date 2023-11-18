import { Box, } from "@mui/material";
import { useRef, useState } from "react";
import Header from "../../components/Header";
import { InputText } from "primereact/inputtext";

const ProfilePage = () => {
    const [image, setImage]=useState("");
    const [src, setsrc]=useState(false);
    const [profile, setprofile]=useState([]);
    const profileFinal=profile.map((item)=>item.preview);
    
    return (
        <Box m="20px">
          {/* HEADER */}
            <Header title="PROFILE" subtitle="Hello There" />
            <div className="profile_pic text-center p-4">
                <div className="flex flex-column justify-content-center align-items-center">
                    <img style={{width:"200px",
                                 height:"200px",
                                 borderRadius:"50%",
                                 objectFit:"cover",
                                 border:"2px solid grey"}}
                         src={profile} alt=""/>
        

                    <InputText type="file"
                           accept='/image/*'
                           onChange={(event)=>{
                           const file=event.target.files[0];
                            if(file && file.type.substring(0,5)==="image")
                            {
                                setImage(file);
                            }else{
                                setImage(null);
                            }}}/>
                </div>
                <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
                    <form>
                        <div>
                            <input type="text" name="name" className="form-control" placeholder="Enter Your Name"/>
                        </div>
                        <div>
                            <input type="text" name="email" className="form-control" placeholder="Enter Your Email"/>
                        </div>
                        <div>
                        <input type="password" name="password" className="form-control" placeholder="Your Password" />
                        </div>
                        <br/>
                        <button className="btn btn-info">Update</button>
                    </form>
                </div>
                
            </div>
        </Box>
    );
};

export default ProfilePage;