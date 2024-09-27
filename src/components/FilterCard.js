
const FilterCard = () => {
    return (
        <div className="card" style={{ width: 20 + 'rem', height: '400px' }}>
            <div className="card-body">
                <h5 class="card-title">Filter</h5>
                <form>
                    <div class="mb-3">
                        <label class="form-label">Lokasi</label>
                        <select class="form-select" >
                            <option value="1">Bandung</option>
                            <option value="2">Jakarta</option>
                            <option value="3">Malang</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Waktu Sewa</label>
                        <select class="form-select">
                            <option value="1">Mulai: Sab, 19:00 - 21:00</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Rentang Harga</label>
                        <div className="d-inline-flex gap-2">
                            <div>
                                <span className="text-secondary" style={{ fontSize: 12 + 'px' }}>Harga Minimal</span>
                                <input type="number" class="form-control" />
                            </div>
                            <div>
                                <span className="text-secondary" style={{ fontSize: 12 + 'px' }}>Harga Maksimal</span>
                                <input type="number" class="form-control" />
                            </div>
                        </div>
                    </div>
                    <div class='mb-3'>
                        <div className="d-flex justify-content-center">
                            <button type="submit" class="btn btn-danger w-100">
                                Terapkan
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FilterCard;
