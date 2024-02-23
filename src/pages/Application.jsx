

import React from 'react'

import "./application.css"

const Application = () => {
  return (
    <div className="a-container a-body">
        <h1 align="center" className="a-gani"><b>APPLICATION FORM</b></h1>
        <form id="application-form">
        <div className="a-section secondary-border">
            <h2 className="a-sai" align="center">Personal Information</h2>
            <div className="a-input-group">
            <label for="name"><b>Full Name:</b></label>
            <input type="text" placeholder="Enter Name Here" id="name" required />
            </div>
            <div className="a-input-group">
            <label for="id"><b>ID:</b></label>
            <input type="text" placeholder="Enter ID" id="id" required />
            </div>
            <div className="a-input-group">
            <label for="gender"><b>Gender:</b></label>
            <input type="radio"  id="phone" name="gender" required /><b>Male</b>
            <input type="radio"  id="phone" name="gender" required /><b>Female</b>  
            </div>
            <div className="a-input-group">
            <label for="email"><b>Email:</b></label>
            <input type="email" placeholder="Enter Email" id="email" required />
            </div>
            <div className="a-input-group">
            <label for="phone"><b>Mobile Number:</b></label>
            <input type="number" placeholder="Enter Mobile Number" id="phone" min="6000000000" max="9999999999" required />
            </div>

            <div className="a-input-group">
            <label for="phone"><b>Aadhaar Number:</b></label>
            <input type="number" placeholder="Enter Aadhaar Number" id="phone" min="1000000000000000" max="9999999999999999" required />
            </div>
            <div className="a-input-group">
            <label for="birthday"><b>Date Of Birth:</b></label>
            <input type="date" placeholder="Enter Date of Birth" id="phone" required />
            </div>
        </div>
        
        <div className="a-section secondary-border">
            <h2 className="a-sai" align="a-center">Medical Details</h2>
            <div className="a-input-group">
            <label for="problem"><b>Problem:</b></label>
            <textarea id="date" placeholder="Enter Problem" required></textarea>
            </div>
            <div className="a-input-group">
            <label for="bills"><b>Hospital Bills:</b></label>
            <input type="file" id="bills" accept="document/*" required />
            </div>
            <div className="a-input-group">
            <label for="photo"><b>Photo of Patient:</b></label>
            <input type="file" id="photo" accept="image/*" required />
            </div>
            <div className="a-input-group">
            <label for="treatment"><b>Type of Treatment:</b></label>
            <input type="text" placeholder="Enter Type of Treatment" id="treatment" required />
            </div>
            <div className="a-input-group">
            <label for="cost"><b>Estimated Cost:</b></label>
            <input type="number" placeholder="Enter Estimated Cost" id="cost" min="1000" required />
            </div>
        </div>
        <div className="a-section secondary-border" >
            <h2 className="a-sai" align="center">Address Details</h2>
            <div className="a-input-group">
            <label for="treatment"><b>House Number:</b></label>
            <input type="text" placeholder="Enter House Number" id="income" min="1000" required />
            </div>
            <div className="a-input-group">
            <label for="treatment"><b>Village:</b></label>
            <input type="text" placeholder="Enter Village" id="income" min="1000" required />
            </div>
            <div className="a-input-group">
            <label for="treatment"><b>Mandal:</b></label>
            <input type="text" placeholder="Enter Mandal" id="income" min="1000" required />
            </div>
            <div className="a-input-group">
            <label for="treatment"><b>District:</b></label>
            <input type="text" placeholder="Enter District" id="income" min="1000" required />
            </div>
            <div className="a-input-group">
            <label for="treatment"><b>State:</b></label>
            <input type="text" placeholder="Enter State" required />
            </div>
        </div>
        <div className="a-section secondary-border" >
            <h2 className="a-sai" align="center">Family Information</h2>
            <div className="a-input-group">
            <label for="parents"><b>Father Name:</b></label>
            <textarea id="parents" placeholder="Enter Occupation Details" required></textarea>
            </div>
            <div className="a-input-group">
            <label for="parents"><b>Father/Guardian phone number:</b></label>
            <textarea id="parents" placeholder="Enter Occupation Details" required></textarea>
            </div>
            <div className="a-input-group">
            <label for="parents"><b>Parent's Occupation Details:</b></label>
            <textarea id="parents" placeholder="Enter Occupation Details" required></textarea>
            </div>
            <div className="a-input-group">
            <label for="income"><b>Source of Income:</b></label>
            <input type="number" placeholder="Enter Income" id="income" min="1000" required />
            </div>
            <div className="a-input-group">
            <label for="land"><b>Land Details:</b></label>
            <textarea id="land" placeholder="Enter Land Details" required></textarea>
            </div>
        </div>
        
        <button type="submit" className="a-btn-primary"><b>Submit Application</b></button>
        </form>
    </div>
  )
}

export default Application
