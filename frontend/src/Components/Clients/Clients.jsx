import React from "react";
import "./_Clients.scss";
import card1 from "../../media/t1.png";
import card2 from "../../media/t2.png";
import card3 from "../../media/t3.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
const Clients = () => {
  return (
    <div className="clientsSection">
      <div className="container-fluid">
        <div className="clientTitle">
          <h1>What our Client’s Say about us</h1>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <Swiper
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
            <SwiperSlide>
            <div className="col-4 card">
            <div className="cardImage">
              <img src={card1} alt="" />
            </div>
            <article>
              <p>
                Accessories Here you can find the best computer accessory for
                your laptop, monitor, printer, scanner, speaker, projector,
                hardware and more. laptop accessory
              </p>
              <div className="cardFooter">
                <h4>Mark Alviro Wiens</h4>
                <span>CEO at Google</span>
              </div>
            </article>
          </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="col-4 card">
            <div className="cardImage">
              <img src={card2} alt="" />
            </div>
            <article>
              <p>
                Accessories Here you can find the best computer accessory for
                your laptop, monitor, printer, scanner, speaker, projector,
                hardware and more. laptop accessory
              </p>
              <div className="cardFooter">
                <h4>Mark Alviro Wiens</h4>
                <span>CEO at Google</span>
              </div>
            </article>
          </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="col-4 card">
            <div className="cardImage">
              <img src={card3} alt="" />
            </div>
            <article>
              <p>
                Accessories Here you can find the best computer accessory for
                your laptop, monitor, printer, scanner, speaker, projector,
                hardware and more. laptop accessory
              </p>
              <div className="cardFooter">
                <h4>Mark Alviro Wiens</h4>
                <span>CEO at Google</span>
              </div>
            </article>
          </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="col-4 card">
            <div className="cardImage">
              <img src={card1} alt="" />
            </div>
            <article>
              <p>
                Accessories Here you can find the best computer accessory for
                your laptop, monitor, printer, scanner, speaker, projector,
                hardware and more. laptop accessory
              </p>
              <div className="cardFooter">
                <h4>Mark Alviro Wiens</h4>
                <span>CEO at Google</span>
              </div>
            </article>
          </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="col-4 card">
            <div className="cardImage">
              <img src={card2} alt="" />
            </div>
            <article>
              <p>
                Accessories Here you can find the best computer accessory for
                your laptop, monitor, printer, scanner, speaker, projector,
                hardware and more. laptop accessory
              </p>
              <div className="cardFooter">
                <h4>Mark Alviro Wiens</h4>
                <span>CEO at Google</span>
              </div>
            </article>
          </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="col-4 card">
            <div className="cardImage">
              <img src={card3} alt="" />
            </div>
            <article>
              <p>
                Accessories Here you can find the best computer accessory for
                your laptop, monitor, printer, scanner, speaker, projector,
                hardware and more. laptop accessory
              </p>
              <div className="cardFooter">
                <h4>Mark Alviro Wiens</h4>
                <span>CEO at Google</span>
              </div>
            </article>
          </div>
            </SwiperSlide>
        
        </Swiper>
      </div>
    </div>
  );
};

export default Clients;
