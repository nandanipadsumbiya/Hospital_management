import React from 'react';

function ContactUs() {
    return (
        <>
            <div className="container" style={{ maxWidth: '800px', height:"auto",margin: '50px auto', padding: '20px', border: '3px solid #ccc', borderRadius: '8px' }}>
                <h2 className="text-center m-4">Contact Us</h2>

                <div className="row">
                    <div className="col">
                        <h4>Address</h4>
                        <p>
                            Hospital Management System<br />
                            123 Health Street, <br />
                            Wellness City, <br />
                            Careland, 56789
                        </p>
                    </div>
                    <div className="col">
                        <h4>Phone Numbers:</h4>
                        <p>

                            Emergency: +1 (800) 123-4567<br />
                            General Inquiries: +1 (800) 987-6543<br />
                            Appointment Booking: +1 (800) 234-5678<br />
                        </p>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            <h4>Email:</h4>
                            <p>
                                For inquiries: info@healthcarehospital.com<br />
                                For appointments: appointments@healthcarehospital.com
                            </p>
                        </div>

                        <div className='col'>
                            <h4>Working Hours:</h4>
                            <p>
                                Monday to Friday: 8:00 AM - 8:00 PM<br />
                                Saturday: 9:00 AM - 5:00 PM<br />
                                Sunday: Closed<br />
                                Emergency services: Available 24/7<br />
                            </p>
                        </div>

                        <div className='row text-center mt-3'>
                            <h4>Social Media:</h4>
                            <p>
                                Facebook: HealthCare Hospital
                                Twitter: @HealthCareHosp
                                Instagram: @HealthCareHospital
                            </p>
                        </div>
                        

                    </div>
                </div>
            </div>

<div className='row p-5'>


            <div className='row mb-2'>
                1.Appointment Scheduling
                To schedule an appointment with one of our healthcare professionals, please call our appointment line at [Appointment Phone Number] or use our online appointment booking system on our website. We recommend booking in advance to ensure you secure your preferred date and time.
            </div>
            <div className='row mb-2'>
                2.Emergency Services
                In case of an emergency, please call [Emergency Contact Number] or visit our emergency department immediately. Our team is available 24/7 to provide urgent care to those in need.


            </div>
            <div className='row mb-2'>
                3.Feedback and Suggestions
                We value your feedback! If you have any suggestions or comments about our services, please feel free to share them with us. Your insights help us improve and provide the best possible care to our patients. You can send us an email or fill out the feedback form available at our reception.

            </div>
            <div className='row mb-2'>
                4.Follow Us
                Stay connected with us through our social media channels for the latest updates, health tips, and community events:

                Facebook: [Facebook Link]
                Twitter: [Twitter Link]
                Instagram: [Instagram Link]
            </div>
            </div>

        </>


    );
}


export default ContactUs;