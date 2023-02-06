import React from 'react'
import "./style.css"

const Index = () => {
  return (
    <>
    <div className="heading">
    <h1>MahindraNMahindra-Traveller Card</h1>
    </div>
    
    <div className="container">
        <div className="sub-container">
    {/* table */}
    <table>
    <tr>
       <th colspan="4">MAHINDRA AND MAHINDRA <br />FES, NAGPUR </th>
      
    </tr>
    <tr>
       <th colspan="4">HUB HSG. SUB ASSEMBLY</th>

    </tr>
    <tr>
       <th className='leftText'>Shift : &#160;&#160;&#160;   
        <select id="shift" name="shift">
        <option value="choose">Choose</option>
        <option value="First">First</option>
        <option value="Second">Second</option>
        </select>
        </th>
       <th className='leftText'>Date :   <input type="date" name="" id=""></input></th>
       <th className='leftText'>RH:LH -&#160;&#160;&#160;
       <select id="rightleft" name="rigthleft">
        <option value="choose">Choose</option>
        <option value="Right">Right</option>
        <option value="Left">Left</option>
        </select>
      </th>
      <th className='leftText'>Barcode :&#160;&#160;&#160;
      <input type="text" name="" id=""></input>
      </th>

    </tr>

    <tr>
       <th> STAGE</th>
       <th>CHECK POINT</th>
       <th>ACTUAL</th>
       <th>TOKEN NO.</th>
    </tr>
    {/* Hub Sub  */}
    <tr>
       <th rowspan="2">HUB SUB <br /> ASSEMBLY</th>
       <td>Ensure Fitment Parts & Position</td>
       <td>   <input className='radio_yes' type="radio" id="yes" name="work_done1" value="Yes"></input>
              <label for="html">Yes</label>
              <input className='radio_yes' type="radio" id="no" name="work_done1" value="No"></input>
              <label for="css">No</label>
       </td>
       <td rowspan="6">  <input  type="number" min="0" name="" id=""></input></td>
    </tr>

    <tr>
       <td> Ensure Proper Siming </td>
       <td> <input className='radio_yes' type="radio" id="yes" name="work_done2" value="Yes"></input>
              <label for="html">Yes</label>
              <input className='radio_yes' type="radio" id="no" name="work_done2" value="No"></input>
              <label for="css">No</label>
       </td>
       
    </tr>
    {/* hub pre  */}
    <tr>
       <th rowspan="4">HUB PRE <br /> ASSEMBLY</th>
       <td>Hub Spindle lock nut Torque</td>
       <td> <input type="number" min="190" max="200"step="0.1"  name="" id=""></input></td>
    </tr>

    <tr>
       <td> Pre Load 2.5 - 4.0 KG </td>
       <td><input type="number" min="2.5" max="4"step="0.1" name="" id=""></input></td>
    </tr>
    <tr>
       <td> Sim Qty. in MM </td>
       <td><input type="number" min="0.6" max="1.5"step="0.1" name="" id=""></input></td>
    </tr>
    <tr>
       <td>Pre Table 1 or 2 </td>
       <td><select id="table" name="table">
        <option value="choose">Choose</option>
        <option value="1">1</option>
        <option value="2">2</option>
        </select></td>
    </tr>

    {/* Hub Face  */}
    <tr>
       <th rowspan="6">HUB FACE<br /> SEAL <br /> FITMENT <br />1 & 2</th>
       <td>Spindle Shaft & Hub surface Cleaning by SEAL-O-FIX Spray / I.P.A. Thinner</td>
       <td> <input className='radio_yes' type="radio" id="yes" name="work_done3" value="Yes"></input>
              <label for="html">Yes</label>
              <input className='radio_yes' type="radio" id="no" name="work_done3" value="No"></input>
              <label for="css">No</label></td>
       <td rowspan="6"> <input  type="number" min="0" name="token" id=""></input></td>
    </tr>

    <tr>
       <td>Spindle Hub Skewness Reading</td>
       <td>S-<input type="number" min="0" max="0.5" step="0.01" name="" id=""></input></td>
    </tr>
    <tr>
       <td>Hub Hsg. Skewness Reading</td>
       <td>H-<input type="number" min="0" max="0.5" step="0.01" name="" id=""></input></td>
    </tr>
    <tr>
       <td>Snap Ring Fitment, Use Thread lock sealant 638</td>
       <td> <input className='radio_yes' type="radio" id="yes" name="work_done4" value="Yes"></input>
              <label for="html">Yes</label>
              <input className='radio_yes' type="radio" id="no" name="work_done4" value="No"></input>
              <label for="css">No</label> </td>
    </tr> 
    <tr>
       <td>Hub Spindle lock nut Torque 190-200 Nm, Lock, Marking And Bend.</td>
       <td><input type="number" min="190" max="200" step="0.1" name="" id=""></input></td>
    </tr>
    <tr>
       <td>O Ring Fitment & Apply Grease</td>
       <td><input className='radio_yes' type="radio" id="yes" name="work_done5" value="Yes"></input>
              <label for="html">Yes</label>
              <input className='radio_yes' type="radio" id="no" name="work_done5" value="No"></input>
              <label for="css">No</label></td>
    </tr>

    {/* check point  */}

    <tr>
       <th rowspan="5">CHECK<br /> POINT</th>
       <td>Ensure Fitment Part & Position</td>
       <td> <input className='radio_yes' type="radio" id="yes" name="work_done6" value="Yes"></input>
              <label for="html">Yes</label>
              <input className='radio_yes' type="radio" id="no" name="work_done6" value="No"></input>
              <label for="css">No</label> </td>
       <td rowSpan={"4"}> <input type="number" min="0" name="" id=""></input> </td>
    </tr>

    <tr>
       <td>Check Pre Load & Slim Writing On Part & Card</td>
       <td><input className='radio_yes' type="radio" id="yes" name="work_done7" value="Yes"></input>
              <label for="html">Yes</label>
              <input className='radio_yes' type="radio" id="no" name="work_done7" value="No"></input>
              <label for="css">No</label></td>
    </tr>
    <tr>
       <td>Check S & H Reading Write On Part & Card</td>
       <td><input className='radio_yes' type="radio" id="yes" name="work_done8" value="Yes"></input>
              <label for="html">Yes</label>
              <input className='radio_yes' type="radio" id="no" name="work_done8" value="No"></input>
              <label for="css">No</label></td>
    </tr>
    <tr>
       <td>Check Snap Rong, Lock Nut Tight & Bend.</td>
       <td><input className='radio_yes' type="radio" id="yes" name="work_done9" value="Yes"></input>
              <label for="html">Yes</label>
              <input className='radio_yes' type="radio" id="no" name="work_done9" value="No"></input>
              <label for="css">No</label></td>
    </tr>
    <tr>
       <th className='leftText' colspan="3">Remark:&#160;&#160; <input className='remark' type="text" name="" id=""></input></th>
    </tr>
    <tr>
       <th colspan="5"> <button>Submit</button> </th>
    </tr>
    
   
   
</table>
        {/* <form action="">
      <div>
        <label htmlFor='username'>username</label>
        <input type="text" name="" id=""></input>
      </div>
    </form> */}
        </div>
    </div>
   

    </>
  )
}

export default Index
