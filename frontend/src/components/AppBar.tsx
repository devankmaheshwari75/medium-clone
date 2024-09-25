import logo from "../assets/logo.png";
import { BsPencilSquare } from "react-icons/bs";
import { useRecoilState } from "recoil";
import {searchQuery} from "../store/atoms/searchquery"

import { useNavigate } from "react-router-dom";


export const AppBar = () => {


    const [query ,setQuery] = useRecoilState(searchQuery);



    const navigate = useNavigate();



    const signoutHandler = () => {
        localStorage.removeItem('token');
        navigate("/signin");


    }

    const writeHandler = () => {
        navigate("/writeblog");
    }






    return (
        <div className="pb-2">
            <div className="flex justify-between p-2">


                {/* left container */}
                <div className="flex">
                    <img className=" h-12 cursor-pointer" onClick={() => {
                        navigate("/blogs")
                    }} src={logo} alt="" />
                    <input

                    onChange={(e)=>{
                        setQuery(e.target.value);

                        console.log(query);



                    }}
                        type="search"
                        name="search"
                        placeholder="Search"
                        className=" mt-1 mx-2 bg-neutral-100 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
                    />

                </div>


                {/* right container
 */}
                <div className="flex gap-5 items-center">
                    <div className="flex items-center border-transparent hover:border-gray-500 transition duration-300">
                        <BsPencilSquare className="text-gray-900" />
                        <button onClick={writeHandler} className="text-gray-900 hover:text-gray-950 px-5 py-2.5 text-center me-2 mb-2 transition duration-300">
                            Write
                        </button>
                    </div>
                    <button onClick={signoutHandler} className="text-gray-900 hover:text-gray-950 px-5 py-2.5 text-center me-2 mb-2 border-transparent hover:border-gray-500 transition duration-300">
                        Signout
                    </button>
                    <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-white font-semibold">DM</div>
                </div>

            </div>
        </div>
    )
}