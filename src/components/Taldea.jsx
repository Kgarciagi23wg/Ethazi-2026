import React from "react";

const Taldeak = ({posizioa, taldea, escudo }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
      <span style={{ width: '30px' }}>{posizioa}</span>
      <img src={escudo} alt={`${taldea} escudo`} style={{ width: '30px', marginRight: '10px' }} />
      <span>{taldea}</span>
    </div>
    );
};
    
export default Taldeak;