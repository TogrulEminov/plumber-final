import React from "react";
import "./_Message.scss";
import { BsChevronRight } from "react-icons/bs";
const Message = () => {
  return (
    <div className="messageSection">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 messageMap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48446.47742109274!2d47.6950831359742!3d40.63198054951091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4039042a8c2aea19%3A0x73feb3e062666891!2sGoychay%2C%20Azerbaijan!5e0!3m2!1sen!2s!4v1674910893869!5m2!1sen!2s"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-6 messageInputs">
            <form>
              <div className="allInput">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="allInput">
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="allInput">
                <textarea placeholder="Message"></textarea>
              </div>
              <div className="allInput">
                <button>
                  Send Message <BsChevronRight />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
