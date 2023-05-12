import { useEffect, useState } from "react";
import Role from "../class/Role";
import RoleSpecification from "../component/RoleSpecification";
import RoleServiceSpecification from "../component/RoleServiceSpecification";
import RoleService from "../class/RoleService";
function RootsData({ rolesData, roleServicesData }) {
    const [selectedRole, setSelectedRole] = useState();
    const [selectedRoleData, setSelectedRoleData] = useState(new Role());
    const [selectedRoleServiceData, setSelectedRoleServiceData] = useState(new RoleService());

    useEffect(() => {
        const roleData = rolesData?.get(selectedRole);
        if(roleData!=undefined && Array.from(rolesData?.keys()) != undefined && selectedRoleData !=undefined){
            setSelectedRoleData(roleData);
        }

        const roleServiceData = roleServicesData?.get(selectedRole);
        if(roleServiceData!=undefined && Array.from(roleServicesData?.keys()) != undefined && selectedRoleServiceData !=undefined){
            setSelectedRoleServiceData(roleServiceData);
        }

      }, [selectedRole, rolesData, roleServicesData]);
 
    return (
        <div className="rolesData">
            <div className="roleTabList">
                {Array.from(rolesData?.keys() || []).map((item) => (
                    <button className="roleTab simple_border grayBox" key={item} onClick={()=>setSelectedRole(item)}>{item}</button>
                ))}
            </div>
            <div style={{display:"flex"}}>
                <RoleSpecification data={selectedRoleData}/>
                <RoleServiceSpecification data={selectedRoleServiceData}/>
            </div>
            
        </div>
      );          
  }
export default RootsData;
