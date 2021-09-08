import React,{ Fragment, useState   } from "react";

const InputVisitor = () => {

    const [name,setName] = useState("");
    const [company,setCompany] = useState("");
    const [address, setAddress] = useState("");
    const [idcard_number, setIdcard_number] = useState("");
    const [viscard_number, setViscard_number] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] =  useState("");

    const check_in = new Date();
    const check_out = null;
    const created_by = "cs";
    const modified_by = "cs";
    const onSubmitForm =  async (e) =>{
        e.preventDefault();
        try {
            const body = { name, company, address, idcard_number,viscard_number, phone, message,check_in, check_out ,created_by,modified_by};
            const response = await fetch("http://localhost:5000/visitor",{
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(body)
            }); 

            console.log(response);
           
            window.location ="/";
        } catch (err) {
            console.error(err.message)
        }
    }

    return <Fragment>
        <h1 className="text-center mt-5">Visitor Registration List</h1> 
        <form className="box-body mt-5" onSubmit={onSubmitForm }>
            <div className="row">
                <div className="form-group col-md-2">
                    <label> Visitor Name *</label>
                </div>
                <div className="form-group col-md-10">
                    <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)}/>
                </div>
            </div>

            <div className="row">
                <div className="form-group col-md-2">
                    <label> Visitor Company *</label>
                </div>
                <div className="form-group col-md-10">
                    <input type="text" className="form-control" value={company} onChange={e => setCompany(e.target.value)}/>
                </div>
            </div>

            <div className="row">
                <div className="form-group col-md-2">
                    <label> Visitor Address  </label>
                </div>
                <div className="form-group col-md-10">
                    <input type="text" className="form-control" value={address} onChange={e => setAddress(e.target.value)}/>
                </div>
            </div>

            <div className="row">
                <div className="form-group col-md-2">
                    <label> Visitor ID Card Number *</label>
                </div>
                <div className="form-group col-md-10">
                    <input type="text" className="form-control" value={idcard_number} onChange={e => setIdcard_number(e.target.value)}/>
                </div>
            </div>

            <div className="row">
                <div className="form-group col-md-2">
                    <label> Visitor Card Number *</label>
                </div>
                <div className="form-group col-md-10">
                     <input type="text" className="form-control" value={viscard_number} onChange={e => setViscard_number(e.target.value)}/>
                </div>
            </div>

            <div className="row">
                <div className="form-group col-md-2">
                    <label> Visitor Phone Number </label>
                </div>
                <div className="form-group col-md-10">
                    <input type="text" className="form-control" value={phone} onChange={e => setPhone(e.target.value)}/>
                </div>
            </div>


            <div className="row">
                <div className="form-group col-md-2">
                    <label> Visitor Memo </label>
                </div>
                <div className="form-group col-md-10">
                    <textarea type="text" className="form-control" value={message} onChange={e => setMessage(e.target.value)}> </textarea>
                </div>
            </div>


            <div className="row">
                <div className="form-group col-md-12">
                <div class="btn-group">
                <button className="btn btn-success">Add</button>
                </div>
                </div>
            </div>
            
            
            
            
            
           
        </form>
    
    </Fragment>
}

export default InputVisitor; 