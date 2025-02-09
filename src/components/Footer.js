import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaLinkedin, FaGithub, FaHackerrank } from 'react-icons/fa';

const Footer = () => {
  return(
    <div id="contact" className="bg-desaturated-blue text-white w-full p-12 flex flex-col items-center gap-8">
      <h1 className="text-2xl font-bold">Contact</h1>
      <p>If you're interested in working together or have any questions, feel free to reach out!</p>
      <div className="flex flex-col gap-8 items-center">
        <ul className="flex flex-col gap-4 items-center">
          <li className="flex gap-4 items-center">
            <FaEnvelope />
            <a href="mailto:siphosethu1998@gmail.com" className='hover:underline'>siphosethu1998@gmail.com</a>
          </li>
          <li className="flex gap-4 items-center"><FaPhone /> 068 370 4441</li>
        </ul>
        <div className="flex gap-8 justify-center">
          <a 
            href="https://www.linkedin.com/in/siphosethu-shumani-0b9865163/" 
            className='flex flex-col gap-1 items-center hover:underline'
            rel="noreferrer"
            target="_blank" 
            >
            <FaLinkedin className='size-10 transition-colors hover:text-primary' /> Linkedin
          </a>
          <a 
            href="https://github.com/siphosethu1998" 
            className='flex flex-col gap-1 items-center hover:underline'
            target="_blank" 
            rel="noreferrer"
            >
              <FaGithub className='size-10 transition-colors hover:text-black' /> GitHub
          </a>
          <a 
            href="https://www.hackerrank.com/profile/siphosethu1998" 
            className='flex flex-col gap-1 items-center hover:underline'
            target="_blank" 
            rel="noreferrer"
            >
              <FaHackerrank className='size-10 transition-colors hover:text-green-400' /> HackerRank
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;