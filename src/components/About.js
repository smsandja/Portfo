import "../App.css";
const About = () => {
    return ( 
            <section className="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
                            <div className="about-text ">
                                <h5 className="text-info py-8 text-xl font-bold">Bienvenue sur <span className="mobile-block">mon portfolio !</span></h5>
                                <h1>
                                    <span className="mr-2 text-2xl font-bold" >Salut, je suis Sam</span>
                                </h1>
                                <h2 className="animated animated-text text-base p-2">
                                        <div className="animated-info">
                                            <span className="animated-item">Zakari SANDJA</span>
                                            <span className="animated-item">Développeur Web </span>
                                        </div>
                                </h2>
                                <p></p><p></p>
                                <p className="presentation mb-4"> Spécialisé dans la création de sites modernes, performants et adaptés à vos besoins, je m'engage à donner vie à vos idées en ligne. Découvrez ici mes projets, compétences et collaborations. Bonne visite !"</p>
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