import Modal from '../utils/modal'
import { useAppContext } from '../providers/app-provider'
import { useEffect, useState } from 'react'

const ModifyQuestModal = () => {
  const { questModal, setQuestModal, setQuestTypes } = useAppContext()

  const defaultData = {
    name: '',
    dataType: 'string',
    description: ''
  }
  const [data, setData] = useState({ ...defaultData, ...questModal })

  useEffect(() => {
    setData({ ...defaultData, ...questModal })
  }, [questModal])

  const onClick = () => {
    if (questModal.id != undefined) {
      if (setQuestTypes) {
        setQuestTypes(
          (prep: { name: string; dataType: string; description: string }[]) => {
            prep[questModal.id] = data
            return [...prep]
          }
        )
      }
    } else {
      if (setQuestTypes) {
        setQuestTypes((prep) => [...prep, ...[data]])
      }
    }
    if (setQuestModal) {
      setQuestModal(undefined)
    }
  }

  return (
    <Modal
      title={'Add Quest'}
      isOpen={!!questModal}
      onClose={() => setQuestModal && setQuestModal(undefined)}
      body={
        <div className="flex flex-col gap-3 p-5">
          <div className="flex items-center gap-3">
            <span className="w-1/4">TypeID</span>
            <input
              className="flex-1 px-3 py-1 border rounded"
              value={data.name}
              onInput={(e: any) =>
                setData((prep: any) => {
                  return {
                    ...prep,
                    name: e.target?.value
                  }
                })
              }
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="w-1/4">TypeData</span>
            <select
              className="flex-1 px-3 py-1 border rounded"
              value={data.dataType}
              onChange={(e: any) =>
                setData((prep: any) => {
                  return {
                    ...prep,
                    dataType: e.target?.value
                  }
                })
              }
            >
              <option value="string">string</option>
              <option value="number">number</option>
              <option value="boolean">boolean</option>
            </select>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-1/4">Description</span>
            <input
              className="flex-1 px-3 py-1 border rounded"
              value={data.description}
              onInput={(e: any) =>
                setData((prep: any) => {
                  return {
                    ...prep,
                    description: e.target?.value
                  }
                })
              }
            />
          </div>

          <button onClick={onClick}>Save</button>
        </div>
      }
    />
  )
}
export default ModifyQuestModal
