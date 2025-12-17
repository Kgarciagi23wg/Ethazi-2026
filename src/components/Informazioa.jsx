import React from 'react'

const Informazioa = () => {
  return (
    <div className="informazioa-kutxa">
      <h1>HARREMANETARAKO<br />FORMULARIOA</h1>
      
      <h2>Kontaktua</h2>
      
      <div className="kontaktu-datuak">
        {/* EMAILA */}
        <div className="kontaktu-elementua">
          <div className="kontaktu-ikonoa">
            <i>✉️</i>
          </div>
          <div className="kontaktu-testua">
            <h4>Posta elektronikoa</h4>
            <p>365scorebusiness@gmail.com</p>
          </div>
        </div>
        
        {/* HELBIDEA */}
        <div className="kontaktu-elementua">
          <div className="kontaktu-ikonoa">
            <i>📍</i>
          </div>
          <div className="kontaktu-testua">
            <h4>Helbidea</h4>
            <p>C. Jose Miguel Barandiaran, 10-12, 20013 Zubiri, Gipuzkoa</p>
          </div>
        </div>
        
        {/* TELEFONOAK */}
        <div className="kontaktu-elementua">
          <div className="kontaktu-ikonoa">
            <i>📞</i>
          </div>
          <div className="kontaktu-testua">
            <h4>Telefonoa</h4>
            <p>943 89 92 92</p>
          </div>
        </div>
        
        {/* ORDUAK */}
        <div className="kontaktu-elementua">
          <div className="kontaktu-ikonoa">
            <i>🕒</i>
          </div>
          <div className="kontaktu-testua">
            <h4>Lan orduak</h4>
            <p>Asteazkenetik Ostiralera<br />08:00 - 14:00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Informazioa