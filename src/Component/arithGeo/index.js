import React, { useState } from 'react';
import "./style.css"

function Index() {
    const [dataset, setDataset] = useState([])
    const [outputValue, setOutputValue] = useState("")
    const [warningText, setWarningText] = useState("");

    const onChangeHandler = (e) => {
        setOutputValue("")
        setWarningText("")
        setDataset(e.target.value) 
    }

    const arithGeo = (arr) => {
        var reg = /\[(-)?[0-9]+(,-?[0-9]+)*\]/;
        if (reg.test(arr)) {
            var slicedString = arr.slice(1,arr.length-1);
            var dataset = slicedString.split(",")
            if(dataset?.length > 1){
                console.log("dataset",typeof(dataset));
                debugger
                var zeroFilteredValue = dataset.filter( e => e === "0")
                if(zeroFilteredValue.length) {
                    setWarningText("*0 will not be entered")
                } else {
                    var arithmetic = true;
                    var geometric = true;
                    var difference = dataset[1] - dataset[0];
                    console.log("difference", difference);
                    var ratio = dataset[1] / dataset[0];

                    for(var i = 0; i < dataset.length - 1; i++)
                    {
                        debugger
                        if(dataset[i + 1] / dataset[i] !== ratio){
                            geometric = false;
                        }
                        if(dataset[i + 1] - dataset[i] !== difference) {
                            arithmetic = false
                        }
                    }
                    if(arithmetic === true){
                        setOutputValue("Arithmetic")
                    } else if(geometric === true){
                        setOutputValue("Geometric")
                    } else{
                        setOutputValue("-1")
                    }
                }
            } else {
                setWarningText("* Please enter in correct sequence")
            }
        } else {
            setWarningText("* Please enter in correct sequence")
        }

    }
    return (
        <div className='parentDiv'>
            <div className='inputValue'>
                Enter numbers:
                <br/>
                <input
                value={dataset} 
                onChange={onChangeHandler}  
                placeholder="Example: [2,4,8]"  
                />

            </div>
                <div className='warningText'>
                    { warningText }
                </div>
            
            <br />
            <div>
                <button className='button' onClick={()=>arithGeo(dataset)}>
                    Check here
                </button>
            </div>

            <div className='outputValue'>
                {outputValue && <div> {outputValue} </div>}
            </div>

        </div>

    )
}
export default Index