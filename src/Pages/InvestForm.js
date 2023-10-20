import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import '../Styles/InvestForm.css';

import BackerBalance from '../Components/BackerBalance';
import { prepareWriteContract, waitForTransaction, writeContract, readContract } from '@wagmi/core';
import testABI from '../abi/testABI';
import { useAccount } from 'wagmi';
//import { utils } from 'ethers';
//import { useSendTransaction, usePrepareSendTransaction } from 'wagmi'


function InvestForm() {
  
  const [currentTokenAmount, setCurrentTokenAmount] = useState(100);
  const [tokenAmount, setTokenAmount] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [popupVisible, setPopupVisible] = useState(false); // Initialize as false
  const id = 1 ; 

  const {address} = useAccount();
  console.log(address);
  const testABIAddress = '0xF4D9051Df835B8A97476D28486dF2b3FF00a95a7';

  const handleVerifyAndConfirmToken= async(e) => {
    const val = tokenAmount * 1e18 ;
    try {
      const { request } = await prepareWriteContract({
        abi: testABI,
        address: testABIAddress,
        functionName: 'donateToCampaign',
        args: ['0', id],
        account: address,
        value: val, 
      });
  
      const { hash } = await writeContract(request);
      const obj = await writeContract(request);
      console.log(obj);
      await waitForTransaction({
        hash,
      });
      alert(`Investment confirmed with hash ${hash}!`);
    } catch (error) {
      console.log(error)
    }
  };

  const handleTransactionIdChange = (e) => {
    setTransactionId(e.target.value);
  };

  const handleTokenAmountChange = (e) => {
    setTokenAmount(e.target.value);
    // Set the popupVisible state to true to display the popup
    //setPopupVisible(true);
  };

  function PopupMessage({ message, onClose }) {
    return (
      <div className="popup">
        <div className="popup-content">
          <p>{message}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }

  const getGoalTokenAmount = () => {
    let temp = 40;
    return temp;
  }

  const getCurrentTokenAmount = () => {
    let temp = 80;
    return temp;
  }

  return (
    <div className='landing-page'>
      <Navbar />
      <div className='investForm'>
      {!popupVisible &&
        <>
        <h3>Your Current Investable Token Amount is {<BackerBalance/>}</h3>
        <h3>The project goal Token Amount is {getGoalTokenAmount()}</h3>
        </>
        }
        <form>
            {!popupVisible &&
            <>
          <div className="form-group">
            <label htmlFor="tokenAmount">Invest Token Amount :</label>
            <div>
              <input
                type="number"
                id="tokenAmount"
                name="tokenAmount"
                value={tokenAmount}
                onChange={handleTokenAmountChange}
              />
            </div>
          </div>
          <div className='form-group'>
          <button className="button" type="button" onClick={handleVerifyAndConfirmToken}>
            Verify and Confirm Investment
          </button></div>
          </>
          }
          {popupVisible && (
            <PopupMessage className='pop'
              message="Points successfully invested and points deducted from your account."
              onClose={() => setPopupVisible(false)} // Close the popup
            />
          )}
        </form>
      </div>
    </div>
  );
}

export default InvestForm;
