import React from 'react';

export default function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', color: '#111827', fontFamily: 'Arial, sans-serif', padding: '16px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', border: '1px solid #e5e7eb', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>

        {/* Document Title */}
        <div style={{ textAlign: 'center', marginBottom: '24px', borderBottom: '2px solid #111827', paddingBottom: '16px' }}>
          <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px', color: '#6b7280', margin: '0 0 4px 0' }}>Government / Official Record</p>
          <h1 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0, color: '#111827', fontFamily: "monospace" }}>Project Detail Showcase</h1>
        </div>

        {/* Document Details Table */}
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
          <tbody>

            <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
              <th style={{ display: 'table-cell', textDecoration: 'underline', width: '140px', fontWeight: '600', color: '#374151', textAlign: 'left', padding: '10px 8px 10px 0', verticalAlign: 'top' }}>CA NO</th>
              <td style={{ display: 'table-cell', fontWeight: '600', color: '#111827', textAlign: 'left', padding: '10px 0 10px 8px', verticalAlign: 'top' }}>CEPZ-15/2025-2026</td>
            </tr>

            <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
              <th style={{ display: 'table-cell', textDecoration: 'underline', width: '140px', fontWeight: '600', color: '#374151', textAlign: 'left', padding: '10px 8px 10px 0', verticalAlign: 'top' }}>Name of work</th>
              <td style={{ display: 'table-cell', fontWeight: '600', color: '#111827', textAlign: 'left', padding: '10px 0 10px 8px', verticalAlign: 'top' }}>Provision of Sewage Treatment Plant (STP) 75 KLD (MBR Based) at Samba</td>
            </tr>

            <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
              <th style={{ display: 'table-cell', textDecoration: 'underline', width: '140px', fontWeight: '600', color: '#374151', textAlign: 'left', padding: '10px 8px 10px 0', verticalAlign: 'top' }}>Contractor</th>
              <td style={{ display: 'table-cell', fontWeight: '600', color: '#111827', textAlign: 'left', padding: '10px 0 10px 8px', verticalAlign: 'top' }}>M/s RL PAREEK</td>
            </tr>

            <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
              <th style={{ display: 'table-cell', width: '140px', textDecoration: 'underline', fontWeight: '600', color: '#374151', textAlign: 'left', padding: '10px 8px 10px 0', verticalAlign: 'top' }}>Consultants</th>
              <td style={{ display: 'table-cell', fontWeight: '600', color: '#111827', textAlign: 'left', padding: '10px 0 10px 8px', verticalAlign: 'top' }}>M/s PEE Consultants</td>
            </tr>

            <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
              <th style={{ display: 'table-cell', width: '140px', textDecoration: 'underline', fontWeight: '600', color: '#374151', textAlign: 'left', padding: '10px 8px 10px 0', verticalAlign: 'top' }}>Executing agency</th>
              <td style={{ display: 'table-cell', color: '#111827', textAlign: 'left', padding: '10px 0 10px 8px', verticalAlign: 'top' }}>
                <div style={{ marginBottom: '10px' }}>Military Engineer Services</div>

                <div style={{ marginBottom: '12px' }}>
                  <div style={{ fontWeight: '600', marginBottom: '2px' }}>1) Sh Rajneesh Chandra, IDSE</div>
                  <div style={{ fontWeight: '600', fontSize: '12px', color: '#4b5563' }}>&emsp; Chief Engineer</div>
                  <div style={{ fontWeight: '600', fontSize: '12px', color: '#4b5563' }}>&emsp; HQ CE Pathankot Zone</div>
                </div>

                <div style={{ marginBottom: '12px' }}>
                  <div style={{ fontWeight: '600', marginBottom: '2px' }}>2) Sh Ajay Kumar Mishra, IDSE</div>
                  <div style={{ fontWeight: '600', fontSize: '12px', color: '#4b5563' }}>&emsp; SE (SAG)</div>
                  <div style={{ fontWeight: '600', fontSize: '12px', color: '#4b5563' }}>&emsp; HQ CWE Mamun</div>
                </div>

                <div style={{ marginBottom: '12px' }}>
                  <div style={{ fontWeight: '600', marginBottom: '2px' }}>3) Sh Rajeev Kumar</div>
                  <div style={{ fontWeight: '600', fontSize: '12px', color: '#4b5563' }}>&emsp; EE</div>
                  <div style={{ fontWeight: '600', fontSize: '12px', color: '#4b5563' }}>&emsp; GE Samba</div>
                </div>

                <div>
                  <div style={{ fontWeight: '600', marginBottom: '2px' }}>4) Sh Sarvesh Kumar Saini</div>
                  <div style={{ fontWeight: '600', fontSize: '12px', color: '#4b5563' }}>&emsp; AE (E/M)</div>
                  <div style={{ fontWeight: '600', fontSize: '12px', color: '#4b5563' }}>&emsp; AGE (E/M) Samba</div>
                  <br />
                  <div style={{ fontWeight: '600', marginBottom: '2px' }}>5) Sh Chandrakant R Shionkar</div>
                  <div style={{ fontWeight: '600', fontSize: '12px', color: '#4b5563' }}>&emsp; AE (Civ)</div>
                  <div style={{ fontWeight: '600', fontSize: '12px', color: '#4b5563' }}>&emsp; AGE (B/R) Samba</div>
                </div>
              </td>
            </tr>

            <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
              <th style={{ display: 'table-cell', width: '140px', textDecoration: 'underline', fontWeight: '600', color: '#374151', textAlign: 'left', padding: '10px 8px 10px 0', verticalAlign: 'top' }}>Date of completion</th>
              <td style={{ display: 'table-cell', fontWeight: '600', color: '#111827', textAlign: 'left', padding: '10px 0 10px 8px', verticalAlign: 'top' }}>08/09/2026</td>
            </tr>

            <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
              <th style={{ display: 'table-cell', width: '140px', textDecoration: 'underline', fontWeight: '600', color: '#374151', textAlign: 'left', padding: '10px 8px 10px 0', verticalAlign: 'top' }}>Defect liability period</th>
              <td style={{ display: 'table-cell', fontWeight: '600', color: '#111827', textAlign: 'left', padding: '10px 0 10px 8px', verticalAlign: 'top' }}>09/09/2028</td>
            </tr>

            <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
              <th style={{ display: 'table-cell', width: '140px', textDecoration: 'underline', fontWeight: '600', color: '#374151', textAlign: 'left', padding: '10px 8px 10px 0', verticalAlign: 'top' }}>Comprehensive Maintenance</th>
              <td style={{ display: 'table-cell', fontWeight: '600', color: '#111827', textAlign: 'left', padding: '10px 0 10px 8px', verticalAlign: 'top' }}>09/09/2031</td>
            </tr>

            <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
              <th style={{ display: 'table-cell', width: '140px', textDecoration: 'underline', fontWeight: '600', color: '#374151', textAlign: 'left', padding: '10px 8px 10px 0', verticalAlign: 'top' }}>
                Project cost
                <br /><span style={{ fontWeight: "400", fontSize: '12px' }}>(Including Operation and Maintenance)</span>
              </th>
              <td style={{ display: 'table-cell', color: '#111827', textAlign: 'left', padding: '10px 0 10px 8px', verticalAlign: 'top' }}>
                <div style={{ fontWeight: '600', marginBottom: '4px' }}>Rs 3,27,58,700.00</div>
                <div style={{ fontWeight: '600', fontSize: '12px', color: '#4b5563' }}>(Rupees three crore twenty seven lakhs fifty eight thousand seven hundred only)</div>
              </td>
            </tr>

          </tbody>
        </table>

        {/* Footer */}
        <div style={{ marginTop: '30px', borderTop: '1px solid #e5e7eb', paddingTop: '16px', textAlign: 'center', fontSize: '11px', color: '#9ca3af' }}>
          <p style={{ margin: '0 0 4px 0' }}>Military Engineer Services (MES) • Project Showcase Document</p>
          <p style={{ margin: 0 }}>Contract Agreement No: CEPZ-15/2025-2026</p>
        </div>

      </div>
    </div>
  );
}