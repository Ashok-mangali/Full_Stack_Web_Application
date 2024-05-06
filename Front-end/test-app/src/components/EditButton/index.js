import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Edit() {

    const [data, setData] = useState([]);

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/api/data'); // My  backend API endpoint is '/api/data'
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };


        fetchData();
    }, []);


  return (
    <div className='App'>
        <form>
            <input typeof='text' placeholder='Enter UserName' />
            <button>Edit</button>
        </form>
        <li style={{ display: 'inline-block', marginRight: '10px', padding: "20px", justifyContent: 'space-between' }}> <h4 style={{ color: 'red' }}>Age</h4> {data.map((item) => (
                        <h3 key={item._id}>
                            {item.Age}

                        </h3>

                    ))}</li>
        

    </div>
  
  );
}

export default Edit;
