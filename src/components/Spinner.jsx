function Spinner({ size = 3 }) {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="spinner-border text-warning"
        style={{ width: size + "rem", height: size + "rem" }}
      >
        <span className="visually-hidden">loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
