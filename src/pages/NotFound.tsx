import { NavLink } from "react-router-dom"

function NotFound() {
  return (
    <div className="w-full h-screen mt-28 flex items-center flex-col">
      <p className="text-4xl font-bold">404 Page NOt Found!</p>
      <p className="block text-2xl">
        Go to
      <NavLink className={'text-secondaryOrange font-semibold px-1'} to={'/'}>
        Sign-in
      </NavLink>
      </p>
    </div>
  )
}

export default NotFound
