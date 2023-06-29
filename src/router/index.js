import { Suspense } from 'react'
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  useParams,
  useSearchParams,
} from 'react-router-dom'
import routes from './routes'
import { Mask, DotLoading } from 'antd-mobile'

const Element = (props) => {
  let { component: Component, meta } = props
  let { title = 'React News' } = meta
  document.title = title

  const navigate = useNavigate(),
    location = useLocation(),
    params = useParams(),
    [usp] = useSearchParams()

  return (
    <Component
      navigate={navigate}
      location={location}
      params={params}
      usp={usp}
    />
  )
}

export default function RouteView() {
  return (
    <Suspense
      fallback={
        <Mask visible={true}>
          <DotLoading color="white" />
        </Mask>
      }
    >
      <Routes>
        {routes.map((item) => {
          let { name, path } = item
          return (
            <Route key={name} path={path} element={<Element {...item} />} />
          )
        })}
      </Routes>
    </Suspense>
  )
}
