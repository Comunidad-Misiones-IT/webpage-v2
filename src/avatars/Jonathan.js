export default function Nata() {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-12">
      <div className="sm:flex sm:items-center px-6 py-4">
        <img
          className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full"
          src="https://avatars1.githubusercontent.com/u/60260218?s=400&u=25070dcdb0ca19ece66ea4227d244bb9ed186764&v=4"
          alt="Avatar Jonathan"
        />
        <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
          <p className="text-xl leading-tight">Jonathan Martin</p>
          <p className="text-sm leading-tight text-gray-600">@jonamartin</p>
          <div className="mt-4">
            <button className="text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal">
              Contactame
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
