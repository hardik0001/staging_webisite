import React from 'react';
import '../assets/css/header.css';
import logo_header from '../assets/img/logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <div id="fixedheader">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a href="/"><img src={logo_header} class="logo-header" style={{ top: '9px' }} /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false" style={{
                                    left: '150px', position: 'relative',
                                    backgroundColor: '#c8242d', borderRadius: '4px',
                                    color: 'white', top: '10px', fontSize: '16px', width: '140px',
                                    paddingTop: '14px',
                                    paddingLeft: '25px',
                                    paddingBottom: '13px'
                                }}>
                                Programs
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item"
                                    href={"/programs"}>Certificate
                                    Program in Product
                                    Management</a></li>
                                <li><a class="dropdown-item" href="https://staging.herovired.com/programs/part-time-program-in-data-science-machine-learning-ai-copy/
                                ">Integrated Program in Data Science, Machine Learning, & Artificial Intelligence</a>
                                </li>
                                <li><a class="dropdown-item"
                                    href="https://staging.herovired.com/programs/accelerator-program-business-analytics-data-science-copy/">Accelerator
                                    Program in Accelerator Program in Business Analytics and Data Science</a></li>
                                <li><a class="dropdown-item"
                                    href="https://staging.herovired.com/programs/product-management/">Certificate
                                    Program in Product
                                    Management</a></li>
                                <li><a class="dropdown-item"
                                    href="https://staging.herovired.com/programs/certificate-program-in-financial-analysis-risk-management/">Accelerator
                                    Certificate Program in Financial Analysis, Valuation, & Risk Management</a></li>
                                <li><a class="dropdown-item" href="https://staging.herovired.com/programs/part-time-certificate-program-in-financial-technologies/
                                ">Integrated Program in Finance and Financial Technologies</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="header-right">
                    <ul>
                        <li class="inline-header-right"><a class="styling-header-right"
                            href={"/learninghub"}>Learning Hub</a>
                        </li>
                        <li class="inline-header-right"><a class="styling-header-right"
                            href="viredforbusiness">Vired
                            for
                            Business</a></li>
                        <li class="inline-header-right"><a class="nav-link dropdown-toggle"
                            style={{ top: '20px', position: 'relative' }} href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">More</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/successstories/">
                                    Success Stories</a></li>
                                <li><a class="dropdown-item" href="/inthenews">
                                    In the news</a></li>
                                <li><a class="dropdown-item" href="/about
                            ">About us</a></li>
                                <li><a class="dropdown-item" href="/contactus
                                ">Contact us</a></li>
                            </ul>
                        </li>

                        <li class="inline-header-right"><a href="https://vlearn.herovired.com/local/signin/"><button class="start-learning"
                             type="button">Start Learning</button></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    );
}

export default Header;