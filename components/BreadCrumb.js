

const BreadCrumb = (props) => (
  <section className="section-path d-none d-md-inline-block">
    <div className="section-head row py-2 d-flex justify-content-start">
      <div className="section-title col d-flex justify-content-start">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Library</a></li>
            <li className="breadcrumb-item active" aria-current="page"><a href="#">Data</a></li>
          </ol>
        </nav>
      </div>
    </div>
  </section>
)

export default BreadCrumb;