import UserProfile from "./UserProfile"
import UserNavbar from "./UserNavbar"
import Footer from "./Footer"
function AfterLogin() {
  return (
    <div>
<UserNavbar />
<UserProfile />
<Footer />

    </div>
  )
}

export default AfterLogin