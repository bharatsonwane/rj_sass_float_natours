import React, { Fragment } from 'react'

import nat_1_large from "src/assets/img/nat-1-large.jpg"
import nat_2_large from "src/assets/img/nat-2-large.jpg"
import nat_3_large from "src/assets/img/nat-3-large.jpg"


function SectionAbout() {

    return (
        <Fragment>
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Exciting tours for adventurous people
                </h2>
            </div>

            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur
                        libero repellat quis consequatur
                        ducimus quam nisi exercitationem omnis earum qui.
                    </p>

                    <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum
                        nam.
                    </p>

                    <a href="#" className="btn-text">Learn more &rarr;</a>
                </div>
                <div className="col-1-of-2">
                    <div className="composition">
                        <img src={nat_1_large} alt="Photo 1" className="composition__photo composition__photo--p1" />
                        <img src={nat_2_large} alt="Photo 2" className="composition__photo composition__photo--p2" />
                        <img src={nat_3_large} alt="Photo 3" className="composition__photo composition__photo--p3" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SectionAbout
