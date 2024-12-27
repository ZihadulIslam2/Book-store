import axios from 'axios'
import  { useEffect, useState } from 'react'
import getBaseUrl from '../../utils/baseUrl'
import Loading from '../../components/Loading'

const DashboardLayout = () => {
    const [ loading, setLoading ] = useState(true)
    const [data, setData] = useState({})

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response = await axios.get(`${getBaseUrl()}/api/admin`,{
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                })

                setData( response.data);
                setLoading (false)

            } catch (error) {
                console.error(error)
                setLoading(false)
            }
        }
        fetchData()
    }, [] )

    if(loading) return <Loading/>
  return (
    <div>DashboardLayout</div>
  )
}

export default DashboardLayout