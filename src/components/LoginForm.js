const LoginForm = () => {
    return (
        <div className="card rounded-4">
            <div className="card-body">
                <h5 class="card-title text-center">Login</h5>
                <form>
                    
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
                    </div>
                    <div className="d-flex justify-content-center">
                        {/* <button type="submit" class="btn btn-danger w-100">
                            Login
                        </button> */}
                        <a type="submit" href="/futsal" class="btn btn-danger w-100">
                            Login
                        </a>
                    </div>
                    <div className="d-flex justify-content-center">
                        <span className="mt-3">Lupa Kata Sandi? <span className="text-danger">Atur Ulang Kata Sandi</span> </span>
                    </div>
                    <div class="d-flex align-items-center my-3">
                        <hr class="flex-grow-1" />
                        <span class="mx-3 text-muted">Atau</span>
                        <hr class="flex-grow-1" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" class="btn btn-outline-danger w-100">
                            Login Dengan Google
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
