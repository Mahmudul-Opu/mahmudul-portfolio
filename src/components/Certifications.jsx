import {
    certifications
} from "../data/portfolioData.js";


function Certifications() {
    return (
        <section className="section">

            <div className="section-heading">

                <p>CERTIFICATIONS</p>

                <h2>
                    Continuous learning.
                </h2>

            </div>


            <div className="cert-grid">

                {certifications.map(
                    (certificate) => (

                        <article
                            className="cert-card"
                            key={
                                certificate.title
                            }
                        >

                            <span>
                                {
                                    certificate.year
                                }
                            </span>

                            <h3>
                                {
                                    certificate.title
                                }
                            </h3>

                            <p>
                                {
                                    certificate.issuer
                                }
                            </p>

                        </article>

                    )
                )}

            </div>

        </section>
    );
}


export default Certifications;