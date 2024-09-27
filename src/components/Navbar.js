// import basketballSport from "../assets/basketballSport.png";
import profile from "../assets/profile.png";
import { Icon } from "@iconify-icon/react";
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol, faBasketballBall, faVolleyballBall, faDumbbell, faBowlingBall, faBaseballBall } from '@fortawesome/free-solid-svg-icons'; // Add other icons as needed

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg d-flex flex-column bg-body-white mb-4">
            <div class="container-fluid d-flex justify-content-between px-5 py-3">
                <a class="navbar-brand text-danger" href="/futsal">Rentl</a>
                <div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <form role="search">
                                <input class="form-control" style={{ width: '500px' }} type="search" placeholder="Tulis nama atau tempat lapangan yang kamu cari" aria-label="Search" />
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="btn" style={{ backgroundColor: 'transparent', border: 'none', color: 'grey' }}>
                        <Icon
                            className="align-middle"
                            icon="majesticons:bookmark-minus"
                            width="20" height="20"
                            style={{ color: "grey" }}
                        />
                    </button>
                    <button className="btn" style={{ backgroundColor: 'transparent', border: 'none', color: 'grey' }}>
                        <Icon
                            className="align-middle"
                            icon="jam:messages-alt-f"
                            width="20" height="20"
                            style={{ color: "grey" }}
                        />
                    </button>
                    <button className="btn" style={{ backgroundColor: 'transparent', border: 'none', color: 'grey' }}>
                        <Icon
                            className="align-middle"
                            icon="fluent:alert-48-filled"
                            width="20" height="20"
                            style={{ color: "grey" }}
                        />
                    </button>
                    <a class="navbar-brand" href="/profile">
                        <img src={profile} className="rounded-circle ms-2" width="30" height="30" />
                    </a>
                </div>
            </div>
            <div className="container-fluid d-flex justify-content-center bg-body-secondary">
                <Nav className="justify-content-center" activeKey="/futsal">
                    <Nav.Item>
                        <Nav.Link href="/futsal">
                            <FontAwesomeIcon icon={faFutbol} /> Futsal
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/soccer" disabled>
                            <FontAwesomeIcon icon={faFutbol} /> Sepak Bola
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/basketball" disabled>
                            <FontAwesomeIcon icon={faBasketballBall} /> Basket
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/badminton" disabled>
                            <FontAwesomeIcon icon={faDumbbell} /> Bulu Tangkis
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/volleyball" disabled>
                            <FontAwesomeIcon icon={faVolleyballBall} /> Voli
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/bowling" disabled>
                            <FontAwesomeIcon icon={faBowlingBall} /> Bowling
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/gym" disabled>
                            <FontAwesomeIcon icon={faDumbbell} /> Gym
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/baseball" disabled>
                            <FontAwesomeIcon icon={faBaseballBall} /> Baseball
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </nav>
    );
};

export default Navbar;
