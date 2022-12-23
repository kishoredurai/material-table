import logo from './logo.svg'
import './App.css'
import { forwardRef, useState } from 'react'
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import Check from '@material-ui/icons/Check'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import Clear from '@material-ui/icons/Clear'
import DeleteOutline from '@material-ui/icons/DeleteOutline'
import Edit from '@material-ui/icons/Edit'
import FilterList from '@material-ui/icons/FilterList'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Remove from '@material-ui/icons/Remove'
import SaveAlt from '@material-ui/icons/SaveAlt'
import Search from '@material-ui/icons/Search'
import ViewColumn from '@material-ui/icons/ViewColumn'

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
}






function App() {

  const [tableData,setTableData]=useState([
    {name:"Raj",email:"Raj@gmail.com",phone:9787688154,age:null,gender:"M",city:"chennai"},
    {name:"ddd",email:"Rsssaj@gmail.com",phone:9787688154,age:25,gender:"M",city:"trichy"},
    {name:"vvv",email:"s@gmail.com",phone:9787688154,age:14,gender:"F",city:"karur"},
    {name:"ss",email:"ccc@gmail.com",phone:9787688154,age:25,gender:"F",city:"cbe"},

  ]);

  const columns=[
    {title:"Name",field:"name",filtering:false},
    {title:"Email",field:"email"},
    {title:"Phone Number",field:"phone"},
    {title:"Age",field:"age",emptyValue:()=><em>null</em>,render:(rowData)=>< div style={{background:rowData.age>=18?"Green":"red"}}>{rowData.age}</div>},
    {title:"Gender",field:"gender",lookup:{M:"Male",F:"Female"}},
    {title:"City",field:"city"},
  ]




  return (
    <>
     
        <MaterialTable icons={tableIcons} 
        options={{sorting:true,filtering:true,searchFieldVariant:"outlined" , exportButton:true,paging:true ,pageSize:2 ,pageSizeOptions:[2,5,10,20,30]
  , actionsColumnIndex:-1 ,addRowPosition:"first" ,selection:false ,columnsButton:true,    showFirstLastPageButtons: true,

  rowStyle:(data,index)=>index%2==0?{background:"#f5f5f5"}:null
      }}
        columns={columns} data={tableData}
        actions={[
          {icon:()=><a>delete</a>,
         onClick:(e,data)=>console.log(data),
        },
          {icon:()=><a>click me</a>,
        tooltip:"click me",
       onClick:(e,data)=>console.log(data),
      }

        ]}
        
        title="test table" 
        
      
        />
        
    </>
  )
}

export default App
