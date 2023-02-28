import './CommissionTable.css'
import {GoChevronDown} from 'react-icons/go'
import CommissionData from '../../CommissionData'
import TableRows from '../TableRows.jsx/TableRows'

export default function CommissionTable(){
      console.log(CommissionData.map(data => data.dateCreated))
    return(
        <table className="mt-3">
        <thead>
          <tr>
            <th scope="col"><button className='table-btn'><input type='checkbox' className='commission-checkbo'></input><GoChevronDown className='mx-1 chevron-down'/>Commission</button></th>
            <th scope="col"><button className='table-btn'><GoChevronDown className='me-1 chevron-down'/>Total Cost</button></th>
            <th scope="col"><button className='table-btn'><GoChevronDown className='me-1 chevron-down'/>Country Code</button></th>
            <th scope="col"><button className='table-btn'><GoChevronDown className='me-1 chevron-down'/>Created</button></th>
            <th scope="col"><button className='table-btn'><GoChevronDown className='me-1 chevron-down'/>Satus</button></th>
            <th scope="col"><button className='table-btn'><GoChevronDown className='me-1 chevron-down'/>Referrer</button></th>
            <th scope="col"><button className='table-btn'><GoChevronDown className='me-1 chevron-down'/>Extra Data 4</button></th>
            <th scope="col"><button className='table-btn'><GoChevronDown className='me-1 chevron-down'/>Actions</button></th>
          </tr>
        </thead>
        <tbody>{
              CommissionData.map(data =>{
                return(
                  <TableRows price={data.commissionPrice} approved={data.approved} countryCode={data.countryCode} dateCreated={data.dateCreated} referrer={data.referrer} totalCost={data.totalCost} extraData={data.extraData}/>
                )
              })
          }
        </tbody>
      </table>
    )
}