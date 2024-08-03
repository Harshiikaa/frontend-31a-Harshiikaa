import React from 'react'
import logo from '../../assets/images/logo.png';

const FooterPage = () => {
    return (
        <div style={{ backgroundColor: '#ffffff', marginTop: '20px', margin: 'auto', maxWidth: '100%', padding: '16px', paddingTop: '24px', paddingBottom: '32px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '40% 60%', alignItems: 'center', gap: '16px' }}>
                <div>
                    <img src={logo} style={{ height: '80px', maxWidth: '100%', display: 'block', margin: '0 auto' }} alt="Logo" />
                </div>
                <div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', gridTemplateRows: 'auto' }}>
                        <div>
                            <h2 style={{ marginBottom: '24px', fontSize: '0.875rem', fontWeight: '600', color: '#2d3748', textTransform: 'uppercase' }}>Resources</h2>
                            <ul style={{ color: '#718096', fontWeight: '500', fontSize: '0.875rem' }}>
                                <li style={{ marginBottom: '16px' }}>
                                    <a href="#" style={{ textDecoration: 'none', color: '#718096', hover: 'underline' }}>About us</a>
                                </li>
                                <li>
                                    <a href="#" style={{ textDecoration: 'none', color: '#718096', hover: 'underline' }}>Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 style={{ marginBottom: '24px', fontSize: '0.875rem', fontWeight: '600', color: '#2d3748', textTransform: 'uppercase' }}>Follow us</h2>
                            <ul style={{ color: '#718096', fontWeight: '500', fontSize: '0.875rem' }}>
                                <li style={{ marginBottom: '16px' }}>
                                    <a href="#" style={{ textDecoration: 'none', color: '#718096', hover: 'underline' }}>Facebook</a>
                                </li>
                                <li>
                                    <a href="#" style={{ textDecoration: 'none', color: '#718096', hover: 'underline' }}>Instagram</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 style={{ marginBottom: '24px', fontSize: '0.875rem', fontWeight: '600', color: '#2d3748', textTransform: 'uppercase' }}>Legal</h2>
                            <ul style={{ color: '#718096', fontWeight: '500', fontSize: '0.875rem' }}>
                                <li style={{ marginBottom: '16px' }}>
                                    <a href="#" style={{ textDecoration: 'none', color: '#718096', hover: 'underline' }}>Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" style={{ textDecoration: 'none', color: '#718096', hover: 'underline' }}>Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{ marginTop: '24px', marginBottom: '32px', height: '1px', border: 'none', backgroundColor: '#e2e8f0', dark: { backgroundColor: '#4a5568' } }} />
        </div>

        // <div style={{ backgroundColor: '#ffffff', marginTop: '20px', margin: 'auto', maxWidth: '100%', padding: '16px', paddingTop: '24px', paddingBottom: '32px' }}>
        //     <div style={{ display: 'grid', gridTemplateColumns: '40% 60%', alignItems: 'center', gap: '16px' }}>
        //         <div>
        //             <img src={logo} style={{ height: '32px', marginRight: '12px' }} alt="Logo" />
        //         </div>
        //         <div>
        //             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', gridTemplateRows: 'auto' }}>
        //                 <div>
        //                     <h2 style={{ marginBottom: '24px', fontSize: '0.875rem', fontWeight: '600', color: '#2d3748', textTransform: 'uppercase' }}>Resources</h2>
        //                     <ul style={{ color: '#718096', fontWeight: '500', fontSize: '0.875rem' }}>
        //                         <li style={{ marginBottom: '16px' }}>
        //                             <a href="#" style={{ textDecoration: 'none', color: '#718096', hover: 'underline' }}>About us</a>
        //                         </li>
        //                         <li>
        //                             <a href="#" style={{ textDecoration: 'none', color: '#718096', hover: 'underline' }}>Contact</a>
        //                         </li>
        //                     </ul>
        //                 </div>
        //                 <div>
        //                     <h2 style={{ marginBottom: '24px', fontSize: '0.875rem', fontWeight: '600', color: '#2d3748', textTransform: 'uppercase' }}>Follow us</h2>
        //                     <ul style={{ color: '#718096', fontWeight: '500', fontSize: '0.875rem' }}>
        //                         <li style={{ marginBottom: '16px' }}>
        //                             <a href="#" style={{ textDecoration: 'none', color: '#718096', hover: 'underline' }}>Facebook</a>
        //                         </li>
        //                         <li>
        //                             <a href="#" style={{ textDecoration: 'none', color: '#718096', hover: 'underline' }}>Instagram</a>
        //                         </li>
        //                     </ul>
        //                 </div>
        //                 <div>
        //                     <h2 style={{ marginBottom: '24px', fontSize: '0.875rem', fontWeight: '600', color: '#2d3748', textTransform: 'uppercase' }}>Legal</h2>
        //                     <ul style={{ color: '#718096', fontWeight: '500', fontSize: '0.875rem' }}>
        //                         <li style={{ marginBottom: '16px' }}>
        //                             <a href="#" style={{ textDecoration: 'none', color: '#718096', hover: 'underline' }}>Privacy Policy</a>
        //                         </li>
        //                         <li>
        //                             <a href="#" style={{ textDecoration: 'none', color: '#718096', hover: 'underline' }}>Terms &amp; Conditions</a>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <hr style={{ marginTop: '24px', marginBottom: '32px', height: '1px', border: 'none', backgroundColor: '#e2e8f0', dark: { backgroundColor: '#4a5568' } }} />
        // </div>


    )
}

export default FooterPage
