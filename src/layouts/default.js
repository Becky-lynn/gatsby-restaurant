import React from "react"
import MainNav from "../components/mainnav.js"
import 'bootstrap/dist/css/bootstrap.css';

export default function Default({children}) {
    return(
        <>
        <header>
        <div className="container header">
         <div className="row">
           <div className="col-sm-12">
 
               <div class="turkey animate__animated animate__tada">
                <img class="image d-none d-sm-block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ78SBDAaSJ5myapyRTgVOm_K7h-1j4g1P-Q&usqp=CAU" alt="overLay" />
               </div>
 
             <h1>Thanksgiving Family Feast</h1>
           </div>
          </div>
         </div>
         <div className="container-fluid">
          <div className="row">
           <div className="col-sm-12 topNav" role="navigation">
             <MainNav></MainNav>
           </div>
          </div>
         </div>
       </header>

      <div className="container">
       {children}       
      </div>

       <footer>
      <hr></hr>
        <div className="container footer">
            <div className="row">
                <div className="col-sm-2 copy">
                    <small>&copy; 2021</small>
                </div>
                <div className="col-sm-8 bottomNav">
                    <MainNav></MainNav>
                </div>
                <div className="col-sm-2 icon">
                    [social icon]
                </div>
            </div>
        </div>
      </footer>
   </>
    )
}