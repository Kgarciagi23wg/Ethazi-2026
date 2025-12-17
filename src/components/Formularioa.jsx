import React, { useState } from 'react'

const Formularioa = () => {
  const [datuak, setDatuak] = useState({
    izena: '',
    postaElektronikoa: '',
    mezua: ''
  })
  
  const [bidalita, setBidalita] = useState(false)
  const [bidaltzen, setBidaltzen] = useState(false)
  const [erroreak, setErroreak] = useState({})

  const aldaketakKudeatu = (e) => {
    const { name, value } = e.target
    setDatuak({
      ...datuak,
      [name]: value
    })
    // Errorea kendu eremua editatzen denean
    if (erroreak[name]) {
      setErroreak({
        ...erroreak,
        [name]: null
      })
    }
  }

  const balidatu = () => {
    const erroreBerriak = {}
    
    if (!datuak.izena.trim()) {
      erroreBerriak.izena = 'Izena derrigorrezkoa da'
    } else if (datuak.izena.length < 2) {
      erroreBerriak.izena = 'Izenak gutxienez 2 karaktere izan behar ditu'
    }
    
    if (!datuak.postaElektronikoa.trim()) {
      erroreBerriak.postaElektronikoa = 'Posta elektronikoa derrigorrezkoa da'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datuak.postaElektronikoa)) {
      erroreBerriak.postaElektronikoa = 'Posta elektroniko baliogabea'
    }
    
    if (!datuak.mezua.trim()) {
      erroreBerriak.mezua = 'Mezua derrigorrezkoa da'
    } else if (datuak.mezua.length < 10) {
      erroreBerriak.mezua = 'Mezuak gutxienez 10 karaktere izan behar ditu'
    }
    
    setErroreak(erroreBerriak)
    return Object.keys(erroreBerriak).length === 0
  }

  const bidali = async (e) => {
    e.preventDefault()
    
    if (!balidatu()) {
      return
    }
    
    setBidaltzen(true)
    
    try {
      // Simulatu backend bidalketa
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log('Formularioa bidalita:', datuak)
      
      setBidalita(true)
      setDatuak({
        izena: '',
        postaElektronikoa: '',
        mezua: ''
      })
      setErroreak({})
      
      // 5 segundotan mezua ezkutatu
      setTimeout(() => {
        setBidalita(false)
      }, 5000)
      
    } catch (error) {
      console.error('Errorea bidaltzean:', error)
    } finally {
      setBidaltzen(false)
    }
  }

  return (
    <div className="formularioa-kutxa">
      <h1>FORMULARIOA</h1>
      
      {bidalita && (
        <div className="alert-aitortza">
          <h4>Eskerrik asko!</h4>
          <p>Zure mezua ondo bidali da. Lasterren zurekin harremanduko gara.</p>
        </div>
      )}
      
      <form onSubmit={bidali} className="formularioa-estiloa" noValidate>
        {/* IZENA */}
        <div className="form-group">
          <label htmlFor="izena" className="form-label">Izena</label>
          <input
            type="text"
            id="izena"
            name="izena"
            value={datuak.izena}
            onChange={aldaketakKudeatu}
            placeholder="Sartu zure izena"
            className="form-control"
            disabled={bidaltzen}
          />
          {erroreak.izena && (
            <div className="errorea-mezua">{erroreak.izena}</div>
          )}
        </div>
        
        {/* POSTA ELEKTRONIKOA */}
        <div className="form-group">
          <label htmlFor="postaElektronikoa" className="form-label">Posta elektronikoa</label>
          <input
            type="email"
            id="postaElektronikoa"
            name="postaElektronikoa"
            value={datuak.postaElektronikoa}
            onChange={aldaketakKudeatu}
            placeholder="Sartu zure posta elektronikoa"
            className="form-control"
            disabled={bidaltzen}
          />
          {erroreak.postaElektronikoa && (
            <div className="errorea-mezua">{erroreak.postaElektronikoa}</div>
          )}
        </div>
        
        {/* MEZUA */}
        <div className="form-group">
          <label htmlFor="mezua" className="form-label">Mezua</label>
          <textarea
            id="mezua"
            name="mezua"
            value={datuak.mezua}
            onChange={aldaketakKudeatu}
            placeholder="Idatzi hemen zure mezua..."
            className="form-control"
            disabled={bidaltzen}
            rows="6"
          />
          {erroreak.mezua && (
            <div className="errorea-mezua">{erroreak.mezua}</div>
          )}
        </div>
        
        {/* BIDALI BOTOIA */}
        <button
          type="submit"
          className="botoia-nagusia"
          disabled={bidaltzen}
        >
          {bidaltzen ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status"></span>
              Bidaltzen...
            </>
          ) : (
            'Bidali'
          )}
        </button>
      </form>
    </div>
  )
}

export default Formularioa