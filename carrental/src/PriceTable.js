import Table from 'react-bootstrap/Table';

function PriceTable(props) {
  
  return (
    <div>
      <hr />
      <br />
      <h3 style={{ textAlign:'left', fontWeight:500 }}>
        {props.category}
      </h3>
      <br />
      <h6>카페요금</h6>
      <Table bordered style={{ fontSize: '13px' }}>
        <thead>
          <tr style={{ backgroundColor: '#F5F5F5' }}>
            <th colSpan={2}>기본요금</th>
            <th colSpan={2}>기본요금 + 추가보험(ZDC)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2}>${props.hours > 0 ? (props.reservePrice*props.days+props.onSitePay*(props.days+1)).toFixed(1):(props.reservePrice*props.days+props.onSitePay*props.days).toFixed(1)}</td>
            <td colSpan={2}>${props.hours > 0 ? ((props.reservePrice+props.onSitePayInsurance)*(props.days+1)):((props.reservePrice+props.onSitePayInsurance)*(props.days))}</td>
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
            <td id='price1'>${props.hours > 0 ? (props.reservePrice*(props.days+1)).toFixed(1):(props.reservePrice*props.days).toFixed(1)}</td>
            <td id='price2'>${props.hours > 0 ? (props.onSitePay*(props.days+1)).toFixed(1):(props.onSitePay*(props.days)).toFixed(1)}</td>
            <td id='insurance-price1'>${props.hours > 0 ? (props.reservePrice*(props.days+1)).toFixed(1):(props.reservePrice*props.days).toFixed(1)}</td>
            <td id='insurance-price2'>${props.hours > 0 ? (props.onSitePayInsurance*(props.days+1)).toFixed(1):(props.onSitePayInsurance*(props.days)).toFixed(1)}</td>
          </tr>
        </tbody>
      </Table>
      <br />
    </div>
  )
}

export default PriceTable;