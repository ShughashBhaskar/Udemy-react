function Navbar(){
    return(
      <>
        <div class="navbar">
        <div class="navbar__sec1">
            <h1 class="navbar__sec1__title">Udemy</h1>
  
        </div>
        <div class="navbar__sec2">
            <i class="fa-solid fa-magnifying-glass" style={{color: "#000000"}}></i>
            <input placeholder="Search for anything here. Tech, Buisness, Art ..."></input>
        </div>
        <div class="navbar__sec3">
            <p>Courses</p>
            <div class="mylearning">
                <p>My Learning</p>
                <div class="mylearning__popup">
                    <p>No Course Available</p>
                </div>
            </div>
            <i class="fa-solid fa-cart-shopping" style={{color: "#000000"}}></i>
            <i class="fa-solid fa-bell" style={{color: "#000000"}}></i>
            <i class="fa-solid fa-user" style={{color: "#000000"}}></i>
        </div>
        <div class="navbar__sec4">
            <i class="fa-solid fa-bars" style={{color: "#050505"}}></i>
        </div>
  
  
    </div>
    </>
    )
}

export default Navbar;