//import AdminHome from "../AdminHome";

//{"id":1,"first_name":"Dmitri","last_name":"Skones","email":"dskones0@washington.edu","date_of_birth":"5/22/2021","age":30,"country":"Indonesia","phone":"6506401277"},

export const selectedArray = new Array();
export const COLUMNS=[
    {
        Header:' ',
        Footer:' ',
        accessor:'',
        Cell: ({ cell }) => {
            return <input name="selector[]" id="ad_Checkbox1" className="ads_Checkbox" type="checkbox" 
            onClick={(e)=>{
                console.log(e.target.checked);
                console.log(cell.row.allCells[1].value)
                selectedArray.push(cell.row.allCells[1].value)
            }} />
        }
    },
    {
        Header:'Email',
        Footer:'Email',
        accessor:'email'
    },
    {
        Header:'Blood Bank Name',
        Footer:'Blood Bank Name',
        accessor:'bankName'
    },
    {
        Header:'Parent Hospital',
        Footer:'Parent Hospital',
        accessor:'parentHospital'
    },
    {
        Header:'Short Name',
        Footer:'Short Name',
        accessor:'shortName'
    },
    {
        Header:'Category',
        Footer:'Category',
        accessor:'category'
    },
    {
        Header:'Licence',
        Footer:'Licence',
        accessor:'licence',
        // Cell: ({ cell }) => (
        //     <button value={cell.row.values.name} onClick={(e)=>{console.log(cell.row.allCells[0].value);}}>
        //       {cell.row.values.name}
        //     </button>
        //   )
    },
    {
        Header:'Person Name',
        Footer:'Person Name',
        accessor:'personName'
    },
    {
        Header:'Contact',
        Footer:'Contact',
        accessor:'contact'
    },
    {
        Header:'City',
        Footer:'City',
        accessor:'city',
        Cell: ({ cell }) => {
            console.log(cell.value.district.name)
            return cell.value.name//<div> {cell.value.name}, {cell.value.district.name}, {cell.value.district.state.name}</div>
        }   
    },
    {
        Header:'Component Facility',
        Footer:'Component Facility',
        accessor:'facility'
    }
    // {
    //     Header:'District',
    //     Footer:'District',
    //     accessor:'city.district',
    //     Cell: ({ cell }) => {
    //         console.log(cell.value.name)
    //         //return cell.value.name
    //     }   
    // }


]

// export const COLUMNS=[
//     {
//         Header:'Id',
//         Footer:'Id',
//         accessor:'id'
//     },
//     {
//         Header:'First Name',
//         Footer:'First Name',
//         accessor:'first_name'
//     },
//     {
//         Header:'Last Name',
//         Footer:'Last Name',
//         accessor:'last_name'
//     },
//     {
//         Header:'Date of Birth',
//         Footer:'Date of Birth',
//         accessor:'date_of_birth'
//     },
//     {
//         Header:'Country',
//         Footer:'Country',
//         accessor:'country'
//     },
//     {
//         Header:'Phone',
//         Footer:'Phone',
//         accessor:'phone'
//     }

// ]