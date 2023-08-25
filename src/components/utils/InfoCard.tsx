import { GrStackOverflow } from 'react-icons/gr';
import { FaClipboardList } from 'react-icons/fa';
import { PiChatsCircleLight } from 'react-icons/pi';
import { ImAttachment } from 'react-icons/im';
import { BiCalendar } from 'react-icons/bi';
import { DataSchema } from '../../schemas/dataSchema';

interface infoCard_Schema{
  data:DataSchema,
}

const InfoCard = ({data}:infoCard_Schema) => {
    return (
        <div className='bg-white p-2 space-y-3 rounded'>
            
            {/* client and host info */}
            <section className='flex justify-between'>
                <div className='inline-flex items-center gap-1'>
                    <img className="w-8 h-8 object-cover" src={data.client.img} alt=""/>
                    <h4 className='font-bold text-xs text-slate-600'>{data.client.name}</h4>
                </div>
                <div className='inline-flex items-center gap-1'>
                    <img className="w-8 h-8 object-cover" src={data.host.img} alt="" />
                    <h4 className='font-bold text-xs text-slate-600'>{data.host.name}</h4>
                </div>
            </section>

            {/* short detail */}
            <section className='flex justify-between'>
              <div className='inline-flex items-center gap-1.5'>
                <GrStackOverflow className="w-3 h-3 text-slate-500" />
                <p className='text-xs font-bold text-slate-500'>{data.details.slice(0,32)}...</p>
              </div>
              <div className='inline-flex items-baseline gap-1'>
                <FaClipboardList className="w-3 h-3 text-slate-500" />
                <p className='text-xs font-bold text-slate-500'>{data.task.completed}/{data.task.total}</p>
              </div>
            </section>

            {/* options */}
            <section className='flex items-center justify-between'>
              <img className="w-8 h-8 object-cover" src={data.client.img} alt="" />
              <img className="w-8 h-8 object-cover" src={data.host.img} alt="" />
              <p className='text-xs font-bold text-slate-500'>{data.participant}+</p>
              <div className='inline-flex items-center gap-1'>
                <PiChatsCircleLight className="w-4 h-4 text-slate-500" />
                <p className='text-xs font-bold text-slate-500'>{data.chat}</p>
              </div>
              <div className='inline-flex items-center gap-1'>
                <ImAttachment className="w-3 h-3 text-slate-500" />
                <p className='text-xs font-bold text-slate-500'>{data.attachment}</p>
              </div>
              <div className='inline-flex items-center gap-1'>
                <BiCalendar className="w-3 h-3 text-slate-500" />
                <p className='text-xs font-bold text-slate-500'>{data.date}</p>
              </div>
            </section>

        </div>
    );
};

export default InfoCard;
