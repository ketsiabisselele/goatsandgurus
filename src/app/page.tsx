import Link from 'next/link'

export default function Body() {
  let color = 'primary'
  return (
    <div>
      <nav className="navbar bg-primary">
        <div className="navbar-brand">
          <button className="navbar-toggler" id="navbar-toggler">
            &#9776;
          </button>
        </div>
        <div className="navbar-links" id="navbar-links">
          <Link href={`/`}>Home</Link>
          <Link href={`/services/`}>Our Services</Link>
          <Link href={`/aboutus/`}>About Us</Link>
          <Link href={`/blog/`}>Blog</Link>
        </div>
      </nav>
      <div className="container text-center p-4 fade body">
        <div className="row">
          <div className="col-sm-6">
            {/* <img className='img-fluid w-75' src={ `${logo}` } alt="logo" /> */}
          </div>
          <div className="col-sm-6">
            <div className='text-center align-middle p-5 align-middle'>
              <h1 className='fs-1 pt-5'><span className={`fs-1 text-${color} fade-innovation`}>Innovation. </span><span className='fade-efficiency'>Efficiency. </span><span className='fade-security text-warning'>Security.</span></h1>
              <h5 className='pt-3'><span className=''>We offer a robust and influential solution for safeguarding your company's data, ensuring compliance with governance standards.</span></h5>
              <div className='d-flex justify-content-center pt-5'>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className={`row p-5 text-center bg-${color} py-5`}>
          <div className='col-sm-6'>
            <h1 className='fade text-warning align-middle pt-5 fw-bold'>Mission</h1>
          </div>
          <div className='col-sm-6'>
            <h5 className='fade text-white p-5 text-start lh-base'>To guide clients in making distinctive and substantial security improvements within their tenant
              and to build a great rapport that attracts, develops, excites, and retains exceptional people.</h5>
          </div>
        </div>
      </div>
    </div>
  )
}