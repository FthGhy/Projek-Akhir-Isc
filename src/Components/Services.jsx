function ServiceItem({imageSrc, title, description}) {
    return (
      <div className="item w-72 px-10">
        <img src={imageSrc} alt="" />
        <div className="text-center">
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="">{description}</p>
        </div>
      </div>
    );
  }
  
  export default function Services() {
    return (
      <div className="text-gray-900 rounded dark:text-white bg-black dark:bg-gray-900 ">
        <div className="text-center">
          <h1 className="text-red-700 font-bold py-4">WHAT WE SERVE</h1>
          <h1 className="text-4xl font-bold text-white">
          Traveling Made Easy with Your <br /> Favourite Travel Partner
          </h1>
        </div>
  
        <div className=" flex justify-center text-white">
         <div className="service-1">
         <ServiceItem
          imageSrc="/images/Services-1.png"
          title="Easy To Order"
          description="Nikmati Kemudahan Perjalanan dengan Pengiriman Super Cepat dan Tepat Waktu!"
         />
         </div>
         <div className="service-2">
         <ServiceItem
          imageSrc="/images/Services-2.png"
          title="Fastest Delivery"
          description="Selalu Tepat Waktu, Selalu Lebih Cepat: Layanan Travel Terbaik untuk Anda!"
         />
          </div>
          <div className="service-3">
         <ServiceItem
          imageSrc="/images/Services-3.png"
          title="Best Quality"
          description="Kami Pastikan Anda Sampai Tepat Waktu dengan Layanan Travel yang Cepat dan Handal"
         />
         </div>
        </div>
      </div>
    );
  }