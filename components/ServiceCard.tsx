import { FunctionComponent } from 'react';
import { Service } from '../types';

const ServiceCard: FunctionComponent<{ service: Service }> = ({
   service: { Icon, title, about },
}) => {
   // Create markup for the 'about' section
   function createMarkup() {
      return {
         __html: about,
      };
   };

   return (
      <div className='flex items-center p-2 space-x-4 '>
         {/* Adjust icon size using Tailwind CSS classes */}
         <Icon className='w-12 h-12 text-green' /> {/* Change w-12 h-12 to adjust size */}
         
         {/* Or adjust icon size using inline styles */}
         {/* <Icon style={{ width: '32px', height: '32px' }} className="text-green" /> */}
         
         <div>
            <h6 className='font-bold'>{title}</h6>
            <p dangerouslySetInnerHTML={createMarkup()} />
         </div>
      </div>
   );
}

export default ServiceCard;