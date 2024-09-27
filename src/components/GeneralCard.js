import fieldImage from "../assets/field.png";
import { Icon } from "@iconify-icon/react";

const GeneralCard = () => {
    return (
        <div>
            <div class="card pt-2 px-2" style={{ width: 18 + "rem" }}>
                <img src={fieldImage} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title mb-0">Lapangan AntaFutsal</h5>
                    <p class="card-text text-secondary mt-0">
                        Antapani, Bandung
                        <br />
                        <br />
                        <span className="text-danger">Rp100.000</span>/jam
                    </p>
                    <button class="btn btn-danger rounded-4 w-100 py-1">
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
    );
};

export default GeneralCard;
