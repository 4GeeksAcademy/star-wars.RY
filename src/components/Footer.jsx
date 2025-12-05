import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<footer className="footer mt-auto py-5 bg-dark text-light border-top border-secondary">
			<div className="container">
				<div className="row">
					<div className="col-md-4 mb-3">
						<h5 className="text-warning mb-3">Quick Links</h5>
						<ul className="nav flex-column">
							<li className="nav-item mb-2">
								<Link to="/" className="nav-link p-0 text-white-50 hover-warning">
                                    <i className="fas fa-jedi me-2"></i>Characters
                                </Link>
							</li>
							<li className="nav-item mb-2">
								<Link to="/" className="nav-link p-0 text-white-50 hover-warning">
                                    <i className="fas fa-globe-americas me-2"></i>Planets
                                </Link>
							</li>
							<li className="nav-item mb-2">
								<Link to="/" className="nav-link p-0 text-white-50 hover-warning">
                                    <i className="fas fa-space-shuttle me-2"></i>Vehicles
                                </Link>
							</li>
						</ul>
					</div>
					<div className="col-md-4 mb-3 text-center">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png" 
                            alt="Star Wars" 
                            style={{ height: "60px", marginBottom: "15px", opacity: 0.8 }} 
                        />
						<p className="text-white-50">
							Made with <i className="fa fa-heart text-danger" /> by a Jedi Master.
						</p>
                        <p className="small text-muted">
                            May the Force be with you.
                        </p>
					</div>
					<div className="col-md-4 mb-3 text-end">
						<h5 className="text-warning mb-3">Connect</h5>
						<div className="d-flex justify-content-end gap-3">
                            <a href="#" className="text-white fs-4"><i className="fab fa-github"></i></a>
                            <a href="#" className="text-white fs-4"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-white fs-4"><i className="fab fa-instagram"></i></a>
                        </div>
                        <p className="text-white-50 mt-3 small">
                            Data provided by SWAPI.tech
                        </p>
					</div>
				</div>

				<div className="d-flex justify-content-center pt-4 mt-4 border-top border-secondary">
					<p className="text-center text-muted mb-0">
                        &copy; 2025 Galactic Empire, Inc. All rights reserved.
                    </p>
				</div>
			</div>
		</footer>
	);
};