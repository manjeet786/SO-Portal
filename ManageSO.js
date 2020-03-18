import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 
import React from 'react';
 
import axios from 'axios';
import DataGrid, {
  Editing,
  Button,
  Column,
  Lookup,
  
HeaderFilter,
  FilterPanel,
  FilterBuilderPopup,
  Scrolling
} from 'devextreme-react/data-grid';
 
class ManageSO extends React.Component {
 
  
  constructor(props) {
    super(props)
    // this.onEdit = this.onEdit.bind(this);
    // this.onDelete = this.onDelete.bind(this);
    this.state = {
      customers : []
    }
  }
 
  componentDidMount() {
    axios.get('http://localhost:8080/fetchdata')
    .then(response => { 
     
      this.setState({
      customers : response.data
    })
   })
  }
  // onEdit() {
  //   this.props.onEdit();
  // }
  // onDelete() {
  //   if (this.validator.validateInputs(this.state)) {
  //     this.props.onDelete(this.state);
      
  //   }
  // }
  render() {
    return (
      <DataGrid
      
        id="gridContainer"
        width={5000}
        columnsAutoWidth="true"
        
        dataSource={this.state.customers}
        client='http://localhost:8080/fetchLob'
      
        showBorders={true}
      >
        
         <Editing
                    allowUpdating={true}
                   
                    allowDeleting={true}
                       mode="row" />
                         
                         
      
        <FilterPanel visible={true} />
        <FilterBuilderPopup position={filterBuilderPopupPosition} />
        <HeaderFilter visible={true} />
        <Scrolling mode="infinite" />
 
       
       <Column type="buttons" caption="Action">
       {/* onClick={() => this.onEdit()} */}
       <Button name="edit" icon="edit" />
                    <Button name="delete" icon="trash" /> 
                </Column>
       <Column dataField="soType" caption="SO Type"/>
     
       <Column dataField="soStatus" caption="SO Status" />
       <Column dataField="day3" caption="Billing Start Date" dataType="date"/>
       <Column dataField="practice" caption="Practice Id " />
       <Column dataField="priority" caption="SO Priority" />
       <Column dataField="soComments" caption="SO Comments" />
       <Column dataField="day2" caption="Last Working Date"  dataType="date" />
       <Column dataField="location" caption="Location" />
       <Column dataField="city" caption="City" />
       <Column dataField="rims" caption="RIMS ID" />
       <Column dataField="tracking" caption="Tracking No"/>
       <Column dataField="skills" caption="Skills"/>
       <Column dataField="day1" caption="SO Creation Date" dataType="date" />
       <Column dataField="fulfillmentPoc" caption="Fulfillment POC"/>
       <Column dataField="clientLob" caption="Client LOB"/>
   
       <Column dataField="practiceArea" caption="Practice Area"/>
       <Column dataField="jobLevel" caption="Job Level"/>
       <Column dataField="projectType" caption="Project Type"/>
       <Column dataField="projectId" caption="Project id"/>
       <Column
          editorOptions={{ format: 'currency', showClearButton: true }}
          dataField="rl"
          dataType="number"
          format="currency"
          caption="Revenue Loss"
       ></Column>
        <Column
          editorOptions={{ format: 'currency', showClearButton: true }}
          dataField="risk"
          dataType="number"
          format="currency"
          caption="Risk Amount"
        ></Column>
 
       <Column dataField="dLMapping" caption="DL Mapping"/>
      <Column dataField="elMapping" caption="EL Mapping"/>
       <Column
          editorOptions={{ format: 'currency', showClearButton: true }}
          dataField="br"
          dataType="number"
          format="currency"
          caption="Bill Rate-Move to SO Ageing"
        ></Column>
      </DataGrid>
    );
  }
}
 
const filterBuilderPopupPosition = {
  of: window,
  at: 'top',
  my: 'top',
  offset: { y: 10 }
};
 
export default ManageSO;
