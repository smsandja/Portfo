import "../App.css";
const About = () => {
    return ( 
            <section className="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
                            <div className="about-text">
                                <h5 className="text-info py-5">sur <span className="mobile-block">mon portfolio !</span></h5>
                                <h1 className="animated animated-text">
                                    <span className="mr-2">Salut, je suis</span>
                                        <div className="animated-info">
                                            <span className="animated-item">Sam SANDJA</span>
                                            <span className="animated-item">Développeur </span>
                                            <span className="animated-item">web</span>
                                        </div>
                                </h1>
                                <p></p><p></p>
                                <p className="presentation"> Spécialisé dans la création de sites modernes, performants et adaptés à vos besoins, je m'engage à donner vie à vos idées en ligne. Découvrez ici mes projets, compétences et collaborations. Bonne visite !"</p>
                                <div className="custom-btn-group mt-4">
                                <a href="#project" className="btn mr-lg-2 custom-btn"> Projets</a>
                                <a href="#contact" className="btn custom-btn custom-btn-bg custom-btn-link">Obtenez un devis gratuit</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-12">
                            <div className="about-image svg">
                                <img src="images/undraw/vector.jpg" className="img-fluid" alt="svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
     );
}
 
export default About;