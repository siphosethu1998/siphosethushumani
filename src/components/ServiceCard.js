import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServiceCard = ({title, description, faIcon}) => {
  return (
    <div className="flex flex-col gap-4 text-center items-center bg-white w-64 p-6 rounded-lg shadow-lg hover:-translate-y-2.5 hover:duration-300 ease-in-out duration-300">
      <FontAwesomeIcon icon={faIcon} className='w-14 h-12 text-primary' />
      <h3 className="text-gray-700 text-2xl font-bold">{ title }</h3>
      <p className="text-gray-500">{ description }</p>
    </div>
  );
}

export default ServiceCard;