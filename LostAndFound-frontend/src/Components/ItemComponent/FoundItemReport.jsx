import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { FaClipboardList } from "react-icons/fa";
import "../../lost-item-report.css";
import { getAllFoundItems } from '../../Services/foundItemService';

const FoundItemReport = () => {
    let navigate = useNavigate();
    const [itemList, setItemList] = useState([]);
  const [error, setError] = useState(null);
    const showAllfoundItems = () => {
        getAllFoundItems().then((response) => {
            setItemList(response.data);
        })
      .catch((err) => {
        setError("Failed to fetch lost items. Please try again later.");
        console.error(err);
      });
    }
    useEffect(() => {
        showAllfoundItems();
    }, []);

    const returnBack = () => {
        navigate('/AdminMenu');
    }
    return (
    <div className="form-page">
      <div className="form-card">
        <div className="icon-circle">
          <FaClipboardList size={35} />
        </div>

        <h2 className="text-center">Found Item List</h2>
        <p className="tagline">Campus Lost & Found Report</p>

        {error && <p className="error-text">{error}</p>}

        <div className="table-wrapper">
          <table className="table table-striped table-bordered custom-table">
            <thead>
              <tr>
                <th>Item Id</th>
                <th>Item Name</th>
                <th>Category</th>
                <th>Color</th>
                <th>Brand</th>
                <th>Location</th>
                <th>Found Date</th>
                <th>User Id</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {itemList.map((item) => (
                <tr key={item.founditemId}>
                  <td>{item.founditemId}</td>
                  <td>{item.itemName}</td>
                  <td>{item.category}</td>
                  <td>{item.color}</td>
                  <td>{item.brand}</td>
                  <td>{item.location}</td>
                  <td>{item.foundDate}</td>
                  <td>{item.username}</td>
                  <td>{item.userEmail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="form-actions">
          <button className="btn back-btn" onClick={returnBack}>
            ⬅ Back
          </button>
        </div>
      </div>
    </div>

    );

}

export default FoundItemReport;