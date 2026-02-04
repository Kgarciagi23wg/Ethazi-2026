const RegisterForm = ({
  registerData,
  akatsak,
  kargatzen,
  handleRegisterChange,
  handleRegisterSubmit
}) => {
  return (
    <form onSubmit={handleRegisterSubmit} className="formularioa-estiloa" noValidate>

      {/* IZENA */}
      <div className="form-group mb-4">
        <label htmlFor="registerName" className="form-label fw-semibold">
          <i className="bi bi-person-fill text-primary me-2"></i>
          Izen abizenak *
        </label>
        <input
          type="text"
          id="registerName"
          name="izena"
          value={registerData.izena}
          onChange={handleRegisterChange}
          placeholder="Sartu zure izen abizenak"
          className={`form-control form-control-lg ${akatsak.izena ? 'is-invalid' : ''}`}
          disabled={kargatzen}
        />
        {akatsak.izena && (
          <div className="invalid-feedback d-block animate-shake">
            <i className="bi bi-exclamation-circle me-1"></i>
            {akatsak.izena}
          </div>
        )}
      </div>

      {/* POSTA ELEKTRONIKOA */}
      <div className="form-group mb-4">
        <label htmlFor="registerEmail" className="form-label fw-semibold">
          <i className="bi bi-envelope-fill text-primary me-2"></i>
          Posta elektronikoa *
        </label>
        <input
          type="email"
          id="registerEmail"
          name="email"
          value={registerData.email}
          onChange={handleRegisterChange}
          placeholder="izena@adibidea.com"
          className={`form-control form-control-lg ${akatsak.email ? 'is-invalid' : ''}`}
          disabled={kargatzen}
        />
        {akatsak.email && (
          <div className="invalid-feedback d-block animate-shake">
            <i className="bi bi-exclamation-circle me-1"></i>
            {akatsak.email}
          </div>
        )}
      </div>

      {/* PASAHITZA */}
      <div className="form-group mb-4">
        <label htmlFor="registerPassword" className="form-label fw-semibold">
          <i className="bi bi-key-fill text-primary me-2"></i>
          Pasahitza *
        </label>
        <input
          type="password"
          id="registerPassword"
          name="pasahitza"
          value={registerData.pasahitza}
          onChange={handleRegisterChange}
          placeholder="Gutxienez 6 karaktere"
          className={`form-control form-control-lg ${akatsak.pasahitza ? 'is-invalid' : ''}`}
          disabled={kargatzen}
        />
        {akatsak.pasahitza && (
          <div className="invalid-feedback d-block animate-shake">
            <i className="bi bi-exclamation-circle me-1"></i>
            {akatsak.pasahitza}
          </div>
        )}
        <div className="form-text mt-2">
          <i className="bi bi-info-circle me-1"></i>
          Pasahitzak gutxienez 6 karaktere izan behar ditu
        </div>
      </div>

      {/* PASAHITZA BERRETSI */}
      <div className="form-group mb-4">
        <label htmlFor="registerConfirmPassword" className="form-label fw-semibold">
          <i className="bi bi-key-fill text-primary me-2"></i>
          Pasahitza berretsi *
        </label>
        <input
          type="password"
          id="registerConfirmPassword"
          name="pasahitzaBerretsi"
          value={registerData.pasahitzaBerretsi}
          onChange={handleRegisterChange}
          placeholder="Errepikatu pasahitza"
          className={`form-control form-control-lg ${akatsak.pasahitzaBerretsi ? 'is-invalid' : ''}`}
          disabled={kargatzen}
        />
        {akatsak.pasahitzaBerretsi && (
          <div className="invalid-feedback d-block animate-shake">
            <i className="bi bi-exclamation-circle me-1"></i>
            {akatsak.pasahitzaBerretsi}
          </div>
        )}
      </div>

      {/* BALDINTZAK */}
      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="checkbox"
          id="terms"
          required
        />
        <label className="form-check-label text-muted" htmlFor="terms">
          Onartzen ditut{' '}
          <a href="#" className="text-decoration-none">Erabilera Baldintzak</a>
          {' '}eta{' '}
          <a href="#" className="text-decoration-none">Pribatutasun Politika</a>
        </label>
      </div>

      {/* KONTUA SORTU BOTOIA */}
      <button
        type="submit"
        className="btn btn-primary btn-lg w-100 py-3 fw-bold shadow-sm mb-3 animate-btn"
        disabled={kargatzen}
      >
        {kargatzen ? (
          <>
            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
            Kontua sortzen...
          </>
        ) : (
          <>
            <i className="bi bi-person-plus-fill me-2"></i>
            Kontua sortu
          </>
        )}
      </button>

    </form>
  );
};

export default RegisterForm;
