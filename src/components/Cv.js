const Cv = () => {
    return ( 
        <div className="cv">
            <h2 className="text-center text-sm">Mon parcours</h2>
            <section className="resume py-5 d-lg-flex justify-content-center align-items-center" id="resume">
                <div className="container">
                    <div className="row">

                        <div className="text-sm col-lg-6 col-12">
                        <h3 className="mb-4 ">Experiences</h3>
                            <div className="timeline">
                                <div className="timeline-wrapper">
                                    <div className="timeline-yr">
                                        <span>2019</span>
                                    </div>
                                    <div className="timeline-info">
                                        <h5><span>Project Manager</span><small>Best Studio</small></h5>
                                        <p>Proin ornare non purus ut rutrum. Nulla facilisi. Aliquam laoreet libero ac pharetra feugiat. Cras ac fermentum nunc, a faucibus nunc.</p>
                                    </div>
                                </div>
                                <div className="timeline-wrapper">
                                    <div className="timeline-yr">
                                        <span>2018</span>
                                    </div>
                                    <div className="timeline-info">
                                        <h5><span>UX Designer</span><small>Digital Ace</small></h5>
                                        <p>Fusce rutrum augue id orci rhoncus molestie. Nunc auctor dignissim lacus vel iaculis.</p>
                                    </div>
                                </div>

                                <div className="timeline-wrapper">
                                    <div className="timeline-yr">
                                        <span>2016</span>
                                    </div>
                                    <div className="timeline-info">
                                        <h5><span>UI Freelancer</span></h5>
                                        <p>Sed fringilla vitae enim sit amet cursus. Sed cursus dictum tortor quis pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                                    </div>
                                </div>
                                
                                <div className="timeline-wrapper">
                                    <div className="timeline-yr">
                                        <span>2014</span>
                                    </div>
                                    <div className="timeline-info">
                                        <h5><span>Junior Designer</span><small>Crafted Co.</small></h5>
                                        <p>Cras scelerisque scelerisque condimentum. Nullam at volutpat mi. Nunc auctor ipsum eget magna consequat viverra.</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-6 col-12">
                        <h3 className="mb-4 mobile-mt-2">Formations</h3>

                            <div className="timeline">
                                <div className="timeline-wrapper">
                                    <div className="timeline-yr">
                                        <span>2017</span>
                                    </div>
                                    <div className="timeline-info">
                                <h5><span>Mobile Web</span><small>Master Design</small></h5>
                                        <p>Please tell your friends about Tooplate website. That would be very helpful. We need your support.</p>
                                    </div>
                                </div>

                                <div className="timeline-wrapper">
                                    <div className="timeline-yr">
                                        <span>2015</span>
                                    </div>
                                    <div className="timeline-info">
                                        <h5><span>User Interfaces</span><small>Creative Agency</small></h5>
                                        <p><a rel="nofollow" href="https://www.facebook.com/tooplate">Tooplate</a> is a great website to download HTML templates without any login or email.</p>
                                    </div>
                                </div>
                                
                                <div className="timeline-wrapper">
                                    <div className="timeline-yr">
                                        <span>2013</span>
                                    </div>
                                    <div className="timeline-info">
                                        <h5><span>Artwork Design</span><small>New Art School</small></h5>
                                        <p>You can freely use Tooplate's templates for your business or personal sites. You cannot redistribute this template without a permission.</p>
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