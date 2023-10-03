import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncUsers } from "../feature/userReducer/userSlice";

export default function Users() {
    const dispatch = useDispatch();
    const { loading, error, data } = useSelector(state => state.users)
    console.log(data)
    useEffect(() => {
        dispatch(getAsyncUsers())
    }, [dispatch])


    return (
        <>
            <h2>userList</h2>
            {
                loading ? (
                    <p>loading...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (<div>{data && data.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
                </div>)
            }


        </>
    );
}