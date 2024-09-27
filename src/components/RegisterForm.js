const RegisterForm = () => {
  return (
    <div className="card rounded-4">
      <div className="card-body">
        <h5 class="card-title text-center">Daftar</h5>
        <form>
          <div class="mb-3">
            <label class="form-label">Nama</label>
            <input
              type="text"
              class="form-control"
              placeholder="Masukkan nama kamu"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Lokasi</label>
            <select class="form-select" id="inputGroupSelect02">
              <option selected disabled>
                Masukkan lokasi kota kamu saat ini
              </option>
              <option value="1">Bandung</option>
              <option value="2">Jakarta</option>
              <option value="3">Malang</option>
            </select>
            <div class="form-text">Pilih kota tempat kamu tinggal saat ini</div>
          </div>
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              placeholder="Masukkan email kamu"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              placeholder="Masukkan password kamu"
            />
            <div class="form-text">Password minimal 8 karakter</div>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" class="btn btn-danger w-100">
              Daftar
            </button>
          </div>
          <div class="d-flex align-items-center my-3">
            <hr class="flex-grow-1" />
            <span class="mx-3 text-muted">Atau</span>
            <hr class="flex-grow-1" />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" class="btn btn-outline-danger w-100">
              Daftar Dengan Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
