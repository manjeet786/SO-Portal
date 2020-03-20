import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';
import { Button } from 'devextreme-react/button';
import React, { useEffect } from 'react';
 
import axios from 'axios';
import DataGrid, {
  Editing,
  
  Column,
 
  Selection,
HeaderFilter,
  FilterPanel,
  FilterBuilderPopup,
  Scrolling
} from 'devextreme-react/data-grid';

const data = []
const abc= new DataSource({
  store: new ArrayStore({
    data: data,
    key: 'id'
  })
});

 
class ManageSO extends React.Component {
 
  constructor(props) {
    super(props)
    

    this.state = {

      customers : [],
      selectedItemKeys: [],
      key:[]
    };
   
    this.deleteRecords = this.deleteRecords.bind(this);
    this.selectionChanged = this.selectionChanged.bind(this);
    }
  
 
    
  componentDidMount() {
    axios.get('http://localhost:8080/fetchdata')
    .then(response => { 
     
      this.setState({
      customers : response.data
    })
   })
  }
  
  render() {
    return (
      <DataGrid
      
        id="gridContainer"
        width={5000}
        columnsAutoWidth="true"
        
        dataSource={this.state.customers}
      
     
          keyExpr="id"
          onSelectionChanged={this.selectionChanged}
          selectedRowKeys={this.state.selectedItemKeys}
        showBorders={true}
      >
         <Button id="gridDeleteSelected"
          text="Delete Selected Records"
          height={34}
          disabled={!this.state.selectedItemKeys.length}
          onClick={this.deleteRecords} />
          <Selection mode="multiple" />
         <Editing
         mode="cell"
                    allowUpdating={true}
                   
                    allowDeleting={true}
                       mode="row" />
                         
                         
      
        <FilterPanel visible={true} />
        <FilterBuilderPopup position={filterBuilderPopupPosition} />
        <HeaderFilter visible={true} />
        <Scrolling mode="infinite" />
 
        <Column dataField="id" caption="SO ID"/>
       
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
  deleteRecords(e) {
    
    
    this.setState({
      selectedItemKeys: []
    });
    
    abc.reload();
    
  }
  
  selectionChanged(data) {
   // console.log("abc")
    this.setState({
      selectedItemKeys: data.selectedRowKeys,
     
      
      
    });
    
    axios.delete(`http://localhost:8080/soDetail/${this.state.selectedItemKeys}`)
  
  }

}
 
const filterBuilderPopupPosition = {
  of: window,
  at: 'top',
  my: 'top',
  offset: { y: 10 }
};
 

export default ManageSO;


