import logo from './logo.svg'
import './App.css'
import { forwardRef, useState } from 'react'
import MaterialTable from 'material-table';






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
     
        <MaterialTable 
        options={{sorting:true,filtering:true,searchFieldVariant:"outlined" , exportButton:true,paging:true ,pageSize:2 ,pageSizeOptions:[2,5,10,20,30]
  , actionsColumnIndex:-1 ,addRowPosition:"first" ,selection:false ,columnsButton:true,    showFirstLastPageButtons: true,

  rowStyle:(data,index)=>index%2==0?{background:"#f5f5f5"}:null
      }}
        columns={columns} data={tableData}
        actions={[
          {icon:()=><form><button>delete</button></form>,
         onClick:(e,data)=>console.log(data),
        },
        {icon:()=><form><button>delete</button></form>,
         onClick:(e,data)=>console.log(data),
        },
        {icon:'save',
        tooltip:"click me",
       onClick:(e,data)=>console.log(data),
      }

        ]}
        
        title="" 
        
        // components={{
        //   Action: props => (
        //     <button
        //       onClick={(event) => props.action.onClick(event, props.data)}
        //       color="primary"
        //       variant="contained"

        //       style={{textTransform: 'none'}}
        //       size="small"
        //     >
        //       Delete
        //     </button>
        //   ),
        //   isFreeAction: true,
        // }}
  
        />
        
    </>
  )
}

export default App
