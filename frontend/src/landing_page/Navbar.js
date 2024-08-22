// import React from "react";

// function Navbar() {
//   return (
//     <nav
//       class="navbar navbar-expand-lg border-bottom"
//       style={{ backgroundColor: "#FFF" }}
//     >
//       <div class="container p-2">
//         <a class="navbar-brand" href="#">
//           <img
//             src="media/images/logo.svg"
//             style={{ width: "25%" }}
//             alt="Logo"
//           />
//         </a>
//         <button
//           class="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//           <form class="d-flex" role="search">
//             <ul class="navbar-nav mb-lg-0">
//               <li class="nav-item">
//                 <a class="nav-link active" aria-current="page" href="#">
//                   Signup
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link active" href="#">
//                   About
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link active" href="#">
//                   Product
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link active" href="#">
//                   Pricing
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link active" href="#">
//                   Support
//                 </a>
//               </li>
//             </ul>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



import React from "react";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <a className="navbar-brand" href="#">
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Signup
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Support
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="http://localhost:3000">
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
