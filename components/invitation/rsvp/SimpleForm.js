import { Fade } from "react-reveal"

const SimpleForm = ({
  subTitle = "Konfirmasi kehadiranmu di sini!",
  name,
  setName,
  address,
  setAddress,
  status,
  setStatus,
  error,
  succcess,
  handleSubmit,
  isLoading,
  bgColor = "bg-gray-600",
  textColor = "text-gray-200",
  buttonBgColor = "bg-gray-600",
  buttonTextColor = "text-gray-200",
  formBgColor = "bg-gray-200",
  formBorder,
  padding,
  children,
  buttonDisable
}) => {
  return (
    <div
      id="rsvp"
      className={`${bgColor} ${textColor} relative py-16 px-8 md:px-32 md:py-72 ${padding}`}
    >
      {children}

      <div className="max-w-xl m-auto">
        <Fade bottom>
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="font-honey-carrot text-4xl mb-3">RSVP</div>
            <div className="text-center">{subTitle}</div>
          </div>
        </Fade>
        <Fade bottom>
          <div
            className={`${formBgColor} ${formBorder} mx-auto shadow-blur-20 p-6 rounded-xl`}
          >
            <form onSubmit={handleSubmit}>
              <div className="editor flex flex-col  max-w-2xl mt-6">
                {error && (
                  <div className="mb-2 font-body text-red-800">{error}</div>
                )}
                {succcess && (
                  <div className="mb-2 font-body text-green-800">
                    {succcess}
                  </div>
                )}
                <input
                  className="bg-gray-100 border border-gray-300 p-2 mb-4 outline-none font-body rounded-md"
                  spellCheck="false"
                  placeholder="Nama"
                  value={name}
                  onChange={setName}
                  type="text"
                />
                <input
                  className="bg-gray-100 border border-gray-300 p-2 mb-4 outline-none font-body rounded-md"
                  spellCheck="false"
                  placeholder="Alamat"
                  value={address}
                  onChange={setAddress}
                  type="text"
                />
                <select
                  value={status}
                  onChange={setStatus}
                  className="bg-gray-100 border border-gray-300 mb-4 p-2 w-full rounded-md text-gray-900"
                >
                  <option defaultChecked value="">
                    - Pilih salah satu -
                  </option>
                  <option value="Hadir">Hadir</option>
                  <option value="Tidak Hadir">Tidak Hadir</option>
                  <option value="Ragu-ragu">Ragu-ragu</option>
                </select>
                <button
                  type="submit"
                  disabled={buttonDisable}
                  className={`btn ${buttonTextColor} ${buttonBgColor} py-2 px-4 font-body cursor-pointer ml-auto mt-4 flex justify-center items-center rounded-md`}
                >
                  {isLoading && (
                    <div className="animate-spin mr-3">
                      <AiOutlineLoading3Quarters />
                    </div>
                  )}
                  Kirim Konfirmasi
                </button>
              </div>
            </form>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default SimpleForm
