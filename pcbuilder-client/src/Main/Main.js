import React from 'react';
import SelectComponents from '../SelectComponents/SelectComponents';
import BuildCard from '../BuildCard/BuildCard';

const Main = () => (
    <div>
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="#">PC Config App</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

        <section id="create-config" className="bg-dark py-5">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="d-sm-flex justify-content-between align-items-center">
                            <h4>Create a new config</h4>
                            <button type="button" className="btn btn-success btn-lg" data-toggle="modal" data-target="#myModal">Create config</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <SelectComponents />

        <BuildCard />
    </div>
)

export default Main;