import GeneralCard from "../components/GeneralCard";
import LongCard from "../components/LongCard";
import FilterCard from "../components/FilterCard";
import Navbar from "../components/Navbar";
import { Dropdown } from 'react-bootstrap';
import React, { useState } from 'react';


const Futsal = () => {
    const [selectedOption, setSelectedOption] = useState('Termurah');

    const handleSelect = (eventKey) => {
        setSelectedOption(eventKey);
    };
    return (
        <div className="App">
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 d-flex justify-content-end">
                        <FilterCard />
                    </div>
                    <div className="col-md-8">
                        <div className="d-flex justify-content-between">
                            <h2 className="text-start">Lapangan Termurah di Bandung</h2>
                            <div>
                                <Dropdown onSelect={handleSelect}>
                                    <Dropdown.Toggle variant="light" id="dropdown-basic" className="rounded-4 border">
                                        Urutkan dari: <strong>{selectedOption}</strong>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item eventKey="Termurah">Termurah</Dropdown.Item>
                                        <Dropdown.Item eventKey="Termahal">Termahal</Dropdown.Item>
                                        <Dropdown.Item eventKey="Terbaru">Terbaru</Dropdown.Item>
                                        <Dropdown.Item eventKey="Terpopuler">Terpopuler</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <GeneralCard />
                            </div>
                            <div className="col-md-3">
                                <GeneralCard />
                            </div>
                            <div className="col-md-3">
                                <GeneralCard />
                            </div>
                            <div className="col-md-3">
                                <GeneralCard />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 mt-4">
                                <LongCard />
                            </div>
                            <div className="col-md-12 mt-4">
                                <LongCard />
                            </div>
                            <div className="col-md-12 mt-4">
                                <LongCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Futsal;