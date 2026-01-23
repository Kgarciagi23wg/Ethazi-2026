const LoginForm = ({
  loginData,
  akatsak,
  kargatzen,
  handleLoginChange,
  handleLoginSubmit
}) => {
  return (
    <form onSubmit={handleLoginSubmit} className="formularioa-estiloa" noValidate>

      {/* POSTA ELEKTRONIKOA */}
      <div className="form-group mb-4">
        <label htmlFor="loginEmail" className="form-label fw-semibold">
          <i className="bi bi-envelope-fill text-primary me-2"></i>
          Posta elektronikoa *
        </label>
        <input
          type="email"
          id="loginEmail"
          name="email"
          value={loginData.email}
          onChange={handleLoginChange}
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
        <label htmlFor="loginPassword" className="form-label fw-semibold">
          <i className="bi bi-key-fill text-primary me-2"></i>
          Pasahitza *
        </label>
        <input
          type="password"
          id="loginPassword"
          name="pasahitza"
          value={loginData.pasahitza}
          onChange={handleLoginChange}
          placeholder="••••••••"
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
          Pasahitza ahaztu duzu? <a href="#" className="text-decoration-none">Berrezarri</a>
        </div>
      </div>

      {/* GOGORATU NAU */}
      <div className="form-check mb-4">
        <input className="form-check-input" type="checkbox" id="rememberMe" />
        <label className="form-check-label text-muted" htmlFor="rememberMe">
          Gogoan izan nazazu ordenagailu honetan
        </label>
      </div>

      {/* SAIOA HASI BOTOIA */}
      <button
        type="submit"
        className="btn btn-primary btn-lg w-100 py-3 fw-bold shadow-sm mb-3 animate-btn"
        disabled={kargatzen}
      >
        {kargatzen ? (
          <>
            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
            Saioa hasten...
          </>
        ) : (
          <>
            <i className="bi bi-box-arrow-in-right me-2"></i>
            Saioa hasi
          </>
        )}
      </button>

      <div className="text-center text-muted mb-4">
        <small>
          <i className="bi bi-asterisk text-primary me-1"></i>
          eremuak derrigorrezkoak dira
        </small>
      </div>

    </form>
  );
};

export default LoginForm;
