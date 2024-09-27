import "../App.css";
import { Icon } from "@iconify-icon/react";

const Home = () => {
  return (

    <div className="App" style={{ height: '100vh', background: '-webkit-gradient(linear, 0 1%, 0 71%, from(#F04438), to(white))' }}>

      <div className="container-fluid d-flex justify-content-start align-items-center" style={{ height: '80vh', width: '150vh' }}>
        <div className="text-start">
          <h1 className="text-white">
            Tentukan <span className="text-danger">Arena</span> dengan Cepat, <br /> Tunjukkan Performa Terhebat
          </h1>
          <p className="text-white my-4">Tentukan arena olahraga dengan cepat dan mudah untuk menunjukkan performa hebatmu!</p>
          <a className="btn btn-md btn-danger" href="/login">
            <Icon
              icon="fluent:sport-baseball-24-filled"
              style={{ color: "white" }}
            />
            Booking Sekarang
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
