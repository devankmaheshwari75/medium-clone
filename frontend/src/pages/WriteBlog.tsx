import { useState } from "react"
import { AppBar } from "../components/AppBar"
import axios from "axios";
import { BACKEND_URL } from "../../config";


export const Writeblog = () => {


    const [title, setTitle] = useState("")
    const [story, setStory] = useState("")


    const publishHandler = async () => {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                title,
                content: story
            }, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            });
            console.log(response);
            setTitle("");
            setStory("");
        } catch (error) {
            console.error("Error publishing the blog:", error);
            // Optionally display an error message to the user  
        }
    }
    return (

        <>

            <AppBar />
            <div className="flex justify-center">
                <div className="flex flex-col">
                    <div className=" border-b border-slate-200" >
                        <input type="text" className="h-[100px] w-[650px] text-3xl  outline-none pt-2
                          " placeholder="Title" onChange={(event) => {
                                setTitle(event.target.value)

                            }} />
                    </div>

                    <div className="  border-b border-slate-200">
                        <textarea id="comments" rows={4} className=" h-[300px] w-[650px] outline-none text-2xl pt-3 overflow-hidden" placeholder="Tell your story ..." required onChange={(event) => {
                            setStory(event.target.value)

                        }}></textarea>
                    </div>
                    <div className=" flex justify-center">
                        <button className="text-gray-900  hover:border  border-gray-500 hover:text-gray-950 px-5 py-2.5 text-center me-2 mb-2 " onClick={publishHandler}>
                            Publish
                        </button>

                    </div>

                </div>
            </div>
        </>


    )
}