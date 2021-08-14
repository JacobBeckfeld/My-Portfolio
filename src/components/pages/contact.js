import React from 'react';

const Contact = () => {
    return (
        <main>
            <div className="flex-row">
                <div className="col-4 mx-auto">
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">name</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Name Here"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact;