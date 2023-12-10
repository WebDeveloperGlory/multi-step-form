import { useState } from 'react'
import { sidebarMobile, sidebarDesktop } from './assets'
import './App.css'
import { AddOns, BillingPlans, PersonalInfo, Summary, Thanks } from './pages';
import { content } from './constants';

function App() {
  const [ display, setDisplay ] = useState("your info");
  const [ billingType, setBillingType ] = useState("monthly");
  const [ billing, setBilling ] = useState("");
  const [ addOns, setAddOns ] = useState([]);
  const section = [ "your info", "select plans", "add-ons", "summary", "thanks" ];

  const handleNext = ( current ) => {
    const index = section.indexOf(current) + 1;
    let disp;
    
    index !== section.length ? disp = section[index] : disp = section[3];

    setDisplay(disp);
  }
  const handleBack = ( current ) => {
    const index = section.indexOf(current) - 1;
    const disp = section[index];

    setDisplay(disp);
  }

  return (
    <div className='min-h-screen flex justify-start md:justify-center items-center flex-col bg-[#bfe2fd] relative w-screen'>
      <div className="bg-transparent relative md:bg-white md:flex md:p-4 md:w-[750px] md:h-[500px] rounded-lg">
        <div className='basis-[35%] relative flex justify-center'>
          <img src={sidebarMobile} alt="sidebar image" className='w-screen md:hidden' />
          <img src={sidebarDesktop} alt="sidebar image" className='hidden md:block w-full' />
          <div className='absolute top-0 p-4 lg:pl-0 mt-4 flex gap-4 md:gap-6 font-bold md:flex-col'>
            {
              section.map((disp, i) => i !== section.length-1 && (
                <div key={ disp } className={`flex gap-3 justify-start items-center`}>
                  <div 
                    onClick={() => setDisplay(disp)}
                    className={`rounded-full w-8 h-8 flex cursor-pointer justify-center items-center ${display === disp ? 'bg-[#bfe2fd] text-black': 'border-2 text-white'}`}
                  >
                    { i+1 }
                  </div>
                  <div className="md:flex flex-col justify-center items-start hidden uppercase">
                    <h1 className='font-light text-xs text-[#d6d9e6]'>Step { i+1 }</h1>
                    <h1 className='font-bold text-white text-sm'>{ disp }</h1>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className='bg-white mx-4 rounded-lg absolute top-[100px] w-[calc(100%-32px)] md:relative md:top-0 basis-[65%] md:mt-2 p-6'>
          { display === "your info" && <PersonalInfo />}
          { display === "select plans" && <BillingPlans billing={ billing } setBilling={ setBilling } billingType={ billingType } setBillingType={ setBillingType } />}
          { display === "add-ons" && <AddOns billingType={ billingType } addOns={ addOns } setAddOns={ setAddOns } />}
          { display === "summary" && <Summary billing={ billing } billingType={ billingType } addOns={ addOns } setDisplay={ setDisplay } />}
          { display === "thanks" && <Thanks />}

          { display !== 'thanks' && 
            <div className={`absolute bottom-0 pr-12 hidden w-full bg-white md:flex ${display === 'your info' ? 'justify-end' : 'justify-between'}`}>
              { display !== 'your info' && 
                  <button
                    onClick={ () => handleBack( display ) }
                    className='text-[#02295a] opacity-80 hover:opacity-100 hover:font-semibold'
                  >{ content.buttons[0] }</button>}
              <button
                onClick={ () => handleNext( display ) }
                className={`md:px-4 md:py-2 text-white rounded-md cursor-pointer ${ display === 'summary' ? 'bg-[#473dff] hover:bg-[#473dffea]' : 'bg-[#02295a] hover:bg-[#022a5ade]'}`}
              >{ display !== 'summary' ? content.buttons[1] : content.buttons[2] }</button>
            </div>
          }
        </div>
      </div>
      { display !== 'thanks' &&
        <div className={`absolute bottom-0 p-4 md:hidden w-full bg-white flex ${display === 'your info' ? 'justify-end' : 'justify-between'}`}>
          { display !== 'your info' && 
              <button
                onClick={ () => handleBack( display ) }
                className='text-[#02295a] opacity-80'
              >{ content.buttons[0] }</button>}
          <button
            onClick={ () => handleNext( display ) }
            className={`px-4 py-2 text-white rounded-md cursor-pointer ${ display === 'summary' ? 'bg-[#473dff]' : 'bg-[#02295a]'}`}
          >{ display !== 'summary' ? content.buttons[1] : content.buttons[2] }</button>
        </div>
      }

      <div className="attribution absolute md:bottom-4 bottom-20">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">WebDeveloperGlory</a>.
      </div>
    </div>
  )
}

export default App
