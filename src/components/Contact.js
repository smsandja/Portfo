const Contact = () => {
    return ( 
             <section className="contact py-5" id="contact">
                <div className="container p-5">
                    <div className="row">
                    <div className="col-lg-5 mr-lg-5 col-12">
                        <div className="google-map w-100">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m22!1m8!1m3!1d991.6043942692032!2d1.1736460385888123!3d6.208524371941429!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d6.208921699999999!2d1.1738096999999998!4m5!1s0x1023e1c113185419%3A0x3224b5422caf411d!2zTG9tw6k!3m2!1d6.129557699999999!2d1.2196502!5e0!3m2!1sfr!2stg!4v1733401019818!5m2!1sfr!2stg" title="localisation" width="400" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>

                        <div className="contact-info d-flex justify-content-between align-items-center py-4 px-lg-5">
                            <div className="contact-info-item">
                            <h3 className="mb-3 text-white">Dites bonjour</h3>
                            <p className="footer-text mb-0">+228 97 66 29 31</p>
                            <p><a href="mailto:hello@company.co">zaksandja@gmail.com</a></p>
                            </div>

                            <ul className="social-links">
                                <li><a href="#contact" className="uil uil-dribbble" data-toggle="tooltip" data-placement="left" title="Dribbble"></a></li>
                                <li><a href="#contact" className="uil uil-instagram" data-toggle="tooltip" data-placement="left" title="Instagram"></a></li>
                                <li><a href="#contact" className="uil uil-youtube" data-toggle="tooltip" data-placement="left" title="Youtube"></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6 col-12">
                        <div className="contact-form">
                        <h2 className="mb-4 text-4xl font-bold">Besoin d'un service ? Expliquez-nous !</h2>

                        <form action="" method="get">
                            <div className="row">
                            <div className="col-lg-6 col-12">
                                <input type="text" className="form-control" name="name" placeholder="Votre nom" id="name" />
                            </div>

                            <div className="col-lg-6 col-12">
                                <input type="email" className="form-control" name="email" placeholder="Email" id="email" />
                            </div>

                            <div className="col-12">
                                <textarea name="message" rows="6" className="form-control" id="message" placeholder="Message"></textarea>
                            </div>

                            <div className="ml-lg-auto col-lg-5 col-12">
                                <input type="submit" className="form-control submit-btn" value="Envoyer" />
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>

                    </div>
                </div>
            </section>

     );
}
 
export default Contact;