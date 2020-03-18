import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import axios from 'axios';

//import {Link} from 'react-router-dom';

class CreateSO extends Component {

  constructor(props) {

    super(props);

    

    this.state = {

      fields: {},
     
      errors: {},
      data: [],
      location:[],
      projectId:[],
      statusDescSOType : [],
      statusDescSOStatus : [],
      client:[],
      Skill:[],
      parea:[],
      day1:0,
      day2:0,
      day3:0,
      uniqueId:"",
      value:'',
      practiceArea:[]
     
      // practice_area:{
      //   practice_d:[],
      //   dl_mapping:[],
      //   el_mapping:[]
      // }
     
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
    this.handleday1Change = this.handleday1Change.bind(this);
    this.handleday2Change = this.handleday2Change.bind(this);
    this.handleday3Change = this.handleday3Change.bind(this);
    this.onChange = this.onChange.bind(this)
};
  handleday1Change (selectedDay) {
    //const input = dayPickerInput.getInput();
    this.setState({day1:selectedDay});
  }
  handleday2Change(selectedDay) {
    //const input = dayPickerInput.getInput();
    this.setState({day2:selectedDay});
  }
  handleday3Change(selectedDay) {
    //const input = dayPickerInput.getInput();
    this.setState({day3:selectedDay});
  }
handleChange(e) {
 
  
  let fields = this.state.fields;

  fields[e.target.name] = e.target.value;
  



  this.setState({
    fields
 });
}
onChange(e) {

    //let uniqueId=this.state.uniqueId;
  
    const re = /^[0-9\b]+$/;
  
  
    if (e.target.value === '' || re.test(e.target.value)) 
    {
       this.setState({uniqueId: e.target.value});
    }
  }

componentDidMount() {
    console.log("componentDidMount")
    this.abc();
    //  axios.get('http://localhost:8080/fetchStatusType?statusType1=SOType&statusType2=SOStatus')
    //       .then(response => {
    //            console.log(response.data)
    //        this.setState({
    //          data : response.data
    //        })    
    //      })
         
        
  
}

abc()
{
    let one='http://localhost:8080/fetchStatusType?statusType1=SOType&statusType2=SOStatus'
    let two='http://localhost:8080/fetchLocation'
    let three= 'http://localhost:8080/fetchProject'
    let four = 'http://localhost:8080/fetchLob'
    let five= 'http://localhost:8080/fetchSkill'
    let six='http://localhost:8080/fetchPractise'
    const requestOne = axios.get(one);
const requestTwo = axios.get(two);
const requestThree = axios.get(three);
const requestFour = axios.get(four);
const requestFive = axios.get(five);
const requestSix = axios.get(six);

axios.all([requestOne, requestTwo, requestThree, requestFour,requestFive,requestSix]).then(axios.spread((...responses) => {
    const responseOne = responses[0]
    const responseTwo = responses[1]
    const responseThree = responses[2]
    const responseFour = responses[3]
    const responseFive = responses[4]
    const responseSix = responses[5]
    console.log("<--------1 request---->")
    console.log(responseOne)
    console.log("<--------2 request---->")
    console.log(responseTwo)
    console.log("<--------3 request---->")
    console.log(responseThree)
    console.log("<--------4 request---->")
    console.log(responseFour)
    console.log("<--------5 request---->")
    console.log(responseFive)
    console.log("<--------6 request---->")
    console.log(responseSix)
    if(responseOne && responseTwo && responseThree && responseFour && responseFive && responseSix){
      this.setState({
                data : responseOne.data,
                location: responseTwo.data,
                projectId:responseThree.data,
                client:responseFour.data,
                Skill:responseFive.data,
                parea:responseSix.data,
                

                
               })  
              
        this.render()
    }
  })).catch(errors => {
    console.log(errors);
    // react on errors.
  })
}

submituserRegistrationForm(e) {

  e.preventDefault();

  if (this.validateForm()) {

      let fields = {};

      fields["soType"] = "";
      fields["soStatus"] = "";
      fields["practice"] = "";
      fields["priority"] = "";
     // fields["uniqueId"] = "";
      fields["soAgeing"] = "";
      fields["day1"] = this.state.day1;
      fields["day2"] = this.state.day2;
      fields["location"] = "";
      fields["city"] = "";
      fields["rims"] = "";
      fields["tracking"] = "";
      fields["projectType"] = "";
      fields["projectId"] = "";
      fields["projectName"] = "";
      fields["jobLevel"] = "";
      fields["practiceArea"] = "";
      fields["clientLob"] = "";
      fields["fulfillmentPoc"] = "";
      fields["skills"] = "";
      fields["day3"] =this.state.day3;
      fields["blmlsblUpside"] = "";
      fields["leadTime"] = "";
      fields["cp"] = "";
      fields["revenueLoss"] = "";
      fields["riskAmount"] = "";
      fields["dLMapping"] = "";
      fields["elMapping"] = "";
      fields["billRate"] = "";
     fields["soComments"] = "";

      this.setState({fields:fields});
      

     let data = {
         soType : this.state.fields.soType,
         soStatus : this.state.fields.soStatus,
         practice : this.state.fields.practice,
         priority : this.state.fields.priority,
         uniqueId : this.state.fields.uniqueId,
         soAgeing : this.state.fields.soAgeing,
         
         day1 : this.state.day1,
         day2 : this.state.day2,
         location : this.state.fields.location,
         city : this.state.fields.city,
         rims : this.state.fields.rims,
         tracking : this.state.fields.tracking,
         projectType : this.state.fields.projectType,
         projectId : this.state.fields.projectId,
         projectName : this.state.fields.projectName,
         jobLevel : this.state.fields.jobLevel,
         practiceArea :   this.state.fields.practiceArea,
         clientLob : this.state.fields.clientLob,
         fulfillmentPoc :   this.state.fields.fulfillmentPoc,
         skills : this.state.fields.skills,
         day3 : this.state.day3,
         blmlsblUpside :  this.state.fields.blmlsblUpside,
         leadTime :  this.state.fields.leadTime,
         cp : this.state.fields.cp,
         revenueLoss :  this.state.fields.revenueLoss,
         riskAmount :this.state.fields.riskAmount,
         dLMapping :this.state.fields.dLMapping,
         elMapping :this.state.fields.elMapping,
         billRate :this.state.fields.billRate,
         soComments: this.state.fields.soComments,
       }
      
    
     
    
      alert("Form submitted");
   axios.post('http://localhost:8080/save', data)
    
    
    }             
}    

validateForm() {

 

  let fields = this.state.fields;

  let day1=this.state.day1;

  let day2=this.state.day2;

  let day3=this.state.day3;

  let uniqueId=this.state.uniqueId;

  let errors = {};

  let formIsValid = true;

  if (!uniqueId) {

    formIsValid = false;

    errors["uniqueId"] = "*Please enter the uniqueId";

  }
  if (!day1) {

    formIsValid = false;

    errors["soCreationDate"] = "*Please enter the SO Creation Date";

  }

  if (!day2) {

    formIsValid = false;

    errors["soLastWorkingDate"] = "*Please enter the SO Last Working Date";

  }

  if (!day3) {

    formIsValid = false;

    errors["billingDate"] = "*Please enter the Billing Date";

  }

  if (!fields["soType"]) {

    formIsValid = false;

    errors["soType"] = "*Please enter the SO Type";

  }
  if (!fields["soStatus"]) {

    formIsValid = false;

    errors["soStatus"] = "*Please enter the SO Status";

  }
  if (!fields["practice"]) {

    formIsValid = false;

    errors["practice"] = "*Please enter the practice";

  }
  if (!fields["priority"]) {

    formIsValid = false;

    errors["priority"] = "*Please enter the priority";

  }
 
  if (!fields["soAgeing"]) {

    formIsValid = false;

    errors["soAgeing"] = "*Please enter the soAgeing";

  }
//   if (!fields["soCreationDate"]) {

//     formIsValid = false;

//     errors["soCreationDate"] = "*Please enter the SO Creation Date";

//   }
//   if (!fields["soLastWorkingDate"]) {

//     formIsValid = false;

//     errors["soLastWorkingDate"] = "*Please enter the SO Last Working Date";

//   }
  if (!fields["location"]) {

    formIsValid = false;

    errors["location"] = "*Please enter the location";

  }
  if (!fields["city"]) {

    formIsValid = false;

    errors["city"] = "*Please enter the city";

  }
  if (!fields["rims"]) {

    formIsValid = false;

    errors["rims"] = "*Please enter the rims";

  }
  if (!fields["tracking"]) {

    formIsValid = false;

    errors["tracking"] = "*Please enter the tracking";

  }
  if (!fields["projectType"]) {

    formIsValid = false;

    errors["projectType"] = "*Please enter the projectType";

  }
  if (!fields["projectId"]) {

    formIsValid = false;

    errors["projectId"] = "*Please enter the projectId";

  }
  if (!fields["projectName"]) {

    formIsValid = false;

    errors["projectName"] = "*Please enter the ProjectName";

  }
  if (!fields["jobLevel"]) {

    formIsValid = false;

    errors["jobLevel"] = "*Please enter the jobLevel";

  }
  if (!fields["practiceArea"]) {

    formIsValid = false;

    errors["practiceArea"] = "*Please enter the PracticeArea";

  }
  if (!fields["clientLob"]) {

    formIsValid = false;

    errors["clientLob"] = "*Please enter the Client LOB";

  }
  if (!fields["fulfillmentPoc"]) {

    formIsValid = false;

    errors["fulfillmentPoc"] = "*Please enter the Fulfillment POC";

  }
  if (!fields["skills"]) {

    formIsValid = false;

    errors["skills"] = "*Please enter the skills";

  }
  if (!fields["blmlsblUpside"]) {

    formIsValid = false;

    errors["blmlsblUpside"] = "*Please enter the BL/ML/SBL/Upside";

  }
  if (!fields["leadTime"]) {

    formIsValid = false;

    errors["leadTime"] = "*Please enter the leadTime";

  }
  if (!fields["cp"]) {

    formIsValid = false;

    errors["cp"] = "*Please enter the cp";

  }
  if (!fields["revenueLoss"]) {

    formIsValid = false;

    errors["revenueLoss"] = "*Please enter the Revenue Loss";

  }
  if (!fields["riskAmount"]) {

    formIsValid = false;

    errors["riskAmount"] = "*Please enter the Risk Amount";

  }
  if (!fields["dLMapping"]) {

    formIsValid = false;

    errors["dLMapping"] = "*Please enter the DL Mapping";

  }
  if (!fields["elMapping"]) {

    formIsValid = false;

    errors["elMapping"] = "*Please enter the EL Mapping";

  }
  if (!fields["billRate"]) {

    formIsValid = false;

    errors["billRate"] = "*Please enter the Bill Rate";

  }
  if (!fields["soComments"]) {

    formIsValid = false;

    errors["soComments"] = "*Please enter the SO Comments";

  }
 
  this.setState({

    errors: errors

  });

  return formIsValid;
}
  
    
    render() {
        console.log("render")
        let data = this.state.data
          let i = 0 
           let j = 0
           data.map(eachData => {
            // console.log("'" +eachData.statusType + "'")
             if(eachData.statusType === 'SOType    ') {
               this.state.statusDescSOType[i++] = eachData.statusDesc
             } else {
               this.state.statusDescSOStatus[j++] = eachData.statusDesc
             }
         }
         )
         
        
          
         
         const { selectedDay} = this.state;
          

          console.log(this.state.statusDescSOType)
          console.log(this.state.statusDescSOStatus)
    return(
        <div class="container">
        <div className="App">
        {/* First row first part*/}

        <form id="form1" onSubmit= {this.submituserRegistrationForm}>
            <div class="row">
 
 <div class="col-md-6 col-sm-12 "  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">SO TYPE:</div>
 <div class="col-md-6  col-sm-6">
 <select class="form-control" name="soType" value={this.state.fields.soType} onChange={this.handleChange}> 
 <option value="none" selected="selected"> 
          Select an Option 
      </option> 

      
    {
    this.state.statusDescSOType.map(eachDesc => <option>{eachDesc}</option>)
    } 
    </select>
    
   <div className="errorMsg">{this.state.errors.soType}</div>
    

 </div>
 </div>
 

 

 
 
 </div>
  {/* First row second part*/}
  
 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">SO Status:</div>
   <div class="col-md-6  col-sm-6"  >
   <select class="form-control" name="soStatus" value={this.state.fields.soStatus} onChange={this.handleChange}> 
    
    <option value="none" selected="selected"> 
          Select an Option 
      </option> 
       {
    this.state.statusDescSOStatus.map(eachDesc => <option>{eachDesc}</option>)
    } 
    
    </select>
    <div className="errorMsg">{this.state.errors.soStatus}</div>
   </div>
   </div>
   </div>
</div>

{/* Second row first part */}

           <div class="row">
 
 <div class="col-md-6 col-sm-12"  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">Practice:</div>
 <div class="col-md-6  col-sm-6">
 <select class="form-control" name="practice"  value={this.state.fields.practice} onChange={this.handleChange}> 
    
    <option value="none" selected="selected"> 
          Select an Option 
      </option> 
      <option >ADM</option>
      <option>ADM-ISmo Pool</option>
      <option >AIM-TSG</option>
      <option>AVM Core</option>
      <option >AVM-AIA</option>
      <option>AVM-EAS-OSP</option>
      <option >BFS</option>
      <option>BPS Core Pool</option>
      <option >CDB Interactive</option>
      <option>CDB-AIA</option>
      <option >CDE</option>
      <option>CDE-BFS</option>
      <option >CIS</option>
      <option>Cognizant Security</option>
      <option >Delivery Excellence Pool</option>
      <option>EAS Analytics Pool</option>
      <option >EAS DCX</option>
      <option>EAS IPM</option>
      <option >EAS Oracle</option>
      <option>EAS Sales Force</option>
      <option >EAS SAP Pool</option>
      <option>EAS Testing CRM Pool</option>
      <option>Intelligent AutoTech Dep Pool</option>  
      <option>Performance Testing CoE Pool</option>
      <option>QE&A</option>
    
    </select>
    <div className="errorMsg">{this.state.errors.practice}</div> 

 </div>
 </div>

 

 
 
 </div>
   {/* Second row second part*/}

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">Priority:</div>
   <div class="col-md-6  col-sm-6"  >
   <select class="form-control" name="priority" value={this.state.fields.priority} onChange={this.handleChange}> 
    
    <option value="none" selected="selected"> 
          Select an Option 
      </option> 
      <option >Critical</option>
      <option>High</option>
      <option >Medium</option>
      <option>Low</option>
    
    </select>
    <div className="errorMsg">{this.state.errors.priority}</div>
   </div>
   </div>
   </div>
</div>
          {/*Third row first PART */}
          <div class="row">
 
 <div class="col-md-6 col-sm-12">
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">Unique Id:</div>
 <div class="col-md-6  col-sm-6">
 <input type="text" class="form-control" name="uniqueId" autocomplete="off" value={this.state.uniqueId} onChange={this.onChange}> 
  </input>
 <div className="errorMsg">{this.state.errors.uniqueId}</div>
 </div>
 </div>

 

 
 
 </div>
   {/* Third row second part*/}

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">SO Ageing:</div>
   <div class="col-md-6  col-sm-6"  >
   <input type="text" class="form-control" name="soAgeing" autocomplete="off" value={this.state.fields.soAgeing} onChange={this.handleChange}>
   </input>
   <div className="errorMsg">{this.state.errors.soAgeing}</div>

   </div>
   </div>
   </div>
</div>
{/* Fourth row first part*/ }

           <div class="row">
 
 <div class="col-md-6 col-sm-12 "  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">So Creation Date:</div>
 <div class="col-md-6  col-sm-6 ">
    
       
 < DayPickerInput inputProps={{className: 'form-control'}} style={{ width: "100%" }} value={selectedDay}
          onDayChange={this.handleday1Change}
          dayPickerProps={{
            selectedDays: selectedDay}}/>
            <div className="errorMsg">{this.state.errors.soCreationDate}</div>
    

 </div>
 </div>

 

 
 
 </div>
   {/* Fourth row second part*/}

   <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">Last Working Date:</div>
   <div class="col-md-6  col-sm-6"  >
   < DayPickerInput inputProps={{ className: 'form-control'}} style={{ width: "100%" }}value={selectedDay}
          onDayChange={this.handleday2Change}
          dayPickerProps={{
            selectedDays: selectedDay}}/>
            <div className="errorMsg">{this.state.errors.soLastWorkingDate}</div>
   

   </div>
   </div>
   </div>
</div>
{/* Fifth row first part*/}

<div class="row">
 
 <div class="col-md-6 col-sm-12 "  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">Location:</div>
 <div class="col-md-6  col-sm-6">
 <select class="form-control" name="location" value={this.state.fields.location} onChange={this.handleChange}> 
    
    <option value="none" selected="selected"> 
          Select an Option 
      </option> 
      <option >OnSite</option>
      <option>OffShore</option>
      <option >NearShore</option>
</select>
<div className="errorMsg">{this.state.errors.location}</div>
</div>
</div>
</div>
   {/* Fifth row second part*/}

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">City:</div>
   <div class="col-md-6  col-sm-6"  >
   <select class="form-control" name="city" value={this.state.fields.city} onChange={this.handleChange}> 
    
    <option value="none" selected="selected"> 
          Select an Option 
      </option> 
      {
    this.state.location.map(eachDesc => <option>{eachDesc.cityName}</option>)
    } 
    </select>
    <div className="errorMsg">{this.state.errors.city}</div>
   </div>
   </div>
   </div>
</div>

{/*Sixth row first part */}

<div class="row">
 
 <div class="col-md-6 col-sm-12"  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">Rims:</div>
 <div class="col-md-6  col-sm-6">
 <input type="text" class="form-control" name="rims" autocomplete="off" value={this.state.fields.rims} onChange={this.handleChange}>

 </input>
 <div className="errorMsg">{this.state.errors.rims}</div>
 </div>
 </div>

 

 
 
 </div>
   {/* Sixth row second part*/}

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">Tracking:</div>
   <div class="col-md-6  col-sm-6"  >
   <input type="text" class="form-control" name="tracking" autocomplete="off" value={this.state.fields.tracking} onChange={this.handleChange}>

   </input>
   
   <div className="errorMsg">{this.state.errors.tracking}</div>
   </div>
   </div>
   </div>
   

</div>
{/*7th row first part */}

<div class="row">
 
 <div class="col-md-6 col-sm-12 "  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">Project TYPE:</div>
 <div class="col-md-6  col-sm-6">
 <select class="form-control" name="projectType" value={this.state.fields.projectType} onChange={this.handleChange}> 
    
    <option value="none" selected="selected"> 
          Select an Option 
      </option> 
      <option >BFD</option>
      <option>BTM</option>
      <option>NBL</option>
</select>
<div className="errorMsg">{this.state.errors.projectType}</div>
</div>
</div>
</div>
  {/* 7th row second part*/}
 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">Project ID:</div>
   <div class="col-mdm-6  col-sm-6"  >
   <select class="form-control" name="projectId" value={this.state.fields.projectId} onChange={this.handleChange}> 
    
    <option value="none" selected="selected"> 
          Select an Option 
      </option> 
      {
    this.state.projectId.map(eachDesc => <option>{eachDesc.cognizantWorkorderId}</option>)
    } 
    
    
    </select>
    <div className="errorMsg">{this.state.errors.projectId}</div>
   </div>
   </div>
   </div>
</div>

{/* 8th row first part */}

           <div class="row">
 
 <div class="col-md-6 col-sm-12 "  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">ProjectName - Ally</div>
 <div class="col-md-6  col-sm-6">
 <select class="form-control" name="projectName" value={this.state.fields.projectName} onChange={this.handleChange}> 
    
    <option value="none" selected="selected"> 
          Select an Option 
      </option> 
      {
    this.state.projectId.map(eachDesc => <option>{eachDesc.workOrderName}</option>)
    } 
    </select>
    <div className="errorMsg">{this.state.errors.projectName}</div>

 </div>
 </div>

 

 
 
 </div>
   {/* 8th row second part*/}

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">Job Level:</div>
   <div class="col-md-6  col-sm-6"  >
   <select class="form-control" name="jobLevel" value={this.state.fields.jobLevel} onChange={this.handleChange}> 
    
    <option value="none" selected="selected"> 
          Select an Option 
      </option> 
      <option >Architect-Technology</option>
      <option>Assoc. Director-Projects</option>
      <option >Associate-CS</option>
      <option>Associate - Projects</option>
      <option >Business Associate</option>
      <option>Infra Dev Specialist</option>
      <option >Infra Developer</option>
      <option>Lead Infra. Architect</option>
      <option >Manager - Projects</option>
      <option>Principal Architect (TCG Lead)</option>
      <option >Process Specialist - Data</option>
      <option>Program Manager</option>
      <option >Programmer Analyst</option>
      <option>Programmer Analyst Trainee</option>
      <option >Programmer Trainee</option>
      <option>Senior Associate</option>
      <option >Senior Engineer Full Stack</option>

      <option>Senior Systems Executive</option>
      <option >Sr. Architect (COE Lead)</option>
      <option>Sr. Associate</option>
      <option >Sr. Associate - Projects</option>
      <option>Sr. Infra Developer</option>
      <option >Sr. Manager - Projects</option>
      <option>Technology Lead</option>
      <option >Technology Specialist</option>
    
    </select>
    <div className="errorMsg">{this.state.errors.jobLevel}</div>
   </div>
   </div>
   </div>
</div>
          {/*9th row first PART */}
          <div class="row">
 
 <div class="col-md-6 col-sm-12 "  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">Practice Area:</div>
 <div class="col-md-6  col-sm-6">
 <select class="form-control" name="practiceArea" value={this.state.fields.practiceArea} onChange={this.handleChange}>
    
    <option value="none" selected="selected"> 
          Select an Option 
      </option> 
      {
    this.state.parea.map(eachDesc => <option>{eachDesc.practiceAreaName}</option>)
    } 
</select>
<div className="errorMsg">{this.state.errors.practiceArea}</div>
</div>
</div>
</div>
   {/* 9th row second part*/}

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">Client LOB:</div>
   <div class="col-md-6  col-sm-6"  >
   <select class="form-control" name="clientLob" value={this.state.fields.clientLob} onChange={this.handleChange}> 
    
    <option value="none" selected="selected"> 
          Select an Option 
      </option> 
      {
    this.state.client.map(eachDesc => <option>{eachDesc.lobName}</option>)
    } 
</select>
<div className="errorMsg">{this.state.errors.clientLob}</div>

   </div>
   </div>
   </div>
</div>
{/* 10th row first part*/ }

           <div class="row">
 
 <div class="col-md-6 col-sm-12 "  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">Fulfillment POC:</div>
 <div class="col-md-6  col-sm-6">
 <select class="form-control" name="fulfillmentPoc" value={this.state.fields.fulfillmentPoc} onChange={this.handleChange}> 
    
    <option value="none" selected="selected"> 
          Select an Option 
      </option> 
      <option >Ashok Panduranga</option>
      <option>Balaji / Tim</option>
      <option >Cheran / Vimal</option>
      <option>Debendra</option>
      <option >Dinakar</option>
      <option>Girish Muthukumar</option>
      <option>Irshad / Sri Ramm</option>
      <option >Judie / Karthik Ganesan</option>
      <option>Karthik / Harish</option>
    <option >Keerthi</option>
      <option>Murali</option>
      <option >Navaneeth</option>
      <option>Prakasham</option>
      <option >Pratheek Gupa / Hari</option>
      <option>Raghavan / Arun</option>
      <option>Sandip / Venkat</option>
      <option >Shyamalee / Manny</option>
      <option>Tim</option>
      <option >Vimal</option>
      <option>Voorapan Krishnan / Karthik Kumar</option>
</select>
<div className="errorMsg">{this.state.errors.fulfillmentPoc}</div>
</div>
</div>
</div>
   {/* 10th row second part*/}

   <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">Skills:</div>
   <div class="col-md-6  col-sm-6"  >
   <select class="form-control" name="skills" value={this.state.fields.skills} onChange={this.handleChange}> 
    
    <option value="none" selected="selected"> 
          Select an Option 
      </option> 
      {
    this.state.Skill.map(eachDesc => <option>{eachDesc.skillName}</option>)
    } 
</select>
<div className="errorMsg">{this.state.errors.skills}</div>
</div>
</div>
</div>
</div>
{/* 11th row first part*/}
<div class="row">
 
 <div class="col-md-6 col-sm-12"  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">Billing Start Date/Joining:</div>
 <div class="col-md-6  col-sm-6">
 < DayPickerInput inputProps={{ className: 'form-control'}} style={{ width: "100%" }}value={selectedDay}
          onDayChange={this.handleday3Change}
          dayPickerProps={{
            selectedDays: selectedDay}}/>
 <div className="errorMsg">{this.state.errors.billingDate}</div>
    
</div>

</div>
</div>
   {/* 11th row second part*/}

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">BL/ML/SBL /Upside:</div>
   <div class="col-md-6  col-sm-6"  >
   <select class="form-control" name="blmlsblUpside" value={this.state.fields.blmlsblUpside} onChange={this.handleChange}> 
    
    <option value="none" 
    selected="selected"> Select an Option 
      </option> 
      <option >BL</option>
      <option>Most Likely</option>
      <option >NA</option>
      <option>SBL</option>
      <option >U</option>
      <option>Upside-New</option>
      <option >Upside-Replacement</option>
       </select>
       <div className="errorMsg">{this.state.errors.blmlsblUpside}</div>
       </div>
    </div>
   </div>
</div>

{/*12th row first part */}

<div class="row">
 
 <div class="col-md-6 col-sm-12 "  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">Lead Time:</div>
 <div class="col-md-6  col-sm-6">
 <input type="text" class="form-control" name="leadTime" autocomplete="off" value={this.state.fields.leadTime} onChange={this.handleChange}>

 </input>
 <div className="errorMsg">{this.state.errors.leadTime}</div>
</div>
</div>
</div>
   {/* 12th row second part*/}

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">CP:</div>
   <div class="col-md-6  col-sm-6"  >
   <input type="text" class="form-control" name="cp" autocomplete="off" value={this.state.fields.cp} onChange={this.handleChange}>
     </input>
   
   <div className="errorMsg">{this.state.errors.cp}</div>
   </div>
   </div>
   </div>
</div>
{/*13th  row first part */}
<div class="row">
 
 <div class="col-md-6 col-sm-12 "  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">Revenue Loss:</div>
 <div class="col-md-6  col-sm-6">
 <input type="text" class="form-control" name="revenueLoss" autocomplete="off" placeholder="In $" value={this.state.fields.revenueLoss} onChange={this.handleChange}>

 </input>
 <div className="errorMsg">{this.state.errors.revenueLoss}</div>
</div>
</div>
</div>
   {/* 13th row second part*/}

 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">Risk Amount:</div>
   <div class="col-md-6  col-sm-6"  >
   
   <input type="text " class="form-control" name="riskAmount" autocomplete="off" value={this.state.fields.riskAmount} onChange={this.handleChange} placeholder="In $"></input>
   <div className="errorMsg">{this.state.errors.riskAmount}</div>
       </div>
    </div>
   </div>
</div>
  {/* 14th row first part*/}
  <div class="row">
 
 <div class="col-md-6 col-sm-12 "  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">DL Mapping:</div>
 <div class="col-md-6  col-sm-6">
 <select class="form-control" name="dLMapping" value={this.state.fields.dLMapping} onChange={this.handleChange}> 
    
    <option value="none" selected="selected"> 
          Select an Option 
      </option> 
      <option >Arun</option>
      <option>Arun Karunakaran</option>
      <option >Arunachalam Lakshman</option>
      <option>Ashok Panduranga</option>
      <option >Balaji Sambamoorthy</option>
      <option>Balamurali </option>
      <option>Balamurali Santhanakumar </option>
      <option >Digendra</option>
      <option>Dinakar</option>
    <option >Divakar</option>
      <option>Divakar/ Ashokakumar</option>
      <option >Judie</option>
      <option>Kamaljit</option>
      <option >Keerthivasan Rajamani</option>
      <option>Kumar Karthik</option>
      <option>M S Venkata Ramu</option>
      <option >ICAN</option>
      <option>SRE</option>
      <option >SecureTransport</option>
      <option>Webservice SME </option>
      <option>Seebeyond</option>
      <option>Datastage</option>
      </select>
      <div className="errorMsg">{this.state.errors.dLMapping}</div>
</div>
</div>
</div>
  {/* 14th row second part*/}
 <div class="col-md-6 col-sm-12">
   <div class="row">
   <div class="col-md-6  col-sm-6 blue">EL Mapping:</div>
   <div class="col-md-6  col-sm-6"  >
   <select class="form-control" name="elMapping" value={this.state.fields.elMapping} onChange={this.handleChange}> 
    
    <option value="none" selected="selected"> 
          Select an Option 
      </option> 
      <option >1000080433</option>
      <option>1000082914</option>
      <option >1000100287</option>
      <option>1000102994</option>
      <option >1000121902</option>
      <option>1000123341</option>
      <option >1000123764</option>
      <option>1000129569</option>
      <option >1000200202</option>
      <option>1000220927</option>
      <option >1000250428</option>
      <option>1000251122</option>
      <option >1000258000</option>
      <option>1000261979</option>
      <option >1000267556</option>
      <option>1000279013</option>
      <option >1000279696</option>
    
    
    </select>
    <div className="errorMsg">{this.state.errors.elMapping}</div>
   </div>
   </div>
   </div>
   </div>

{/*15th row first part */}

<div class="row">
 
 <div class="col-md-6 col-sm-12 "  >
 <div class="row">
 <div class="col-md-6  col-sm-6 blue ">Bill Rate:</div>
 <div class="col-md-6  col-sm-6">
 <input type="text" class="form-control" name="billRate" autocomplete="off"  value={this.state.fields.billRate} onChange={this.handleChange}>

 </input>
 <div className="errorMsg">{this.state.errors.billRate}</div>
</div>
</div>
</div>
   {/* 15th row second part*/}

 
</div>

{/*16th row */}
<div class="row">
 
 <div class="col-lg-12 col-sm-12"  >
 <div class="row">
 <div class="col-lg-3  col-sm-6 col-md-3 blue ">SO Comments:</div>
 <div class="col-lg-9 col-sm-6 col-md-9">
 <div class="form-group">
  
  <textarea class="form-control" name="soComments" rows="5" value={this.state.fields.soComments} onChange={this.handleChange}>
    
  </textarea>
  <div className="errorMsg">{this.state.errors.soComments}</div>
</div>

 </div>
 </div>

 

 
 
 </div>
 </div>
 

 

 <div class="col-md-4 text-center"> 
    <button id="singlebutton" name="singlebutton" class="btn btn-success"  >Submit</button> 
   
</div> 

 </form>

      </div>
      </div>
     
        
        
       
    );
    }
}

export default CreateSO;
