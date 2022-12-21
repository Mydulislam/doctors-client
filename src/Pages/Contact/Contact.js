import React from 'react';
import contactBg from '../../assets/images/appointment.png'
const Contact = () => {
    return (
        <section className='mt-32'
        style={
            {background: `url(${contactBg})`}
        }
        >
            <div className='text-center'>
                <h3 className='text-primary font-bold pt-6'>Contact us</h3>
                <h1 className='text-4xl text-white'>Stay connected with us</h1>
            </div>
            <div className="hero">
                <div className="hero-content w-96 flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input type="text" placeholder="subject" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Message</span>
                                </label>
                                <textarea className="textarea textarea-bordered" placeholder="Your message"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;