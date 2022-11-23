import React, { useState ,useEffect} from 'react'
import DataTable from 'react-data-table-component'
import axios from 'axios'

const Datatable = () => {
  const [Countries, setCountries] = useState()

  const getCountries = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v2/all')
      setCountries(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const columns = [
    { name: 'country name', selector: (row) => row.name },
    { name: 'country native name', selector: (row) => row.nativeName },
    { name: 'country Country capital', selector: (row) => row.capital },
    { name: 'country Country Flag', selector: (row) => <img width={50} height={50} src={row.flag} />},

   
  ]

  useEffect(() => {
    getCountries()
  }, [])

  return (
   <DataTable title="Country List" columns={columns} data={Countries}  pagination   />
  )
}

export default Datatable
