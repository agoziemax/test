import React from 'react';
import './dashtable.css'

function DashTable({headers, rows}) {


  return (
    <div className='table-container table-responsive-md '>
      <table className='table bg-white rounded-2 '>
        <thead className=''>
          <tr>
            {headers.map((header) => (
              <th key={header.key} className=' pt-3'>
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            return (
              <tr key={i}>
                <td>
                  <img src={row.agentImage} alt='' className='pe-2' />
                  <span>{row.agent}</span>
                </td>
                <td style={{ paddingTop: '15px' }}>
                  <span className={row.status === 'Enabled' ? 'enabled' : 'disabled'} onClick={{}}>
                    {row.status}
                  </span>
                </td>
                <td style={{ paddingTop: '15px' }} className='px-2 pe-3'>
                  {row.shsCompany}
                </td>
                <td style={{ paddingTop: '15px' }} className=''>
                  {row.numUsers}
                </td>
                <td style={{ paddingTop: '15px', color: row.totalAmountColor }}>{row.totalAmount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DashTable;
