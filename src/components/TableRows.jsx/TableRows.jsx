import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Fill} from "react-icons/ri";
import './TablesRows.css'
export default function TableRows(props) {
  return (
    <>
      <tr className="table-font">
        <td data-label="Commission" className="commission-title-td">
          <input type="checkbox" className="commission-checkbox" name="commission-check"></input>
          <MdModeEdit className="mx-1 edit-icon mb-2"/>
          ${props.price}
        </td>
        <td data-label="Total Cost">${props.totalCost}</td>
        <td data-label="Country Code">{props.countryCode}</td>
        <td data-label="Created">{props.dateCreated}</td>
        <td data-label="Status">
          <MdModeEdit className="me-1 edit-icon"/>
          <span
            className={
              props.approved
                ? "badge rounded-pill text-bg-success"
                : "badge rounded-pill text-bg-primary"
            }
          >
            {props.approved ? "approved" : "pending"}
          </span>
        </td>
        <td className="referrer" data-label="Referrer">{props.referrer}</td>
        <td data-label="Extra Data 4">{props.extraData}</td>
        <td data-label="Actions">
          <button className="edit-btn-2"><MdModeEdit/></button>
          <button className="bin-btn"><RiDeleteBin6Fill/></button>
        </td>
      </tr>
    </>
  );
}
