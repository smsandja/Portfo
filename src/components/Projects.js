import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Projects = () => {
    const projets = [
        {id: 1, title: "Mangadex", img: '/images/project/project01.png'},
        {id: 2, title: "GameBoy", img: '/images/project/project02.png'},
        {id: 3, title: "Yuhou-blog", img: '/images/project/project03.png'},
        {id: 4, title: "Samy-blog", img: '/images/project/project04.png'},
        {id: 5, title: "Samy-blog", img: '/images/project/project05.png'}
    ];
    return ( 
        <div className="projects">
            <section className="project py-5" id="project">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-11 text-center mx-auto col-12">
                            <div>
                                <h2 className="mb-10">Les differents projets que j'ai realisé</h2>
                                <Carousel className="w-85">
                                    {projets.map((projet)=>(
                                        <div key={projet.id}>
                                            <img src={projet.img} alt="img pro" />
                                           
                                        </div>
                                    ))}
  
                                </Carousel>              
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
       
     );
}
 
export default Projects;