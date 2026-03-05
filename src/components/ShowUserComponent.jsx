import React, { useEffect, useState } from 'react'
import InputNameComponent from './InputNameComponent';

const mockData = [
    { createdAt: "656", name: "2", avatar: "#545d14", id: "1" },
    { createdAt: "420", name: "Model 3", avatar: "#081a01", id: "2" },
    { createdAt: "658", name: "Model T", avatar: "#592127", id: "3" },
    { createdAt: "50635", name: "Prius", avatar: "#63556e", id: "4" },
]

const mockDataToJson = JSON.stringify(mockData);

export default function ShowUserComponent() {

    const [users, setUser] = useState([]);
    const [input, setInput] = useState("");
    const [error, setError] = useState();

    function update(id) {
        if (input === "") {
            alert("Required to be filled!")
        } else {
            const updatedUser = [...users]
            updatedUser[id - 1] = { ...updatedUser[id - 1], name: input }
            setUser(() => updatedUser)
        }
    }

    useEffect(() => {
        if (mockData.length === 0) {
            setError("There's an error while fetching data")
        } else {
            localStorage.setItem("users", mockDataToJson);
            setUser(mockData)
            console.log("Loaded data successfully")
        }
        return (() => {
            console.log("Unmount")
        })
    }, [])
    return (
        <div className='w-full mt-[100px]'>
            <div className='h-[300px] flex flex-col justify-center items-center'>
                <table className='w-3xl mx-auto border-collapse text-center'>
                    <thead>
                        <tr className='border bg-blue-600 text-white h-10'>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Avatar Code</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => (
                                <tr className='border h-10' key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.avatar}</td>
                                    <td>{user.createdAt}</td>
                                    <td>
                                        <button className='bg-blue-500 w-28 text-white rounded-[10px] hover:cursor-pointer'
                                            onClick={() => update(user.id)}
                                        >
                                            Update ID: {user.id}
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                {/* INPUT */}
                <InputNameComponent input={input} setInput={setInput} />


            </div>
            {error && (
                <p className='text-red-500 text-xl'>{error}</p>
            )}
        </div>
    )
}
