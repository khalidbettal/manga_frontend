import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../store/auth/authSlice";





function Profile() {
    const dispatch = useDispatch();
    const userData = useSelector((state : string) => state.auth.user);

    useEffect(() => {
        dispatch(fetchUser())
    })

    if (!userData) {
        return <div>Sign in</div>;
    }
  return (
    <>
     <div className="flex flex-col container mx-auto p-10 text-3xl ">
         <table>
             <tr>
                 <td>Name:</td>
                 <td>{userData?.name}</td>
             </tr>
             <tr>
                 <td>Email:</td>
                 <td>{userData?.email}</td>
             </tr>
           
         </table>
     </div>
    </>
  )
}

export default Profile