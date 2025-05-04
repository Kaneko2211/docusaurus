// src/pages/cms.js
import React from 'react';

const CMSPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Netlify CMS</h1>
      <iframe
        src="https://admin.netlify.com/identity"
        style={{ width: '100%', height: '80vh' }}
        frameBorder="0"
        title="Netlify CMS"
      ></iframe>
    </div>
  );
};

export default CMSPage;
