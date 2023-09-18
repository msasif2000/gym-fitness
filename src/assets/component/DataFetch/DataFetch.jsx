import axios from "axios";
import { useEffect, useState } from "react";


const DataFetch = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(data => setData(data.data))
    }, [])
    return (
        <div>
            <h2 className="text-2xl font-bold text-center">Data Length : {data.length}</h2>
        </div>
    );
};

export default DataFetch;