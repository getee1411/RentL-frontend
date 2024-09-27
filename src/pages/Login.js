import "../App.css";
import "../assets/styles/RedBackground.css";
import { Icon } from "@iconify-icon/react";
import LoginForm from "../components/LoginForm";
import basketballVector from "../assets/basketballSport.png";


const Login = () => {
  return (
    <div className="App" style={{ backgroundColor: '#F04438', height: '100vh' }}>
      <div className="container-fluid d-flex align-items-center" style={{ height: '100vh' }}>
        <div className="col-md-2"></div>
        <div className="col-md-4 text-center">
          <img src={basketballVector} alt="" />
          <h2 className="text-white my-4">Tentukan Arena dengan Cepat, <br /> Tunjukkan Performa Terhebat</h2>
          <p className="text-white">Temukan arena olahraga dengan cepat dan mudah <br /> untuk menunjukkan performa hebatmu dengan RentL! </p>
        </div>
        <div className="col-md-4 d-flex flex-column justify-content-start" style={{ width: '55vh' }}>
          <div>
            <LoginForm />
          </div>
          <div className="card mt-5 rounded-3">
            <div className="card-body py-2 text-center">
              <span>Belum punya akun? <a className="text-danger text-decoration-none" href="/register">Daftar Sekarang!</a> </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
