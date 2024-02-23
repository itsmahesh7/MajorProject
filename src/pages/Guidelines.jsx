
import React, { Fragment } from 'react'
import './guidelines.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Guidelines = () => {
  return (
    <Fragment>
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid">
           
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
             
            <form className="d-flex justify-content-center">
              <button className="m-3" type="button" data-bs-toggle="modal" data-bs-target="#loginModal">Student Co-ordinators</button>
              <button className="m-3" type="button" data-bs-toggle="modal" data-bs-target="#signinModal">Core Team Members</button>
              <button className="m-3" type="button" data-bs-toggle="modal" data-bs-target="#addModal">Branch Representatives</button>
              <button className="m-3" type="button" data-bs-toggle="modal" data-bs-target="#add2Modal">Volunteers</button>
            </form>
            </div>
          </div>
        </nav>
    
    
       
        <div className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="loginModalLabel">Recruitment Process</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form className="form1">
                    <div className="container">
                        
                        <ul>
                            <li> He/she is elected by the core team considering majority.</li>
                            <li> After formation of the core team, the nominees are selected by 
                                E-4 core team members.</li><br/>
                            <li> After the selection procedure, nominees will express their views 
                                or roles towards the development of Hope House.</li><br/>
                            <li>Later on elections would be conducted by E-4.</li>
                            <li> Polling would be conducted in the presence of all core team 
                                members.</li>
                            <li> Voting process is very confidential and every persons vote is 
                                mandatory.</li>
                            <li> Core team members from E-1,E-2,E-3 and E-4 will act as voters</li>
                            <li> Results will be released by E-4 members.</li>
                        
                        </ul>
                
                    </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <a className="btn btn-primary" href="/recruite.html">Apply</a>
              </div>
            </div>
          </div>
        </div>
    
      
        <div className="modal fade" id="signinModal" tabindex="-1" aria-labelledby="signinModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="signinModalLabel">Recruitment Process</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form className="form1">
                    <div className="container">cls
                        
                        <ul>
                            <li> Initially the existing core team should post a notice in the hub 
                                regarding fresh recruitment of core team.</li>
                            <li>  Interested candidates should fill the Google form and then 
                                followed by interview.</li>
                            <li>He/she is selected based on the minimum experience of one year 
                                as volunteer.</li>
                            <li> Recruitment process is done by previous core team members 
                                under the guidance of advisory committee.</li>
                            <li>  Candidates are recruited panel wise.</li>
                            <li> Required panel strength should be fulfilled.</li>
                            <li>  In case of Non-fulfillment, another phase of interviews should be conducted</li>
                        
                        </ul>
                
                    </div>
                </form>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <a className="btn btn-primary" href="/recruite.html">Apply</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="addModalLabel">Recruitment Process</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form className="form1">
                    <div className="container">
                        
                        <ul>
                            <li>  After completion of Hope House core team interviews, the 
                              candidates who are not selected as core team, can be considered 
                              as branch representatives, if they are interested.</li>
                            <li>  If not, fresh recruitment through interviews would be initiated by 
                              previous core team members.</li>
                            <li> Volunteers of PUC-2 will attend the interview to be a core team 
                              member and can also apply for branch representative.</li>
                            <li> During recruitment process , Hope House experience should be considered.</li>
                        </ul>
                
                    </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <a className="btn btn-primary" href="/recruite.html">Apply</a>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="add2Modal" tabindex="-1" aria-labelledby="add2ModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="add2ModalLabel">Recruitment Process</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form className="form1">
                    <div className="container">
                        
                        <ul>
                            <li> These volunteers are from PUC-1 and PUC-2.</li>
                            <li>  They are recruited through interviews by existing core team 
                              members simultaneously.</li>
                            <li> There would be a fresh recruitment process for PUC-1.</li>
                            <li> PUC- 2 volunteers will not be dissolved. If there is a vacancy , 
                              interested candidates would be recruited through interviews 
                              every year freshly.</li>
                          
                        </ul>
                
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <a className="btn btn-primary" href="#">Apply</a>
                </div>
              </div>
            </div>
          </div>
    </Fragment>    
  )
}

export default Guidelines;
