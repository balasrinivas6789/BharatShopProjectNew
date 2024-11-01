
function ChildForm({ id, removeChild }) {
    return (
      <div className="mt-4 px-[20px] rounded-xl w-[100%] h-[232px] overflow-hidden shadow-lg bg-[#f4f4f4] text-black">
        <div className="flex justify-between px-6 py-4">
          <div className="font-bold text-xl mb-2">Child {id}</div>
          <div>
            <button
              type="button"
              onClick={() => removeChild(id)}
              className="text-white h-[50px] bg-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300   text-lg px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 "
            >
              <span className="pe-3">-</span>
              Remove Child
            </button>
          </div>
        </div>
        <div className="px-6 pb-2">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <input
              id={`inline-radio-mr-${id}`}
              type="radio"
              value="mr"
              name={`inline-radio-group-${id}`}
              className="w-4 h-4"
            />
            mr
          </span>
          <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <input
              id={`inline-radio-miss-${id}`}
              type="radio"
              value="miss"
              name={`inline-radio-group-${id}`}
              className="w-4 h-4"
            />
            miss
          </span>
          <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mb-2">
            <input
              id={`inline-radio-mrs-${id}`}
              type="radio"
              value="mrs"
              name={`inline-radio-group-${id}`}
              className="w-4 h-4"
            />
            mrs.
          </span>
        </div>
        <div className="px-6 py-1 flex justify-between">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm mb-2"
              htmlFor={`first-name-${id}`}
            >
              Enter your first name
            </label>
            <input
              className="shadow appearance-none border border-gray-950 rounded-md w-full py-4 px-4 text-gray-700 text-lg leading-tight focus:outline-none focus:shadow-outline"
              id={`first-name-${id}`}
              type="text"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm mb-2"
              htmlFor={`last-name-${id}`}
            >
              Enter your last name
            </label>
            <input
              className="shadow appearance-none border border-gray-950 rounded-md w-full py-4 px-4 text-gray-700 text-lg leading-tight focus:outline-none focus:shadow-outline"
              id={`last-name-${id}`}
              type="text"
            />
          </div>
        </div>
      </div>
    );
  }
export default ChildForm;  