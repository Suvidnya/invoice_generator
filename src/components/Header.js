
export default function Header({ handlePrint}) {

  return (
    <>
      <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
        <div>
          <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">
            Invoice
          </h1>
        </div>

        <div>
        
          <ul className="flex items-center justify-between flex-wrap">
            <li>

            
              <button
                onClick={handlePrint}
                className="bg-green-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-green-500 hover:bg-transparent hover:text-gray-500 transition-all hover:border-gray-500 duration-300"
              >
                Print / Download
              </button>
            
            </li>
          </ul> 
              
        </div>
      </header>
    </>
  )
}
