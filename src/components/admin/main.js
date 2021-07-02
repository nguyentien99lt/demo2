export default function Main(props) {

  function ok() {
    alert("ok");

  };
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Quản lý sản phẩm</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <button type="button" className="btn btn-sm btn-outline-primary" onClick={ok}>
            Thêm sản phẩm
          </button>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Stt</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col"></th>

            </tr>
          </thead>
          <tbody>

            {props.data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td> <button className="btn btn-danger btn-sm" onClick={() => props.onRemove(item.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
