import React, { useState, useEffect } from 'react';

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', color: '#111827', fontFamily: 'Arial, sans-serif', padding: isMobile ? '16px' : '40px 20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', border: isMobile ? 'none' : '1px solid #e5e7eb', padding: isMobile ? '16px' : '40px', borderRadius: '8px', boxShadow: isMobile ? 'none' : '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
        
        {/* Document Title */}
        <div style={{ textAlign: 'center', marginBottom: '30px', borderBottom: '2px solid #111827', paddingBottom: '20px' }}>
          <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: '#6b7280', margin: '0 0 6px 0' }}>Government / Official Record</p>
          <h1 style={{ fontSize: isMobile ? '20px' : '24px', fontWeight: 'bold', margin: 0, color: '#111827', fontFamily: "monospace" }}>Project Detail Showcase</h1>
        </div>

        {/* Document Details Table */}
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
          <tbody>
            
            <tr style={{ display: isMobile ? 'block' : 'table-row', borderBottom: '1px solid #f3f4f6', paddingBottom: isMobile ? '12px' : '0' }}>
              <th style={{ display: isMobile ? 'block' : 'table-cell', width: isMobile ? '100%' : '240px', fontWeight: '600', color: '#374151', textAlign: 'left', paddingBottom: '12px', verticalAlign: 'top', marginBottom: isMobile ? '4px' : '0' }}>CA NO</th>
              <td style={{ fontWeight: '600',display: isMobile ? 'block' : 'table-cell', color: '#111827', textAlign: 'left', paddingBottom: '12px', verticalAlign: 'top' }}>CEPZ-15/2025-2026</td>
            </tr>

            <tr style={{ display: isMobile ? 'block' : 'table-row', borderBottom: '1px solid #f3f4f6', paddingBottom: isMobile ? '12px' : '0' }}>
              <th style={{ display: isMobile ? 'block' : 'table-cell', width: isMobile ? '100%' : '240px', fontWeight: '600', color: '#374151', textAlign: 'left', paddingBottom: '12px', verticalAlign: 'top', marginBottom: isMobile ? '4px' : '0' }}>Name of work</th>
              <td style={{fontWeight: '600', display: isMobile ? 'block' : 'table-cell', color: '#111827', textAlign: 'left', paddingBottom: '12px', verticalAlign: 'top' }}>Provision of Sewage Treatment Plant (STP) 75 KLD (MBR Based) at Samba</td>
            </tr>

            <tr style={{ display: isMobile ? 'block' : 'table-row', borderBottom: '1px solid #f3f4f6', paddingBottom: isMobile ? '12px' : '0' }}>
              <th style={{ display: isMobile ? 'block' : 'table-cell', width: isMobile ? '100%' : '240px', fontWeight: '600', color: '#374151', textAlign: 'left', paddingBottom: '12px', verticalAlign: 'top', marginBottom: isMobile ? '4px' : '0' }}>Contractor</th>
              <td style={{fontWeight: '600', display: isMobile ? 'block' : 'table-cell', color: '#111827', textAlign: 'left', paddingBottom: '12px', verticalAlign: 'top' }}>M/s RL PAREEK</td>
            </tr>

            <tr style={{ display: isMobile ? 'block' : 'table-row', borderBottom: '1px solid #f3f4f6', paddingBottom: isMobile ? '12px' : '0' }}>
              <th style={{ display: isMobile ? 'block' : 'table-cell', width: isMobile ? '100%' : '240px', fontWeight: '600', color: '#374151', textAlign: 'left', paddingBottom: '12px', verticalAlign: 'top', marginBottom: isMobile ? '4px' : '0' }}>Consultants</th>
              <td style={{fontWeight: '600', display: isMobile ? 'block' : 'table-cell', color: '#111827', textAlign: 'left', paddingBottom: '12px', verticalAlign: 'top' }}>M/s PEE Consultants</td>
            </tr>

            <tr style={{ display: isMobile ? 'block' : 'table-row', borderBottom: '1px solid #f3f4f6', paddingBottom: isMobile ? '12px' : '0' }}>
              <th style={{ display: isMobile ? 'block' : 'table-cell', width: isMobile ? '100%' : '240px', fontWeight: '600', color: '#374151', textAlign: 'left', paddingBottom: '12px', verticalAlign: 'top', marginBottom: isMobile ? '4px' : '0' }}>Executing agency</th>
              <td style={{ fontWeight: '600',display: isMobile ? 'block' : 'table-cell', color: '#111827', textAlign: 'left', paddingBottom: '12px', verticalAlign: 'top' }}>Military Engineer Services, GE Samba</td>
            </tr>

            <tr style={{ display: isMobile ? 'block' : 'table-row', borderBottom: '1px solid #f3f4f6', paddingBottom: isMobile ? '12px' : '0' }}>
              <th style={{ display: isMobile ? 'block' : 'table-cell', width: isMobile ? '100%' : '240px', fontWeight: '600', color: '#374151', textAlign: 'left', paddingBottom: '12px', verticalAlign: 'top', marginBottom: isMobile ? '4px' : '0' }}>Date of completion</th>
              <td style={{ fontWeight: '600', display: isMobile ? 'block' : 'table-cell', color: '#111827', textAlign: 'left', paddingBottom: '12px', verticalAlign: 'top' }}>08/09/2026</td>
            </tr>

            <tr style={{ display: isMobile ? 'block' : 'table-row', borderBottom: '1px solid #f3f4f6', paddingBottom: isMobile ? '12px' : '0' }}>
              <th style={{ display: isMobile ? 'block' : 'table-cell', width: isMobile ? '100%' : '240px', fontWeight: '600', color: '#374151', textAlign: 'left', paddingBottom: '12px', verticalAlign: 'top', marginBottom: isMobile ? '4px' : '0' }}>Defect liability period</th>
              <td style={{ fontWeight: '600' ,display: isMobile ? 'block' : 'table-cell', color: '#111827', textAlign: 'left', paddingBottom: '12px', verticalAlign: 'top' }}>09/09/2028</td>
            </tr>

            <tr style={{ display: isMobile ? 'block' : 'table-row', borderBottom: '1px solid #f3f4f6', paddingBottom: isMobile ? '12px' : '0' }}>
              <th style={{ display: isMobile ? 'block' : 'table-cell', width: isMobile ? '100%' : '240px', fontWeight: '600', color: '#374151', textAlign: 'left', paddingBottom: '12px', verticalAlign: 'top', marginBottom: isMobile ? '4px' : '0' }}>Comprehensive Maintenance</th>
              <td style={{  fontWeight: '600' ,display: isMobile ? 'block' : 'table-cell', color: '#111827', textAlign: 'left', paddingBottom: '12px', verticalAlign: 'top' }}>09/09/2031</td>
            </tr>

            <tr style={{ display: isMobile ? 'block' : 'table-row', borderBottom: '1px solid #f3f4f6', paddingBottom: isMobile ? '12px' : '0' }}>
              <th style={{ display: isMobile ? 'block' : 'table-cell', width: isMobile ? '100%' : '240px', fontWeight: '600', color: '#374151', textAlign: 'left', paddingBottom: '12px', verticalAlign: 'top', marginBottom: isMobile ? '4px' : '0' }}>
                Project cost
                <br/><span style={{ fontWeight: "400" }}>(Including Operation and Maintenance)</span>
              </th>
              <td style={{ display: isMobile ? 'block' : 'table-cell', color: '#111827', textAlign: 'left', paddingBottom: '12px', verticalAlign: 'top' }}>
                <div style={{ fontWeight: '600', marginBottom: '4px' }}>Rs 3,27,58,700.00</div>
                <div style={{ fontWeight: '600', fontSize: '13px', color: '#4b5563' }}>(Rupees three crore twenty seven lakhs fifty eight thousand seven hundred only)</div>
              </td>
            </tr>

            <tr style={{ display: isMobile ? 'block' : 'table-row', borderBottom: '1px solid #f3f4f6', paddingBottom: isMobile ? '12px' : '0' }}>
              <th style={{ display: isMobile ? 'block' : 'table-cell', width: isMobile ? '100%' : '240px', fontWeight: '600', color: '#374151', textAlign: 'left', paddingBottom: '12px', verticalAlign: 'top', marginBottom: isMobile ? '4px' : '0' }}>Chief Engineer</th>
              <td style={{ display: isMobile ? 'block' : 'table-cell', color: '#111827', textAlign: 'left', paddingBottom: '12px', verticalAlign: 'top' }}>
                <div style={{ fontWeight: '600', marginBottom: '4px' }}>1) Sh Rajneesh Chandra, IDSE</div>
                <div style={{fontWeight: '600' , fontSize: '13px', color: '#4b5563' }}>&emsp;Chief Engineer</div>
                <div style={{ fontWeight: '600' ,fontSize: '13px', color: '#4b5563' }}>&emsp;HQ CE Pathankot Zone</div>
              </td>
            </tr>

            <tr style={{ display: isMobile ? 'block' : 'table-row', borderBottom: '1px solid #f3f4f6', paddingBottom: isMobile ? '12px' : '0' }}>
              <th style={{ display: isMobile ? 'block' : 'table-cell', width: isMobile ? '100%' : '240px', fontWeight: '600', color: '#374151', textAlign: 'left', paddingBottom: '12px', verticalAlign: 'top', marginBottom: isMobile ? '4px' : '0' }}>Commander Works Engineer</th>
              <td style={{ display: isMobile ? 'block' : 'table-cell', color: '#111827', textAlign: 'left', paddingBottom: '12px', verticalAlign: 'top' }}>
                <div style={{ fontWeight: '600', marginBottom: '4px' }}>2) Sh Ajay Kumar Mishra, IDSE</div>
                <div style={{ fontWeight: '600', fontSize: '13px', color: '#4b5563' }}>&emsp;SE (SAG)</div>
                <div style={{ fontWeight: '600' , fontSize: '13px', color: '#4b5563' }}>&emsp;HQ CWE Mamun</div>
              </td>
            </tr>

            <tr style={{ display: isMobile ? 'block' : 'table-row', borderBottom: '1px solid #f3f4f6', paddingBottom: isMobile ? '12px' : '0' }}>
              <th style={{ display: isMobile ? 'block' : 'table-cell', width: isMobile ? '100%' : '240px', fontWeight: '600', color: '#374151', textAlign: 'left', paddingBottom: '12px', verticalAlign: 'top', marginBottom: isMobile ? '4px' : '0' }}>Garrison Engineer</th>
              <td style={{ display: isMobile ? 'block' : 'table-cell', color: '#111827', textAlign: 'left', paddingBottom: '12px', verticalAlign: 'top' }}>
                <div style={{ fontWeight: '600', marginBottom: '4px' }}>3) Sh Rajeev Kumar</div>
                <div style={{ fontWeight: '600',fontSize: '13px', color: '#4b5563' }}>&emsp; EE</div>
                <div style={{ fontWeight: '600',fontSize: '13px', color: '#4b5563' }}>&emsp; GE Samba</div>
              </td>
            </tr>

            <tr style={{ display: isMobile ? 'block' : 'table-row', borderBottom: '1px solid #f3f4f6', paddingBottom: isMobile ? '12px' : '0' }}>
              <th style={{ display: isMobile ? 'block' : 'table-cell', width: isMobile ? '100%' : '240px', fontWeight: '600', color: '#374151', textAlign: 'left', paddingBottom: '12px', verticalAlign: 'top', marginBottom: isMobile ? '4px' : '0' }}>Engineer-in-Charge</th>
              <td style={{ display: isMobile ? 'block' : 'table-cell', color: '#111827', textAlign: 'left', paddingBottom: '12px', verticalAlign: 'top' }}>
                <div style={{ fontWeight: '600', marginBottom: '4px' }}>4) Sh Sarvesh Kumar Saini</div>
                <div style={{ fontWeight: '600',fontSize: '13px', color: '#4b5563' }}>&emsp;AE (E/M)</div>
                <div style={{ fontWeight: '600',fontSize: '13px', color: '#4b5563' }}>&emsp;AGE (E/M) Samba</div>
                <br/>
                <div style={{ fontWeight: '600', marginBottom: '4px' }}>5) Sh Chandrakant R Shionkar</div>
                <div style={{ fontWeight: '600',fontSize: '13px', color: '#4b5563' }}>&emsp;AE (Civ)</div>
                <div style={{ fontWeight: '600', fontSize: '13px', color: '#4b5563' }}>&emsp;AGE (B/R) Samba</div>
              </td>
            </tr>

          </tbody>
        </table>

        {/* Footer */}
        <div style={{ marginTop: '40px', borderTop: '1px solid #e5e7eb', paddingTop: '20px', textAlign: 'center', fontSize: '12px', color: '#9ca3af' }}>
          <p style={{ margin: '0 0 4px 0' }}>Military Engineer Services (MES) • Project Showcase Document</p>
          <p style={{ margin: 0 }}>Contract Agreement No: CEPZ-15/2025-2026</p>
        </div>

      </div>
    </div>
  );
}