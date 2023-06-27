import { useAppContext } from '../providers/app-provider'
import QuestDetail from './QuestDetail'

const QuestTypeContainer = () => {
  const { questTypes, setQuestModal } = useAppContext()

  return (
    <div className="flex flex-col gap-3">
      <div className="py-3">
        <span className="text-xl font-bold">Quest types</span>
      </div>
      <div className={'border border-blue-700'} />
      <div>
        <button
          className="w-full rounded bg-blue-500 py-2 text-white"
          onClick={() => setQuestModal && setQuestModal({ name: '' })}
        >
          Add new quest type
        </button>
      </div>
      <div className="flex flex-1 flex-col gap-2">
        {questTypes &&
          questTypes.length > 0 &&
          questTypes.map((quest, index) => (
            <QuestDetail id={index} quest={quest} key={index} />
          ))}
      </div>
    </div>
  )
}

export default QuestTypeContainer
