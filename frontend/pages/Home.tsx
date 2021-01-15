import React, { useState } from 'react';
import {Input, InputMoney, InputNumber} from '../components/form/Input'
import { useDispatch } from 'react-redux';
import {AutoCreate} from '../redux/actions/AutoActions';
import {AutoPurchase} from '../redux/actions/AutoActionsTypes';

const Home = () => {
    const [step, setStep] = useState(1);
    const [purchasePrice, setPurchasePrice] = useState('');
    const [autoMake, setAutoMake] = useState('');
    const [autoModel, setAutoModel] = useState('');
    const [yearlyIncome, setYearlyIncome] = useState('');
    const [creditScore, setCreditScore] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const dispatch  = useDispatch();

    const handleSubmit = () => {
      const data: AutoPurchase = {
        email,
        name,
        purchase_price: purchasePrice,
        auto_make: autoMake,
        auto_model: autoModel,
        yearly_income: yearlyIncome,
        credit_score: creditScore
      }

      dispatch(AutoCreate(data));
    }

    // Create variable to enable | disable buttons
    const disableNext =  purchasePrice !== '' &&
                      autoMake !== '' &&
                      autoModel !== '' && 
                      yearlyIncome !== '' &&
                      creditScore !== 0;

    const disableSubmit = name !== '' && email !== '';

    

    return (
      <div className="max-w-screen-sm bg-gray-800 overflow-hidden rounded-xl">
        <div className="flex">
          <div className="flex-none w-48 relative">
            { step ==  1 ?
              <img src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" /> :
              <img src="https://images.unsplash.com/photo-1550355291-bbee04a92027?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" />
            }
          </div>
          <div className="flex-auto p-6">
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
            {/* Step 1 */}
            {
              step === 1 &&
              <div className="my-4 text-sm font-medium flex flex-col space-y-4">
                  <InputMoney type="money" name="purchase_price" label="Auto Purchase Price" text_light={true}
                      cb={(e: React.ChangeEvent<HTMLInputElement>) => setPurchasePrice(e.target.value)} />
                  <div className="flex space-x-2">
                    <Input type="text" name="auto_make" label="Make" text_light={true}
                      cb={(e: React.ChangeEvent<HTMLInputElement>) => setAutoMake(e.target.value)} />
                    <Input type="text" name="auto_model" label="Model" text_light={true}
                      cb={(e: React.ChangeEvent<HTMLInputElement>) => setAutoModel(e.target.value)} />
                  </div>
                  <InputMoney type="text" name="yearly_income" label="Estimated Yearly Income" text_light={true}
                    cb={(e: React.ChangeEvent<HTMLInputElement>) => setYearlyIncome(e.target.value)} />
                  <InputNumber type="number" name="credit_score" label="Estimated Credit Score" text_light={true}
                    minNumber={0} maxNumber={850}
                    cb={(e: React.ChangeEvent<HTMLInputElement>) => setCreditScore(Number(e.target.value))}/>
                  <div className="flex justify-end pt-2">
                    {/* Check If The Button Should Be Disabled */}
                    {disableNext ?
                      <button className="w-full border border-white py-1 px-4 rounded-sm"
                        onClick={() => setStep(2)}>Next</button> :
                      <button className="w-full border border-white py-1 px-4 rounded-sm opacity-25 cursor-not-allowed"
                        disabled
                        >Next</button> 
                    }
                  </div>
              </div> 
            }
            {
              step === 2 &&
              <div className="my-4 text-sm font-medium flex flex-col space-y-4">
                  <Input type="text" name="name" label="Name" text_light={true}
                    cb={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
                  <Input type="text" name="email" label="Email" text_light={true}
                    cb={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
                  <div className="flex flex-col space-y-6 pt-2">
                    {disableSubmit ? 
                      <button className="w-full border border-white text-white py-1 px-4 rounded-sm"
                        onClick={handleSubmit}>Submit</button> :
                      <button className="w-full border border-white text-white py-1 px-4 rounded-sm opacity-25 cursor-not-allowed"
                        >Submit</button> 
                    }
                  </div>
              </div> 
            }
          </div>
        </div>
      </div>
    )
}

export default Home
