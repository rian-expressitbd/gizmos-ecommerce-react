import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import {
  logout,
  selectCurrentToken,
  TUser
} from '../lib/features/auth/authSlice'
import { useAppDispatch, useAppSelector } from '../lib/hooks'
import { verifyToken } from '../utils/verifyToken'

type TProtectedRoute = { children: ReactNode; role: string | undefined }

const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
  // const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch()
  const token = useAppSelector(selectCurrentToken)

  let user
  if (token) {
    user = verifyToken(token)
  }

  if (role !== undefined && role !== (user as unknown as TUser)?.role) {
    dispatch(logout())
    return <Navigate to={'/login'} replace={true} />
  }

  if (!token) {
    return <Navigate to={'/login'} replace={true} />
  }
  return children
}

export default ProtectedRoute
