import { useState, useEffect } from "react";
// import "../style/Main.css";
import axios from "axios";

const Show = () => {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");
    useEffect(() => {
        axios
            .get("http://localhost:8080/home")
            .then((response) => {
                console.log(response.data)
                setMyData(response.data)
            })
            .catch((error) => setIsError(error.message));
    }, []);
    return (
        <>
            {/* {isError !== "" && <h2>{isError}</h2>} */}
              
            <div className="grid">
            <h1>All users</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Pincode</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myData.map((data, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.phone}</td>
                                        <td>{data.address}</td>
                                        <td>{data.pincode}</td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Show;