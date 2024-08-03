import React from 'react'
import Navbar from '../../components/Navbar'

const CategoriesPage = () => {
    return (
        <div>
            <Navbar />
            <h1>this is category</h1>

            <div className='register-Box' style={{
                width: "320px",
                height: "400px",
                backgroundColor: "#f2f2f2", // Set to light gray
                borderRadius: "30px",
                position: "absolute",
                top: "20%",
                right: "60px",
                padding: "30px",
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 25px 5px 25px' }}>
                    {/* Add content as needed */}
                </div>
                <div>
                    <div style={{ padding: '10px 5px' }}>
                        {/* Add content as needed */}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CategoriesPage
