import type * as types from "@constants/types";
import { AddButton, RemoveButton } from "~/components/pages/buttons";


const Awards = ({
  awardsList,
  setAwardsList
}: {
  awardsList: types.awardsListType,
  setAwardsList: (awardsList: types.awardsListType) => void
}) => {
  
  return <>

    <div className="awards">
      <h1 className="text-xl mt-10">Awards</h1>
      <hr className="border-none bg-gray-300 h-0.5 mt-2 mb-2" />

      <div className="mt-10 bg-gray-300 pt-5 p-3 rounded-xl">
        {awardsList.map((award, index) => (
          <div key={index} className="flex flex-row">

            <RemoveButton
              func={() => {
                const awardsListCopy = [...awardsList];
                awardsListCopy.splice(index, 1);
                setAwardsList(awardsListCopy);
              }}

            />

            <input
              type="text"
              id={"award" + String(index)}
              required
              value={award}
              placeholder={"Award " + String(index)}
              className="w-full mb-2 bg-gray-50
         text-gray-900 rounded-lg block p-2.5 outline-0"
              onChange={(e) => {
                const awardsListcopy = [...awardsList];
                awardsListcopy[index] = e.target.value;
                setAwardsList(awardsListcopy);
              }}
            />
          </div>
        ))}

        <AddButton
          func={() => { setAwardsList([...awardsList, ""]) }}
        />

      </div>
    </div>
  </>
};

export default Awards;