import { useEffect } from 'react'
import Login12 from '../../../conponent/Login/Login'
import { useAppSelector } from '../../../app/hook'
import { useNavigate } from 'react-router-dom'
type Props = {}

const Login = (props: Props) => {
  const data = useAppSelector((state) => state.user)
  const navigate = useNavigate()
  useEffect(() => {
    if (data.isLogin) {
      navigate("/")
    }
  }, [data.isLogin])
  return (
    <div>
      <div>
        <Login12 />
      </div>
    </div>
  )
}

export default Login