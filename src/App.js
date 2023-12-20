import React from "react";
import NavBar from "./components/NavBar.js";
import bannerImage from "./icons/banner.jpg";
import "./Style.css";

function App() {
    return (
        <div className="content">
            <header id="banner">
                <img src={bannerImage} alt="Banner"></img>
            </header>
            <NavBar />
            <div className="sections">
                <section id="about">
                        <h2>About</h2>
                        <p>
                            At HNS Canvas, based in Bathurst, we are proud to
                            share our story and the extensive range of services
                            we offer. Since our establishment in 1982, we have
                            been passionately dedicated to manufacturing
                            custom-designed textile products, not only for the
                            Bathurst and Central West region but also for
                            customers across New South Wales. With over 40 years
                            of history in the industry, our expertise enables us
                            to confidently handle projects of any scale and
                            complexity.
                            <br />
                            <br />
                            Our product portfolio is diverse, ensuring that we
                            can cater to a wide range of covering needs for
                            homes, businesses, vehicles, caravans, trucks, and
                            boats. Specializing in shade sails, truck tarps, and
                            annexes, along with providing trailer hire services,
                            we have developed a strong reputation in the
                            Bathurst area and beyond. Our four decades of
                            experience in custom manufacturing and repair
                            positions us as a reliable and skilled provider in
                            this field.
                            <br />
                            <br />
                            At HNS Canvas, we are committed to delivering
                            high-quality services at competitive prices. We
                            welcome jobs of all sizes, consistently focusing on
                            offering professional and reliable solutions that
                            are tailored to the specific needs of our clients.
                            This unwavering dedication to quality and customer
                            satisfaction solidifies our status as the go-to
                            specialist for bespoke textile solutions in the
                            region. Our experienced team is here to provide
                            expert assistance for all your textile covering
                            needs.
                        </p>
                </section>

                <section id="services">
                    <h2>Services</h2>

                    <div className="card">
                        <div className="card-image">
                            <img src={bannerImage} alt="" />
                        </div>
                        <div className="card-info">
                            <h3>Custom Shade Sails</h3>
                            <p>
                                Tailored to each client's unique needs, our
                                custom shade sails offer both aesthetic appeal
                                and practical functionality. Perfect for
                                gardens, patios, or commercial spaces, these
                                sails provide effective sun protection while
                                enhancing outdoor aesthetics. We use
                                high-quality, durable materials to ensure
                                long-lasting performance and satisfaction.
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-info">
                            <h3>Vehicle Covers</h3>
                            <p>
                                Specializing in custom vehicle covers, we
                                provide protection for cars, motorcycles, and
                                recreational vehicles. Our covers are designed
                                to shield against weather elements, dust, and
                                debris, ensuring your vehicle remains in
                                pristine condition. We offer a range of
                                materials and designs to suit various vehicle
                                types and customer preferences.
                            </p>
                        </div>
                        <div className="card-image">
                            <img src={bannerImage} alt="" />
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={bannerImage} alt="" />
                        </div>
                        <div className="card-info">
                            <h3>Boat Canopies and Covers</h3>
                            <p>
                                Our boat canopies and covers are crafted to
                                offer maximum protection for your marine
                                investments. Whether it's a small fishing boat
                                or a large yacht, we provide bespoke solutions
                                that guard against harsh weather, UV rays, and
                                saltwater corrosion, ensuring your boat stays in
                                excellent condition.
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-info">
                            <h3>Truck Tarps and Curtains</h3>
                            <p>
                                We offer heavy-duty truck tarps and curtain
                                sides for the transport industry. These products
                                are designed to withstand the rigors of road
                                transport, providing durability and reliability.
                                They can be custom-fitted to any truck size,
                                ensuring secure and safe transportation of
                                goods.
                            </p>
                        </div>
                        <div className="card-image">
                            <img src={bannerImage} alt="" />
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={bannerImage} alt="" />
                        </div>
                        <div className="card-info">
                            <h3>Commercial Awnings</h3>
                            <p>
                                Enhance your business's curb appeal with our
                                custom commercial awnings. Perfect for
                                storefronts, cafes, and restaurants, these
                                awnings not only offer weather protection but
                                also serve as a branding tool. Available in
                                various styles and colors, they can be designed
                                to align with your business's aesthetic and
                                branding.
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-info">
                            <h3>Residential Awnings and Blinds</h3>
                            <p>
                                We provide a range of residential awnings and
                                blinds that add style and functionality to any
                                home. These products offer sun protection,
                                energy efficiency, and privacy, while also
                                contributing to the aesthetic value of your
                                home. Available in a variety of designs and
                                materials, they can be tailored to fit any
                                window or outdoor space.
                            </p>
                        </div>
                        <div className="card-image">
                            <img src={bannerImage} alt="" />
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={bannerImage} alt="" />
                        </div>
                        <div className="card-info">
                            <h3>Outdoor and Camping Gear Repair</h3>
                            <p>
                                Beyond manufacturing, we offer repair services
                                for outdoor and camping gear. From fixing tears
                                in tents to replacing zippers on backpacks, our
                                team can extend the life of your outdoor
                                equipment, ensuring it's ready for your next
                                adventure.
                            </p>
                        </div>
                    </div>
                </section>

                <section id="contact-us">
                    <h2>Contact Us</h2>

                    <div id="contact-card">
                        <div id="contact-info">
                            <div id="info-map">
                                <img alt="" />
                            </div>

                            <div id="info-details">
                                <div id="details-phone">
                                    <img alt="" />
                                    <p>+612 6332 1140</p>
                                </div>

                                <div id="details-email">
                                    <img alt="" />
                                    <p>harold@hnscanvas.com.au</p>
                                </div>

                                <div id="details-fax">
                                    <img alt="" />
                                    <p>+612 6332 1140</p>
                                </div>

                                <div id="details-address">
                                    <img alt="" />
                                    <p>Bathurst, New South Wales, 2000</p>
                                </div>
                            </div>
                        </div>

                        <div id="contact-message">
                            <div id="message-text">
                                <p>Have questions or want a quote?</p>
                            </div>

                            <button id="message-button">Send an Email</button>
                        </div>
                    </div>
                </section>
            </div>

            <footer></footer>
        </div>
    );
}

export default App;
