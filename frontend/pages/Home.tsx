import { url } from 'inspector';
import React from 'react';
import {Input, InputMoney} from '../components/form/Input'


const Home = () => {

    return (
        <div className="max-w-screen-sm bg-gray-800 overflow-hidden rounded-xl mt-40">
        <div className="flex">
          <div className="flex-none w-48 relative">
            <img src="https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-wrap">
              <h1 className="text-white font-bold flex-auto text-xl font-semibold">
                Welcome To Auto Purchaser
              </h1>

              <div className="w-full flex-none text-sm font-bold text-green-300 mt-2 text-xl">
                Over 10,000 Vehicle Types
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam architecto aspernatur eveniet in mollitia nisi nulla rerum vel. Expedita?
            </p>

            <div className="my-4 text-sm font-medium">

                <InputMoney type="money" name="purchase_price" label="Auto Purchase Price" onChange={() => null} text_light={true}/>
            </div>

          </form>
        </div>
      </div>
    )
}

export default Home
