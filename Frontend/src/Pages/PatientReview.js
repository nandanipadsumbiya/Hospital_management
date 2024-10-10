import React from 'react';
import './PatientReview.css';

export default function PatientReview() {
    return (
        <>
            <div className="text-center">
                <h1>Patient Review's</h1>
            </div>

            
            <div className="image-slider-container">
                <div className="image-slider">
                    <img
                        src="https://wp-global-media.s3.eu-central-1.amazonaws.com/wp-content/uploads/sites/6/2020/10/Untitled-design-1.jpg"
                        alt="Patient Review 1"
                    />
                    <img
                        src="https://levohealth.com/wp-content/uploads/2020/06/m-glad-to-see-you-doing-well-picture-id1152844782.jpg"
                        alt="Patient Review 2"
                    />
                    <img
                        src="https://i.guim.co.uk/img/static/sys-images/Observer/Pix/pictures/2015/1/19/1421668721179/Physician-reveal-thyself--011.jpg?width=465&dpr=1&s=none"
                        alt="Patient Review 3"
                    />
                    <img
                        src="https://media.istockphoto.com/id/1373258972/photo/doctor-and-nurse-discussing-patient-case-at-hospital.jpg?s=612x612&w=0&k=20&c=66w1BODilD9zTBxjR-x5wGMUnpVreHhITHQV1Y88pNk="
                        alt="Patient Review 4"
                    />
                    <img
                        src="https://media.istockphoto.com/id/1206796363/photo/nurse-helping-senior-man-to-walk-at-the-hospital.jpg?s=612x612&w=0&k=20&c=AFHX0Cd3csVBOxtZf-uFH03qotoyHLxGTLHr6Ej-uvY="
                        alt="Patient Review 5"
                    />
                   
                </div>
            </div>

           
            <div className="row">
                <div className="col-6">
                    <img
                        src="https://www.aboutmyclinic.com/images/displayimage/88bb5672d1d983de13156f2e9ae54f52cd1e3d5e61711bb52e79b.jpeg?type=tes&size=500"
                        alt="Patient Review 8"
                        style={{ width: '700px', height: '400px' }}
                    />
                </div>
                <div className="col">
                    <img
                        src="https://cdn.prod.website-files.com/64b92de9ad5a6e90a1e6c597/65e84175d310de685062627c_2keOJD4zHiPvOfzTSAtt3cIuV1pDp7sv3lFkHc6V_RSro_8-lm8soyiZ8wtWRyYAE3FgeLGDPPrpyIHqIf8nrNDocNcxWI04_MyAdOFtB1swigXc39V9Qxboei86UdI0i0lQokbnmELkzAx-0J46x3g.png"
                        alt="Patient Review 9"
                        style={{ width: '700px', height: '400px' }}
                    />
                </div>
            </div>
        </>
    );
}
