const About = () => {
    return ( 
        <div className="about">
            <section className="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
                            <div className="about-text">
                                <small className="small-text">Bienvenue sur <span className="mobile-block">mon portfolio !</span></small>
                                <h1 className="animated animated-text">
                                    <span className="mr-2">Salut, je suis</span>
                                        <div className="animated-info">
                                            <span className="animated-item">Sam SANDJA</span>
                                            <span className="animated-item">Développeur </span>
                                            <span className="animated-item">d'applications</span>
                                        </div>
                                </h1>
                                <p></p><p></p>
                                <p>Building a successful product is a challenge. I am highly energetic in user experience design, interfaces and web development.</p>
                                
                                <div className="custom-btn-group mt-4">
                                <a href="/" className="btn mr-lg-2 custom-btn"> Télécharger le CV</a>
                                <a href="#contact" className="btn custom-btn custom-btn-bg custom-btn-link">Obtenez un devis gratuit</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-12 col-12">
                            <div className="about-image svg">
                                <img src="images/undraw/vector.jpg" className="img-fluid" alt="svg image" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default About;