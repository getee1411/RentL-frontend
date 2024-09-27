import fieldImage from "../assets/field.png";
import { Icon } from "@iconify-icon/react";

const LongCard = () => {
  const tags = ["Indoor", "Sintetis", "Interlock"];
  const extraCount = 2;

  return (
    <div class="card" style={{ width: '100%' }}>
      <div class="card-body">
        <div className="row">
          <div className="col-md-4">
            <img src={fieldImage} alt="..." />
          </div>
          <div className="col-md-4">
            <div>
              <h4>Lapangan AntaFutsal</h4>
              <p class="card-text text-secondary mt-0">Antapani, Bandung</p>
            </div>
            <div className="my-4">
              <div className="d-flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span key={index} className="badge bg-success">
                    {tag}
                  </span>
                ))}
                <span className="badge bg-success">+{extraCount}</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-end">
            <div>
              <div>
                <h6>Harga Sewa</h6>
                <p class="text-secondary mt-0">
                  <span className="text-danger">Rp100.000</span>/jam
                </p>
              </div>
              <div className="my-4">
                <button class="btn btn-danger btn-sm rounded-4 py-1">
                  <span className="align-middle">Booking Sekarang</span>
                  <Icon
                    className="align-middle ms-1"
                    icon="bxs:calendar-edit"
                    style={{ color: "white" }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LongCard;
