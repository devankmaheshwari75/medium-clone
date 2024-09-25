import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@devank75/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../../config.ts";
import { useRecoilValue, useRecoilState } from "recoil";
import { fullName } from "../store/atoms/fullName.tsx";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [userName , setUserName]  = useRecoilState(fullName);

    
    const [userInputs, setuserInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    });

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, userInputs);
            console.log(response);
            
            const jwt = response.data.jwt;
            localStorage.setItem("token", jwt);
            navigate("/blogs");
        } catch(e) {
            alert("Error while signing up")
            // alert the user here that the request failed
        }
    }
    
    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-extrabold">
                        Create an account
                    </div>
                    <div className="text-slate-500">
                        {type === "signin" ? "Don't have an account?" : "Already have an account?" }
                        <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/"}>
                            {type === "signin" ? "Sign up" : "Sign in"}
                        </Link>
                    </div>
                </div>
                <div className="pt-8">
                    {type === "signup" ? <LabelledInput label="Name" id = "name" placeholder="Devank Maheshwari ..." onChange={(e) => {
                        setuserInputs({
                            ...userInputs,
                            name: e.target.value
                        })

                        


                    }} /> : null}
                    <LabelledInput label="Username" id= "username" placeholder="example@example.com" onChange={(e) => {
                        setuserInputs({
                            ...userInputs,
                            email: e.target.value
                        })

                        setUserName(e.target.value);
                        console.log(userName)
                    }} />
                    <LabelledInput label="Password" id = "password" type={"password"} placeholder="*******" onChange={(e) => {
                        setuserInputs({
                            ...userInputs,
                            password: e.target.value
                        })
                    }} />
                    <button onClick={sendRequest} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign up" : "Sign in"}</button>
                </div>
            </div>
        </div>
    </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    id : string
}

function LabelledInput({ label, placeholder, onChange, type ,id }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input onChange={onChange} type={type || "text"} id={id}className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}