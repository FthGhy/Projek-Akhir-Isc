import React from 'react'

export default function About() {
  return (
   <>
   <div className="text-white bg-black">
   <section id="aboutUs">
          <div className="layar-dalam text-center m ">
            <h3 className="text-3xl font-bold">About Us</h3>
            <p className="ringkasan">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, cupiditate.
            </p>
            <div class="konten-isi">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit,
                iure vero soluta exercitationem deleniti possimus cupiditate
                autem facilis magni illum?
              </p>
            </div>
          </div>
        </section>
        <section className="abuabu " id="support">
          <div className="layar-dalam support flex px-32 ml-24 text-white text-center items-center">
            <div className="w-96  ">
              <img src="images/matahari.png " />
              <h6 className="condition text-1xl font-bold  ">In Every Condition</h6>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                illum recusandae nostrum. Obcaecati, quos vel.
              </p>
            </div>
            <div className="w-96">
              <img src="images/tas.png" />
              <h6 className=" team text-1xl  font-bold">Professional Team</h6>
              <p className="py-">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, ea voluptatem corporis molestias obcaecati
                deleniti.
              </p>
            </div>
            <div className="w-96">
              <img src="images/kompas.png" />
              <h6>Expert For Learner</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, ea voluptatem corporis molestias obcaecati
                deleniti.
              </p>
            </div>
          </div>
        </section>
        <section class="quote">
          <div class="layar-dalam">
            <p>Semarang terbuat dari rindu,citylight dan Gheya.</p>
          </div>
        </section>
        </div>
   
   </>
  )
}
