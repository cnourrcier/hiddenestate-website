import React from 'react';
import './MissionPage.css';

const MissionPage = () => {

    return (
        <section className="mission">
            <h1 className="mission__title">
                Our Mission 
            </h1>
            <p>
                Our Mission is the restoration and preservation of historical properties created by master architects for extraordinary individuals.  Through adaptive reuse, we return these properties back to their formal glory while creating a space that is highly desirable and economically viable.  
            </p>
            <h2>Hidden Gable</h2>
            <div className="hidden-gable__wrapper">
                <div className="hidden-gable__content">
                    <p>
                        Named for its gable roof hidden behind the hedges in Old Las Palmas.  Restoration is an on-going process with planned projects during the summer months.  We are lucky to have photos from the time the home was completed for guidance.  Future plans include restoring the courtyard on the South side, uncovering the original terrazzo floors and restoring the original tile work in the bathrooms.  Yes … under the paint and existing tile is the original tile which was discovered during the 2022 remodel.  
                    </p>
                </div>
                <div className="hidden-gable__content-image">
                    <img 
                        src="/img/mission-img1.jpg" 
                        alt="Restoration property" 
                        className="hidden-gable__image"
                    />
                </div>
            </div>
            <h2>Nourrcier Family </h2>
            <p>Chuck & Karen Nourrcier – Specializing in restoration and adaptive reuse of Queen Anne, Craftsman and Spanish Architectures.</p>
            <p>Long Beach Heritage Preservation Awards: 2020, 2024</p>
            <p>Landmark and Mills Acts: 711 Daisy Ave, 909 Elm Ave, 344 W 8th </p>
            <p>Torrey House: 4/23/2018, SG100002319</p>
            <ul>
                <li>National Register of Historical Places</li>
                <li>California Register of Historical Resources</li>
            </ul>
            <div className="mission__img-grid">
                <img 
                    src="/img/mission-img1.jpg" 
                    alt="Restoration property" 
                    className="hidden-gable__image"
                />
                <img 
                    src="/img/mission-img2.jpg" 
                    alt="Restoration property" 
                    className="hidden-gable__image"
                />
                <img 
                    src="/img/mission-img3.jpg" 
                    alt="Restoration property" 
                    className="hidden-gable__image"
                />
                <img 
                    src="/img/mission-img4.jpg" 
                    alt="Restoration property" 
                    className="hidden-gable__image"
                />
            </div>
        </section>
    )
}

export default MissionPage;