

export default function MenuItem() {
  return (
   <>
    <div className="bg-pesan ">
        <div className=" text-center ">
          <div className="pesan">
            <span>Berpetualang Bersama Kami</span>
            <h1 className="text-8xl font-bold text-lime-100 text-center mb-10">
              Raja Ampat <br />
              Papua
            </h1>
          </div>
          <div>
            <section className=" booking bg-white py-20 flex">
              <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
                <div className="flex flex-wrap -mx-3 mb-6 gap-0">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Nama:
                    </label>
                    <input
                      type="text"
                      placeholder="Masukan Nama Anda"
                      name="name"
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Email:
                    </label>
                    <input
                      type="email"
                      placeholder="Masukan Email Anda"
                      name="email"
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Handphone:
                    </label>
                    <input
                      type="number"
                      placeholder="Masukan Nomor Anda"
                      name="phone"
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Alamat:
                    </label>
                    <input
                      type="text"
                      placeholder="Masukan Alamat Anda"
                      name="address"
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Tujuan:
                    </label>
                    <input
                      type="text"
                      placeholder="Masukan Tujuan Anda"
                      name="location"
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Berapa Orang:
                    </label>
                    <input
                      type="number"
                      placeholder="Jumlah Orang"
                      name="guests"
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Perjalanan:
                    </label>
                    <input
                      type="date"
                      name="arrivals"
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Kembali:
                    </label>
                    <input
                      type="date"
                      name="leaving"
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  value="Kirim"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Kirim
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
   </>
  )
}
