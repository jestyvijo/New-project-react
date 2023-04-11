import React,{useState} from "react";
export default function AddProduct() {
    const[value,setValue]=useState("")
   const changeHandle=(e)=>{
    const name=e.target.name
    const value=e.target.value
        setValue((values) => ({ ...values, [name]: value }))
    }

    const handler=(e)=>{
        e.preventDefault()
     

    }
  return (
    <div>
        <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-5">
                <form>
                <div class="form-group">
                <label for="exampleInputEmail1" className="fs-4 fst-italic">Product Name</label>
                <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Product name" 
                    name="pname"
                    onChange={(e)=>changeHandle(e)}
                    value={value.pname}
                />
                </div>
                <div class="form-group">
                <label for="exampleInputPassword1" className="fs-4 fst-italic">Product Price</label>
                <input
                    type="number"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Price"
                    name="pprice"
                    onChange={(e)=>changeHandle(e)}
                    value={value.price}
                />
                </div>
                <div class="form-group">
                <label for="exampleInputPassword1" className="fs-4 fst-italic">Product Description</label>
                <textarea
                    class="form-control"
                    placeholder="Enter Product Description"
                    name="pdetails"
                    onChange={(e)=>changeHandle(e)}
                    value={value.pdetails}
                >
                </textarea>
                </div><br/>
                <button type="submit" class="btn btn-success" onClick={(e)=>handler(e)}>
                Add Product
                </button>
            </form>
        </div>
        <div className="col-md-6">
             <table class="table table-bordered">
    <thead>
      <tr >
        <th>Product Name</th>
        <th>Product Price</th>
        <th>Product Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{value.pname}</td>
        <td>{value.pprice}</td>
        <td>{value.pdetails}</td>
      </tr>
    </tbody>
  </table>
        </div>
        </div>
        
    </div>
  );
}
