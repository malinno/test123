import { useAppContext } from '../providers/app-provider'

interface QuestDetailProps {
  id: number
  quest: any
}
const QuestDetail = ({ id, quest }: QuestDetailProps) => {
  const { setQuestModal, setQuestTypes } = useAppContext()
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xl font-bold">Quest type: {quest.name}</span>
      <p>{quest.description}</p>
      <div className="flex gap-2">
        <button
          className="w-full py-2 bg-blue-500 rounded"
          onClick={() => {
            if (setQuestModal) {
              setQuestModal({
                id,
                ...quest
              })
            }
          }}
        >
          Edit Quest Type
        </button>
        <button
          className="w-full py-2 bg-blue-500 rounded"
          onClick={() => {
            if (setQuestTypes) {
              setQuestTypes((prep) =>
                prep.filter((x: any, i: number) => i != id)
              )
            }
          }}
        >
          Delete Quest Type
        </button>
      </div>
    </div>
  )
}

export default QuestDetail
