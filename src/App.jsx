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
          <h1 style={{ fontSize: isMobile ? '20px' : '24px', fontWeight: 'bold', margin: 0, color: '#111827', fontFamily:"monospace" }}>Project Detail Showcase</h1>
        </div>

        {/* Document Details List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '15px' }}>
          
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', borderBottom: '1px solid #f3f4f6', paddingBottom: '12px', gap: isMobile ? '4px' : '0' }}>
            <div style={{ width: isMobile ? '100%' : '240px', fontWeight: '600', color: '#374151' }}>CA NO</div>
            <div style={{ flex: 1, color: '#111827' }}>CEPZ-15/2025-2026</div>
          </div>

          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', borderBottom: '1px solid #f3f4f6', paddingBottom: '12px', gap: isMobile ? '4px' : '0' }}>
            <div style={{ width: isMobile ? '100%' : '240px', fontWeight: '600', color: '#374151' }}>Name of work</div>
            <div style={{ flex: 1, color: '#111827' }}>Provision of Sewage Treatment Plant (STP) 75 KLD (MBR Based) at Samba</div>
          </div>

          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', borderBottom: '1px solid #f3f4f6', paddingBottom: '12px', gap: isMobile ? '4px' : '0' }}>
            <div style={{ width: isMobile ? '100%' : '240px', fontWeight: '600', color: '#374151' }}>Name of contractor</div>
            <div style={{ flex: 1, color: '#111827' }}>M/s RL PAREEK</div>
          </div>

          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', borderBottom: '1px solid #f3f4f6', paddingBottom: '12px', gap: isMobile ? '4px' : '0' }}>
            <div style={{ width: isMobile ? '100%' : '240px', fontWeight: '600', color: '#374151' }}>Name of consultants</div>
            <div style={{ flex: 1, color: '#111827' }}>M/s PEE Consultants</div>
          </div>

          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', borderBottom: '1px solid #f3f4f6', paddingBottom: '12px', gap: isMobile ? '4px' : '0' }}>
            <div style={{ width: isMobile ? '100%' : '240px', fontWeight: '600', color: '#374151' }}>Name of executing agency</div>
            <div style={{ flex: 1, color: '#111827' }}>Military Engineering Services, GE Samba</div>
          </div>

          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', borderBottom: '1px solid #f3f4f6', paddingBottom: '12px', gap: isMobile ? '4px' : '0' }}>
            <div style={{ width: isMobile ? '100%' : '240px', fontWeight: '600', color: '#374151' }}>Date of completion</div>
            <div style={{ flex: 1, color: '#111827' }}>08/09/2026</div>
          </div>

          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', borderBottom: '1px solid #f3f4f6', paddingBottom: '12px', gap: isMobile ? '4px' : '0' }}>
            <div style={{ width: isMobile ? '100%' : '240px', fontWeight: '600', color: '#374151' }}>Defect liability period</div>
            <div style={{ flex: 1, color: '#111827' }}>09/09/2028</div>
          </div>

          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', borderBottom: '1px solid #f3f4f6', paddingBottom: '12px', gap: isMobile ? '4px' : '0' }}>
            <div style={{ width: isMobile ? '100%' : '240px', fontWeight: '600', color: '#374151' }}>Comprehensive Maintenance</div>
            <div style={{ flex: 1, color: '#111827' }}>09/09/2031</div>
          </div>

          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', borderBottom: '1px solid #f3f4f6', paddingBottom: '12px', gap: isMobile ? '4px' : '0' }}>
            <div style={{ width: isMobile ? '100%' : '240px', fontWeight: '600', color: '#374151' }}>Total project cost
              <br/><span style={{fontWeight:"400"}}>(Including Operation and Mantainance)</span>
            </div>
            <div style={{ flex: 1, color: '#111827' }}>
              <div style={{ fontWeight: '600', marginBottom: '4px' }}>Rs 3,27,58,700.00</div>
              <div style={{ fontSize: '13px', color: '#4b5563' }}>(Rupees three crore twenty seven lakhs fifty eight thousand seven hundred only)</div>
            </div>
          </div>

          {/* more fields */}

          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', borderBottom: '1px solid #f3f4f6', paddingBottom: '12px', gap: isMobile ? '4px' : '0' }}>
            <div style={{ width: isMobile ? '100%' : '240px', fontWeight: '600', color: '#374151' }}>Name of Chief Engineer
             
            </div>
            <div style={{ flex: 1, color: '#111827' }}>
              <div style={{ fontWeight: '600', marginBottom: '4px' }}>Sh Rajneesh Chandra, IDSE</div>
              <div style={{ fontSize: '13px', color: '#4b5563' }}>Chief Engineer</div>
              <div style={{ fontSize: '13px', color: '#4b5563' }}>HQ CE Pathankot Zone</div>

            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', borderBottom: '1px solid #f3f4f6', paddingBottom: '12px', gap: isMobile ? '4px' : '0' }}>
            <div style={{ width: isMobile ? '100%' : '240px', fontWeight: '600', color: '#374151' }}>Name of Commander Worker Engineer
             
            </div>
            <div style={{ flex: 1, color: '#111827' }}>
              <div style={{ fontWeight: '600', marginBottom: '4px' }}>Sh Ajay Kumar Mishra, IDSE</div>
              <div style={{ fontSize: '13px', color: '#4b5563' }}>SE (SAG)</div>
              <div style={{ fontSize: '13px', color: '#4b5563' }}>HQ CWE Mamun</div>

            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', borderBottom: '1px solid #f3f4f6', paddingBottom: '12px', gap: isMobile ? '4px' : '0' }}>
            <div style={{ width: isMobile ? '100%' : '240px', fontWeight: '600', color: '#374151' }}>Name of Garrison Engineer 
             
            </div>
            <div style={{ flex: 1, color: '#111827' }}>
              <div style={{ fontWeight: '600', marginBottom: '4px' }}>Sh Rajeev Kumar</div>
              <div style={{ fontSize: '13px', color: '#4b5563' }}>EE</div>
              <div style={{ fontSize: '13px', color: '#4b5563' }}>GE Samba</div>

            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', borderBottom: '1px solid #f3f4f6', paddingBottom: '12px', gap: isMobile ? '4px' : '0' }}>
            <div style={{ width: isMobile ? '100%' : '240px', fontWeight: '600', color: '#374151' }}>Name of Engineer-in-Charge
             
            </div>
            <div style={{ flex: 1, color: '#111827' }}>
              <div style={{ fontWeight: '600', marginBottom: '4px' }}>Sh Sarvesh Kumar Saini</div>
              <div style={{ fontSize: '13px', color: '#4b5563' }}>AE (E/M)</div>
              <div style={{ fontSize: '13px', color: '#4b5563' }}>AGE (E/M) Samba</div>
              <br/>
              <div style={{ fontWeight: '600', marginBottom: '4px' }}>Sh Chandrakant R Shionkar</div>
              <div style={{ fontSize: '13px', color: '#4b5563' }}>AE (Civ)</div>
              <div style={{ fontSize: '13px', color: '#4b5563' }}>AGE (B/R) Samba</div>

            </div>
          </div>

        </div>

        {/* Footer */}
        <div style={{ marginTop: '40px', borderTop: '1px solid #e5e7eb', paddingTop: '20px', textAlign: 'center', fontSize: '12px', color: '#9ca3af' }}>
          <p style={{ margin: '0 0 4px 0' }}>Military Engineer Services (MES) • Project Showcase Document</p>
          <p style={{ margin: 0 }}>Contract Agreement No: CEPZ-15/2025-2026</p>
        </div>

      </div>
    </div>
  );
}