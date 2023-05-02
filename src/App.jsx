import { Route, Routes } from "react-router-dom"

import BasketCardPage from "./pages/BasketCardPage"
import EnterUserInfo from "./pages/EnterUserInfo"
import HomeCartPage from "./pages/HomeCartPage"
import HomeShopPage from "./pages/HomeShopPage"
import LoginPage from "./pages/LoginPage"
import ProductsPage from "./pages/ProductsPage"
import ProfilePage from "./pages/ProfilePage"
import EditProfilePage from "./pages/EditProfilePage"
import CreateBasketCardPage from "./pages/CreateBasketCardPage"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/enteruserinfo" element={<EnterUserInfo />} />
        <Route path="/home/cart" element={<HomeCartPage />} >
          <Route path="home" element={<HomeShopPage />} />
          <Route path="basketcard" element={<BasketCardPage />} />
          <Route path="createbasketcard" element={<CreateBasketCardPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="editprofile" element={<EditProfilePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App