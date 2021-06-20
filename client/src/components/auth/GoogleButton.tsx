import React from "react";
import { googleLogin } from "../../redux/authSlice/authSlice";
import { useAppDispatch } from "../../redux/store";

interface GoogleButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {}

const GoogleButton: React.FC<GoogleButtonProps> = () => {
    const dispatch = useAppDispatch();
    const signin = () => {
        dispatch(googleLogin({}));
    }
    return (
        <button onClick={signin}>Login with Google</button>
    )
}
export default GoogleButton;