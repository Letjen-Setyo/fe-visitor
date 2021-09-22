import React,{ Fragment, useState,useEffect   } from "react";

import CheckoutVisitor from "./CheckoutVisitor";

const ListVisitor = () => {

    const [visitors,setVisitors] = useState([]);

    //delete 

    const deleteVisitor = async id => {
        try {
            
            const deleteVisitor = await fetch(`https://powerful-crag-17451.herokuapp.com/visitor/${id}`,
            {
                method : "DELETE"
            });
            
            setVisitors(visitors.filter( visitor => visitor.id !== id ));  
            // console.log(deleteVisitor);

            // window.location ="/";
        } catch (err) {
            console.error(err.message);
        }
    }

    const getVisitor = async() => {
        try {
            
            const response =  await  fetch("https://powerful-crag-17451.herokuapp.com/visitor/get-all");
            const jsonData = await response.json();
            
            setVisitors(jsonData);
          
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(()=> {
        getVisitor();
    },[]);


    return <Fragment>
        {" "}
         <table class="table mt-5 text-center">
            <thead>
            <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Address</th>
                <th>ID Card Number</th>
                <th>Visitor Card Number</th>
                <th>Phone</th>
                <th>Memo</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Update</th>
                <th>View</th>
            </tr>
            </thead>
            <tbody>

            {visitors.map(visitor => (
                <tr key={visitor.id}> 
                    <td>
                        {visitor.name}
                    </td>
                    <td>
                        {visitor.company}
                    </td>
                    <td>
                        {visitor.address}
                    </td>
                    <td>
                        {visitor.idcard_number}
                    </td>
                    <td>
                        {visitor.viscard_number}
                    </td>
                    <td>
                        {visitor.phone}
                    </td>
                    <td>
                        {visitor.message}
                    </td>
                    <td>
                        {visitor.check_in}
                    </td>
                    <td>
                        {visitor.check_out}
                    </td>
                    <td>
                        <CheckoutVisitor visitor ={visitor}/>
                      {/* <button className="btn btn-success">Update</button> */}
                    </td>
                    <td>
                      <button className="btn btn-danger" onClick={() => deleteVisitor(visitor.id) }>Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </Fragment>
};


export default ListVisitor; 