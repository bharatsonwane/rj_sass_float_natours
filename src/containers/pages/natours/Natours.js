import React, { Fragment } from 'react'
import { allClass } from 'src/helper/customModuleClassMethod'  // allClass("globalClasses", "moduleClasses", moduleObjectFromModuleCss)}
import mdl from './natours.module.scss'

import Navigation from 'src/components/navbarMenu/Navigation'
import Header from 'src/components/header/Header'
import Footer from 'src/components/footer/Footer'
import Popup from 'src/components/popup/Popup'

import SectionAbout from './content/sectionAbout/SectionAbout'
import SectionFeatures from './content/sectionFeatures/SectionFeatures'
import SectionTours from './content/sectionTours/SectionTours'
import SectionStoires from './content/sectionStories/SectionStoires'
import SectionBook from './content/sectionBook/SectionBook'



function Natours() {

    return (
        <Fragment>
            <Navigation />
            <Header />
            <main>
                <section className={allClass("globalClasses", "section-about", mdl)}>
                    <SectionAbout />
                </section>

                <section className={allClass("", "section-features", mdl)}>
                    <SectionFeatures />
                </section>

                <section className={allClass("", "section-tours", mdl)} id="section-tours">
                    <SectionTours />
                </section>

                <section className={allClass("", "section-stories", mdl)}>
                    <SectionStoires />
                </section>

                <section className={allClass("", "section-book", mdl)}>
                    <div className="row">
                        <div className={allClass("", "book", mdl)}>
                            <div className={allClass("", "book__form", mdl)}>
                                <SectionBook />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <Popup />
        </Fragment>
    )
}

export default Natours
