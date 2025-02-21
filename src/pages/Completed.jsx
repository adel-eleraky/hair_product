import React, { useEffect } from 'react'
import "./Completed.css"
import ReactPixel from 'react-facebook-pixel';

function Completed() {

    useEffect(() => {
        ReactPixel.track("FormSubmissionSuccess"); // Custom event for form submission success
        console.log("Meta Pixel tracked: FormSubmissionSuccess");
    }, []);

    return (
        <div className='vh-100 vw-100 completed_order d-flex justify-content-center align-items-center text-white ' >
            <h3 className="fs-2 text-center w-75"> تم تسجيل بياناتك بنجاح, سيتم التواصل معك فى أقرب وقت </h3>
        </div>
    )
}

export default Completed
