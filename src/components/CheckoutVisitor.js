import React,{ Fragment, useState,useEffect   } from "react";

const CheckoutVisitor  = ({visitor}) => {
    
        const [check_out , setCheckOut] = useState(visitor.check_out); 
        const [id , setId] = useState(visitor.id); 

        const setupCheckOut = async e => {
            e.preventDefault();
            const check_out = new Date();
            const modified_by = 'cs';

            try {
                const body = { check_out,modified_by};
                const response = await fetch(`https://powerful-crag-17451.herokuapp.com/visitor/checkout/${visitor.id}`,{
                    method : "PUT",
                    headers : {"Content-Type" : "application/json"},
                    body : JSON.stringify(body) 

                });

                console.log(response);
           
                window.location ="/";
                 
            } catch (error) {
                
            }
        };

    return <Fragment>
        
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${visitor.id}`}>
            Out
            </button>

         
            <div class="modal" id={`id${visitor.id}`}>
            <div class="modal-dialog">
                <div class="modal-content">

              
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

               
                <div class="modal-body">
                <h4> Are You Sure Want Checked Out This Visitor ?</h4>
                </div>

               
                <div class="modal-footer">
                    <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={e=> 
                    setupCheckOut(e)}>
                        Yes</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>

                </div>
            </div>
            </div>
    </Fragment>
};

export default CheckoutVisitor;
