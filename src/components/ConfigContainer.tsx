import { useAppContext } from '../providers/app-provider'
import { IoAddOutline } from 'react-icons/io5'
import { BsTrashFill } from 'react-icons/bs'

const ConfigContainer = () => {
  const { assumptions } = useAppContext()
  return (
    <div className="flex flex-col gap-5">
      <button className="w-full py-4 text-white bg-green-500 rounded">
        Generate Quest
      </button>
      <button className="w-full py-2 text-white bg-gray-400 rounded">
        Export Configs
      </button>
      <button className="w-full py-2 text-white bg-gray-400 rounded">
        Import Configs
      </button>
      <button className="w-full py-2 text-white bg-gray-400 rounded">
        Reset configs to default
      </button>

      <div className={'border-b border border-blue-700'} />

      <span className="text-xl font-bold">User description</span>

      <textarea
        rows={3}
        className="min-h-[5rem] p-3 bg-gray-700 w-full focus-visible:outline-none"
      />

      <div className={'border-b border border-blue-700'} />

      <span className="text-xl font-bold">Assumption</span>

      <div className="flex gap-2">
        <input className="flex-1 px-3 bg-gray-700 rounded focus-visible:outline-none" />
        <button className="">
          <IoAddOutline className="w-[30px] h-[30px] rounded bg-green-500  p-1" />
        </button>
      </div>

      {assumptions &&
        assumptions.length > 0 &&
        assumptions.map((ass, index) => (
          <div className="flex items-center gap-2" key={index}>
            <span className="flex-1">{ass}</span>
            <button className="">
              <BsTrashFill className="w-[30px] h-[30px] rounded bg-red-600 p-2" />
            </button>
          </div>
        ))}
    </div>
  )
}

export default ConfigContainer
