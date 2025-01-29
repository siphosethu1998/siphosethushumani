const SkillCard = ({title, skillArray}) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xl font-bold text-gray-700">{ title }</h3>
      <div className="flex gap-4 flex-1 flex-wrap">
        {
          skillArray.map(skill => {
            return <span className="bg-cyan-100 px-4 py-2 font-semibold w-fit rounded-full">{ skill }</span>
          })
        }
      </div>
    </div>
  );
}

export default SkillCard;