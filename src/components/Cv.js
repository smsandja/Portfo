const Cv = () => {
    return ( 
        <div className="cv">
            <section className="resume py-5 d-lg-flex justify-content-center align-items-center" id="resume">
                <div className="container p-5">
                <h2 className="text-center text-5xl font-bold mb-4">Mon parcours</h2>
                    <div className="row">
                        <div className="text-sm col-lg-6 col-12">
                        <h3 className="mb-4 text-info text-3xl font-bold">Experiences</h3>
                            <div className="timeline">
                                <div className="timeline-wrapper">
                                    <div className="timeline-yr">
                                        <span>Freelance</span>
                                    </div>
                                    <div className="timeline-info">
                                        <h5><span>Développeur front/fullstack</span><small>Build IT(2023-Aujourd'hui)</small></h5>
                                        <p>
                                                <li>Accompagnement à la digitalisation (Analyse de projets et rédactions des cahiers de charges)</li>
                                                <li>Développement et maintenance de sites web</li>
                                                <li>Conception de maquettes</li>
                                        </p>
                                    </div>
                                </div>
                                <div className="timeline-wrapper">
                                    <div className="timeline-yr">
                                        <span>CDI</span>
                                    </div>
                                    <div className="timeline-info">
                                        <h5><span>Informaticien - chef section CIPLEV OTI 2</span><small>CIPLEV-MSPC(2020-Aujourd'hui)</small></h5>
                                        <p>
                                        <li>Chef section CIPLEV OTI2, responsable de la mise en œuvre du programme de
                                        prévention et de lutte contre extrémisme violent : Gestion des données, gestion des
                                        besoins et exigences du CIPLEV auprès des acteurs locaux et partenaires (Plan
                                        International, OIM, CEJP). </li>
                                        <li>Mise en place d’une application de gestion et suivi des sensibilisations dans l’OTI </li>
                                        <li>Mise en place d’une application de gestion des réservations du centre des jeunes de
                                        Barkoissi pour le compte de la mairie de l’OTI2</li>
                                        <li>Gestion des données de vaccination contre la Covid 19 pour le compte du CHP de Mango
                                        </li>
                                        <li>Support IT</li>
                                        </p>
                                    </div>
                                </div>

                                <div className="timeline-wrapper">
                                    <div className="timeline-yr">
                                        <span>CDD</span>
                                    </div>
                                    <div className="timeline-info">
                                        <h5><span>Développeur front-end</span><small>Digiket-Afrik(Mars 2019- Aout 2019)</small></h5>
                                        <p> 
                                            <li>Accompagnement à la digitalisation (Analyse de projets et rédactions des cahiers de charges)</li>
                                            <li>Développement et maintenance de sites web</li>
                                            <li>Conception de maquettes</li>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12">
                        <h3 className="mb-4 mobile-mt-2 text-warning text-3xl font-bold">Formations</h3>

                            <div className="timeline">
                                <div className="timeline-wrapper">
                                    <div className="timeline-yr">
                                        <span>2016</span>
                                    </div>
                                    <div className="timeline-info">
                                <h5><span>BAC D</span><small>Lycée Moderne le Jourdain"</small></h5>
                                        <p>Mathématique et science de la nature, </p>
                                    </div>
                                </div>

                                <div className="timeline-wrapper">
                                    <div className="timeline-yr">
                                        <span>2018</span>
                                    </div>
                                    <div className="timeline-info">
                                        <h5><span>BTS en Informatique de Gestion</span><small>Ecole Superieure des Affaires(ESA)</small></h5>
                                        <p>Thème de soutanence "Gestion et suivi des stages : Cas de Radio Lomé "</p>
                                    </div>
                                </div>
                                
                                <div className="timeline-wrapper">
                                    <div className="timeline-yr">
                                        <span>2019</span>
                                    </div>
                                    <div className="timeline-info">
                                        <h5><span>Licence en Génie Logiciel</span><small>ESA</small></h5>
                                        <p>Thème de soutanence "Mise en place d'une application de gestion d'une boutique de ventes en ligne : Cas de Balouki Shop "</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default Cv;