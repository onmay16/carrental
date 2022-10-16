import React, { useState } from 'react'

import Table from 'react-bootstrap/Table';

function PriceTable(props) {

  const [defaultPrice, setDefaultPrice] = useState(0)
  const [plusInsurancePrice, setplusInsurancePrice] = useState(0)

  function calculator(reservePrice, onSitePay, onSitePayInsurance, defaultPrice, defaultPriceInsurance, days, hours) {

  }

  return (
    <div>
      <hr />
      <br />
      <h4>
        {props.category}&nbsp;
        <small>{props.cars}</small>
      </h4>
      <h6>카페요금</h6>
      <Table bordered>
        <thead>
          <tr style={{ backgroundColor: '#F5F5F5' }}>
            <th colSpan={2}>기본요금</th>
            <th colSpan={2}>기본요금 + 추가보험(ZDC)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2}>${props.reservePrice*props.days+props.onSitePay*props.days}</td>
            <td colSpan={2}>${props.reservePrice*props.days+props.onSitePayInsurance*props.days}</td>
          </tr>
        </tbody>
        <thead>
          <tr style={{ backgroundColor: '#F5F5F5' }}>
            <th>예약금액</th>
            <th>현장지불</th>
            <th>예약금액</th>
            <th>현장지불</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${props.reservePrice*props.days}</td>
            <td>${props.onSitePay*props.days}</td>
            <td>${props.reservePrice*props.days}</td>
            <td>${props.onSitePayInsurance*props.days}</td>
          </tr>
        </tbody>
      </Table>
      <br />
    </div>
  )
}

export default PriceTable;